const db = require('../config/db');
const Requests = db.Requests;

const isAccepted = async (idAthlete) => {
    let isAccepted = false;

    const request = await Requests.findOne({ where: { idAthlete: idAthlete } });
    console.log('Requestss')
    console.log(request.get({ plain: true }))

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