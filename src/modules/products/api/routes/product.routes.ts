import { Hono } from "hono";
import type { ProductController } from "../controller/product.controller";

export function createProductRoutes(controller: ProductController) {
  const routes = new Hono();

  routes.post("/", controller.create);

  return routes;
}
