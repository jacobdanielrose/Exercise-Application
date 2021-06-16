const express = require('express');

const Post = require('../models/post');

const router = express.Router();

router.route("/")
  .get((req,res) => {
    Post.find()
      .then(documents => {
        console.log(documents);
        res.status(200).json({
          message: "Posts fetched successfully!",
          posts: documents
        });
      });
  })
  .post((req, res, next) => {
      const post = new Post({
        title: req.body.title,
        content: req.body.content
      });

    post.save().then(createdPost => {
      res.status(201).json({
        message: "Post added successfully",
        postId: createdPost._id
      });
    });
  });

router.route("/:id")
  .get((req, res, next) => {
    Post.findById(req.params.id).then(post =>{
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: "Post not found!"});
      }
    });
  })
  .put((req, res, next) => {
    const post = new Post({
      _id: req.body.id,
      title: req.body.title,
      content: req.body.content
    })
    Post.updateOne({_id: req.params.id}, post).then((result) => {
      console.log(result);
      res.status(200).json({message: "Update successful!"});
    })
  })
  .delete((req, res, next) => {
    Post.deleteOne({_id: req.params.id})
      .then((result) => {
        console.log(result);
        res.status(200).json({message: "Post deleted!"});
      })
  });

module.exports = router;
