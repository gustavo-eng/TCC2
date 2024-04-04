var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/', (req, res) => {
    res.send('<h1>Ola mundo !</h1>');
});


module.exports = router;