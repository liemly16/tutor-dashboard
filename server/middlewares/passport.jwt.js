const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const passport = require('passport')
const userDB = require('../models/user')
const config = require('config')

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.get('jwt.secret')
// opts.issuer = config.get('jwt.issuer')
// opts.audience = config.get('jwt.audience')
passport.use(new JwtStrategy(opts, (jwt_payload, cb) => {
    return userDB.findById(jwt_payload.userInfo.ID).then(user => {
        return cb(null, user);
    })
        .catch(err => {
            return cb(err);
        })

}));

