// var fs = require('fs');
// var request = require('request');


var sendRequestForData = function(matchID){
  console.log('ran');
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            // console.log(xmlHttp.responseText);
            localStorage['storedGames'] = localStorage['storedGames'] + 'break_between' + xmlHttp.responseText;
    }
    xmlHttp.open("GET", 'https://na.api.pvp.net/api/lol/na/v2.2/match/' + matchID + '?api_key=' + APIKEY['key'], true); // true for asynchronous 
    xmlHttp.send(null); 
  

}

var mineData = function(){

  for (var i = 0; i < 200; i++){
    sendRequestForData(NAJSON[i]);
  }


}