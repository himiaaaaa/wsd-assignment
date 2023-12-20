import { Eta } from "https://deno.land/x/eta@v3.1.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";
import {
  getCookie,
  setCookie,
} from "https://deno.land/x/hono@v3.7.4/helper.ts";

const app = new Hono();

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

app.get("/", (c) => {
    const data = {
        name: getCookie(c, "name")
    }
    return c.html(eta.render("index.eta", data))
})

app.post("/", async(c) => {
    const body = await c.req.parseBody()
    await setCookie(c, "name", body.name);

    return c.redirect("/")
})

export default app;




