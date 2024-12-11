const Sequelize = require('sequelize');
require('dotenv').config();

//Config
const sequelize = new Sequelize('fprjsystem',
    process.env.USER_DATABASE, process.env.PASSWORD_DATABASE,
    {
        host: process.env.HOST_DATABASE,
        dialect: "mysql",
        logging: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
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
db.Gym = require('../model/gym')(sequelize, Sequelize);
db.Athlet = require('../model/athlet')(sequelize, Sequelize);
db.Fprj = require('../model/fprj')(sequelize, Sequelize);
db.Registration = require('../model/registration')(sequelize, Sequelize);
db.typeEvent = require('../model/typeEvent')(sequelize, Sequelize);
db.Requests = require('../model/requests')(sequelize, Sequelize);

// ==== Associations ====
require('../associations/eventTypeEvent')(db);
require('../associations/athletGym')(db);
require('../associations/requestsAthlet')(db);
require('../associations/registrationAthlet')(db);
require('../associations/registrationCategory')(db);
require('../associations/registrationEvent')(db);


module.exports = db;







