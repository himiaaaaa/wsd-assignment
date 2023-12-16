import { Eta } from "https://deno.land/x/eta@v3.1.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const app = new Hono();

let visitCount = 0;

const data = {
  count: visitCount,
};

app.get("/count", (c) => {
  data.count++;
  return c.html(eta.render("index.eta", data))
});

export default app;





