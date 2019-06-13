
---
title: '说说单点故障 Single Point Failure'
permlink: single-point-failure
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-10-02 17:58:21
categories:
- cn
tags:
- cn
- cn-programming
- steemstem
- steemtools
- steemdev
thumbnail: https://steemitimages.com/DQmPdqyY7pnr5sYgWhtzYXkpLZes4HFratSGW3tw5bTAAcK/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmPdqyY7pnr5sYgWhtzYXkpLZes4HFratSGW3tw5bTAAcK/image.png)
*Image Credit: Pixabay.com*

这两天 steemd 一直很不稳定，直接导致于我那[点赞机器人](https://steemit.com/cn/@justyy/a-good-content-upvote-bot-cn)就无法工作：

![](https://steemitimages.com/DQmdUc2LYS1ChCwMWuovwJJjvUzgaieR4KdwtdMpyFm2boG/image.png)

Python STEEM 库会不停的尝试连接区块链网络，然后等待再试，基本上我写的大部分脚本都失效了，表现的结果就是很多脚本卡死的状态，我用 命令 `ps augx | grep steem | wc -l ` 竟然发现有几十份同样的脚本在运行（因为 [crontab](https://justyy.com/archives/1586) 里设置每一分钟就跑一遍 获取[点赞名单](https://justyy.com/archives/5260)和文章，决定是否点赞和点赞比例）。

![](https://steemitimages.com/DQmSmMDMCErEYCTfrCtJ7o2Xunn3jH7YzmioJ9RKNerQ8A1/image.png)
> steemd.com 时好时坏。

不得已，只能 `killall -9 python3` 把所有脚本给停止了。虽然现在已经恢复了差不多了， 但是这也给我敲响了警钟：容灾机制太差，单点故障 Single Point Failure 风险太大。

举个简单的例子，遇到飞机引擎着火停止工作，空姐再怎么教你把安全带绑好对结果也是没啥帮助的。 这里的单点就是在整个系统中起着至关紧要作用的部分。

公司的产品也需要有 backup，意思是每一个模块也需要至少2-3个人能懂不至于模块负责人休假了遇到啥问题其他人无法搞定。解决这种情况下的单点故障 的方法一般有：公司内部进行模块分享和培训 (Knowledge Share, Lunch & Learn)，模块需要有详细的文档，代码需要有详细的注释等等。

点赞机器人 @justyy 使用了 Steemd，但有很大的风险，于是我把部分代码用 [steemsql](https://justyy.com/archives/5413) 重写，保留两种方案，这样也不至于一种方法瘫痪了整个系统就不能使用了。

说了这么多，总结就四个字：两手准备。

--------------------------------
**@justyy 是CN 区的点赞机器人**，对优质内容进行点赞，只要代理给 @justyy 每天收利息(100 SP 每天0.04 SBD)并且能获得一次相应至少2倍的点赞，可以认为是VP 200%+ ，详细请看：
- [cn区最低保障系统 上线了!](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy) 
- [cn区低保计划还会继续下去](https://justyy.com/archives/5368)
- [cn区低保计划（鼓励新人）真的适合你么？](https://steemit.com/cn/@justyy/56dta3-cn)
-----------------------------------
- [Single Point Failure](https://justyy.com/archives/5416)
> @justyy 是 [https://justyy.com](https://justyy.com/) 的博主 - 西半球知名的“土豪”博主。在大哥 @tumutanzi 的带领下加入了 [STEEMIT](https://steemit.com/cn/@tumutanzi/66fqyu-steemit)。感谢您阅读 @justyy  的帖子 希望得到您的follow、upvote 或者是 reply 。

- - -

This page is synchronized from the post: [说说单点故障 Single Point Failure](https://steemit.com/@justyy/single-point-failure)
