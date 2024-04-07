const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Role  - Do aluno será preenchido automaticamente
const StudentMode = sequelize.define('Student',
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



StudentMode.sync({ alter: true });

module.exports = {
    list: async () => {
        const students = await StudentMode.findAll();
        return students;
    },
    save: async (name, email, password, cpf, role) => {
        //if (!email || !password || !cfp) throw new Error('Missing parameters');
        const student = await StudentMode.create({
            name: name,
            email: email,
            password: password,
            cpf: cpf,
            role: "student"
        });

        return student;

    }

}



// name, email , password , cpf, role

