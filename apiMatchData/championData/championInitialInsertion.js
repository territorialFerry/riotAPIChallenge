var database = require('../database/db');
var champData = require('./championID');

var champions = champData['data'];

// for loop to go through elements of champions
var queryString;
for (var champ in champions){
  queryString = 'INSERT INTO TEST (CHAMP_ID, TITLE) values (' + champions[champ]['id'] + ', "' + champions[champ]['title'] + '");'
  console.log("THE STRING", queryString);
  
  // insertion into the database
  database.query(queryString, function(err, rows, fields) {
    if (err) throw err;
   
    console.log('The test data has been inserted');
  });
  
}

