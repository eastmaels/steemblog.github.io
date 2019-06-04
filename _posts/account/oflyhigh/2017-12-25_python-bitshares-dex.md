
---
title: 'python-bitshares 边学边记 (六) / Dex类'
permlink: python-bitshares-dex
catalog: true
toc_nav_num: true
toc: true
date: 2017-12-25 12:50:12
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


在之前的几篇文章中，我们简单介绍了如何安装python-bitshares 、python-bitshares的钱包相关操作、BitShares类以及Account类、Market类。

详情可以参考文末的参考链接。
![](https://steemitimages.com/DQmab7QPFcG6Q4U9Z1FMThkdVcDneSY5xR2bPxVWryEZfeX/image.png)
(图源 ：pixabay)

这节我们来继续学习python-bitshares 。

---
# Dex 类查询功能

#### 创建实例

我们可以使用以下代码创建Dex实例
`from bitshares.dex import Dex`
`dex = Dex()`


#### 手续费

以下代码可以用与显示bitshares区块链上各类操作的手续费
 `from pprint import pprint`
`from bitshares.dex import Dex`
`dex = Dex()`
`pprint(dex.returnFees())`

返回的数据比较多，就不一一贴出来了。
如果是经常交易，我们可能会比较关注以下几项费用：
![](https://steemitimages.com/DQmcJ4jULMAbQ73ERVuAs1dJzrq4KzBxiCDYZpFQ6DUzyXk/image.png)
从上图可知，创建订单和取消订单都非常便宜，而撮合订单完全免费。
由此可见bitshares真的是良心交易所

#### 抵押债仓

在学习Account类时，我们知道可以用如下代码查看指定用户的抵押债仓
`account = Account("xxxxx")`
`pprint(account.callpositions)`

其实，account.callpositions的实现如下：
![](https://steemitimages.com/DQmYJK8FANrM9t7RhBTAVphwPPNUijHsyPpuqeZntmFASox/image.png)
调用的是Dex类的方法

当然，我们可以直接使用Dex类
 `from pprint import pprint`
`from bitshares.dex import Dex`
`dex = Dex()`
`pprint(dex.list_debt_positions("aaa"))`
![](https://steemitimages.com/DQmQK13Hvs4yxxafW8NyuiLjPxoR3bpsYHyEsrz6ihuVXMv/image.png)
结果如上，和调用Account类callpositions属性，完全一致。

#  Dex 类借钱 & 平仓等

####  抵押(借入)

我们可以使用如下代码借入CNY或者其它智能货币资产
`from bitshares.dex import Dex`
`from bitshares.amount import Amount`
`dex = Dex()`
`dex.borrow(amount = Amount(1, 'CNY'), collateral_ratio=2, account='test2018')`
![](https://steemitimages.com/DQmd6cwZi5AwkcqSmU59EpHpqCH8xAhUhmrRuW2sn1rMir6/image.png)

但是显而易见抵押率计算得不对
![](https://steemitimages.com/DQmVMPrF57tqEEUgQWLC6qmdR5SJ9euS2Vuz1hSaNxH3qfY/image.png)
***注：可能与账户是否借过钱等条件有关，具体原因需要阅读代码***

在测试过程中，曾出现过如下错误：
>bitsharesapi.exceptions.UnhandledRPCError: Assert Exception: enable_black_swan: Black swan was detected during a margin update which is not allowed to trigger a blackswan

***注：我尝试用网页借款后，这个错误无法重现，可能和新账户有关，需要核实一下***


#### 平仓(还钱)

我们可以使用如下代码平掉CNY的抵押债仓
`from bitshares.dex import Dex`
`from bitshares.amount import Amount`
`dex = Dex()`
`dex.close_debt_position(symbol='CNY', account='test2018')`
![](https://steemitimages.com/DQmQyjjc9atGWw9R9M52qGWhZZ3kbVy3SKPTAa6vQFEpByo/image.png)

![](https://steemitimages.com/DQmcopa6M8Hi6VhDix7LWEjDfwTRkoQYmbFBcyjpMfMwkkJ/image.png)
可见我借入和平仓操作都很成功

#### 其它操作

除了借入和平仓以外，我们还可以通过Dex类调整债仓或者调整抵押率
`def adjust_debt(self, delta, new_collateral_ratio=None, account=None)`
`def adjust_collateral_ratio(self, symbol, target_collateral_ratio, account=None)`
写的多了有点晕，怕写错了误导大家，就不多说了，需要的自己去看代码。

# 总结

Dex类主要提供了手续费、抵押债仓查询以及借钱、平仓、调整仓位、调整抵押率等操作。

但是在抵押率计算上似乎有一些问题，所以如果你需要在你的应用中使用Dex类，你应该先测试并核实是否存在问题后再将其应用到代码中。

***文中信息仅供参考，始终文中代码造成损失概不负责！***


# 参考信息

* [https://github.com/xeroc/python-bitshares](https://github.com/xeroc/python-bitshares)
* [python-bitshares 边学边记 (一) : 简介与安装](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares)
* [python-bitshares 边学边记 (二) : 钱包操作](https://steemit.com/python-bitshares/@oflyhigh/3ab1oc-python-bitshares)
* [python-bitshares 边学边记 (三) / BitShares类](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares-bitshares)
* [python-bitshares 边学边记 (四) / Account类](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares-account)
* [python-bitshares 边学边记 (五) / Market类](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares-market)

- - -

This page is synchronized from the post: [python-bitshares 边学边记 (六) / Dex类](https://steemit.com/@oflyhigh/python-bitshares-dex)
