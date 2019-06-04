
---
title: 'STEEM 签名学习笔记 （一）/ 读操作与写操作'
permlink: 3ppeth-steem
catalog: true
toc_nav_num: true
toc: true
date: 2017-11-16 13:25:21
categories:
- steemdev
tags:
- steemdev
- steem
- signature
- cn
- cn-programming
thumbnail: https://steemitimages.com/DQmQX8sihYbp6JX6HQotq3K7jXPaETgfy6Mzdg6J1JCHeH5/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


好吧，这几天有点不务正业了，一会上这个车一会上那个车的，没有踏下心来好好学习。

距离上一个总结贴已经过去9天了：
[温故而知新 /比特币(Bitcoin)有关的 Base58 & Base58Check、私钥(Private KEY)、公钥(Public KEY)、地址(Address)](https://steemit.com/cn/@oflyhigh/bitcoin-base58-and-base58check-private-key-public-key-address)

然而在签名学习的路上，我却没有一点进展，惭愧之极。今天开始，好好学习！

----

# STEEM区块链的两种操作

谈签名之前，先说一下我对操作STEEM区块链的理解，不考虑什么P2P节点，Witness咋出块之类的，从客户端的角度，我理解大致可以分为两种操作。

* ***读操作：从区块链获取信息***
* ***写操作：对区块链进行操作，将信息写入到区块链***

举例来讲，我们读取用户信息，我们读帖子，查看帖子金额，查看Flowwer，查询谁给我转账等等，都是读操作。

而我们发帖，投票，转账，追随别人，拉黑别人等，这些都是写操作。

以我的公众号为例：
>`@steemid 查询账户信息`
`@steemid?vv 查询投票价值`
`@steemid?as 查询账户资产`
`@steemid?mt 查询谁拉黑你`
`@steemid?po 查询最近文章`
`@steemid?dg 查询SP委派`
`@steemid?fd 查询用户feed`
`?tk / ?ticker 查询市场报价`

这些统统都是读操作。


# STEEM区块链的两种操作示例

我们分别通过JSON RPC请求，来演示一下两种操作。

#### 读操作：读取帖子信息

最较为常用的读操作就是读贴了，我们每天都耗费大量的时间在做这个事情。

在database_api.h 中，读贴操作定义如下：
`discussion           get_content( string author, string permlink )const;`

假设我们要读这篇帖子：https://steemit.com/cn/@oflyhigh.test/test

我们通过JSON RPC调用如下：
`curl --data '{"jsonrpc": "2.0", "method": "call", "params": ["database_api", "get_content", ["oflyhigh.test", "test"]], "id": 1}' https://steemd.steemit.com`

如果成功，就会返回帖子的信息，碍于返回内容太长，我只截取部分内容
![](https://steemitimages.com/DQmQX8sihYbp6JX6HQotq3K7jXPaETgfy6Mzdg6J1JCHeH5/image.png)
（已经进行了格式化处理）

其它诸如读取用户信息，读取追随者等等，大同小异。

####  写操作：投票（点赞）

对于写操作，我们每天做的最多的莫过于点赞和发帖了。

发帖相对复杂一些，我们以投票为例。

投票在STEEM区块链中表示为：vote_operation 
![](https://steemitimages.com/DQmbaqzuGW2CdvT58ht1UZMvQsCSdqR37YqMREFn5did4A9/image.png)

然后我们需要将其打包进transaction并对其进行签名。

假设我要对这个帖子进行投票： https://steemit.com/test/@oflyhigh.test/6r3tt4-test
那么一个***打包并签名好的transaction***是这个样子
![](https://steemitimages.com/DQmawUBGAnYtFx86pT4Ji4WNiaET3AdhoHsLdXeiai2SYmf/image.png)

接下来我们使用`broadcast_transaction` API对其进行广播。`broadcast_transaction` 定义如下：
`void broadcast_transaction(const signed_transaction& trx);`

使用curl进行广播操作
`curl --data '{"jsonrpc": "2.0", "method": "call", "params": ["network_broadcast_api", "broadcast_transaction", [{"expiration": "2017-11-16T13:13:17", "extensions": [], "operations": [["vote", {"author": "oflyhigh.test", "permlink": "6r3tt4-test", "voter": "oflyhigh", "weight": 2000}]], "ref_block_num": 37027, "ref_block_prefix": 1069122390, "signatures": ["20195c18fadaa84cff3e6387253289c5a6640adff6770a5600da8efd8f288016fc76e9300aacd20864e655ef098b668a2a7f7ec47f560fffc00cea13b896d8db7e"]}]], "id": 1}' https://steemd.steemit.com`

广播成功后去steemd.com 检查，可见我们的操作已经生效。
![](https://steemitimages.com/DQmUjudkq4shPcgek8MkJvLuupXaLioYbcnL1jf4yn388bY/image.png)

成功给自己小马甲加了1SBD，可以买一桶红烧牛肉面啦。
![](https://steemitimages.com/DQmc2FQGhKkw7J7KMDc9bqK4ZwFfu8Ftz98JLMAo69STLWo/image.png)

# 总结

* STEEM区块链存在读&写两种操作
* 读即从区块链上获取信息
* 写即在区块链上添加信息
* 两种操作都可以用JSON PRC API完成
* 写操作需要对数据进行签名

你可能会问，你也没说签名啥事啊？咳咳，是没说，我还没搞懂呢不是嘛，慢慢来，急不得，至少通过这节，我们知道了***签名是很重要的事情***。

谁丢的西红柿，谁丢的鸡蛋？
不说了，我回家去做西红柿鸡蛋汤了。

（本文为个人理解&笔记，如果谬误，烦请不吝赐教）

- - -

This page is synchronized from the post: [STEEM 签名学习笔记 （一）/ 读操作与写操作](https://steemit.com/@oflyhigh/3ppeth-steem)
