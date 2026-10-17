import type { Context } from "hono";
import type { CreateProductUseCase } from "../../application/use-cases/create-product.use-case";
import { createProductSchema } from './../schemas/create-product.schema';

export class ProductController{
    constructor(
        private readonly createProduct: CreateProductUseCase,
    ){}

    create = async (c: Context) => {
        const body = await c.req.json().catch(() => null);
        const parsed = createProductSchema.safeParse(body);

        if (!parsed.success) {
            return c.json({
                error: "VALIDATION_ERROR",
                details: parsed.error.flatten(),
            }, 400)
        }

        const product = await this.createProduct.execute(parsed.data);

        return (c.json(product, 201));
    }
}