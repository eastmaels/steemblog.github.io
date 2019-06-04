
---
title: 'How to: 如何计算用户可用带宽 / How to calculate the user''s available bandwidth?'
permlink: how-to-how-to-calculate-the-user-s-available-bandwidth
catalog: true
toc_nav_num: true
toc: true
date: 2018-01-26 11:04:30
categories:
- steemdev
tags:
- steemdev
- cn-programming
- bandwidth
- programming
- cn
thumbnail: https://steemitimages.com/DQmbpDsDCdaFfpq8zELCHTvD1jzZmPiR4Lfqjso2s5zxpeU/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


继续昨天有意思的话题，在前文中，我们总算研究明白了[如何计算全网的总带宽/max_virtual_bandwidth](https://steemit.com/steemdev/@oflyhigh/how-to-maxvirtualbandwidth-how-to-calculate-the-maxvirtualbandwidth)，但是正如我在那篇文章开头介绍的，我的目的是为了计算用户可用带宽百分比。那么接下来我们就要研究一下如何计算可用带宽以及百分比。

![](https://steemitimages.com/DQmbpDsDCdaFfpq8zELCHTvD1jzZmPiR4Lfqjso2s5zxpeU/image.png)
(图源 ：[pixabay](https://pixabay.com))

# 用户分配带宽

前文中我们贴出了用户可用带宽的计算方式：
![](https://steemitimages.com/DQmSFxpTo4ZCFkxMcbnXFLSisLtB5C3tQm5fEyBbiEDBWiP/image.png)

变换后的公式为：
`用户分配带宽  = account_vshares / total_vshares* max_virtual_bandwidth`

这里边最麻烦的是`max_virtual_bandwidth`，我们已经在上文搞定了，所以计算用户分配到的带宽没有什么难度。

# 用户平均带宽

在[这篇文章中](https://steemit.com/cn/@oflyhigh/bandwidth-and)我们分析过平均带宽的概念

<blockquote>

你可能说了，我好多天没发帖，发了一个帖子占用 5K Bandwidth，别人每天发帖，每个帖子占用1K，那怎么衡量谁占的多啊，谁占的少啊？

很好的问题，STEEM为了防止这种情况，引入了***`平均带宽Average Bandwidth`***的概念。
Average Bandwidth 以***7天为时间窗***

计算的方式为：
`(7天 - 距离上次操作的时间)*之前的Average Bandwidth/7天 + 本次操作Bandwidth`
`(如果距离上次操作时间 > 7天，则新的Average Bandwidth 为 本次操作Bandwidth)`
</blockquote>

代码：
![](https://steemitimages.com/DQmVPYEMpJV1cuzTjphTgX6GQND2gibCtXnetincYaQqV9j/image.png)

所以为了计算用户的平均带宽，除了代码中那些常量，我们还需要知道`上次带宽更新的时间`以及`用户之前的平均带宽`

也就是类似如下信息：
`'average_bandwidth': '117344254786',`
`'last_bandwidth_update': '2018-01-25T10:35:06',`

这有点像voting power, 我们可以用`get_account()`读出`voting power`，但是这个值不是实时的，我们***需要用当前时间以及上次计算的时间去修正这个值。***

# 用户可用带宽

知道***用户分配的带宽***以及***用户平均带宽***之后，那么可用带宽就容易计算了
***`用户可用带宽 = 用户分配的带宽 - 用户平均带宽`***

带宽百分比计算也很容易啦：
***用户可用带宽 / 用户分配的带宽 * 100%***

# 带宽变换成字节数

上述计算可用带宽还是平均带宽都是一个很大的数值，你可能会好奇，这个值具体是啥意思呢？如果转换成字节应该会比较明了了。

这涉及到另外一个参数***`STEEMIT_BANDWIDTH_PRECISION`***，把我们得到数值除以这个精度就是字节数啦。

至此，我们可以拿到和带宽相关的所有数据啦。

测试一下，我的可用带宽充裕着呢
![](https://steemitimages.com/DQmVhs7gWaBZjCB1DNhjRGAnq1hgUGqLAM16xy1y9GEGwde/image.png)


# 总结

好像也没啥需要总结的，大概需要记住以下亮点吧

* 用户`average_bandwidth`需要用时间去修正
* 带宽除以***`STEEMIT_BANDWIDTH_PRECISION`***可以得到带宽的字节数表示

另外，有人问我： ***可用带宽如何才能充裕？答案就是充值STEEM POWER.***


# 相关链接

* https://github.com/steemit/steem/blob/master/libraries/plugins/witness/witness_plugin.cpp
* [How to:  如何计算 max_virtual_bandwidth / How to calculate the max_virtual_bandwidth?](https://steemit.com/steemdev/@oflyhigh/how-to-maxvirtualbandwidth-how-to-calculate-the-maxvirtualbandwidth)
* [Always keep enough STEEM POWER / 账户内记得保留足够的SP](https://steemit.com/steem/@oflyhigh/always-keep-enough-steem-power-sp)
* [从代码看 Bandwidth 超限问题 & 如何避免和解决](https://steemit.com/cn/@oflyhigh/bandwidth-and)

- - -

This page is synchronized from the post: [How to: 如何计算用户可用带宽 / How to calculate the user''s available bandwidth?](https://steemit.com/@oflyhigh/how-to-how-to-calculate-the-user-s-available-bandwidth)
