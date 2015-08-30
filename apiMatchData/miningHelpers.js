var fs = require('fs');
var request = require('request');
var apiKey = require('../APIKEY/apiKey');



var queryForMatches = function(region, timePeriod, matchRange, dataSet){

  // console.log("BEFORE: ", rankedBeforePatchNA[100]);
  // console.log("AFTER: ", rankedAfterPatchNA[100]);

  var chunks = {
    'test': [0, 1], 
    'largerTest': [0, 10], 
    'first': [0, 2500],
    'seconed': [2500, 5000], 
    'third': [5000, 7500], 
    'fourth': [7500, 10000]
  }

  var apiURL;

  for (var i = chunks[matchRange][0]; i < chunks[matchRange][1]; i++){
    apiURL = 'https://' + region + '.api.pvp.net/api/lol/' + region + '/v2.2/match/' + dataSet[i] + '?api_key=' + apiKey['key'];
    request(apiURL, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        
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