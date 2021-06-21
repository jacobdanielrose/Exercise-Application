const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../models/user');

const router = express.Router();

router.route("/login")
  .post((req, res, next) => {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
          email: req.body.email,
          password: hash
        });
        user.save()
          .then(result => {
            res.status(201).json({
              message: 'User created!',
              result: result
            });
          })
          .catch(err => {
            res.status(500).json({
              error: err
            });
          });
      });
  });

router.route("/signup")
  .post((req, res, next) => {
    email: req.body.email
  });

module.exports = router;
