const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const moment = require('moment');


const Fabricante = sequelize.define('fabricante', {

    cod_Fabricante: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        defaultValue: "John Doe",
        allowNull: true
    },

}, {
    freezeTableName: true,
    createdAt: true,
    updatedAt: true,
}

);
/*
Fabricante.create({
    nome: 'Fabricante  1',
});
*/

Fabricante.sync();


module.exports = Fabricante;