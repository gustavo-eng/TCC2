const sendEmail = require('../utils/sendEmails');
const statusCode = require('../utils/statusCode.json');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const isAcceptedAthlet = require('../helpers/verifyAcceptAthlet');
const db = require('../config/db');
const { success, fail } = require("../helpers/response");
const returnUser = require('../helpers/verifyTypeUser');

require('dotenv').config();

exports.sendRequestEmail = async (req, res) => {
    try {

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


        const resetUrl = `http://localhost:5173/forgot-password/${resetToken}`
        const message = `You requested a password reset. Please access : \n\n ${resetUrl}`;

        let recipient = email;
        let subject = "New Function reset password";
        let text = message;

        await sendEmail(process.env.EMAIL_SENDER, recipient, subject, text);
        res.status(statusCode.OK).json(success({token: resetToken || null}, "payload", "Email enviado com successo"));

    } catch (err) {
        res.status(statusCode.BAD_REQUEST).json(fail("Error sending email. Error ==>  " + err));
    };

};

exports.resetPassword = async (req, res) => {

    const { resetToken } = req.params;
    const { password } = req.body;

    try {

        if (!resetToken || !password) {
            return res.status(statusCode.BAD_REQUEST).json(fail("Token and password are required"));
        };

        // Hash o token recebido
        const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');
        const user = await db.Athlet.findOne({
            where: {
                resetPasswordToken: hashedToken,
                resetPasswordExpires: { [Op.gt]: Date.now() },
            },
        });

        if (!user) return res.status(statusCode.BAD_REQUEST).json(fail("Invalid token or token expired"));
        user.password = await bcrypt.hashSync(password, 10);
        user.resetPasswordToken = null;
        user.resetPasswordExpires = null;
        await user.save();

        res.status(statusCode.OK).json(success({}, "payload", "Senha resetada com sucesso!"))

    } catch (err) {
        res.status(500).json(fail("Error ao resetar senha. Error -> " + err));
    };

};







