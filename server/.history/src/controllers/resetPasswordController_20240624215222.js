const express = require("express");
const router = express.Router();
const sendEmail = require('../utils/sendEmails');
const statusCode = require('../utils/statusCode.json');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const isAcceptedAthlet = require('../middleware/verifyAcceptAthlet');
const db = require('../config/db');
const { success, fail } = require("../helpers/response");
const returnUser = require('../middleware/verifyTypeUser');

require('dotenv').config();


exports.sendRequestEmail = async (req, res) => {
    try {
        // recipient vem de body
        const { email } = req.body;
        let user = await returnUser({ email });

        if (!user) return res.status(statusCode.NOT_FOUND).json(fail("User not found"));

        if (user.role.includes('athlet')) {
            let isAccepted = await isAcceptedAthlet(user.idAthlete);
            if (!isAccepted) return res.status(statusCode.UNAUTHORIZED).json(fail("Request pending..."));
        };

        user = await db.Athlet.findOne({ where: { email } });
        const resetToken = crypto.randomBytes(20).toString('hex');
        user.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
        await user.save();

        const resetUrl = `http://localhost:3000/resetPassword/${resetToken}`;
        const message = `You requested a password reset. Please make a PUT request to: \n\n ${resetUrl}`;

        let sender = "gustavodias2609200@gmail.com";
        let recipient = email; //gustavodias.2000@alunos.utfpr.edu.br
        let subject = "Controller";
        let text = message;

        await sendEmail(sender, recipient, subject, text);

        res.status(statusCode.OK).json(success({}, "payload", "Email enviado com successo"));


    } catch (err) {
        res.status(statusCode.BAD_REQUEST).json(fail("Error sending email. Error ==>  " + err));
    };
}