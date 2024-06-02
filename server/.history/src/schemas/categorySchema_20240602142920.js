const { z } = require('zod');

const objectErrorString = {
    required_error: "Field is required",
    invalid_type_error: "Field must be a string",
}


const categorySchema = z.object({


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

