const express = require( "express" );
const cors = require( "cors" );
const mongoose = require("mongoose");

var server = express( );
var port = process.env.PORT || 3000 ;

//Data
var blogsModel = require("./schema.js");

// Middleware
server.use( express.urlencoded( {
    extended: false
} ) );
server.use( cors( ) );
server.use (express.json());



server.get("/blogs", function (req, res) {
  var response = {
    blogs: model.blogs
  };
    res.json(response);

});

server.post("/blogs", function (req, res) {
  model.blogs.push(req.body.blog);
  res.status(201);
  res.send();
});

mongoose.connect("mongodb+srv://Hoki-Lokison:LokisonHoki@mydatabase-exh3w.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true
}).then(function () {
  server.listen (port, function () {
    console.log(`listening on port ${port}`);
  });
});
