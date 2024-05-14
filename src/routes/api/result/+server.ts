import path from "path";
import fs from "fs/promises";
import {fail, type RequestHandler} from "@sveltejs/kit";

export const POST = (async ({ request, url }) => {
    try {
        const data = Object.fromEntries(await request.formData())
        const folderPath = path.join( process.cwd(), "data", data.participant as string)
        const filePath = path.join( folderPath, `survey.json` );
        await fs.mkdir(folderPath, { recursive: true });
        await fs.writeFile(filePath, data.dict as string);
        return new Response("Success!")
    } catch (err) {
        throw fail(500, { err: err })
    }
}) satisfies RequestHandler;