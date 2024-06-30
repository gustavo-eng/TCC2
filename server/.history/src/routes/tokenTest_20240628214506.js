const express = require("express");
const router = express.Router();
const { controllAccess } = require('../middleware/Auth');


router.get('/', controllAccess, (req, res) => {
    res.send(`<h1>Nome do usuario: ${req.user} e user id ${req.userId} </h1>`)
});


module.exports = router;