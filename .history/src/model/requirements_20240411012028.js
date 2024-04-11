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
    foreignKey: 'id',
});

requerimentsModel.sync({ alter: true });



module.exports = {
    // list funcao apenas utilizada para teste
    //todo criar rotina para buscar solicitacoes de acordo com o aluno ou academia

    list: async () => {
        const requeriments = await requerimentsModel.findAll();
        return requeriments;
    },
    //todo neste sava vai o id do aluno e cnpj da academia
    save: async (data, aproved) => {
        const requirement = await requerimentsModel.create({
            data: data,
            aproved: aproved,
        });

        return requirement;
    },
    delete: async (id) => {
        return await requerimentsModel.destroy({ where: { id: id } });
    },
    findSpecific: async (id) => {
        return await requerimentsModel.findByPk(id);
    }
    //todo colocar chave strangeira para pesquisar por academia
    // findByAcademia



}


