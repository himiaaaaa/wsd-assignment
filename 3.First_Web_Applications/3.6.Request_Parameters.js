const handleRequest = (request) => {
    const url = new URL(request.url)
    const params = url.searchParams
  
    const operation = params.get("operation")
    const number1 = Number(params.get("number1"))
    const number2 = Number(params.get("number2"))
  
    if(operation === "sum"){
      return new Response(`${number1 + number2}`)
    } else if (operation === "product"){
      return new Response(`${number1 * number2}`)
    } else {
      return new Response("Invalid parameters.")
    }
  }
  
Deno.serve(handleRequest)