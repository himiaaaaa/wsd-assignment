import { Eta } from "https://deno.land/x/eta@v3.1.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";
import {
  getSignedCookie,
  setSignedCookie,
} from "https://deno.land/x/hono@v3.7.4/helper.ts";

const app = new Hono();

const sessionCounts = new Map()

const secret = "secret"

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const getAndIncrementCount = (sessionId) => {
    let count = sessionCounts.get(sessionId) ?? 0
    count++
    sessionCounts.set(sessionId, count)
    return count
}

app.get("/", async(c) => {
    const sessionId = await getSignedCookie(c, secret, "sessionId") ?? crypto.randomUUID()
    await setSignedCookie(c, "sessionId", sessionId, secret, {
        path: "/"
    })
    const data = {
        count: await getAndIncrementCount(sessionId)
    }
    return c.html(eta.render("index.eta", data))
})

export default app;




