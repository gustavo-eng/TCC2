const { z } = require('zod');

const objectErrorString = {
    required_error: "Field is required",
    invalid_type_error: "Field must be a string",
}


const categorySchema = z.object({
    gender: z.enum(['Feminino', 'Masculino']),
    classCategory: z.string(objectErrorString)
        .min(5, { message: "Must be at least 5 characteres" })
        .max(50, { message: "This field must contain a maximum of 50 characters" }),

    weight: z.number().min(0).max(300).positive()


});

module.exports = categorySchema;

/*
  idCategory: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        gender: {
            type: DataTypes.STRING,
            //defaultValue: "Masculino",
            allowNull: true
        },
        classCategory: {
            type: DataTypes.STRING,
            // defaultValue: "Senior",
            allowNull: true
        },
        weight: {
            type: DataTypes.INTEGER,
            //defaultValue: 60,
            allowNull: true
        }

*/

