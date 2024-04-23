const { Sequelize, DataTypes, where } = require('sequelize');
const sequelize = require('../config/db');
const { update } = require('./event');

// Role  - Do aluno será preenchido automaticamente
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
            //unique: true,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        cpf: {
            //field: 'cpfAluno',// para o body continua sendo cpf, mas na tabela cpfAluno
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

        try {
            const student = await StudentModel.findOne({ email: email, password: password });
            console.log(" student ")
            console.log(student)
            return student
        } catch (err) {
            return false
        }
    },
    StudentModel: StudentModel,

}

/*
 getByNameAndPassord: async (usersname, password) => {
        try {
            const user =  await UserModel.findOne({ nome: usersname, senha: password }).lean();
            console.log('Usuario correspondente  --> ')
            console.log(user)

            return user
        } catch (error) {
           console.log('Erro ao encontrar usuario, erro --> ')
           console.log(error)
           return false
        }
*/

/*
// Delete everyone named "Jane"
await User.destroy({
  where: {
    firstName: "Jane"
  },
});
*/

// name, email , password , cpf, role

