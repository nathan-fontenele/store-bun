import { Product } from './../../domain/entities/product.entity';
import type { ProductRepository } from '../../domain/repository/product.repository'

interface CreateProductInput {
    name: string;
    price: number;
}

export class CreateProductUseCase {
    constructor (
        private readonly repository: ProductRepository,
    ){}

    async execute(input: CreateProductInput): Promise<Product> {
        const product = Product.create({
            id: crypto.randomUUID(),
            name: input.name,
            price: input.price,
        });

        await this.repository.save(product);

        return product;
    }
}