const express = require('express');

const app = express();

app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.use("/posts",(req,res) => {
  const posts = [
    {
    id: "fas2d3frwe",
    title: "First server-side post",
    content: "This is comming from the server"
  },
    {
      id: "fas2d3frwe",
      title: "Second server-side post",
      content: "This is comming from the server"
    }
  ];
  res.status(200).json({
    message: "Posts fetched successfully!",
    posts: posts
  })
});

module.exports = app;
