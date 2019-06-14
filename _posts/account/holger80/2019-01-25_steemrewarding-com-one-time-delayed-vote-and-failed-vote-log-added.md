
---
title: 'steemrewarding.com - one time delayed vote and failed vote log added'
permlink: steemrewarding-com-one-time-delayed-vote-and-failed-vote-log-added
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-01-25 16:35:03
categories:
- utopian-io
tags:
- utopian-io
- development
- rewarding
- autovoter
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmcpQ5YGoRQ8rUP13ELUP5kDGKUVkqkEakbwkAPXd1gx73'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<center>
![rewarding_batch.png](https://ipfs.busy.org/ipfs/QmcpQ5YGoRQ8rUP13ELUP5kDGKUVkqkEakbwkAPXd1gx73)
</center>

### Repository
https://github.com/holgern/steemrewarding

steemrewarding.com is a feature-rich automatic voting tool. It can be used to create voting rules at https://steemrewarding.com, when posting authority was given to the @rewarding account. I created a discord server for all topics regarding steemrewarding.com: https://discord.gg/qpsR8hf

## New features
### Delayed voting without creating a voting rule
The steemrewarding.com site has a new tab https://steemrewarding.com/delayed_vote, in which a delayed vote can be triggered. This will not create a voting rule and will lead to a one-time vote at the given delay with the given vote weight.

![image.png](https://ipfs.busy.org/ipfs/QmWFDJpk9VoMGy3L3YKhVX4f6CYyBLJa4hBv7GoEpGrYo8)

The authorperm can be copy and paste from the URL or, it is also possible to replace steemit by steemrewarding.

By replacing steemit in
![image.png](https://ipfs.busy.org/ipfs/QmYRZcuMr7DEs8Cpf7jVzHNatjvL36jTz7ff8Zx2AqPiNP)
with steemrewarding
![image.png](https://ipfs.busy.org/ipfs/QmThKtihgqoVaJiRrh2jJ7yZ1HWnCrEgpY3MKSvWJdT44Q)

the authorperm is filled correctly and the upvote can be triggered:
![image.png](https://ipfs.busy.org/ipfs/QmXMPGYGtPhayioHnwVDxcTrT35A9eXXLGx3krudn48tdy)

A new entry in the pending vote database is now created and can be viewed at: https://steemrewarding.com/show_pending_votes.

## Failed votes are stored in a new database
I created a new database `failed_vote_log` which is used to store failed votes.
For example, when a post is older than 6.5 days and cannot be upvoted, a new entry with a error message is created. Failed votes can be viewed under https://steemrewarding.com/show_failed_vote_log.

## Database connection handling is improved in the flask site
The database connection is now opened only once in the beginning and not before every database call:
```
db = dataset.connect(databaseConnector)
voteRulesTrx = VoteRulesTrx(db)
voteLogTrx = VoteLogTrx(db)
failedVoteLogTrx = FailedVoteLogTrx(db)
pendingVotesTrx = PendingVotesTrx(db)
```

On each database access, it is checked if the database connection still works by using a try/exception call:
```
    try:
        rules = voteRulesTrx.get_posts(name)
    except:
        db = dataset.connect(databaseConnector)
        voteRulesTrx = VoteRulesTrx(db)
        rules = voteRulesTrx.get_posts(name)
```
In case of a timeout, the database connection is recreated.

## vote_sbd can be specified

When `vote_sbd` is set and `vote_weight` is zero, the vote weight is calculated by:

```
if vote_weight <= 0:        
    vote_weight = voter_acc.get_vote_pct_for_SBD(pending_vote["vote_sbd"]) / 100
    if vote_weight > 100:
        vote_weight = 100
```
Is is now possible to always vote with 0.05$ for example. The vote weight is adapted to the current steem price (Of course this works only of the vote at 100% is sufficient high).

## Commits
### Add steemrewarding icon to homepage
* [commit 070663f](https://github.com/holgern/steemrewarding/commit/070663fa3587dd4e6f74a2ad90a8cab6c5d41119)
### implement vote_sbd rule parameter, can be set to upvote in STU
* [commit f577be3](https://github.com/holgern/steemrewarding/commit/f577be3412041e63673e810423978430eca97cfc)
* fix js path
* improve database connection handling in flask homepage

### one time delayed vote and failed votel added
* [commit a95683b](https://github.com/holgern/steemrewarding/commit/a95683b989d81742b867a4ee78e2f94adcc11f72)
* failed vote log entries with specific error message added for each possible case in upvote_post_comments.py
* site for displaying failed votes added and menu entry added for it
* one time vote site added and menu entry edded for it
* vote_delay_min is applyed when vote_when_vp_reached is True


### GitHub Account
https://github.com/holgern

- - -

This page is synchronized from the post: ['steemrewarding.com - one time delayed vote and failed vote log added'](https://steemit.com/@holger80/steemrewarding-com-one-time-delayed-vote-and-failed-vote-log-added)
