
---
title: 'utopian 乌托邦怎么玩？(Development)'
permlink: utopian-development
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-04 20:58:06
categories:
- busy
tags:
- busy
- cn
- utopian
- cn-programming
- tutorial
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1515096649/morfkbwtjjmheltrksad.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


很多人想抱[乌托邦](https://justyy.com/archives/5740)大腿，但是不知道如何抱，怎么用，我经常被问到这个要填啥：

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1515096649/morfkbwtjjmheltrksad.png)

今天就统一来说一下抱[乌托邦](https://justyy.com/archives/5520)的具体过程。

## 通过 SteemConnect 绑定乌托邦
第一次登陆 utopian.io 你需要点 Login 然后输入你的 active key 来连接乌托邦和你的STEEM帐号。放心，乌托邦只是通过 active key 来绑定你的帐号，但实际发贴的时候是取你的 posting key 的，因为[乌托邦](https://justyy.com/archives/5520)需要得到你帖子7天后收成的一小部分，用于分成 sponsor 和 moderator。

你还需要有一个 github.com 帐号，还需要懂一些 git 的命令，这个网上很多，这里就不多说了。

## 什么是 Development ？
所谓的 Development，就是对开源项目的开发，这里可以有两种情况，一个是你自己的项目，还有就是别人的开源项目。

### 自己的项目
比如我自己的 github.com/DoctorLai

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1515098744/eihkh5pwwm6tvlv1blod.png)

点红色箭头所指的创建一个新的代码仓库：

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1515098784/cttrtxbn32teqcytvtim.png)

然后填入仓库名称，项目介绍等。

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1515098813/zhbqdzvncdjrfatby72j.png)

这个代码仓库就是你之后在 utopian 上（本文第一个图）所需要填写的，比如：

https://github.com/DoctorLai/VideoDownloadHelper

是我的视频下载插件，那么我自己的仓库填到 utopian 上就是： DoctorLai/VideoDownloadHelper

这里有一个我第一篇 utopian 被 approved 的自己的仓库的例子：

https://utopian.io/utopian-io/@justyy/simple-video-download-helper

需要注意的是，按 utopian 现规则，所有仓库必须有一个30天内的代码改动才可以被接受，如果是很久以前自己的代码，是不能直接被接受的，但是可以给自己的代码加功能，比如：

我的这一篇：https://utopian.io/utopian-io/@justyy/adding-ted-com-video-download-support

就是在同样的仓库下给自己的插件加功能。

### 别人的项目
说实话，别人的开源项目较难，因为你需要多一个步骤。比如：

前几周，我给这个 开源项目 ： https://github.com/valeriofarias/vbsunit 改了点东西（可以是BUG也可以是其它方面改进）

我的步骤是：

1. 点击 Fork ，在你的仓库里创建一个分支
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1515099165/lnpt0irlhc05a4pgfroe.png)
2. 然后你把改动提交到你自己的分支，因为你往往没有权限直接把改动提交到原作者的分支。
3. 然后需要在github 上创建一个 Pull Requests
4. 只需要等 Pull Requests 被审核通过 合并到作者原主分支即可。
5. 最后面再写你的 utopian 的帖子，仓库地址填写原作者的分支（不能是你 Fork 后的分支）

需要注意的是，Pull Requests 需要被 merged 后才会被接受，而且 Pull Requests 合并的时间必须在30天之内。

这里简要介绍一下 git 的流程:

1. 创建分支 Fork it!
2.创建更改分支 Create your feature branch: git checkout -b my-new-feature
3. 提交改动 Commit your changes: git commit -am 'Add some feature'
4. 推送到你自己的远程分支 Push to the branch: git push origin my-new-feature
5. 然后提交 PR, Submit a pull request :D

## 学习别人的例子
你可以到 [这里](https://steemit.com/utopian-stats/@dailystats/daily-top-50-utopian-io-posts-pending-payout-in-the-last-7-days-2018-01-04) 查看每天前50名收益的 utopian 帖子，看看别人都是怎么写的。

-------------------------

同步到博文: [https://justyy.com/archives/5794](https://justyy.com/archives/5794)

> AD 一波，SBD比SP值钱，所以你把钱存在[YY银行](https://steemit.com/cn-stats/@justyy/daily-cn-updates-cnyy2017-12-15)是很划算的，YY银行吃的是草（借的SP），挤的是奶啊（值钱的SBD）， 每日发 SBD利息，从不间断，祝股东们都在2018里赚大钱，实现[财务自由](https://justyy.com/archives/3954)啊！

通过 [SP 代理工具](https://helloacm.com/tools/steemit/delegate-form/?delegatee=justyy) 成为 YY银行股东，好处多多。只要代理大于10 SP给 @justyy 即可自动成为YY股东。
> [SteemIt 教程、机器人、在线工具和API接口](https://helloacm.com/tools/steemit-tools/)
> [SteemIt Tutorials, Robots, Tools and APIs](https://helloacm.com/tools/steemit/)

# 近期帖子
- [最好的发财策略就是忘记它](https://steemit.com/cn/@justyy/3ht2ub)
- [买房这事，或许还挺靠谱的 - 记 STEEM大涨](https://steemit.com/cn/@justyy/676wxy-steem)
- [CN 区谁在POWER DOWN？](https://steemit.com/cn/@justyy/cn-power-down)
- [Eric Learns Piano 孩子学钢琴](https://steemit.com/dtube/@justyy/zn3c6hbx)
- [机器学习系列之：怎么样数鸡鸡？（3）分类 Clustering](https://steemit.com/cn/@justyy/3-clustering)
- [【活动】 晒晒你的18岁 What did you look like when you were 18?](https://steemit.com/cn/@justyy/18-what-did-you-look-like-when-you-were-18)
- [Daily China 来了！](https://steemit.com/cn/@justyy/daily-china)
- [我在STEEM发文的动力](https://steemit.com/busy/@justyy/5qling-steem)
- [今天不小心给有些股东发了两次利息，就算YY股东的福利。](https://steemit.com/busy/@justyy/7lfmag)
- [SteemSQL 教程 - 我花了800多 SBD (7000多美元)买赞。](https://steemit.com/busy/@justyy/steemsql-800-sbd-7000-cny-steemsql-tutorial-i-have-spent-800-sbd-7000-usd-buying-votes)

> 加入公众号 **justyyuk** 即可以实时查询 BTC, SBD, STEEM, YOYOW, LTC, ETH 等虚拟货币的价格.
- [公众号支持 实时查询 YOYOW, STEEM和SBD价格啦!](https://justyy.com/archives/5657)
- [公众号支持 实时查询 LTC, BTC, 和ETH价格啦!](https://justyy.com/archives/5653)
- [公众号支持 实时查询 BTS, BCH和BCG的价格啦!](https://justyy.com/archives/5685)
![](https://justyy.com/justyy-wx2.jpg)

- - -

This page is synchronized from the post: [utopian 乌托邦怎么玩？(Development)](https://steemit.com/@justyy/utopian-development)
