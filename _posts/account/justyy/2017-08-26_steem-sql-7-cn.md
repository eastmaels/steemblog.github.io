
---
title: 'STEEM SQL 系列之 如何获取最近7天 CN 区用户发贴量，点赞数和估计收益值  SteemSQL Tutorial: How to Get Authors Order By Potential Payout in Last 7 days?'
permlink: steem-sql-7-cn
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-26 16:35:06
categories:
- cn
tags:
- cn
- cn-programming
- steem-dev
- steem-sql
- steemit
thumbnail: https://steemitimages.com/DQmYNKAEBavXYDjR7G9iRGJ6ADtXJU7cNwkJ7XSPeG3zbmu/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I will start the tutorial series of getting STEEM data via sql.steemdata.com. The tool we are using here is   [LinqPad](https://www.linqpad.net/)  and today, I am going to show you how to get the list of authors in the last 7 days who have published posts on the first tag 'cn'. The results are sorted by total pending payout.

You can also contact me @justyy  if you want to learn a particular SQL but you don't know how to write it, which then may be included in the next posts.

SQL很简单，我认为是 Sexy Query (查询) Language 语言。这个语言很强大，主要用于操作数据库，现在比较流行的有 MSSQL, [MYSQL](https://justyy.com/archives/5043), SQL SERVER, ORACLE 等。

我们用 [LinqPad](https://www.linqpad.net/) 来查询 steemsql.com。这个系列每次会讲一个语句，如果你觉得你想知道，但是不清楚怎么写的，很欢迎告诉我，我将会整理到下一系列。

# 基础准备工作
下载 [LinqPad](https://www.linqpad.net/) （免费版就够用了）。然后新建数据库连接：数据库地址是`sql.steemsql.com` 用户名是 `steemit` 密码是 `steemit`

这里不重复贴图了，详细可以看 @joythewanderer 的帖子关于如何[添加链接](https://steemit.com/steemit/@joythewanderer/sql-for-dummies-1-configure-linqpad-with-steemsql-database-sql)。

![](https://steemitimages.com/DQmYNKAEBavXYDjR7G9iRGJ6ADtXJU7cNwkJ7XSPeG3zbmu/image.png)

# 获取最近7天 CN 区用户发贴量，点赞数和估计收益值 
新建 SQL 查询语句，输入以下：

```
select top 30 
   author, 
   count(author) as cnt, 
   sum(net_votes) as votes, 
   sum(pending_payout_value) as pending_payout_value 
from 
   Comments 
where 
   title<>'' and 
   dirty='False' and 
   category='cn' and 
   parent_author=''  and datediff(hour, created, GETDATE()) between 0 and 7*24 
group by 
   author 
order by 
  pending_payout_value desc
```

Run the SQL to fetch the top 30 authors, using the LinqPad:
显示结果如下：
![](https://steemitimages.com/DQmb3UXnfAMuTM3w9MnAsnni6cu5Lyohk9hoaQryi27Tofc/image.png)

- 这里 `top 30` 就是取前30个结果
- 按 估计收益值从大到小排序：`order by   pending_payout_value desc`
- 限制 CN 社区： ` category='cn' `
- 好的帖子 e.g 不被踩过的帖子：`dirty='False`
- 是主贴（并不是评论）`parent_author='' ` 和 `title <> ''` 标题不为空，两个条件一结合比较严格。我发现像 @minnowbooster 的回复也是有带标题的。
- 时间是过去7天：` datediff(hour, created, GETDATE()) between 0 and 7*24 `
- 把所有按 `author` 的帖子分组，取数量，点赞数 还有潜在收益。

前三甲： @oflyhigh   @rivalhw  @tumutanzi，大腿还有地么？

另：我会今晚把这个排名加到我的[ 每日榜单里](https://steemit.com/ranking/@justyy/2017-08-26-cn)，多提提意见。我想弄一个 [有心的机器人](https://steemit.com/cn/@oflyhigh/28gqnr)  （至少 half human, half bot），让你们都爱上我，哈哈。

更新：[今日榜单已经加上](https://steemit.com/ranking/@justyy/2017-08-26-cn)。

![](https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png)

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原创 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

// Later, it will be reposted to my blogs: [justyy.com](https://justyy.com), [helloacm.com](https://helloacm.com) and [codingforspeed.com](https://codingforspeed.com)  稍后同步到我的[中文博客](https://justyy.com)和英文[计算机](https://helloacm.com)[博客](https://codingforspeed.com)。
- [STEEM SQL 系列之 如何获取最近7天 CN 区用户发贴量，点赞数和估计收益值](https://justyy.com/archives/5198)
- [SteemSQL Tutorial: How to Get Authors Order By Potential Payout in Last 7 days?](https://helloacm.com/steemsql-tutorial-how-to-get-authors-order-by-potential-payout-in-last-7-days/)

# 近期热贴
- [LOGO 海龟作画 系列二 之定义个过程来 say Hello, World](https://steemit.com/cn/@justyy/logo-say-hello-world-logo-turtle-graphics-series-2-define-procedure-and-say-hello-world)
- [写在2017年七夕: 爱情亲情，那些美好的回忆(就是这么任性的撒狗粮)](https://steemit.com/cn/@justyy/photography-of-our-love-2017)
- [LOGO 海龟作画 系列 一 之 给孩子最好的编程启蒙语言](https://steemit.com/cn/@justyy/logo-logo-turtle-graphics-series-1-best-introductory-programming-for-kids)
- [通过脑残语言来保护你的STEEM钱包密码](https://steemit.com/cn/@justyy/steem-use-brainfuck-to-protect-your-steem-wallet-password-s)
- [不会写程序也能自动点赞 - 通过 SteemVoter 添加点赞规则](https://steemit.com/cn/@justyy/steemvoter)
- [你好秋天，英国8月份的到Hitchin看薰衣草](https://steemit.com/cn/@justyy/8-hitchin)
- [Fen Drayton村每年举行1万米比赛](https://steemit.com/cn/@justyy/fen-drayton-1)
- [碎碎念第365天](https://steemit.com/cn/@justyy/365-the-day-365-at-steemit)

# Recent Popular Posts 
- [Logo Turtle Graphics - Series 2 - Define Procedure and Say Hello, World](https://steemit.com/cn/@justyy/logo-say-hello-world-logo-turtle-graphics-series-2-define-procedure-and-say-hello-world)
- [Photography of Our Love](https://steemit.com/cn/@justyy/photography-of-our-love-2017)
- [Logo Turtle Graphics - Series 1 - Best Introductory Programming for Kids](https://steemit.com/cn/@justyy/logo-logo-turtle-graphics-series-1-best-introductory-programming-for-kids)
- [Use BrainFuck to Protect Your Steem Wallet Password(s)](https://steemit.com/cn/@justyy/steem-use-brainfuck-to-protect-your-steem-wallet-password-s)
- [Hello Autumn! Hello Lavender](https://steemit.com/cn/@justyy/8-hitchin)
- [The Day 365 at SteemIt](https://steemit.com/cn/@justyy/365-the-day-365-at-steemit)
- [The profiler told me I wrote some useless code](https://steemit.com/cn/@justyy/the-profiler-told-me-i-wrote-some-useless-code-an-example-of-defensive-programming)

![](https://justyy.com/gif/steemit.gif)
Tags: #cn #cn-programming #steem-dev #steem-sql #steemit

- - -

This page is synchronized from the post: [STEEM SQL 系列之 如何获取最近7天 CN 区用户发贴量，点赞数和估计收益值  SteemSQL Tutorial: How to Get Authors Order By Potential Payout in Last 7 days?](https://steemit.com/@justyy/steem-sql-7-cn)
