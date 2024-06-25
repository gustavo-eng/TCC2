const express = require("express");
const router = express.Router();
const controllerResetPassword = require('../controllers/resetPasswordController');
require('dotenv').config();

router.post("/", controllerResetPassword.sendRequestEmail);

router.put("/newPassword/:resetToken", controllerResetPassword.resetPassword);

/*
const user = await User.findOne({
      where: {
        resetPasswordToken: hashedToken,
        resetPasswordExpires: { [Op.gt]: Date.now() },
      },
    });
*/
//todo trocar para post

module.exports = router;