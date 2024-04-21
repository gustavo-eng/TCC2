const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const uploadController = require("../controllers/upload");
const upload = require("../middleware/upload");

router.get("/", homeController.getHome);
router.post("/", upload.single("file"), uploadController.uploadFiles);
router.get()


module.exports = routes;