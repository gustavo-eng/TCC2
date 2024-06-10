const db = require('../config/db');
const Requests = db.Requests;

const isAccepted = (idAthlete) => {
    let isAccepted = false;

    // Se chegou aqui é pq tem request
    Requests.findOne({ where: { idAthlete: idAthlete } }).then(request => {
        console.log('Dentro do middleware isAccepted')
        console.log(request.get({ plain: true }))
        //isAccepted = request.get({ plain: true }).aproved
    })

    return isAccepted;
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