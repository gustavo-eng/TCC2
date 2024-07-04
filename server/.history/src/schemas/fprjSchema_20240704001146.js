const { z } = require('zod');



const fprjSchema = z.object({

    president: z.string({ required_error: "Field is required", invalid_type_error: "Field must be a string" })
        .min(4, { message: "This field must contain at least 5 characters" })
        .max(15, { message: "This field must contain a maximum of 5 characters" }),

    phone: z.string({ invalid_type_error: "Field must be a string type" })
        .min(8)
        .max(20),

    password: z.string({ invalid_type_error: "Field must be a string type" })
        .min(4)
        .max(65),

});


module.exports = fprjSchema;




