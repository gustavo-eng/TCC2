const db = require('../config/db');
const Athlet = db.Athlet;
const Registration = db.Registration;
const Requests = db.Requests;

function diffIsBiggherThanXDaysPayment({ paymentDate, endEventDate, X }) {
    //data event 2024-06-21T00:57:42.000Z
    console.log('entrou na funcao')
    paymentDate = new Date(paymentDate);
    endEventDate = new Date(endEventDate);
    let dayInMs = 24 * 60 * 60 * 1000;

    //Automaticamente vai deletar caso nao for fornecido nenhum valor.
    //pois nao faz sentido se nenhum desses valores forem fornecidos
    //Apenas uma funcao com valvula de scape para integridade dos dados
    //mas dificilmente ira entrar nessa funcao
    if (!paymentDate || !endEventDate) return true

    if (((paymentDate - endEventDate) / dayInMs) > X) {
        return true;
    } else {
        return false;
    };

};

//Massive function.
async function cleanObsoletAthlets({ XDays }) {
    // Percorro todos os dados. Quando determinada request
    //conter o createAt maior que XDays relacionado ao dia de hoje,
    // eu apago o atleta referente aquele registro que esta em idAthlete.

    let allRequests = await Requests.findAll()
    console.log('all')
    //console.log(allRequests)

    allRequests.array.forEach(element => {
        console.log(element.approved)
    });

    return allRequests;

};


module.exports = { diffIsBiggherThanXDaysPayment, cleanObsoletAthlets };

