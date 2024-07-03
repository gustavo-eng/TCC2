const db = require('../config/db');
const Athlet = db.Athlet;
const Requests = db.Requests;


async function cleanObsoletAthlets({ XDays }) {
    try {

        const allRequests = await Requests.findAll({
            where: { aproved: false },
            raw: true
        });

        let today = new Date();

        if (allRequests.length > 0 && allRequests) {

            const requestsToDelete = allRequests.filter(allRequests => {
                let createdRequest = new Date(allRequests.createdAt);
                let diffInMs = today - createdRequest;
                let diffInDays = diffInMs / (24 * 60 * 60 * 1000); // Diferença em dias
                return diffInDays > XDays;
            });

            if (requestsToDelete.length > 0) {
                await Promise.all(requestsToDelete.map(async request => {
                    await Athlet.destroy({ where: { idAthlete: request.idAthlete } });
                }));
            }


        }

    } catch (error) {
        throw new Error(`Erro ao limpar atletas obsoletos: ${error.message}`);
    }
}


module.exports = { cleanObsoletAthlets };

