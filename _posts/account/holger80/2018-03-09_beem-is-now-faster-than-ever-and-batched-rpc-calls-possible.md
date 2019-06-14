
---
title: 'beem is now faster than ever and batched rpc calls possible'
permlink: beem-is-now-faster-than-ever-and-batched-rpc-calls-possible
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-09 18:33:30
categories:
- utopian-io
tags:
- utopian-io
- python
- beem
- appbase
- steemdev
thumbnail: 'https://res.cloudinary.com/hpiynhbhq/image/upload/v1520618252/oc4jchobqazvoswikb5k.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


beem is a almost complete python library for steem. It is well tested with 286 unit tests and a coverage of around 77%. The library is now in beta state and its latest version is 0.19.14.

<center>![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520618252/oc4jchobqazvoswikb5k.png)
</center>

## Batch api calls on AppBase
Batch api calls are possible now with AppBase. If you call a Api-Call with `add_to_queue=True` it is not submitted but stored in rpc_queue. When a call with `add_to_queue=False` (default setting) is started, the complete queue is sended at once to the node. The result is a list with replies.
```
from beem import Steem
stm = Steem("https://api.steemitstage.com")
stm.rpc.get_config(add_to_queue=True)
stm.rpc.rpc_queue
[{'method': 'condenser_api.get_config', 'jsonrpc': '2.0', 'params': [], 'id': 6}]
result = stm.rpc.get_block({"block_num":1}, api="block", add_to_queue=False)
len(result)
2
 ``` 
## Websocket performance
The websocket performance for getting 24h on Blockchain data could be increased by using threads.
28790  Blocks are fetched from `wss://steemd.pieve.science` in 18 minutes and 22 seconds.

<center>![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1520619910/wsbmxqw98bihvkwkscsk.png)
</center>

Using the script from https://github.com/pibara-utopian, 24h Blockchain data could be processed in 11 minutes and 23 seconds. In both cases 16 threads were used.

# Changes
## Bug fixes and more unit tests 
* https://github.com/holgern/beem/commit/bd2d6c7cab8b3ba1edc6362ea94781a1d69f2d7b
* Bug fix for account
* Block structure changed, is alwas {'block': , 'id'} now.
* block function removed, Block is used now
* Bug fix in comment
* Discussions_by_payout removed
* Several bugfixes in witness
* More exception added to steemnoderpc
* Unit tests for appbase nodes with parameterized added
* steemnoderpc-unittest added

## fix unit test and prepare release of 0.19.13
* https://github.com/holgern/beem/commit/49051422ec2015c115f6fff2c987a97db82516d5

## Improve code and try to fix unit test for py27 and py34
* https://github.com/holgern/beem/commit/bb09a10bed2bb8ab3e7f4f1605701c8a726867bb

## Code improvements 
* https://github.com/holgern/beem/commit/8804bf34624f578205c1099915db84f2dfb1d5d4
* Bandit passes now, added to travis
* Bugfix in chain detection

## Bugfixes and Improvements 
* https://github.com/holgern/beem/commit/eb09f63090b0e1ed5bcb7ae68f71ace2b70c78ac
### Amount
* fix json export
### Blockchain
* improved get_estimated_block_num
### Comment
* Bugfixes
### Market
* Use FilledOrder for trades and recenttrades
### Price
* FilledOrder fixed
* UpdateCallOrder and PriceFeed removed
### Vote
* Bugfix
### Unit tests
More unittests for Amount, Blockchain and comment

## More unit tests
* https://github.com/holgern/beem/commit/b4d34650d1679758479f3f21db2a3c9154bd39b8

## Websocket, Graphenerpc and Notify refactored
* https://github.com/holgern/beem/commit/03c5d91e4a582420e1350862f66bde577f09ca57
* rpcutils.py added
* Timestamp fixed for py27
* New unit tests for test_rpcutils

## Block api changed and graphenerpc improved 
* https://github.com/holgern/beem/commit/f3d5cf05346b5a364393238a5d1650f72d8cdb12
### Block
* Block contains only the json data + id for block num (removed {'block': , 'id'}  again)
* Output for appbase and non-appbase is the same
### Blockchain
* batch-rpc-calls added
### Graphenerpc
* multithread for websocket activated
* batch with queue  added
### Benchmark improved
### Unit tests adapted

<br /><hr/><em>Posted on <a href="https://utopian.io/utopian-io/@holger80/beem-is-now-faster-than-ever-and-batched-rpc-calls-possible">Utopian.io -  Rewarding Open Source Contributors</a></em><hr/>

- - -

This page is synchronized from the post: ['beem is now faster than ever and batched rpc calls possible'](https://steemit.com/@holger80/beem-is-now-faster-than-ever-and-batched-rpc-calls-possible)
