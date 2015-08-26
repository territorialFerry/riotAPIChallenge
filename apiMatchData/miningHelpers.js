var fs = require('fs');
var request = require('request');
var apiKey = require('../APIKEY/apiKey');
var rankedBeforePatchNA = require('../AP_ITEM_DATASET/5.11/RANKED_SOLO/NA');
var rankedAfterPatchNA = require('../AP_ITEM_DATASET/5.14/RANKED_SOLO/NA');



var queryForMatches = function(region, timePeriod, chunkSelection){

  // console.log("BEFORE: ", rankedBeforePatchNA[100]);
  // console.log("AFTER: ", rankedAfterPatchNA[100]);

  var chunks = {
    'test': [0, 1], 
    'first': [0, 2500],
    'seconed': [2500, 5000], 
    'third': [5000, 7500], 
    'fourth': [7500, 10000]
  }

  var apiURL;

  for (var i = chunks[chunkSelection][0]; i < chunks[chunkSelection][1]; i++){
    apiURL = 'https://na.api.pvp.net/api/lol/' + region + '/v2.2/match/' + rankedBeforePatchNA[i] + '?api_key=' + apiKey['key'];
    request(apiURL, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        fs.appendFile('apiMatchData/matchData/rankedBeforePatchNA.json', 'ZBREAKZ' + body, function(err){
          if (err) throw err;
          // console.log('the test data has been written');
        })
      }
    })
    
  }


}

module.exports = queryForMatches;