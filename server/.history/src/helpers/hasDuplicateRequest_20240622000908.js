const db = require('../config/db');
const Athtlet = db.Athlet;

module.exports = {

    hasDuplicateAthlet: async (name, email, cpf, rg) => {

        let athlet = await Athtlet.findOne({
            where: {
                name: name,
                email: email,
                cpf: cpf,
                rg: rg
            }
        });

        if (athlet) {
            return true;
        } else {
            return false;
        }
    }

};