
---
title: 'STEEM Transaction 签名学习笔记 （二）/ 投票操作的流程'
permlink: steem-transaction
catalog: true
toc_nav_num: true
toc: true
date: 2017-11-17 10:15:15
categories:
- steemdev
tags:
- steemdev
- steem
- signature
- cn
- cn-programming
thumbnail: https://steemitimages.com/DQmVjh8Dc3HmTcH94PFAuioFGKkHjq7zxFBdkyZSxusXbaL/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


昨天写完[STEEM 签名学习笔记 （一）/ 读操作与写操作](https://steemit.com/steemdev/@oflyhigh/3ppeth-steem)以后，发现完全不知道如何进行下去。我觉得我自己给自己挖了个坑，然后掉进坑里，出不来了。

貌似我需要先从坑里爬上来，然后找一部梯子，然后把梯子竖到坑里，然后我再从梯子爬上来，感觉逻辑有点混乱呢？哪里不对呢？

![](https://steemitimages.com/DQmVjh8Dc3HmTcH94PFAuioFGKkHjq7zxFBdkyZSxusXbaL/image.png)

-----

# 投票操作的流程(wallet)

以投票操作为例，来学习。

看了一下wallet的实现：
![](https://steemitimages.com/DQmSz8GEh5Sk1XAem5jRjW91FuQNPfrjzM5GF2TPuYjt57X/image.png)

貌似怎么看，怎么简单，大致流程如下：

* 声明`vote_operation`结构体实例
* 给结构体实例赋初值
* 声明`signed_transaction`结构体实例
* 将`vote_operation`实例添加到`signed_transaction`实例中
* 将`signed_transaction`实例广播出去

# 投票操作的流程实例

对应到我们前一篇文章中，来看看每个结构体都长啥样？
```
['vote',
	 {'author': 'oflyhigh.test',
	  'permlink': '6r3tt4-test',
	  'voter': 'oflyhigh',
	  'weight': 2000}]
```
填充完***`vote_operation`*** 应该是这个样子。

```
{'expiration': '',
 'extensions': [],
 'operations': [],
 'ref_block_num': 0,
 'ref_block_prefix': 0,
 'signatures': []}
```
一个空的`transaction`应该长成这样，`signed_transaction`由`transaction`继承而来。

而`signed_transaction`负责把这些内容填完整。
填完整以后是这个样子：
![](https://steemitimages.com/DQmawUBGAnYtFx86pT4Ji4WNiaET3AdhoHsLdXeiai2SYmf/image.png)

将填完整后的`transaction`广播出去的操作我们上节已经演示了***如何用curl进行操作***，这节就不再赘述了。

# `signed_transaction`做了啥

如果按照我们上述分析，貌似将操作打包并完成签名也没啥难度啊，然而事实是难点都在***signed_transaction***这完成的。那么它做了啥呢？

因为，投票操作没有`extensions`，所以我们暂时不予考虑。

将`operation`添加到`transaction`中也没啥难度。那么去除这些以外，它实际做了三件事：

* 设置超时时间：`expiration`
![](https://steemitimages.com/DQmbHWzWvDHAWnJCydiUmSeSVKfw7my7qoRJ3KuNMC3j23e/image.png)
* 设置`ref_block_num` 和 `ref_block_prefix`
![](https://steemitimages.com/DQmPPmW8hQv3ThCzf8nJBdavZgCLQxiGb8tDVYAaF3ZipdZ/image.png)
* 对`transaction`进行签名: 添加`signatures`部分
![](https://steemitimages.com/DQmUdja61qYzU8Tqr4VSk93DBDCS8s12Xs3EQBEvD1grJWw/image.png)

好吧，这三个操作我还没搞明白呢，等我明天学习明白一点点再继续毁人不倦。

(封面图源 ：[pixabay](https://pixabay.com))

- - -

This page is synchronized from the post: [STEEM Transaction 签名学习笔记 （二）/ 投票操作的流程](https://steemit.com/@oflyhigh/steem-transaction)
