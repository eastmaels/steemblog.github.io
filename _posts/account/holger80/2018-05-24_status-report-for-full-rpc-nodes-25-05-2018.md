
---
title: 'Status report for full rpc nodes - 25.05.2018'
permlink: status-report-for-full-rpc-nodes-25-05-2018
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-05-24 21:22:48
categories:
- steemdev
tags:
- steemdev
- full-nodes
- dev
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmRNxUzi5NTNsA7hUhazzUrAk3og19vzX94vgcUTeLvtjh'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<center>![image.png](https://ipfs.busy.org/ipfs/QmRNxUzi5NTNsA7hUhazzUrAk3og19vzX94vgcUTeLvtjh)
[source](https://pixabay.com/en/network-server-system-2402637/)
</center>
# What is a full RPC node and why it is necessary
A full RPC node contains all STEEM blocks and several databases, in which e.g. account-related transactions, followers for an account, all posts of a blog from an account, .... are stored. Without nodes, the steemit site would be down, there would be no bid-bots and services as steemauto.com or GINAbot would not work.

# Complete RPC node list
All nodes have support for `https://`. For nodes with websocket support (WSS is yes), `wss://` has to put in front. All which have websocket support are checked twice (1x https and 1x wss).
The node version was read out from the server itself, and when this was not possible (node did not respond) a question mark is shown instead.

| Server | WSS | Ran By | Version |
| --- | --- | --- | ---| 
| steemd.privex.io | yes | privex | 0.19.2 |
| steemd.pevo.science | yes | pharesim | 0.19.2 |
| rpc.steemliberator.com | yes | netuoso | ? |
| rpc.buildteam.io | yes | themarkymark | 0.19.3 |
| gtg.steem.house:8090 | yes | gtg | 0.19.3 |
| rpc.steemviz.com | yes | ausbitbank | 0.19.3 |
| seed.bitcoiner.me | yes | bitcoiner | ? |
| steemd.steemgigs.org | yes | steemgigs | ? |
| steemd.minnowsupportproject.org | yes | followbtcnews |? |
| rpc.curiesteem.com | no | curie | 0.19.3 |
| api.steem.house | no | gtg | 0.19.4 |
| appbasetest.timcliff.com | yes | timcliff | 0.19.4 |
| api.steemit.com | no | Steemit Inc. | 0.19.4 |
| api.steemitstage.com | no | Steemit Inc. | 0.19.4 |
| api.steemitdev.com | no | Steemit Inc. | 0.19.4 |

`api.steemitstage.com` and  `api.steemitdev.com` may contain newer node versions and should be used only with care.

## Working RPC node
A node is working, when:
* returns data within 30 seconds,
* blocks can be streamed,
* account history is possible,
* votes, a comment, followers from an account and an account can successfully be fetched and are not empty.

When a node is fully working the following measurements are shown:
* _N blocks_ is the number of blocks which can be received in 30 seconds.
* _N acc hist_ is the number of account transaction which can be received in 30 seconds. The batch call size is set to 100.
* _Dur. call in s_ is the mean duration to receive an account, a comment, all followers from an account and a vote from the node.


# Results (Small fix, I did use an old permlink before)
The following statistics were gained with [beem](https://github.com/holgern/beem/).

| node                             | N blocks | N acc hist | dur. call in s |
|---|---|---|---|
| wss://steemd.privex.io           | 122      | 34644      | 0.90           |
| wss://rpc.buildteam.io           | 131      | 34139      | 1.23           |
| wss://gtg.steem.house:8090       | not work.      | 25857      | 1.20           |
| https://rpc.buildteam.io         | 31       | 17575      | 2.19           |
| https://api.steemitstage.com     | 51       | 10000      | 2.29           |
| https://api.steemitdev.com       | 50       | 9798       | 2.30           |
| https://api.steemit.com          | 49       | 9394       | 3.14           |
| https://api.steem.house          | 27       | 4445       | 7.10           |
| https://steemd.pevo.science      | 6        | 1819       | 28.72          |
| wss://appbasetest.timcliff.com   | 135      | 597        | 0.94           |
| https://appbasetest.timcliff.com | 9        | 597        | 20.01          |



# Set fully working nodes with beempy 
https://api.steemitstage.com, https://api.steemitdev.com and nodes with not working results were excluded.
```
beempy set nodes ['wss://steemd.privex.io', 'wss://rpc.buildteam.io', 'https://rpc.buildteam.io', 'https://api.steemit.com', 'https://api.steem.house', 'https://steemd.pevo.science', 'wss://appbasetest.timcliff.com', 'https://appbasetest.timcliff.com']
```
# Comparison with last month
You can find my last post [here](https://steemit.com/steemdev/@holger80/currently-only-6-full-rpc-nodes-are-working-without-errors).
`wss://steemd.privex.io` is again the fastest node.
The Steemit Inc. nodes and `api.steem.house` are also in good shape.
`rpc.buildteam.io` and `appbasetest.timcliff.com` are fully working now.


- - -

This page is synchronized from the post: ['Status report for full rpc nodes - 25.05.2018'](https://steemit.com/@holger80/status-report-for-full-rpc-nodes-25-05-2018)
