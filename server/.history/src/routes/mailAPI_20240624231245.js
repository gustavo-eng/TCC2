const { rsvgVersion } = require("canvas");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    const { email, test } = req.query
    //res.status(200).json({ msg: `Email informado  ${email} e test tal ${test}` })
    let url = `https://mailbite.io/api/check?key=YOUR-API-KEY&email=${email}`;

    await fetch(url).then(response => {
        res.status(200).json(response.json())
    }).catch(err => {
        res.status(500).json({ err: `Error -> ` + err })
    });

});

module.exports = router;

