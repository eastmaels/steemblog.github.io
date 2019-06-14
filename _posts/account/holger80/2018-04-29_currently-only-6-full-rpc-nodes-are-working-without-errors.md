
---
title: 'Currently only 6 full RPC nodes are working without errors'
permlink: currently-only-6-full-rpc-nodes-are-working-without-errors
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-29 20:40:30
categories:
- steemdev
tags:
- steemdev
- full-nodes
- dev
- witness-category
thumbnail: 'https://steemitimages.com/DQmWhz39suNMqKB3B4JsXmQ1PHRCanVfdd6GyBukYM7rzhe/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<center>![](https://steemitimages.com/DQmWhz39suNMqKB3B4JsXmQ1PHRCanVfdd6GyBukYM7rzhe/image.png)</center>
# Complete RPC node list
All nodes have support for `https://`. For nodes with websocket support (WSS is yes), `wss://` has to put in front. All which have websocket support are checked twice (1x https and 1x wss).

| Server | WSS | Ran By | Version |
| --- | --- | --- | ---| 
| steemd.privex.io | yes | @privex | 0.19.2 |
| steemd.pevo.science | yes | @pharesim | 0.19.2 |
| rpc.steemliberator.com | yes | @netuoso | 0.19.2 |
| rpc.buildteam.io | yes | @themarkymark | 0.19.2 |
| gtg.steem.house:8090 | yes | @gtg | 0.19.2 |
| rpc.steemviz.com | yes | @ausbitbank | 0.19.2 |
| seed.bitcoiner.me |yes | @bitcoiner |0.19.2 |
| steemd.steemgigs.org | yes | @steemgigs |0.19.2 |
| steemd.minnowsupportproject.org | yes | @followbtcnews |0.19.2 |
| rpc.curiesteem.com | no | @curie | 0.19.2 |
| api.steem.house | no | @gtg | 0.19.4 |
| appbasetest.timcliff.com | yes | @timcliff | 0.19.4 |
| api.steemit.com | no | Steemit Inc. | 0.19.4 |

## Working RPC node
A node is working, when:
* returns data within 30 seconds,
* blocks can be streamed,
* account history is possible,
* votes, a comment and an account can successfully be fetched and are not empty.

When a node is fully working the following measurements are shown:

* _N blocks_ is the number of blocks which can be received in 30 seconds.
* _N acc hist_ is the number of account transaction which can be received in 30 seconds. The batch call size is set to 100.
* _Dur. call in s_ is the mean duration to receive an account, a comment and a vote from the node.

The following statistics was gained with [beem](https://github.com/holgern/beem/).

# Fully working nodes (29.04.2018)

| Node| N blocks |  N acc hist  | Dur. call in s |
| --- | --- | --- | ---| 
| wss://steemd.privex.io       | 202      | 29555      | 0.38           |
| wss://gtg.steem.house:8090   | 169      | 5253       | 0.10           |
| https://gtg.steem.house:8090 | 34       | 6768       | 0.89           |
| https://rpc.curiesteem.com   | 23       | 2728       | 0.71           |
| https://api.steemit.com      | 114      | 0          | 0.45           |
| https://api.steem.house      | 77       | 0          | 0.29           |


# Set working nodes with beempy 
```
beempy set nodes "['wss://steemd.privex.io', 'wss://gtg.steem.house:8090', 'https://gtg.steem.house:8090', 'https://rpc.curiesteem.com', 'https://api.steemit.com', 'https://api.steem.house']"
 ```

- - -

This page is synchronized from the post: ['Currently only 6 full RPC nodes are working without errors'](https://steemit.com/@holger80/currently-only-6-full-rpc-nodes-are-working-without-errors)
