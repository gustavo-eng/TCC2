const db = require('../config/db');
const Request = db.Requests;

export async function hasDuplicateAthlet(idAthlete) {

    let request = await Request.findOne({ where: { idAthlete } })
    if (request) {
        return true
    } else {
        return false
    }
}