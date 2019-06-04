
---
title: '提升 @anti-phishing 反钓鱼机器人响应速度 / 最新块以及不可回退块'
permlink: anti-phishing
catalog: true
toc_nav_num: true
toc: true
date: 2017-10-28 04:57:12
categories:
- anti-phishing
tags:
- anti-phishing
- phishing
- bot
- security
- cn
thumbnail: https://steemitimages.com/DQmZcmda4rZB25a8eaBziKTKk4jWz5D5XfbMMQu9KVwUDXf/hacker-1944688_960_720.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在之前的文章中，我介绍了我新上线的反钓鱼机器人

* [向网络钓鱼宣战，介绍我的anti-phishing 机器人 / Fighting on Phishing, introduce my @anti-phishing Bot (Chinese Version)](https://steemit.com/anti-phishing/@oflyhigh/anti-phishing-fighting-on-phishing-introduce-my-anti-phishing-bot-chinese-version)

![hacker-1944688_960_720.jpg](https://steemitimages.com/DQmZcmda4rZB25a8eaBziKTKk4jWz5D5XfbMMQu9KVwUDXf/hacker-1944688_960_720.jpg)

# 响应速度的重要性

机器人上线后，很负责任，昨天又监测到诈骗账户的一系列帖子并予以处理。
![](https://steemitimages.com/DQmPZKnVoEzbSbVQyzJ8sVWyCqvaPt3mApQWkJDFZg179pJ/image.png)

我看了一下处理记录，基本上在一分钟左右处理的，比如最下边的一条记录
* 诈骗账户发文时间为：2017-10-27 09:02:48
* @anti-phishing差评时间为：2017-10-27T09:04:00

中间耗时为1分钟12秒。
![](https://steemitimages.com/DQmRX3odeNjHUd8xsqDSMytFFoRtx31ZdiDnZuXpZHkZtDk/image.png)

我们很高兴看到 @cheetah 以及 @steemcleaners 都行动了起来。
但是略为遗憾的是 @steemcleaners 的差评落后了近 50分钟，这个时间差，足已让很多人上当了。

但是 @anti-phishing 落后一分钟，就不存在问题吗？显然不是，***处理的时间越晚，别人被骗的概率越高***。所以如何提升响应速度，对于 @anti-phishing 反钓鱼机器人而言，有重要的意义。


# 如何提升响应速度

说到如何提升响应速度，我们需要先了解一下***最新区块***以及***不可回退的区块***

顾名思义，***最新区块*** 就是steem 区块链上最新的区块（好像是废话啊？）***不可回退的区块***，就是对应区块里的操作都不可回退。（哎，太技术的我解释不清楚，就这么回事吧）

在 https://steemd.com/ 首页右侧，我们可以看到
![](https://steemitimages.com/DQmZTxq8R5Kx1ZZvVFpvxT65x5F8e7bhFnrzukh5FRHhqmH/image.png)
（最新区块的数值为：16,715,679）

![](https://steemitimages.com/DQmYLdbvWnbPCmRpx9vwugMjTUd3sXYXThHmvEK1QzUbWFp/image.png)
（最后一个不可回退块的数值为：16,715,662）

***不可回退块 比 最新区块落后了 17个块，这个数值不是固定的，但是一般情况是20个块左右。***

***steem区块间隔是3秒（STEEMIT_BLOCK_INTERVAL），如果20个块，那么就是落后一分钟。***

如果用于交易充值确认，那么我们当然要使用不可回退的块。如果用于点赞机器人等，因为30分钟内有早鸟惩罚，所以在文章发布一两分钟内就急着点赞没什么特别的好处。所以无论怎么看，用不可回退块来处理点赞什么的都没问题，***除了用于反钓鱼机器人***！

用于反钓鱼机器人，我们没必要纠结是否是不可回退块，读取最新块即可。

所以读取区块时，我们***应该使用head_block_number 而不是 last_irreversible_block_num***


# 响应速度

按照上述思路，我对 @anti-phishing 代码进行了更新。

更新后，牺牲我的 @oflyhigh.test ID进行测试。

回复创建时间为：2017-10-28 03:44:39
![](https://steemitimages.com/DQmbDLLUzrzgwRkXArp3U8tmf1CwdRB88pogfKZ3AoXiCff/image.png)

@anti-phishing 差评时间为： @2017-10-28T03:44:45
![](https://steemitimages.com/DQmd7RQJjemJnvs3g7dX3WSVUXBAemVcknDtci6RsAnfK5j/image.png)

***耗时仅为6秒，相比之前的1分钟12秒，快了12倍 😀***

完全符合我的预期。
![superhero-534120_960_720.jpg](https://steemitimages.com/DQmS4TJvoDa5gVHFbxQfJzXgdspTMvVEbAMumavWx39uP9u/superhero-534120_960_720.jpg)
(图源 ：[pixabay](https://pixabay.com))

# 更进一步

尽管 @anti-phishing  提前了，但是 @oflyhigh 比 @anti-phishing 落后了三秒（下一个块）
回复的提示内容，比  @oflyhigh 还要落后九秒

如何提升这个速度也是个问题。比如，如果把这些操作都打包到一个块中，或许会更加合理。

不过这个留给之后改进吧。

(封面图源 ：[pixabay](https://pixabay.com))

- - -

This page is synchronized from the post: [提升 @anti-phishing 反钓鱼机器人响应速度 / 最新块以及不可回退块](https://steemit.com/@oflyhigh/anti-phishing)
