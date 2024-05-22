const db = require('../config/db');
const Fprj = db.Fprj;
const { success, fail, message } = require('../helpers/response');


exports.findAll = async (req, res) => {

    try {

        await Fprj.findAll().then(fprj => {

            return res.status(200).json(success(fprj, "payload", "Fprj listed successully!"));

        }).catch(err => {
            return res.status(404).json(fail("No Fprj found"));
        });

    } catch (err) {
        res.status(500).json(fail("Error server. Error: " + err));
    }

}

exports.create = async (req, res) => {

    try {

        const { president, phone } = req.body;

    } catch (err) {

    }

}

/*
 idFprj: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
 },
 president: {
    type: DataTypes.STRING,
    allowNull: true
 },
 phone: {
    type: DataTypes.STRING,
    allowNull: true
 },
 role: {
    type: DataTypes.STRING,
    defaultValue: "fprj",
    allowNull: true
 }
*/