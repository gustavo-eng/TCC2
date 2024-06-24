const db = require('../config/db');
const bcrypt = require('bcrypt');
////bcrypt.compareSync(password, email)

const returnUser = async ({ email }) => {

    try {


        const Athlet = await db.Athlet.findOne({ where: { email: email } });
        if (Athlet) return Athlet.get({ plain: true });

        const Gym = await db.Gym.findOne({ where: { email: email } });
        if (Gym) return Gym.get({ plain: true });
        //bcrypt.compareSync(password, email
        const Fprj = await db.Fprj.findOne({ where: { email: email } });
        if (Fprj) return Fprj.get({ plain: true });

        return false; // Se nenhum dos registros foi encontrado

    } catch (err) {
        return 'Error -> ' + err.message;
    }
};


module.exports = returnUser;

/*
const returnUser = ({email, senha}) => { // forca a passar o parametro  correto
    console.log('Email ' + email)
    console.log('Senha ' + senha)
  }


  returnUser({"email": "Gustavo", "senha": "fadsfadsfasdfas"})
*/