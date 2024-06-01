const { z } = require('zod');


const fprjSchema = z.object({
    president: z.string({ required_error: "Field is required", invalid_type_error: "Field must be a string" })
        .min(5, { message: "This field must contain at least 5 characters" })
        .max(15, { message: "This field must contain a maximum of 5 characters" }),

    phone: z.number({ message: "Field must be a number type" }).optional(),

});


module.exports = fprjSchema;




