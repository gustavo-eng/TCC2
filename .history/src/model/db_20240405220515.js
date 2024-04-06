// O banco de competicao vai depender

require('dotenv').config();
const Sequelize = require('sequelize');
const Sequelize = new Sequelize('fprjsystem',
    process.env.USER_DATABASE, process.env.PASSWORD_DATABASE,
    {
        host: "127.0.0.1",
        dialect: "mysql"
    }
);

