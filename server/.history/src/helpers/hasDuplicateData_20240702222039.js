const db = require('../config/db');
const Athlet = db.Athlet;
const Registration = db.Registration;
const gym = db.Gym;

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
            throw err;
        }
    },
    hasDuplicateRegistration: async ({ athletId, eventId, categoryId }) => {
        try {

            const registration = await Registration.findOne({
                where: {
                    idEvent: eventId,
                    idAthlete: athletId,
                    idCategory: categoryId !== undefined && categoryId !== null ? categoryId : null
                }
            });

            if (registration == null || registration == undefined) {
                return false;
            } else {
                return true;
            };

        } catch (err) {
            console.error("Error checking duplicate registration:", err);
            throw err; // Lança o erro para ser tratado pelo chamador
        }

    },
    hasDuplicateGym: async ({ email, cnpj, name, }) => {

    },
    hasDuplicateTypeEvent: async ({ test }) => {
        console.log('teste')
    }
};
