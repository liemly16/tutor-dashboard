var express = require('express');
var router = express.Router();
var passport = require('passport');
const jwt = require('jsonwebtoken')
const config = require('config')
const userDB = require('../models/user')
const util = require('../helpers/helper')

router.post('/register', (req, res, next) => {
    const entity = req.body;
    var hash = util.hash_password(entity.password);
    entity.password = hash;
    userDB.addNewUser(entity).then(value => {
        res.status(200).send({
            code: 200,
            message: 'Register success'
        })
    }).catch(err => {
        res.status(400).send({
            code: 400,
            message: 'Bad request'
        })
    })
})

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err)
            return next(err);
        if (!user) {
            return res.status(403).send({
                code: 403,
                message: info.message
            })
        }

        req.logIn(user, err => {
            const token = jwt.sign(user.id, config.get('jwt.secret'), {expiresIn: '1d'})
            if (err) return next(err);
            return res.status(200).send({
                code: 200,
                message: "Login success",
                token: token
            })
        });
    })(req, res, next);
})

module.exports = router;