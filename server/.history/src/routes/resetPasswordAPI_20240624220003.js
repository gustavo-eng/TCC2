const express = require("express");
const router = express.Router();
const statusCode = require('../utils/statusCode.json');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const controllerResetPassword = require('../controllers/resetPasswordController');
const db = require('../config/db');
require('dotenv').config();
const Athlet = db.Athlet;


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
router.put("/newPassword/:resetToken", controllerResetPassword.resetPassword);

module.exports = router;