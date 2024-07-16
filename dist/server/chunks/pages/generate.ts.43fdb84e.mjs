import { ProxyAgent, fetch } from 'undici';
import { createParser } from 'eventsource-parser';
import { sha256 } from 'js-sha256';

const model = "gpt-4-turbo";
const generatePayload = (apiKey, messages, temperature) => ({
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`
  },
  method: "POST",
  body: JSON.stringify({
    model,
    messages,
    temperature,
    stream: true
  })
});
const parseOpenAIStream = (rawResponse) => {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  if (!rawResponse.ok) {
    return new Response(rawResponse.body, {
      status: rawResponse.status,
      statusText: rawResponse.statusText
    });
  }
  const stream = new ReadableStream({
    async start(controller) {
      const streamParser = (event) => {
        if (event.type === "event") {
          const data = event.data;
          if (data === "[DONE]") {
            controller.close();
            return;
          }
          try {
            const json = JSON.parse(data);
            const text = json.choices[0].delta?.content || "";
            const queue = encoder.encode(text);
            controller.enqueue(queue);
          } catch (e) {
            controller.error(e);
          }
        }
      };
      const parser = createParser(streamParser);
      for await (const chunk of rawResponse.body)
        parser.feed(decoder.decode(chunk));
    }
  });
  return new Response(stream);
};

async function digestMessage(message) {
  if (typeof crypto !== "undefined" && crypto?.subtle?.digest) {
    const msgUint8 = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  } else {
    return sha256(message).toString();
  }
}
const generateSignature = async (payload) => {
  const { t: timestamp, m: lastMessage } = payload;
  const secretKey = "";
  const signText = `${timestamp}:${lastMessage}:${secretKey}`;
  return await digestMessage(signText);
};
const verifySignature = async (payload, sign) => {
  const payloadSign = await generateSignature(payload);
  return payloadSign === sign;
};

const apiKey = "sk-ZDk2vmmFVK9Xl9hYUjkupA5LaTDWDeyBr5K6uboJ1jlTBi6X";
const httpsProxy = "http://127.0.0.1:7890";
const baseUrl = "https://api.fe8.cn".trim().replace(/\/$/, "");
const post = async (context) => {
  const body = await context.request.json();
  const { sign, time, messages, pass, temperature } = body;
  if (!messages) {
    return new Response(JSON.stringify({
      error: {
        message: "No input text."
      }
    }), { status: 400 });
  }
  if (!await verifySignature({ t: time, m: messages?.[messages.length - 1]?.content || "" }, sign)) {
    return new Response(JSON.stringify({
      error: {
        message: "Invalid signature."
      }
    }), { status: 401 });
  }
  const initOptions = generatePayload(apiKey, messages, temperature);
  initOptions.dispatcher = new ProxyAgent(httpsProxy);
  const response = await fetch(`${baseUrl}/v1/chat/completions`, initOptions).catch((err) => {
    console.error(err);
    return new Response(JSON.stringify({
      error: {
        code: err.name,
        message: err.message
      }
    }), { status: 500 });
  });
  return parseOpenAIStream(response);
};

const generate = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  post
}, Symbol.toStringTag, { value: 'Module' }));

export { generate as a, generateSignature as g, model as m };
