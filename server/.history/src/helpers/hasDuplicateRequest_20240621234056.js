const db = require('../config/db');
const Athtlet = db.Athlet;


export async function hasDuplicateAthlet(name, email, cpf, rg) {

    let athlet = await Athtlet.findOne({
        where: { name, email, cpf, rg }
    });

    if (athlet) {
        return true;
    } else {
        return false;
    }

}