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
db.Athlet = require('../model/athlet')(sequelize, Sequelize);


// ======= Associations =======
//One to One (Gym <<>> Address)
db.Address.hasOne(db.Gym, {
    as: "Gym",  // 'as' define um alias para a associação
    foreignKey: "idAddress",  // define a chave estrangeira na tabela 'Gym'
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

db.Gym.belongsTo(db.Address, {
    as: "Address",  // 'as' define um alias para a associação
    foreignKey: "idAddress",  // define a chave estrangeira na tabela 'Gym'
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

//One to Many (Athlet <<>> Gym)
//db.Athlet
db.Gym.hasMany(db.Athlet, {
    as: "Athlet",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

db.Athlet.belongsTo(db.Gym, {
    as: "Gym",
    foreignKey: "idGym",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",

})



/*
db.tutorials.hasMany(db.comments, { as: "comments" });
db.comments.belongsTo(db.tutorials, {
  foreignKey: "tutorialId",
  as: "tutorial",
});
*/



// ======= Associations =======

module.exports = db;