
---
title: 'Scotbot was down for around 10 hours and is up and running again'
permlink: scotbot-was-down-for-around-10-hours-and-is-up-and-running-again
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-06-07 09:06:27
categories:
- scotbot
tags:
- scotbot
- palnet
- sct
- weedcash
- steem-engine
thumbnail: 'https://cdn.steemitimages.com/DQmTgnmytAeoWuEkpaAuwosi74ombJbvD8fVWhBWSfotUtn/NedScottnew-01.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![NedScottnew-01.jpg](https://cdn.steemitimages.com/DQmTgnmytAeoWuEkpaAuwosi74ombJbvD8fVWhBWSfotUtn/NedScottnew-01.jpg)

Scotbot sits on top of the steem blockchain and parses every block, processes the data in it and updates its database. Of course, there are already many checks in place that assure that the processed data have the correct type and do not lead to a crash...

Yesterday evening (while I'm was sleeping), scotbot could not process a parameter which was None, so it crashed and could not proceed. I fixed it, added a new check that will prevent something in the future.  Scotbot is replaying all missing blocks and up and running again.

## PAL and ENG mining
I adapted the scotbot, so that in case scotbot halted, more than 10 winner are drawn. As scotbot was offline for 10h, 100 winner for ENG token and 90 winner for PAL token were dran:

![](https://cdn.steemitimages.com/DQmZX2ZNr2ew33c7zPZeNNHqPVAgw5JwSQxCnkUgyp8pkpt/image.png)

![](https://cdn.steemitimages.com/DQmSEkegBCXRZWt1xTGiHzTBoPaB4EBuh1k3LGuE7hFrqTT/image.png)

## Claim token
Claimed token should be sent out by now. Pending tokens are only removed from the database when the token sending was sucessfully

## Posts and votes
All posts and votes should be visible by now. As both are normal steem operation, they can not disappear.

## Why can I see no new posts on a nitrous instance as palnet.io when scotbot is down?
scotbot has to process votes and comments from the steem blockchain and add them to the database. The nitrous instances are getting their data from the scotbot API, when scotbot is down, no new data is provided throught the API and the nitrous instances cannot show new posts/comments/votes.

## Why did scobot halt, can you not go to the next block in case of an error?
I did not do chose this approach for a reason, as this would mean that scotbot may skip blockchain data. Assuming, that scotbot can not handle titles with a capital `A`. Just ignoring the error and skipping all posts with a capital `A` is not a good solution.

It is better when scotbot halts when the first post with a capital `A` appears and force me to investigate the issue. I would solve the problem and the post itself and also all future posts with a `A` will be processed. Seems to me the better approach.

As scotbot is new and I'm also adding new features to it, there may be happen some errors in the future. But I will fix them and then they will not happen again.

## Why is there a delay of some seconds until my vote or comment is visible?
As mentioned, scobot has first to process the blockchain data and update the database. This delay will be reduced in the future, when the code is optimized.

## Current database size
Currently,
* 419240 votes
*  64288 posts/comments
* 56642 accounts

are stored in the database. One stored vote/comment/post/account is related to one token. So when a posts accepts two token, it is two times in the database. The same is true for the accounts. 

825 accounts in the database have staked scot tokens, When the same account has staked two different token, he counts as 2 accounts in the database.

- - -

This page is synchronized from the post: ['Scotbot was down for around 10 hours and is up and running again'](https://steemit.com/@holger80/scotbot-was-down-for-around-10-hours-and-is-up-and-running-again)
