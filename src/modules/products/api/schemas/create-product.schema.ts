import {z} from "zod"

export const createProductSchema = z.object({
    name: z.string().trim().min(1),
    price: z.number().nonnegative(),
})