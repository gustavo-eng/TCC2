const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const { email } = req.query
});

module.exports = router;

