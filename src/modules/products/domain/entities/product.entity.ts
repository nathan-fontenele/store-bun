export interface ProductProps{
    id: string,
    name: string,
    price: number
}

export class Product{
    private constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly price: number,
    ){}

    static create (props: ProductProps) : Product {
        if (!props.name.trim()){
            throw new Error("Product name is required.");
        }

        if (!Number.isFinite(props.price) || props.price < 0) {
            throw new Error ("Invalid product price.");
        }

        return new Product(
            props.id,
            props.name,
            props.price,
        );
    }
}