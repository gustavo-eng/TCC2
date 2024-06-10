const db = require('../config/db');
const Requests = db.Requests;

const isAccepted = async (idAthlete) => {
    let isAccepted = false;

    // Se chegou aqui é pq tem request
    await Requests.findOne({ where: { idAthlete: idAthlete } }).then(request => {
        console.log('Dentro do middleware isAccepted')
        console.log(request.get({ plain: true }))

    })

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