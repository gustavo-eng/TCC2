var express = require('express');
var router = express.Router();

const { returnUser } = require('../controllers/verifyTypeOfUser');


require('dotenv').config();

// jwt
const jwt = require('jsonwebtoken');



router.get('/', (req, res) => {
    res.send('<h1>Ola mundo !</h1>');
});

router.post('/', (req, res) => {

    let cont = 1
    let objPermission = ["fprj", "gym", "student"];
    let { email, password } = req.body;
    //.assign ?
    let userLogged = ''
    if (email != '' && password != '') {
        //userId pega do banco
        let permission = 'not informed'
        let client = returnUser(email, password).then(user => {
            console.log(user)
            return user;
        }).catch(err => {
            res.status(404).json({ isLogged: false, msg: 'User not found' });
        })
        //

        console.log("___________ userLogged ____________");
        console.log(client)
        console.log('\n');
        console.log("Permissao do usuario")
        console.log(permission);
        console.log('\n');
        //todo tirar o email que esta aqui
        let token = jwt.sign({ user: email, userPermission: objPermission[0], userId: cont++ }, process.env.SECRET_JWT, { expiresIn: '24h' });
        res.json({ isLogged: true, token: token, msg: 'User successfully authenticated' });

    } else {

        res.status(401).json({ isLogged: false, msg: 'User not authenticated' });

    }
});


module.exports = router;