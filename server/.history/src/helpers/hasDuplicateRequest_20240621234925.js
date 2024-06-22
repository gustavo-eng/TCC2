const db = require('../config/db');
const Athtlet = db.Athlet;

module.exports = {

    hasDuplicateAthlet: async (name, email, cpf, rg) => {

        let athlet = await Athtlet.findOne({
            where: { name, email, cpf, rg }
        });

        if (athlet) {
            return true;
        } else {
            return false;
        }
    }
};