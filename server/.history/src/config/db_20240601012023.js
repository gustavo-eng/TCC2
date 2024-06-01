// O banco de competicao vai depender

require('dotenv').config();

const Sequelize = require('sequelize');

//Config
const sequelize = new Sequelize('fprjsystem',
    process.env.USER_DATABASE, process.env.PASSWORD_DATABASE,
    {
        host: process.env.HOST_DATABASE,
        dialect: "mysql",
        logging: false,
        pool: {
            max: 5, // max number of connection in pool
            min: 0,// max number of connection in pool
            acquire: 30000, // max time in ms that pull will try to get connection before throwing error
            idle: 10000 // max time in ms, that a conneciton can be idle before being released
        }

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
db.Fprj = require('../model/fprj')(sequelize, Sequelize);
db.Payment = require('../model/payment')(sequelize, Sequelize);

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
    foreignKey: "idGym",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

db.Athlet.belongsTo(db.Gym, {
    as: "Gym",
    foreignKey: "idGym",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});


//  ============== Pagamento e Atleta ===================
db.Athlet.hasOne(db.Payment, {
    as: "Payment",
    foreignKey: {
        name: 'idAthlet',
        allowNull: true
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

db.Payment.belongsTo(db.Athlet, {
    as: "Athlet",
    foreignKey: {
        name: 'idAthlet',
        allowNull: true
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

// =============== Categoria e Pagamento ===============
db.Category.hasOne(db.Payment, {
    as: "Payment",
    foreignKey: {
        name: 'idCategory',
        allowNull: true
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});


db.Payment.belongsTo(db.Category, {
    as: "Category",
    foreignKey: {
        name: 'idCategory',
        allowNull: true
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

// =============== Categoria e Pagamento ===============
db.Event.hasOne(db.Payment, {
    as: "Payment",
    foreignKey: {
        name: 'idEvent',
        allowNull: true
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});


db.Payment.belongsTo(db.Event, {
    as: "Event",
    foreignKey: {
        name: 'idEvent',
        allowNull: true
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

module.exports = db;

/*
idCategory
idEvent
idAthlet
*/


/*

db.Athlet.hasOne(db.Payment, {
    as: "Payment",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});


db.Payment.belongsTo(db.Athlet, {
    as: "Athlet",
    foreignKey: {
        name: 'idAthlet',
        allowNull: true
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    //idAthlete
});
*/





/*
db.tutorials.hasMany(db.comments, { as: "comments" });
db.comments.belongsTo(db.tutorials, {
  foreignKey: "tutorialId",
  as: "tutorial",
});
*/


// ======= Associations =======
