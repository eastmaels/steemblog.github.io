
---
title: 'My Witness Application - holger80'
permlink: my-witness-application-holger80
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-06-05 18:37:30
categories:
- witness-category
tags:
- witness-category
- witness
- steemit
- steem
thumbnail: 'https://ipfs.busy.org/ipfs/QmUpcGNjUnzG5GtyBaePHnNEkYG5zux5GhXRypk5d6qhf4'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


You know me probably as developer of [beem](https://github.com/holgern/beem), an alternative python library for steem. I joined steem in 29.12.2017. In the first two months, I learned the fundamentals of steem and I was searching my niche.

I always wanted to write a huge python library and after studying the source code of python-steem, I knew that I will create an alternative python library for steem. Since the 14. Februar, I worked every free hour on beem, the alternative python library. I took the source code from [python-bitshares](https://github.com/bitshares/python-bitshares) and added 12944 lines of code. In total, I pushed 450 commits in which I added 70796 lines and in which I removed 49246 lines of python code and documentation.

<center>
![image.png](https://ipfs.busy.org/ipfs/QmUpcGNjUnzG5GtyBaePHnNEkYG5zux5GhXRypk5d6qhf4)
(holgern is my github account name)
</center>

I discovered utopian-io and published regularly new post about newly added features there.

Currently, I'm working on the 36. release of beem and I've started a new project in which a pushed every hour updates about the full-node state to the account @fullnodeupdate. The full node state can be obtained by reading the `json_metadata` of this account. I will post in more detail about this project soon.

## My commitment to steem
In the last 5 month, I invested a huge amount of my saving into steem. Until now, I never powered down. I'm trying to support all developer who posts for utopian-io by upvoting their content.
As I mentioned, I develop beem and I'm trying to help all steemit user, who want to use my library.

You can see my latest post about beem developement here: https://steemit.com/utopian-io/@holger80/update-for-beem-steemconnect-integration-and-bug-fixes.

I'm also visiting often the official [steem github](https://github.com/steemit/steem). I wrote [Current state of hardfork 0.20.0 development - 30.05.2018](https://steemit.com/steemit/@holger80/current-state-of-hardfork-0-20-0-development-30-05-2018) and found a bug in the steem source code ([#1764](https://github.com/steemit/steem/issues/1764)) which leads to [#2515](https://github.com/steemit/steem/issues/2515).

I published a complete appbase-api call reference in this post: https://steemit.com/appbase/@holger80/api-methods-list-for-appbase.

## My witness server setup
I rented a server with the following specification:
* 64 GB DDR4 RAM
* Intel® Core™ i7-6700 Quad-Core
* 1 GBit/s
* 2 x 240 GB SATA 6 Gb/s SSD 

I installed Ubuntu 16.04 and I'm using the stable branch of the steem github. I did the following steps to assure that everything will run smoothly:
* ssh port is changed
* root login is disabled
* fail2ban is installed
* 4 GB swap partition is created
* zram compression is active
* I created a 131GB ram partition (2*RAM + SWAB - 1 GB)
* I compiled and installed steemd and cli_wallet (`LOW_MEMORY_NODE=ON`, `CLEAR_VOTES=ON`, `SKIP_BY_TX_ID=ON` and  `CMAKE_BUILD_TYPE=Release`)
* I checked and added seed-nodes to the config file
* I replayed the blockchain and installed a systemd service for steemd
* Created a python pricefeed script which is started by crontab

Everything is running now and  40 GB RAM are used at the moment.

## Vote
If you want to support me, you can vote for me as one of your witnesses by entering my name in the voting field for lower ranked witnesses in https://steemit.com/~witnesses

<center>
![image.png](https://ipfs.busy.org/ipfs/QmfPda9nr1v5hydw9BNrUTLnXuba9KBroXYvbyuYFUqKsw)
</center>

You can also vote via steemconnect: https://v2.steemconnect.com/sign/account_witness_vote?witness=holger80&approve=1

- - -

This page is synchronized from the post: ['My Witness Application - holger80'](https://steemit.com/@holger80/my-witness-application-holger80)
