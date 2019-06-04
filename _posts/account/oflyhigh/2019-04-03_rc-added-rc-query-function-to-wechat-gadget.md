
---
title: '微信公众号增加RC查询功能 / Added RC query function to weChat gadget'
permlink: rc-added-rc-query-function-to-wechat-gadget
catalog: true
toc_nav_num: true
toc: true
date: 2019-04-03 01:12:12
categories:
- cn
tags:
- cn
- steemdev
- steem
- rc
- witness-category
thumbnail: https://cdn.steemitimages.com/DQmWqma2hU3Qwxo33eptb3JzuCbf1uAaxj2JvkB6E8AA5WP/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


RC系统(Resource Credit System)是在STEEM在HF20中引入的功能，替代之前版本中的bandwidth系统，主要目的是防止STEEM网络被滥用，为STEEM的可持续发展铺平道路。

![](https://cdn.steemitimages.com/DQmWqma2hU3Qwxo33eptb3JzuCbf1uAaxj2JvkB6E8AA5WP/image.png)
(图源 ：[pexels.com](https://www.pexels.com/))

RC系统上线了很长时间，属实在反滥用方面起到很大的作用，但是也给一些新手带来不便，常常因为RC不足而无法进行发帖或者点赞操作。

为了方便大家查询当前自己的RC，我在微信公众号中添加了对应功能，现在大家可以很方便的查询啦。

# 查询方法

为了避免N多繁复的指令，我把RC查询功能直接放到账户查询功能中了，指令如下（将STEEMID替换成你自己的）：
>`@steemid`

示例如下：
>![](https://cdn.steemitimages.com/DQmaF8WdHZJDZehHrtVoC9LafsxNBcQGm8L9UHcg1f5DA19/image.png)

其中，RC为当前的RC量，MAC_RC为你的RC总量，Percent为当前RC的占比。

# RC的总量

如果很擅于观察，那么会发现MAC_RC的数值和有效SP相当贴近，事实上也大致如此。

所以RC总量计算的相关代码如下：
>![](https://cdn.steemitimages.com/DQmcFmD9nS7ngCDEppVgYcMwWQJTocvbFnzfU9YKQJ2raYL/image.png)

RC的总量由以下因素决定：
>* 当前用户持有的vesting_shares
>* 减去用户代理出去的vesting_shares
>* 加上用户收到的vesting_shares代理
>* 加上max_rc_creation_adjustment
>* 减去下次Powerdown要变现的vesting_shares

其中别的项目相对理解简单，***`max_rc_creation_adjustment`***可能会让人费解一些，其实这个就相当于注册RC账户时注册费(STEEM形式)按当时状况计算的vesting_shares。

# RC的恢复

RC按时间线性恢复，每日恢复总量的20%。

你可以将RC想象成一个水桶，水桶能装的水就是RC的总量，另外有一个水管往水桶里注水每天注入1/5，当水桶满了，水管继续注水，水从桶里溢出。

计算当前RC时，一个重要的问题就是要考虑系统给的RC的更新时间，需要根据当前时间和RC更新时间对当前RC值进行修正。

# RC不够怎么办？

网络上流行一句话：***你这个问题，充钱就能解决***
>![](https://cdn.steemitimages.com/DQmefXkKto8tv2evGKjaR4DubkufTbjPyhyj7RkzzTDEoeD/image.png)

所以最简单的方式就是***Power up SP***了，当然减少对外代理避免Power Down，或者能够让朋友代理给你一些SP，这都是可以解决RC不足的好办法。

# 公众号二维码
微信公众号继续欢迎大家关注，有很多方便的小功能，还在不断完善中。
![](https://cdn.steemitimages.com/DQmZGHbCGz263CJHT5wLff6zqQJF5nEPC5RkZWJocmqLZE3/image.png)

# 相关链接

* [RC系统解密之最大MANA(max_mana) / 如何提升](https://steemit.com/steemdev/@oflyhigh/rc-mana-maxmana)

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>

- - -

This page is synchronized from the post: [微信公众号增加RC查询功能 / Added RC query function to weChat gadget](https://steemit.com/@oflyhigh/rc-added-rc-query-function-to-wechat-gadget)
