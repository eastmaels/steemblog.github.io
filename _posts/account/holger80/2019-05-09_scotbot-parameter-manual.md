
---
title: 'Scotbot  parameter manual'
permlink: scotbot-parameter-manual
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-05-09 15:26:27
categories:
- steem-engine
tags:
- steem-engine
- scot
- smt
- steem
- busy
thumbnail: 'https://cdn.steemitimages.com/DQmTgnmytAeoWuEkpaAuwosi74ombJbvD8fVWhBWSfotUtn/NedScottnew-01.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![NedScottnew-01.jpg](https://cdn.steemitimages.com/DQmTgnmytAeoWuEkpaAuwosi74ombJbvD8fVWhBWSfotUtn/NedScottnew-01.jpg)

As you my know may know, I'm the developer of the scotbot backend. The bot is written in python and uses my beem library. In order to add your token to scotbot, the active key of the token issuer account itself or any other account that have sufficient token in their wallet is needed. The bot uses the key to send out token when a user has a sufficient amount of pending token and is willing to claim them.

You can read more about it [here](https://steemit.com/steem-engine/@aggroed/scotbot-launch-time-to-make-your-own-custom-token-powered-by-proof-of-brain-on-steem).

Let me explain all parameter that can be set at https://sto.steem-engine.com/#/launch/scotbot:

## `json_metadata_key`and `json_metadata_value`
This parameter is important, it defines which parameter in the json metadata of a post is checked. One possible choice is "tags". Only posts that have a `json_metadata_key` parameter in the json metadata field are included and can collect rewards. The value of the `json_metadata_key` must include or be equal to `json_metadata_value`.

When `json_metadata_key="tags"` and `json_metadata_value="scottest"`, then only posts that have a "scottest" tag can have pending tokens. Pending tokens will be generated when token holder upvote this post.

`json_metadata_key` can also be a new parameter, as for example `scot_token`. In this case, a new frontend is needed that broadcasts posts that have this parameter in its json metadata field.
When `json_metadata_key="scot_token"` and `json_metadata_value="MYTOKEN"`, posts that have:
```
json_metadata": {
"scot_token": [ "MYTOKEN"]
}
```
can have receive token from the MYTOKEN reward pool.

At the moment it is advised to use the `tags` parameter and define a tag that every post must use for receiving token from the reward pool

## `rewards_token` and `rewards_token_every_n_block`
These two parameters define the size of the reward pool. Every `rewards_token_every_n_block` steem blocks, the reward pool is increased by `rewards_token` .

When for example `rewards_token_every_n_block=3` and `rewards_token=8`, 8 token are added to the reward pool every 9s (3 blocks).  Every hour, 3200 token are added to the pool and every day 76800 token.

The reward pool is distributed entirely to authors and voters. 

## `reduction_every_n_block` and `reduction_percentage`
Every `reduction_every_n_block` blocks, the amount of token that are added to the pool is reduced by `reduction_percentage`.
When `reduction_every_n_block = 10512000` and `reduction_percentage = 0.5`, the reward is reduced by 0.5% every year. For example, when the old reward was 8 token, it is reduced after the first year  to
```
8 / (1.005) = 7.96
```

## `cashout_window_days`
This parameter defines when voting on a post is closed and the amount of pending token can be claimed. For example for steem,  `cashout_window_days` is 7.

## `issue_token`
When this parameter is true, claimed token are send out with the issue command. This is only be possible when the token account is also the token creator. When `issue_token` is false, token are send out with the transfer command. In this case, the token account just needs to have sufficient token in its wallet.

## `author_reward_percentage`
Defines the split between post creator and upvoter. When it is set to `author_reward_percentage = 50`, 50% of the pending tokens goes to the author and the remaining 50% to the voters.

## `author_curve_exponent`
This parameter can be a number between 1 and 2.  `author_curve_exponent = 1` is equivalent to linear and  `author_curve_exponent > 1` means super linear. 

The pending token for a post are calculated as follow:
```
y = token_config[token]["author_curve_exponent"]
weight_rshares = int_pow(sum_rshares, y)
pending_token = int(weight_rshares / pending_rshares * reward_pool)
```

When `author_curve_exponent > 1`, it means that posts with more votes will receive an increased share from the reward pool. 

#### Example
When `author_curve_exponent = 1`, and we have two posts, one with 100 rshares and one with 1000 rshares and the reward_pool has 1 token:
```
pending_token = 100 / 1100 * 1 = 0.09
```
and 
```
pending_token = 1000 / 1100 * 1 = 0.91
```
When `author_curve_exponent = 2`, the pending_rshares is 100 * 100 + 1000*1000 = 1010000
```
pending_token = 100 * 100 / 1010000 * 1 = 0.009
```
and 
```
pending_token = 1000 * 1000 / 1010000 * 1 = 0.991
```

## `curation_curve_exponent`
This parameter defines the curation rewards. It can be a number between 0.5 and 2.

The curation reward which can be given to the voters is
```
curation_reward = pending_token - author_reward
```

For each vote, a weight is calculated. When `curation_curve_exponent = 1`, the weight is linear the vote rshares.
```
y = token_config[token]["curation_curve_exponent"]
vote_weight = (int_pow(sum_rshares + vote['rshares'], y) - int_pow(sum_rshares, y))
sum_rshares += vote["rshares"]
```
The vote_weight of all voters is summed up in `total_vote_weight`.
The curation reward is then
```
pending_curation_token  = int(curation_reward * vote_weight / total_vote_weight)
```

## Example
`curation_curve_exponent = 0.5`, `curation_reward = 1` , one vote with 100 rshares and a later vote  with 1000 rshares.

```
sum_rshares = 0
vote_weight_1 = sqrt(100) = 10
sum_rshares = 100
vote_weight_2 = sqrt(100 + 1000) - sqrt(100) = 23.166
total_vote_weight = 33.166
```
The first voter receives:
```
1 * 10 / 33.166 = 0.302
```
and the second voter receives:
```
1 * 23.166 / 33.166 = 0.698
```

## `vote_regeneration_seconds` and `vote_power_consumption`
These two parameter defines how often it is possible to vote. These parameters are integer in the steem percentage notation 100 means 1 %.

`vote_power_consumption` defines how the vote power is reduced with a 100% vote. When it is set to 200 (2%), the vote power is reduced to 98% when voting at full vote power and a weight of 100%.

`vote_regeneration_seconds` defines in which time duration an empty vote power is regenerating to 100%.

## `downvote_regeneration_seconds` and `downvote_power_consumption`
These two parameter defines how often it is possible to downvote. When `downvote_regeneration_seconds` is set to a positve integer, a second downvote pool is activated.

When a downvote pool is active, downvoting does not reduce the vote power.

`downvote_power_consumption` defines how the downvote power is reduced with a 100% downvote. When it is set to 200 (2%), the downvote power is reduced to 98% when downvoting at a full downvote power and a weight of 100%.

`downvote_regeneration_seconds` defines in which time duration an empty downvote power is regenerating to 100%. When this parameter is negative, the downvote pool is deactivated and downvoting will reduce the vote power.

- - -

This page is synchronized from the post: ['Scotbot  parameter manual'](https://steemit.com/@holger80/scotbot-parameter-manual)
