import { z } from 'zod';

export const myFprjSchema = z.object({
    president: z.string({message: "Deve ser caracteres "}).min(4, {message: "Minimo 4 caracteres"}).max(255, {message: "Máximo 255 caracteres"}).optional(),
    email: z.string({message: "Deve ser caracteres "}).optional(),
    phone: z.any().optional(),
    password: z.string({message: "Deve ser caracteres "}).optional()
});

export type updateFprj = z.infer<typeof myFprjSchema>;