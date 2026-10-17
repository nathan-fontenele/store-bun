//Monta as aplicação HTTP e suas rotas

import { Hono } from "hono";

export const app = new Hono();

app.get("/health", (c) => {
    return c.json({
        status: "ok",
        timestamp: new Date().toISOString(),
    });
});