/* 
//3.3.1 exercises - responding with the path
const handleRequest = (request) => {
    const url = new URL(request.url)

    return new Response(`You requested the path ${url.pathname}`);
};

Deno.serve(handleRequest); */


////3.3.2 exercises - yksi, kaksi, pong
const handleRequest = (request) => {
    const url = new URL(request.url)

    let message = null
    if(url.pathname === "/one"){
        message = "yksi"
    } else if(url.pathname === "/two"){
        message = "kaksi"
    } else {
        message = "pong"
    }

    return new Response(message);
};

Deno.serve(handleRequest);

