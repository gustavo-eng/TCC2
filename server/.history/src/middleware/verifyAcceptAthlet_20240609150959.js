const db = require('../config/db');
const { fail } = require('../helpers/response');
const Requests = db.Requests;

const isAccepted = async (idAthlete) => {
    let isAccepted = false;

    const request = await Requests.findOne({ where: { idAthlete: idAthlete } });
    console.log('Requestss')
    console.log(request.get({ plain: true }))
    if (!request) return res.status(500).json(fail('Nao ha solicitacao'))
    return request.get({ plain: true }).aproved;


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