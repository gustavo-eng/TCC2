const nodemailer = require("nodemailer");
require('dotenv').config();

const sendEmail = async (sender, recipient) => {

    //Config transporter
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: sender,
            pass: process.env.PASS_EMAIL, // todo analisar troca dinamica
        },
        tls: {//todo analisar este tls
            rejectUnauthorized: false // Ignorar verificação do certificado SSL
        }
    });






};