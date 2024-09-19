import { z } from 'zod';

// Define o registerUserSchema de validação com Zod
export const registerUserSchema = z.object({
    cpf: z.string({message: "Deve ser do tipo string"}),
    rg: z.string({message: "Deve ser do tipo string"}),
    birth: z.string({message: "Deve ser do tipo string"}),
    phone: z.string({message: "Deve ser do tipo string"}),
    name: z.string({message: "Deve ser do tipo string"}),
    email: z.string().email({ message: 'Email invalido' }),
    role: z.enum(["athlet", "gym", "fprj"]).optional(),
    password: z.string({message: "Deve ser do tipo string"}).min(3, {message: 'Minimo 3 caracteres'}).max(25, {message: 'Maximo 25 caracteres'}),
    neighborhood: z.string({message: "Deve ser do tipo string"}),
    street: z.string({message: "Deve ser do tipo string"}),
    number: z.string({message: "Deve ser do tipo string"}),
    city: z.string(),
    idGym: z.any(),
});


export type registerAthlet = z.infer<typeof registerUserSchema>;