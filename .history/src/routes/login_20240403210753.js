var express = require('express');
var router = express.Router();


// jwt
const jwt = require('jsonwebtoken');



router.get('/', (req, res) => {
    res.send('<h1>Ola mundo !</h1>');
});


router.get('/message', (req, res) => {
    res.send('<h1>Tel de Login</h1>');
});


module.exports = router;