const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {

    const Registration = sequelize.define("Registration", {
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
            defaultValue: false,
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        weight: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    }, {
        freezeTableName: true,
        createdAt: true,
        updatedAt: true,
    });

    return Registration;

}

