const { z } = require('zod');

const objectErrorString = {
    required_error: "Field is required",
    invalid_type_error: "Field must be a string",
}

const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

const eventSchema = z.object({

    description: z.string(objectErrorString)
        .min(5, { message: "Must be at least 5 characteres" })
        .max(255, { message: "This field must contain a maximum of 255 characters" })
        .nullable().optional(),

    price: z.number({ invalid_type_error: "Field must be a valid number" })
        .positive({ message: "Must be a positive value" })
        .max(20000),
    startDate: z.string()
        .regex(isoDateRegex, { message: "Date must be in ISO 8601 format: YYYY-MM-DDTHH:mm:ss.sssZ" }),

    endDate: z.string()
        .regex(isoDateRegex, { message: "Date must be in ISO 8601 format: YYYY-MM-DDTHH:mm:ss.sssZ" })
        .optional(),

    street: z.string({ invalid_type_error: "Must be a string" })
        .min(3, { message: "Must be at least 3 characteres" })
        .max(25, { message: "This field must contain a maximum of 25 characters" }),

    number: z.number({ invalid_type_error: "Must be a number" })
        .nonnegative()
        .max(10000),

    city: z.string({ invalid_type_error: "Must be a string" })
        .min(3, { message: "Must be at least 3 characteres" })
        .max(25, { message: "This field must contain a maximum of 25 characters" }),

    neighborhood: z.string({ invalid_type_error: "Must be a string" })
        .min(3, { message: "Must be at least 3 characteres" })
        .max(45, { message: "This field must contain a maximum of 45 characters" }),


});


module.exports = eventSchema;
