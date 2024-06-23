const express = require("express");
const router = express.Router();

const nodemailer = require("nodemailer");


router.post("/", async (req, res) => {

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "gustavodias2609200@gmail.com",
            pass: "twsgiexgerjhcjju",
        },
        tls: {
            rejectUnauthorized: false // Ignorar verificação do certificado SSL
        }
    });

    let mailOptions = {
        from: "gustavodias2609200@gmail.com",
        to: "gustavodias.2000@alunos.utfpr.edu.br",
        subject: 'FPRJ SYSTEM',
        text: 'Olha eu aqui dnovoo---- http://localhost:3001/',
        html: `<a href="http://localhost:3001/">http://localhost:3001/</a>`
    };


    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log("Error " + err.stack);
        } else {
            console.log("Email sent successfully");
            res.status(200).json({ msg: "Email enviado com sucesso" })
        }
    });

    res.status(500).json({ msg: "Email NAO enviado!" });

});

module.exports = router;