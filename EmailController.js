import { Eta } from "https://deno.land/x/eta@v3.1.0/src/index.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const validator = z.object({
    email: z.string().email()
})

const showForm = (c) => {
    return c.html(eta.render("index.eta"))
}

const addEmail = async(c) => {
    const body = await c.req.parseBody()
    const validationResult = validator.safeParse(body)
    if(!validationResult.success){
        return c.text("Not a valid email, try again.")
    }

    return c.text("Valid email, thank you!")
}

export { showForm, addEmail }