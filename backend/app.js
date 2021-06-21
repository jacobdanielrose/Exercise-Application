const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

const dotenv = require('dotenv');
dotenv.config();

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
app.use("/images", express.static(path.join("backend/images")));

app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  next();
});

app.use("/posts", postsRoutes)
app.use("/user", userRoutes);

module.exports = app;
