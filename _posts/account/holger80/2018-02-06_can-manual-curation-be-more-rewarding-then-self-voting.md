
---
title: 'Can manual curation be more rewarding than self-voting?'
permlink: can-manual-curation-be-more-rewarding-then-self-voting
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-06 21:59:12
categories:
- steemit
tags:
- steemit
- voting
- curation
- steem
- reward
thumbnail: 'https://steemitimages.com/DQmeV7koPzTEKsBeJf7MhTU3NGDTnLypzuTHNiEkwq83CTK/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<center>![](https://steemitimages.com/DQmeV7koPzTEKsBeJf7MhTU3NGDTnLypzuTHNiEkwq83CTK/image.png)</center>
Assuming that you have 500 SP with a 100% vote worth $ 0.14. This results in 9.8 $ per week, when voting 10 times a day.  You could then receive:

* 4.9 SBD and 1.26 SP (20.60 US$) each week, if you upvote every 2.4h your own comment,
* 3.7 SBD (12.12 US$) each week, if you sell your vote at https://smartsteem.com/,
* 3.84 SBD (12.57 US$) each week, if you sell your vote at https://www.minnowbooster.net/,
* 3 Steem (11.64 US$) each week, if you delegate your SP on the market at https://www.minnowbooster.net/,
* up to 1 Steem (3.88 US$) if you vote for maximum curation award per week. 1 Steem is already hard to reach.

When is active curation more worth than self voting?
`S1` is the Steem price in US$ and `S2` is the SBD price in US$. 
```
4.9 * S2 + 1.26 S1 = 4.9*3.27 + 1.26*3.88 US$ = 20.60 US$
```
The 4.9 SBD for self-voting is scaled with `S1/3.88*S2`, where 3.88 is the current Steem price. The 1.26 SP is not scaled. Curation is more worth than self-voting when the inequality is true:
```
S1 > 4.9 * (S1/3.88)*S2 + 1.26*S1
1 > 4.9/3.88*S2 + 1.26
1 > 1.26 *S2 + 1.26
```

As this inequality is never true, self-voting will always win. This is not good for the platform. It is not a solution to forbid or punish self-voting, as such measures can be passed over by cross-voting with two accounts.

## What to change
So I think that the reward split should be changed, such that curation can be more worth than self-voting.
For example, when the reward split is fixed to 66% SBD and 33% SP payout:
```
S1 > 6.53 * (S1/3.88)*S2 + 0.84*S1
1 >  0.84 * S2 + 0.84
1.19 > S2
```
and the SBD price is below 1.19 US$, manual curation can be more rewarding than self-voting.



What do you think?
___
[image source](https://pixabay.com/en/vote-word-letters-scrabble-1804596/)

- - -

This page is synchronized from the post: ['Can manual curation be more rewarding than self-voting?'](https://steemit.com/@holger80/can-manual-curation-be-more-rewarding-then-self-voting)
