
---
title: 'Zero-sum game or buying votes'
permlink: zero-sum-game-or-buying-votes
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-01 23:41:03
categories:
- steem
tags:
- steem
- steemit
- rewards
- vote
thumbnail: 'https://steemitimages.com/DQmQgHxh6DcEimr69PNtjKoX9vsjsjcXiQrcJV9VfUHQdXE/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Unfortunately or luckily, I have to try new things. So, I bought votes for my last Posts. 
My idea was, that I could increase the curation rewards for my readers and also my author rewards. A win-win situation.
After one day, there are almost no visitors on my posts. Can I push the posts by buying votes? 
<center>![](https://steemitimages.com/DQmQgHxh6DcEimr69PNtjKoX9vsjsjcXiQrcJV9VfUHQdXE/image.png)
[source](https://richarddarbonne.wordpress.com/2011/01/15/washington-bus/)
</center>

The advertising seems quite tempting: you are getting 250 - 300% more than you pay. Here is a small list of sites:
* https://www.minnowbooster.net/
* https://smartsteem.com/
* https://steembottracker.com/#free

I read also about @grumpycat's 3.5 max post-age campaign and decided to use only bots that fulfill this.
So, I bought some SBD and paid bots to vote for my post. Has it paid off?

# Some math
Let's assume that we use Default (50/50) Reward and Upvote our own posts. 
We pay the bots with SBD and calculate also the SBD payout.
The `author_curate_reward ` increases the payout for the author due to self-vote.
`pending_payout_vote` is the recieved vote value due to the bought vote. `feed_price` is the Steem price in dollar and `steem_to_sbd`is the current market price for SBD (paying with Steem).

```
pending_payout_SBD = (pending_payout_vote * 0.5 * (0.75 + (0.25*author_curate_reward)))
                 * (1 + steem_to_sbd/ feed_price)
```
## Let's use some actual values

| Variable | Value |
| --- | --- |
| author_curate_reward | 9% |
| steem_to_sbd | 1.123 |
| feed_price | 5.00 $ |
 Using this values:
```
pending_payout_SBD  = (pending_payout_vote * 0.38625) * 1.2246
pending_payout_SBD = pending_payout_vote / 2.11 
```
So, paying for a vote is a zero-sum game when the vote is 211% higher than the price in SBD. Let's assume the vote costs 1 SBD, the reward for the author is 1 SBD (Steempower reward also converted into SBD), when the bought voter votes for 2.11 $. 

When paying 1 SBD and the pending_payout_vote is 250% more (2.5$) the resulting payout is 1.16 SBD.
___
## What happens when we change the value of the variables?
___

| feed_price | zero-sum percentage | investment return for a 250% vote |
| --- | --- | --- |
| 4 $ | 202% | 1.24 |
| 5 $ | 211 % | 1.18 |
| 6 $ | 218 % | 1.15 |
| 7 $ | 223 % | 1.12 |

Higher feed_price reduces the SteemPower reward for the author.
___

| steem_to_sbd | zero-sum percentage | investment return for a 250% vote |
| --- | --- | --- |
| 0.2 | 249 % | 1.00 |
| 0.5 | 235% | 1.06 |
| 1 | 215 % | 1.16 |
| 5 | 129 % | 1.93 |
When 1 SBD is equal to 1 US-$ (`steem_to_sbd = 5`), gained SteemPower can be exchanged for a higher amount of SBD and the vote value can be lower.
___

| author_curate_reward | zero-sum percentage | investment return for a 250% vote |
| --- | --- | --- |
| 0 % | 218% | 1.15 |
| 5 % | 214% | 1.17 |
| 10 % | 211 %| 1.19 |
The resulting vote must be higher, when not perfoming a self-upvote.
___
## What happens when the feed price changes?
When buying votes, the invested SBD are received at post-payout. When the feed-price changes, it affects the result.
Let's assume we buy 1 SBD at post creation and during the 7 days, the feed price changes.

| feed price change | zero-sum percentage | investment return for a 250% vote |
| --- | --- | --- |
| -20 % | 245 % | 1.02 |
| -10 % | 228 % | 1.09 |
| 0 % | 211 % | 1.18 |
| 10 % | 194 % | 1.29 |
| 20 % | 175 % | 1.42 |

# Discussion
The gain is only small and may fast go to zero. When vote seller say that they return 250 % more than you pay, it may true seeing only the vote amount. The resulting payment return in SBD is only slightly higher than one.
When the zero-sum percentage is 211% and the vote seller promises 250%, you gain for each 1 SBD 1.16 SBD after 3.5 to 7 days.  Small amounts did also not push your posts in the trending zone of steemit. 
___
Buying votes are not worth the effort. I have gained nothing by buying votes. There were also no more visitors. No post reached the trending page. The only ones that earn a lot are the vote seller itself. 
___
What do you think, did you bought votes?

- - -

This page is synchronized from the post: ['Zero-sum game or buying votes'](https://steemit.com/@holger80/zero-sum-game-or-buying-votes)
