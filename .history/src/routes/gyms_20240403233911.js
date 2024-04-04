var express = require('express');
var router = express.Router();


/*
    Aqui sera aplicado middleware para que apenas as academias
    possam visualizar as
*/

router.get('/', (req, res) => {
    res.send('<h1>Rota professores</h1>');
});


module.exports = router;