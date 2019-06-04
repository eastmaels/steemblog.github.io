
---
title: 'RC系统解密之：RC相关信息(max_rc_creation_adjustment)的获得'
permlink: rc-rc-maxrccreationadjustment
catalog: true
toc_nav_num: true
toc: true
date: 2018-10-14 13:29:42
categories:
- steemdev
tags:
- steemdev
- steem
- rc
- api
- cn
thumbnail: https://cdn.steemitimages.com/DQmYV1QUf6euBQwbo3vCv6zZeo7Cz2SCdDENw3GHpwPdN32/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在之前的文章[RC系统解密之最大MANA(max_mana) / 如何提升](https://steemit.com/steemdev/@oflyhigh/rc-mana-maxmana)，我们知道了***`max_mana`***的计算规则。

***`max_mana`***的计算规则如下：
>`用户vests - 代理出去的vests + 收到代理的vests + 注册费vests + 下次power down vests`

![](https://cdn.steemitimages.com/DQmYV1QUf6euBQwbo3vCv6zZeo7Cz2SCdDENw3GHpwPdN32/image.png)
(图源 ：[pexels.com]( https://www.pexels.com/))

对于其它几项内容，我们可以通过API读取用户信息获得，但是注册费对应VEST_SHARES却一个历史数据，也就是说在用户注册账户当时是可以通过注册费(STEEM)以及当时的STEEM与VEST_SHARES比例计算出来的。

很显然，除非REPLAY整个STEEM区块链，否则我们没法确定某个账户注册当时的注册费价格以及STEEM与VEST_SHARES的换算关系。那么，我们该如何拿到这个***`注册费vests`***这个计算***`max_mana`***的关键因素之一呢？

好消息是STEEM区块链帮我们想到了这一点，它在注册账户这一操作之后，直接注册了一个对应的：***`rc account`*** 亦即***`create_rc_account`***，并将对应的内容保存至***`rca.max_rc_creation_adjustment`***：
>![](https://cdn.steemitimages.com/DQmbdyF2kxzxs36TbrsGFwLrmsFQCPDnwK5HsbRxGha6tA6/image.png)

所以，我们不用操心如何计算***`rca.max_rc_creation_adjustment`***了，只需读取即可。

那么如何读取呢？其实也很简单，只需调用***RC API***读取对应的账户即可，以我的账户为例，调用方法如下：
>`{"jsonrpc": "2.0", "method": "rc_api.find_rc_accounts", "params": {"accounts": ["oflyhigh"]}, "id": 1}`

返回内容为：
>![](https://cdn.steemitimages.com/DQmPWaGtG6q2xsaK4tcKfksy1fT5A6kRMPngzAL4dJM3gVR/image.png)

其中max_rc_creation_adjustment的数值为：12518977945，精度为6，对比一下steemd.com上查询的结果：
>![](https://cdn.steemitimages.com/DQmRwWzV4BgRkg5uzQQ1aKEYf59TRoHVEpszwko1dJU8CJN/image.png)

可见二者是一样一样的，至此我们已经获得了计算***`max_mana`***的所有因素。等等，***RC API***的***`find_rc_accounts`***都返回了什么？其中竟然包括了***`max_rc`***（就是***`max_mana`***啦），那我们还为什么要费劲周折的计算呢？

![](https://cdn.steemitimages.com/DQmWHdxn9UY33VPd2Q83ZuqT83f9uvtQPe9MCQHLctBA8vz/image.png)
(图源 ：[pexels.com]( https://www.pexels.com/))

答案是确实不需要计算，但是知道它来龙去脉有助于我们理解这个系统，不是嘛！

- - -

This page is synchronized from the post: [RC系统解密之：RC相关信息(max_rc_creation_adjustment)的获得](https://steemit.com/@oflyhigh/rc-rc-maxrccreationadjustment)
