
---
title: 'python-bitshares 边学边记 (五) / Market类'
permlink: python-bitshares-market
catalog: true
toc_nav_num: true
toc: true
date: 2017-12-13 13:42:39
categories:
- python-bitshares
tags:
- python-bitshares
- bitshares
- python
- cn
- cn-programming
thumbnail: https://steemitimages.com/DQmab7QPFcG6Q4U9Z1FMThkdVcDneSY5xR2bPxVWryEZfeX/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在之前的几篇文章中，我们简单介绍了如何安装python-bitshares 、python-bitshares的钱包相关操作、BitShares类以及Account类。

详情可以参考文末的参考链接。

![](https://steemitimages.com/DQmab7QPFcG6Q4U9Z1FMThkdVcDneSY5xR2bPxVWryEZfeX/image.png)
(图源 ：pixabay)

这节我们来继续学习python-bitshares 。

# Market类

bitshares中最激动人心的特点是啥，我个人认为无疑就是去中心化交易所了，在这个市场你可以交易很多资产，和中心化交易所相比，交易都是由bitshares自动撮合完成的，公开透明。无需担心交易所搞鬼，侵吞你的资产。其实还有很多特性和有点，但是我水平有限，理解还不够深入，就不多加评论了，大家自己去慢慢发掘。

好啦，既然bitshares的交易所这么牛叉，我们来看看用python-bitshares咋玩。

#### 创建实例

我们可以使用以下代码创建Market实例
`from bitshares.market import Market`
`market = Market("BTS:CNY")`

其中***`"BTS:CNY"`***为我们指定的市场。前边***`BASE`***， 后边***`QUOTE`***，亦即以BTS为基础的CNY报价。

其中市场交易对可以已如下方式指定(三者效果相同)：
* ``base:quote`` 以``:``分隔
* ``base/quote`` 以``/``分隔
* ``base-quote`` 以``-``分隔


#### 查看报价

创建Market类实例之后，我们就可以随时查看市场报价了
`from pprint import pprint`
`from bitshares.market import Market`
`market = Market("BTS:CNY")`
`pprint(market.ticker())`
![](https://steemitimages.com/DQmbTqkbYrbUfitoKcJY4ckSeNH3sXAXLHM8C6cfD5iawYP/image.png)

有没有发现，其实获取的信息和我们公众号获取的一样
![](https://steemitimages.com/DQmcHiYyCLLPvBmNkniv9zkynLb6Y58pYdcMN3HqgXy8kY8/image.png)
所以你要仅仅想查个行情啥的，用我们公众号就好啦：）


#### 获取24小时内的交易量

除了报价以外，还有个功能是获取24小时内的交易量
`from pprint import pprint`
`from bitshares.market import Market`
`market = Market("BTS:CNY")`
`pprint(market.volume24h())`
![](https://steemitimages.com/DQmZF3z8SVWWxRV5bxFpHWjPGAL7DpHKR4XBst9Ddc46Wxi/image.png)
其实ticker信息中已经包含了交易量信息，但是bitshares还设计了这个API，估计是为了访问快速吧？我瞎猜的。😀

#### 获取市场订单信息/orderbook

以下代码获取市场当前订单信息
`from pprint import pprint`
`from bitshares.market import Market`
`market = Market("BTS:CNY")`
`pprint(market.orderbook(5))`
![](https://steemitimages.com/DQmThDa1d5uLouTiA2uFCHvnS7Bn8L4TqmMWZLQ98BXLR1H/image.png)
我们可以通过指定limit参数，来返回指定数量的订单信息，示例中我指定为5。

#### 获取历史成交信息

可以用history获取账户信息，参数定义如下：
`from pprint import pprint`
`from bitshares.market import Market`
`market = Market("BTS:CNY")`
`pprint(market.trades(5))`
![](https://steemitimages.com/DQmdww9nft8PDzKA4gzasEvwvdSWf8bgnrtyn7w3HssHENy/image.png)
我们同样可以通过指定limit参数来限制返回记录的个数。

除了获取整个市场的历史交易信息以外，我们还可以获得指定账户的历史交易信息，方法定义如下：
`def accounttrades(self, account=None, limit=25):`
![](https://steemitimages.com/DQmSYqi1spEKRofQtV771Ai4554D4JPbWwCdtbimpngRGQJ/image.png)
我测试了一下，返回为空，看了一下代码，它是使用***`get_fill_order_history`***API 获取所有的撮合订单信息，再按用户筛选出属于对应用户的订单。***此处有很明显的BUG!***

另外还有一个
`accountopenorders`方法，个人认为和Account类的openorders属性重复。


# 如何买卖对应资产

上述内容，我们介绍了如何使用Market类获取市场的各种信息。接下来则是激动人心的时刻了，亦即如何使用Market类下单。

#### buy方法

我们可以使用***`buy`***方法来挂买单：
`from pprint import pprint`
`from bitshares.market import Market`
`market = Market("BTS:CNY")`
`market.buy(1.00001, 2, account='xxxxx')`
![](https://steemitimages.com/DQmUvFXcdHARhgDFmfYYn1C7GFRxK5hoXyPiP3imEUqTM1x/image.png)
挂单成功了，不过现在以这个价位挂单，想买到BTS，那无异于痴心妄想。


#### sell方法

用法和buy方法大同小异啦
`from pprint import pprint`
`from bitshares.market import Market`
`market = Market("BTS:CNY")`
`market.sell(2.00001, 2, account='xxxx')`

![](https://steemitimages.com/DQmehVfJAT7atQbQ3bh7BsdffcVrhBtDW9dgz8zG2hxBEPz/image.png)

#### cancel方法

除了能挂买单、卖单以外，取消订单功能也很重要。
cancel方法 用于取消订单。
`from pprint import pprint`
`from bitshares.market import Market`
`market = Market("BTS:CNY")`
`market.cancel(['1.7.42839275'], 'xxxx')`
![](https://steemitimages.com/DQmWYpyoqbsTbExax7y4g1eagNHUr1ajPiefpnoJUNDYskU/image.png)
查看账户活动记录，可以发现订单取消成功。


# 总结

Market类可以用于获取bitshares交易所指定交易对的市场信息，也可以用来挂买单卖单以及取消订单。强大的不要不要的。

感兴趣的，自己去体验一下吧，写不动了，本文就此打住啦。

# 参考信息

* https://github.com/xeroc/python-bitshares
* [python-bitshares 边学边记 (一) : 简介与安装](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares)
* [python-bitshares 边学边记 (二) : 钱包操作](https://steemit.com/python-bitshares/@oflyhigh/3ab1oc-python-bitshares)
* [python-bitshares 边学边记 (三) / BitShares类](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares-bitshares)
* [python-bitshares 边学边记 (四) / Account类](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares-account)

- - -

This page is synchronized from the post: [python-bitshares 边学边记 (五) / Market类](https://steemit.com/@oflyhigh/python-bitshares-market)
