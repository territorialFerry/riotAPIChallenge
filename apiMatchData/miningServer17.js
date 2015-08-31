// match ID importation
var queryForMatches = require('./miningHelpers');
var rankedBeforePatchNA = require('../AP_ITEM_DATASET/5.11/RANKED_SOLO/NA');
var rankedAfterPatchNA = require('../AP_ITEM_DATASET/5.14/RANKED_SOLO/NA');
var rankedBeforePatchEUW = require('../AP_ITEM_DATASET/5.11/RANKED_SOLO/EUW');
var rankedAfterPatchEUW = require('../AP_ITEM_DATASET/5.14/RANKED_SOLO/EUW');
var rankedBeforePatchKR = require('../AP_ITEM_DATASET/5.11/RANKED_SOLO/KR');
var rankedAfterPatchKR = require('../AP_ITEM_DATASET/5.14/RANKED_SOLO/KR');

// bring in the mysql database
var database = require('./database/db');

// NA RANKED DATA BEFORE PATCH
// queryForMatches('na', 'BEFORE', 'first', rankedBeforePatchNA, database);
// queryForMatches('na', 'BEFORE', 'second', rankedBeforePatchNA, database);
// queryForMatches('na', 'BEFORE', 'third', rankedBeforePatchNA, database);
// queryForMatches('na', 'BEFORE', 'fourth', rankedBeforePatchNA, database);

// NA RANKED DATA AFTER PATCH
// queryForMatches('na', 'AFTER', 'first', rankedBeforePatchNA, database);
// queryForMatches('na', 'AFTER', 'second', rankedBeforePatchNA, database);
// queryForMatches('na', 'AFTER', 'third', rankedBeforePatchNA, database);
// queryForMatches('na', 'AFTER', 'fourth', rankedBeforePatchNA, database);

// EUW RANKED DATA BEFORE PATCH
// queryForMatches('euw', 'BEFORE', 'first', rankedBeforePatchEUW, database);
// queryForMatches('euw', 'BEFORE', 'second', rankedBeforePatchEUW, database);
// queryForMatches('euw', 'BEFORE', 'third', rankedBeforePatchEUW, database);
// queryForMatches('euw', 'BEFORE', 'fourth', rankedBeforePatchEUW, database);

// EUW RANKED DATA AFTER PATCH
// queryForMatches('euw', 'AFTER', 'first', rankedBeforePatchEUW, database);
// queryForMatches('euw', 'AFTER', 'second', rankedBeforePatchEUW, database);
// queryForMatches('euw', 'AFTER', 'third', rankedBeforePatchEUW, database);
// queryForMatches('euw', 'AFTER', 'fourth', rankedBeforePatchEUW, database);

// KR RANKED DATA BEFORE PATCH
queryForMatches('kr', 'BEFORE', 'first', rankedBeforePatchKR, database);
// queryForMatches('kr', 'BEFORE', 'second', rankedBeforePatchKR, database);
// queryForMatches('kr', 'BEFORE', 'third', rankedBeforePatchKR, database);
// queryForMatches('kr', 'BEFORE', 'fourth', rankedBeforePatchKR, database);

// KR RANKED DATA AFTER PATCH
// queryForMatches('kr', 'AFTER', 'first', rankedBeforePatchKR, database);
// queryForMatches('kr', 'AFTER', 'second', rankedBeforePatchKR, database);
// queryForMatches('kr', 'AFTER', 'third', rankedBeforePatchKR, database);
// queryForMatches('kr', 'AFTER', 'fourth', rankedBeforePatchKR, database);