var express = require('express');
var app = express();
var _ = require('lodash');

// handlebar setup
var engines = require('consolidate');

// importing helper functions
var databaseFunc = require('./controllers/databaseAccess');


app.engine('hbs', engines.handlebars);
// setting up view engines
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/', function(req, res, next){
  databaseFunc.initial(req, res, next);
})

app.get('/test', function(req, res, next){
  databaseFunc.test(req, res, next);
})

app.get('/champ/:champion', function(req, res, next){
  var champion = req.params.champion;
  databaseFunc.champSelect(req, res, next, champion);
});

var server = app.listen(3000, function(){
  console.log('Server is running at localhost:' + server.address().port);
})