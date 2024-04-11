
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

/*

idCategoria
genero
classe idade
peso

*/

const CategoryModel = sequelize.define('Event', {
    idCategoria: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    gender: {
        type: DataTypes.STRING,
        defaultValue: "Masculino",
        allowNull: true
    },
    classAge: {
        type: DataTypes.STRING,
        defaultValue: "Senior",
        allowNull: true
    },
    weight: {
        type: DataTypes.INTEGER,
        defaultValue: -60,
        allowNull: true
    }


}, {
    freezeTableName: true,
    createdAt: true,
    updatedAt: true,
}

);

