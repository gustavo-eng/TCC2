var express = require('express');
var router = express.Router();
require('dotenv').config();

// jwt
const jwt = require('jsonwebtoken');



router.get('/', (req, res) => {
    res.send('<h1>Ola mundo !</h1>');
});

router.post('/', (req, res) => {

    let cont = 1
    let objPermission = ["fprj", "gym", "student"];
    let { user, password } = req.body;


    if (user != '' && password != '') {
        //userId pega do banco
        let permission = 'not informed'



        console.log('\n\n\n');
        console.log("Permissao do usuario")
        console.log(permission);
        console.log('\n\n\n');

        let token = jwt.sign({ user: user, userPermission: objPermission[0], userId: cont++ }, process.env.SECRET_JWT, { expiresIn: '24h' });
        res.json({ isLogged: true, token: token, msg: 'User successfully authenticated' });

    } else {

        res.status(401).json({ isLogged: false, msg: 'User not authenticated' });

    }
});


module.exports = router;