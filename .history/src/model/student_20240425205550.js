const { Sequelize, DataTypes, where } = require('sequelize');
const sequelize = require('../config/db');


const StudentModel = sequelize.define('Student',
    {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
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
        },
        cpf: {

            type: DataTypes.STRING,
            //unique: true,
            allowNull: true
        },
        role: {
            type: DataTypes.STRING, //todo  tirar
            allowNull: true,
            //defaultValue: "student"
        }, // admin é o responsável por cadastrar os usuários e realiz
    }, {
    freezeTableName: true,
    createdAt: true,
    updatedAt: true,
}
);


StudentModel.belongsTo(GymModel, {
    constraint: false,
    foreignKey: 'idStudent',
    onDelete: 'CASCADE', // Isso garante que, ao deletar um registro de requirementsModel, o registro correspondente em StudentModel também será deletado.
    onUpdate: 'CASCADE', // Isso garante que, se o id do aluno em requirementsModel for atualizado, o id correspondente em StudentModel também será atualizado.
    //unique: true
});

StudentModel.sync({ alter: true });

module.exports = {
    list: async () => {
        const students = await StudentModel.findAll();
        return students;
    },
    save: async (name, email, password, cpf) => {
        const student = await StudentModel.create({
            name: name,
            email: email,
            password: password,
            cpf: cpf,
            role: "student" //todo tiar isso e ver como colocar depois
        });
        return student;
    },
    update: async (id, obj) => {
        let student = await StudentModel.findByPk(id);
        if (!student) return false;
        Object.keys(obj).forEach(key => student[key] = obj[key]);
        await student.save();
        return student;
    },
    delete: async (id) => {
        return await StudentModel.destroy({ where: { id: id } });
    },
    findSpecific: async (id) => { // para teste
        return await StudentModel.findByPk(id);
    },
    getStudentByEmailAndPassword: async (email, password) => {
        const student = await StudentModel.findOne({ where: { email: email, password: password } });
        //todo adicionar verificacao para analisar tabela de solicitacao
        if (student == null || student == undefined || student == "") {
            throw new Error('Não existe aluno cadastrado');
        } else {
            return student
        }
    },
    StudentModel: StudentModel,
}

