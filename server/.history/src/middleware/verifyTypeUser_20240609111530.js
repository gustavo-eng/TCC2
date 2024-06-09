const db = require('../config/db');
const Fprj = db.Fprj;
const Athlet = db.Athlet;
const Gym = db.Gym;


const returnUser = ({ email, password }) => {


}


module.exports = returnUser;

/*
const returnUser = ({email, senha}) => { // forca a passar o parametro  correto
    console.log('Email ' + email)
    console.log('Senha ' + senha)
  }


  returnUser({"email": "Gustavo", "senha": "fadsfadsfasdfas"})
*/