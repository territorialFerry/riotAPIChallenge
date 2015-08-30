var database = require('../database/db');
var champData = require('./championID');

var champions = champData['data'];

// for loop to go through elements of champions
var queryString;
for (var champ in champions){
  queryString = 'INSERT INTO BEFORE_PATCH (CHAMP_ID, TITLE, CHAMP_NAME, ITEM_1026, ITEM_1058, ITEM_3089, ITEM_3157, ITEM_3285, ITEM_3116, ITEM_3003, ITEM_3040, ITEM_3027, ITEM_3136, ITEM_3151, ITEM_3135, ITEM_3115, ITEM_3152, ITEM_3165, ITEM_3174, TOTAL_GAMES_PLAYED, TOTAL_GAMES_WON) values (' + champions[champ]['id'] + ', "' + champions[champ]['title'] + '", "' + champions[champ]['name'] + '", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);'
  console.log("THE STRING", queryString);
  
  // insertion into the database
  database.query(queryString, function(err, rows, fields) {
    if (err) throw err;
   
    console.log('The test data has been inserted');
  });
  
}

