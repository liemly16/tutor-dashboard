const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('config');
const CONST = require('../utils/constants');
const RESPONSE = require('../utils/response');
const jwt = require('jsonwebtoken');
const SECRET_KEY = config.get(CONST.JWT_SECRET);

module.exports = (req, res, next) => {
    var token = ExtractJwt.fromAuthHeaderAsBearerToken();
    if (token) {
        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if (err) {
                console.warn(err);
                responseUnauthorize();
            }
            else {
                if (Number(decoded.role_id) === CONST.ROLE_ADMIN) {
                    next();
                }
                else {
                    RESPONSE.responseUnauthorize();
                }
            }
        })
    }
    else {
        RESPONSE.responseUnauthorize();
    }
}

