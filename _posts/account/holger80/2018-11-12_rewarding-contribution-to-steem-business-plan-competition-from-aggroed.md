
---
title: 'rewarding - Contribution to Steem Business Plan Competition from aggroed'
permlink: rewarding-contribution-to-steem-business-plan-competition-from-aggroed
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-12 12:24:36
categories:
- contest
tags:
- contest
- steem
- rewarding
- business
- busy
thumbnail: None
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## Problem
When I manually curate and I see a post long before it is 15 minutes old, I have to wait and upvote later (Upvoting before will reduce my upvote value linearly). Normally, I get distracted and forget to upvote optimally at 15 minutes. The same happens for comments. It would also be convenient  to specify an STU amount for upvoting comments. (The upvote should be higher than the dust threshold of 0.02$). For example, I would like to upvote the comments under my post with 0.03$.

It is not easily possible to set beneficiaries of a post or comment. I have currently no options to specify beneficiaries when writing comments. 

I have no direct possibility to reward already paid-out posts without paying a fee.

## Vision
I want to create a simple solution that solves these problems. Writing a simple command into a comment will trigger a bot that upvotes the post/comment in my name. By doing this, I increase my engagement as I have to write a comment, so I can also write something about the post.

## Mission
I will create and maintain a bot that continuously parses the blockchain and reacts on specific commands. Everything will be free, but delegating small amounts to the bot will be rewarded (delegation is needed, as the bot may get RC problems otherwise).

## Plan
 I already created the @rewarding project to give a solution to this problem. The @rewarding bot is currently parsing the blockchain and reacts on the following commands (when the user has given rewarding the posting role, otherwise automatic upvoting is not possible):
(I will deactivate the rewarding bot  by $rewarding skip)
* $rewarding 50% 15min -> will upvote the parent post/comment with 50% using the voting power of the comment writer.  If there is no parent, the post is upvoted instead (triggered self-vote). The bot will upvote the comment with a small percentage to confirm the command.
* $rewarding 0.03$ 15min -> calculates the necessary vote percentage and upvotes in 15 min
* $rewarding set account1:10%,account2:10% -> sets beneficiaries of the post/comment itself
* $rewarding set account1:10% and upvote 50% -> set beneficiaries of the post/comment itself and upvote the parent. If there is no parent, the post is upvoted instead (triggered self-vote)
*  $rewarding 50% 15min in a comment replied to a paid-out post/comment: will create a comment with beneficiaries set to 100% to the author and upvote this created comment after 15min with 50%.

As mentioned, the bot will confirm the command when it is correct with a small upvote.

It is also possible to send a memo with 0.001 SBD/STEEM to rewarding with the following content:
* 100%,15min,authorperm
authorperm is a steemit post/comment
The link is then upvoted after 15 min with 100% in the example. Already paid-out posts are handled as above.

In the next three month, I will improve the command syntax, add new commands and observe it's usage.

## Budget
The script runs on a small server that costs a small fee each month. The bot consumes RC in operation. I will try to solve this by casting a vote from rewarding after the vote of the delegator was broadcasted on the same post/comment. By this, rewarding may earn some small curation reward that is sufficient in paying the server fee. By casting an additional vote for delegators, delegation is rewarded and the bot has sufficient RCs for operation from the delegated Steem Power.

@rewarding will also upvote all comments with a rewarding command inside to show that the command is valid. This may also lead to some tiny curation reward earnings.

Using the service with a transfer memo costs 0.001 SBD/STEEM.


@rewarding is only a small business, but I hope it still counts for the competition :). Also, I hope that I already started with the implementation does not disqualify me.

___
You can find the post about the business plan competition [here](https://steemit.com/business/@aggroed/getting-a-business-going-on-steem-100-steem-business-plan-competition).

- - -

This page is synchronized from the post: ['rewarding - Contribution to Steem Business Plan Competition from aggroed'](https://steemit.com/@holger80/rewarding-contribution-to-steem-business-plan-competition-from-aggroed)
