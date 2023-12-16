import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";
import { Eta } from "http://deno.land/x/eta@v3.1.0/src/index.ts";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` })

const app = new Hono()

const data = {
  title: "Hello view templates!",
  content: "This is text!"
}

app.get("/", async (c) => {
  return c.html(
    eta.render("index.eta", data)
  )
})

export default app




