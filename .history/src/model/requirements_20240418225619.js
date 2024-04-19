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
/*
requerimentsModel.belongsTo(GymModel, {
    constraint: true,
    foreignKey: 'gymId',
    onDelete: 'CASCADE', // Isso garante que, ao deletar um registro de requirementsModel, o registro correspondente em StudentModel também será deletado.
    onUpdate: 'CASCADE', // Isso garante que, se o id do aluno em requirementsModel for atualizado, o id correspondente em StudentModel também será atualizado.
    //unique: true
});
*/
GymModel.hasMany(requerimentsModel, {
    constraint: false,
    foreignKey: 'gymId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});


requerimentsModel.sync();


// todo SE DELETAR O ALUNO ASSOCIADO, A TUPLA DA TABELA DEVE SER DELETADO TBM


module.exports = {
    // list funcao apenas utilizada para teste
    //todo criar rotina para buscar solicitacoes de acordo com o aluno ou academia

    list: async () => {
        const requeriments = await requerimentsModel.findAll();
        return requeriments;
    },
    //todo neste sava vai o id do aluno e cnpj da academia
    save: async (data, aproved, idStudent, gymId) => {

        const existingRequirement = await requerimentsModel.findOne({ where: { idStudent: idStudent } });
        //todo tratar este erro
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
    delete: async (id) => {
        return await requerimentsModel.destroy({ where: { id: id } });
    },
    findSpecific: async (id) => {
        return await requerimentsModel.findByPk(id);
    },
    listRequirementsByStudent: async (id) => {
        //console.log('teste solicicatacao por aluno')
        //console.log('15 15 14 solicitacao por aluno')
        const requirement = await requerimentsModel.findByPk(id, { include: StudentModel });
        console.log('requirement');
        console.log(requirement);
        console.log('requirement.dataValues.Student.dataValues');
        console.log(requirement.dataValues.Student.dataValues);

        return requirement.dataValues;

    },
    listRequirmentsByGym: async (id) => {
        const requirement = await requerimentsModel.findByPk(id, { include: GymModel });

        console.log('gymModel  listRequirmentsByGym ');
        console.log(requirement);
        console.log('Elencando todas as academia atraledas a essa solicitacao ')
        console.warn(await requerimentsModel.findAll({ include: GymModel }).toJSON());

        return requirement;
    },




    requerimentsModel: requerimentsModel,
    //todo colocar chave strangeira para pesquisar por academia
    // findByAcademia
    //listRequirementsByGym



}


