
import { z } from 'zod'

export const validateSchema = z.object({
    comment: z.string()
})