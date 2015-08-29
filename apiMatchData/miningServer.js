// match ID importation
var queryForMatches = require('./miningHelpers');
var rankedBeforePatchNA = require('../AP_ITEM_DATASET/5.11/RANKED_SOLO/NA');
var rankedAfterPatchNA = require('../AP_ITEM_DATASET/5.14/RANKED_SOLO/NA');
var rankedBeforePatchEUW = require('../AP_ITEM_DATASET/5.11/RANKED_SOLO/EUW');
var rankedAfterPatchEUW = require('../AP_ITEM_DATASET/5.14/RANKED_SOLO/EUW');
var rankedBeforePatchKR = require('../AP_ITEM_DATASET/5.11/RANKED_SOLO/KR');
var rankedAfterPatchKR = require('../AP_ITEM_DATASET/5.14/RANKED_SOLO/KR');

// bring in the mysql database

queryForMatches('euw', 'BEFORE', 'test', rankedBeforePatchEUW);


