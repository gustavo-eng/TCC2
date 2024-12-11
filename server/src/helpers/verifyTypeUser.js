const db = require('../config/db');

const returnUser = async ({ email }) => {

    try {


        const Athlet = await db.Athlet.findOne({ where: { email: email } });
        if (Athlet) return Athlet.get({ plain: true });

        const Gym = await db.Gym.findOne({ where: { email: email } });
        if (Gym) return Gym.get({ plain: true });

        const Fprj = await db.Fprj.findOne({ where: { email: email } });
        if (Fprj) return Fprj.get({ plain: true });
        return false;

    } catch (err) {
        return 'Error -> ' + err.message;
    }
};


module.exports = returnUser;
