
import { z } from 'zod';

export const validateSchema = z.object({
    comment: z.string().optional()
})
export const validateSchemaOptional = z.object({
    comment: z.string().min(3, {message: "Deve conter no mínimo 5 caracteres"}).optional()
})

export type validateRegistration = z.infer<typeof validateSchema>;
export type validateRegistrationOptional = z.infer<typeof validateSchemaOptional>;