import { z } from 'zod';

export const registerGymSchema  = z.object({
    sensei: z.string().min(3, {message: 'Minimo 3 caracteres'}).optional(),
    name: z.string().min(3, {message: 'Minimo 3 caracteres'}).optional(),
    email: z.string().email({message: 'Deve ser um email válido'}).optional(),
    password: z.string().min(4, {message: 'Minimo 4 caracteres'}).optional(),
    neighborhood: z.string().min(3 , {message: "Minimo 3 caracteres"}).optional(),
    street: z.string().min(3, {message: "Minimo 3 caracteres"}).optional(),
    number: z.number({message: "Deve ser um numero"}).optional(),
    city: z.string({message: "Deve ser um texto"}).optional(),
    cnpj: z.string({message: "Deve ser um texto"}).optional()
});

export type registerGym = z.infer<typeof registerGymSchema>