const { where } = require('sequelize');
const db = require('../config/db');



const returnUser = ({ email, password }) => {

    try {

        //let idAthlete = athlet.get({ plain: true }).idAthlete;
        const Fprj = db.Fprj.findOne({ where: { email: email, password: password } });
        if (Fprj) return Fprj.get({ plain: true });

        const Gym = db.Gym.findOne({ where: { email: email, password: password } });
        if (Fprj) return Gym.get({ plain: true });

        const Athlet = db.Athlet.findOne({ where: { email: email, password: password } });
        if (Athlet) return Athlet.get({ plain: true });

        if (!Athlet && !Fprj && !Gym) {
            return false;
        }


    } catch (err) {
        return 'Error -> ' + err;
    }

}


module.exports = returnUser;

/*
const returnUser = ({email, senha}) => { // forca a passar o parametro  correto
    console.log('Email ' + email)
    console.log('Senha ' + senha)
  }


  returnUser({"email": "Gustavo", "senha": "fadsfadsfasdfas"})
*/