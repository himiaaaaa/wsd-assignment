const handleRequest = (request) => {
  const url = new URL(request.url)
  const params = url.searchParams
  const day = params.get("heroOfTheDay")

  let message = ""
  if(request.method === "GET" && url.pathname === "/congrats"){
    message = `Congrats, ${day}!`
  } else if (request.method === "GET" && url.pathname === "/") {
    message = "Hi there!" 
  } else if (request.method === "DIDNOT" && url.pathname === "/lol") {
    message = "What kind of tree fits in your hand? A palm tree."
  } else {
    message = "Not here."
  }

  return new Response(message)
};

Deno.serve(handleRequest);



