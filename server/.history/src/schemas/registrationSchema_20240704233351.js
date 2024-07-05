const { z } = require('zod');


const objectErrorString = {
    required_error: "Field is required",
    invalid_type_error: "Field must be a string",
}

const paymentSchema = z.object({
    aproved: z.boolean().optional(),

    description: z.string(objectErrorString)
        .min(5, { message: "Must be at most 5 characteres" })
        .max(255, { message: "Must contain a maximum of 255 characters" })
        .nullable().optional(),

    idAthlete: z.string(),
    idEvent: z.string(),
    idCategory: z.string().optional()

});

module.exports = paymentSchema;

