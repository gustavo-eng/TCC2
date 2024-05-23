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

        await Fprj.create({ president, phone }).then(fprj => {
            return res.status(200).json(success(fprj, "payload", "Fprj listed successfully"));
        }).catch(err => {
            return res.status(404).json(fail("No Fprj found"));

        })

    } catch (err) {
        res.status(500).json(fail("Error server. Error: " + err));
    }

}

exports.delete = async (req, res) => {

    try {

        const { id } = req.params;
        const fprj = Fprj.findByPk(id);

        if (!fprj) return res.status(404).json(fail("No Fprj found"));



    } catch (err) {

    }
}

/*
 idFprj: {

 president: {

 phone: {
    type: DataTypes.STRING,

 role: {
    type: DataTypes.STRING,
    defaultValue: "fprj",
    allowNull: true
 }
*/