// var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host: 'localhost', 
//   database: 'matchData'
// })

// connection.connect(function(err){
//   if (err){
//     console.error('error connecting: ' + err.stack);
//     return;
//   }

//   console.log('connected as id ' + conncection.threadId);
// });

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  database : 'matchData', 
  user : 'root'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
 
  console.log('The solution is: ', rows[0].solution);
});
 
module.exports = connection;