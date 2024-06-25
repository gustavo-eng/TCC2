const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const { email } = req.query
    res.status(200).json({ msg: `Email informado  ${email}` })
});

module.exports = router;

