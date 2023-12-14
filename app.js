//3.5.1 exercise
/* const handleRequest = (request) => {
  const url = new URL(request.url);
  return new Response(`${request.method} request made to path ${url.pathname}`);
};

Deno.serve(handleRequest);
*/

//3.5.2 exercise
const handleRequest = (request) => {
  const url = new URL(request.url)

  if (url.pathname === "/secret" && request.method === "PEEK"){
    return new Response("Peeking at secret data...")
  } else {
    return new Response("There is nothing to see here...")
  }
}

Deno.serve(handleRequest)



