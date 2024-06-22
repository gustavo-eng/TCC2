const db = require('../config/db');
const Athtlet = db.Athlet;


export async function hasDuplicateAthlet(name, email, cpf, rg) {


    /*
    Nao pode ter mesmo nome

    name
    email
    cpf
    rg
    */
    let athlet = await Athtlet.findOne({
        where: {}
    });

    /*
    let request = await Request.findOne({ where: { idAthlete } })
    if (request) {
        return true
    } else {
        return false
    }
    */
}