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
            console.log('Parameters:', { athletId, eventId, categoryId });

            const registration = await Registration.findOne({
                where: {
                    idEvent: eventId,
                    idAthlete: athletId,
                    idCategory: categoryId !== undefined && categoryId !== null ? categoryId : null
                }
            });

            console.log('Registration:', registration);
            if (registration) {
                return true;
            } else {
                return false;
            }

            //return !!registration; // Retorna true se o registro existir, caso contrário, false
        } catch (err) {
            console.error("Error checking duplicate registration:", err);
            throw err; // Lança o erro para ser tratado pelo chamador
        }

    }
};
