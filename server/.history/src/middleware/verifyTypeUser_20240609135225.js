const { where } = require('sequelize');
const db = require('../config/db');


const returnUser = async ({ email, password }) => {
    try {
        console.log('Entrou na funcao returnUser **');
        /*
        const Fprj = await db.Fprj.findOne({ where: { email: email, password: password } });
        if (Fprj) return Fprj.get({ plain: true });

        const Gym = await db.Gym.findOne({ where: { email: email, password: password } });
        if (Gym) return Gym.get({ plain: true });
        */
        let user = {}

        const Athlet = await db.Athlet.findOne({ where: { email, password } });
        if (Athlet) {
            console.log('tem atleta')
            //return Athlet.get({ plain: true });
        }

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