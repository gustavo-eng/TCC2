const { z } = require('zod');

const gymSchema = z.object({

    sensei: z.string({ invalid_type_error: "Must be a string" })
        .min(3, { message: "Must be at least 3 characteres" })
        .max(255, { message: "This field must contain a maximum of 255 characters" }),

    name: z.string({ invalid_type_error: "Must be a string" })
        .min(3, { message: "Must be at least 3 characteres" })
        .max(255, { message: "This field must contain a maximum of 255 characters" }),
    phone: z.string({ invalid_type_error: "Must be a string" })
        .min(3, { message: "Must be at least 3 characteres" })
        .max(15, { message: "This field must contain a maximum of 15 characters" }),

    password: z.string({ invalid_type_error: "Must be a string" })
        .min(3, { message: "Must be at least 3 characteres" })
        .max(25, { message: "This field must contain a maximum of 25 characters" }),

    street: z.string({ invalid_type_error: "Must be a string" })
        .min(3, { message: "Must be at least 3 characteres" })
        .max(255, { message: "This field must contain a maximum of 255 characters" }),

    email: z.string({ invalid_type_error: "Must be a string" })
        .min(3, { message: "Must be at least 3 characteres" })
        .max(255, { message: "This field must contain a maximum of 255 characters" }),
    number: z.any(),
    city: z.string({ invalid_type_error: "Must be a string" })
        .min(3, { message: "Must be at least 3 characteres" })
        .max(255, { message: "This field must contain a maximum of 255 characters" }),

    neighborhood: z.string({ invalid_type_error: "Must be a string" })
        .min(3, { message: "Must be at least 3 characteres" })
        .max(45, { message: "This field must contain a maximum of 45 characters" }),

    cnpj: z.string({ invalid_type_error: "Must be a string" })
        .min(3, { message: "Must be at least 3 characteres" })
        .max(255, { message: "This field must contain a maximum of 255 characters" }),

});


module.exports = gymSchema;
