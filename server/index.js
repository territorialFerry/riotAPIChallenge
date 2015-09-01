var express = require('express');
var app = express();
var _ = require('lodash');
var http = require('http');
var server = http.createServer(app);

// handlebar setup
var engines = require('consolidate');

// importing helper functions
var databaseFunc = require('./controllers/databaseAccess');


app.engine('hbs', engines.handlebars);
// setting up view engines
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/apchangeeffects', function(req, res, next){
  databaseFunc.initial(req, res, next);
})

app.get('/test', function(req, res, next){
  databaseFunc.test(req, res, next);
})

app.get('/champ/:champion', function(req, res, next){
  var champion = req.params.champion;
  databaseFunc.champSelect(req, res, next, champion);
});

// var server = app.listen(3000, function(){
//   console.log('Server is running at localhost:' + server.address().port);
// })

server.listen(8080,'127.0.0.1',function(){
 server.close(function(){
   server.listen(8080,'192.241.238.234')
 })
})
