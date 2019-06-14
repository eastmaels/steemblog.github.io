
---
title: 'Steemmonsters tournament ranking week#1'
permlink: steemmonsters-tournament-ranking-week-1
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-01-08 11:18:21
categories:
- steemmonsters
tags:
- steemmonsters
- ranking
- challanges
- tournament
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/Qmdt7CXoRmn2e8HKskvARekMiXgro8ACn3wrV2ZgJZwnNf'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![image.png](https://ipfs.busy.org/ipfs/Qmdt7CXoRmn2e8HKskvARekMiXgro8ACn3wrV2ZgJZwnNf)
Since 2018-12-22 19:21:05, 6356 steemmonsters challenge battles were played. 654 player participated (104 more than last week). I collected all played challenges and calculated the ELO rating for each player.

### Data source
I streamed all custom_json operation with a `sm_submit_team` id. Then I checked the steemmonsters API: `https://steemmonsters.com/battle/result?id=trx_id` by entering the transaction id. When the `match_type` is equal to Challenge, I store the battle result in my database. Declined matches are skipped.

### Results


The table shows the ELO rating for the top 150 steemmonsters tournament and challenge participants.
The displayed changes are the increase or decrease of the rating from last week to now.

The ELO rating was calculated by skipping declined matches. The k-factor is set to 40 when a participant has less than 30 matches and to 20 otherwise. When the rating is over 2400, the k-factor is reduced to 10.

| rank | name | wins | battles | ELO | Changes |
| --- | --- | --- | --- | --- | --- |
| 1 | bji1203 | 165 | 250 | 321.93 | + 109.85 |
| 2 | glory7 | 197 | 284 | 291.22 | + 7.53 |
| 3 | tufkat | 31 | 41 | 284.91 | + 128.17 |
| 4 | fenrir78 | 25 | 36 | 266.70 | + 206.59 |
| 5 | toocurious | 73 | 107 | 211.82 | + 9.30 |
| 6 | marabara | 61 | 93 | 186.91 | + 21.23 |
| 7 | beeyou | 58 | 90 | 183.45 | + 31.90 |
| 8 | smongo | 77 | 142 | 177.12 | + 128.88 |
| 9 | wombykus | 53 | 81 | 176.79 | -77.01 |
| 10 | bubke | 13 | 19 | 172.52 | + 152.52 |
| 11 | gfriend96 | 27 | 54 | 165.60 | + 234.39 |
| 12 | clayboyn | 111 | 178 | 160.69 | -64.12 |
| 13 | pedrojesuss | 12 | 14 | 160.62 | + 160.62 |
| 14 | jarunik | 36 | 65 | 159.00 | + 144.88 |
| 15 | tradingideas | 81 | 126 | 157.51 | -41.28 |
| 16 | jrvacation | 28 | 45 | 156.20 | -6.42 |
| 17 | masterthematrix | 90 | 149 | 148.10 | + 3.91 |
| 18 | exyle | 11 | 18 | 145.78 | + 165.78 |
| 19 | jaki01 | 29 | 48 | 140.41 | + 103.35 |
| 20 | tailcock | 72 | 113 | 137.54 | -39.55 |
| 21 | clove71 | 24 | 40 | 136.95 | + 90.31 |
| 22 | pladozero | 27 | 45 | 136.86 | -40.19 |
| 23 | stiant | 55 | 92 | 135.37 | + 135.37 |
| 24 | jarvie | 36 | 58 | 132.32 | + 26.65 |
| 25 | oendertuerk | 10 | 11 | 132.08 | 0.00 |
| 26 | hendersonp | 79 | 150 | 131.01 | + 88.83 |
| 27 | colovhis | 43 | 69 | 129.64 | -40.62 |
| 28 | imperfect-one | 17 | 27 | 128.81 | + 82.45 |
| 29 | goodhello | 41 | 67 | 126.13 | -16.99 |
| 30 | ramires | 28 | 51 | 124.94 | -25.08 |
| 31 | aewind | 8 | 13 | 124.63 | + 124.63 |
| 32 | cranium | 106 | 167 | 124.43 | -82.43 |
| 33 | mellofello | 43 | 77 | 123.54 | -17.14 |
| 34 | vaansteam | 52 | 85 | 123.09 | -93.36 |
| 35 | just2random | 55 | 92 | 121.52 | -7.23 |
| 36 | digitalart | 9 | 9 | 119.95 | 0.00 |
| 37 | roki112 | 12 | 16 | 119.52 | + 119.52 |
| 38 | pizzachain | 63 | 116 | 119.51 | + 90.03 |
| 39 | ivz | 16 | 23 | 114.42 | 0.00 |
| 40 | steelman | 10 | 13 | 112.80 | 0.00 |
| 41 | cryptoeater | 11 | 16 | 112.09 | + 112.09 |
| 42 | nealmcspadden | 23 | 38 | 111.26 | + 4.67 |
| 43 | kevinli | 11 | 16 | 107.19 | 0.00 |
| 44 | sirtorito | 82 | 160 | 105.22 | + 63.45 |
| 45 | uwelang | 62 | 107 | 103.77 | -41.74 |
| 46 | freddhill | 10 | 15 | 101.91 | + 101.91 |
| 47 | elarawatodigital | 28 | 43 | 101.76 | 0.00 |
| 48 | tufkat.monsters | 21 | 36 | 100.68 | -13.73 |
| 49 | bountywolf | 114 | 218 | 100.66 | + 99.43 |
| 50 | dreemit | 39 | 86 | 99.52 | + 72.59 |
| 51 | wizardave | 70 | 125 | 97.16 | + 0.71 |
| 52 | dreamryder007 | 52 | 102 | 97.04 | + 8.28 |
| 53 | monster-one | 8 | 9 | 96.86 | 0.00 |
| 54 | flauwy | 18 | 29 | 95.53 | + 21.19 |
| 55 | wonsama | 13 | 29 | 95.46 | + 162.33 |
| 56 | munkiioh | 50 | 92 | 92.08 | + 30.82 |
| 57 | emrebeyler | 7 | 12 | 91.15 | + 91.15 |
| 58 | holoz0r | 13 | 19 | 89.18 | + 89.18 |
| 59 | abh12345 | 9 | 14 | 85.80 | 0.00 |
| 60 | freddbrito | 13 | 22 | 85.72 | + 105.20 |
| 61 | minloulou | 5 | 8 | 84.81 | + 131.92 |
| 62 | tendershepard | 17 | 39 | 84.03 | + 93.45 |
| 63 | stream-master | 15 | 28 | 83.94 | 0.00 |
| 64 | goose20 | 29 | 51 | 83.71 | -7.65 |
| 65 | wilhb81 | 22 | 41 | 83.28 | + 69.06 |
| 66 | gorayii | 8 | 10 | 83.16 | 0.00 |
| 67 | doctorcrypto | 11 | 22 | 83.07 | + 133.23 |
| 68 | damper | 16 | 30 | 82.73 | + 29.95 |
| 69 | zaku | 12 | 18 | 81.46 | + 31.08 |
| 70 | khan.dayyanz | 44 | 68 | 80.34 | -73.38 |
| 71 | pocus | 5 | 5 | 80.07 | 0.00 |
| 72 | aykaco | 12 | 18 | 79.85 | + 18.52 |
| 73 | nicholaslive | 13 | 24 | 77.58 | + 8.08 |
| 74 | coolbowser | 8 | 14 | 74.91 | 0.00 |
| 75 | randomgold | 7 | 11 | 73.90 | + 73.90 |
| 76 | sourovafrin | 26 | 49 | 71.81 | + 155.41 |
| 77 | andreinaabril | 12 | 20 | 71.62 | + 9.57 |
| 78 | smonster | 11 | 20 | 70.51 | + 70.51 |
| 79 | fantasycrypto | 5 | 6 | 69.33 | 0.00 |
| 80 | hotsauceislethal | 5 | 6 | 68.70 | 0.00 |
| 81 | pharesim | 52 | 99 | 68.02 | + 24.07 |
| 82 | gringotts | 7 | 13 | 66.77 | + 66.77 |
| 83 | ironshield | 12 | 16 | 66.34 | 0.00 |
| 84 | stever82 | 12 | 22 | 66.15 | -31.44 |
| 85 | aggamun | 10 | 17 | 65.26 | + 52.92 |
| 86 | pavonj | 19 | 28 | 65.23 | + 22.82 |
| 87 | contestkings | 3 | 6 | 64.86 | + 64.86 |
| 88 | stealthtrader | 97 | 223 | 64.22 | + 66.72 |
| 89 | monstermother | 63 | 112 | 64.07 | -64.22 |
| 90 | devonstokes | 5 | 6 | 63.01 | + 13.27 |
| 91 | spirits4you | 19 | 35 | 63.01 | + 7.59 |
| 92 | palikari123 | 67 | 137 | 61.75 | -43.53 |
| 93 | salvao | 37 | 67 | 60.61 | -3.72 |
| 94 | feuerbolt | 31 | 51 | 60.40 | -34.69 |
| 95 | newageinv | 6 | 10 | 59.91 | 0.00 |
| 96 | vegemite | 10 | 18 | 59.79 | + 21.08 |
| 97 | mmunited | 24 | 47 | 59.21 | + 59.21 |
| 98 | ausbitbank | 6 | 10 | 56.08 | 0.00 |
| 99 | morrona | 39 | 65 | 55.04 | -81.73 |
| 100 | hafizul | 18 | 37 | 54.55 | + 54.55 |
| 101 | sheikhsayem | 3 | 3 | 54.35 | + 54.35 |
| 102 | tech-master | 5 | 7 | 53.89 | + 16.18 |
| 103 | happy33 | 6 | 11 | 53.51 | 0.00 |
| 104 | gdwcoins | 3 | 3 | 53.43 | + 53.43 |
| 105 | randolphrope | 26 | 47 | 52.76 | -9.79 |
| 106 | jarwow | 22 | 47 | 52.49 | + 8.31 |
| 107 | amvanaken | 4 | 5 | 52.46 | + 53.61 |
| 108 | ablacknerd | 9 | 17 | 51.86 | + 51.86 |
| 109 | j-p-bs | 9 | 16 | 50.98 | + 76.77 |
| 110 | syedshakil | 4 | 5 | 48.98 | + 48.98 |
| 111 | joedukeg | 6 | 8 | 48.38 | 0.00 |
| 112 | rawutah | 5 | 9 | 48.24 | + 48.24 |
| 113 | tashidelek | 60 | 114 | 47.05 | -35.55 |
| 114 | walhallo777 | 3 | 4 | 45.76 | + 24.87 |
| 115 | floridasnail | 4 | 8 | 45.15 | + 65.15 |
| 116 | onefatindian | 15 | 28 | 43.72 | + 33.57 |
| 117 | aries02 | 28 | 54 | 43.58 | -12.35 |
| 118 | nateaguila | 16 | 29 | 43.04 | + 4.64 |
| 119 | rentmoney | 57 | 113 | 42.15 | -35.80 |
| 120 | kensai | 6 | 9 | 41.99 | 0.00 |
| 121 | xerox-bru | 61 | 118 | 41.80 | -38.21 |
| 122 | marcuswahl | 12 | 24 | 41.64 | -31.28 |
| 123 | philippekiene | 3 | 4 | 41.38 | 0.00 |
| 124 | fromthebeginning | 2 | 2 | 39.93 | + 19.93 |
| 125 | gank | 2 | 2 | 39.87 | 0.00 |
| 126 | jiann19 | 2 | 2 | 38.83 | 0.00 |
| 127 | otage | 14 | 28 | 38.75 | -23.80 |
| 128 | funworlding | 3 | 4 | 38.07 | + 14.49 |
| 129 | yabapmatt | 2 | 2 | 37.71 | 0.00 |
| 130 | biglotto | 2 | 2 | 37.71 | 0.00 |
| 131 | fratheone | 2 | 2 | 37.71 | 0.00 |
| 132 | leonardot1 | 2 | 2 | 37.71 | 0.00 |
| 133 | gpiglioni | 2 | 2 | 37.71 | 0.00 |
| 134 | von-doom | 2 | 2 | 37.71 | 0.00 |
| 135 | chromatic-dragon | 7 | 13 | 36.67 | + 36.67 |
| 136 | goldenhawkeye | 3 | 4 | 35.89 | + 35.89 |
| 137 | jedigeiss | 4 | 6 | 35.71 | 0.00 |
| 138 | davemccoy | 48 | 96 | 35.43 | + 2.20 |
| 139 | heyimsnuffles | 15 | 31 | 35.09 | + 0.96 |
| 140 | niklaus22 | 5 | 8 | 35.07 | 0.00 |
| 141 | willsaldeno | 57 | 124 | 35.06 | + 84.55 |
| 142 | jimbobbill | 15 | 35 | 34.01 | + 58.62 |
| 143 | fromheart | 6 | 12 | 32.92 | + 19.19 |
| 144 | treasurehunt | 3 | 5 | 31.97 | 0.00 |
| 145 | tcpolymath | 4 | 7 | 31.47 | 0.00 |
| 146 | malric-inferno | 7 | 11 | 31.46 | + 31.46 |
| 147 | zacki | 12 | 23 | 31.05 | + 31.05 |
| 148 | frankcapital | 5 | 8 | 30.55 | + 10.42 |
| 149 | alex-hm | 39 | 75 | 29.47 | -39.30 |
| 150 | mapanare | 43 | 76 | 28.65 | -38.55 |


- - -

This page is synchronized from the post: ['Steemmonsters tournament ranking week#1'](https://steemit.com/@holger80/steemmonsters-tournament-ranking-week-1)
