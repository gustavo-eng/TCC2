var express = require('express');
var router = express.Router();
require('dotenv').config();


// Middlewares
const Auth = require('../middleware/Auth');
const Permissao = require('../middleware/permission');


router.get('/', Auth.controllAccess, (req, res) => {
    res.send(`<h1>FFFRota professores - Permissao de usuario - ${req.userPermission}</h1>`);
});


module.exports = router;