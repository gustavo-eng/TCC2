const express = require("express");
const router = express.Router();
const { controllAccess } = require('../middleware/Auth');


router.get('/', (req, res) => {
    res.send(`<h1>Nome do usuario: </h1>`)
});

/*
router.get('/', controllAccess, (req, res) => {
    res.send(`<h1>Nome do usuario: ${req.user} </h1>`)
});
*/

 
module.exports = router;  