
---
title: '一起来玩内部市场吧(三)！/ Program trading'
permlink: program-trading
catalog: true
toc_nav_num: true
toc: true
date: 2017-10-20 06:00:48
categories:
- steemdev
tags:
- steemdev
- market
- money
- api
- cn
thumbnail: https://steemitimages.com/DQmdrc7b9hmHxT6FR5uTQAKXg3kxR7MvsCyvLW13ZiuuuYr/money-2724235_1280.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


之前写了两篇文章：
* [一起来玩内部市场吧！/ Let's play the internal market](https://steemit.com/cn/@oflyhigh/let-s-play-the-internal-market)
* [一起来玩内部市场吧(二)！/ Market history APIs by example](https://steemit.com/steemdev/@oflyhigh/market-history-apis-by-example)

文章一讲述了傻傻的机器人在内部市场~~赔钱~~赚钱的故事；文章二，通过实例（by example）介绍了Market history APIs。

![](https://steemitimages.com/DQmdrc7b9hmHxT6FR5uTQAKXg3kxR7MvsCyvLW13ZiuuuYr/money-2724235_1280.jpg)
(图源：[pixabay](https://pixabay.com))

但是问题来了，通过Market history APIs能获得市场行情、交易量、甚至K线图之类的，但是光光获得这些信息，如何变换成财富呢？ 一种方法是我们通过分析行情数据，瞅准时机，然后手工挂单，~~高买低卖~~低买高卖，攫取财富。然而，人不是机器，没法一直盯盘，市场瞬息万变，手工操作往往让我们错失良机 。所以程序盯盘，程序交易才是王道啊。

当然了，你若和我一样写了个傻傻的程序，那么可能就不单单是赔钱的事啊，还可能被它气到！

好了，是写个赚钱的程序，还是写个气人的赔钱程序，其实用的借口都一样的。这篇文章我们来介绍一下可能用到的东西。

除了上篇文章我们介绍的API外(Market history APIs)，在[Database API](https://github.com/steemit/steem/blob/master/libraries/app/include/steemit/app/database_api.hpp)中还有俩接口可能被用到。

----
# get_order_book()

***API:*** `order_book get_order_book( uint32_t limit = 1000 )const;`
***说明:*** 获取内部市场当前订单信息
Gets the current order book for STEEM:SBD market

***调用示例 /Example:***
`curl -s --data '{"jsonrpc": "2.0", "method": "call", "params": ["database_api", "get_order_book", [5]], "id": 1}' https://steemd.steemit.com`

***返回信息 / Return:***
![](https://steemitimages.com/DQmbxwUQ86E8Zozd792QaHMXCoHaqGizq71BFhEJEhC1uDz/image.png)

***备注:*** 在[前文](https://steemit.com/steemdev/@oflyhigh/market-history-apis-by-example)中，我们也介绍了get_order_book()，我对比了两者区别，Database API中的这个返回的信息更详细。

----

# get_open_orders()

***API:*** `vector<extended_limit_order> get_open_orders( string owner )const;`
***说明:*** 获取指定用户当前挂单信息
Gets the current open orders for specific user.

***调用示例 /Example:***
`curl -s --data '{"jsonrpc": "2.0", "method": "call", "params": ["database_api", "get_open_orders", ["deanliu"]], "id": 1}' https://steemd.steemit.com`

***返回信息 / Return:***
![](https://steemitimages.com/DQmV1k21WdUTaUSHkViiwDggq1YRRdpN6bQbGPHgtse9xuF/image.png)

***备注:*** 因为要弄个截图做例子，而我ID @oflyhigh 目前在内部市场没交易，而机器人用的ID open orders太多，所以只好拿 @deanliu 刘美女的ID来做例子啦。

----

好了，上篇文章加上这半篇，已经把获取市场信息的API都讲完了，接下来，我们看看如何交易：

在 [内部市场交易类型显示的问题](https://steemit.com/cn/@oflyhigh/vlif6)这篇文章中，我们曾经分析过钱包实现挂单的代码：
![](https://steemitimages.com/DQmPxc9BE7HVvCvLn9XzW15G5pNcFjCbdhwJuwjFeDgaJDq/image.png)
（注：代码太长复制不全，感兴趣的自己来[这里](https://github.com/steemit/steem/blob/8cd5f688d75092298bcffaa48a543ed9b01447a6/libraries/wallet/wallet.cpp)看)

在这里还可以看取消订单的代码
![](https://steemitimages.com/DQmNaJDzKkX1PZXf4EcVDtHLNJxPRxoejaDitwwadKT7rF4/image.png)

不难发现，其实操作就是填充个结构体然后并广播出去。但是和之前描述的各种读取信息API不一样，将结构体广播到网络并使其生效是一个很复杂的事情，其中最关键的部分是用自己的私钥为事务签名，我们这篇文章不讲太多细节~~（其实是我也不懂）~~

幸运的是，steem官方的Python库可以帮我们做这些事情，懒人福音啊。

steem官方Python库的[交易接口](https://github.com/steemit/steem-python/blob/master/steem/dex.py)提供了好多功能。

![](https://steemitimages.com/DQmWcGN6hCjNdAxgyKmsAzDc6aGzSfTFR3oaWDowXgf9uQB/image.png)
（https://github.com/steemit/steem-python/blob/master/steem/dex.py）

比如说：
* 买入STEEM, 付出SBD
* 卖出STEEM, 换取SBD
* 买入SBD, 付出STEEM
* 卖出SBD, 换取STEEM

但是如我在[这篇文章](https://steemit.com/cn/@oflyhigh/vlif6)中所描述，根本没必要整这么多嘛，完全可以缩减成两项：
* 买入STEEM, 付出SBD
* 卖出STEEM, 换取SBD

---

好了，写了这么多，想必你对如何玩转内部市场已经有了初步的想法。

接下来发挥你的聪明才智，创造财富吧，我的傻傻的机器人在内部市场等着给大家发钱呢！

什么，你说[dex](https://github.com/steemit/steem-python/blob/master/steem/dex.py) 没有例子？？ 如果这个还要写例子，我劝你还是别用程序玩内部市场啦。这个就当做留给大家的小作业吧。 （~~其实我是真的好懒，我会说吗？~~）

全系列完，感谢阅读。

- - -

This page is synchronized from the post: [一起来玩内部市场吧(三)！/ Program trading](https://steemit.com/@oflyhigh/program-trading)
