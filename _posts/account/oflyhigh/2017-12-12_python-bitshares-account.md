
---
title: 'python-bitshares 边学边记 (四) / Account类'
permlink: python-bitshares-account
catalog: true
toc_nav_num: true
toc: true
date: 2017-12-12 12:41:09
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


在之前的几篇文章中，我们简单介绍了如何安装python-bitshares 、python-bitshares的钱包相关操作以及BitShares类。

* [python-bitshares 边学边记 (一) : 简介与安装](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares)
* [python-bitshares 边学边记 (二) : 钱包操作](https://steemit.com/python-bitshares/@oflyhigh/3ab1oc-python-bitshares)
* [python-bitshares 边学边记 (三) / BitShares类](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares-bitshares)

![](https://steemitimages.com/DQmab7QPFcG6Q4U9Z1FMThkdVcDneSY5xR2bPxVWryEZfeX/image.png)
(图源 ：pixabay)

这节我们来继续学习python-bitshares 。

# Account 类

bitshares中采用的用户这个概念，无论是发起转账还是投票或者是市场下单，主体都是用户。所以了解用户类是很有必要的。

#### 创建实例

我们可以使用以下代码创建用户类实例
`from bitshares.account import Account`
`account = Account("xxxxx")`
之后就可以读取和用户有关的各类信息了。

#### 获取资产余额

比如获取我们最关心的账户资产余额信息：
`from pprint import pprint`
`from bitshares.account import Account`
`account = Account("xxxxx")`
`pprint(account.balances)`
![](https://steemitimages.com/DQmXzgwAicP12ts12K8JjUN7BsLqzQfezoJEEJs55Pa4U95/image.png)

如果账户资产类型比较多，只想获取指定类型的资产，那么我们可以用`balance`方法
比如我们指定获取类型为`CNY`的资产
`account = Account("xxxxx")`
`pprint(account.balance("CNY"))`
![](https://steemitimages.com/DQmQzq7QZzt9No7kVSwAHYeBppbcZFqbhPNWQMpCUAfUcjc/image.png)

#### 抵押债仓

这个我叫不准咋翻译好，姑且这么叫着，欢迎大家指正。
`account = Account("xxxxx")`
`pprint(account.callpositions)`
![](https://steemitimages.com/DQmd1iUbqWHtxDZ1toSPTCJSF7YCtRJ4XdGZwX17WqToF6i/image.png)

#### 获取账户订单

以下代码获取当前账户订单信息
`account = Account("xxxxx")`
`pprint(account.openorders)`
![](https://steemitimages.com/DQmZJwUcrum7iRZJqCvo3WJr5Pvme44tP5a1SFsTbTfUCY9/image.png)

略为遗憾的是，显示的资产对不支持互换。


#### 获取账户历史

可以用history获取账户信息，参数定义如下：
![](https://steemitimages.com/DQmZLpsQLDwrgBNBJhf8byJgBfmuTTXaBrJocFoxNxahNjt/image.png)

我们尝试获取最近的两条历史记录：
`for h in account.history(limit=2):`
`     pprint(h)`
![](https://steemitimages.com/DQmQ7SHPK8DDzuSfxjpYqahMXbvCc3RcXpcp2sFpsLxmKYk/image.png)
通过分析可得，一条是转账，一条是订单撮合

# Account 类其它属性/方法

#### items 方法

方法items 获取账户的一些基本信息：
`for k, v in account.items(): print(k, v);`
![](https://steemitimages.com/DQmcwmEuVJVHiFkbfd4uPyEcu3jJ9LcJ7HaXMbAfnqz913G/image.png)

#### is_ltm 属性
判断用户是否是终身会员
`print(account.is_ltm)`
![](https://steemitimages.com/DQmQmgVye92v65VLCt9JpAsTTcXqn3TgfasLQrqWtLkQX99/image.png)
很遗憾，我不是😭

#### upgrade 方法

upgrade方法用于将账户升级成终身会员。终身会员有很多好处，比如80% 手续费返现奖励啦，又比如通过引荐用户注册获得推荐奖励啦。但是我想了想，还是不要测试的啦，因为，升级终身会员，是需要大把的money呢。

![](https://steemitimages.com/DQmW3PPx75T21W7BXy2MXYd7a9U7nKXTQfDrA3zNF6nUNC8/image.png)
只需1,456.76103 BTS哦，土豪们赶快行动吧。

# 底层实现

Account 类获取信息的几个属性和方法，实际上封装了以下几个API
* `get_objects`
* `lookup_account_names`
* `get_full_accounts`
* `get_account_balances`
* `get_account_history`
感兴趣的可以自行深入探索一下，本文就不再赘述了。

# 参考信息

* https://github.com/xeroc/python-bitshares
* [python-bitshares 边学边记 (一) : 简介与安装](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares)
* [python-bitshares 边学边记 (二) : 钱包操作](https://steemit.com/python-bitshares/@oflyhigh/3ab1oc-python-bitshares)
* [python-bitshares 边学边记 (三) / BitShares类](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares-bitshares)

- - -

This page is synchronized from the post: [python-bitshares 边学边记 (四) / Account类](https://steemit.com/@oflyhigh/python-bitshares-account)
