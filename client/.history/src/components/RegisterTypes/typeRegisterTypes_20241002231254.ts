import { z } from 'zod';

export const typeRegisterScheema = z.object({
    gender: z.string({message: 'Deve ser um caractere '}).min(5, {message: 'Minimo 5 caracteres'}).max(255, {message: 'Máximo 255 caracteres'}),
    classCategory: z.string({message: 'Deve ser um caractere '}).min(5, {message: 'Minimo 5 caracteres'}).max(255, {message: 'Máximo 255 caracteres'}),
    weight: z.array(z.object({
        valueText: z.coerce.string({message: 'Must be a string'}).min(2, {message: 'Minimo 2 caracteres'})
    })).min(1, {message: 'Insira pelo menos um peso a essa categoria'})
})

export type registerType = z.infer<typeof typeRegisterScheema>
