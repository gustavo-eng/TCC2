const { where } = require('sequelize');
const db = require('../config/db');
//let Fprj = db.Fprj;
const Athlet = db.Athlet;
const Gym = db.Gym;


const returnUser = ({ email, password }) => {

    try {

        const Fprj = db.Fprj.findOne({ where: { email: email, password: password } })
        if (Fprj) return Fprj.get({ plain: true });


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