var express = require('express');
var router = express.Router();
require('dotenv').config();

/*
    Aqui sera aplicado middleware para que apenas as academias
    possam visualizar as
*/

router.get('/', (req, res) => {
    console.log('dotenv')
    console.log(process.env.SECRET_JWT);
    res.send('<h1>Rota professores</h1>');

});


module.exports = router;