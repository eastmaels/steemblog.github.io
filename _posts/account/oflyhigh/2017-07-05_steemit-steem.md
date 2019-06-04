
---
title: '你或许不知道的STEEMIT(STEEM)一些隐藏功能'
permlink: steemit-steem
catalog: true
toc_nav_num: true
toc: true
date: 2017-07-05 14:44:27
categories:
- cn
tags:
- cn
- cn-programming
thumbnail: https://steemitimages.com/DQmNZ7tspNKkrSXTLpuNLrjnAMXSRmqkjZwp3YAwintVFGy/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmNZ7tspNKkrSXTLpuNLrjnAMXSRmqkjZwp3YAwintVFGy/image.png)
之前写过一些帖子介绍steemit(STEEM)的一些基本功能。

比如发帖、查看收益、使用内部市场交易等等
也聊过一些复杂的操作，比如收益分享，多人维护一个账户等等
今天来随便介绍几个你或者不知道的steemit(STEEM)隐藏功能

# 自己创建账户 / Create Steemit Account yourself 

![](https://steemitimages.com/DQmS5sNQFcbgJ2NuApKp4KxD1j4oEFEJBPSLZRB1GAvsHdj/image.png)

注册账户在steemit上一直是很困难的事情，去年7月份我们刚完的时候，都要使用Facebook注册steemit，Facebook大家可能都没听过，嗯，肯定没听过，资本主义腐朽的产物，妈妈为了避免我们被其毒害，帮我们隐藏了它。但是为了注册STEEMIT，我们也拼了，搭上梯子跑出墙外，到底和Facebook勾搭上，然后注册了STEEMIT，够凄惨吧。后来据说改手机号码注册了，我曾经尝试注册一个ID，费劲周折浪费两个手机号，别问我为啥浪费两个，我也不知道，总之第一个输错验证码之后再用，就告诉我这个号码已经被用过啦。哦，说到浪费两个手机号，然后完成注册流程，然后就木有下文啦！其实无论是之前用Facebook注册，还是后来用手机注册，***注册难的根本原因，就在于STEEMIT公司注册账户要花钱！*** 虽说后来把送STEEM改成了代理，但是还是要花钱不是。

据说硬叉20之后要改进，注册账户要方便了，但是谁知道到时候兑不兑现呢？不兑现也不能去总部打老总啊。对了，话说总部在哪？老总是谁？好了，不说打老总的事情啦，其实你还有一种其它选择，没错，自己出注册费注册。

你问我咋注册？
* busy.org出的一个网页工具
* client_wallet的命令行
* python库里的函数
* 其它工具

本文侧重介绍，具体操作就不写啦。


# SP 代理 / SP delegation
![](https://steemitimages.com/DQmNZh3AunpapgfbNYVqeqcUDiTNCyv3rpnWNxKvZymkpst/image.png)

无论是让自己注册的账户更有投票权，还是想把一堆马甲号的权重集中到一个大户，你都要用到SP代理。SP代理，相当于把你的STEEM POWER借给别人，和STEEM POWER有关的投票权以及点赞回报权都统统借给他人。别人有了这部分SP之后，和自己拥有这部分SP是同样的效果，唯一的区别就是不能POWER DOWN(提现)。

硬叉18之后，SP代理功能就被印记了，并且STEEMIT变得<del>狡猾</del>聪明了，注册新用户只送了极少的STEEM POWER，其余部分都采取代理方式啦。

SP代理如何用？

* client_wallet的命令行
* python库里的函数
* Vessel ( @jesta 出品)
* 其它工具

以下分别为 python库、  Vessel相关链接
* [(Chinese Version) 关于SP代理/委派 (SP delegation)功能的学习和实践 by @chinadaily](https://steemit.com/steemdev/@chinadaily/chinese-version-sp-sp-delegation-by-chinadaily)
* [Vessel 0.0.6 - Steem Power Delegation](https://steemit.com/steem-project/@jesta/vessel-006-steem-power-delegation)

# 收益分享 / Comment Reward Beneficiaries
![](https://steemitimages.com/DQmdtwnEARvTAohJM1rnV8GzYew2R2er5dFv9VWFrtC5vFS/image.png)

关于收益分享，我前些天写过一篇帖子：
[随便聊聊收益分享，欢迎讨论 / Comment Reward Beneficiaries](https://steemit.com/cn/@oflyhigh/comment-reward-beneficiaries)
大家可以阅读那个帖子了解一些详情。

简单的讲，就是你可以把你帖子收益的一部分分享给其它人，这样帖子结算的时候，这部分收益系统自动发放到对应账户上。

使用像chainbb, busy.org, esteem这类工具发帖， 他们都自动给你的帖子设置了收益分享选项。已chainbb为例，将收益的15%设置给了自己。

Steemwhales.com 提供了一个网页表单，可以使用这个表单发帖并设置收益分享给你指定的人。

client_wallet以及python库都支持发表设置收益分享选项的帖子。
可惜官方Python库此处有BUG，并且尚未修复，导致这个功能实际上并不可用。

参考链接：
* [[Hard Fork 18] How To Use the Author Reward Splitting Feature](https://steemit.com/howto/@abit/hard-fork-18-how-to-use-author-reward-splitting-feature)

# Power Down 路线 /  Power Down  Route
![](https://steemitimages.com/DQmRRHJbz1yoett4WsQDkzKfST6Ex3PCj4bxw9N3PGfnRSk/image.png)

Power Down 路线， 简单地说，就是你可以将你的STEEM POWER直接Power Down到其它账户。
同时可以选择是到其它账户是否直接存成STEEM Power

如果你有多个账户，想将多个账户的Steem Power 归结到一个账户（主账户）
原本的做法是
* 在每个账户Power Down
* 每周检查每个账户，将其中STEEM 转账到主账户
* 每周进入主账户，Power Up

采取Power Down 路由的方法则是
* 为每个账户设置 Power Down route
* 在每个账户Power Down

工作量，无疑大大减轻。

# 结论 /  Conclusions

![](https://steemitimages.com/DQmSReNKebpSsP9YCYRW9AdLJ6uGLMgiQkLvDkwLScX1kAr/image.png)
自己创建账户、设置SP代理、发表具有收益分享功能的帖子、设置Power Down Route来归结STEEM POWER，这些功能都是STEEMIT或者说STEEM区块链的隐藏功能。使用者需要借助一定特殊的工具来打成这些操作，至少目前STEEMIT没有直接操作这些功能的接口。

然后，为社么我总觉得这四个功能放在一起，总给人一种不干好事的感觉呢？注册N多账户、代理/委派 SP过去、设置收益分享到主账户后开始发帖、有额外点赞收益啥的可以通过Power Down Router 归结到主账户......

我是不是发现了什么了不得的秘密？会不会被灭口？好忐忑啊。

----
感谢阅读 / Thank you for reading.
欢迎upvote、resteem以及 following me @oflyhigh 😎

- - -

This page is synchronized from the post: [你或许不知道的STEEMIT(STEEM)一些隐藏功能](https://steemit.com/@oflyhigh/steemit-steem)
