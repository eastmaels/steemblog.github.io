
---
title: 'Steemmonsters tournament ranking is shown on beempy.com'
permlink: steemmonsters-tournament-ranking-is-shown-on-beempy-com
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-01-15 23:11:36
categories:
- steemmonsters
tags:
- steemmonsters
- tournament
- ranking
- challenges
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmfL1Ncq5VPAbnWe9iDqDbX7wdhTsSz65zEFwgPtBXddFJ'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I added my ranking of all played challenge matches to my beempy site: https://beempy.com/static/sm_ranking.html.

![image.png](https://ipfs.busy.org/ipfs/QmfL1Ncq5VPAbnWe9iDqDbX7wdhTsSz65zEFwgPtBXddFJ)

## How does it work?
I continuously storing all custom_json operation containing a `sm_submit_team` id in my database. Then, I checked the steemmonsters API: `https://steemmonsters.com/battle/result?id=trx_id` by entering the transaction id. When the `match_type` is equal to Challenge, I store the battle results. Declined matches are skipped. 

### ELO ranking
Every hour, I will update the ranking on the [beempy site](https://beempy.com/static/sm_ranking.html). 

The player expected score depends on the rating difference between player A and B. 
![image.png](https://ipfs.busy.org/ipfs/QmQfn3aDvoi9ZGas6LQTVjdkLdC3m5efqsdjUmCHqZ5m5a)
R_A is the rating of player A and R_B is the rating of player B.
When R_A is 200 and R_B is 0, the expected score for player A is 
```
1/(1+10**(-200/400)) = 0.7597
```
which means that player A has a probability of 76% to win and 24% to lose the match.

When the match result is known, the ranking of both player can be updated by:
![image.png](https://ipfs.busy.org/ipfs/QmNWJSYE5u4XfGwmAAta364mE34Dj15SRpr59aGJDvneci)
where R_A is the old ranking, K is the predefined K-factor, E_A is the expected score of player A and S_A is the match result for player A (1 -> A won, 0.5 -> draw and 0 -> A lost). The equation is similar for player B.

The K-factor is 40 for players which have played less than 30 games. It is set to 20 for players with a rating below 2400 and is set to 10 for players with a rating above 2400.

## Some numbers
10572 challenges were played from 737 different players. 
@toocurious is currently #1 with a ELO rating of 	357.43 (141 wins and 202 played games). Congratulations, good work!


- - -

This page is synchronized from the post: ['Steemmonsters tournament ranking is shown on beempy.com'](https://steemit.com/@holger80/steemmonsters-tournament-ranking-is-shown-on-beempy-com)
