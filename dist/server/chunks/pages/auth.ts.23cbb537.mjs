const post = async (context) => {
  await context.request.json();
  return new Response(JSON.stringify({
    code: 0 
  }));
};

export { post };
