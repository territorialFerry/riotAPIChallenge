var database = require('../database/db');
var champData = require('./championID');

console.log(champData);

database.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
 
  console.log('The solution is: ', rows[0].solution);
});