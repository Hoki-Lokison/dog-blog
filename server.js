const express = require( "express" );
const cors = require( "cors" );
const uuid = require( "uuid" )

var server = express( );
var port = 3000;

//Data
var data = require("./data.js")

// Middleware
server.use( express.urlencoded( {
    extended: false
} ) );
server.use( cors( ) );
server.use (express.json());

server.listen (port, function () {
  console.log(`listening on port ${port}`);
});

server.get("/blogs", function (req, res) {
  var response = {
    blogs: data.blogs
  };
    res.json(response);

});

server.post("/blogs", function (req, res) {
  data.blogs.push(req.body.blog);
  res.status(201);
  res.send();
});
