
---
title: 'steem full node statistics with beem'
permlink: steem-full-node-statistics-with-beem
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-04 13:26:21
categories:
- full-node
tags:
- full-node
- steemit
- python
- steemdev
thumbnail: None
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I checked the following nodes:
```
nodes = ["wss://steemd.pevo.science", "wss://gtg.steem.house:8090", "wss://rpc.steemliberator.com", "wss://rpc.buildteam.io",
         "wss://rpc.steemviz.com", "wss://seed.bitcoiner.me", "wss://node.steem.ws", "wss://steemd.steemgigs.org",
         "wss://steemd.minnowsupportproject.org", "https://api.steemit.com", "https://rpc.buildteam.io",
         "https://steemd.minnowsupportproject.org", "https://steemd.pevo.science", "https://rpc.steemviz.com", "https://seed.bitcoiner.me",
         "https://rpc.steemliberator.com", "https://steemd.privex.io", "https://gtg.steem.house:8090", "https://api.steem.house",
         "https://rpc.curiesteem.com"]
```
with the script benchmark_nodes.py from https://github.com/holgern/beem/blob/master/examples/benchmark_nodes.py. The script depends on the unreleased version 0.19.19 for beem,  which is my python library for steem.

This script measures:
* how long ten blockchains minutes need to be extracted
* how long 10000 account operation need to be extracted (I took the account from  `gtg`)

The current version of the node is also saved. When the node is reachable, it is added to the table below.

Ten blockchain minutes are equivalent to 200 blocks. So I measure the time to extract 200 blocks. I'm not using threads or batched calls for this. I did the same for 10000 account operations. The times are given in hours:minutes:seconds.

| node                                    | 10 blockchain minutes | 10000 virtual account op | version |
| --- | --- | --- | --- |
| wss://steemd.pevo.science               | 0:00:12               | 0:00:15                  | 0.19.2  |
| wss://gtg.steem.house:8090              | 0:00:16               | 0:00:20                  | 0.19.2  |
| wss://rpc.steemliberator.com            | 0:00:55               | 0:01:02                  | 0.19.2  |
| wss://rpc.buildteam.io                  | 0:00:11               | 0:00:15                  | 0.19.2  |
| wss://rpc.steemviz.com                  | 0:00:10               | 0:00:12                  | 0.19.2  |
| wss://steemd.minnowsupportproject.org   | 0:00:10               | 0:00:15                  | 0.19.2  |
| https://api.steemit.com                 | 0:01:59               | 0:02:12                  | 0.19.4  |
| https://rpc.buildteam.io                | 0:01:23               | 0:01:40                  | 0.19.2  |
| https://steemd.minnowsupportproject.org | 0:03:32               | 0:03:53                  | 0.19.2  |
| https://steemd.pevo.science             | 0:05:05               | 0:05:26                  | 0.19.2  |
| https://rpc.steemviz.com                | 0:01:50               | 0:02:21                  | 0.19.2  |
| https://rpc.steemliberator.com          | 0:06:10               | 0:07:05                  | 0.19.2  |
| https://steemd.privex.io                | 0:07:36               | 0:08:28                  | 0.19.2  |
| https://gtg.steem.house:8090            | 0:02:27               | 0:02:51                  | 0.19.2  |
| https://api.steem.house                 | 0:01:28               | 0:01:38                  | 0.19.4  |


You can see that Websocket connection are much faster than https rpc calls, when not using any threads or batched calls. The official steem-python library does not support websocket connections. If you want to try if a websocket connection is faster, you can try my steem library `beem`. You can find it on [github](https://github.com/holgern/beem).

---
Do you know other full nodes, that I have forgotten? Please let me know!

- - -

This page is synchronized from the post: ['steem full node statistics with beem'](https://steemit.com/@holger80/steem-full-node-statistics-with-beem)
