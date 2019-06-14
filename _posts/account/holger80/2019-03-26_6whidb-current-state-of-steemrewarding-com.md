
---
title: 'Current state of steemrewarding.com'
permlink: 6whidb-current-state-of-steemrewarding-com
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-03-26 13:50:57
categories:
- rewarding
tags:
- rewarding
- steem
- autovoter
- trail
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmPhk8pRRbgjHqHpNpSuuFiWkDuKppxDpyzSPpMCGZwS8a'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<center>![rewarding_batch2.png](https://ipfs.busy.org/ipfs/QmPhk8pRRbgjHqHpNpSuuFiWkDuKppxDpyzSPpMCGZwS8a)
</center>
steemrewarding.com is a  open-source feature-rich automatic voting tool ([github](https://github.com/holgern/steemrewarding)). It can be used to:
*  follow other voters (trail voting) and upvote shortly after they vote
* upvote posts/comments based on rules
* cast delayed upvotes on posts/comments without rule (by post a command or by using the steemrewarding.com interface)
* upvote already paid out posts (by post a command or by using the steemrewarding.com interface)

In order to use steemrewarding.com,  posting authority has to be given to the @rewarding by https://app.steemconnect.com/authorize/@rewarding . 

I created a discord server for all topics regarding steemrewarding.com: [discord invitation](https://discord.gg/qpsR8hf).

## Stats
93 user created 739 rules for upvoting posts, 69 rules for upvoting comments and 16 trail vote rules.

8 user did only use the delayed upvote or upvote paid out posts feature.

So in total, steemrewarding.com has 101 active users.

In the last 7 days, 3532 time based votes and 928 votepower based votes were broadcasted. 
3008 different authors were upvoted through steemrewarding.
The mean delay between the vote time and the specified vote time is 12.4 seconds.

One round lasts around 15 seconds, so there is sufficient space for more users :).
![image.png](https://ipfs.busy.org/ipfs/QmWa1BFmFyUzUXcNq1f4EFCWL22Kd1DhtKzT35ZWxeA8KW)

## How to use steemrewarding to upvote authors when the vote power is full and idle

It is possible to created vote power based voting rules, which mean that the specified author upvoted when the vote power is above `min_vp`. It is possible to include or exclude specific tags and apps. For each author, one rule for posts and one rule for comments can be created.

I'm a member of steembasicincome and upvoting their posts increases my rshares balance. So I created some vp based rules to upvote sbi (sbi2 - sbi10) posts when my VP is full and idle:
![image.png](https://ipfs.busy.org/ipfs/QmW7Mm81wHo8sVey5etyXCPFfHTBRUTqLoxvXT8d8UubTs)
It is possible to create a rule and copy it to other accounts by pressing the Copy link.

So I started with a rule for sbi2:
![image.png](https://ipfs.busy.org/ipfs/QmPbC9byW7HLP7ZEURVi35EAXoa6VzEARKDiYQTy9tG6RW)

I set the maximum upvote delay to four days (5760 min.) and allow only posts upvotes.

![image.png](https://ipfs.busy.org/ipfs/QmYzHeuHV2kSAiPDhRKta3j8Riwmp3WrHLMwfeWmjCgWzV)
The upvote should only be triggered (I enabled enabled `vote_when_vp_reached` to achieve this) when my voting power is equal or above`min_vp` = 100%.

![image.png](https://ipfs.busy.org/ipfs/QmVxqirdKWoYx3zZAScF2m8EAUMUKSh2G7wHwVJ5ogJz2L)
I set `vp_reached_order` to 3. By this my other VP based rules with lower `vp_reached_order` are used with prioritoy.

These rules for sbi2 to sbi10 are a good fall back, when I were not able to curate posts and my vote power reaches 100%.


- - -

This page is synchronized from the post: ['Current state of steemrewarding.com'](https://steemit.com/@holger80/6whidb-current-state-of-steemrewarding-com)
