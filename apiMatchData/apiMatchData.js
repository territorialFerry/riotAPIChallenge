// var fs = require('fs');
// var request = require('request');


var sendRequestForData = function(matchID){
  console.log('ran');
    // var xmlHttp = new XMLHttpRequest();
    // xmlHttp.onreadystatechange = function() { 
    //     if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
    //         // console.log(xmlHttp.responseText);
    //         localStorage['storedGames'] = localStorage['storedGames'] + ',' + xmlHttp.responseText;
    // }
    // xmlHttp.open("GET", 'https://na.api.pvp.net/api/lol/na/v2.2/match/' + matchID + '?api_key=' + APIKEY['key'], false); // true for asynchronous 
    // xmlHttp.send(null);
  

}

var mineData = function(){

  sendRequestForData(NAJSON[0]);
  sendRequestForData(NAJSON[1]);
  sendRequestForData(NAJSON[2]);

}