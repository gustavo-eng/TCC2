const db = require('../config/db');
const Athlet = db.Athlet;
const Registration = db.Registration;

module.exports = {
    hasDuplicateAthlet: async (name, email, cpf, rg) => {
        try {
            //todo adicionar ou
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
    },
    hasDuplicateRegistration: async ({ athletId, eventId, categoryId }) => {
        try {

            const registration = await Registration.findOne({
                where: {
                    idCategory: categoryId ? categoryId : null,
                    idEvent: eventId,
                    idAthlete: athletId
                }
            });

            if (registration) {
                return true;
            } else {
                return false;
            };
        } catch (err) {
            console.error("Error checking duplicate athlete:", err);
            throw err;
        }

    }
};
