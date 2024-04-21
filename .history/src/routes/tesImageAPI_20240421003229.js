const express = require('express');
const multer = require('multer');

const testImage = require('../model/testImage');

const upload = multer({ dest: 'uploads/' });
const router = express.Router();



