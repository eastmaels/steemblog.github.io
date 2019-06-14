
---
title: 'Improved automatic result scoring for challonge steemmonster tournaments'
permlink: improved-automatic-result-scoring-for-challonge-steemmonster-tournaments
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-01-04 17:07:45
categories:
- steemmonsters
tags:
- steemmonsters
- tournament
- challonge
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmRgq5Uys8RUgYs9aUCNWsNLjwBtvj7vksYL2J4AgCSUdP'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I introduced yesterday my @smtournament bot for automatically entering score points during a steemmonsters tournament at challonge.com. Everyone can use this bot. You can find the post [here](https://steemit.com/steemmonsters/@holger80/automatic-result-scoring-for-challonge-steemmonster-tournaments).

## How to do it
* Go to https://challonge.com/tournaments/new
* create a new tournament with `smtournament` as admin (  Advanced Options, share admin access)
* Send a transfer memo to @smtournament

The memo consists of a comma separated string with the following components:
* identifier (this is the URL after challonge.com) and not the name of the tournament
* level_limit (`Novice`, `Bronze`, `Silver`, `Gold` or `Diamond`)
* allowed_cards can be `all`, `gold_only`, `alpha_only`
* match_type can be `best_of_one` or `best_of_three`

For example:
`sm_test_tournament_011,Silver,all,best_of_3`

## New features
It is now possible to add `auto` and `randomize` to the transfer memo. It does not matter which is put first.

`auto` will automatically check participants in (when selected) and will start the tournament at the given time. It is also automatically finished when all results were entered.

`randomize` will shuffle the seeds of all participands before starting the tournament. 

`auto` and `randomize` must be placed last in the tranfer memo. Example:
```
sm_test_tournament_011,Silver,all,best_of_3,auto
```
or 
```
sm_test_tournament_011,Silver,all,best_of_3,randomize,auto
```

## New posts for announcement and results
When sending the transfer to @smtournament, a short announcement post is created. You can find a example here: https://steemit.com/steemmonsters/@smtournament/tournament-announcement-for-second-test-tournament-with-automatic-scoring

When the tournament is finished, a result post is created. Here is the post of the last test tournament:
https://steemit.com/steemmonsters/@smtournament/tournament-results-for-first-tournament-with-automatic-scoring

![image.png](https://ipfs.busy.org/ipfs/QmRgq5Uys8RUgYs9aUCNWsNLjwBtvj7vksYL2J4AgCSUdP)



- - -

This page is synchronized from the post: ['Improved automatic result scoring for challonge steemmonster tournaments'](https://steemit.com/@holger80/improved-automatic-result-scoring-for-challonge-steemmonster-tournaments)
