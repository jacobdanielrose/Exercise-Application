const express = require('express');

const {
  createUser,
  userLogin
} = require('../controllers/user');

const router = express.Router();

router.route("/signup")
  .post(createUser);

router.route("/login")
  .post(userLogin);

module.exports = router;
