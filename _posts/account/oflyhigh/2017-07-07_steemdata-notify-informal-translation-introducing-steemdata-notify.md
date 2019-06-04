
---
title: '非正式翻译：介绍一下 SteemData Notify / Informal translation：Introducing SteemData Notify'
permlink: steemdata-notify-informal-translation-introducing-steemdata-notify
catalog: true
toc_nav_num: true
toc: true
date: 2017-07-07 12:10:36
categories:
- cn
tags:
- cn
- steemdata
thumbnail: https://steemitimages.com/DQmR47FBKWZngrEWSaUMLUKqAmeGFSfuYX9Lc3n6hMbdkYn/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


@furion 两天前发布了一篇新文章
* [Introducing SteemData Notify](https://steemit.com/steemdata/@furion/introducing-steemdata-notify)
文章中介绍了一个新产品： ***SteemData Notify***

你一定很好奇，这是神马东东，那么我就结合我的理解，给大家介绍一下。

简单地来说，就是你用了这个产品以后，腰不酸、背不疼了、腿也不抽筋了，一口气上六楼，牙口倍儿好，吃嘛嘛香。啊，晕，广告看多了。严肃点说，  ***SteemData Notify***就是个区块链监视服务，一旦你的账户财产变化或者有啥重大的改动，它就会给你的邮件地址或者Telegram发个通知。


# 应用场景

我们假设这样一个场景，Alice的钱包里有$10,000 SBD SAVINGS。不幸的是，过去她在一款她信任的APP中使用了Active key，结果呢，最近这个APP最近被黑了。

Alice正度假呢，玩的正欢实呢，没有功夫天天看钱包变动啥的。黑客拿到Alice 的 Active key, 就发起了提现操作（钱包SAVINGS变成流动性资产要等3天)，黑客合计提现一到帐，就转跑，嘿嘿嘿嘿，$10,000 SBD, 这笔干完就发家了。

幸运的是，Alice 用了 ***SteemData Notify*** 服务， 黑客这边一提现，她就收到了消息通知。然后她把提现取消，又改了密码，黑客哭晕在厕所，好容易黑到一个账户，一分钱没捞到，我容易嘛我。

# 基于尘埃支付认证

听起来挺高大上是不？其实就是确定你在***SteemData Notify***上的操作是你本人设置的啦。确认方法就是它将你的设置生成个HASH，然后你往null转0.001，并把HASH值作为MEMO即可。

这个MEMO HASH是由设置对象序列化后加密签名所生成，这就保证了是账户所有者本人所做精确可核实的更改。此外，也保证了设置的完整性可以随时查验。在这个过程中，你无需提供私钥给任何第三方程序。

译者补充：
其实就是你的设置生成唯一的HASH
而转账+HASH又只能你自己发起
两者一勾搭，就说明操作是你本人操作的啦


![](https://steemitimages.com/DQmR47FBKWZngrEWSaUMLUKqAmeGFSfuYX9Lc3n6hMbdkYn/image.png)

快来试试吧:  [notify.steemdata.com](notify.steemdata.com)

---
请知晓，SteemData Notify 是按照原样提供的免费服务，不保证正常运行时间或正确性。
源代码可以在[github](https://github.com/SteemData/notify.steemdata.com)上查看

# 译者注

其实，算是半翻译半介绍吧。

@furion SteemData, SteemQ 的 SteemSports 开发者以及官方Python库的维护者
你不知道SteemData? 看这里: [简单介绍一下SteemData](https://steemit.com/cn/@oflyhigh/steemdata)
你没听过 SteemSports？ @steemsports 就是声望分全网第一的大户

***SteemData Notify***这个东西挺有意思，更有意思的是，其实我们可以基于STEEM区块链做出很多好玩并且有意义的东西，这也是我翻译并推荐这篇文章的主要目的。那么，你准备好了吗？撸起袖子加油干吧！

- - -

This page is synchronized from the post: [非正式翻译：介绍一下 SteemData Notify / Informal translation：Introducing SteemData Notify](https://steemit.com/@oflyhigh/steemdata-notify-informal-translation-introducing-steemdata-notify)
