const db = require('../config/db');
const Athlet = db.Athlet;
const Requests = db.Requests;


async function cleanObsoletAthlets({ XDays }) {
    try {
        const allRequests = await Requests.findAll({
            where: { aproved: false },
            raw: true
        });

        const today = new Date();

        const requestsToDelete = allRequests.filter(({ createdAt }) => {
            const createdRequest = new Date(createdAt);
            const diffInMs = today - createdRequest;
            const diffInDays = diffInMs / (24 * 60 * 60 * 1000); // Diferença em dias
            return diffInDays > XDays;
        });

        await Promise.all(requestsToDelete.map(async ({ idAthlete }) => {
            await Athlet.destroy({ where: { idAthlete } });
        }));

        return allRequests;
    } catch (error) {
        throw new Error(`Erro ao limpar atletas obsoletos: ${error.message}`);
    }
}


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

module.exports = { diffIsBiggherThanXDaysPayment, cleanObsoletAthlets };

