const db = require('../config/db');
const Event = db.Event;


const { success, fail, message } = require('../helpers/response');
const Op = db.Sequelize.Op;

exports.findAll = async (req, res) => {
    await Event.findAll().then(event => {
        return res.status(200).json(success(event, "payload", "Event listed successfully"));
    }).catch(err => {
        return res.status(404).json(fail("Events not found"));
    })
}



exports.create = async (req, res) => {

    const { description, price, startDate, endDate, type } = req.body;

    const newEvent = {
        description: description,
        price: price,
        startDate: startDate,
        endDate: endDate,
        type: type
    }

    await Event.create(newEvent).then(event => {
        console.log('Evento salvo com successo')
        res.status(200).json(success(event, "payload", "Event created successfully"));
    }).catch(err => {
        res.status(500).json(fail("Fail to create category. Erro -> ", err));
    });





}

/*
 description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        startDate: { // Obligate Field
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: true,
        },
        endDate: { //Optional Field
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true,
        }
*/




