
---
title: 'Automation of Steem Basic Income'
permlink: automation-of-steem-basic-income
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-12-15 23:15:39
categories:
- utopian-io
tags:
- utopian-io
- development
- steembasicincome
- steemdev
- busy
thumbnail: 'https://cdn.steemitimages.com/DQmVhhf7x6ovMeN9qLV7HSPjNea7FM81rMB9Kkt7wu5sT9F/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://cdn.steemitimages.com/DQmVhhf7x6ovMeN9qLV7HSPjNea7FM81rMB9Kkt7wu5sT9F/image.png)

## Repository
https://github.com/holgern/steembasicincome

## Steem Basic Income
At the moment 6800 accounts have bought shares or were sponsored by others in the steem basic income program. Upvotes of member posts were handled by manually adjusted steemauto rules. This was a lot of work, as the upvote percentage has to be adjusted whenever the member gains more shares or when the member changes its posting frequency.

The automation scripts handle all these steps by storing a rshares balance for each member. Every 144 minutes, the rshares balance is increased by 80,000,000 rshares for each share. Upvotes of posts from sbi related accounts will also increase the rshares balance. Whenever a member has written a post, it is upvoted by 20% of the rshares balance. The vote rshares are then subtracted from the rshares balance.

The scripts detect when new shares are bought or sponsored. It checks also all  incoming delegations. In both cases, the share amount are updated. In the next 144 min cycle, more rshares will be added to the rshares balance. There is no waiting for enrollment anymore.

You can read more here about the [Initial Automation Release](https://steemit.com/services/@steembasicincome/steem-basic-income-1-0-initial-automation-release).

## Technology Stack
The scripts are using [beem](https://github.com/holgern/beem) for accessing the STEEM blockchain. Instruction for installation can be found in the readme.

### `sbi_store_ops_db.py`
This scripts stores new account history entries for all sbi accounts in the database for later usage.
All transfer operation of minnowbooster is also stored in the database.

### `sbi_transfer.py`
New `transfer` and `delegate_vesting_shares` account operation are loaded from the database and analyzed for new delegations and STEEM transfer of enrolling new sbi shares. The processed transfer ops are stored in the `trx` database.

### `sbi_update_member_db.py`
Every 144 minutes, this script adds 80,000,000 rshares for each sbi share to all sbi share holders.
The script calculates the total share days which indicates how long the sbi shares are hold. This is used for initially calculating the rshares balance for all accounts.

This script checks also who upvoted posts from sbi accounts (steembasicincome to sbi10) and adds the upvote rshares multiplied by a factor to the balance.

### `sbi_store_member_hist.py`
This script streams all blocks for outgoing votes. The rshares balance is reduced by the rshares value of all outgoing votes.

### `sbi_update_post_count.py`
The last checked member account is selected and the timestamp of its last post and comment is stored in the database.

### `sbi_stream_post_comment.py`
This script fetches new posts and comments from all members and stores them in the database.

### `sbi_check_delegation.py`
New delegations are checked if they are bought through minnowbooster by checking if a transfer to minnowbooster in the same time exists.

### `bi_upvote_post_comment.py`
This script handles all upvotes of member posts/comments. It loads all not already upvoted posts/comments from the database and go throught them. When post was found and the member has a positive rshares balance, an upvote is casted with 20% of the rshares balance. It is automatically selected from which sbi account the upvote will be casted. It is always the sbi account selected that has the most mana and a sufficient high upvote value.

### `sbi_check_blacklist.py`
It is checked if a member is currently blacklisted by buildawhale or by steemcleaners. When this is the case, the member will not be upvoted until the flag is manually cleared or the blacklist state of buildawhale or steemcleaners changes.

### Python library `steembi`
The scripts uses the provided library steembi. The library contains a class for memo parsing and classes for storing and accessing the different databases. The library contains unit tests for memo parsing. It has also a member class, which is used for calculating the share age and avg share age.

## Roadmap
In the next release, a comment answer bot will be provided, so that every member can ask the shares  amount and how big the  next upvote will be.

Then, a confirmation transfer to the share buyer will be added which shows the new shares count.

## How to contribute
Please fork the repository and do a pull requests. It is also possible to open a new issue. You will also find help in the [discord server](https://discord.gg/VpghTRz).

## GitHub Account
https://github.com/holgern

- - -

This page is synchronized from the post: ['Automation of Steem Basic Income'](https://steemit.com/@holger80/automation-of-steem-basic-income)
