const express = require("express");
const router = express.Router();
const statusCode = require('../utils/statusCode.json');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const controllerResetPassword = require('../controllers/resetPasswordController');
require('dotenv').config();


const db = require('../config/db');

const Athlet = db.Athlet;

// ====================================================== CASO FEITO APENAS PARA ATLETAS ALTERAR PARA FPRJ E ACADEMIA  ======================================================
// ====================================================== ADICIONAR ESSA LOGICA NO CONTROLER DA APLICACAO  ======================================================
router.post("/", controllerResetPassword.sendRequestEmail);

/*
const user = await User.findOne({
      where: {
        resetPasswordToken: hashedToken,
        resetPasswordExpires: { [Op.gt]: Date.now() },
      },
    });
*/
//todo trocar para post
router.put("/newPassword/:resetToken", async (req, res) => {
    //res.status(200).json({ msg: `Nova senha enviada` })
    const { resetToken } = req.params;
    const { password } = req.body;

    try {
        // Hash o token recebido
        const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');
        const user = await Athlet.findOne({
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
        console.log('Usuario atualizado')
        console.log(user)

        res.status(200).send('Password updated')



    } catch (err) {
        res.status(500).send('Error resetting password. Erro' + err);
    }
    //res.status(200).send(`<h2>Hello World</h2>`);

});

module.exports = router;