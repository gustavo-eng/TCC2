var express = require('express');
var router = express.Router();
require('dotenv').config();

/*
    Aqui sera aplicado middleware para que apenas as academias
    possam visualizar as
*/

const Auth = require('../middleware/Auth');


router.get('/', (req, res) => {
    res.send('<h1>FFFRota professores</h1>');
});


module.exports = router;