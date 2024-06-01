const { z } = require('zod');

const objectError = {
    required_error: "Field is required",
    invalid_type_error: "Field must be a string",
}

const fprjSchema = z.object({
    president: z.string({ objectError })
        .min(5, { message: "This field must contain at least 5 characters" })
        .max(15, { message: "This field must contain a maximum of 5 characters" })


});





