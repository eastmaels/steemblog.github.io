
---
title: 'steemrewarding.com - vote delay optimization added'
permlink: steemrewarding-com-vote-delay-optimization-added
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-04-18 13:42:36
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


<center>![rewarding_batch2.png](https://ipfs.busy.org/ipfs/QmPhk8pRRbgjHqHpNpSuuFiWkDuKppxDpyzSPpMCGZwS8a)
</center>
### Repository
https://github.com/holgern/steemrewarding

steemrewarding.com is a feature-rich automatic voting tool. It can be used to create voting rules at https://steemrewarding.com, when posting authority was given to the @rewarding account. I created a discord server for all topics regarding steemrewarding.com: [discord invitation](https://discord.gg/qpsR8hf).

steemrewarding is currently used by 126 users which created 1193 rules for posts, 85 rules for comments and 24 trail vote rules. In the last 7 days were 4244 time based votes and 1986 vp based votes broadcasted through steemrewarding. 
## New Features
### New rules can be directly created by entering steemrewarding.com/@author in the browser
When entering a steem account name after stemrewarding.com, a new rule can be directly be created. For example, https://steemrewarding.com/@utopian-io
will open the new rule editor:
![image.png](https://ipfs.busy.org/ipfs/QmXWdU1qTUfFSJXFNVoUEsL2vZY23TUxrWfaTTCMvQnh7n)

## Vote delay optimization 
A user of steemrewarding.com can now optimize  the vote delay time for all time based vote rules automatically. The optimization must be enabled in https://steemrewarding.com/settings:
![image.png](https://ipfs.busy.org/ipfs/QmbCuYmfqPrMZ7UWFuEc9vpUNSGnkxKjBoFaDqwHkQ2hMA)

When enabled, each vote_log is analyed in the calc_curation_performance.py script.
```
best_performance = 0
best_vote_delay_min = 0
for v in c["active_votes"]:
    v_SBD = stm.rshares_to_sbd(int(v["rshares"]))
    if v_SBD > 0 and int(v["rshares"]) > rshares * 0.5:
        
        p = float(curation_rewards_SBD["active_votes"][v["voter"]]) / v_SBD * 100
        if p > best_performance:
            best_performance = p
            best_vote_delay_min = ((v["time"]) - c["created"]).total_seconds() / 60
```
All given votes to the upvoted post/comment that have at least half the rshares of the rule creator are analyed. When there is a single vote that have a better performance, its vote delay time and its performance is stored.

The values are shown in the vote log https://steemrewarding.com/show_vote_log:
![image.png](https://ipfs.busy.org/ipfs/QmZPkN6GUPna3kyXTFAyzkiBEgpBoRrctCxL4tPfigDJwd)

A vote delay time is optimized when
* the actual vote delay is near the set vote delay (time difference below 1 minute)
* optimize_vote_delay  is enabled unter settings
* disable_optimization is not enabled for the rule
* the initial vote delay is between minimum_vote_delay  and maximum_vote_delay 

minimum_vote_delay  and maximum_vote_delay can be set at steemrewarding.com/settings
![image.png](https://ipfs.busy.org/ipfs/QmfXz3BKUczGB2U4tiiMrTaNsCXftt4N1Am7Ys2qXaSffX)

When a best_performance and best_vote_delay_min  was found for a vote rule log entry, the vote delay is optimized by:
```
minimum_vote_delay = acc_data["minimum_vote_delay"]
maximum_vote_delay = acc_data["maximum_vote_delay"]
optimize_threshold = 1 + (acc_data["optimize_threshold"] / 100)
optimize_ma_length = acc_data["optimize_ma_length"]

    
vote_rule = voteRulesTrx.get(vote_log["voter"], c["author"], c.is_main_post())
if vote_rule is not None and not vote_rule["disable_optimization"]:
    vote_delay_min = vote_rule["vote_delay_min"]
    if best_performance > performance * optimize_threshold and vote_delay_min <= maximum_vote_delay and vote_delay_min >= minimum_vote_delay:
        if optimize_ma_length > 1:
            vote_delay_min = (vote_delay_min * (optimize_ma_length - 1) + best_vote_delay_min) / optimize_ma_length
        else:
            vote_delay_min = best_vote_delay_min
        if vote_delay_min > maximum_vote_delay:
            vote_delay_min = maximum_vote_delay
        elif vote_delay_min < minimum_vote_delay:
            vote_delay_min = minimum_vote_delay
        voteRulesTrx.update({"voter": vote_log["voter"], "author": c["author"], "main_post": c.is_main_post(),
                             "vote_delay_min": vote_delay_min})
        vote_log["optimized_vote_delay_min"] = vote_delay_min
```
When the optimal vote delay differs less than `optimize_threshold` percentage from the old one, the vote delay is not changed. This prevents that the vote delay time from jittering.

A simplified moving average calculation is then used to update the vote delay time. The influence of the optimal voting time is set by `optimize_ma_length`. When it is set to 20, it will take 20 steps approach a new optimum. 

He is an example, that show how it works:
![image.png](https://ipfs.busy.org/ipfs/QmYjEP2vcDjRBwDcxb8hsK6qWodBkFx1t5JXSj9CPqEhJM)
I set the vote delay to 13 minutes, the best vote delay is at 8.2 minutes. The new vote delay is then:
(( `optimize_ma_length` - 1) * 13 min + 8.2 min) / `optimize_ma_length`
which is for  `optimize_ma_length=20` 12.76 minutes. This means that the vote delay for my rule is reduced in order to approach the optimal vote time.

The parameter `optimize_ma_length` and `optimize_threshold` can be set in steemrewarding.com/settings

![image.png](https://ipfs.busy.org/ipfs/QmeDrxhVR2oPRx5BSjJCcgbej7oppFCio1TdZMRjPjQ1uE)


## Commits
### Add vote optimization for all time based votes
* [commit 4bc0826](https://github.com/holgern/steemrewarding/commit/4bc082644e78cdf6b4e157a2d4c9ec11073447dd)
### Add option to add a rule by adding an account to steemrewarding.com (e.g. https://steemrewarding.com/@holger80)
* [commit 1585cf1](https://github.com/holgern/steemrewarding/commit/1585cf1bab64d15655b6d831ae4ed0a058e81924)
### GitHub Account
https://github.com/holgern

- - -

This page is synchronized from the post: ['steemrewarding.com - vote delay optimization added'](https://steemit.com/@holger80/steemrewarding-com-vote-delay-optimization-added)
