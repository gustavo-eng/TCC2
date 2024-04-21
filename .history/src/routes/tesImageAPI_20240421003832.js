// upload.js
const express = require('express');
const multer = require('multer');
const Image = require('../model/testImage');

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.post('/upload', upload.single('image'), async (req, res) => {
    try {
        const { originalname, buffer } = req.file;
        const image = await Image.create({ name: originalname, data: buffer });
        res.status(201).json({ message: 'Image uploaded successfully', image });
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).json({ error: 'Failed to upload image' });
    }
});

module.exports = router;
