
---
title: 'Palnet: How to check your voting power and your PAL vote value'
permlink: palnet-how-to-check-your-voting-power-and-your-pal-vote-value
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-06-05 21:23:15
categories:
- palnet
tags:
- palnet
- steem-engine
- scotbot
- vote
- pool
thumbnail: 'https://cdn.steemitimages.com/DQmTD57zwYo4Voyo2HSjrPAkBLkXd5Pir7CJmjB9BJkMdLE/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Each Scot like PAL has their own reward pool and voting power. A vote on a palnet post is a normal STEEM vote operation which is processed by Scotbot. When the voter has staked some token, the vote adds token rshares to the post.

For example, when a voter has 1000 PAL staked, his 100% vote will add 1000 PAL rshares to the post (As the precision for PAL is 0, the token amount is equal to its rshares).

In order to check the size of a vote in PAL, we can check the scot api:
https://scot-api.steem-engine.com/info?token=PAL

![](https://cdn.steemitimages.com/DQmTD57zwYo4Voyo2HSjrPAkBLkXd5Pir7CJmjB9BJkMdLE/image.png)

A vote can be calculated by:
```
vote_value = vote_weight / 100 * voting_power / 100 * rshares / pending_rshares * reward_pool
```
assuming vote_weight and voting_power is 100 %, we get:
```
vote_value =  rshares / pending_rshares * reward_pool
```
after entering the current values:
```
vote_value =  rshares / 2937387* 894 = rshares / 3285.67
```

When someone stakes 3286 PAL, his 100% vote value is currently worth 1 PAL.

## Vote power
The vote power calculation is similar to steem, with the difference that when voting outside palnet, the PAL voting power will not be reduced.

You can check your voting power with a tool by @blockchainstudio:
![](https://cdn.steemitimages.com/DQmWQ9DmMhppoHPoya9MsRQ7wTUrA4EmsFTp2Czqr65mojm/image.png)

https://economicstudio.github.io/vp/?a=aggroed&t=PAL

the url parameter are a=<account_name> and t=<token_name>

## Downvoting pool
The pal token has a seperate downvoting pool. A downvote consumes 20% of its pool, thus one free downvote per day is available. when downvoting more often, the downvote will have less and less effect. Downvoting removes rshares from a post, when the downvoter has staked PAL token.

- - -

This page is synchronized from the post: ['Palnet: How to check your voting power and your PAL vote value'](https://steemit.com/@holger80/palnet-how-to-check-your-voting-power-and-your-pal-vote-value)
