const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const Post = require('./models/post');

const app = express();

// use env variable to store database password.
mongoose.connect("mongodb+srv://sam:" + process.env.MONGO_ATLAS_PASSWORD + "@cluster0.qwraz.mongodb.net/mean-app?retryWrites=true&w=majority",
  {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(() => {
    console.log("Connction to database failed!")
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.post("/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });

  post.save();
  console.log(post);
  res.status(201).json({
    message: "Post successfully created"
  });
});

app.get("/posts",(req,res) => {
  Post.find()
    .then(documents => {
      console.log(documents);
      res.status(200).json({
        message: "Posts fetched successfully!",
        posts: documents
      });
    });
});

app.delete("/posts/:id", (req, res, next) => {
  Post.deleteOne({_id: req.params.id})
    .then((result) => {
      console.log(result);
      res.status(200).json({message: "Post deleted!"});
    });
});


module.exports = app;
