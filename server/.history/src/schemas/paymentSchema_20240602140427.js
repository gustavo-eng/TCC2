const { z } = require('zod');


const objectErrorString = {
    required_error: "Field is required",
    invalid_type_error: "Field must be a string",
}

const paymentSchema = z.object({
    voucherPath: z.string(objectErrorString)
        .min(13, { message: "Must be at most 13 characteres" })
        .max(50, { message: "Must contain a maximum of 50 characters" }),

    aproved: z.boolean(),
    description: z.string(objectErrorString)
        .min(5, { message: "Must be at most 5 characteres" })
        .max(255, { message: "Must contain a maximum of 255 characters" })
        .nullable()


})


/*
       idPayment: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        voucherPath: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        aproved: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },

    }, {
        freezeTableName: true,
        createdAt: true,
        updatedAt: true,
    });
*/
