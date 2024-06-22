const db = require('../config/db');
const Request = db.Requests;

export async function hasDuplicateRequest(idAthlete) {

    let request = Request.findOne({ where: { idAthlete } })


}