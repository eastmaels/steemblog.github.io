
---
title: 'How to:  如何计算 max_virtual_bandwidth / How to calculate the max_virtual_bandwidth?'
permlink: how-to-maxvirtualbandwidth-how-to-calculate-the-maxvirtualbandwidth
catalog: true
toc_nav_num: true
toc: true
date: 2018-01-25 13:07:18
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


今天遇到一个有意思的问题。我计划查询账户的可用带宽(bandwidth)，原本以为和读账户其它信息如reputation、vesting_shares等一样可以直接读取到，但是调用***`get_account()`***后，却没法找到可用带宽信息。

![](https://steemitimages.com/DQmbpDsDCdaFfpq8zELCHTvD1jzZmPiR4Lfqjso2s5zxpeU/image.png)
(图源 ：[pixabay](https://pixabay.com))

# 直接获取失败

只有类似如下信息：
` 'average_bandwidth': '117344254786',`
` 'average_market_bandwidth': 3461867185,`
` 'last_bandwidth_update': '2018-01-25T10:35:06',`
` 'last_market_bandwidth_update': '2018-01-23T13:06:24',`
` 'lifetime_bandwidth': '8459927000000',`
` 'lifetime_market_bandwidth': '653650000000',`

我期望直接拿到类似下边的百分比：
![](https://steemitimages.com/DQmYA8t7HD6Ajs9CBGfn2E3v95Lj2JKGAL4WvENUwkQh6Ug/image.png)

或者找到类似如下信息也可以：
![](https://steemitimages.com/DQmVieaq1Su5RbCDRC11tHjmxs5ehWgb7RqpurGC4dfbF6t/image.png)

可惜都没法拿到，也就是说我们没法直接拿到用户的带宽信息。

# 用户可用带宽公式

既然没法直接通过***`get_account ()`***拿到，那么只好看看有没有什么方式计算出来。用户是否有可用带宽的计算方式为：
![](https://steemitimages.com/DQmSFxpTo4ZCFkxMcbnXFLSisLtB5C3tQm5fEyBbiEDBWiP/image.png)

***`has_bandwidth = ( account_vshares * max_virtual_bandwidth ) > ( account_average_bandwidth * total_vshares );`***

由上述公式变换个方式： 
***用户可用带宽为： `account_vshares / total_vshares* max_virtual_bandwidth`***
可以理解为，***你的有效SP占总SP多大比例，那么你就可以使用带宽池中多大比例的带宽***


好，我们以前做程序的时候知道***`account_vshares `***、***`total_vshares`***是可以分别通过***`get_account() `***以及***`get_dynamic_global_properties()`***获取的，如果***`max_virtual_bandwidth`*** 也可以通过***`get_dynamic_global_properties()`***获取，那就简单了。

结果瞪大眼睛找半天发现根本没有***`max_virtual_bandwidth`***，看来只好计算了。


# 计算***`max_virtual_bandwidth`***

去代码里找了半天，总算找到计算***`max_virtual_bandwidth`***的代码：
![](https://steemitimages.com/DQmbkP6xofc9PSKb2keXoWZMR5DZxEkQm63qamYdLUYtGXm/image.png)

其中，***`max_block_size`***以及***`current_reserve_ratio`***可以通过***`get_dynamic_global_properties()`***获取。

剩下的一堆看起来是常量，应该可以用***`get_config()`***获取。

结果程序一运行，出错啦，提示`RESERVE_RATIO_PRECISION`不存在，去代码中找了一下
![](https://steemitimages.com/DQmSKo6cVXiQ5qCyxth4tq4M2eYBHGt2zGyxM9i4oHSVeDm/image.png)
原来是在代码中直接定义的，这不科学，不过直接拿来用吧。

算出来的总带宽为：***`17103052162990080000`***
而steemd上读到的带宽为：
![](https://steemitimages.com/DQmY3nawBq5LhhsRwWkVzhNNHPFxCKEm2J66Wbu1nHLZ3Zf/image.png)

你问我为啥不一样？当然是总带宽一直在变喽，除非我能保证程序获取带宽和刷新网页完全同时操作。

# 总结

* 用户可用带宽无法通过***`get_account()`***直接获取
* 用户可用带宽计算公式： ***`account_vshares / total_vshares * max_virtual_bandwidth`***
* ***`max_virtual_bandwidth`*** 无法直接用***`get_dynamic_global_properties()`***获取
* ***`max_virtual_bandwidth`*** 计算公式见正文部分
* ***`RESERVE_RATIO_PRECISION`***  代码中硬编码为： `((int64_t)10000)`
* 计算总可用带宽需要用到如下API
  * ***`get_dynamic_global_properties()`***
  * ***`get_config()`***


# 相关链接
* https://github.com/steemit/steem/blob/master/libraries/plugins/witness/witness_plugin.cpp
* [Always keep enough STEEM POWER / 账户内记得保留足够的SP](https://steemit.com/steem/@oflyhigh/always-keep-enough-steem-power-sp)
* [从代码看 Bandwidth 超限问题 & 如何避免和解决](https://steemit.com/cn/@oflyhigh/bandwidth-and)

- - -

This page is synchronized from the post: [How to:  如何计算 max_virtual_bandwidth / How to calculate the max_virtual_bandwidth?](https://steemit.com/@oflyhigh/how-to-maxvirtualbandwidth-how-to-calculate-the-maxvirtualbandwidth)
