import { z } from 'zod';


export interface AuthState {
    user:  any | null; //todo Tipar melhor

}

export const authLoginSchema = z.object({
    email: z.string().email({message: 'Type email invalid'}),
    password: z.string({message: 'Type password invalid'})
});

export type AuthLogin = z.infer<typeof authLoginSchema>;