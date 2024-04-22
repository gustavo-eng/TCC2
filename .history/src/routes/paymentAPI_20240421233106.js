var express = require('express');
var router = express.Router();


router.get("/", (req, res) => {
    res.send('<h1> payment </h1>')
});

module.exports = router;