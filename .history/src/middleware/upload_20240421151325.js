const multer = require("multer");

const imageFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        console.log("Nome do arquivo comeca com Image (startsWith)");
        cb(null, true);

    } else {
        console.log("NOT startsWith")
    }
}