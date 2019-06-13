
---
title: 'Scot and Scotbot Part III: Scotbot settings.'
permlink: scot-and-scotbot-part-iii-scotbot-settings
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-05-03 16:49:03
categories:
- steem-engine
tags:
- steem-engine
- scottest
- scot
- smt
- steem
thumbnail: 'https://i.imgur.com/OAPsDVj.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://i.imgur.com/OAPsDVj.png)

Ok, so you created your token and you know you want to create a community token with it that's powered by proof of brain.  We have a lot of things for your to consider.

We have a long list of ways that you can configure your token.  What's best for you?  I don't know.  I can tell you what each of these things does to your Scotbot settings and then you'll have to figure out with your community which options are going to work for you best.  We're working on an interface to make it easy to enter these so don't sweat that just yet.

## Example API call to get all the configuration settings
http://54.91.228.37/api/config?token=SCOTT

## Here's the list of settings as it stands on 5/3/19.  This one is setup like Steem!

"author_curve_exponent":1.0,
"author_reward_percentage":75.0,
"cashout_window_days":7.0,
"curation_curve_exponent":0.5,
"downvote_power_consumption":10,
"downvote_regeneration_seconds":-1,
"issue_token":true,
"json_metadata_key":"tags",
"json_metadata_value":"scottest",
"reduction_every_n_block":10512000,
"reduction_percentage":0.5,
"rewards_token":8.0,
"rewards_token_every_n_block":3,
"token":"SCOTT",
"token_account":"scottest",
"vote_power_consumption":2,
"vote_regeneration_seconds":432000

## Here's what each setting choice does

**"author_curve_exponent":** Value can be either 1 or 2.  This corresponds to linear or expontial rewards.  In linear rewards the Rshares benefits linearly with how much Token power you have.  In exponential rewards you square your Token Power when calculating rewards.  It means that whales are a lot more powerful.  That may encourage hodling and potentially discourage new users.  Too many variables to say exactly what any one change does.
**"author_reward_percentage":** value can be 0.0 to 100.0.  This is how much of the rewards go to the author as opposed to the curator.  There's a lot of debate of what's best.  As of 5/3/19 Steem is 75% author and 25% curator.  There's a lot of discussion of switching to 50:50.  I've even heard talk of zero author rewards and it's all curation.  Are you trying to incentivize authoring, sharing, curating, and/or something else?
**"cashout_window_days":** a value with 1 decimal precision.  This determines how many days before you can collect rewards for a post in the system.  When it reaches the cashout_window_days you can claim the rewards.  Steem is set to 7 days.
**"curation_curve_exponent":** Steem sets this value to 0.5 when the author rewards are linear, the curation rewards follow then a square root function (as on steem at the current HF).  It can set to 1 if you want curation rewards should be linear or it can be set between 1-2 when the rewards should be super linear.
**"downvote_power_consumption":** this is a number that says how much of your down vote pool is eaten each time you down vote.  Steem doesn't have a down vote pool, so there isn't something to compare it to, but if you want the upvote and downvotes to work the same way make sure your downvote_power_consuption and your vote_power_consumption are the same number.  If you want your community to be able to down vote more frequently try a downvote number that's smaller than the vote_power number and if you want to have less downvoting than make sure the downvote number is larger than your vote_power number,
**"downvote_regeneration_seconds"**: If you want it to work like steem would (if it had a downvote pool) choose 432000 because that's exactly 5 days.  If you would like the downvote pool to recharge faster choose a smaller number and if you want the downvote pool to recharge slower choose a larger number.  If you don't want a downvote pool at all set the value to -1.
**"issue_token":** Options are true or false.  If you want Scotbot to be able to issue tokens then you'll set this to True.  If you try to do proof of brain distribution and you run out of tokens it'll cease to operate if it can't issue more or there are no more to issue.  If the answer is false you'll have to transfer tokens from an account if it runs out or issue them manually.
**"json_metadata_key":** For now the only option here is "tags",  It means that the bot is searching tags to find out which posts to apply proof of brain token distribution onto.  In the future I hope to add "url" and it'll explore only specific URLs to to see if a post should be tokens rewarded to it.
**"json_metadata_value":** "scottest", it's the name of the tag that the bot looks for when distributing tokens.
**"reduction_every_n_block":** 10512000, 1051200 is 1 year's worth.  So, this is saying "After one year reduce the amount of inflation by the "reduction_percentage".  If you want it to reduce faster than you'll put in a smaller number.  If you want inflation to reduce over time more slowly put in a larger number.
**"reduction_percentage":** this is how much the inflation percent will reduce every time reduction_every_n_block cycles.  Steem uses 0.5.  If you'd like to keep inflation up then you'll want this smaller.  If you want to drastically cut how much inflation you use over time you'll want this number to be high.
**"rewards_token":** 8.0,  This is how many tokens are released into the rewards pool every time that rewards_token_every_n_block is hit.  So, if this is 10 and that's 3 then every 3 blocks 10 tokens will be added to the pool
**"rewards_token_every_n_block"**: this is what determines the size of the rewards pool.  This is an interger value.  This is really determining how quickly you're distributing new tokens.
**"token":** "SCOTT",what's the name of the token that's being distributed?
**"token_account":** "scottest", which account is the one distributing the tokens?
**"vote_power_consumption":** 2,this is how much of your voting power is consumed every time you do a full vote.  Steem has it so that every 5 days you can use 100% of your power.  So, a value of 2 gives you 10 votes a day which comes to a value of 20%/day and in 5 days you have used full power.  If you think users should vote more frequently (spread votes out) then you'll want a smaller number.  If you think they should be casting fewer mega votes then go for a number bigger than 2.
**"vote_regeneration_seconds":** 432000, is the value for 5 days.  This number is how many seconds are required to recharge your VP from 0 to full.  If you want a faster recharge use a smaller number.  If you want a slower recharge choose a bigger number.

## Allowable Ranges

"author_curve_exponent": 1.0 - 2.0 (float)
"author_reward_percentage": 0 - 100 (float)
"cashout_window_days": 0.1 - 365 (float)
"curation_curve_exponent": 0.5 - 2.0 (float)
"downvote_power_consumption":  1 - 10000 (integer) This is the steem vote percentage format 100 -> 1%
"downvote_regeneration_seconds": -1 - (integer) can be -1 for disabling downvote pool
"issue_token": False/True
"json_metadata_key": string, can be any string, but when not "tags", a custom interface is needed, must not be empty, only alphanumeric
"json_metadata_value": string, must not be empty, only alphanumeric + comma
"reduction_every_n_block": integer, must be > 0
"reduction_percentage": float 0 - 100
"rewards_token": float > 0
"rewards_token_every_n_block": integer > 0
"vote_power_consumption": 1 - 10000 (integer) This is the steem vote percentage format 100 -> 1%
"vote_regeneration_seconds": integer > 0


## We're building the easiest interface we can!

We're trying to make it so in the next few weeks you'll be able to start your token and get it up and running in a few clicks.  Then you'll be off to the races and growing your community.

Then we'll add more things like your own custom website and potentially leveraging the ads system that Steemit.com has already to monetize your community further.

Good times!

- - -

This page is synchronized from the post: ['Scot and Scotbot Part III: Scotbot settings.'](https://steemit.com/@aggroed/scot-and-scotbot-part-iii-scotbot-settings)
