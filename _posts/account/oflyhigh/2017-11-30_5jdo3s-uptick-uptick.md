
---
title: '又一把瑞士军刀？ Uptick初体验（四）：uptick命令 / 查询市场行情、转账、交易、查询及取消订单'
permlink: 5jdo3s-uptick-uptick
catalog: true
toc_nav_num: true
toc: true
date: 2017-11-30 12:33:24
categories:
- uptick
tags:
- uptick
- bitshares
- tools
- market
- cn
thumbnail: https://steemitimages.com/DQmUCB2DUgV7LqiWzL3hYpMarCw1JtuaK5U7amHhtuLFxYx/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在之前的帖子中，我们介绍了操作bitshares的工具之一：uptick，并简要介绍了uptick的安装和使用。以及如何从bitshares的网页钱包中获取并导入私钥到uptick的钱包中去，并介绍了uptick的一些命令选项，以及如何设置默认值。

* [又一把瑞士军刀？ Uptick初体验（一）](https://steemit.com/uptick/@oflyhigh/uptick)
* [又一把瑞士军刀？ Uptick初体验（二）：导入私钥](https://steemit.com/uptick/@oflyhigh/32cec-uptick)
* [又一把瑞士军刀？ Uptick初体验（三）：uptick命令选项以及设置默认值](https://steemit.com/uptick/@oflyhigh/uptick-uptick)

![](https://steemitimages.com/DQmUCB2DUgV7LqiWzL3hYpMarCw1JtuaK5U7amHhtuLFxYx/image.png)
(图源 ：pixabay)

今天我们这篇文章来介绍一些几个uptick常用的命令

# 查询市场行情

在第一篇文章中，我们就曾经介绍过查询内部市场报价信息的指令
比如查询BTS的bitCNY报价：` uptick ticker CNY:BTS`

说实话，为了搞明白对应市场如何表示，我可以试了好久，最后才从代码中找到点眉目，在这之前，我试过CNY_BTS、CNY/BTS等等，都不好用。

![](https://steemitimages.com/DQmQUUzyqNceuHv1vGzFW7einAoS1WTBaUXCytsM4Xszh3J/image.png)

有了上述指令例子，我们就知道如何查询内部市场其它资产对的信息了，比如：

指令|用途
---|---
`uptick ticker OPEN.STEEM:CNY`|查询OPEN.STEEM的人民币报价
`uptick ticker OPEN.EOS:CNY` | 查询OPEN.STEEM的人民币报价
` uptick ticker BTS:USD`| 查询BTS的bitUSD报价
`uptick ticker OPEN.BTC:CNY`|查询OPEN.BTC的人民币报价

内部市场好多交易对，就不一一列出了，大家可以自己尝试。

查询功能只是uptick的基本功能之一，在文章[学习一下BTS的远程过程调用 / Learn the remote procedure call of BTS](https://steemit.com/bitshares/@oflyhigh/bts-learn-the-remote-procedure-call-of-bts)，我们曾介绍过使用RPC来查询bitshare的区块链信息。

我们可以用：
`curl -s --data '{"jsonrpc": "2.0", "method": "get_ticker", "params": ["CNY", "BTS"], "id": 1}' https://openledger.hk/ws`
来查询报价信息的
![](https://steemitimages.com/DQma3FuWacXWCyHuZPcQfYsuvARoRXF2RY233GDqZcCgSp4/image.png)
对比可知，uptick返回的信息更丰富以及便于阅读。

# 转账给他人

如果我们装了个uptick，仅仅用来查报价，那就是大材小用了。除了查询功能，我们还可以进行很多其它操作。

当然了，最简单且最常用的操作之一，莫过于转账功能了。

先来看一下转账功能的帮助信息:
 `uptick transfer --help`
![](https://steemitimages.com/DQmPPc8GTedJJkYKJnARiqwGxJZa83vnQ59noxfNKB5cw4a/image.png)

让我们来测试一下转账功能：
`uptick transfer --account xxx1 xxx2 1 BTS "Test transfer"`
![](https://steemitimages.com/DQmaFNM9CzbohnkYo1m7RuH8Mb8GW7mpJCDcnViMdij6kS2/image.png)

看一下转账日志，操作得很成功
![](https://steemitimages.com/DQmNtRrieQt1RfPVR52t4Bj3gkJirVQrnq4b3LSS6pjJhiY/image.png)

有了这个功能，我们就可以做个程序，批量给别人送钱了😭


# 市场交易  SELL / BUY

通过上边介绍，我们学会了如何给别人发钱😳，但是如果不赚钱总发钱，这样坐吃山空是不行的。bitshares 最强大的地方之一就是自带强大的交易市场，而uptick的强大功能之一就是可以在内部市场下单。

比如，我们尝试以1.2bitCNY/BTS的价格卖出1个BTS：
`uptick sell 1 BTS 1.2 CNY`

我们来看一下订单是否提交成功
![](https://steemitimages.com/DQmQFWq14F2V9WgxCwYPfD4rofubDYDgVuiMtJP121ssK1G/image.png)

![](https://steemitimages.com/DQmSCRFq3PGiAhuwdjjt3y1WRWn2GNSKGRBLMc5tJHYkpn7/image.png)
✌，成功了，是不是很强大？很方便。

BUY和SELL我的理解两者大同小异。
比如你卖出BTS换取CNY也可以理解成使用BTS买入CNY

比如我通过以下两条指令下一个买单一个卖单
`uptick sell 1 BTS 1 CNY`
`uptick buy 1 CNY 1 BTS`

![](https://steemitimages.com/DQmXWeC2RMfovfRhBZ5biup2yVNpYKQhC2VbEwCJAqQLyBr/image.png)
从内部市场，我看不出两者有何区别。

# 列出订单以及取消订单

我们学会了使用uptick在市场下单，如果操作得当，运气又不错，成为亿万富翁那是指日可待。

但是，有时候挂卖单挂高了卖不出去，或者挂买单挂低了买不进来，错过了行情，可就不好玩了。所以一点挂单不合理，我们要取消重挂。

取消订单，我们需要先知道订单ID，以下指令列出账户account_xxx的当前订单
`uptick openorders account_xxx`
![](https://steemitimages.com/DQmV288TvGaos4Khq9PcrYg5EygqamevbrvTUoq2RBVTmf9/image.png)
最后一列就是ID喽

我认为BTS还会涨，所以1元多一枚卖掉是极其不合理的，把订单统统取消
`uptick  cancel 1.7.40269955 1.7.40271728 1.7.40271936`
没错，输入你要取消的订单ID即可

我们再来看看，还有哪些订单
![](https://steemitimages.com/DQmdXrsPeXtgeZ7wSfpkMnKvD9uGP3F5wwkY9yknFCmMJ1S/image.png)
果然都取消了。

其实取消所有订单，还有一条指令： `uptick cancelall`

`uptick cancelall --account account_xxx BTS:CNY`
以上指令，取消account_xxx在BTS:CNY市场下的所有订单。

>bitsharesapi.exceptions.UnhandledRPCError: Assert Exception: operations.size() > 0: A transaction must have at least one operation

很遗憾我操作时候出了个异常，看提示应该是我在这个市场下已经没有订单可取消的，不过出异常可不优雅，看来还需要改进哦。

我重新下了一个单，再用上述指令，则一切正常。

# 总结

在这篇文章中，我们介绍了使用uptick的几个强大指令
* 查询市场报价信息
* 转账给其它用户
* 交易 （买/卖）
* 查询及取消订单

是不是很强大？有没有动心？快装一个试试吧。

# 更多信息

更多信息请参考：
https://github.com/xeroc/uptick
http://uptick.readthedocs.io/en/latest/index.html

- - -

This page is synchronized from the post: [又一把瑞士军刀？ Uptick初体验（四）：uptick命令 / 查询市场行情、转账、交易、查询及取消订单](https://steemit.com/@oflyhigh/5jdo3s-uptick-uptick)
