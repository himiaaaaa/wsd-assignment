import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";
import * as emailController from "./EmailController.js"

const app = new Hono();

app.get("/", emailController.showForm);

app.post("/", emailController.addEmail)

export default app;




