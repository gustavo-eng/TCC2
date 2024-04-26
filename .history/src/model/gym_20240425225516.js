const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const { StudentModel } = require('./student');
const { requerimentsModel } = require('./requirements');

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
    listRequerimentByStudentsAndGym: async (idStudent, gymId) => {
        //return await StudentModel.destroy({ where: { id: id } });
        console.log("Entrou na funcao  listRequerimentByStudentsAndGym")
        try {
            //const student = await requerimentsModel.findAll({ where: { idStudent: idStudent, gymId: gymId } });
            const student = await requerimentsModel.findByPk(idStudent);
            console.log("Sudentss ")
            console.log(student)
            return student;
        } catch (err) {
            console.log("student nao encontrado")
            const student = await requerimentsModel.findByPk(idStudent); console.log(student)
            throw new Error('Nao existe aluno cadastrado para essa academia');
        }

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
    GymModel,
}