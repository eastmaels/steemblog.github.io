
---
title: '和带宽系统说白白 / Say good-bye to bandwidth system'
permlink: say-good-bye-to-bandwidth-system
catalog: true
toc_nav_num: true
toc: true
date: 2018-10-05 10:53:45
categories:
- steemdev
tags:
- steemdev
- cn-programming
- bandwidth
- programming
- cn
thumbnail: https://cdn.steemitimages.com/DQmf1cKrxmZ9hUYWkJvKXZW8jHXSueA2u8cfPX4cDv58KsV/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://cdn.steemitimages.com/DQmf1cKrxmZ9hUYWkJvKXZW8jHXSueA2u8cfPX4cDv58KsV/image.png)

今天执行一组命令时，返回如下错误：
>![](https://cdn.steemitimages.com/DQmV379Ysu7kWj3mKNxnpRXrH6UJkfQYgGyJHVLNbkTioFs/image.png)

其实只是一个获取用户信息(`get_accounts`)的API调用，并没有直接用到bandwidth之类的调用，所以严格来讲，这应该算是一个BUG，不过这个只存在于steemitdev节点，api.steem.com并没问题。

用`get_version`看一下，steemitdev节点返回信息如下：
>![](https://cdn.steemitimages.com/DQmachB7sWuWmwd2hk1oZNW4TC9VoJbJGwEJU5CwjykEKsx/image.png)

尽管版本还是0.20.5，但是已经包含了github上最新的提交：
>![](https://cdn.steemitimages.com/DQmXMBXfiaWvSpgQGUhgSb8XR8mqNszEyveQj4Zi4Ep2pGf/image.png)

其中有一项就是[3006-disable-bandwidth-system](https://github.com/steemit/steem/commit/9cc5d8a6288f0c209d67cf50debe4082766e6497)，感觉steemit是要坚决地和bandwidth说白白了。

想当初，为了给公众号添加bandwidth计算，我可是费了好大周折，一个问题就是没法从账户信息中直接读出bandwidth信息，于是为了达成目的，我读了好半天代码，找到计算`max_virtual_bandwidth`的方法
>![](https://cdn.steemitimages.com/DQmREr4FawoR7saFxtcCGjWxCZ3PV2GznUHtazabcmJ96qf/image.png)

然后在从这里推断出用户可用带宽的计算公式：`account_vshares / total_vshares* max_virtual_bandwidth`
>![](https://cdn.steemitimages.com/DQmc9xncGnkrmsxcJrZSVXF99RfccGrzF1ibCtDC36MQcd9/image.png)

再根据这段代码的逻辑用时间差去修正带宽的计算
>![](https://cdn.steemitimages.com/DQmWbEB675zTDFF4YL8xn93XynZVeuSUuUJrUcCUhbDqPPA/image.png)

总之，为此付出好多努力呢。不过，这些努力都即将成为过眼云烟啦，`bandwidth`这个实际上并没有起到什么作用只是折磨大家好长一段时间小妖精即将和我们白白了。

新的RC系统到底会是天使👼还是魔王，让我们拭目以待吧。

(封面图源 ：[pixabay](https://pixabay.com/))

# 相关链接

* [How to: 如何计算 max_virtual_bandwidth / How to calculate the max_virtual_bandwidth?](https://steemit.com/steemdev/@oflyhigh/how-to-maxvirtualbandwidth-how-to-calculate-the-maxvirtualbandwidth)
* [How to: 如何计算用户可用带宽 / How to calculate the user's available bandwidth?](https://steemit.com/steemdev/@oflyhigh/how-to-how-to-calculate-the-user-s-available-bandwidth)
* [3006-disable-bandwidth-system](https://github.com/steemit/steem/commit/9cc5d8a6288f0c209d67cf50debe4082766e6497)

- - -

This page is synchronized from the post: [和带宽系统说白白 / Say good-bye to bandwidth system](https://steemit.com/@oflyhigh/say-good-bye-to-bandwidth-system)
