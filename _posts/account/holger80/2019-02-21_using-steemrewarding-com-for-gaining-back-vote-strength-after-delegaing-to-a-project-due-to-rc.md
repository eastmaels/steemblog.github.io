
---
title: 'Using steemrewarding.com for gaining back vote strength after delegaing to a project due to RC '
permlink: using-steemrewarding-com-for-gaining-back-vote-strength-after-delegaing-to-a-project-due-to-rc
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-02-21 13:17:15
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

### Current stats
60 user created 393 rules for upvoting posts and 36 rules for upvoting comments. Ten rules for vote trails were created.

The mean delay between the vote time and the specified vote time is 9.22 seconds for 2676 broadcasted votes within the last 7 days.  504 vp based votes were broadcasted within the last  7 days.

## Creating a vote trail for following your main account
I had to delegate 700 SP to my newest project @bookkeeping due to RC. Now, I'm using steemrewarding to get back my old vote strength.

At first I have to login with @bookkeeping at steemwarding.com:
![image.png](https://ipfs.busy.org/ipfs/QmW9vw6UqiJ1sjaYqM4YyMjdkL9PF1XE7vdHP5bAEZC9Un)
and then give rewarding posting authority by clicking on the link:

![image.png](https://ipfs.busy.org/ipfs/QmdictjGmRs8fgeTTsFB1yui2apuZmaEKGKG5XghJUj6M3)
After logging in into steemconnect:
![image.png](https://ipfs.busy.org/ipfs/QmYUirfJdTkNpGYesXpkAR8HRTYAFUZesnwZ87SioEyhrF)
I can create a new trailvote rule:

![image.png](https://ipfs.busy.org/ipfs/Qmb8DSuzAk9F3qvuTgZV1FKv8HPkdUeiXXYD8EtXcFL6kF)



I want that bookkeeping will follow my vote on  main posts voted by me. Furthermore, I want that the vote weight is adapted so that the vote power of bookkeeping keeps around 95%. I will use `vp_scaler` and `vote_weight_scaler ` in order to achieve this.

As the initial vote power of bookkeeping and holger80 is not equal and bookeeping should not upvote comments, its vote power will be not optimal. By adapting the vote weight to its vote power, I will move the vote power of bookkeeping in a more optimal range.

I selected 95% as this is the mean voting power of my main account.

### `vp_scaler`, `vote_weight_scaler` and `vote_weight_offset`
The vote weight formula of these three parameters is:
```
vote_weight = (vote_weight_scaler / 100 * follow_vote_weight + vote_weight_offset / 100) * (  100 - ((100-vp) *vp_scaler)))
```
where `follow_vote_weight` is the vote weight selected by the followed voter and `vp` is the votepower of the account itself.

`vp_scaler` scales the vote weight based on the vote power.

When `vote_weight_scaler = 100%`, `vote_weight_offset=0%` and `vp_scaler=0`, the vote weight is matched. If I set `vote_weight_scaler = 105.4%`, `vote_weight_offset=0%` and `vp_scaler=1` the following happens:

| bookkeeping VP | holger80 vote weight | resulting bookkeeping vote weight |
| --- | --- | --- |
| 95% | 75% | `1.054 * 0.75 * ( 100 - ((100-95) *1))` = 75.0 % |
| 100% | 75% | `1.054 * 0.75 * ( 100 - ((100-100) *1))` = 79.0 % |
| 90% | 75% | `1.054 * 0.75 * ( 100 - ((100-90) *1))` = 71.1 % |

The vote weight of bookkeeping is increased when its vote power is above 95% and reduced when it is below 95%. This should help keeping the votepower of bookkeeping around 95%.


## Setting the vote trail

@bookkeeping should follow @holger80 and upvote only main posts. 

![image.png](https://ipfs.busy.org/ipfs/QmRd9dX5cMQJdVtXd1WQ5qUcjh5SE4dQXhcHBjZVStUgNq)
![image.png](https://ipfs.busy.org/ipfs/QmP96uPeHUtdXn3esmxMEX87zf86GEgPhmSsZPeW4sNczB)

## Sounds quite complicated, how to improve?
After writing this small tutorial, I realize that steemrewarding is not really user friendly. Do you have any idea in how to make steemrewarding more user friendly? Or do you think that everything is fine?

- - -

This page is synchronized from the post: ['Using steemrewarding.com for gaining back vote strength after delegaing to a project due to RC '](https://steemit.com/@holger80/using-steemrewarding-com-for-gaining-back-vote-strength-after-delegaing-to-a-project-due-to-rc)
