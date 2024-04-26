const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const moment = require('moment');
const Student = require('./student');
const { StudentModel } = require('./student');
const { GymModel } = require('./gym');

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

//ondelete cascade

requerimentsModel.belongsTo(StudentModel, {
    constraint: false,
    foreignKey: 'idStudent',
    onDelete: 'CASCADE', // Isso garante que, ao deletar um registro de requirementsModel, o registro correspondente em StudentModel também será deletado.
    onUpdate: 'CASCADE', // Isso garante que, se o id do aluno em requirementsModel for atualizado, o id correspondente em StudentModel também será atualizado.
    //unique: true
});

requerimentsModel.belongsTo(GymModel, {
    constraint: true,
    foreignKey: 'gymId',
    onDelete: 'CASCADE', // Isso garante que, ao deletar um registro de requirementsModel, o registro correspondente em StudentModel também será deletado.
    onUpdate: 'CASCADE', // Isso garante que, se o id do aluno em requirementsModel for atualizado, o id correspondente em StudentModel também será atualizado.
    //unique: true
});

GymModel.hasMany(requerimentsModel, {
    constraint: false,
    foreignKey: 'gymId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});



//requerimentsModel.sync({ alter: true });
requerimentsModel.sync();


module.exports = {

    list: async () => {
        const requeriments = await requerimentsModel.findAll();
        return requeriments;
    },
    //todo neste sava vai o id do aluno e cnpj da academia
    save: async (data, aproved, idStudent, gymId) => {
        const existingRequirement = await requerimentsModel.findOne({ where: { idStudent: idStudent } });
        //todo tratar este erro.
        if (existingRequirement) {
            throw new Error('Já existe um requerimento associado a este estudante.');
        }
        const requirement = await requerimentsModel.create({
            data: data,
            aproved: aproved,
            idStudent: idStudent,
            gymId: gymId
        });

        return requirement;
    },
    listRequerimentByStudentsAndGym: async (gymId) => {
        //return await StudentModel.destroy({ where: { id: id } });
        console.log("Entrou na funcao  listRequerimentByStudentsAndGym")
        try {
            const student = await requerimentsModel.findAll({
                include: StudentModel,
                where: { gymId: gymId }
                //where: { idStudent: idStudent, gymId: gymId }
            });

            return student;
        } catch (err) {
            throw new Error('Nao existe aluno cadastrado para essa academia');
        }

    },
    delete: async (id) => {
        return await requerimentsModel.destroy({ where: { id: id } });
    },
    findSpecific: async (id) => {
        return await requerimentsModel.findByPk(id);
    },
    listRequirementsByStudent: async (id) => {
        const requirement = await requerimentsModel.findAll({
            include: StudentModel,
            where: { 'idStudent': id }
        });

        return requirement;
    },
    verifyAuthenticationStudent: async (email, password) => {
        const requirement = await requerimentsModel.findAll({
            include: [{
                model: StudentModel,
                where: { email: email, password: password } // Substitua 'nome_do_aluno' pelo nome que deseja buscar
            }]
        });
        try {
            return requirement[0].dataValues

        } catch (e) {
            throw new Error('Não existe solicitacao atrelada a este aluno');
        }

    },
    listRequirmentsByGym: async (id) => {
        const requirement = await requerimentsModel.findAll({
            include: StudentModel,
            where: { 'gymId': id }
        });
        return requirement;
    },
    acceptStudent: async (id) => {
        let requirement = await requerimentsModel.findByPk(id);
        if (!requirement) throw new Error("Requirement not exist");

        requirement.update({ aproved: true });
        requirement.save();
        return requirement;

    },
    requerimentsModel: requerimentsModel,

}

