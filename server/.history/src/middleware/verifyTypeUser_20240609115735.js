const { where } = require('sequelize');
const db = require('../config/db');


const returnUser = ({ email, password }) => {
    try {
        const Fprj = db.Fprj.findOne({ where: { email, password } });
        if (Fprj) return Fprj.get({ plain: true });

        const Gym = db.Gym.findOne({ where: { email, password } });
        if (Gym) return Gym.get({ plain: true });

        const Athlet = db.Athlet.findOne({ where: { email, password } });
        if (Athlet) return Athlet.get({ plain: true });

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