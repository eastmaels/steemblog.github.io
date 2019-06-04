
---
title: '坏消息？好消息？/ Bad News or Good News?'
permlink: bad-news-or-good-news
catalog: true
toc_nav_num: true
toc: true
date: 2017-10-06 12:46:00
categories:
- cn
tags:
- cn
- steemit
- upgrade
- steem
- news
thumbnail: https://steemitimages.com/DQmXX3j5wXML8FkuVeNuDEzwJHZGNJFRcbLu7GNaYFw3SjX/cheers-839865_1280.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![cheers-839865_1280.jpg](https://steemitimages.com/DQmXX3j5wXML8FkuVeNuDEzwJHZGNJFRcbLu7GNaYFw3SjX/cheers-839865_1280.jpg)
(图源：[pixabay](https://pixabay.com))

# steemit.com 故障

对于steemit深度成瘾用户而言，今天最令人沮丧的事情莫过于steemit.com网站访问不正常，确切地说，北京时间下午不到1：00到晚上我撰写本文时7:50，至少长达7：00小时处于断断续续或者根本无法访问的状态。

微信群里已经吵翻了天，都在纷纷猜测是不是被DDOS攻击之类的。

我通过其它节点测试了一下，steem区块链一切正常，正常出块正常访问，最重要的是，我们的钱包一切安好😀

那么，出问题的原因就很清楚了，是steemit官方提供的节点(steemd.steemit.com)出故障了。

出现这样的情况，我也很郁闷，因为我的一些程序都是使用的官方节点，它一down掉，我的程序几乎无一例外的统统死掉。看着一排排的错误日志，我欲哭无泪啊。

# 替换操作

之前我曾写过一篇文章：
* [公共Steem Full API 节点列表 / List of Public Steem Full API Nodes](https://steemit.com/cn/@oflyhigh/steem-full-api-list-of-public-steem-full-api-nodes)

除了官网节点外，还有一堆***公共Steem Full API 节点/Public Steem Full API Nodes***，但是遗憾的是，其中***部分节点不支持广播/broadcast***

在程序中，我们可以使用这个节点替换官方的节点，就可以实现STEEM区块链的读取了。比如说我的公众号，慢虽慢矣，好用终归比不好用强得多的多。

至于使用网页方式访问，还有busy.org之类的。

你可能很好奇，为何busy.org可以访问，而官网steemit.com 访问不能，答案很简单，busy.org 使用的是第三方 @gtg 创建的节点: https://gtg.steem.house:8090 。

# 故障原因

虽然用替换节点的方式可以访问，甚至用busy.org之类的第三方站点可以浏览甚至发帖。

但是还是忍不住来看一下官网的节点到底怎么了？毕竟我还是习惯用steemit.com, 还有也不想被busy.org之类的站点剥掉一层皮。

出错的表象是断断续续，访问超时
![](https://steemitimages.com/DQmfGmDYUzaYvAHt3BFCCC8ovvwEX2v5gVTuQoHHGTE4wb9/image.png)

我趁抽风的间隙读了一下steemd.steemit.com的***版本/Version***
![](https://steemitimages.com/DQmdcL3tbKDzBvr1Q5pf4yjRzQ7EqFwmEJGxcpyz551s5Hj/image.png)

我们没看错，当前版本: ***0.19.2***
`{'blockchain_version': '0.19.2', 'steem_revision': '5d4b498bf8b8c05d8cc71ae3c89e7a707ccbfc4a', 'fc_revision': 'c009d2d8332a3ce9936c00deb6f4629555f26fad'}`

对比一下我5天以前的文章
![](https://steemitimages.com/DQmbjGYytBMBu2wmAWoeMjcym21Df1fCpypiPCFC7MmXi3Z/image.png)
5天以前的版本是： ***0.19.0***

也就是说，官网的这个节点正在升级！

虽然我对官网采取这样暴力的方式升级节点，以至于steemit.com都不可用的做法表示强烈不赞同，但是对steemd.steemit.com 升级到新版本还是抱有很大期待的。

或许我们耐心等待一下，一个更加强大更加稳定快速的steemit.com 便会出现在我们面前了。

所以，这算是坏消息中的一个好消息吧。让我们拭目以待吧。

- - -

This page is synchronized from the post: [坏消息？好消息？/ Bad News or Good News?](https://steemit.com/@oflyhigh/bad-news-or-good-news)
