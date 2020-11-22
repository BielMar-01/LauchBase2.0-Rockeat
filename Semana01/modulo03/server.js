const express = require('express');
const nunjuncks = require('nunjuncks');

const server = express();

server.set("view engine", "html");

nunjuncks.configure("views", {
  express:server
})

server.get("/", function(req, res) {
  return res.send("Hi! How's going?");
});

server.listen(5000, function() {
  console.log("Server is running");
});