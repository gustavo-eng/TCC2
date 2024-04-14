/*
Telefone
Senha
Rua
Bairro
Numero
CNPJ_Academia
NomeProfessor
NomeAcademia
*/

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const GymModel = sequelize.define('Gym', {
    cnpj_Academia: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: true
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: true
    },
    numero: {
        type: DataTypes.STRING,
        allowNull: true
    },
    nomeProfessor: {
        type: DataTypes.STRING,
        allowNull: true
    },
    nomeAcademia: {
        type: DataTypes.STRING,
        allowNull: true
    }

}, {
    freezeTableName: true,
    createdAt: true,
    updatedAt: true,
}
);

GymModel.sync();

