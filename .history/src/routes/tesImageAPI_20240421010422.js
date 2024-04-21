const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const uploadController = require("../controllers/upload");
//const upload = require("../middleware/upload");
const upload = multer({ dest: 'upload/' });
//homeController.getHome,
router.get("/", (req, res) => {
    res.send('<h1>ola mundo image</h1>')
});
router.post("/", upload.single("file"), (req, res) => {
    console.log(req);
});


module.exports = router;