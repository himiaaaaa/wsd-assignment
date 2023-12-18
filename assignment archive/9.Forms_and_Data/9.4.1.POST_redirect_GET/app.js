import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";
import * as songController from "./songController.js"

const app = new Hono();

app.get("/", songController.listSong);

app.post("/songs", songController.addSongAndListSong)

export default app;




