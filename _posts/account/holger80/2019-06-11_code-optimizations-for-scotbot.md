
---
title: 'Code optimizations for scotbot'
permlink: code-optimizations-for-scotbot
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-06-11 10:41:15
categories:
- steem-engine
tags:
- steem-engine
- scotbot
- palnet
- sct
- spt
thumbnail: 'https://cdn.steemitimages.com/DQmVLEQz4R6TLspWojh1uHaiMhZ2w8125zWdBp1YeodBrzM/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://cdn.steemitimages.com/DQmVLEQz4R6TLspWojh1uHaiMhZ2w8125zWdBp1YeodBrzM/image.png)

As more and more posts were created that have at least one of the scot tags included, my previous scotbot implementation was not efficient anymore.

I rewrote the part that handles the all pending rshares and the token reward pool. In order to show the pending token rewards for one posts, I need to know the current reward pool size and the sum of all pending rshares of all posts.

As there are currently around 15000 pending posts/comments and 217000 votes on palnet, going everytime through all posts and votes is not very efficient. 

The first part of improving this is now completed. The pending token amount for a post is no longer stored directly in the database and calculated directly on request. With this change, it is no longer necessary to change all pending posts/comments objects in the database at every round.

The complete sum of all rshares and the current reward pool can be received from the API:
https://scot-api.steem-engine.com/info?token=PAL
with the parameter `pending_rshares` and `reward_pool`. `pending_rshares` includes the author nonlinear curve.
The reward_pool is stored as integer, the token amount can be calculated by dividing it through `10**precision`.

Every posts has now a `vote_rshares`parameter, which is the sum of all vote rshares. The nonlinear author curve exponent is also stored in every posts with the`author_curve_exponent` parameter. The `vote_rshares`parameter and the  global `pending_rshares` are updated whenever a new vote arrives.

The pending token amount can then be calculated on request by:
```
pending_token = int_pow(vote_rshares, author_curve_exponent) / pending_rshares * reward_pool / 10**precision
```

## Blacklisted accounts
Whenever the @steemsc accounts mutes an account, this account will be blacklisted from all SCOT instances. A blacklisted account can not vote and can only post once a day.

Currently, only animalcontrol is muted by steemsc.

- - -

This page is synchronized from the post: ['Code optimizations for scotbot'](https://steemit.com/@holger80/code-optimizations-for-scotbot)
