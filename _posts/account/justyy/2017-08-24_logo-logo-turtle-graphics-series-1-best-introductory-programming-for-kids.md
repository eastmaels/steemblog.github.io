
---
title: 'LOGO 海龟作画 系列 一 之 给孩子最好的编程启蒙语言 - Logo Turtle Graphics - Series 1 - Best Introductory Programming for Kids'
permlink: logo-logo-turtle-graphics-series-1-best-introductory-programming-for-kids
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-24 12:04:21
categories:
- cn
tags:
- cn
- cn-programming
- logo-turtle
thumbnail: https://steemitimages.com/DQmQ5Phzvvf7qUHsN9tv51NXS8CY35oN6BWj9kSLDdYPuLD/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I think the LOGO turtle graphic is the best introductory programming language for the kids. LOGO has ranked 49 according to the [TIOBE]((https://www.tiobe.com/tiobe-index/)) (August, 2017)

The turtle can be controlled by simple commands such as *forward*, *backward*, *left*, *right*. Then as the turtle moves, it draw a line. 

The LOGO also supports high level programming concepts (such as condition if, repeat loop). Modern LOGO even supports/implements the fourth generation Object Oriented concepts.

There are many LOGO interpreters online, for example,   http://www.calormen.com/jslogo/    is written in JS.

I have also written a [PHP Online Interpreter](https://steakovercooked.com/Software.Logo) in 2006 (11 years ago). The source code is at: https://github.com/DoctorLai/PHPLogoInterpreter/

我上幼儿园的时候，父母把我送到一个“科技”夏令营，那个时候我第一次接触真正的电脑（之前都是玩[小霸王学习机](https://justyy.com/archives/350)）。也就是那个时候，我学习第一门编程语言，LOGO 海龟作图。

LOGO语言很简单，对孩子来说很好学，孩子也挺感兴趣的，因为这门语言最重要就是操作一只海龟，然后控制海龟在屏幕上走动，走动的过程海龟会留下痕迹，也就是相当于在屏幕上画线。

比如最基本的4个指令：

- 前进 FT （或者 Forward）
- 后退 BK（或者 Backward）
- 左转 LT （或者 Left）
- 右转 RT（或者 Right）

![](https://steemitimages.com/DQmQ5Phzvvf7qUHsN9tv51NXS8CY35oN6BWj9kSLDdYPuLD/image.png)

海龟默认起始位置是 屏幕中心 朝向北。比如，在LOGO控制台里敲入 `FT 100` 那么海龟前进了100步

![](https://steemitimages.com/DQmNRQyUceqyE47Ha3g5YwfsP41HBpjFJrCzkWJEjsd5Kdg/image.png)

在输入 `RT 90 FD 100` 则告诉海龟 向右转90度 再前进100步

![](https://steemitimages.com/DQmZuYcgje6hUESQVdWqq92He2EULGdnbwgyUWpkxKYTQaR/image.png)

然后 任何时候输入 `HOME`  则会让海龟回到屏幕中心 头朝向北

![](https://steemitimages.com/DQma3iyYEiCeRg9s7e4cua8Jawns9qjwkx9xdjdiq4rK9an/image.png)

# 循环
很多时候我们要重复一些指令（让海龟重复走）比如画个等边三角形，就可以分解成，重复3次这个动作：【前进100步，并向右转120度】

这时候可以用这个命令 `REPEAT 3 [FD 100 RT 120]`

![](https://steemitimages.com/DQmbKEJGKNbeW5viFayHfpoC4YibXC3mXMRfxSRayQQxNpZ/image.png)

画个四边形 `REPEAT 4 [FD 100 RT 90]`

![](https://steemitimages.com/DQmfYbA6XrkhKdytox9UxvGNXGYyUEZVxmzT88gxEgVcaKQ/image.png)

画个五边形 `REPEAT 5 [FD 100 RT 72]`

![](https://steemitimages.com/DQmTyxD4QKSx1HAhaiEwxptjAwUuL41Z3Jm7DkG5f6XVdvF/image.png)

然后你大概可以得出 画  N  边形就是

`REPEAT N [FD 100 RT 360/N]`

比如画个 30边形，我们把步长调小一点，调成 10 步，这下感觉像个圆了。

![](https://steemitimages.com/DQmYDB5r8QiUvm9fCt4QWXHRk7QmN2pUTcjMu48BzxREV54/image.png)

海龟作图陪伴我度过了童年，它很简单，很直观，我想孩子会很感兴趣的（大概6-7岁我觉得就可以开始启蒙一下孩子）。

LOGO语言还支持 橡皮擦，条件判断，递归 等第三代编程语言（面向过程）概念，甚至最新版本的还支持 第四代面向对象的程序设计，真是很强大。

根据 [TIOBE 每月编程排名榜](https://www.tiobe.com/tiobe-index/)，2017年8月份，LOGO还排第49名，说明还是有很多孩子在使用（主要是在学校里的教育）。

好玩么？之后我会再继续这个系列。。这里有一个用JS写的LOGO解释器，在这里：http://www.calormen.com/jslogo/

对了，11年前，我用PHP写了一个服务端的[LOGO解释器](https://steakovercooked.com/ch/Software.Logo)。源代码在：https://github.com/DoctorLai/PHPLogoInterpreter

![](https://steemitimages.com/DQmQnbL9G5QqeCMBUaTzEinU96Ub2iZWSMbjfiaaZ6gaZWF/image.png)

![](https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png)

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原创 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

 // 稍后同步到我的[中文博客](https://justyy.com)和英文[计算机](https://helloacm.com)[博客](https://codingforspeed.com)。
- [LOGO 海龟作画 系列 一 之 给孩子最好的编程启蒙语言](https://justyy.com/archives/5156)

# 近期热贴 Recent Popular Posts 
- [通过脑残语言来保护你的STEEM钱包密码 - Use BrainFuck to Protect Your Steem Wallet Password(s)](https://steemit.com/cn/@justyy/steem-use-brainfuck-to-protect-your-steem-wallet-password-s)
- [不会写程序也能自动点赞 - 通过 SteemVoter 添加点赞规则](https://steemit.com/cn/@justyy/steemvoter)
- [你好秋天，英国8月份的到Hitchin看薰衣草 (Hello Autumn! Hello Lavender)](https://steemit.com/cn/@justyy/8-hitchin)
- [Fen Drayton村每年举行1万米比赛](https://steemit.com/cn/@justyy/fen-drayton-1)
- [碎碎念第365天 (The Day 365 at SteemIt)](https://steemit.com/cn/@justyy/365-the-day-365-at-steemit)
- [出租 SP 的一些经验之谈](https://steemit.com/cn/@justyy/sp)
- [很好用的 桌面版 Steem 钱包 - Vessel](https://steemit.com/cn/@justyy/steem-vessel)
- [节流、开源、投资](https://steemit.com/cn/@justyy/3stbmm)
- [The Trip to Prague 捷克布拉格之旅 by @justyy](https://steemit.com/cn/@someone/the-trip-to-prague--by-justyy)
- [出租些SP 当一回债主 - 怎么样把你多余的SP租出去收点利息？](https://steemit.com/cn/@justyy/sp-sp)
- [The profiler told me I wrote some useless code (An Example of Defensive Programming) 性能评估软件说我写了几行无用的代码](https://steemit.com/cn/@justyy/the-profiler-told-me-i-wrote-some-useless-code-an-example-of-defensive-programming)
- [步子迈太大容易扯到蛋](https://steemit.com/cn/@justyy/4z2jif)

https://justyy.com/gif/steemit.gif

- - -

This page is synchronized from the post: [LOGO 海龟作画 系列 一 之 给孩子最好的编程启蒙语言 - Logo Turtle Graphics - Series 1 - Best Introductory Programming for Kids](https://steemit.com/@justyy/logo-logo-turtle-graphics-series-1-best-introductory-programming-for-kids)
