var database = require('../database/database');

var interact = {

  initial: function(req, res, next){
    var queryString = 'SELECT CHAMP_ID, CHAMP_NAME, TITLE FROM BEFORE_PATCH;';

    database.query(queryString, function(err, rows, field){
      if (err) throw err;

      function alphabetical(a, b){
        var A = a.CHAMP_NAME.toLowerCase();
        var B = b.CHAMP_NAME.toLowerCase();
        if (A < B){
          return -1;
        }else if (A > B){
         return  1;
        }else{
         return 0;
        }
      }

      rows.sort(alphabetical);

      var correctImageName = {
        'ChoGath': 'Chogath', 
        'Fiddlesticks': 'FiddleSticks', 
        'KhaZix': 'Khazix', 
        'LeBlanc': 'Leblanc', 
        'VelKoz': 'VelKoz'
      }

      rows.map(function(value){
        var work = '';
        for (var i = 0; i < value['CHAMP_NAME'].length; i++){
          if (" '.".indexOf(value['CHAMP_NAME'][i]) === -1){
            work+= value['CHAMP_NAME'][i];
          }
        }
        // work = work.toLowerCase();
        // work = work[0].toUpperCase() + work.split('').slice(1).join('');
        if (correctImageName[work] !== undefined){
          value['forImage'] = correctImageName[work]; 
        } else {
          value['forImage'] = work;
        }
        return value;
      })

      res.render('index', {champions: rows});
    })
  }, 

  champSelect: function(req, res, next, champion){
    var queryStringBefore = 'SELECT * FROM BEFORE_PATCH WHERE CHAMP_NAME = "' + champion + '";';
    var queryStringAfter = 'SELECT * FROM AFTER_PATCH WHERE CHAMP_NAME = "' + champion + '";';

    database.query(queryStringBefore, function(err, rows, field){
      if (err) throw err;

      var championData = {'before': rows};
      database.query(queryStringAfter, function(err, rows, field){
        if (err) throw err;
        championData['after'] = rows;
        res.send(championData);
      })
    })
  }, 

  test: function(req, res, next){
    var queryString = 'SELECT * FROM BEFORE_PATCH WHERE CHAMP_ID = 266;';

    database.query(queryString, function(err, rows, field){

      if (err) throw err;

      res.send(rows);
    })
  }
}

module.exports = interact;