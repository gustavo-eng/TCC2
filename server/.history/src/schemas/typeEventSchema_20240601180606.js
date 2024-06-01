// Nessa parte sera inserido o esquema para validacao
const { z } = require('zod')

const typeEventSchema = z.object({
    type: z.string()
        .min(5, { message: "Must be less 5 chateres" })
        .max(15, { message: "Must be max 15 chateres" })
});

module.exports = typeEventSchema;