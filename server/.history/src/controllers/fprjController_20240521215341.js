const db = require('../config/db');
const Fprj = db.Fprj;
const { success, fail, message } = require('../helpers/response');


exports.findAll = async (req, res) => {

    try {

        await Fprj.findAll().then(fprj => {

            res.status(200).json(success(fprj, "payload", "Fprj listed successully!"));

        });

    } catch (err) {

    }
}