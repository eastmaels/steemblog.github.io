
---
title: 'SteemIt Daily Wechat Group Ranking, SteemIt 好友微信群排行榜 - （实时更新版）'
permlink: steemit-daily-wechat-group-ranking-steemit
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-31 11:39:24
categories:
- cn
tags:
- cn
- cn-programming
- wechat
- ranking
- steemit
thumbnail: https://steemitimages.com/DQmaAAX7fcSHkpB8Xm3mwE7bT8VhHCKJcp2TTmJgL2vdZFQ/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I created a daily wechat ranking table according to the members in a wechat group (mainly #cn), if you want to join the group, you can contact contact#tumutanzi.com and he (@tumutanzi) will join you to the group.

The data/table is updated daily and you can fetch the historic data in JSON format.

今天刚醒还在床上就看到 @bullda 的帖子说 做了一个["Steemit好友微信群"做了个排行榜](https://steemit.com/cn/@bullda/steemit), 做得很不错，可是有几个问题：

- 两个表，很麻烦
- 数据不能实时更新，或者每次更新数据都得更新帖子
- 7天后就不能改原贴了，除非另起一贴。
- 你可以弄成机器人，每天发一贴，但是这样很容易吓跑粉丝，而且没有必要。

于是，只要是重复的工作，都能写程序，碰巧今天在家里看孩子，花了半小时，弄出这个网页：

中文版：https://helloacm.com/tools/steemit/wechat/
英文版：https://helloacm.com/tools/steemit/wechat-ranking/

API can be used to retrieve the latest ranking or a specific date (if you give it a date)
而且每天生成的数据都存在历史里了，可以通过API来调用：

`https://uploadbeta.com/api/steemit/wechat/?cached&date=2017-08-31`

界面如下：

![](https://steemitimages.com/DQmaAAX7fcSHkpB8Xm3mwE7bT8VhHCKJcp2TTmJgL2vdZFQ/image.png)

**可以点击表头来按字段排序，就一个表，就是这么简单！**

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原文首发于 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

// Later, it will be reposted to my blogs: [justyy.com](https://justyy.com), [helloacm.com](https://helloacm.com) and [codingforspeed.com](https://codingforspeed.com)  稍后同步到我的[中文博客](https://justyy.com)和英文[计算机](https://helloacm.com)[博客](https://codingforspeed.com)。

# 近期热贴
- [过去7天收益排行榜](https://steemit.com/stats/@justyy/daily-top-30-authors-in-cn-cn7-2017-08-31)
- [聂小倩 （1）| #5电影](https://steemit.com/cn/@justyy/1-or-5)
- [SP小于500也可以通过程序来设置点赞百分比](https://steemit.com/cn/@justyy/voting-weight-for-sp-less-than-500-sp-500)
- [碧桂园海外(英国)招博士让我思考了人生规划, 碧桂园适不适合你?](https://steemit.com/cn/@justyy/3dyled)
- Ned 的代理SP是怎么被使用的 - Steemit 商业分析 [Part 1](https://steemit.com/cn/@justyy/ned-sp-steemit-part-1), [Part 2](https://steemit.com/cn/@justyy/ned-sp-steemit-part-2), [Part 3](https://steemit.com/cn/@justyy/ned-sp-steemit-part-3-sweetsssj-tumutanzi) and [Part 4](https://steemit.com/cn/@justyy/ned-sp-steemit-part-4)
- [写在2017年七夕: 爱情亲情，那些美好的回忆(就是这么任性的撒狗粮)](https://steemit.com/cn/@justyy/photography-of-our-love-2017)
- [STEEM SQL 系列之 如何获取最近7天 CN 区用户发贴量，点赞数和估计收益值](https://steemit.com/cn/@justyy/steem-sql-7-cn)
- [LOGO 海龟作画 系列一 之给孩子最好的编程启蒙语言](https://steemit.com/cn/@justyy/logo-logo-turtle-graphics-series-1-best-introductory-programming-for-kids)
- [LOGO 海龟作画 系列二 之定义个过程来 say Hello, World](https://steemit.com/cn/@justyy/logo-say-hello-world-logo-turtle-graphics-series-2-define-procedure-and-say-hello-world)
- [LOGO 海龟作画 系列三 递归画一个国际象棋棋盘](https://steemit.com/cn/@justyy/logo-logo-turtle-graphics-series-3-recursively-drawing-a-chess-board)
- [通过脑残语言来保护你的STEEM钱包密码](https://steemit.com/cn/@justyy/steem-use-brainfuck-to-protect-your-steem-wallet-password-s)
- [不会写程序也能自动点赞 - 通过 SteemVoter 添加点赞规则](https://steemit.com/cn/@justyy/steemvoter)
- [你好秋天，英国8月份的到Hitchin看薰衣草](https://steemit.com/cn/@justyy/8-hitchin)
- [碎碎念第365天](https://steemit.com/cn/@justyy/365-the-day-365-at-steemit)

# Recent Popular Posts
- [Daily Top 30 Authors Pending Payout in the Last 7 days ](https://steemit.com/stats/@dailystats/daily-top-30-authors-pending-payout-in-the-last-7-days-2017-08-30) 
- [Voting Weight for SP less than 500](https://steemit.com/cn/@justyy/voting-weight-for-sp-less-than-500-sp-500)
- [SteemSQL Tutorial: How to Get Authors Order By Potential Payout in Last 7 days?](https://steemit.com/cn/@justyy/steem-sql-7-cn)
- [Photography of Our Love](https://steemit.com/cn/@justyy/photography-of-our-love-2017)
- [Logo Turtle Graphics - Series 1 - Best Introductory Programming for Kids](https://steemit.com/cn/@justyy/logo-logo-turtle-graphics-series-1-best-introductory-programming-for-kids)
- [Logo Turtle Graphics - Series 2 - Define Procedure and Say Hello, World](https://steemit.com/cn/@justyy/logo-say-hello-world-logo-turtle-graphics-series-2-define-procedure-and-say-hello-world)
- [Logo Turtle Graphics - Series 3 - Recursively drawing a chess board](https://steemit.com/cn/@justyy/logo-logo-turtle-graphics-series-3-recursively-drawing-a-chess-board)
- [Use BrainFuck to Protect Your Steem Wallet Password(s)](https://steemit.com/cn/@justyy/steem-use-brainfuck-to-protect-your-steem-wallet-password-s)
- [Hello Autumn! Hello Lavender](https://steemit.com/cn/@justyy/8-hitchin)
- [The Day 365 at SteemIt](https://steemit.com/cn/@justyy/365-the-day-365-at-steemit)

![](https://justyy.com/gif/steemit.gif)
Tags: #cn #cn-programming #wechat #ranking #steemit

- - -

This page is synchronized from the post: [SteemIt Daily Wechat Group Ranking, SteemIt 好友微信群排行榜 - （实时更新版）](https://steemit.com/@justyy/steemit-daily-wechat-group-ranking-steemit)
