// O banco de competicao vai depender

require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize('fprjsystem',
    process.env.USER_DATABASE, process.env.PASSWORD_DATABASE,
    {
        host: process.env.HOST_DATABASE,
        dialect: "mysql"
    }
);


try {
    sequelize.authenticate();

} catch (error) {


}
