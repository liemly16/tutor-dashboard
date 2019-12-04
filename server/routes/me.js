const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    delete req.user['password']
    res.status(200).send({
        code: 200,
        message: {
            iat: (new Date()).getTime(),
            ...req.user,
        }
    })
})
module.exports = router;