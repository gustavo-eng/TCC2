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
        console.log('retorno Correto')
        console.log(await requerimentsModel.findAll({ include: 'StudentModel' }).toJSON())
        const requirement = await requerimentsModel.findByPk(id, { include: StudentModel });

        //console.log('requirement')
        //console.log(requirement)
        const student = await requirement.Requirements();
        //console.log('*********')
        //console.log(student)
        return student;

    }
    //todo colocar chave strangeira para pesquisar por academia
    // findByAcademia

}
/*
Ship.belongsTo(Captain, { foreignKey: 'bossId' }); // This creates the `bossId` foreign key in Ship.

// Eager Loading is done by passing the model to `include`:
console.log((await Ship.findAll({ include: Captain })).toJSON());
// Or by providing the associated model name:
console.log((await Ship.findAll({ include: 'Captain' })).toJSON());

// Also, instances obtain a `getCaptain()` method for Lazy Loading:
const ship = await Ship.findOne();
console.log((await ship.getCaptain()).toJSON());

*/

