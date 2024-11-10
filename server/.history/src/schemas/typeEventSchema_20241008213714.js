// Nessa parte sera inserido o esquema para validacao
const { z } = require('zod')


const objectError = {
    required_error: "Type is required",
    invalid_type_error: "Type must be a string",
}

const typeEventSchema = z.object({
    type: z.string(objectError)
        .min(3, { message: "Must be less 3 chateres" })
        .max(15, { message: "Must be max 15 chateres" })
});

module.exports = typeEventSchema;




