const handleRequest = (request) => {
  const url = new URL(request.url);
  const params = url.searchParams;
  const page = params.get("page") ?? null
  const count = params.get("count") ?? null
  return new Response(`${page} ${count}`);
};

Deno.serve(handleRequest);



