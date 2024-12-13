const db = require('../config/db');
const Requests = db.Requests;

const isAccepted = async (idAthlete) => {
    try {

        const request = await Requests.findOne({ where: { idAthlete: idAthlete } });
        if (!request) throw new Error('Solicitacao nao existe. ');
        return request.get({ plain: true }).aproved;

    } catch (err) {
        throw new Error('Erro ao verificar solicitação: ' + err);
    }

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