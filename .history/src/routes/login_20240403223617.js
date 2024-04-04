var express = require('express');
var router = express.Router();


// jwt
const jwt = require('jsonwebtoken');



router.get('/', (req, res) => {
    res.send('<h1>Ola mundo !</h1>');
});

router.post('/', (req, res) => {
    // Nessa etapa sera feito a busca do banco de dados
    // Ja posso comecar as tabelas de autores com roles
    // previamente setadas
    // todo  1. Colocar a secret do jwt em .env
    //

    let { user, password } = req.body;
    if (user != '' && password != '') {
        let token = jwt.sign({ user: user, userPermission: 'student', userId: 1 }, '12345', { expiresIn: '24h' });
        res.json({ isLogged: true, token: token, msg: 'User successfully authenticated' });

    } else {
        // status 401
        res.status(401).json({ isLogged: false, msg: 'User not authenticated' });
    }

});


router.get('/message', (req, res) => {
    res.send('<h1>Tel de Login</h1>');
});



module.exports = router;