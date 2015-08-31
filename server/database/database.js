var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  database : 'matchData', 
  user : 'root'
});
 
connection.connect();
 
module.exports = connection;