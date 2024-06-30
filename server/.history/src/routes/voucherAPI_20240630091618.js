
var express = require('express');
var router = express.Router();

const voucherController = require("../controllers/voucherController");



router.get("/:voucherPath", voucherController.getImage);

module.exports = router;

/*
router.get("/", (req, res) => {
    const { path } = req.body;

    const r = fs.createReadStream(path);
    const ps = new stream.PassThrough();

    stream.pipeline(
        r,
        ps,
        (err) => {
            console.log('No such file or any order kind of error');
            return res.status(400).json(fail())
        }
    );

    ps.pipe(res);

});
*/


/*
const fs = require('fs')
const stream = require('stream')

app.get('/report/:chart_id/:user_id',(req, res) => {
  const r = fs.createReadStream('path to file') // or any other way to get a readable stream
  const ps = new stream.PassThrough() // <---- this makes a trick with stream error handling
  stream.pipeline(
   r,
   ps, // <---- this makes a trick with stream error handling
   (err) => {
    if (err) {
      console.log(err) // No such file or any other kind of error
      return res.sendStatus(400);
    }
  })
  ps.pipe(res) // <---- this makes a trick with stream error handling
})
*/