const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const moment = require('moment');
const Student = require('./student');
const { StudentModel } = require('./student');

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

//ondelete cascade
requerimentsModel.belongsTo(StudentModel, {
    constraint: true,
    foreignKey: 'idStudent',
});

requerimentsModel.sync();




module.exports = {
    // list funcao apenas utilizada para teste
    //todo criar rotina para buscar solicitacoes de acordo com o aluno ou academia

    list: async () => {
        const requeriments = await requerimentsModel.findAll();
        return requeriments;
    },
    //todo neste sava vai o id do aluno e cnpj da academia
    save: async (data, aproved, idStudent) => {
        const requirement = await requerimentsModel.create({
            data: data,
            aproved: aproved,
            idStudent: idStudent,
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
        console.log('getStudent')
        console.log()
        console.log('requirement')
        console.log(requirement.dataValues.Student.dataValues)
        //const student = await requirement.getStudentModel();
        //console.log('*********')
        //console.log(student)
        //return student;
        return { "Student": requirement.dataValues.Student.dataValues, "Requirement": requirement.dataValues };


    }
    //todo colocar chave strangeira para pesquisar por academia
    // findByAcademia



}


