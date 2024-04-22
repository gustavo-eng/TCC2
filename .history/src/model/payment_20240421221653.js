const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const paymentModel = sequelize.define('Payment', {
    Cod_Payment: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    aproved: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    comprovante: {
        type: DataTypes.STRING,
        allowNull: true
    },
    pathVoucher: {
        type: DataTypes.STRING,
        allowNull: true
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    description: {
        type: DataTypes.INTEGER,
        allowNull: true
    }

}, {
    freezeTableName: true,
    createdAt: true,
    updatedAt: true,
});

paymentModel.sync({ alter: true });





/*
Comprovante
Aproved
CategoriaIdade
Peso
Description

*/