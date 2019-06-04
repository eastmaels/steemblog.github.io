
---
title: 'python-bitshares 边学边记 (三) / BitShares类'
permlink: python-bitshares-bitshares
catalog: true
toc_nav_num: true
toc: true
date: 2017-12-10 12:56:42
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


在之前的两篇文章中，我们简单介绍了如何安装python-bitshares 以及python-bitshares的钱包相关操作。

* [python-bitshares 边学边记 (一) : 简介与安装](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares)
* [python-bitshares 边学边记 (二) : 钱包操作](https://steemit.com/python-bitshares/@oflyhigh/3ab1oc-python-bitshares)

![](https://steemitimages.com/DQmab7QPFcG6Q4U9Z1FMThkdVcDneSY5xR2bPxVWryEZfeX/image.png)
(图源 ：pixabay)

这节我们来继续学习python-bitshares 。

# BitShares类

BitShares类是python-bitshares中最常被使用到的类。

我们可以用下列代码创建一个BitShares类实例
`from bitshares import BitShares`
`bitshares = BitShares()`

之后就可以用它来访问和操作bitshares区块链了，比如我们在第一篇文章中介绍的`bitshares.info())`。

下面我们来介绍BitShares类几项常用功能。

# 投票功能
之前在我们uptick系列学习文章中，我们介绍过使用uptick进行投票，比如投见证人票给 @abit 
`uptick approvewitness in.abit`

那么直接使用python-bitshares又该如何处理呢？
只需以下代码就可以投票了，（记得将xxxx换成你的ID）
`from bitshares import BitShares`
`bitshares = BitShares()`
`bitshares.approvewitness(["in.abit"], "xxxx")`

如果要取消见证人票，则使用： `disapprovewitness`

除此之外，还有以下投票/取消投票功能
* `approvecommittee / disapprovecommittee`
* `approveworker / disapproveworker`
* `approveproposal / disapproveproposal`

需要注意一点是，尽管几个投票操作看起来很相似，但是***`approveproposal / disapproveproposal`***使用的是***`Proposal_update`*** operation，而另外几项投票功能则使用的是***`Account_update`***operation。

比如我们上边的投见证人票，在区块链浏览器中的信息如下：
![](https://steemitimages.com/DQmc33nxFEHrf48jnK9JvSk22qHEzNrfjgfw5RFWZNdBqLQ/image.png)

# 转账功能

转账是我们的常用功能之一。
使用代码转账也很简单，方法定义如下：
`def transfer(self, to, amount, asset, memo="", account=None):`

转账示例代码如下：
`from bitshares import BitShares`
`bitshares = BitShares()`
`bitshares.transfer("xxx1", 1, "CNY", "Test transfer!", "xxx2")`
![](https://steemitimages.com/DQmeeRV3PDECtiD5tZV6YpP2CEWgQZo9Gxt5ye2YCAhUNda/image.png)

# BitShares类参数

以上示例，我们都是用默认设置创建类实例。
除此之外，我们也可以指定一些参数，来对类实例进行一些定制。

比如指定以下参数：
* 指定`nobroadcast=True`，不广播交易信息
* 指定`unsigned=True`，不签名交易信息
* 指定`expiration=600`，指定交易超时时间
* 指定`node=wss://ws.gdex.top`，指定API节点
更多参数请参考BitShares类代码。

# 参数***`blocking`*** 

在测试过程中，遇到一个很奇怪的问题，我通过参数`node="wss://openledger.hk/ws"`指定使用 `wss://openledger.hk/ws`这个节点，然后上述示例代码都***执行成功(没有任何出错信息的完成)***，但是我使用区块链浏览器查看账户，发现没有产生任何新操作(更新账户/转账)。

后来我使用默认节点，或者使用节点`wss://ws.gdex.top`，则一切正常。
我猜测，可能是交易超时，或者其它原因，但是出错都给个提示会更好一些。

后来我发现一个***`blocking`***参数，介绍如下：
>param str blocking: Wait for broadcasted transactions to be included in a block and return full transaction (can be "head" or "irrversible")

`from bitshares import BitShares`
`bitshares = BitShares(node="wss://openledger.hk/ws", blocking=True)`
`bitshares.approvewitness(["in.abit"], "xxxx")`
于是我写了如上投票代码，并执行

![](https://steemitimages.com/DQmWrPUFTvryxrRHmgh9sJzeJq5VdJfzPBs7AWmRy4pV3GG/image.png)
等了好久等来了出错信息。
>Exception: The operation has not been added after 10 blocks!

看了一下代码，原来就是在广播交易之后，再遍历新块，看看对应交易是否在新块中。如果10个块还没找到对应交易，则返回出错信息。

# 总结

BitShares类是python-bitshares中最常用的类之一。本文介绍了以下内容：
* BitShares类的创建
* 投票功能
* 转账功能
* BitShares类参数
* 参数blocking

更多信息请参考BitShares类代码。

# 参考信息

* https://github.com/xeroc/python-bitshares
* [python-bitshares 边学边记 (一) : 简介与安装](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares)
* [python-bitshares 边学边记 (二) : 钱包操作](https://steemit.com/python-bitshares/@oflyhigh/3ab1oc-python-bitshares)

- - -

This page is synchronized from the post: [python-bitshares 边学边记 (三) / BitShares类](https://steemit.com/@oflyhigh/python-bitshares-bitshares)
