const express = require("express");
const router = express.Router();

const nodemailer = require("nodemailer");

const sgMail = require('@sendgrid/mail')

// Inserir apenas conta do gmail

router.get("/", async (req, res) => {

    /*

    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        //port: 587,
        secure: false, // analisar
        auth: {
            user: "gustavodias.2000@alunos.utfpr.edu.br", // Como pegar esses parâmetros de forma automatica
            pass: "pflabo33", // Como pegar esses paramtros de forma automatica
        }
    });

    transporter.verify((error, success) => {
        if(error) {
            console.log('Erro ao enviar email');
            console.log(error);
        } else {
            console.log('Successo na verificação');
            console.log(success);
        };


    })

    const mailOptions = {
        from: "gustavodias.2000@alunos.utfpr.edu.br",
        //from: "gustavodias@alunos.utfpr.edu.br",
        to: "gustavodias@alunos.utfpr.edu.br",
        subject: "TCC2",
        text: "Hello World",
        html: "<p>Reset your password here </p>"

    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            console.log("Erro ao enviar emaail")
            console.log(err)

        } else {
            console.log("Envio de email bem sucedido ")
            console.log(info);
        };

     });
    */
    //Gu(EV)@ano2000$
    /*

    let transporter = nodemailer.createTransport({
        service: "gmail",
        //host: 'smtp.gmail.com',
        //port: 587,
        //secure: false,
        auth: {
            type: 'OAuth2',
            user: "gustavodias.2000@alunos.utfpr.edu.br",
            pass: "pflabo33",
            clientId: "500825242959-hd8hp2n4g76ntrcvvtcskknqop25q8db.apps.googleusercontent.com",
            clientSecret: "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",
            refreshToken: "1//04Ac3ckCmSy0nCgYIARAAGAQSNwF-L9Ir1fF28ffbYkGL7bG16Uw9x-_RMelqMUDyYPBWrYd725iGIxk_2_2340zAyJaq6yAmIIM",
            //tokenUrl: 'https://oauth2.googleapis.com/token'
        },


    })

    let mailOptions = {
        from: "gustavodias.2000@alunos.utfpr.edu.br",
        to: "gustavodias.2000@alunos.utfpr.edu.br",
        subject: 'Nodemailer Project',
        text: 'Hi from your nodemailer project'
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log("Error " + err.stack);
        } else {
            console.log("Email sent successfully");
        }
    });
    */
    let transporter = nodemailer.createTransport({
        service: "gmail",
        //host: 'smtp.gmail.com',
        //port: 587,
        //secure: false,
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
        text: 'Olha eu aqui dnovoo',
        html: `<a href="http://localhost:3001/"></a>`
    };


    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log("Error " + err.stack);
        } else {
            console.log("Email sent successfully");
        }
    });


    //zadp bafe dkgh vvib

    res.send('<h1>Rota send email </h1>')

});

module.exports = router;
