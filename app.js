import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";

const app = new Hono();

app.get("/", (c) => {
  let operation = c.req.query("operation")
  let num1 = Number(c.req.query("number1"))
  let num2 = Number(c.req.query("number2"))

  if(operation === "sum" && num1 && num2){
    return c.text(`${num1 + num2}`)
  } else if (operation === "difference" && num1 && num2) {
    return c.text(`${num1 - num2}`)
  } else {
    return c.text("Invalid parameters.")
  }
});

export default app;



