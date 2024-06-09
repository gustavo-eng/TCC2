const { where } = require('sequelize');
const db = require('../config/db');



const returnUser = ({ email, password }) => {

    try {
        //let idAthlete = athlet.get({ plain: true }).idAthlete;
        const Fprj = db.Fprj.findOne({ where: { email: email, password: password } });
        if (Fprj) return Fprj.get({ plain: true });

        const Gym = db.Gym.findOne({ where: { email: email, password: password } })
        if (Fprj) return Fprj.get({ plain: true });

        const Athlet =

    } catch (err) {
        return err
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