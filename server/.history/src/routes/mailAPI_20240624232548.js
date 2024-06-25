const { rsvgVersion } = require("canvas");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    const { email } = req.query
    //res.status(200).json({ msg: `Email informado  ${email} e test tal ${test}` })
    let API_KEY = '7rYEef6m8i68LpBKsdgt0HCIcKtpIcka7jlO'
    const url = `https://mailbite.io/api/check?key=${API_KEY}&email=${email}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({ error: data.message });
        }
        //{ status: 'ok', email_status: 'VALID' }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: `Error -> ${error.message}` });
    }
});

module.exports = router;

