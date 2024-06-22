const db = require('../config/db');
const Athlet = db.Athlet;

module.exports = {
    hasDuplicateAthlet: async (name, email, cpf, rg) => {
        console.log("_______")
        try {
            const athlets = await Athlet.findAll({
                where: {
                    name: name,
                    email: email,
                    cpf: cpf,
                    rg: rg
                }
            });

            return athlets.length > 0;
        } catch (err) {
            console.error("Error checking duplicate athlete:", err);
            throw err; // ou retornar false, dependendo de como você quer lidar com erros
        }
    }
};
