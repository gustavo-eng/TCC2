const multer = require("multer");
const path = require('path');




const imageFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);

    } else {
        cb('Please upload only images ', false);
    }
}
/*
  req.user = decode.user;
  req.userPermission = decode.userPermission;
  req.userId = decode.userId;
*/

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log('req')
        console.log(req.body)
        const uploadDir = path.join(__dirname, '..', 'uploads');
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${req.user}_${req.userId}_${file.originalname}`)
        //cb(null, `${Date.now()}-${file.originalname}`)
    }

});

var uploadFilePayment = multer({ storage: storage, fileFilter: imageFilter });
module.exports = uploadFilePayment;