const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const moment = require('moment');


/*
    data
    Cod_Aluno
    CNPJ_Academia
    aproved
*/


const requerimentsModel = sequelize.define('Requirements', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    data: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    aproved: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }

}, {
    freezeTableName: true,
    createdAt: true,
    updatedAt: true,
}
);


requerimentsModel.sync({ alter: true });

module.exports = {
    // list funcao apenas utilizada para teste
    list: async () => {
        const requeriments = await requerimentsModel.findAll();
        return requeriments;
    },
    newRequeriment: () => {
        console.log('teste')
    }
}


