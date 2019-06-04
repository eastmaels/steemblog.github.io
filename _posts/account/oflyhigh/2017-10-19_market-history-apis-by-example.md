
---
title: '一起来玩内部市场吧(二)！/ Market history APIs by example'
permlink: market-history-apis-by-example
catalog: true
toc_nav_num: true
toc: true
date: 2017-10-19 10:06:27
categories:
- steemdev
tags:
- steemdev
- market
- money
- api
- cn
thumbnail: https://steemitimages.com/DQmWvzn1cdSFzLmgPBw2EgybRpxsCKWLBnLUGYkNb8GB6tK/keyboard-621830_1280.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


昨天发了一篇文章，[《一起来玩内部市场吧！/ Let's play the internal market》](https://steemit.com/cn/@oflyhigh/let-s-play-the-internal-market)

很多朋友私下里表示了极大的兴趣，因为内部市场最吸引人的特点：***没有手续费***！与其去其它各类市场被人家薅羊毛，不如咱们自己在内部市场愉快的玩耍，没有手续费，考验的就是技术和运气了。

关于内部市场，我之前也写过一系列的文章，当然其实就是自己学习的过程，毕竟在这之前，我对交易什么的也一窍不通。详情可参考页面底部的之前相关文章。在这篇文章中，我来介绍一下，自动操作可能涉及到的API等。

![](https://steemitimages.com/DQmWvzn1cdSFzLmgPBw2EgybRpxsCKWLBnLUGYkNb8GB6tK/keyboard-621830_1280.jpg)
(图源：[pixabay](https://pixabay.com))

本篇文章介绍以下API /  In this article, I'll introduce the following APIs by example: 

* get_ticker()
* get_volume()
* get_order_book()
* get_recent_trades()
* get_trade_history()
* get_market_history_buckets()
* get_market_history()

详情可以参考，[market_history_api.hpp](https://github.com/steemit/steem/blob/master/libraries/plugins/market_history/include/steemit/market_history/market_history_api.hpp)
They are located in [market_history_api.hpp](https://github.com/steemit/steem/blob/master/libraries/plugins/market_history/include/steemit/market_history/market_history_api.hpp)

API返回的结果是JSON 编码字符串，为了便于查看，我将其解码并格式化显示。
The return results are JSON encoded string, For convenience, I decode them and display them formatted.

----

# get_ticker()

***API:*** `market_ticker get_ticker() const;`
***说明:*** 获取市场报价信息
Returns the market ticker for the internal SBD:STEEM market

***调用示例 /Example:***
`curl -s --data '{"jsonrpc": "2.0", "method": "call", "params": ["market_history_api", "get_ticker", []], "id": 1}' https://steemd.steemit.com`

***返回信息 / Return:***
![](https://steemitimages.com/DQmQg8jUBZKf9gwTn7NW4cHxZiiFtraQFxKgzjsJz2ppXbi/image.png)

----

# get_volume()

***API:*** `market_volume get_volume() const;`
***说明:*** 最近24小时的时常交易量
Returns the market volume for the past 24 hours

***调用示例 /Example:***
`curl -s --data '{"jsonrpc": "2.0", "method": "call", "params": ["market_history_api", "get_volume", []], "id": 1}' https://steemd.steemit.com`

***返回信息 / Return:***
![](https://steemitimages.com/DQmQpN1Eksdt4pa5aVHyJNqkC76GUhg3LPbgE1ECPaihsS5/image.png)

---

# get_order_book()

***API:*** `order_book get_order_book( uint32_t limit = 500 ) const;`
***说明:*** 获取市场当前订单信息
Returns the current order book for the internal SBD:STEEM market.

***调用示例 /Example:***
`curl -s --data '{"jsonrpc": "2.0", "method": "call", "params": ["market_history_api", "get_order_book", [5]], "id": 1}' https://steemd.steemit.com`

***返回信息 / Return:***
![](https://steemitimages.com/DQmf8KBu8qTw5tTYJHCbtsk4z9d9Q7fVnEHPEvfZGT9SiLG/image.png)

----

# get_recent_trades()

***API:*** `std::vector< market_trade > get_recent_trades( uint32_t limit = 1000 ) const;`
***说明:*** 获取内部市场最近成交信息
Returns the N most recent trades for the internal SBD:STEEM market.

***调用示例 /Example:***
`curl -s --data '{"jsonrpc": "2.0", "method": "call", "params": ["market_history_api", "get_recent_trades", [5]], "id": 1}' https://steemd.steemit.com`

***返回信息 / Return:***
![](https://steemitimages.com/DQmWRdLGnWJCy5DqzX8BYGtPaSEzv5uTjenXKrJ4C2XjeHP/image.png)

----

# get_trade_history()

***API:*** `std::vector< market_trade > get_trade_history( time_point_sec start, time_point_sec end, uint32_t limit = 1000 ) const;`
***说明:*** 获取内部市场指定时间范围内的成交信息
Returns the trade history for the internal SBD:STEEM market.

***调用示例 /Example:***
`curl -s --data '{"jsonrpc": "2.0", "method": "call", "params": ["market_history_api", "get_trade_history", ["2016-08-01T00:00:00", "2016-08-05T00:00:00", 10]], "id": 1}' https://steemd.steemit.com`

***返回信息 / Return:***
![](https://steemitimages.com/DQmdKjoq4AnQeXJFwFMVLxUAXgtxr73U3a9dgU8WxKekwyc/image.png)

----

# get_market_history_buckets()

***API:*** `flat_set< uint32_t > get_market_history_buckets() const;`
***说明:*** 获取市场行情处理区间(15秒/分钟/5分钟/等)
Returns the bucket seconds being tracked by the plugin.

***调用示例 /Example:***
`curl -s --data '{"jsonrpc": "2.0", "method": "call", "params": ["market_history_api", "get_market_history_buckets", []], "id": 1}' https://steemd.steemit.com`

***返回信息 / Return:***
![](https://steemitimages.com/DQmexvhBmYP8jzT1WN1ktpCyuNt4fngsHB63hQATEGgneEj/image.png)

---
# get_market_history()

***API:*** `std::vector< bucket_object > get_market_history( uint32_t bucket_seconds, time_point_sec start, time_point_sec end ) const;`
***说明:*** 获取内部市场历史信息
Returns the market history for the internal SBD:STEEM market.

***调用示例 /Example:***
`curl -s --data '{"jsonrpc": "2.0", "method": "call", "params": ["market_history_api", "get_market_history", [86400, "2016-08-01T00:00:00", "2016-08-05T00:00:00"]], "id": 1}' https://steemd.steemit.com`

***返回信息 / Return:***
![](https://steemitimages.com/DQmPhv6wUukiyufqUeBM2AN2XbcsAZVcJ4WgmgBPrgWJNtn/image.png)

----

# 之前相关文章 / Previous articles
* [微信公众号支持查询内部市场信息啦](https://steemit.com/cn/@oflyhigh/6ha3fx)
* [如何计算内部市场当前参考价格](https://steemit.com/cn/@oflyhigh/2xxlfx)
* [内部市场交易类型显示的问题](https://steemit.com/cn/@oflyhigh/vlif6)
* [内部市场(Internal market)要价(Ask)与出价(Bid)的区别](https://steemit.com/cn/@oflyhigh/internal-market-ask-bid)
* [👉 Guide for newbie: How to use internal market / step by step / 新人指南：教你如何使用内部市场](https://steemit.com/steemit/@oflyhigh/guide-for-newbie-how-to-use-internal-market-hand-by-hand)
* [👉 [中文版]新人指南：教你如何使用内部市场 / [Chinese Version] Guide for newbie: How to use internal market.](https://steemit.com/steemit/@oflyhigh/chinese-version-guide-for-newbie-how-to-use-internal-market)

- - -

This page is synchronized from the post: [一起来玩内部市场吧(二)！/ Market history APIs by example](https://steemit.com/@oflyhigh/market-history-apis-by-example)
