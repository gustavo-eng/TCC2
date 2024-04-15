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
    save: async (nomePresidente, rua, numero, telefone) => {
        //todo adicionar logica para verificar se ja existe federecao cadastrada
        const fprj = FprjModel.create({
            nome_Presidente: nomePresidente,
            rua: rua,
            numero: numero,
            telefone: telefone
        });

        return fprj;
        //
    },
    update: async (cnpj_Fprj, obj) => {

    }
}

/*

    CNPJ_FRPJ
    Nome_Presidente
    Rua
    Numero
    Telefone

*/


