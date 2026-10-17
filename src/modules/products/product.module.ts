import { CreateProductUseCase } from "./application/use-cases/create-product.use-case";
import { InMemoryProductRepository } from "./infrastructure/repositories/in-memory-product.repository";
import { ProductController } from "./api/controller/product.controller";
import { createProductRoutes } from "./api/routes/product.routes";

export function createProductModule(){
    const repository = new InMemoryProductRepository();

    const createProductUseCase = new CreateProductUseCase(
        repository,
    )

    const controller = new ProductController(
        createProductUseCase,
    )

    const routes = createProductRoutes(controller);

    return {routes};
}