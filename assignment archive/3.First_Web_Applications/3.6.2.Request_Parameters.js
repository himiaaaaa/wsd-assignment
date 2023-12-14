const handleRequest = (request) => {
  const url = new URL(request.url);
  const params = url.searchParams;
  const title = params.get("title") ?? "princess"
  const name = params.get("name") ?? "Tove"
  return new Response(`Once upon a time, there was a ${title} called ${name}.`);
};

Deno.serve(handleRequest);



