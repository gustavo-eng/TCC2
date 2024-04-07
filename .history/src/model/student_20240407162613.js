const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../helpers/response');

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
    }
);


StudentMode.sync({ alter: true });

module.exports = {
    //list:
}



