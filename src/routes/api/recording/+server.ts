import path from 'path'
import fs from 'fs/promises'
import { fail, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST = (async ({ request, url }) => {
    try {
        const data = Object.fromEntries(await request.formData())
        const folderPath = process.env.development
            ? path.join(process.cwd(), "data", data.participant as string)
            : path.join("data", data.participant as string)
        const filePath = path.join(
            folderPath,
            `${data.filename as string}.${((data.video as Blob).type.split("/")[1])}`
        );
        await fs.mkdir(folderPath, {recursive: true})
        await fs.writeFile(filePath, Buffer.from(await (data.video as Blob).arrayBuffer()))
        return new Response(String({path: filePath}))
    } catch (err) {
        throw fail(500, { err: err })
    }
}) satisfies RequestHandler;