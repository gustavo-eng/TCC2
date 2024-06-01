// Nessa parte sera inserido o esquema para validacao
const { z } = require('zod')

const typeEventSchema = z.object({
    type: z.string().min(5).max(15)
})