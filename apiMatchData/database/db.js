var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost', 
  database: 'matchData'
})

connection.connect();