import { z } from 'zod';

export const updateUserSchema = z.object({
    cpf: z.string({message: "Deve ser um caracter"}).optional(),

});