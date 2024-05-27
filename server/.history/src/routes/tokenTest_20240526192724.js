const express = require("express");
const router = express.Router();
const { controllAccess } = require('../middleware/Auth')


router.get('/', controllAccess, (req, res) => {
    res.send('<h1>rota token para teste </h1>')
});


module.exports = router;