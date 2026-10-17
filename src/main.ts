// Inicializa o processo e configura o server

import { createApp } from "./app";

const app = createApp();

const port = Number(Bun.env.PORT ?? 3000);

Bun.serve({
    port,
    fetch: app.fetch,
});

console.log(`Server runnning on http://localhost:${port}`);
