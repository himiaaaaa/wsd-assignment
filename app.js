const handleRequest = (request) => {
  return new Response("Hello world!");
};

Deno.serve(handleRequest);

//deno fmt app.js
/* 
let x = 1;
let b = 2;
let c = 3;
let d = 4;
console.log(x, b, c, d);
*/

//deno lint app.js
/* const a = 1;

if (a === 1) {
  console.log("Hello!");
} */