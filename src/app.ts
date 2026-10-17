//Monta as aplicação HTTP e suas rotas

import { Hono } from "hono";
import { productRoutes } from "./modules/products/api/routes/product.routes";

export const app = new Hono();

app.get("/health", (c) => {
    return c.json({
        status: "ok",
        timestamp: new Date().toISOString(),
    });
});

app.route("/api/v1/products", productRoutes);