import * as z from "zod";

export const registerSchema = z.object({
    email: z.string().trim().email(),
    password: z.string().trim().min(6).max(25),
    confirmPassword: z.string().trim().min(6).max(255),
})  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], 
  });

export const loginSchema = z.object({
    email: z.string().trim().email(),
    password: z.string().trim().min(6).max(25),
})  