const db = require('../config/db');
const Request = db.Requests;

export async function hasDuplicateRequest(idAthlete) {

    let request = await Request.findOne({ where: { idAthlete } })
    if (request) {
        return true
    } else {
        return false
    }
}