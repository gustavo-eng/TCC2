const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const { StudentModel } = require('./student');

const GymModel = sequelize.define('Gym', {
    cod_gym: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cnpj_Academia: {
        type: DataTypes.STRING,
        allowNull: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
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
    },
    role: {
        type: DataTypes.STRING,
        allowNull: true
    }


}, {
    freezeTableName: true,
    createdAt: true,
    updatedAt: true,
}
);

/*
*/


StudentModel.belongsTo(GymModel, {
    constraint: false,
    foreignKey: 'gymId',
    onDelete: 'CASCADE', // Isso garante que, ao deletar um registro de requirementsModel, o registro correspondente em StudentModel também será deletado.
    onUpdate: 'CASCADE', // Isso garante que, se o id do aluno em requirementsModel for atualizado, o id correspondente em StudentModel também será atualizado.
    //unique: true
});

GymModel.hasMany(StudentModel, {
    constraint: false,
    foreignKey: 'gymId',
    onDelete: 'CASCADE', // Isso garante que, ao deletar um registro de requirementsModel, o registro correspondente em StudentModel também será deletado.
    onUpdate: 'CASCADE',
})

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
            nomeAcademia: nomeAcademia,
            role: 'gym'
        });

        return gym;
    },
    findSpecific: async (cnpj_Academia) => {
        return await GymModel.findByPk(cnpj_Academia);
    },
    update: async (cnpj_Academia, obj) => {
        let gym = await GymModel.findByPk(cnpj_Academia);
        if (!gym) return false
        Object.keys(obj).forEach(key => gym[key] = obj[key]);
        await gym.save();
        return gym;
    },
    delete: async (cnpj_Academia) => {
        await GymModel.destroy({ where: { cnpj_Academia: cnpj_Academia } });
    },
    GymModel: GymModel,
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

