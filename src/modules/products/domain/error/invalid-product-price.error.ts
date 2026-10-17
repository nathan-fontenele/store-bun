export class InvalidProductPriceError extends Error {
    readonly code = "INVALID_PRODUCT_PRICE";

    constructor() {
        super("Product price must be greater than or equal to zero.");
        this.name = "InvalidProductPriceError.";
    }
}