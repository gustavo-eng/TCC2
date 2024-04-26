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
        console.log("email ", email)
        const requirement = await requerimentsModel.findAll({
            include: [{
                model: StudentModel,
                where: { email: email, password: password } // Substitua 'nome_do_aluno' pelo nome que deseja buscar
            }]
        });
        console.log("++++ requirement ++++ ")
        try {
            console.log(requirement[0].dataValues)
            return requirement[0].dataValues

        } catch (e) {
            throw new Error('Não existe solicitacao atrelada a este aluno');
        }
        /*
        const requirement = await requerimentsModel.findAll({
            include: StudentModel,

        });
        */
        return requirement[0].dataValues

    },
    listRequirmentsByGym: async (id) => {
        //const requirement = await requerimentsModel.findByPk(id, { include: GymModel });
        //const requirement = await requerimentsModel.findByPk(id, { include: GymModel, where: { 'StudentId': id } });
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

