var express = require('express');
var router = express.Router();
const passport = require('passport')
const http = require('http')
const request = require('request')
const fs = require('fs')

var multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/');
  },
  filename: function (req, file, cb) {
    var filetype = 'wav';

    cb(null, file.originalname.substring(0, file.originalname.length - 4) + '-' + Date.now() + '.' + filetype);
  }
});
var upload = multer({ storage: storage });

const options = {
  method: "POST",
  url: "http://localhost:5000",
  headers: {
    "Content-Type": "multipart/form-data"
  },
  formData: {
    "voice": fs.createReadStream("../source/public/images/voice.wav")
  }
};

router.get('/vispeech', passport.authenticate('jwt', { session: false }), upload.single("voice"), (req, res, next) => {
  console.log(req.file)
  request.post({ url: "http://localhost:5000", formData: { "voice": fs.createReadStream(req.file.path) } }, (err, responHttp, body) => {
    if (err) console.log(err)
    res.send(body)
  })
})

router.use('/user/', require(__dirname + '/user'))

router.post('/logout', (req, res) => {
  if (req.user) {
    req.logOut();
    res.status(200).json({
      status: 200,
      message: 'Logout success'
    })
  }
  else {
    res.status(502).json({
      status: 502,
      message: 'Bad request'
    })
  }
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
