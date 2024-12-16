import * as z from "zod";

export const productSchema = z.object({
    title: z.string().min(6, "Tối thiểu 6 ký tự"),
    price: z.number({message: "Hãy điền số"}),
    description: z.string().optional()
})