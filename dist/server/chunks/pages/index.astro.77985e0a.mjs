/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderComponent, e as renderHead, f as renderSlot, u as unescapeHTML, F as Fragment, m as maybeRenderHead, _ as __astro_tag_component__ } from '../astro.0694af69.mjs';
import { m as model, g as generateSignature } from './generate.ts.43fdb84e.mjs';
/* empty css                           */import { ssr, ssrHydrationKey, escape, createComponent as createComponent$1, ssrElement, mergeProps as mergeProps$1, ssrAttribute } from 'solid-js/web';
import { createSignal, mergeProps, createUniqueId, createMemo, createEffect, Show, onMount, onCleanup, Index } from 'solid-js';
import { useClipboard, useEventListener, useThrottleFn } from 'solidjs-use';
import MarkdownIt from 'markdown-it';
import mdKatex from 'markdown-it-katex';
import mdHighlight from 'markdown-it-highlightjs';
import * as slider from '@zag-js/slider';
import { useMachine, normalizeProps } from '@zag-js/solid';

const pwaInfo = {"pwaInDevEnvironment":false,"webManifest":{"href":"/manifest.webmanifest","useCredentials":false,"linkTag":"<link rel=\"manifest\" href=\"/manifest.webmanifest\">"},"registerSW":{"inline":true,"inlinePath":"/sw.js","registerPath":"/registerSW.js","type":"classic","scope":"/","scriptTag":"<script id=\"vite-plugin-pwa:inline-sw\">if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/sw.js', { scope: '/' })})}</script>"}};

const $$Astro$5 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,viewport-fit=cover">
    <link rel="icon" type="image/svg+xml" href="/icon.svg">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180">
    <link rel="mask-icon" href="/icon.svg" color="#FFFFFF">
    <meta name="theme-color" content="#212129">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <title>${title}</title>
    <meta name="description" content="A simple blog">
    ${"" }
    ${pwaInfo && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(pwaInfo.webManifest.linkTag)}` })}`}
    ${pwaInfo && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(pwaInfo.registerSW.scriptTag)}` })}`}
  ${renderHead($$result)}</head>
  <body>
    ${renderSlot($$result, $$slots["default"])}
  

</body></html>`;
}, "/Users/weijianming/Desktop/new-work/chatgpt-demo/src/layouts/Layout.astro");

const $$Astro$4 = createAstro();
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Logo;
  return renderTemplate`${maybeRenderHead($$result)}<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 32 32"><g fill="none"><path fill="#F8312F" d="M5 3.5a1.5 1.5 0 0 1-1 1.415V12l2.16 5.487L4 23c-1.1 0-2-.9-2-1.998v-7.004a2 2 0 0 1 1-1.728V4.915A1.5 1.5 0 1 1 5 3.5Zm25.05.05c0 .681-.44 1.26-1.05 1.468V12.2c.597.347 1 .994 1 1.73v7.01c0 1.1-.9 2-2 2l-2.94-5.68L28 11.93V5.018a1.55 1.55 0 1 1 2.05-1.468Z"></path><path fill="#FFB02E" d="M11 4.5A1.5 1.5 0 0 1 12.5 3h7a1.5 1.5 0 0 1 .43 2.938c-.277.082-.57.104-.847.186l-3.053.904l-3.12-.908c-.272-.08-.56-.1-.832-.18A1.5 1.5 0 0 1 11 4.5Z"></path><path fill="#CDC4D6" d="M22.05 30H9.95C6.66 30 4 27.34 4 24.05V12.03C4 8.7 6.7 6 10.03 6h11.95C25.3 6 28 8.7 28 12.03v12.03c0 3.28-2.66 5.94-5.95 5.94Z"></path><path fill="#212121" d="M9.247 18.5h13.506c2.33 0 4.247-1.919 4.247-4.25A4.257 4.257 0 0 0 22.753 10H9.247A4.257 4.257 0 0 0 5 14.25a4.257 4.257 0 0 0 4.247 4.25Zm4.225 7.5h5.056C19.34 26 20 25.326 20 24.5s-.66-1.5-1.472-1.5h-5.056C12.66 23 12 23.674 12 24.5s.66 1.5 1.472 1.5Z"></path><path fill="#00A6ED" d="M10.25 12C9.56 12 9 12.56 9 13.25v2.5a1.25 1.25 0 1 0 2.5 0v-2.5c0-.69-.56-1.25-1.25-1.25Zm11.5 0c-.69 0-1.25.56-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0v-2.5c0-.69-.56-1.25-1.25-1.25Z"></path></g></svg>`;
}, "/Users/weijianming/Desktop/new-work/chatgpt-demo/src/components/Logo.astro");

const $$Astro$3 = createAstro();
const $$Themetoggle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Themetoggle;
  return renderTemplate`${maybeRenderHead($$result)}<div id="themeToggle" class="flex items-center justify-center w-10 h-10 rounded-md transition-colors hover:bg-slate/10 astro-KXYEDVG6">
  <svg class="theme_toggle_svg astro-KXYEDVG6" width="1.2em" height="1.2em" viewBox="0 0 24 24" color="#858585" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor">
    <mask id="myMask" class="astro-KXYEDVG6">
      <rect x="0" y="0" width="100%" height="100%" fill="white" class="astro-KXYEDVG6"></rect>
      <circle class="theme_toggle_circle1 astro-KXYEDVG6" fill="black" cx="100%" cy="0%"></circle>
    </mask>
    <circle class="theme_toggle_circle2 astro-KXYEDVG6" cx="12" cy="12" fill="#858585" mask="url(#myMask)"></circle>
    <g class="theme_toggle_g astro-KXYEDVG6" stroke="currentColor" opacity="1">
      <line x1="12" y1="1" x2="12" y2="3" class="astro-KXYEDVG6"></line>
      <line x1="12" y1="21" x2="12" y2="23" class="astro-KXYEDVG6"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" class="astro-KXYEDVG6"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" class="astro-KXYEDVG6"></line>
      <line x1="1" y1="12" x2="3" y2="12" class="astro-KXYEDVG6"></line>
      <line x1="21" y1="12" x2="23" y2="12" class="astro-KXYEDVG6"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" class="astro-KXYEDVG6"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" class="astro-KXYEDVG6"></line>
    </g>
  </svg>
</div>`;
}, "/Users/weijianming/Desktop/new-work/chatgpt-demo/src/components/Themetoggle.astro");

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<header>
  <div class="fb items-center">
    ${renderComponent($$result, "Logo", $$Logo, {})}
    ${renderComponent($$result, "Themetoggle", $$Themetoggle, {})}
  </div>
  <div class="fi mt-2">
    <span class="gpt-title">ChatGPT</span>
    <span class="gpt-subtitle">Demo</span>
  </div>
  <p mt-1 op-60>Based on OpenAI API (${model}).</p>
</header>`;
}, "/Users/weijianming/Desktop/new-work/chatgpt-demo/src/components/Header.astro");

const $$Astro$1 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead($$result)}<footer>
  <p mt-8 text-xs op-30>
    <span pr-1>Made by</span>
    <a b-slate-link href="https://ddiu.io" target="_blank">
      Diu
    </a>
    <span px-1>|</span>
    <a b-slate-link href="https://github.com/ddiu8081/chatgpt-demo" target="_blank">
      Source Code
    </a>
  </p>
</footer>`;
}, "/Users/weijianming/Desktop/new-work/chatgpt-demo/src/components/Footer.astro");

const _tmpl$$9 = ["<svg", " xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M8 20v-5h2v5h9v-7H5v7h3zm-4-9h16V8h-6V4h-4v4H4v3zM3 21v-8H2V7a1 1 0 0 1 1-1h5V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3h5a1 1 0 0 1 1 1v6h-1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z\"></path></svg>"];
const _arrow_function$8 = () => {
  return ssr(_tmpl$$9, ssrHydrationKey());
};

__astro_tag_component__(_arrow_function$8, "@astrojs/solid-js");

const _tmpl$$8 = ["<svg", " xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 32 32\"><path d=\"M25.95 7.65l.005-.004c-.092-.11-.197-.206-.293-.312c-.184-.205-.367-.41-.563-.603c-.139-.136-.286-.262-.43-.391c-.183-.165-.366-.329-.558-.482c-.16-.128-.325-.247-.49-.367c-.192-.14-.385-.277-.585-.406a13.513 13.513 0 0 0-.533-.324q-.308-.179-.625-.341c-.184-.094-.37-.185-.56-.27c-.222-.1-.449-.191-.678-.28c-.19-.072-.378-.145-.571-.208c-.246-.082-.498-.15-.75-.217c-.186-.049-.368-.102-.556-.143c-.29-.063-.587-.107-.883-.15c-.16-.023-.315-.056-.476-.073A12.933 12.933 0 0 0 6 7.703V4H4v8h8v-2H6.811A10.961 10.961 0 0 1 16 5a11.111 11.111 0 0 1 1.189.067c.136.015.268.042.403.061c.25.037.501.075.746.128c.16.035.315.08.472.121c.213.057.425.114.633.183c.164.054.325.116.486.178c.193.074.384.15.57.235c.162.072.32.15.477.23q.268.136.526.286c.153.09.305.18.453.276c.168.11.33.224.492.342c.14.102.282.203.417.312c.162.13.316.268.47.406c.123.11.248.217.365.332c.167.164.323.338.479.512A10.993 10.993 0 1 1 5 16H3a13 13 0 1 0 22.95-8.35z\" fill=\"currentColor\"></path></svg>"];
const _arrow_function$7 = () => {
  return ssr(_tmpl$$8, ssrHydrationKey());
};

__astro_tag_component__(_arrow_function$7, "@astrojs/solid-js");

const _tmpl$$7 = ["<div", " class=\"py-2 -mx-4 px-4 transition-colors md:hover:bg-slate/3\"><div class=\"", "\"><div class=\"", "\"></div><div class=\"message prose break-words overflow-hidden\">", "</div></div><!--#-->", "<!--/--></div>"],
  _tmpl$2$4 = ["<div", " class=\"fie px-3 mb-2\"><div class=\"gpt-retry-btn\"><!--#-->", "<!--/--><span>Regenerate</span></div></div>"];
const _arrow_function$6 = ({
  role,
  message,
  showRetry,
  onRetry
}) => {
  const roleClass = {
    system: "bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300",
    user: "bg-gradient-to-r from-purple-400 to-yellow-400",
    assistant: "bg-gradient-to-r from-yellow-200 via-green-200 to-green-300"
  };
  const [source] = createSignal("");
  const {
    copy,
    copied
  } = useClipboard({
    source,
    copiedDuring: 1e3
  });
  useEventListener("click", e => {
    const el = e.target;
    let code = null;
    if (el.matches("div > div.copy-btn")) {
      code = decodeURIComponent(el.dataset.code);
      copy(code);
    }
    if (el.matches("div > div.copy-btn > svg")) {
      code = decodeURIComponent(el.parentElement?.dataset.code);
      copy(code);
    }
  });
  const htmlString = () => {
    const md = MarkdownIt({
      linkify: true,
      breaks: true
    }).use(mdKatex).use(mdHighlight);
    const fence = md.renderer.rules.fence;
    md.renderer.rules.fence = (...args) => {
      const [tokens, idx] = args;
      const token = tokens[idx];
      const rawCode = fence(...args);
      return `<div relative>
      <div data-code=${encodeURIComponent(token.content)} class="copy-btn gpt-copy-btn group">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z" /><path fill="currentColor" d="M4 18H2V4a2 2 0 0 1 2-2h14v2H4Z" /></svg>
            <div class="group-hover:op-100 gpt-copy-tips">
              ${copied() ? "Copied" : "Copy"}
            </div>
      </div>
      ${rawCode}
      </div>`;
    };
    if (typeof message === "function") return md.render(message());else if (typeof message === "string") return md.render(message);
    return "";
  };
  return ssr(_tmpl$$7, ssrHydrationKey(), `flex gap-3 rounded-lg ${role === "user" ? "op-75" : ""}`, `shrink-0 w-7 h-7 mt-4 rounded-full op-80 ${escape(roleClass[role], true)}`, htmlString(), showRetry?.() && onRetry && ssr(_tmpl$2$4, ssrHydrationKey(), escape(createComponent$1(_arrow_function$7, {}))));
};

__astro_tag_component__(_arrow_function$6, "@astrojs/solid-js");

const _tmpl$$6 = ["<svg", " xmlns=\"http://www.w3.org/2000/svg\" width=\"1rem\" height=\"1rem\" viewBox=\"0 0 32 32\"><path fill=\"currentColor\" d=\"M30 15h-2.05A12.007 12.007 0 0 0 17 4.05V2h-2v2.05A12.007 12.007 0 0 0 4.05 15H2v2h2.05A12.007 12.007 0 0 0 15 27.95V30h2v-2.05A12.007 12.007 0 0 0 27.95 17H30ZM17 25.95V22h-2v3.95A10.017 10.017 0 0 1 6.05 17H10v-2H6.05A10.017 10.017 0 0 1 15 6.05V10h2V6.05A10.017 10.017 0 0 1 25.95 15H22v2h3.95A10.017 10.017 0 0 1 17 25.95Z\"></path></svg>"];
const _arrow_function$5 = () => {
  return ssr(_tmpl$$6, ssrHydrationKey());
};

__astro_tag_component__(_arrow_function$5, "@astrojs/solid-js");

const _tmpl$$5 = ["<svg", " xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z\"></path></svg>"];
const _arrow_function$4 = () => {
  return ssr(_tmpl$$5, ssrHydrationKey());
};

__astro_tag_component__(_arrow_function$4, "@astrojs/solid-js");

const _tmpl$$4 = ["<div class=\"text-xs op-50 fb items-center\"><span>Temperature</span>", "</div>"];
const Slider = selectProps => {
  const props = mergeProps({
    min: 0,
    max: 2,
    step: 0.01,
    disabled: false
  }, selectProps);
  const formatSliderValue = value => {
    if (!value) return 0;
    return Number.isInteger(value) ? value : parseFloat(value.toFixed(2));
  };
  const [state, send] = useMachine(slider.machine({
    id: createUniqueId(),
    value: props.value(),
    min: props.min,
    max: props.max,
    step: props.step,
    disabled: props.disabled,
    onChange: details => {
      details && details.value && props.setValue(formatSliderValue(details.value));
    }
  }));
  const api = createMemo(() => slider.connect(state, send, normalizeProps));
  return ssrElement("div", api().rootProps, () => [ssr(_tmpl$$4, ssrElement("output", api().outputProps, () => escape(formatSliderValue(api().value)), false)), ssrElement("div", mergeProps$1({
    "class": "mt-2"
  }, () => api().controlProps), () => [ssrElement("div", api().trackProps, () => ssrElement("div", api().rangeProps, undefined, false), false), ssrElement("div", api().thumbProps, () => ssrElement("input", api().hiddenInputProps, undefined, false), false)], false)], true);
};

__astro_tag_component__(Slider, "@astrojs/solid-js");

const _tmpl$$3 = ["<div", " class=\"op-25\">Not Defined</div>"],
  _tmpl$2$3 = ["<div", "><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--></div>"],
  _tmpl$3$3 = ["<div", ">", "</div>"];
const SettingsNotDefined = () => {
  return ssr(_tmpl$$3, ssrHydrationKey());
};
const _arrow_function$3 = ({
  settings,
  editing,
  value,
  setValue
}) => {
  if (!settings.name || !settings.type) return null;
  const sliderSettings = settings;
  return ssr(_tmpl$2$3, ssrHydrationKey(), editing() && escape(createComponent$1(Slider, {
    setValue: setValue,
    get max() {
      return sliderSettings.max;
    },
    value: value,
    get min() {
      return sliderSettings.min;
    },
    get step() {
      return sliderSettings.step;
    }
  })), !editing() && value() && ssr(_tmpl$3$3, ssrHydrationKey(), escape(value())), !editing() && !value() && escape(createComponent$1(SettingsNotDefined, {})));
};

__astro_tag_component__(_arrow_function$3, "@astrojs/solid-js");

const _tmpl$$2 = ["<span", " class=\"sys-edit-btn p-1 rd-50%\"> <!--#-->", "<!--/--> </span>"],
  _tmpl$2$2 = ["<div", "><div class=\"fi gap-1 op-50 dark:op-60\"><!--#-->", "<!--/--><span>System Role ( Temp = <!--#-->", "<!--/--> ) : </span></div><div class=\"mt-1\">", "</div></div>"],
  _tmpl$3$2 = ["<span", " class=\"sys-edit-btn\"><!--#-->", "<!--/--><span>Add System Role</span></span>"],
  _tmpl$4 = ["<div", "><div class=\"fi gap-1 op-50 dark:op-60\"><!--#-->", "<!--/--><span>System Role:</span></div><p class=\"my-2 leading-normal text-sm op-50 dark:op-60\">Gently instruct the assistant and set the behavior of the assistant.</p><div><textarea placeholder=\"You are a helpful assistant, answer as concisely as possible....\" autocomplete=\"off\" autofocus rows=\"3\" gen-textarea></textarea></div><div class=\"w-full fi fb\"><button gen-slate-btn>Set</button><div class=\"w-full ml-2\">", "</div></div></div>"],
  _tmpl$5 = ["<div", " class=\"my-4\"><!--#-->", "<!--/--><!--#-->", "<!--/--></div>"];
const _arrow_function$2 = props => {
  const [temperature, setTemperature] = createSignal(0.6);
  createEffect(() => {
    props.temperatureSetting(temperature());
  });
  return ssr(_tmpl$5, ssrHydrationKey(), escape(createComponent$1(Show, {
    get when() {
      return !props.systemRoleEditing();
    },
    get children() {
      return [createComponent$1(Show, {
        get when() {
          return props.currentSystemRoleSettings();
        },
        get children() {
          return ssr(_tmpl$2$2, ssrHydrationKey(), escape(createComponent$1(Show, {
            get when() {
              return props.canEdit();
            },
            get fallback() {
              return createComponent$1(_arrow_function$5, {});
            },
            get children() {
              return ssr(_tmpl$$2, ssrHydrationKey(), escape(createComponent$1(_arrow_function$4, {})));
            }
          })), escape(temperature()), escape(props.currentSystemRoleSettings()));
        }
      }), createComponent$1(Show, {
        get when() {
          return !props.currentSystemRoleSettings() && props.canEdit();
        },
        get children() {
          return ssr(_tmpl$3$2, ssrHydrationKey(), escape(createComponent$1(_arrow_function$5, {})));
        }
      })];
    }
  })), escape(createComponent$1(Show, {
    get when() {
      return props.systemRoleEditing() && props.canEdit();
    },
    get children() {
      return ssr(_tmpl$4, ssrHydrationKey(), escape(createComponent$1(_arrow_function$5, {})), escape(createComponent$1(_arrow_function$3, {
        settings: {
          name: "Temperature",
          type: "slider",
          min: 0,
          max: 2,
          step: 0.01
        },
        editing: () => true,
        value: temperature,
        setValue: setTemperature
      })));
    }
  })));
};

__astro_tag_component__(_arrow_function$2, "@astrojs/solid-js");

const _tmpl$$1 = ["<div", " class=\"my-4 px-4 py-3 border border-red/50 bg-red/10\"><!--#-->", "<!--/--><div class=\"text-red op-70 text-sm\">", "</div><!--#-->", "<!--/--></div>"],
  _tmpl$2$1 = ["<div", " class=\"text-red mb-1\">", "</div>"],
  _tmpl$3$1 = ["<div", " class=\"fie px-3 mb-2\"><div class=\"gpt-retry-btn border-red/50 text-red\"><!--#-->", "<!--/--><span>Regenerate</span></div></div>"];
const _arrow_function$1 = ({
  data,
  onRetry
}) => {
  return ssr(_tmpl$$1, ssrHydrationKey(), data.code && ssr(_tmpl$2$1, ssrHydrationKey(), escape(data.code)), escape(data.message), onRetry && ssr(_tmpl$3$1, ssrHydrationKey(), escape(createComponent$1(_arrow_function$7, {}))));
};

__astro_tag_component__(_arrow_function$1, "@astrojs/solid-js");

const _tmpl$ = ["<div", " class=\"", "\"><textarea", " placeholder=\"Enter something...\" autocomplete=\"off\" autofocus rows=\"1\" class=\"gen-textarea\"></textarea><button", " gen-slate-btn>Send</button><button title=\"Clear\"", " gen-slate-btn>", "</button></div>"],
  _tmpl$2 = ["<div", " my-6><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><div class=\"", "\"><div><button class=\"p-2.5 text-base\" title=\"stick to bottom\" type=\"button\"><div i-ph-arrow-line-down-bold></div></button></div></div></div>"],
  _tmpl$3 = ["<div", " class=\"gen-cb-wrapper\"><span>AI is thinking...</span><div class=\"gen-cb-stop\">Stop</div></div>"];
const _arrow_function = () => {
  let inputRef;
  const [currentSystemRoleSettings, setCurrentSystemRoleSettings] = createSignal("");
  const [systemRoleEditing, setSystemRoleEditing] = createSignal(false);
  const [messageList, setMessageList] = createSignal([]);
  const [currentError, setCurrentError] = createSignal();
  const [currentAssistantMessage, setCurrentAssistantMessage] = createSignal("");
  const [loading, setLoading] = createSignal(false);
  const [controller, setController] = createSignal(null);
  const [isStick, setStick] = createSignal(false);
  const [temperature, setTemperature] = createSignal(0.6);
  const temperatureSetting = value => {
    setTemperature(value);
  };
  const maxHistoryMessages = parseInt("9");
  createEffect(() => isStick() && smoothToBottom());
  onMount(() => {
    let lastPostion = window.scrollY;
    window.addEventListener("scroll", () => {
      const nowPostion = window.scrollY;
      nowPostion < lastPostion && setStick(false);
      lastPostion = nowPostion;
    });
    try {
      if (sessionStorage.getItem("messageList")) setMessageList(JSON.parse(sessionStorage.getItem("messageList")));
      if (sessionStorage.getItem("systemRoleSettings")) setCurrentSystemRoleSettings(sessionStorage.getItem("systemRoleSettings"));
      if (localStorage.getItem("stickToBottom") === "stick") setStick(true);
    } catch (err) {
      console.error(err);
    }
    window.addEventListener("beforeunload", handleBeforeUnload);
    onCleanup(() => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    });
  });
  const handleBeforeUnload = () => {
    sessionStorage.setItem("messageList", JSON.stringify(messageList()));
    sessionStorage.setItem("systemRoleSettings", currentSystemRoleSettings());
    isStick() ? localStorage.setItem("stickToBottom", "stick") : localStorage.removeItem("stickToBottom");
  };
  const smoothToBottom = useThrottleFn(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  }, 300, false, true);
  const instantToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "instant"
    });
  };
  const requestWithLatestMessage = async () => {
    setLoading(true);
    setCurrentAssistantMessage("");
    setCurrentError(null);
    const storagePassword = localStorage.getItem("pass");
    try {
      const controller2 = new AbortController();
      setController(controller2);
      const requestMessageList = messageList().slice(-maxHistoryMessages);
      if (currentSystemRoleSettings()) {
        requestMessageList.unshift({
          role: "system",
          content: currentSystemRoleSettings()
        });
      }
      const timestamp = Date.now();
      const response = await fetch("/api/generate", {
        method: "POST",
        body: JSON.stringify({
          messages: requestMessageList,
          time: timestamp,
          pass: storagePassword,
          sign: await generateSignature({
            t: timestamp,
            m: requestMessageList?.[requestMessageList.length - 1]?.content || ""
          }),
          temperature: temperature()
        }),
        signal: controller2.signal
      });
      if (!response.ok) {
        const error = await response.json();
        console.error(error.error);
        setCurrentError(error.error);
        throw new Error("Request failed");
      }
      const data = response.body;
      if (!data) throw new Error("No data");
      const reader = data.getReader();
      const decoder = new TextDecoder("utf-8");
      let done = false;
      while (!done) {
        const {
          value,
          done: readerDone
        } = await reader.read();
        if (value) {
          const char = decoder.decode(value);
          if (char === "\n" && currentAssistantMessage().endsWith("\n")) continue;
          if (char) setCurrentAssistantMessage(currentAssistantMessage() + char);
          isStick() && instantToBottom();
        }
        done = readerDone;
      }
    } catch (e) {
      console.error(e);
      setLoading(false);
      setController(null);
      return;
    }
    archiveCurrentMessage();
    isStick() && instantToBottom();
  };
  const archiveCurrentMessage = () => {
    if (currentAssistantMessage()) {
      setMessageList([...messageList(), {
        role: "assistant",
        content: currentAssistantMessage()
      }]);
      setCurrentAssistantMessage("");
      setLoading(false);
      setController(null);
      if (!("ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0)) inputRef.focus();
    }
  };
  const retryLastFetch = () => {
    if (messageList().length > 0) {
      const lastMessage = messageList()[messageList().length - 1];
      if (lastMessage.role === "assistant") setMessageList(messageList().slice(0, -1));
      requestWithLatestMessage();
    }
  };
  return ssr(_tmpl$2, ssrHydrationKey(), escape(createComponent$1(_arrow_function$2, {
    canEdit: () => messageList().length === 0,
    systemRoleEditing: systemRoleEditing,
    setSystemRoleEditing: setSystemRoleEditing,
    currentSystemRoleSettings: currentSystemRoleSettings,
    setCurrentSystemRoleSettings: setCurrentSystemRoleSettings,
    temperatureSetting: temperatureSetting
  })), escape(createComponent$1(Index, {
    get each() {
      return messageList();
    },
    children: (message, index) => createComponent$1(_arrow_function$6, {
      get role() {
        return message().role;
      },
      get message() {
        return message().content;
      },
      showRetry: () => message().role === "assistant" && index === messageList().length - 1,
      onRetry: retryLastFetch
    })
  })), currentAssistantMessage() && escape(createComponent$1(_arrow_function$6, {
    role: "assistant",
    message: currentAssistantMessage
  })), currentError() && escape(createComponent$1(_arrow_function$1, {
    get data() {
      return currentError();
    },
    onRetry: retryLastFetch
  })), escape(createComponent$1(Show, {
    get when() {
      return !loading();
    },
    fallback: () => ssr(_tmpl$3, ssrHydrationKey()),
    get children() {
      return ssr(_tmpl$, ssrHydrationKey(), `gen-text-wrapper ${systemRoleEditing() ? "op-50" : ""}`, ssrAttribute("disabled", systemRoleEditing(), true), ssrAttribute("disabled", systemRoleEditing(), true), ssrAttribute("disabled", systemRoleEditing(), true), escape(createComponent$1(_arrow_function$8, {})));
    }
  })), `fixed bottom-5 left-5 rounded-md hover:bg-slate/10 w-fit h-fit transition-colors active:scale-90 ${isStick() ? "stick-btn-on" : ""}`);
};

__astro_tag_component__(_arrow_function, "@astrojs/solid-js");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "ChatGPT API Demo" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<main>
    ${renderComponent($$result2, "Header", $$Header, {})}
    ${renderComponent($$result2, "Generator", _arrow_function, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/weijianming/Desktop/new-work/chatgpt-demo/src/components/Generator", "client:component-export": "default" })}
    ${renderComponent($$result2, "Footer", $$Footer, {})}
  </main>
` })}`;
}, "/Users/weijianming/Desktop/new-work/chatgpt-demo/src/pages/index.astro");

const $$file = "/Users/weijianming/Desktop/new-work/chatgpt-demo/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, index as i };
