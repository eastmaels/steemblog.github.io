
---
title: 'steemrewarding.com - curation performance is shown and other improvements'
permlink: steemrewarding-com-curation-performance-is-shown-and-other-improvements
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-01-29 21:37:57
categories:
- utopian-io
tags:
- utopian-io
- development
- rewarding
- autovote
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


<center>
![rewarding_batch2.png](https://ipfs.busy.org/ipfs/QmPhk8pRRbgjHqHpNpSuuFiWkDuKppxDpyzSPpMCGZwS8a)
</center>
### Repository
https://github.com/holgern/steemrewarding

steemrewarding.com is a feature-rich automatic voting tool. It can be used to create voting rules at https://steemrewarding.com, when posting authority was given to the @rewarding account. I created a discord server for all topics regarding steemrewarding.com: [discord invitation](https://discord.gg/qpsR8hf).


## New features
### Curation performance is shown for all recorded votes in the vote log
![image.png](https://ipfs.busy.org/ipfs/QmRg5CqNHcsHoz3m4q9wX6RJfNxS1hoCkUZCNyiPCEyCVM)
The curation performance is calculated by the `beem` function `get_curation_rewards`:
```
c = Comment(authorperm, steem_instance=stm)
curation_rewards_SBD = c.get_curation_rewards(pending_payout_SBD=True)
performance = 0
for vote in c["active_votes"]:
    if vote["voter"] != vote_log["voter"]:
        continue
    vote_SBD = stm.rshares_to_sbd(int(vote["rshares"]))
    curation_SBD = curation_rewards_SBD["active_votes"][vote["voter"]]
    if vote_SBD > 0:
        performance = (float(curation_SBD) / vote_SBD * 100)
```
In every round, 4 votes are analyzed. Thus, the performance calculation of all votes should be updated every few hours.

A curation performance of 100% means that the upvote rshares will be returned as curation rewards. 

### Leaving a comment for each vote
When a upvote comment string is set in https://steemrewarding.com/settings and `leave_comment` is set  to True in a vote rule, a comment is created below each voted post/comment.

For example, I stored the following upvote comment  at  https://steemrewarding.com/settings:
```
Hi {{name}},
{{voter}} was here.
```
`{{name}}` is replaced by the author username with a trailing @. `{{voter}}` is replaced by the voter user name with a trailing @.

Now the following comment will be created:
![image.png](https://ipfs.busy.org/ipfs/QmWjE6E49PPCquiqFFyXN94YYdqck4BuBL291LF54W55b1)

This feature is intended for community bots. I hope it will be useful.

### Deleting of pending votes is possible
Pending votes in https://steemrewarding.com/show_pending_votes can now be deleted. Be careful, there is no confirmation.

### Comment command parsing
Commands in comments and posts similar as shown here (I cannot write the command here, otherwise this post will be upvoted):
![image.png](https://ipfs.busy.org/ipfs/Qmb9mfKGnZL1QeJjV6JsNoFnAkpuMgPQ9oPMavrnUi2PHV)
will be parsed and a pending vote will be created in the database. The syntax is
keyword `upvote weight` % `vote delay` min
Vote delay and upvote weight can also be switched. There are unit tests for the command parsing which tests the following cases:
![image.png](https://ipfs.busy.org/ipfs/QmS4zLsdsX1XXvhQp9ucKvVDjfPMMd5GwAJ8JeExkoN2xj)

### New icon
I created a new icon for the project. I hope you like it:
![steemrewarding2.png](https://ipfs.busy.org/ipfs/QmfYFnTHtS2a71G5ZSf4Rbj3RaA9TaoJs24QFTPHTtQ5xc)



## Commits
### fix missing parameter in dict
* [commit 2a09983](https://github.com/holgern/steemrewarding/commit/2a0998335480f7433eab6f7218a7f36021cdadd8)

### Account settings, delete of pending votes and vote comment added
* [commit cb3c74d](https://github.com/holgern/steemrewarding/commit/cb3c74d35322fcb7af1abc1b4916ff8c8ef4a75c)
* a new user settings page was added in which a upvote comment can be edited
* pending votes can be deleted
* vote comments with place holder for author and voter are working
### New icon layout
* [commit f0aa756](https://github.com/holgern/steemrewarding/commit/f0aa75645be6f00ee53024da3003776ba8d4ee5a)
### several improvements and bug fixes 
* [commit c95454a](https://github.com/holgern/steemrewarding/commit/c95454aafab6e1cce8559a2f7a0fbb7deb88501b)
* delete old vote log added
* fixed count of votes per day and week
### add command parsing
* [commit 639e57f](https://github.com/holgern/steemrewarding/commit/639e57f94dffa97fa8437731eaff0b3fe3a8b2f6)
* commands e.g. $rewarding 100% 15min, or now parsed and processed
* unit test for command parsing added

### add curation performance calculation to vote logs
* [commit 8035d56](https://github.com/holgern/steemrewarding/commit/8035d566bfddd027bf4c2cdafa59a0a132198cff)
* for each logged vote, the curation performance is shown and stored in the database
* in each round, the performance for one vote log entry is updated


### GitHub Account
https://github.com/holgern

- - -

This page is synchronized from the post: ['steemrewarding.com - curation performance is shown and other improvements'](https://steemit.com/@holger80/steemrewarding-com-curation-performance-is-shown-and-other-improvements)
