// O banco de competicao vai depender

require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize('fprjsystem',
    process.env.USER_DATABASE, process.env.PASSWORD_DATABASE,
    {
        host: process.env.HOST_DATABASE,
        dialect: "mysql"
    },
);

const setConnection = async (sequelize) => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync();

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

}

setConnection(sequelize);

module.exports = sequelize;

