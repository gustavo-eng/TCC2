// O banco de competicao vai depender
/*
require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize('fprjsystem',
    process.env.USER_DATABASE, process.env.PASSWORD_DATABASE,
    {
        host: process.env.HOST_DATABASE,
        dialect: "mysql"
    },
);


try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

sequelize.sync();
module.exports = sequelize;
*/
require('dotenv').config();
const Sequelize = require('sequelize');

const connectToDatabase = async () => {
    const sequelize = new Sequelize('fprjsystem',
        process.env.USER_DATABASE, process.env.PASSWORD_DATABASE,
        {
            host: process.env.HOST_DATABASE,
            dialect: "mysql"
        },
    );

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync();
        console.log('Database synchronized successfully.');
        return sequelize;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = connectToDatabase;



