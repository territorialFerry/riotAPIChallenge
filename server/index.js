var express = require('express');
var app = express();

app.get('/', function(req, res, next){
  res.send('why hello there');
})

var server = app.listen(3000, function(){
  console.log('Server is running at localhost:' + server.address().port);
})