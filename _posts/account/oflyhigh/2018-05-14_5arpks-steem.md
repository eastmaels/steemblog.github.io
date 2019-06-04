
---
title: '瞎想：基于STEEM的用户验证机制'
permlink: 5arpks-steem
catalog: true
toc_nav_num: true
toc: true
date: 2018-05-14 02:41:27
categories:
- authentication
tags:
- authentication
- steem
- steemdev
- cn
thumbnail: https://steemitimages.com/DQmdRj7d8QNycQF4q6skdzsNRddwdsv8SiJxEZ9mDEkkVSs/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


我们注册各种服务，使用各种软件时，经常要验证个人身份，比如说注册网站之类的使用邮件里的链接激活，注册Telegram啥的用短信内的验证码登陆（突然发现，STEEMIT把这两种机制都用了呢）。当然了，更复杂的涉及金钱的，比如一些网站绑定信用卡银行卡时或发起一笔操作，然后要求用户提供对应交易的备注码，这样即验证了卡状态是否正常，也验证了用户是否有卡的操作权限。

![](https://steemitimages.com/DQmdRj7d8QNycQF4q6skdzsNRddwdsv8SiJxEZ9mDEkkVSs/image.png)
(图源 ：[pixabay](https://pixabay.com/))

我突然想，STEEM发展到一定程度之后，我们在STEEM的账户经营一段时间以后，这个账户无疑相当于我们在网上的身份，那么注册各种服务需要验证身份时，***STEEM是不是也可以作为邮件、短信、银行卡之外的另一种身份验证机制呢？***

想了想，这个不但可以，甚至比其它方式更加适合作为身份验证机制呢。我觉得可以从以下几点考虑：

* STEEM上数据稳定响应迅速
* STEEM上可以查询到用户的各种信息
* 转账+MEMO机制提供技术实现的便利

由于网络或者邮件服务器不稳定或者误触发垃圾邮件防范机制，我们注册了网站或者服务，但是收不到激活邮件的事情时有发生。等了半天等不到激活邮件，重试无效后，就只能换信箱了，换来换去，劳心费力还不一定搞得定。短消息现在倒是稳定多了，但是偶尔注册国外的服务也有收不到验证码的时候。如果用STEEM呢？这些都将不是问题，STEEM 每三秒出一个块，数据上链，无论是数据可靠性和响应速度都堪称一流。

验证用户身份的目的何在呢？很多时候是防止用户滥用服务。比如现在流行一个词汇在***薅羊毛***，大致意思就是用户注册很多账户骗取系统的奖励等等。传统的邮件、短信等验证方式，都无法避免这个问题，因为邮件可以随便注册，短信可以找第三方平台。

那么如果使用STEEM做为用户验证机制会如何呢？因为STEEM所有数据公开可查，我们可以按任意规则来验证用户或者给用户分级。比如声望分高、账户持有SP多、注册时间长、活跃度高的，可以适当调高评级，反之声望分为负的、账户SP近乎0的、刚注册没两天的、从不活跃的，可以适当降低评分。然后我们再根据评分来给与用户不同的权限，这样可以有效避免***薅羊毛***等行为。

![](https://steemitimages.com/DQmRjj3rNJb64Jjrkeu46N7b9CRj3afeUGTy2Yse7CQwZik/image.png)
(图源 ：[pixabay](https://pixabay.com/))

从实现角度来讲，STEEM的转账以及加密MEMO功能，为实现提供了极大的便利，只需简单的代码就可以完成STEEM用户验证功能的集成。

举例来讲，比如说用户注册时输入STEEM账户然后要求用户转入0.001到指定账户，收到来自对应STEEM账户的转账，就意味着验证成功。

我们还可以换种方式，首先转给用户0.001并在加密MEMO中添加一个随机码，用户登陆STEEMIT获得转账中备注的随机码，然后在网站/程序中填写对应的随机码，即为验证成功。当然了，具体细节可能还需推敲。

![](https://steemitimages.com/DQmVc8ofDLnZp9mtqViKk5JmC54p9AuTvTEEyfMFtUgzywf/image.png)
(图源 ：[pixabay](https://pixabay.com/))

其实STEEM还可以有好多好玩的应用。当然了，如有STEEM用户越来越多，STEEM的发展越来越好，那么相应的玩法，也会更加具有实用性以及更加好玩啦。

- - -

This page is synchronized from the post: [瞎想：基于STEEM的用户验证机制](https://steemit.com/@oflyhigh/5arpks-steem)
