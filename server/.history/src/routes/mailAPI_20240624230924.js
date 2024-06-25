const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const { email, test } = req.query
    res.status(200).json({ msg: `Email informado  ${email} e test tal ${test}` })
});

module.exports = router;

