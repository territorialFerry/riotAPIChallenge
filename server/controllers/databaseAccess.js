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

      var championData = {'before': rows[0]};
      database.query(queryStringAfter, function(err, rows, field){
        if (err) throw err;
        championData['after'] = rows[0];
        console.log(championData);

        // Win percentages before and after along with a comparison
        var winPercentageBefore = Math.round(championData.before.TOTAL_GAMES_WON / championData.before.TOTAL_GAMES_PLAYED * 1000) / 10;
        var winPercentageAfter = Math.round(championData.after.TOTAL_GAMES_WON / championData.after.TOTAL_GAMES_PLAYED * 1000) / 10;
        var winPercentageChange = (winPercentageBefore < winPercentageAfter)? 'increase' : (winPercentageBefore === winPercentageAfter)? 'same' : 'decrease';

        console.log("WIN PERCENTAGE BEFORE: ", winPercentageBefore);
        console.log("WIN PERCENTAGE AFTER: ", winPercentageAfter);
        console.log("WIN PERCENTAGE CHANGE: ", winPercentageChange);

        // getting item usage percentages
        var items = {
          1026: 'Blasting Wand', 
          1058: 'Needlessly Large Rod', 
          3089: "Rabadon's Deathcap", 
          3157: "Zhonya's Hourglass", 
          3285: "Luden's Echo", 
          3116: "Rylai's Crystal Scepter", 
          3003: "Archangel's Staff", 
          3040: "Seraph's Embrace", 
          3027: "Rod of Ages", 
          3136: "Haunting Guise", 
          3151: "Liandry's Torment", 
          3135: "Void Staff", 
          3115: "Nashor's Tooth", 
          3152: "Will of the Ancients", 
          3165: "Morellonomicon", 
          3174: "Athene's Unholy Grail"
        }

        var itemPercentageChange = [];

        for (var key in championData.before){
          if (key.split('ITEM_').length === 2){
            var work = [];
            work.push(key.split('ITEM_')[1]);
            work.push(items[key.split('ITEM_')[1]]);
            work.push(Math.round(championData.before[key] / championData.before.TOTAL_GAMES_PLAYED * 1000) / 10);
            work.push(Math.round(championData.after[key] / championData.after.TOTAL_GAMES_PLAYED * 1000) / 10);
            itemPercentageChange.push(work);
          }
        }

        console.log("ZE ITEMS: ", itemPercentageChange);

        championData['CHAMP_NAME'] = championData.before.CHAMP_NAME;
        championData['winPercentageBefore'] = winPercentageBefore;
        championData['winPercentageAfter'] = winPercentageAfter;
        championData['winPercentageChange'] = winPercentageChange;
        championData['itemPercentageChange'] = itemPercentageChange;




        res.render('champion', {forTemplate: championData});
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