
---
title: 'Full API node statistics with beem - April 10th 2018'
permlink: full-api-node-statistics-with-beem-april-10th-2018
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-10 15:25:54
categories:
- steemdev
tags:
- steemdev
- stats
- python
- steemit
- witness
thumbnail: 'https://steemitimages.com/400x400/https://steemitimages.com/DQmRhJmcSLEEppjsvCU9cQAqNx1CptHRunpvVknVJyCneHj/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<center>![](https://steemitimages.com/400x400/https://steemitimages.com/DQmRhJmcSLEEppjsvCU9cQAqNx1CptHRunpvVknVJyCneHj/image.png)
[source](https://pixabay.com/de/cyberspace-daten-draht-2784907)</center>

# Complete node list
There are several lists of public nodes, but none of them is complete:
* [steem.io](https://developers.steem.io) (8 nodes)
* [steem.center](https://www.steem.center/index.php?title=Public_Websocket_Servers) (10 nodes)
* [steemistry.com](http://steemistry.com/nodes/) (10 nodes)
* [geo.steem.pl](http://geo.steem.pl/) (13 nodes)

I have a list of 15 nodes. Please let me know if something is wrong or missing. All nodes have support for `https://`. For nodes with websocket support (WSS is yes), `wss://` has to put in front.

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
| steemd.steemitstage.com  | no | Steemit Inc. | 0.19.4 |
| steemd.steemitdev.com   | no | Steemit Inc. | 0.19.4 |

## Working node
A node is listed, when:
* blocks can be streamed
* account history is possible
* votes, a comment and an account can successfully be fetched. 

It is measured how many blocks and how many account operation can be streamed in 15 seconds. The third parameter is the mean duration in seconds for the rpc calls to fetch  account, comment and votes data.

The following statistics were gained with [beem](https://github.com/holgern/beem/). nodes which are supporting websockets are tested with `wss://` and `https://`. When a node with websocket connection passed all tests, he is listed with an `x` in WSS. When a node with `https://` connection passed all tests, he ist listed without `x` in WSS.

## Statistics

| Server | WSS | blocks in 15 s  | account op in 15 s |  duration for rpc call in s|
|--- | --- | --- | ---| --- |
| steemd.privex.io              | x    | 182      | 29030      | 0.02           |
| steemd.pevo.science      | x         | 202      | 39040      | 0.13      |
| rpc.buildteam.io              | x    | 196      | 53054      | 0.04        |
| rpc.steemviz.com            | x      | 202      | 55056      | 0.03         |
| steemd.minnowsupportproject.org | x  | 202      | 49050      | 0.02         |
| rpc.buildteam.io              |  | 34       | 6007       | 0.16           | 
| steemd.minnowsupportproject.org |  | 14       | 4005       | 0.70        |
| steemd.pevo.science    |         | 9        | 4005       | 0.14       |
| rpc.steemviz.com          |      | 26       | 5006       | 0.36        |
| steemd.privex.io            |    | 1        | 1          | 9.45         |
| api.steem.house            |     | 1        | 1          | 0.38          |
| api.steemit.com            |     | 24       | 12013      | 0.47        |

At the moment only 7 from 15 available full API nodes are working.

- - -

This page is synchronized from the post: ['Full API node statistics with beem - April 10th 2018'](https://steemit.com/@holger80/full-api-node-statistics-with-beem-april-10th-2018)
