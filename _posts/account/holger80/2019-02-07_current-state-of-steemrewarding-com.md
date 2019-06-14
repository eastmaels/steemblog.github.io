
---
title: 'Current state of steemrewarding.com'
permlink: current-state-of-steemrewarding-com
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-02-07 23:04:39
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

steemrewarding.com is a  open-source feature-rich automatic voting tool ([github](https://github.com/holgern/steemrewarding)). It can be used to create voting rules at https://steemrewarding.com, when posting authority was given to the @rewarding account. I created a discord server for all topics regarding steemrewarding.com: [discord invitation](https://discord.gg/qpsR8hf).


24 user created 141 rules for upvoting posts and 25 rules for upvoting comments. Three rules for vote trails were created. 

The mean delay between the vote time and the specified vote time is 8.46 seconds for 1064 broadcasted votes within the last 7 days.

One round consists of running 6 scripts and runs around 15 seconds:

![image.png](https://ipfs.busy.org/ipfs/QmdEnyTwzfqEFeRSVXZh13eJzz1ePwKG3GSCHAs2rwFaLF)


## Use cases for steemrewarding
Some possibilies for using steemrewarding:
### I want to upvote all actifit posts of author xyz
Just create a new rule with xyz as author and add `actifit` to include_apps.

### I wan't to upvote posts with utopian-io and development tag of author z
Create a new rule with z as author and add `utopian-io&development` as include_tags

### I wan't to upvote posts from author y when the pending payout is below 1 $
Create a new rule with y as author and enter 1 into the max_pending_payout field.

### I wan't to leave a comment for each vote on author x
Check the leave_comment box and enter a text in the settings page.

### I wan't to limit the number of votes to 7 per week
Enter a number in the `max_votes_per_week` field.

### I do not care about the time delay, just upvote when my vote power is 100 %
Check `vote_when_vp_reached` and  enter 100 into `min_vp`.

### I wan't to upvote author xy when he is mentioning me
Enter your username into `include_text`

### I wan't to follow all votes from xz on posts with actifit tag
Create a new trail vote rule and add `actifit` to include_tags. 

### What next
Besides bug fixing and monitoring that everything runs smooth, I'm planing to add the following:
* Allow more than one rule for a Author (At the moment only one post and one comment rule is possible)
* Automatically create vote rules for delegators to rewarding (At the moment 300 SP are delegated to rewarding, mainly for RC) so that they are upvoted on a daily basis.
* Add command parsing for upvoting already paid out posts

Any feedback on what is missing?


- - -

This page is synchronized from the post: ['Current state of steemrewarding.com'](https://steemit.com/@holger80/current-state-of-steemrewarding-com)
