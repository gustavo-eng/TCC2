const fs = require('fs')


//const Image = db.images;
const Image = require('../model/testImage')
const uploadFiles = async (req, res) => {
    console.log(`-------------fafasdfaf----------------`)
    try {
        console.log(req.file);

        if (req.file == undefined) {
            return res.send(`You must select a file.`);
        }
        console.log('0000000')
        Image.create({
            type: req.file.mimetype,
            name: req.file.originalname,
            data: fs.readFileSync(
                __basedir + "/public" + req.file.filename
            ),
        }).then((image) => {
            fs.writeFileSync(
                __basedir + "/public" + image.name,
                image.data
            );

            return res.send(`File has been uploaded.`);
        });
    } catch (error) {
        //console.log(error);
        return res.send(`Error when trying upload images: ${error}`);
    }
};

module.exports = {
    uploadFiles,
};