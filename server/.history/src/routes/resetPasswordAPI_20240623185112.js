const express = require("express");
const router = express.Router();
const sendEmail = require('../utils/sendEmails');
const statusCode = require('../utils/statusCode.json');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize')
// /import { Op } from '@sequelize/core';
const { success, fail } = require("../helpers/response");
const returnUser = require('../middleware/verifyTypeUser');
require('dotenv').config();


const db = require('../config/db');

const Athlet = db.Athlet;

// ====================================================== CASO FEITO APENAS PARA ATLETAS ALTERAR PARA FPRJ E ACADEMIA  ======================================================
// ====================================================== ADICIONAR ESSA LOGICA NO CONTROLER DA APLICACAO  ======================================================

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

        const { email } = req.body;

        let user = await returnUser({ email });
        if (!user) return res.status(statusCode.NOT_FOUND).json(fail("User not found"));

        user = await db.Athlet.findOne({ where: { email } })

        console.log(user)

        //todo compreender este codigo
        //todo  caso for aluno, verificar se ele foi aceito
        const resetToken = crypto.randomBytes(20).toString('hex');
        user.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
        //user.resetPasswordExpires = Date.now() + 60000; // 1 Minuto
        await user.save();


        const resetUrl = `http://localhost:3000/resetPassword/${resetToken}`;
        const message = `You requested a password reset. Please make a PUT request to: \n\n ${resetUrl}`;

        //todo adicionar condicao se user existe antes de passar esses parametros
        let sender = "gustavodias2609200@gmail.com";
        let recipient = "gustavodias.2000@alunos.utfpr.edu.br";
        let subject = "Email Modularizado";
        //let text = "Link na url tal http://localhost:3001/resetPassword/newPassword"
        let text = message;

        await sendEmail(sender, recipient, subject, text);


        res.status(statusCode.OK).json(success({}, "payload", "Email enviado com successo"));

    } catch (err) {
        res.status(500).json(fail("Error sending email. Error ==>  " + err));
    }

});


//todo trocar para post
router.put("/newPassword/:resetToken", async (req, res) => {
    //res.status(200).json({ msg: `Nova senha enviada` })
    const { resetToken } = req.params;
    const { password } = req.body;

    try {
        // Hash o token recebido
        const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');
        const user = await Athlet.findOne({
            resetPasswordToken: hashedToken,
            resetPasswordExpires: { [Op.gt]: Date.now() }
        });

        if (!user) return res.status(statusCode.NOT_FOUND).json(fail("User not found"));
        user.password = await bcrypt.hashSync(password, 10);
        user.resetPasswordToken = null;
        user.resetPasswordExpires = null;
        await user.save();
        console.log('Usuario atualizado')
        console.log(user)

        res.status(200).send('Password updated')



    } catch (err) {
        res.status(500).send('Error resetting password. Erro' + err);
    }
    //res.status(200).send(`<h2>Hello World</h2>`);

});

module.exports = router;