
import { z } from 'zod'

export const validateSchema = z.object({
    comment: z.string().min(3, {message: "Deve conter no mínimo 5 caracteres"})
})