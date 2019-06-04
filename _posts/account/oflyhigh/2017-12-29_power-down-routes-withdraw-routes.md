
---
title: '微信公众号支持查询Power Down Routes (又称为：Withdraw Routes)'
permlink: power-down-routes-withdraw-routes
catalog: true
toc_nav_num: true
toc: true
date: 2017-12-29 13:37:27
categories:
- security
tags:
- security
- steemit
- cn
- wechat
- tools
thumbnail: https://steemitimages.com/DQmQ8MNrQvx74YnVh2jQqnowAffC5qoNB1hJB671ns3EYvY/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


今天上来看到 @catwomanteresa 的帖子，她的***SBD被小偷偷光了***，深表同情。然后看到 @nationalpark 在回复中提到小偷把 @catwomanteresa ***Power Down Route*** 改成了自己的账户。多亏 @nationalpark 火眼金睛发现了这个问题，否则以后 @catwomanteresa Power Down 的时候，钱就进了小偷的账户。

![](https://steemitimages.com/DQmQ8MNrQvx74YnVh2jQqnowAffC5qoNB1hJB671ns3EYvY/image.png)
(图源 ：[pixabay](https://pixabay.com))

# Power Down Routes

提醒过N次，让大家防范钓鱼，居然还有人中招，虽然说可能是小偷/骗子技术高明，但是***如果我们谨慎一些，小偷/骗子可能就无法得逞了***。好吧，扯远了，这篇文章的重点不是提醒大家防范钓鱼，也不是谴责小偷/骗子，而是告诉大家微信公众号支持查询Power Down Routes 了。

如果你不清楚***Power Down Routes***是啥，可以看我之前的文章：
* [你或许不知道的STEEMIT(STEEM)一些隐藏功能](https://steemit.com/cn/@oflyhigh/steemit-steem)

为什么要加上这个功能呢？如果你账户被盗过被人偷偷设置了***Power Down Routes***，那么除非你经常关注你账户的steemd的记录，或者看steemd左边的***Withdraw routes***，你很难发现自己账户存在这么严重的问题。即使你发现了steemd左边的***Withdraw routes***不为零，你也不知道你Power Down的钱会去到哪里！以前我介绍过一种[查询方式](https://steemit.com/cn/@oflyhigh/powerdown-route)，但是对于新人而言，过于困难。所以，一种方便的查询方式还是很有必要的(至少我觉得是)。


# 如何查询

为了方便大家，继续延续公众号功能方便快捷的作风。

***`输入 @steemid?pdr就可以开始查询啦。`***

示例：***`@oflyhigh?pdr`***
![](https://steemitimages.com/DQmZvgGKpwBCTcWXYUMwRrQNmh1a3cx7XSc5ZQNem6GRAC9/image.png)

另外，支持***双向查询***

比如上例中，我们查询显示的结果是***`@oflyhigh`*** Power Down出来的steem会分别到达exec和eval两个账户。那么，从eval的角度，我能否查询都谁Power Down的STEEM流向我这里了呢？答案是可以的。

示例：***`@eval?pdr`***
![](https://steemitimages.com/DQmUhupCaziVF5RYkPtP6mm1y5GuCdrVrfAxZ7h5DmxHawU/image.png)

# 显示内容的说明

简单解释一下显示的内容：
* From:  来源账户
* To: 目标账户
* Percent: 百分比
* Auto Vest: 自动Power Up

#### Percent

亦即Power Down出来的金额，多大比例送达到目标账户。所有百分比加起来后如有有剩余，那么剩余部分则Power Down到来源账户。

#### Auto Vest
* Auto Vest为False，Power Down出来的STEEM会以STEEM的方式到达目标账户中。
* Auto Vest为True，Power Down出来的STEEM 自动Power UP到目标账户中。

# 如何设置以及取消Power Down Routes

可以参考我以前的文章：
* [如何查询 PowerDown Route](https://steemit.com/cn/@oflyhigh/powerdown-route)

另外，[@nationalpark的文章中](https://steemit.com/steem/@nationalpark/thief-of-steem)提到:
> @skenan说用Vessel可以删除这个路径

我没试过Vessel，不做评价，感兴趣的可以自己试试。

# 公众号添加方法

* 方式一：
进入微信通讯录->点击公众号->点右上角加号->搜索steemit，关注即可。

* 方式二：
直接扫描以下二维码：
![](https://steemitimages.com/DQmPH3g5AFW9v9bTGhiMGSUHZL6zdUbPoZpqFEvoH1dCHd2/image.jpg)

欢迎大家多提宝贵意见啊。

# 参考链接
* [你或许不知道的STEEMIT(STEEM)一些隐藏功能](https://steemit.com/cn/@oflyhigh/steemit-steem)
* [如何查询 PowerDown Route](https://steemit.com/cn/@oflyhigh/powerdown-route)

# 相关链接
* [My SBD and Steem are stolen 我的Steemit帳號的錢被偷光光了 by @catwomanteresa](https://steemit.com/steemit/@catwomanteresa/my-sbd-and-steem-is-stolen-steemit)
* [Thief of Steem有贼❗ by @nationalpark](https://steemit.com/steem/@nationalpark/thief-of-steem)

- - -

This page is synchronized from the post: [微信公众号支持查询Power Down Routes (又称为：Withdraw Routes)](https://steemit.com/@oflyhigh/power-down-routes-withdraw-routes)
