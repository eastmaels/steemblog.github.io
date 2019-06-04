
---
title: '刚刚，就是刚刚，STEEMIT肿么啦？'
permlink: 75atjq-steemit
catalog: true
toc_nav_num: true
toc: true
date: 2018-04-19 12:39:00
categories:
- steemdev
tags:
- steemdev
- steemit
- busy
- jussi
- cn
thumbnail: https://steemitimages.com/DQmUoFZb3YgWRpFMCgnPQpvzLsScsVNzm9ZCw56fCKD5BgH/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


很多朋友可能会发现，从北京时间晚上6:00 到北京时间晚上7:30这段时间，STEEMIT.COM先是无法访问，然后好不容易可以访问了，显示的最新数据竟然是13天以前的。同时busy.org等网站也无法访问。

好几个朋友上来问我，STEEMIT肿么啦，我们这十三天的帖子会不会丢，我们这十三天的收益会不会清零？另外，还有人对STEEM表示的怀疑，是不是数据不安全啊？等等等等。

![](https://steemitimages.com/DQmUoFZb3YgWRpFMCgnPQpvzLsScsVNzm9ZCw56fCKD5BgH/image.png)
(图源 ：[pixabay](https://pixabay.com/))

尽管我在微信上答复了这几个朋友，但是我想可能这几个问题也是大家所关心的，恰好STEEMIT刚刚恢复正常，那么就发帖说一下这些问题。

# API节点

为了说明这些问题的根源，我们先来说一下STEEMIT.COM、BUSY.ORG等网站都是如何访问STEEM区块链的。

我们可以把STEEM区块链看成一个大数据库（有别于传统的中心化数据库，它是去中心化并且数据不可篡改），那么STEEMIT.COM以及BUSY.ORG等网站就是用于查询和访问STEEM区块链的工具。

STEEM区块链为了便于大家访问，由RPC节点提供了一系列API，比如我们要读取一个区块的信息，那么就向节点发送发送类似如下请求信息即可：
>`{"jsonrpc": "2.0", "method": "call", "params": ["database_api", "get_block", [21702122]], "id": 1}`

比如这个信息就会返回编号21702122区块内的所有数据。同时我们也可以通过给节点发送查询信息来获得当前最新区块编号等区块链信息。

>`{"jsonrpc": "2.0", "method": "call", "params": ["database_api", "get_dynamic_global_properties", []], "id": 1}`

任何人都可以运行和提供RPC节点服务，官网提供的节点为：***`https://api.steemit.com`***

# 节点缓存信息

知道了API节点，我们不难想象，当访问量很多很大时，节点会比较辛苦。每次大家向节点提问，节点都会去做响应的运算，然后返回对应的信息。

以***`get_dynamic_global_properties`***，这个信息对于STEEM区块链而言，每个块(3秒)更新一次。假设这三秒内有1W个查询请求，一种方式是针对每个请求我们都去查区块链并返回信息，另外一种方式是，我们知道数据并没有变化，直接返回我们缓存的信息即可，然后每三秒更新一下缓存。

上述做法保证了返回的数据正确，并且节省了开销，这就是[jussi](https://github.com/steemit/jussi)，简单总结就是在steemd之上弄了个缓存层(caching layer)。

换句话说***`https://api.steemit.com`***并非是单纯的steemd节点，而是steemd+jussi。

# JUSSI缓存故障

好了，现在我们知道了API节点，也知道JUSSI缓存层。

STEEMIT.COM、BUSY.ORG等网站就是访问官方节点***`https://api.steemit.com`***，来从STEEM区块链查询以及向其内写入信息的。

那么如果JUSSI缓存层出故障了，会是什么效果呢？比如说我向节点询问，当前最新块是多少？正常情况下，节点应该返回当前最新块的信息，比如现在`'head_block_number': 21702109,`，但是缓存出问题了，返回的是老旧的数据，返回的信息为：`'head_block_number': 21342317`，落后约40W个块，也就是约13天的样子。

这就是STEEMIT.COM以及BUSY.OGR，这段时间不好用的原因。

当这种情况发生时，我们可以通过其它好用的节点访问STEEMIT区块链，比如说：***`https://gtg.steem.house:8090`***


# 结论

网站以及软件等通过RPC NODE API来访问STEEMIT区块链。为了提升效率节省资源，STEEMIT官方节点集成了JUSSI缓存层。

JUSSI缓存层故障导致我们取回的最新区块编号等信息不够新鲜，进而导致STEEMIT和BUSY显示的都是13天以前的帖子😀。

了解了相关原因，我们就会清楚，STEEM区块链的数据还是安全的，我们的帖子和资产都不会消失，大可放心。

- - -

This page is synchronized from the post: [刚刚，就是刚刚，STEEMIT肿么啦？](https://steemit.com/@oflyhigh/75atjq-steemit)
