# Brainstorming Time

* On initial page, application will display a list of all the champs (Perhaps, allow search bar as well)
* Player can click on champion they want to learn about
* Player will be taken to a new page for that specific champion
* Changes occurred from patch 5.11 to 5.14 in the following items: Blasting Wand, Needlessly Large Rod, Rabadon's Deathcap, Zhonya's Hourglass, Luden's Echo, Rylai's Crystal Scepter, Archangel's Staff, Seraph's Embrace, Rod of Ages, Haunting Guise, Liandry's Torment, Void Staff, Nashor's Tooth, Will of the Ancients, Morellonomicon, Athene's Unholy Grail
* Whether a champion wins or loses a game, the champ will likely have instances where it used used the same items. 



# Database Categorization
### Make a single database that consists of all of the data for each champ. 
### One table for before patch, one table for after patch



#### Column names
* CHAMP_ID
* CHAMP_NAME
* TITLE
* TOTAL_GAMES_PLAYED
* TOTAL_GAMES_WON
* Blasting Wand Usage (1026) - ITEM_1026
* Needlessly Large Rod Usage (1058) - ITEM_1058
* Rabadon's Deathcap Usage (3089) - ITEM_3089
* Zhonya's Hourglass Usage (3157) - ITEM_3157
* Luden's Echo Usage (3285) - ITEM_3285
* Rylai's Crystal Scepter Usage (3116) - ITEM_3116
* Archangel's Staff Usage (3003) - ITEM_3003
* Seraph's Embrace Usage (3040 3048) - ITEM_3040
* Rod of Ages Usage (3027) - ITEM_3027
* Haunting Guise Usage (3136) - ITEM_3136
* Liandry's Torment Usage (3151) - ITEM_3151
* Void Staff Usage (3135) - ITEM_3135
* Nashor's Tooth Usage (3115) - ITEM_3115
* Will of the Ancients Usage (3152) - ITEM_3152
* Morellonomicon Usage (3165) - ITEM_3165
* Athene's Unholy Grail Usage (3174) - ITEM_3174

create table "tablename"
("column1" "data type" 
         [constraint],
 "column2" "data type" 
         [constraint],
 "column3" "data type" 
        [constraint]);
 [ ] = optional

create table AFTER_PATCH
(CHAMP_ID varchar(10), 
CHAMP_NAME varchar(20), 
TITLE varchar(100), 
TOTAL_GAMES_PLAYED varchar(10),
TOTAL_GAMES_WON varchar(10),
ITEM_1026 varchar(10), 
ITEM_1058 varchar(10), 
ITEM_3089 varchar(10), 
ITEM_3157 varchar(10), 
ITEM_3285 varchar(10), 
ITEM_3116 varchar(10), 
ITEM_3003 varchar(10), 
ITEM_3040 varchar(10), 
ITEM_3027 varchar(10), 
ITEM_3136 varchar(10), 
ITEM_3151 varchar(10), 
ITEM_3135 varchar(10),
ITEM_3115 varchar(10), 
ITEM_3152 varchar(10), 
ITEM_3165 varchar(10),
ITEM_3174 varchar(10))

#### DATA THAT IS NEEDED FROM API CALL 'participants' key
* championId (num)
* winner (boolean)
* item0 (num)
* item1 (num)
* item2 (num)
* item3 (num)
* item4 (num)
* item5 (num)