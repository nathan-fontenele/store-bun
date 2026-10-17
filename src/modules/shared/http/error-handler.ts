import type { ErrorHandler } from "hono";
import { AppError } from "../errors/app.error";
import { InvalidProductPriceError } from "../../products/domain/error/invalid-product-price.error";

export const errorHandler: ErrorHandler = (error, c) => {
    if (error instanceof AppError) {
        return c.json({
            code: error.code,
            message: error.message,
        }, 400);
    }

    if (error instanceof InvalidProductPriceError) {
        return c.json({
            code: error.code,
            message: error.message,
        }, 422);
    }

    console.log(error);

    return c.json({
        code: "INTERNAL_SERVER_ERROR",
        message: "An unexpected error occurred."
    }, 500);
}