import { z } from 'zod';

export const updateUserSchema = z.object({
    cpf: z.string().min(1, { message: 'CPF deve ter no mínimo 1 caractere' }).max(104, { message: 'CPF deve ter no máximo 104 caracteres' }).optional(),
    rg: z.string().min(1, { message: 'RG deve ter no mínimo 1 caractere' }).max(140, { message: 'RG deve ter no máximo 140 caracteres' }).optional(),
    birth: z.string({message:"Nascimento deve ser string"}).nullable().optional(),
    phone: z.string().nullable().optional(),
    name: z.string({message: "Name deve ser do tipo string"}).optional(),
    email: z.string().email({ message: 'Email inválido' }).optional(),
    role: z.enum(['athlet', 'gym', 'fprj'], { message: 'Role deve ser uma das opções: athlet, gym, fprj' }).optional(),
    password: z.string().optional().refine((val) => val !== undefined, { message: 'Senha é obrigatória' }),
    neighborhood: z.string().optional().refine((val) => val !== undefined, { message: 'Bairro é obrigatório' }),
    street: z.string().optional().refine((val) => val !== undefined, { message: 'Rua é obrigatória' }),
    number: z.number().optional().refine((val) => val !== undefined, { message: 'Número é obrigatório' }),
    city: z.string().optional().refine((val) => val !== undefined, { message: 'Cidade é obrigatória' }),
    resetPasswordToken: z.string().nullable().optional(),
    resetPasswordExpires: z.string().nullable().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    idGym: z.number().optional().refine((val) => val !== undefined, { message: 'idGym é obrigatório' }),
});
