const db = require('../config/db');
const Athlet = db.Athlet;

module.exports = {
    hasDuplicateAthlet: async (name, email, cpf, rg) => {
        try {
            const athlets = await Athlet.findAll({
                where: {
                    name: name,
                    email: email,
                    cpf: cpf,
                    rg: rg
                }
            });
            if (athlets.length > 0) {
                return true;
            } else {
                return false;
            }

        } catch (err) {
            console.error("Error checking duplicate athlete:", err);
            throw err;
        }
    }
};