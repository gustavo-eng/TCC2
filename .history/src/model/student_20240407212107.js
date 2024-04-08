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
            unique: true,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        cpf: {
            field: 'cpfAluno',
            type: DataTypes.STRING,
            unique: true,
            allowNull: true
        },
        role: {
            type: DataTypes.ENUM("student", "gym"),
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
        //if (!email || !password || !cfp) throw new Error('Missing parameters');
        const student = await StudentModel.create({
            name: name,
            email: email,
            password: password,
            cpf: cpf,
            role: "student"
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
    }

}


/*
// Delete everyone named "Jane"
await User.destroy({
  where: {
    firstName: "Jane"
  },
});
*/


// name, email , password , cpf, role

