import { z } from 'zod';

export const registerGymSchema  = z.object({
    sensei: z.string().min(3, {message: 'Minimo 3 caracteres'}),
    name: z.string().min(3, {message: 'Minimo 3 caracteres'}),
    email: z.string().email({message: 'Deve ser um email válido'}),
    password: z.string().min(4, {message: 'Minimo 4 caracteres'}),
    neighborhood: z.string().min(3 , {message: "Minimo 3 caracteres"}),
    street: z.string().min(3, {message: "Minimo 3 caracteres"}),
    number: z.string({message: "Deve ser um numero"}),
    city: z.string({message: "Deve ser um texto"}),
    cnpj: z.string({message: "Deve ser um texto"})
});

export type registerGym = z.infer<typeof registerGymSchema>