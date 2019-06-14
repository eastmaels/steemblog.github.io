
---
title: 'The steemmonsters site on beempy is adapted to the new gameplay'
permlink: the-steemmonsters-site-on-beempy-is-adapted-to-the-new-gameplay
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-27 15:24:54
categories:
- steemmonsters
tags:
- steemmonsters
- beempy
- statistics
- steemtank
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmaqLhbGPuFuLzHXewUoA8Xb9vnYxhKaySht6RirZN4ivt'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I adapted  https://beempy.com/steemmonsters for the new battle rules of steemmonsters.

Elo-rating of all played decks are shown for all possible rulesets and mana-caps:
![image.png](https://ipfs.busy.org/ipfs/QmaqLhbGPuFuLzHXewUoA8Xb9vnYxhKaySht6RirZN4ivt)

Each played deck (cards and levels) is stored into a database as unique string (e.g. `49-1,48-1,47-1,51-1,52-1,62-1`). The first number is the card id and the second number the card level. In the next step, I calculate the ELO ranking while handling each deck as player.

The ELO rating is calculated by:
![image.png](https://ipfs.busy.org/ipfs/Qmdb1VBYbVbVHhdKMA3QmxwZce6CLa6a8xzJLdcD7f25h6)
and 
![image.png](https://ipfs.busy.org/ipfs/QmPVnnBJiCU4SmcZjuQMCAcUYCakFVQwtpRh8BeHJY4mwG)
where
`R_A` is the rating of deck A, `R_B` is the rating of deck B, `k` is set to 40 and `S_A` is 1 when deck A won, 0 when deck B won or 0.5 when there is a draw.

The ELO-ranking is shown for each possible mana-cap / ruleset combination that has at least one played match.

For example, the best decks for the Unprotected rule set with a mana-cap of 20 can be found here:
https://beempy.com/static/sm_decks_ranking_20_Unprotected.html
![image.png](https://ipfs.busy.org/ipfs/Qmb9Jn79HAfgpgfDKQTAZVBA9DP8CEETpdyiWPmnfaZJjb)

`Mana_cap = [20,21]` means the deck was used for a mana-cap of 20 and 21. `Ruleset = 	['Standard', 'Silenced Summoners', 'Melee Mayhem', 'Taking Sides', 'Unprotected', 'Weak Magic', 'Target Practice']`  shows for which rulesets the deck was used.

Currently, all played battles are analysed. It will take some more hours to be complete. Then, the data are recalculated every hour.

____
I hope listing all played decks will help to master the steemmonsters card game.

- - -

This page is synchronized from the post: ['The steemmonsters site on beempy is adapted to the new gameplay'](https://steemit.com/@holger80/the-steemmonsters-site-on-beempy-is-adapted-to-the-new-gameplay)
