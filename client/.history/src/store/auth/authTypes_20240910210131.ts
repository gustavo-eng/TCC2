import { z } from 'zod';

export const authLoginSchema = z.object({
    email: z.string().email({message: 'Type email invalid'}),
    password: z.string({message: 'Type password invalid'})
});

