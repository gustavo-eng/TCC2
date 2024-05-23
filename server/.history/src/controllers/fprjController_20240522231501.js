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

        const fprj = await Fprj.findAll()

        if (fprj) res.status(500).json(fail("Ja existe federecao cadastrada "))

        await Fprj.create({ president, phone, role: "fprj" }).then(fprj => {
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

        const { idFprj } = req.params;
        const fprj = Fprj.findByPk(id);

        if (!fprj) return res.status(404).json(fail("No Fprj found"));

        await fprj.destroy().then(() => {
            return res.status(200).json(success(fprj, "payload", "Fprj deleted successfully"));
        }).catch(err => {
            return res.status(404).json(fail("No Fprj found"));
        })

    } catch (err) {
        return res.status(500).json(fail("Server Error: " + err.message));
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