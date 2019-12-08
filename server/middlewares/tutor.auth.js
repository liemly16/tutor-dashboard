const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('config');
const CONST = require('../utils/constants');
const RESPONSE = require('../utils/response');
const jwt = require('jsonwebtoken');
const SECRET_KEY = config.get(CONST.JWT_SECRET);
const Utils = require('../utils/index');

module.exports = (req, res, next) => {
    var token = Utils.getBearerToken(req);
    if (token) {
        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if (err) {
                console.warn(err);
                RESPONSE.responseUnauthorize(res);
            }
            else {
                let role_id = Number(decoded.role_id);
                if ( role_id === CONST.ROLE_TUTOR || role_id === CONST.ROLE_ADMIN) {
                    next();
                }
                else {
                    RESPONSE.responseUnauthorize(res);
                }
            }
        })
    }
    else {
        RESPONSE.responseUnauthorize();
    }
}

