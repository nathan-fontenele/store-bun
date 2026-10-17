import { Hono } from "hono";
import { ProductController } from "../controller/product.controller";
import { CreateProdutcUseCase } from "../../application/use-cases/create-product.use-case";
import { InMemoryProductRepository } from "../../infrastructure/repositories/in-memory-product.repository";

const repository = new InMemoryProductRepository();
const useCase = new CreateProdutcUseCase(repository);
const controller = new ProductController(useCase);

export const productRoutes = new Hono();

productRoutes.post("/", controller.create);