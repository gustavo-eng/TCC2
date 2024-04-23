var express = require('express');
var router = express.Router();
require('dotenv').config();

// jwt
const jwt = require('jsonwebtoken');



router.get('/', (req, res) => {
    res.send('<h1>Ola mundo !</h1>');
});


router.get('/message', (req, res) => {
    res.send('<h1>Tel de Login</h1>');
});

router.post('/', (req, res) => {
    // Nessa etapa sera feito a busca do banco de dados
    // Ja posso comecar as tabelas de autores com roles
    // previamente setadas
    // todo  1. Adicionar role para o usuario

    let objPermission = ["fprj", "gym"];
    let { user, password } = req.body;
    if (user != '' && password == user) {
        //userId pega do banco
        let token = jwt.sign({ user: user, userPermission: objPermission[0], userId: 1 }, process.env.SECRET_JWT, { expiresIn: '24h' });
        res.json({ isLogged: true, token: token, msg: 'User successfully authenticated' });

    } else {
        res.status(401).json({ isLogged: false, msg: 'User not authenticated' });
    }

});


module.exports = router;