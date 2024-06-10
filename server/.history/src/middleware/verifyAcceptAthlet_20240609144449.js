const db = require('../config/db');
const Requests = db.Requests;

const isAccepted = (idAthlete) => {

    Requests.findOne({ where: {} })


}

module.exports = isAccepted;

/*
not accept
{
    "email": "gustavo@hotmail.com",
    "password": "diasgustavodias"
}

accept
weg@hotmail.com
diasgustavodias

*/