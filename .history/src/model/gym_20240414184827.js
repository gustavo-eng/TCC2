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



module.exports = {

    list: async () => {
        const gyms = GymModel.findAll();
        return gyms;
    },
    save: async (email, senha, telefone, rua, bairro, numero, cnpj_Academia, nomeProfessor, nomeAcademia) => {
        const gym = GymModel.create({
            email: email,
            senha: senha,
            telefone: telefone,
            rua: rua,
            bairro: bairro,
            numero: numero,
            cnpj_Academia: cnpj_Academia,
            nomeProfessor: nomeProfessor,
            nomeAcademia: nomeAcademia
        });

        return gym;
    },
    findSpecific: async (cnpj_Academia) => {
        return await GymModel.findByPk(cnpj_Academia);
    },
    update: async (cnpj_Academia, obj) => {
        let gym = await GymModel.findByPk(cnpj_Academia);
        if (!gym) return false
        Object.keys(obj).forEach(key => event[key] = obj[key]);
        await gym.save();
        return gym;
    },
    delete: async (cnpj_Academia) => {
        await GymModel.destroy({ where: { cod_Event: cnpj_Academia } });
    }

}



/*

Telefone
email
Senha
Rua
Bairro
Numero
CNPJ_Academia
NomeProfessor
NomeAcademia
*/


