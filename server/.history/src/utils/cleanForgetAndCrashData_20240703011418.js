const db = require('../config/db');
const Athlet = db.Athlet;
const Requests = db.Requests;


async function cleanObsoletAthlets({ XDays }) {
    try {

        console.log('ENTROU em cleanObsoleteAthlets')

        const allRequests = await Requests.findAll({
            where: { aproved: false },
            raw: true
        });

        let today = new Date();

        if (allRequests.length > 0 && allRequests) {

            console.log('Entrou na funcaooo')
            const requestsToDelete = allRequests.filter(allRequests => {
                let createdRequest = new Date(allRequests.createdAt);
                let diffInMs = today - createdRequest;
                let diffInDays = diffInMs / (24 * 60 * 60 * 1000); // Diferença em dias
                return diffInDays > XDays;
            });

            await Promise.all(requestsToDelete.forEach(async request => {
                await Athlet.destroy({ where: { idAthlete: request.idAthlete } });
            }));

        }
        console.log('SAIU  DE cleanObsoleteAthlets')

    } catch (error) {
        throw new Error(`Erro ao limpar atletas obsoletos: ${error.message}`);
    }
}


module.exports = { cleanObsoletAthlets };

