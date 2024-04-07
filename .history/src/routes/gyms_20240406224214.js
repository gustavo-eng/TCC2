var express = require('express');
var router = express.Router();
require('dotenv').config();


// Middlewares
const Auth = require('../middleware/Auth');
const permissao = require('../middleware/permission');

//Apenas Teste
router.get('/', Auth.controllAccess, permissao, (req, res) => {
    res.send(`<h1>FFFRota professores - Permissao de usuario - ${req.userPermission}</h1>`);
});



module.exports = router;