//3.4.1 exercises 
/* const handleRequest = (request) => {

  let message = "Unable to comply...";
  if (request.method === "GET") {
    message = "Retrieving data...";
  } else if (request.method === "POST") {
    message = "Posting data...";
  } 

  return new Response(message);
};

Deno.serve(handleRequest); */

//3.4.2 exercises
const handleRequest = (request) => {

  return new Response(`You made a request with method ${request.method}`)
  
}

Deno.serve(handleRequest)