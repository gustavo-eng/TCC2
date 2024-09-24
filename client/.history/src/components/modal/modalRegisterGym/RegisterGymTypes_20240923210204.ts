import { z } from 'zod';

export const registerGym  = z.object({
    sensei: z.string().min(3, {message: 'Minimo 3 caracteres'}),
    name: z.string().min(3, {message: 'Minimo 3 caracteres'}),
    email: z.string().email({message: 'Deve ser um email válido'}),
    password: z.string().min(4, {message: 'Minimo 4 caracteres'}),

})