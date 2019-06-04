
---
title: 'bitCNY抵押率排行榜的底层实现探索 & 效率提升'
permlink: bitcny-and
catalog: true
toc_nav_num: true
toc: true
date: 2018-01-01 12:49:03
categories:
- python-bitshares
tags:
- python-bitshares
- bitshares
- python
- cn
- cn-programming
thumbnail: https://steemitimages.com/DQmdrWMk6s1zc1gSKTuwMn1cGB4CoNSr6wNEpcD72M1vHun/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在[昨天的帖子](https://steemit.com/python-bitshares/@oflyhigh/68qb51-python-bitshares)中，我们介绍了使用python-bitshares生成bitCNY抵押率排行榜，最终我们也能生成看起来还算漂亮的排行榜。但是我发现一个问题，当我尝试生成很多条目比如前50名、前100名排行榜，我们的程序要很久才能返回。

![](https://steemitimages.com/DQmdrWMk6s1zc1gSKTuwMn1cGB4CoNSr6wNEpcD72M1vHun/image.png)
封面图源：https://pixabay.com

如果是其它程序，慢也就慢了，多等等的耐心还是有的，但是抵押率排行榜可是和我们的钱财息息相关的，延迟越久读到的数据越老旧，因此影响了我们的决策，导致不必要的损失就惨了。于是想调查一下是什么导致了缓慢，有没有改进的余地。

# 底层实现机制

首先我们来分析一下python-bitshares实现抵押率排行榜的底层机制。

我们在前文介绍过，我们使用python-bitshares中***`Asset类的get_call_orders方法`***生成抵押率排行榜。***`get_call_orders方法`***具体实现流程为：

* 使用***`Asset类`***初始化bitCNY的Asset类实例
* 通过读取***`bitasset_data`***获取喂价(settlement_price)
* 通过***`get_call_orders RPC API`***获取抵押数据
  * 使用***`Price类`***处理爆仓价(call_price)
  * 使用***`Amount类`***处理抵押(collateral)以及债务(debt)
  * 使用***`Account类`***处理每个借款人信息(borrower)

这个看起来似乎没什么问题，然而仔细阅读就会发现，这个实现过程做了很多无用功，比如Price类和Amount类，为了实现加减乘除等功能，做了很多判断和处理，如果我们在程序中多次使用，会大幅降低效率。

而最严重的莫过于Account类，程序中***每处理一个用户都要调用一个Account类，执行一次访问网络的操作***，这会耗费大量的网络资源。

# 改进思路

* 减少不必要的类的使用
除了使用python-bitshares的bitshares类以及底层RPC调用以外，不使用任何其它类，比如***`Asset、Price、Amount、Account`***

* 一次性读回多个账户信息
这样无论处理多少条记录，帐户名信息都在一次RPC调用内返回

# 需要使用的API & 要注意的地方

#### API信息
* ***`lookup_asset_symbols`***，读取资产信息
* ***`get_objects`***，读取Bit Asset信息
* ***`get_call_orders`***，获取抵押排行榜信息
* ***`get_accounts`***，读回所有账户信息

#### 要注意的地方
* bitasset id的获取
![](https://steemitimages.com/DQmWUVhHbCt42YFra1Ka5DLPM6rAPdkwv2ehCygLN35v797/image.png)

* settlement_price
![](https://steemitimages.com/DQmXKUXmuWbdUoz9W5SX95osU3HoXXZcLdYfR9c74fWJidj/image.png)

* call order 示例
![](https://steemitimages.com/DQmXNHKHwwiRpqy9DPXk4KXZVrT7F9Ro2Mw1us7JwP7C4Xr/image.png)


# 改进后代码执行时间比较

#### 读取排行榜20条记录
![](https://steemitimages.com/DQmait58rfHVAQb73ezyyXnkYtLTx5H8pGNY3nWoBcZk4Ub/image.png)
改进前的代码耗时在22秒以上

![](https://steemitimages.com/DQmd8b1Jicb8unPw4sfTfMSnHsgWPXJ24LgzH4mB2P5o58x/image.png)
改进后的代码耗时在1秒以内

#### 读取排行榜100条记录

限于篇幅，只截取部分内容

![](https://steemitimages.com/DQmV5uth5gsCkzBFWLPzAz54Dcd8SsQfdHhoLq6gAFoRdQg/image.png)
改进前的代码耗时在105秒以上

![](https://steemitimages.com/DQmUWPaafBF2s2gJfEQ9P49k1DmSsrFDa5Hyjg5D4RWmi7x/image.png)
改进后的代码耗时在3秒左右

可见，我们的代码***时间效率提升了30倍以上***

# 总结

在本文中，我们探索了用于生成抵押率排行榜的***`Asset类get_call_orders方法`***的底层实现机制，并分析了可能影响效率的几个问题。

最后，我们用python-bitshares的bitshares类以及底层RPC调用实现了一个改进版的bitCNY抵押率排行榜，通过对比执行时间，***新版的排行榜效率提升了30倍以上***。

# 参考文档
* [使用python-bitshares 生成bitCNY抵押排行榜](https://steemit.com/python-bitshares/@oflyhigh/68qb51-python-bitshares)
* [使用python-bitshares 生成bitCNY喂价列表](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares-bitcny)
* [Python PrettyTable 模块学习 (格式化打印内容)](https://steemit.com/python/@oflyhigh/python-prettytable)

- - -

This page is synchronized from the post: [bitCNY抵押率排行榜的底层实现探索 & 效率提升](https://steemit.com/@oflyhigh/bitcny-and)
