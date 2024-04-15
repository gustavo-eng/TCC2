const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const { emit } = require('nodemon');


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
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password: {
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
    save: async (nomePresidente, rua, numero, telefone, email, password) => {
        //todo adicionar logica para verificar se ja existe federecao cadastrada
        const fprj = FprjModel.create({
            nome_Presidente: nomePresidente,
            rua: rua,
            numero: numero,
            telefone: telefone,
            email: email,
            password: password
        });

        return fprj;
        //
    },
    update: async (cnpj_Fprj, obj) => {
        let fprj = await FprjModel.findByPk(cnpj_Fprj);
        if (!fprj) throw new Error('A Federação não foi encontrada');

        Object.keys(obj).forEach(key => fprj[key] = obj[key]);
        await fprj.save();
        return fprj;
    }
}

/*

    CNPJ_FRPJ
    Nome_Presidente
    Rua
    Numero
    Telefone

*/


