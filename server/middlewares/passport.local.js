const bcrypt = require('bcrypt')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const userDb = require('../models/user')

module.exports = function (app) {

    app.use(passport.initialize())
    app.use(passport.session())

    const ls = new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },
        (username, password, done) => {
            userDb.findByUsername(username).then(rows => {
                if (rows == null) {
                    return done(null, false, { message: 'Invalid username' })
                }

                const user = rows;
                let ret = bcrypt.compare(password, user.password)
                if (ret) {
                    return done(null, user)
                }

                return done(null, false, { message: 'Invalid password' })
            }).catch(err => {
                return done(err, false)
            })
        });

    passport.use(ls);

    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });
}