var express = require("express");
var router = express.Router();
var passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("config");
const userDB = require("../models/user");
const util = require("../helpers/helper");

router.post(
  "/update-profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    var user = req.body;
    var username = user.username;
    if (username) {
      userDB
        .findByUsername(username)
        .then(value => {
          if (value) {
            Object.assign(value, user);
            value.password = util.hash_password(user.password);
            userDB
              .updateUser(value)
              .then(rs => {
                res.status(200).json({
                  code: 200,
                  message: "Update user success"
                });
              })
              .catch(err => {
                console.error(err);
                throw err;
              });
          }
        })
        .catch(err => {
          console.error(err);
          throw error;
        });
    } else {
      res.status(400).json({
        code: 400,
        status: "Bad request"
      });
    }
  }
);

router.post("/register", (req, res, next) => {
  const entity = req.body;
  var hash = util.hash_password(entity.password);
  entity.password = hash;
  userDB
    .addNewUser(entity)
    .then(value => {
      res.status(200).send({
        code: 200,
        message: "Register success"
      });
    })
    .catch(err => {
      res.status(400).send({
        code: 400,
        message: "Bad request"
      });
    });
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      return res.status(403).send({
        code: 403,
        message: info.message
      });
    }

    req.logIn(user, err => {
      let sign = {};
      sign.id = user.id;
      sign.role_id = user.role_id;
      sign.name = user.name;
      const token = jwt.sign(sign, config.get("jwt.secret"));
      if (err) {
        console.log(err);
        next(err);
      }
      return res.status(200).send({
        code: 200,
        message: "Login success",
        token: token
      });
    });
  })(req, res, next);
});

router.get("/all", (req, res, next) => {
  userDB
    .getAllUser()
    .then(users => {
      res.status(200).send({
        users: users,
        code: 200,
        message: "Success"
      });
    })
    .catch(err => {
      res.status(400).send({
        code: 400,
        message: "Bad request"
      });
    });
});

module.exports = router;
