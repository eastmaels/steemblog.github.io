
---
title: '不经历风雨，怎么见彩虹—— 有感于STEEMIT被DDOS事件'
permlink: steemit-ddos
catalog: true
toc_nav_num: true
toc: true
date: 2017-10-07 02:05:24
categories:
- cn
tags:
- cn
- steemit
- steem
- nodes
- dns
thumbnail: https://steemitimages.com/DQmTCTEUhyXpP4YNofL2K8WHMw4wxtN4QNQuTxpzidCSEMR/rainbow-569864_1280.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


想必对许多STEEMIT深度成瘾用户而言，昨天是令人沮丧的一天。[steemit.com](https://steemit.com) 无法正常访问，对大家而言虽然不至于如瘾君子没有了毒品，但也好比烟民没有了烟，酒徒没有酒，赌徒没有赌局😭

幸好的是，steemit.com 不过是UI之一，和steem blockchain是完全不同的概念，所以我们的文章还在，我们的钱包安好。另外busy.org 以及chainbb、esteem等等提供了替代的访问方式，愿意牺牲一点小利的，可以用这些替代方式发帖。不愿意被剥掉一层皮的，可以用这些替代方式浏览，权且当作隔靴搔痒吧。

![rainbow-569864_1280.jpg](https://steemitimages.com/DQmTCTEUhyXpP4YNofL2K8WHMw4wxtN4QNQuTxpzidCSEMR/rainbow-569864_1280.jpg)
(图源：[pixabay](https://pixabay.com))

# 故障回顾

在昨天的文章[坏消息？好消息？/ Bad News or Good News?](https://steemit.com/cn/@oflyhigh/bad-news-or-good-news)中，我说到steemd.steemit.com 正在升级，这没错，几天前steemd.steemit.com 这个节点还是0.19.0版本，而昨晚测试，已然变成了0.19.2版本。但是后来发现好久还没好，就觉得事情不是那么简单。

这之后不久，sneak发了一个短小精悍的post
[Steemit.com is experiencing a DDoS attack.](https://steemit.com/steemit/@sneak/steemit-com-is-experiencing-a-ddos-attack)

约4个小时之后，官方博客@steemitblog 给出原因。
 [Update Regarding DDoS Attack on Steemit.com](https://steemit.com/steemit/@steemitblog/update-regarding-ddos-attack-on-steemit-com)

但是因为steemit公司的响应不及时，还是引发了一些分析和猜测，比如：
* [Reasons for Steemit.com downtime](https://steemit.com/steemit/@zinovi/reasons-for-steemitcom-downtime)
* [Steemit is undergoing a DDOS service denial attack but your wallet is safe...](https://steemit.com/steemit/@sircork/steemit-is-undergoing-a-ddos-service-denial-attack-but-your-wallet-is-safe)

悲催的是，这两个帖子无一例外地被sneak差评，原因是传播错误信息。


姑且不去论这两个帖子是否是传播错误信息，但是大家猜测和分析难道不是因为官网没有及时发布和更新正确的信息吗？

另外，sneak的帖子，和官网的帖子，都说是steemit.com站点被DDOS。
而我当时测试，steemd.steemit.com 这个节点是没法使用的！所以是steemit.com被DDOS还是steemd.steemit.com被DDOS还是steemit.com被D导致steemd.steemit.com不正常，我们至今不得而知！

# 风雨之后

今早起来，发现steemit.com 访问起来一切正常。测试了一下官网的节点，也可以正常使用。

我的微信公众号，也从各种不正常的状态，比如响应迟钝或者返回类似如下信息：
![](https://steemitimages.com/DQmPQqHPhhh6CecWhiCBAJAuBUEzWty6WQUmhkvmztPoFsY/image.png)

恢复到1秒以内的迅速响应模式。
![](https://steemitimages.com/DQmZPoGEUDLZSwKPzRVTCJPLY9d7UXGwkJzZ1kUuZvEA6Wp/image.png)

另外，我测试了一下官网的节点：
![](https://steemitimages.com/DQmcY9Dh7TrWShV7SR6koDMDjG6gVZZAj5hP2rGaRemCRMA/image.png)
(昨天是这个样子）

![](https://steemitimages.com/DQmSmdEbP4SS8AgxVLb1mg8htFmQsZayRAKBJJc7ok2BTLo/image.png)
(今天是这个样子）

有没有发现什么不同的地方？
没错，***steemd.steemit.com 的节点数从三个增加至6个！***

使用DNS轮询是常用的负载均衡手段之一，节点数从三个增加至6个，简单的估算，处理能力将会翻倍！如果解决掉DDOS的问题，我们访问STEEMIT.COM会更快更平稳。这算是利好消息之一吧。

# 结论

***DDOS是一块试金石。***

无论是升级引发的DDOS还是其它原因，尽管STEEMIT官方在处理这个问题上不够及时透明，存在一些瑕疵，但是经风历雨后，相信steemit.com会变得更加友好。

另外，steem 区块链在这次事件中岿然不动，也证实了整个系统的强大和稳定。

***不经历风雨，怎么见彩虹，愿steem、steemit 越来越好！***

- - -

This page is synchronized from the post: [不经历风雨，怎么见彩虹—— 有感于STEEMIT被DDOS事件](https://steemit.com/@oflyhigh/steemit-ddos)
