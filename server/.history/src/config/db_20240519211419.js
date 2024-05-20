// O banco de competicao vai depender

require('dotenv').config();
const Sequelize = require('sequelize');

//Config
const sequelize = new Sequelize('fprjsystem',
    process.env.USER_DATABASE, process.env.PASSWORD_DATABASE,
    {
        host: process.env.HOST_DATABASE,
        dialect: "mysql",
        logging: false
    },
);


//Establishing connection
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

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Category = require('../model/category')(sequelize, Sequelize);
db.Event = require('../model/event')(sequelize, Sequelize);
db.Address = require('../model/address')(sequelize, Sequelize);
db.Gym = require('../model/gym')(sequelize, Sequelize);


// ======= Associations =======
//One to One (Gym <<>> Address)
db.Address.hasOne(db.Gym, {
    as: "gym",  // 'as' define um alias para a associação
    foreignKey: "idAddress",  // define a chave estrangeira na tabela 'Gym'
    onDelete: "CASCADE",  // define o comportamento na exclusão
    onUpdate: "CASCADE",  // define o comportamento na atualização
});

db.Gym.belongsTo(db.Address, {
    as: "address",  // 'as' define um alias para a associação
    foreignKey: "idAddress",  // define a chave estrangeira na tabela 'Gym'
    onDelete: "CASCADE",  // define o comportamento na exclusão
    onUpdate: "CASCADE",  // define o comportamento na atualização
});


// ======= Associations =======

module.exports = db;
