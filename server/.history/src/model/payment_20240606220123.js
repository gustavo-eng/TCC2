const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Payment = sequelize.define("Payment", {
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

    return Payment;
}

