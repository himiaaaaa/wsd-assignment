import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";
import * as storeService from "./store.js"

const app = new Hono()

app.get("/", (c) => {
  console.log(c.req.query)
  if(c.req.query("store")){
    const store = storeService.setStore(c.req.query("store"))
    return c.text(`Store: ${store}`)
  } else {
    const store = storeService.getStore()
    return c.text(`Store: ${store}`)
  }
})

export default app




