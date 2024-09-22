import { z } from 'zod';

export const updateGym = z.object({

    cnpj: z.string({message: "Deve ser uma string"}).min(10, {message: 'Minimo 10 caracteres'}).max(30, {message: "Máximo 30 caracteres"}).optional(),
    phone: z.string({message: "Deve ser uma string"}).min(8, {message: "Mínimo 8 caracteres"}).max(16, {message: "Máximo 16 caracteres"}).optional(),
    street: z.string({message: "Deve ser uma string"}).min(5, {message: "Mínimo 5 caracteres"}).max(16, {message: "Máximo 16 caracteres"}).optional(),
    city: z.string({message: "Deve ser uma string"}).min(4, {message:"Mínimo 4 caracteres" }).max(25, {message: "Máximo 25 caracteres"}).optional(),
    neighborhood: z.string({message: "Deve ser uma string"}).min(3, {message:"Mínimo 3 caracteres" }).max(20, {message: "Máximo 20 caracteres"}).optional(),
    number: z.number({message: "Deve ser um numero"}).optional()


})