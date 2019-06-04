
---
title: '微信公众号新~~BUG~~功能 / BUG or feature?'
permlink: bug--bug-or-feature
catalog: true
toc_nav_num: true
toc: true
date: 2019-04-25 11:33:27
categories:
- cn
tags:
- cn
- wechat
- steemit
- bug
- busy
thumbnail: https://cdn.steemitimages.com/DQmWCgnh3vWw2mB9736G2RCmqSAvWhiaNvTdyyuYYTAQ6eT/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---



好久之前，我曾经给公众号加了一个功能，就是可以查询任意账户最近十篇帖子的文章收益。

![](https://cdn.steemitimages.com/DQmWCgnh3vWw2mB9736G2RCmqSAvWhiaNvTdyyuYYTAQ6eT/image.png)
(图源 ：[pixabay](https://pixabay.com/))

查询指令为(将`steemid`换成你自己的账户名）：
>`@steemid?po`

比如查询我的最近十篇帖子的收益（截屏长图费劲，只截6篇吧）：
>![](https://cdn.steemitimages.com/DQmY4D5vUVYYH4Ratjfu85jmTyLGPeArEVaCVNe1b6LWFJP/image.png)

其实我一直没觉得这个功能有啥大用途，毕竟移动互联网高速发展，什么4G流量也近乎不限额，在外边也可以直接刷STEEMIT，不用担心流量费超额，所以没必要用公众号查询来省那么一点流量。

即便是这段时间STEEMIT在国内被屏蔽，出门在外手机没法上STEEMIT，我也没想到用这个功能，毕竟收益就在那里，你看或者不看，不增不减。

但是这两天看到一个朋友的帖子被@steemcleaners 误踩，收益变成零，我25%的权重赞一下，原本以为会帮他脱掉灰帽，结果一看收益还是零，我去steemd看了一下，@steemcleaners竟然100%权重踩的，难怪我无力帮他脱帽了。

>![](https://cdn.steemitimages.com/DQmTouCfW6vWSaBphbXkdPe2TpCuwiTTFgBFK4R4XVjAdwX/image.png)

别说25%赞了，哪怕100%赞，甚至哪怕我有20个和@oflyhigh一样多有效SP的号，我也无能为力。

但是我用公众号查了一下这个朋友最近帖子的收益，发现一个很有意思的问题：
>![](https://cdn.steemitimages.com/DQmPd8b7JCpmRcVKR4CGhgcH9bLKHy21pQxsvHCk52TbFu7/image.png)

他被踩的帖子收益竟然显示为***`$-37.274`***。要知道STEEM上其实是不存在负收益的帖子的，最低收益就是0，所以我第一时间就觉得这是我公众号一个严重的BUG：***在处理帖子收益时，当net_rshares为负值时，帖子的收益应该显示为零***。

不过转念一想，现在这样显示似乎也不错，一旦我们被踩时，还能知道踩的威力有多大，对帖子造成多大的伤害。比如上边这个***`$-37.274`***，一般来讲，通过补赞是没法挽回了。

所以，尽管这是个BUG，我也懒得改了，就当成Feature保留吧。😀

# 微信公众号

微信公众号继续欢迎大家关注，有很多方便的小功能，还在不断完善中。

![](https://cdn.steemitimages.com/DQmZGHbCGz263CJHT5wLff6zqQJF5nEPC5RkZWJocmqLZE3/image.png)

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>


- - -

This page is synchronized from the post: [微信公众号新~~BUG~~功能 / BUG or feature?](https://steemit.com/@oflyhigh/bug--bug-or-feature)
