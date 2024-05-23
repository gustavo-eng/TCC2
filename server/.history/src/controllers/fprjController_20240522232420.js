const db = require('../config/db');
const Fprj = db.Fprj;
const { success, fail, message } = require('../helpers/response');


exports.findAll = async (req, res) => {
    console.log('list fprj')

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

        // Verificar se já existe uma federação cadastrada
        const fprjExists = await Fprj.findOne();
        if (fprjExists) {
            return res.status(400).json(fail("Já existe uma federação cadastrada."));
        }

        // Criar nova federação
        const fprj = await Fprj.create({ president, phone, role: "fprj" });
        return res.status(201).json(success(fprj, "payload", "Federação cadastrada com sucesso."));

    } catch (err) {
        console.error("Erro no servidor ao criar Federação:", err);
        return res.status(500).json(fail("Erro no servidor: " + err.message));
    }
};


exports.delete = async (req, res) => {
    console.log("delete fprj. Try");

    try {
        const { idFprj } = req.params;
        console.log(`Attempting to delete Fprj with id: ${idFprj}`);

        const fprj = await Fprj.findByPk(idFprj); // Use await to properly get the Fprj object
        if (!fprj) {

            return res.status(404).json(fail("No Fprj found"));
        }

        await fprj.destroy();
        console.log(`Fprj with id: ${idFprj} deleted successfully`);
        return res.status(200).json(success(fprj, "payload", "Fprj deleted successfully"));
    } catch (err) {
        console.error(`Server error while deleting Fprj with id: ${req.params.idFprj}`, err);
        return res.status(500).json(fail("Server Error: " + err.message));
    }
};


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