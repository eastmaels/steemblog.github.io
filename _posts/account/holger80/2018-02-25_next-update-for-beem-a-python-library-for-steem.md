
---
title: 'Next update for beem - a python library for steem'
permlink: next-update-for-beem-a-python-library-for-steem
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-02-25 14:30:33
categories:
- utopian-io
tags:
- utopian-io
- python
- steem
- beem
- steem-python
thumbnail: 'https://res.cloudinary.com/hpiynhbhq/image/upload/v1519568648/vgzfw6jvaxlckmgnsebf.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


In this update, I added more functionality to the account, comment, market, steem and witness class.
The beem library can also be used with python 3.4, as all unit tests are passing. The current coverage is 69%. You can find my library on [github](https://github.com/holgern/beem) and [pypi](https://pypi.python.org/pypi/beem). You can also take a look in the [documentation](http://beem.readthedocs.io/en/latest/).

<center>![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519568648/vgzfw6jvaxlckmgnsebf.png)</center>


# New Features
* https://github.com/holgern/beem/commit/acbb397571ca2ead503a4adabab5259cbd2c1223
## Acount
* print_info() shows import information about the account
* voting_power, steem_power, get_voting_value_SBD, get_followers, get_following, get_bandwidth
* unfollow, follow, update_account_profile, transfer_to_vesting, convert, transfer_to_savings, transfer_from_savings, cancel_transfer_from_savings, claim_reward_balance, delegate_vesting_shares, withdraw_vesting added to the account class
* transfer, approvewitness, dissapprovewitness and update_memo_key moved from the steem-class to the account class
## Comment
* upvote, downvote, vote, edit, reply, post, resteem, comment_options added
## Discussions
* Comment_discussions_by_payout, Post_discussions_by_payout, Discussions_by_created, Discussions_by_active, Discussions_by_cashout, Discussions_by_payout, Discussions_by_votes, Discussions_by_children, Discussions_by_hot, Discussions_by_feed, Discussions_by_blog, Discussions_by_comments, Discussions_by_promoted added
## Market
* Is now fully functional
* ticker, volume24h, orderbook, recent_trades, trades, market_history and accountopenorders added
* buy, sell and cancel added
## Steem
* register apis fixed
* dynamic_global_properties, feed_history, current_median_history_price, next_scheduled_hardfork, hardfork_version, network, chain_properties, config and reward_fund are stored in self.data. It can be refreshed by refresh_data(True). All functions to read these variables were moved from blockchain to steem.
* get_median_price, get_payout_from_rshares, get_steem_per_mvest, vests_to_sp, sp_to_vests, sp_to_sbd, sp_to_rshares added
* custom_json added
## utils
* make_patch added
## Wallet
* small fix
## Witness
* feed_publish and update added

## Several Unit tests were also added
 * https://github.com/holgern/beem/commit/27e41802d2bf883ba52953e8e2c851d02c00c1da
* https://github.com/holgern/beem/commit/f5bfccbf6caffaf05e88a83d33f8abf14da66aad
* https://github.com/holgern/beem/commit/809b7b23b9b152dc1a336e027e421b4e7daf8de5
## Small bugfix and relase of version 0.19.6
* https://github.com/holgern/beem/commit/63c5381107670d65fa23ff3dd37846916993f3d2
___
For the next update, I will try to add missing functions and i will improve the documentation.
Did you try my new library yet? Please give me feedback!


<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@holger80/next-update-for-beem-a-python-library-for-steem">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: ['Next update for beem - a python library for steem'](https://steemit.com/@holger80/next-update-for-beem-a-python-library-for-steem)
