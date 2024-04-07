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
            type: DataTypes.STRING(100),
            allowNull: true
        },
        email: {
            type: DataTypes.STRING(50),
            unique: true,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING(256),
            allowNull: true
        },
        role: {
            type: DataTypes.ENUM("student", "admin"),
            defaultValue: "student"
        }, // admin é o responsável por cadastrar os usuários e realiz

    }
);
