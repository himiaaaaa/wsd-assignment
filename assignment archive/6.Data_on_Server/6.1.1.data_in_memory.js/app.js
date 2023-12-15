import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";

const app = new Hono()

let number = 3
let message = ""

app.get("/", (c) => {
  message = number--;
  if(number < 0){
    message = "Kaboom!"
  }
  return c.text(message)
})

export default app




