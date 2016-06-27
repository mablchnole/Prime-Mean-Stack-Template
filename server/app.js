var express = require('express');
var path = require('path');
var app = express();

// base url
app.get('/', function(req, res){
  console.log('in base url');
  res.sendFile(path.resolve('views/index.html'));
});

// spin up server
app.listen(8080, 'localhost', function(req, res){
  console.log('local up on 8080');
});

// static folder set to public
app.use(express.static('public'));
