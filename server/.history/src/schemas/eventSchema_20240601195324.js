const { z } = require('zod');

const objectErrorPrice = {
    required_error: "Field is required",
    invalid_type_error: "Field must be a string",
}
const eventSchema = z.object({
    description: z.string(objectErrorPrice)
        .min(5, { message: "Must be at least 5 characteres" })
        .max(255, { message: "This field must contain a maximum of 255 characters" })
        .optional(),

    price

});

module.exports = eventSchema;

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