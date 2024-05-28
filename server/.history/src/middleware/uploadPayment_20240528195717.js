const multer = require("multer");
const path = require('path');

const uploadDir = path.join(__dirname, '..', 'uploads');

const imageFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
        throw new Error('Image error type')
        // retornar uma resposta ou res. ou o erro mesmos

    } else {
        return cb('Please upload only images ', false);
    }
}

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${req.user}_${req.userId}_${file.originalname}`);
    }

});

var uploadFilePayment = multer({ storage: storage, fileFilter: imageFilter });
module.exports = uploadFilePayment;

