const { name } = require('ejs');
const { z } = require('zod');


const gymSchema = z.object({

    sensei: z.string({ invalid_type_error: "Must be a string" })
        .min(3, { message: "Must be at least 3 characteres" })
        .max(25, { message: "This field must contain a maximum of 255 characters" }),

    name: z.string({ invalid_type_error: "Must be a string" })
        .min(3, { message: "Must be at least 3 characteres" })
        .max(25, { message: "This field must contain a maximum of 255 characters" }),
    phone: z.string({ invalid_type_error: "Must be a string" })
        .min(3, { message: "Must be at least 3 characteres" })
        .max(15, { message: "This field must contain a maximum of 15 characters" }),

    passward: z.string({ invalid_type_error: "Must be a string" })
        .min(3, { message: "Must be at least 3 characteres" })
        .max(25, { message: "This field must contain a maximum of 25 characters" }),


    street: z.string({ invalid_type_error: "Must be a string" })
        .min(3, { message: "Must be at least 3 characteres" })
        .max(25, { message: "This field must contain a maximum of 25 characters" }),

    email: z.string({ invalid_type_error: "Must be a string" })
        .min(3, { message: "Must be at least 3 characteres" })
        .max(25, { message: "This field must contain a maximum of 25 characters" }),

    number: z.number().nonnegative()
        .max(10000)


});


module.exports = gymSchema;
