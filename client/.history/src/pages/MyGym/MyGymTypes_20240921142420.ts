import { z } from 'zod';

export const updateGym = z.object({
    cnpj: z.string({message: "Deve ser uma string"}).min(10, {message: 'Minimo 10 caracteres'}).max(30, {message: "Máximo 30 caracteres"}).optional(),
    phone: z.string({message: "Deve ser uma string"}).min(8, {message: "Mínimo 8 caracteres"}).max(16, {message: "Máximo 16 caracteres"}).optional(),
    street: z.string({message: "Deve ser uma string"}).min(5, {message: "Mínimo 5 caracteres"}).max(16, {message: "Máximo 16 caracteres"}),
    city
})