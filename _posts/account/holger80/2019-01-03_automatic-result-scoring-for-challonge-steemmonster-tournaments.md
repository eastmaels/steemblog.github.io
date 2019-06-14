
---
title: 'Automatic result scoring for challonge steemmonster tournaments'
permlink: automatic-result-scoring-for-challonge-steemmonster-tournaments
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-01-03 10:53:57
categories:
- steemmonsters
tags:
- steemmonsters
- challonge
- tournament
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmVXiPkjscH8HMBfAXt3wPviFWYwyCm6tLASHHHS1nP97u'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I played a little with the [powerchallonge](https://github.com/m3fh4q/powerchallonge) API library for challonge.com and created a small bot for letting everyone automatically scoring challenge results into the challonge tournament.

## How does it work?
At first, a new tournament should be created at https://challonge.com/tournaments/new:

![image.png](https://ipfs.busy.org/ipfs/QmVXiPkjscH8HMBfAXt3wPviFWYwyCm6tLASHHHS1nP97u)

The entered name in URL is the identifier and will be important later.
It is important that every participant changed their displayed name to the steem account name. The challonge username can be different.

Their is no limitation to the game info or the registration. Example of a single elimination tournament with a registration page and check in:
![image.png](https://ipfs.busy.org/ipfs/QmNba73xFv32haim9vN3NU8VwtwkUbPrpsKybu5Q5RosNT)

![image.png](https://ipfs.busy.org/ipfs/QmWWe5BKTtVsnVejwugbiofbFphWGURBkZm6wmi9kz4hjp)

Important are the advanced options. Everything works only if `smtournament` is added as admin for entering scoring:
![image.png](https://ipfs.busy.org/ipfs/QmPjv53Xj8iSWgetN1kdzAesR9Ufp4JQuYy4cM1fKu8Ekp)
Without this, automatic scoring is not possible.

In summary:
* create a new tournament
* remember your url
* add  `smtournament` as admin

Send now a transfer memo to the steem account @smtournament with follwoing text:
`identifier,level_limit,allowed_cards,match_type`

* `identifier` is the URL without challonge.com, in my example sm_test_tournament_010
* `level_limit` can be Novice, Bronze, Silver, Gold or Diamond
* `allowed_cards` can be `all`, `gold_only`, `alpha_only`
* `match_type` can be best_of_one or best_of_three

`level_limit` and `allowed_cards` define which challenges will count. They have to be set at the beginning of each challenge. Played challenges with not fitting values will not count.

When `match_type` is `best_of_one `, one win is sufficient to win a match. If the match was a draw, it is repeated.
If it is set to `best_of_three`, a participant has won the match when he wins 2 steemmonster challenges.

## Test if it works as intented
I created a new tournament which is played today 14:00 UTC. Checkin is opened 15 minutes before.
I set `level_limit` to Silver, `allowed_cards` to all and `match_type` to best_of_one.

You can find the tournament here: https://challonge.com/sm_test_tournament_010

I send 0.001 STEEM to @smtournament for registering my tournament:
![image.png](https://ipfs.busy.org/ipfs/Qmd7FEYhHysfXS3o8dUukoZtP3fPMuKuHZ1oMhqbSuAfUf)

When I start the tournament at challonge.com, I will receive a transfer from  @smtournament when everything has worked so far and the results of all played matches should be entered automatically.

## Summary
It is possible to register a challonge tournament for automatc scoring.
* Create a tournament with smtournament as admin
* Send a transfer memo to @smtournament
* Start the tournament and check if you receive a confirmation
* All results should be entered automatically now.
* When a participant has a displayed name different from the steem account name, the results of all matches in which this participant is involved must be entered manually  (`_` are fine)
* When all matches are played, the tournament at challonge has to be closed manually

Please register at https://challonge.com/sm_test_tournament_010 and help me checking if everything works :). The tournament starts at 14:00 UTC.

___
What do you think?


- - -

This page is synchronized from the post: ['Automatic result scoring for challonge steemmonster tournaments'](https://steemit.com/@holger80/automatic-result-scoring-for-challonge-steemmonster-tournaments)
