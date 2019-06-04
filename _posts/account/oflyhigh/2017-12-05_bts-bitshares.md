
---
title: 'BTS投资者福音，公众号支持查询bitshares的账户资产啦'
permlink: bts-bitshares
catalog: true
toc_nav_num: true
toc: true
date: 2017-12-05 12:36:09
categories:
- bitshares
tags:
- bitshares
- assets
- wechat
- cn
- cn-programming
thumbnail: https://steemitimages.com/DQmQhgbujLoP7TJDHAdJFGUVPp2trhDR92usKNab8hBNiFo/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


据传，古时候地主守财奴，经常在家数钱，这样心里会很充实。

作为一个新时代的~~守财奴~~投资者，知道自己账户下有多少钱，同样心里会比较踏实，所以我一直觉得做公众号的查询功能，最最重要一点是加入资产查询。这样才能迎合广大~~守财奴~~投资者的心里。确切地说，满足自己的变态心里。

![](https://steemitimages.com/DQmQhgbujLoP7TJDHAdJFGUVPp2trhDR92usKNab8hBNiFo/image.png)
(图源 ：pixabay)

# steem 资产查询

我们公众号，很早就支持steem的资产查询了，比如简单的指令(包含一些基本的信息)：
![](https://steemitimages.com/DQmVm6MKveoMu8LGpixRZXcGyx9UDcNm6sUsaHibp7g6Dmf/image.png)


或者更复杂点的(包含各类资产信息)：
![](https://steemitimages.com/DQmTxeBuqVsVEFLHPoDayHAdTUZ4jBsB6KnAxsZFkCRyNYb/image.png)

# bitshares 资产查询

自从开始玩bitshares，我就一直想做个bitshares资产查询功能。

但是不同于steem，bitshares有各类资产，比如:
* 核心的BTS (Core token)
* 各类智能货币： CNY、USD、BTC、JPY等  (SmartCoin)
* 各类用户发行资产： OPEN.EOS、OPEN.BTC、GDEX.BTC、YOYOW等 (UIA)

其中活跃资产有628项，还有一堆不活跃的......

另外资产还区分为：
* 账户下的资产
* 抵押的资产
* 市场内挂单的资产

如何把各类资产集成到一个查询功能中，是一个老大难的问题。为什么这么说呢？因为公众号处理有时间限制，如果要查询很多资产，多次连接RPC节点，超时是铁铁的了。

想来想去，我们何必把事情搞得那么复杂呢，只查询我关注的资产好了。😀

目前支持的资产类型： ***`BTS、CNY、USD、OPEN.EOS、OPEN.STEEM`***

你问我为啥不加其它的，答案很简单，我暂时没有啊：）

# 查询示例

为了区别于steem的用户，我们使用***`!`***开头

输入***`!`***以及你在bitshares的用户名，比如***`oflyhigh`***，就可以查询了
![](https://steemitimages.com/DQmd1hh1Uok77zdVGCdT2NBrTCSDGVPRMRRGgZijegipcXj/image.png)

数量为0的资产，自动隐藏。

随便查俩账户(P网钱包?)：
![](https://steemitimages.com/DQmeXbrPgZMZ1aYLzneVL8aTcgafxWDtmSwJqufJ25UxDrV/image.png)

# 不足之处

目前还不支持抵押的资产查询，以及市场中资产查询，回头等我学会了，再加上吧。

# 公众号添加方法

还没加公众号的，快点上车啊

* 方式一：
进入微信通讯录->点击公众号->点右上角加号->搜索steemit，关注即可。

* 方式二：
直接扫描以下二维码：
https://steemitimages.com/DQmPH3g5AFW9v9bTGhiMGSUHZL6zdUbPoZpqFEvoH1dCHd2/qrcode_for_gh_9f88179d5c6a_344.jpg

- - -

This page is synchronized from the post: [BTS投资者福音，公众号支持查询bitshares的账户资产啦](https://steemit.com/@oflyhigh/bts-bitshares)
