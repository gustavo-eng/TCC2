const fs = require("fs");
const path = require('path');

const { Image } = require('../model/Image');

const uploadFiles = async (req, res) => {

    const uploadDir = path.join(__dirname, '..', 'uploads');
    try {
        const { newFiel } = req.body
        console.log("req.file controllers")
        console.log(req.file)
        if (req.file == undefined) {
            return res.send(`You must select a file.`);
        }


        Image.create({
            type: req.file.mimetype,
            //name: req.file.originalname,
            name: `${Date.now()}-${req.file.originalname}`,
            data: fs.readFileSync(
                path.join(uploadDir, req.file.filename)

            ),
            newFiel: req.body.newField || "Not informed"
            //newFiel: eq.body.newField
        }).then((image) => {
            console.log('deu certo dentro de imageCreate')

            fs.writeFileSync(
                //image.name
                path.join(uploadDir, image.name),
                image.data
            );
            return res.send(`File has been uploaded.`);
        })
    } catch (err) {
        console.log(err);
        return res.send(`Error when trying upload images: ${err}`);
    }

}
console.log('sai controler')

module.exports = {
    uploadFiles,
};