//Monta as aplicação HTTP e suas rotas

import { Hono } from "hono";
import { errorHandler } from "./modules/shared/http/error-handler";
import { createProductModule } from "./modules/products/product.module";

export function createApp() {
    const app = new Hono;

    app.onError(errorHandler);

    app.get("/health", (c) => {
        return c.json({status: "ok"});
    });

    const products = createProductModule();

    app.route("/api/v1/products", products.routes);

    return app;
}