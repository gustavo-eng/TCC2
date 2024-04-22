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
    voucher: {
        type: DataTypes.STRING,
        allowNull: true
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: true
    }

});

/*
Comprovante
Aproved
CategoriaIdade
Peso
Description

*/