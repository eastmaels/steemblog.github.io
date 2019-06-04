
---
title: '又一把瑞士军刀？ Uptick初体验（五）：uptick高级功能的尝试  (完)'
permlink: 2ppgyw-uptick-uptick
catalog: true
toc_nav_num: true
toc: true
date: 2017-12-04 12:18:18
categories:
- uptick
tags:
- uptick
- bitshares
- tools
- python
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


在之前的系列帖子中，我们介绍了操作bitshares的工具之一：uptick，并简要介绍了uptick的安装和使用、导入私钥、命令选项及设置默认值、以及一些常用命令( 查询市场行情、转账、交易、查询及取消订单)

* [又一把瑞士军刀？ Uptick初体验（一）](https://steemit.com/uptick/@oflyhigh/uptick)
* [又一把瑞士军刀？ Uptick初体验（二）：导入私钥](https://steemit.com/uptick/@oflyhigh/32cec-uptick)
* [又一把瑞士军刀？ Uptick初体验（三）：uptick命令选项以及设置默认值](https://steemit.com/uptick/@oflyhigh/uptick-uptick)
* [又一把瑞士军刀？ Uptick初体验（四）：uptick命令 / 查询市场行情、转账、交易、查询及取消订单](https://steemit.com/uptick/@oflyhigh/5jdo3s-uptick-uptick)

![](https://steemitimages.com/DQmUCB2DUgV7LqiWzL3hYpMarCw1JtuaK5U7amHhtuLFxYx/image.png)
(图源 ：pixabay)

今天我对一些高级功能进行了尝试。

---

# 投票功能

和steem上给帖子投票，给见证人投票类似，bitshares中也可以进行投票

命令| 功能| 翻译
---|---|---
approvecommittee|Approve committee member(s)|批准理事会成员
approveproposal|Approve a proposal|批准提案
approvewitness|Approve witness(es)|批准见证人
approveworker|Approve worker(es)|批准预算项目

比如我们要在bitshares中支持 in.abit 做为见证人，我们可以使用如下指令进行投票：
`uptick approvewitness in.abit`

检查一下发现投票成功了
![](https://steemitimages.com/DQmU4KjmiTskizqoBzJxzbF42L1KxtUHbyBQFG25FdDmzdW/image.png)


# 借钱(抵押)功能

在之前的文章中，我们曾经介绍过抵押BTS，借出BITCNY的操作。uptick做为强大的bitshares工具，必须支持借款啊。

以下是一个借款的例子：
` uptick borrow --ratio 4 1 CNY`

需要注意一点是，之前我们说过：***保证金比例 = 抵押的BTS * 喂价 / 借款金额***
但是uptick可能有一点点BUG，它的ration直接处理成抵押的BTS/借款金额了

![](https://steemitimages.com/DQmXVwZ9tNqsQQzbEt1PpaAhmaQ5TpWWoSrSd5BoSBKHHi2/image.png)
所以上述指令，我们用4个BTS抵押，借到了1个BITCNY

其实这样更直观，但是我们***需要清楚两者计算方式的区别***，以免闹乌龙。

# 多重签名

对我而言，我觉得STEEM以及bitshares上最有魅力的功能莫过于多重签名了。

uptick实现多重签名很简单。

首先介绍一下查询权限的指令：
`uptick permissions account`
(account换成你要查询的账户）
![](https://steemitimages.com/DQmedbvNhGd6FGHAe4MvBaYL6qac4QPUa7R7TYqy71X7HGa/image.png)

#### 允许权限

```
Usage: uptick allow [OPTIONS] [FOREIGN_ACCOUNT]

  Add a key/account to an account's permission

Options:
  --account TEXT       Account to be modified
  --permission TEXT    Permission/Role to be modified
  --threshold INTEGER  Threshold for the Role
  --weight INTEGER     Weight of the new key/account
  --help               Show this message and exit.
```

#### 移除权限

```
Usage: uptick disallow [OPTIONS] FOREIGN_ACCOUNT

  Remove a key/account from an account's permission

Options:
  --account TEXT       Account to be modified
  --permission TEXT    Permission/Role to be modified
  --threshold INTEGER  Threshold for the Role
  --help               Show this message and exit.
```

但是需要说明的是，这两个操作你一定要慎重，除非你完全理解你所做的操作以及可能带来的影响，否则请不要尝试。


# 离线操作

有了多重签名，就可能需要离线签名交易。类似我们在[使用steempy生成交易(transaction)、签名交易以及广播交易](https://steemit.com/cn/@oflyhigh/steempy-transaction) 这个帖子中提到的操作。


我们可以用如下指令生成交易(transaction)数据
`uptick -d -x transfer oflyhigh 1 BTS >t1.txt`

原则上，我们可以使用如下指令对上述数据进行签名
`uptick sign t1.txt`
但是在我这里发生了异常

>    fees = ws.get_required_fees([i.json() for i in ops], asset_id)
AttributeError: 'NoneType' object has no attribute 'get_required_fees'

好悲催的事情
为了继续实验，我想尝试直接用python-bitshares代码对数据签名

待签名数据如下：
![](https://steemitimages.com/DQmVnKEtcUJNjN1GBtt3KBEw3wYPNWWfhQuvyFzGfyVF2RG/image.png)

签名后数据如下：
![](https://steemitimages.com/DQmZsPTY2VjHANpYHz9XQEm4U2Um5ShVSHNFfKFdBM9DehB/image.png)
晕，`operations`部分数据竟然是空的，尝试已失败告终。一定是我操作姿势不对。

所以最后一条广播指令，我们不用试也知道一定会失败。
`uptick broadcast s1.txt`

# 总结

在这篇文章中，我们尝试了一些uptick的高级功能。
* 投票功能
* 借钱(抵押)功能
* 多重签名
* 离线操作

在进行最后一项操作时，我们没能成功。可能是uptick有BUG，也可能是我操作的姿势不对。不管如何，不可否认的是：***uptick是一个操作bitshares强大的工具***。使用它我们可以完成大部分bitshares相关的操作。但是想更好的使用uptick或者对bitshares进行更复杂的操作，则需要对其底层机制有一些了解。

至此，uptick系列的文章都写完了，如果能给大家带来哪怕一点点启发，就足矣了。


# 更多信息

更多信息请参考：
https://github.com/xeroc/uptick
http://uptick.readthedocs.io/en/latest/index.html

- - -

This page is synchronized from the post: [又一把瑞士军刀？ Uptick初体验（五）：uptick高级功能的尝试  (完)](https://steemit.com/@oflyhigh/2ppgyw-uptick-uptick)
