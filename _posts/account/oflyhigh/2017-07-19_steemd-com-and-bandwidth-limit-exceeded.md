
---
title: 'Steemd.com 改版了 & 被 Bandwidth Limit Exceeded 折磨的朋友有福了'
permlink: steemd-com-and-bandwidth-limit-exceeded
catalog: true
toc_nav_num: true
toc: true
date: 2017-07-19 00:49:51
categories:
- cn
tags:
- cn
- cn-programming
- steemit
- steemd
- github
thumbnail: https://steemitimages.com/DQmf2RN8gtwUipRxvXXJYJg3LBAs6uyZZb4punZPeLEQS8x/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


# Steemd.com 改版了

昨天看有朋友讨论 Bandwidth Limit Exceeded 的问题，特意研究了一下代码，并写了一篇文章:
*  [从代码看 Bandwidth 超限问题 & 如何避免和解决](https://steemit.com/cn/@oflyhigh/bandwidth-and)

昨天晚上浏览steemd.com的时候，突然发现steemd正在改版
一个显著的改变就是在显著位置，显示用户
* Voting Weight
* Voting Power
* Bandwidth Remaining

![](https://steemitimages.com/DQmf2RN8gtwUipRxvXXJYJg3LBAs6uyZZb4punZPeLEQS8x/image.png)

* Voting Weight: 相当于你所拥有的有效Steem Power(你自己有的 + 别人代理给你的 - 你代理给别人的）
* Voting Power: 我翻译为点赞能量，详情可以参考我以前的帖子： [[Chinese Version] 关于Voting Power 的一点说明，以及对投票的影响等](https://steemit.com/cn/@oflyhigh/chinese-version-voting-power)
* Bandwidth Remaining:  (分配的带宽 - 已用的带宽)/分配的带宽

#### Effective sp

![](https://steemitimages.com/DQmNVnrQ3SvPxCF2LhkB1rv8qbZGddYvNhVWoXRMjD16aD8/image.png)
有效Steem Power(你自己有的 + 别人代理给你的 - 你代理给别人的）

#### Bandwidth
![](https://steemitimages.com/DQmTkbwAs5ctxrriVRu27oSbWeSNJkztfgbFdastYcQMarf/image.png)
分别是剩余带宽占比、剩余带宽、已用的带宽、 分配的带宽 

有了这些信息，你就会更好的了解账户投票能量以及带宽使用情况，如果剩余带宽占比偏低，就按我之前文章中说到的方法处理吧。

steemdb.com 的改版还在进行中，会有哪些其它惊喜，让我们拭目以待吧。

# 带宽保留率算法的调整 & BUG修复

昨天浏览github时发现这样一条内容，还是高优先级的哦
![](https://steemitimages.com/DQmah7TWbMMqEDumArLTqhXggtSSvsAwpQveBp4CyAe4Fzx/image.png)

https://github.com/steemit/steem/issues/1257

昨天帖子中我们也说到过 `max_virtual_bandwidth`
因为我们是从用户视角分析问题，所以没详细解释这个东西

其实，它也是算出来的
`dgp.max_virtual_bandwidth = (dgp.maximum_block_size * dgp.current_reserve_ratio *
STEEMIT_BANDWIDTH_PRECISION * STEEMIT_BANDWIDTH_AVERAGE_WINDOW_SECONDS) / STEEMIT_BLOCK_INTERVAL;`

而github说的啥事呢？
一个是改进`Reserve Ratio Algorithm`
还有就是BUG修复

>STEEMIT_MAX_BLOCK_SIZE * STEEMIT_MAX_RESERVE_RATIO * STEEMIT_BANDWIDTH_PRECISION * STEEMIT_BANDWIDTH_AVERAGE_WINDOW_SECONDS overflows 64-bits. We need to make the max_virtual_bandwidth calculations 128-bit.

哦买嘎
溢出是啥概念？举个栗子
你有一个杯子，有一瓶水，如果杯子比瓶子容量大，那么往里倒水没问题
如果杯子比瓶子容量小，假设一瓶水等于一杯半水，那么用瓶子往杯子里倒水，水就会溢出，最好你只剩一杯水。

计算机中也是这样？NO，NO, NO.
程序中溢出，就会截短，一杯半水，最后就剩半杯水
莫非（包括一些并非新号的用户）最近频繁发生带宽超限问题，就是这个引起的？

总之，***不管算法改进还是BUG修复，就是为了解决带宽超限问题的！***

# 结论

无论是steemd.com的改版，还是github上的代码改进以及BUG修复，都可以看出来STEEMIT公司在踏实做事。 STEEMIT公有心了，给你10086个👍


人家平台给搭建好了，同志们努力贡献优质内容吧。

-----

感谢阅读 / Thank you for reading.
欢迎upvote、resteem以及 following me @oflyhigh 😎

- - -

This page is synchronized from the post: [Steemd.com 改版了 & 被 Bandwidth Limit Exceeded 折磨的朋友有福了](https://steemit.com/@oflyhigh/steemd-com-and-bandwidth-limit-exceeded)
