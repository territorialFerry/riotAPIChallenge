var fs = require('fs');
var request = require('request');
var apiKey = require('../APIKEY/apiKey');

// for making a single item update query string
var makeSingleItemUpdate = function(itemId){
  var work = 'ITEM_' + itemId + ' = ITEM_' + itemId + '+1';
  return work;
}

var joinSingleItems = function(itemArr){
  return itemArr.join(', ');
}

var prepareItemQueryString = function(itemArr){
  if (itemArr.length === 0){
    return '';
  } else if (itemArr.length === 1){
    return makeSingleItemUpdate(itemArr[0]) + ', ';
  } else {
    var work = [];
    itemArr.forEach(function(item){
      work.push(makeSingleItemUpdate(item));
    })
    return joinSingleItems(work) + ', ';
  }
}

// code for creating query string for insertion of champ data in database
var makeQueryForUpdate = function(timePeriod, champId, victory, itemArr){
  var work = 'UPDATE ' + timePeriod + '_PATCH SET '; 
  var identifier = 'WHERE CHAMP_ID = ' + champId + ';';

  if (victory){
    var championUsage = 'TOTAL_GAMES_PLAYED = TOTAL_GAMES_PLAYED+1, TOTAL_GAMES_WON = TOTAL_GAMES_WON+1 ';
  } else {
    var championUsage = 'TOTAL_GAMES_PLAYED = TOTAL_GAMES_PLAYED+1 ';
  }

  var itemArrChunk = prepareItemQueryString(itemArr);

  return work + itemArrChunk + championUsage + identifier;
}

var queryForMatches = function(region, timePeriod, matchRange, dataSet, database){

  // console.log("BEFORE: ", rankedBeforePatchNA[100]);
  // console.log("AFTER: ", rankedAfterPatchNA[100]);

  var chunks = {
    'test': [0, 1], 
    'largerTest': [0, 10], 
    'evenLargerTest': [0, 100], 
    'first': [0, 2500],
    'seconed': [2500, 5000], 
    'third': [5000, 7500], 
    'fourth': [7500, 10000]
  }

  var relevantItems = {
    1026: true, 
    1058: true, 
    3089: true, 
    3157: true, 
    3285: true, 
    3116: true, 
    3003: true, 
    3040: true, 
    3027: true, 
    3136: true, 
    3151: true, 
    3135: true, 
    3115: true, 
    3152: true, 
    3165: true, 
    3174: true, 
  }

  var apiURL;
  var queryString;
  var items;

  for (var i = chunks[matchRange][0]; i < chunks[matchRange][1]; i++){
    apiURL = 'https://' + region + '.api.pvp.net/api/lol/' + region + '/v2.2/match/' + dataSet[i] + '?api_key=' + apiKey['key'];
    request(apiURL, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        JSON.parse(response.body)['participants'].forEach(function(participant){
          console.log('----------------------------');
          console.log(participant['championId']);
          console.log(participant['stats']['winner']);
          console.log(participant['stats']['item0']);
          console.log(participant['stats']['item1']);
          console.log(participant['stats']['item2']);
          console.log(participant['stats']['item3']);
          console.log(participant['stats']['item4']);
          console.log(participant['stats']['item5']);
          console.log('----------------------------');
          items = [];
          for (var i = 0; i < 6; i++){
            items.push(participant['stats']['item' + i.toString()]);
          }
          items = items.filter(function(item){return relevantItems[item]});
          console.log(items);

          queryString = makeQueryForUpdate(timePeriod, participant['championId'], participant['stats']['winner'], items);

          console.log(queryString);

          database.query(queryString, function(err, rows, fields) {
            if (err) throw err;
           
            console.log('The test data has been inserted');
          });

          
        })
        
        // this code used to be used in order to simply write the data to a text file. 
        // will now insert it directly into a mysql database
        // fs.appendFile('apiMatchData/matchData/rankedBeforePatchNA.json', 'ZBREAKZ' + body, function(err){
        //   if (err) throw err;
        //   console.log('the test data has been written');
        // })

      }
    })
    
  }


}

module.exports = queryForMatches;