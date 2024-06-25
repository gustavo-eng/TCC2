const nodemailer = require("nodemailer");
require('dotenv').config();

const sendEmail = async (
    sender,
    recipient,
    subject,
    text
) => {
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

    let options = {
        from: sender,
        to: recipient,
        subject: subject,
        text: text
    };

    try {
        await transporter.sendMail(options, (err, data) => {
            if (err) {
                console.log("Error send email. Error  => " + err);
            } else {
                console.log('Success sent email');
            }
        })
    } catch (err) {
        throw new Error("Error try send email");
    }


};

module.exports = sendEmail;