const fs = require("fs");

const { Image } = require('../model/Image');

// funcao que pode estar dentro do modelo
const uploadFiles = async (req, res) => {
    try {
        console.log("req.file controllers")
        console.log(req.file)
        if (req.file == undefined) {
            return res.send(`You must select a file.`);
        }

    } catch (err) {

    }

}