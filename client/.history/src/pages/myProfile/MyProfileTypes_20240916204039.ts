import { z } from 'zod';

export const updateUserSchema = z.object({
    cpf: z.string().min(1, { message: 'CPF deve ter no mínimo 1 caractere' }).max(104, { message: 'CPF deve ter no máximo 104 caracteres' }).optional(),
    rg: z.string().min(1, { message: 'RG deve ter no mínimo 1 caractere' }).max(140, { message: 'RG deve ter no máximo 140 caracteres' }).optional(),
    birth: z.string({message:"Nascimento deve ser string"}).nullable().optional(),
    phone: z.string({message: "Telefone deve ser string"}).nullable().optional(),
    name: z.string({message: "Name deve ser do tipo string"}).optional(),
    email: z.string().email({message: "Email deve ser string"}).optional(),
    role: z.enum(['athlet', 'gym', 'fprj'], { message: 'Role deve ser uma das opções: athlet, gym, fprj' }).optional(),
    password: z.string({message: "Senha string"}).optional(),
    neighborhood: z.string({message: "Bairro deve ser um campo do tipo string"}).optional(),
    street: z.string({message: "Deve ser do tipo string"}).optional(),
    number: z.number({message: "Deve ser do tipo number"}).optional(),
    city: z.string({message: "Deve ser do tipo string"}).optional(),
    resetPasswordToken: z.string({message: "Deve ser do tipo string"}).nullable().optional(),
    resetPasswordExpires: z.string({message: "Deve ser do tipo string"}).nullable().optional(),
    createdAt: z.string({message: "Deve ser do tipo string"}).optional(),
    updatedAt: z.string({message: "Deve ser do tipo string"}).optional(),
    idGym: z.number({message: "Deve ser do tipo number"}).optional(),
});


export type updateUser = z.infer<typeof updateUserSchema>;