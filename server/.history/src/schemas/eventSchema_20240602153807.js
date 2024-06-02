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

    price: z.number({ invalid_type_error: "Field must be a valid number" }).positive({ message: "Must be a positive value" }),
    startDate: z.string()
        .refine((val) => isoDateRegex.test(val), {
            message: "Date must be in ISO 8601 format: YYYY-MM-DDTHH:mm:ss.sssZ",
        }),
    endDate: z.string()
        .refine((val) => isoDateRegex.test(val), {
            message: "Date must be in ISO 8601 format: YYYY-MM-DDTHH:mm:ss.sssZ",
        }).nullable().optional(),
    type: z.string(objectErrorString).min(5, {})


});

module.exports = eventSchema.partial();

//const { description, price, startDate, endDate, type } = req.body;
/*

        idEvent: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        startDate: { // Obligate Field
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: true,
        },
        endDate: { //Optional Field
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true,
        }


*/