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

}




