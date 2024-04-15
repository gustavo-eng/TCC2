const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');


const FprjModel = sequelize.define('fprj', {

    cnpj_Fprj: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome_Presidente: {
        type: DataTypes.STRING,
        allowNull: true
    },
    rua: {
        type: DataTypes.STRING,
        allowNull: true
    },
    numero: {
        type: DataTypes.STRING,
        allowNull: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: true
    }

}, {
    freezeTableName: true,
    createdAt: true,
    updatedAt: true,
});


FprjModel.sync();


module.exports = {
    list: async () => {
        const fprj = await FprjModel.findAll();
        return fprj;
    },
    save: async () => {
        //
    }
}

/*

    CNPJ_FRPJ
    Nome_Presidente
    Rua
    Numero
    Telefone

*/


