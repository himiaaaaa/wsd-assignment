import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";
import * as visits from "./visits.js";

const app = new Hono();

app.get("/", async(c) => {
  await visits.increaseVisits()
  return c.text("Hello world!")
})

app.get("/visits", async(c) => {
  const count = await visits.getVisits()
  return c.text(`Visit count: ${count}`)
})

export default app;




