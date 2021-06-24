// noinspection JSCheckFunctionSignatures

const express = require('express');

const checkAuth = require('../middleware/check-auth');
const extractFile = require('../middleware/file');

const {
  getPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost

} = require('../controllers/posts');

const router = express.Router();

router.route("/")
  .get(getPosts)
  .post(checkAuth, extractFile, createPost);

router.route("/:id")
  .get(getSinglePost)
  .put(checkAuth, extractFile, updatePost)
  .delete(checkAuth, deletePost);

module.exports = router;
