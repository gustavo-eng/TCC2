const db = require('../config/db');
const Athlet = db.Athlet;


//Response
const { success, fail, message } = require('../helpers/response');

exports.findAll = async (req, res) => {

    try {
        await Athlet.findAll().then(athlet => {
            return res.status(200).json(success(athlet, "payload", "Athlet listed successfully"));
        }).catch(err => {
            return res.status(404).json(fail("Athlets not found"));
        })
    } catch (err) {
        return res.status(500).json(fail("Error server"));
    }

}
