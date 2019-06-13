
---
title: 'STEEM SQL 系列之 每个月到底能挣多少？SteemSQL Tutorial: What is Your Monthly Income on Steemit?'
permlink: steem-sql-steemsql-tutorial-what-is-your-monthly-income-on-steemit
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-09-25 22:44:15
categories:
- cn
tags:
- cn
- cn-programming
- steemstem
- steemsql
- sql
thumbnail: https://steemitimages.com/DQmUm4WBdwGV6YbvfqH8ahg482A8VkfeDoFXVf86odYhQSf/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Thank you @arcange for creating STEEMSQL!

STEEM SQL Tutorial Series：
- [SteemSQL Tutorial: How to Get Historic Posts of Today on SteemIt?](https://steemit.com/cn/@justyy/steem-sql-steemsql-tutorial-how-to-get-historic-posts-of-today-on-steemit)
- [SteemSQL Tutorial: How to Get Authors Order By Potential Payout in Last 7 days?](https://steemit.com/cn/@justyy/steem-sql-7-cn)

Have you wondered that the your earnings on STEEMIT can really make a difference? Have you thought about making a living by full time blogging on steemit? The easiest way is to look at your historic earning data monthly so you get a rough idea via the following [SQL](https://helloacm.com/how-to-make-sql-insert-statement-simply-faster/)

```
select 
	FORMAT(created, 'yyyy-MM') Month, sum(total_payout_value) Min,  sum(total_payout_value) + sum(curator_payout_value) Max
from 
	Comments (NOLOCK)
where
	author='justyy'
group by
	FORMAT(created, 'yyyy-MM')
order by
	FORMAT(created, 'yyyy-MM') desc
```

We know that 75% are author rewards, so if we group the data by months, sum the author rewards, that will be the minimal level of payout. Suppose you get all other 25% curation rewards e.g. always upvotes at 30 min, that is the maximum (in theory) you earn.

In my case, here is my earning data per calendar month, I have no idea why the Sept (this month)  is zero earnings (maybe data is not synchronized into steemSQL from the blockchain yet?)

![](https://steemitimages.com/DQmUm4WBdwGV6YbvfqH8ahg482A8VkfeDoFXVf86odYhQSf/image.png)

It would be great if you could share yours in the comments (the data is public anyway).  In 7 days, **I will give 1 SBD to whoever has the lowest and highest payout respectively (in August 2017).**

![](https://cdn.pixabay.com/photo/2016/12/09/18/30/database-schema-1895779_960_720.png)
*Image Credit: Pixabay.com*

感谢 @arcange 创造了 STEEMSQL!

STEEM SQL 系列：
- [STEEM SQL 系列之 历史上的今天怎么实现的？](https://steemit.com/cn/@justyy/steem-sql-steemsql-tutorial-how-to-get-historic-posts-of-today-on-steemit)
- [STEEM SQL 系列之 如何获取最近7天 CN 区用户发贴量，点赞数和估计收益值](https://steemit.com/cn/@justyy/steem-sql-7-cn)

 @jubi 大哥一直说要靠 STEEMIT 来买别墅，这梦想很好，却遥不可及。对我来说，STEEMIT的收入能让我改善一下生活，但是远远到不了能养家糊口的主业。

使用 LINQPAD + STEEMSQL，我们可以跑一下下面的[SQL](https://justyy.com/archives/5043)，来看看我每个月在[STEEMIT](https://justyy.com/archives/5247)上的收入情况:

```
select 
	FORMAT(created, 'yyyy-MM') 月份, sum(total_payout_value) 最小收入,  sum(total_payout_value) + sum(curator_payout_value) 最大收入
from 
	Comments (NOLOCK)
where
	author='justyy'
group by
	FORMAT(created, 'yyyy-MM')
order by
	FORMAT(created, 'yyyy-MM') desc
```

75%是作者奖励，25%是点赞奖励，所以最少拿到75%，25%理论最大值（但远到不了）。奇怪的是9月份（这个月）数据为0，也许是数据还没从区块链同步到 steemsql 上。

![](https://steemitimages.com/DQmb2g7gEs2j5bcK7BbfGQPbKwaNpW7mmzPh4yUqiAmfVpL/image.png)

欢迎把你们的收入在评论中晒一晒，反正这些数据都是公开的。7天后，**我会给评论中2017年8月份最低和最高收入的各送1 SBD。**

![](https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png)

- **[CN 每日排行榜](https://steemit.com/cn/@justyy/daily-cn-updates---cn72017-09-25)**
- **[Daily Top 30 Authors Pending Payout in the Last 7 days](https://steemit.com/steemit/@dailystats/daily-top-30-authors-pending-payout-in-the-last-7-days-2017-09-25)**

// Later, it may be reposted to my blogs: [justyy.com](https://justyy.com), [helloacm.com](https://helloacm.com) and [codingforspeed.com](https://codingforspeed.com)  稍后同步到我的[中文博客](https://justyy.com)和英文[计算机](https://helloacm.com)[博客](https://codingforspeed.com)。
- [SteemSQL Tutorial: What is Your Monthly Income on Steemit?](https://helloacm.com/steemsql-tutorial-what-is-your-monthly-income-on-steemit/)
- [SteemSQL Tutorial: How to Get Authors Order By Potential Payout in Last 7 days?](https://helloacm.com/steemsql-tutorial-how-to-get-authors-order-by-potential-payout-in-last-7-days/)
- [SteemSQL Tutorial: How to Get Historic Posts of Today on SteemIt?](https://helloacm.com/steemsql-tutorial-how-to-get-historic-posts-of-today-on-steemit/)
- [STEEM SQL 系列之 每个月到底能挣多少？](https://justyy.com/archives/5370)
- [STEEM SQL 系列之 如何获取最近7天 CN 区用户发贴量，点赞数和估计收益值?](https://justyy.com/archives/5198)
- [STEEM SQL 系列之 历史上的今天怎么实现的？](https://justyy.com/archives/5363)

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原文首发于 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

![](https://steemitimages.com/0x0/https://justyy.com/gif/steemit.gif)

**@justyy 是CN 区的点赞机器人**，对优质内容进行点赞，只要代理给 @justyy 每天收利息(100 SP 每天0.04 SBD)并且能获得一次相应至少2倍的点赞，可以认为是VP 200%+ ，详细请看：
- [cn区最低保障系统 上线了!](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy) 
- [CN 区优质内容点赞机器人上线了!](https://steemit.com/cn/@justyy/a-good-content-upvote-bot-cn) 
- [点赞机器人每日点赞记录整合到每日报表中！](https://steemit.com/cn/@justyy/good-content-upvoting-history-now-integrated-into-to-daily-ranking-table)
- [虽然不挣钱，但是CN区低保计划还会继续下去](https://steemit.com/cn/@justyy/cn)

![](https://justyy.com/gif/justyy-php-is-the-best.gif)
欢迎你发表你的见解和看法，特别有意思的评论我可能会奖励你1 SBD哦。
Interesting Comments might be rewarded with 1 SBD.

- - -

This page is synchronized from the post: [STEEM SQL 系列之 每个月到底能挣多少？SteemSQL Tutorial: What is Your Monthly Income on Steemit?](https://steemit.com/@justyy/steem-sql-steemsql-tutorial-what-is-your-monthly-income-on-steemit)
