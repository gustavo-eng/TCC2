import { z } from 'zod';

export interface AuthState {
    user?:  User | null; //todo Tipar melhor
    loading?: boolean;
    error?: string | null;
    userPermission?: any;
    permissionError?: boolean | null;

}

export type AuthToken = {
    token: string | undefined | any;
  };

export const authLoginSchema = z.object({
    email: z.string().email({message: 'Type email invalid'}),
    password: z.string({message: 'Type password invalid'})
});

export const userSchema = z.object({
    idAthlete: z.number(),
    cpf: z.string().min(1).max(14),
    rg: z.string().min(1).max(14),
    birth: z.any().nullable(),
    phone: z.any().nullable(),
    name: z.string(),
    email: z.string().email({ message: 'Email invalido' }),
    role: z.enum(['athlete', 'gym', 'fprj']),
    password: z.string(),
    neighborhood: z.string(),
    street: z.string(),
    number: z.number(),
    city: z.string(),
    resetPasswordToken: z.string().nullable(),
    resetPasswordExpires: z.string().nullable(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    idGym: z.number(),
  });

export const authResponseSchema = z.object({
    user: userSchema,
    token: z.string().optional(),
    isLogged: z.boolean().optional(),
    msg: z.string().optional(),
    userPermission: z.string().optional()
});


export type AuthRequest = AuthLogin | AuthToken;
export type User = z.infer<typeof userSchema>;
export type AuthLogin = z.infer<typeof authLoginSchema>;
export type AuthResponse = z.infer<typeof authResponseSchema>;
