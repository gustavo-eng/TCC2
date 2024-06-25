const express = require("express");
const router = express.Router();
const controllerResetPassword = require('../controllers/resetPasswordController');
require('dotenv').config();

router.post("/", controllerResetPassword.sendRequestEmail);

router.put("/newPassword/:resetToken", controllerResetPassword.resetPassword);

module.exports = router;

