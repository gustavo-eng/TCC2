const express = require("express");
const router = express.Router();
const sendEmail = require('../utils/sendEmails');
const statusCode = require('../utils/statusCode.json');
const { success } = require("../helpers/response");
require('dotenv').config();

router.post("/", async (req, res) => {

    //const { email } = req.body;

    /*
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "gustavodias2609200@gmail.com",
            pass: process.env.PASS_EMAIL, // todo analisar troca dinamica
        },
        tls: {//todo analisar este tls
            rejectUnauthorized: false // Ignorar verificação do certificado SSL
        }
    });

    let mailOptions = {
        from: "gustavodias2609200@gmail.com",
        to: "gustavodias.2000@alunos.utfpr.edu.br",
        subject: 'Ola',
        text: 'Olha eu aqui dnovoo---- http://localhost:3001/',
        html: `<a href="http://localhost:3001/">http://localhost:3001/</a>`
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log("Error " + err.stack);
            res.status(500).json({ msg: "Email NAO enviado!" });
        } else {
            console.log("Email sent successfully");
            res.status(200).json({ msg: "Email enviado com sucesso" })
        }
    });
    */
    try {
        // recipient vem de body
        let sender = "gustavodias2609200@gmail.com";
        let recipient = "gustavodias.2000@alunos.utfpr.edu.br";
        let subject = "Email Modularizado";
        let text = "Link na url tal http://localhost:3001/resetPassword/newPassword"



        await sendEmail(sender, recipient, subject, text);

        res.status(statusCode.OK).json(success({}, "payload", "Email enviado com successo"))c;

    } catch (err) {

    }


});


//todo trocar para post
router.get("/newPassword", (req, res) => {
    //res.status(200).json({ msg: `Nova senha enviada` })
    res.status(200).send(`<h2>Hello World</h2>`);
});

module.exports = router;