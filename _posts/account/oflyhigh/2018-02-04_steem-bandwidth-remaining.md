
---
title: '微信公众号支持查询STEEM用户Bandwidth remaining百分比啦'
permlink: steem-bandwidth-remaining
catalog: true
toc_nav_num: true
toc: true
date: 2018-02-04 01:30:24
categories:
- wechat
tags:
- wechat
- cn
- cn-programming
- bandwidth
- tool
thumbnail: https://steemitimages.com/DQmTLTN4eVzfbLVfTzSJdPLLsYCy3wgp4KRpr52f5jtVRG2/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmTLTN4eVzfbLVfTzSJdPLLsYCy3wgp4KRpr52f5jtVRG2/image.png)

之前特意研究了一下[如何计算STEEM系统总带宽](https://steemit.com/steemdev/@oflyhigh/how-to-maxvirtualbandwidth-how-to-calculate-the-maxvirtualbandwidth)以及[如何计算用户可用带宽](https://steemit.com/steemdev/@oflyhigh/how-to-how-to-calculate-the-user-s-available-bandwidth)，尽管这玩意搞得真的很复杂，但是令人庆幸的是，最终我终于可以计算出以下内容：
* `max_virtual_bandwidth`: 系统的总带宽
* `bandwidth_allowance`: 用户分配到的带宽
* `avg_bandwidth`: 用户使用掉的带宽

其中`avg_bandwidth`在很多场合被称作***`用户平均带宽`***，但是需要澄清的是，这并不是系统参数，而是用户的参数，其中平均代表的是用户7日带宽使用均值，具体含义和计算方法可以参见文末相关文章。

你可能会问，费那么大劲，计算这个东西有意义吗？毕竟不能每个用户都安装Python环境，再装个steem-python库，再写一堆代码去算这个东西。没错，所以耗费了一点时间将之前写的Python代码用PHP重新实现了一下，然后集成到微信公众号中。

# 如何使用


秉承我们一贯的简单原则，可用带宽百分比直接在账户信息中显示。

例如：***`@oflyhigh`***
![](https://steemitimages.com/DQmRKDtrDzq2bqpYUJHCvGbvPHaYC5SVLjJsD14hpbXiCi1/image.png)

额，我这个还有100%的额度可用，拿来做例子不太适合。

# 关于Bandwidth

#### 作用

很多朋友问我，这个有啥用。

简单来讲，你在STEEM区块链上的一切操作都耗费 Bandwidth，比如***`发帖、回复、点赞、转账、Power  UP`***等等。***`内部市场交易`***也消耗Bandwidth，但是和发帖使用的Bandwidth是分开计算的。

一旦你的带宽剩0%，那么就无法做任何操作了。

#### 影响因素

除了受整个系统的一些参数和运行状态影响外，对于个体而言，影响最大的无外乎以下几点：

* 你的***有效SP***
* 你的操作频度以及每次操作产生的数据量

***`有效SP = 你的SP + 别人代理给你的SP - 你代理给别人的SP`***

另外，操作越频繁，每次数据量越大，耗费的带宽越多。（比如文章中插很多没用的尾巴等）

# 公众号添加方法

* 方式一：
进入微信通讯录->点击公众号->点右上角加号->搜索steemit，关注即可。

* 方式二：
直接扫描以下二维码：
![](https://steemitimages.com/DQmNxMW2tParyESCyp1s6fm5SjPmNSibkct4wcdaQcTA5BD/image.png)
欢迎大家多提宝贵意见啊。


# 相关链接

* [How to: 如何计算 max_virtual_bandwidth / How to calculate the max_virtual_bandwidth?](https://steemit.com/steemdev/@oflyhigh/how-to-maxvirtualbandwidth-how-to-calculate-the-maxvirtualbandwidth)
* [How to: 如何计算用户可用带宽 / How to calculate the user's available bandwidth?](https://steemit.com/steemdev/@oflyhigh/how-to-how-to-calculate-the-user-s-available-bandwidth)
* [从代码看 Bandwidth 超限问题 & 如何避免和解决](https://steemit.com/cn/@oflyhigh/bandwidth-and)
* [Always keep enough STEEM POWER / 账户内记得保留足够的SP](https://steemit.com/steem/@oflyhigh/always-keep-enough-steem-power-sp)

封面图源：[pixabay](https://pixabay.com)

- - -

This page is synchronized from the post: [微信公众号支持查询STEEM用户Bandwidth remaining百分比啦](https://steemit.com/@oflyhigh/steem-bandwidth-remaining)
