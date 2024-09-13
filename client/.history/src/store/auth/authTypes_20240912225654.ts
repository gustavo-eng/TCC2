import { z } from 'zod';

export interface AuthState {
    user?:  User | null; //todo Tipar melhor
    loading?: boolean;
    error?: string | null;
    userPermission?: any;
    permissionError?: boolean | null;

}

export type AuthToken = {
    token: string;
};


export const authLoginSchema = z.object({
    email: z.string().email({message: 'Type email invalid'}),
    password: z.string({message: 'Type password invalid'})
});

export const userSchema = z.object({
    idAthlete: z.number(),
    cpf: z.string().min(1).max(104),
    rg: z.string().min(1).max(140),
    birth: z.any().nullable(),
    phone: z.any().nullable(),
    name: z.string(),
    email: z.string().email({ message: 'Email invalido' }),
    role: z.enum(['athlet', 'gym', 'fprj']),
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


export const userRegisterSchema = z.object({
    cpf: z.string({message: "Deve ser do tipo string"}),
    rg: z.string({message: "Deve ser do tipo string"}),
    birth: z.string({message: "Deve ser do tipo string"}),
    phone: z.string({message: "Deve ser do tipo string"}),
    name: z.string({message: "Deve ser do tipo string"}),
    email: z.string().email({ message: 'Email invalido' }),
    role: z.enum(['athlet', 'gym', 'fprj']),
    password: z.string({message: "Deve ser do tipo string"}).min(3, {message: 'Minimo 3 caracteres'}).max(25, {message: 'Maximo 25 caracteres'}),
    neighborhood: z.string({message: "Deve ser do tipo string"}),
    street: z.string({message: "Deve ser do tipo string"}),
    number: z.string({message: "Deve ser do tipo string"}),
    city: z.string(),
    idGym: z.union([z.string(), z.number()], {message: 'Deve ser do tipo number ou string'}),
});

export const authResponseSchema = z.object({
    user: userSchema,
    token: z.string().optional(),
    isLogged: z.boolean().optional(),
    msg: z.string().optional(),
    status: z.boolean().optional(),
    userPermission: z.string().optional()
});

export const userRegisterResponseSchema = z.object({
    status: z.boolean(),
    msg: z.string(),
})

export type AuthRequest = AuthLogin | AuthToken;
export type RegisterRequest = z.infer<typeof userRegisterSchema>;
export type RegisterResponse = z.infer<typeof userRegisterResponseSchema>;
export type User = z.infer<typeof userSchema>;
export type AuthLogin = z.infer<typeof authLoginSchema>;
export type AuthResponse = z.infer<typeof authResponseSchema>;
