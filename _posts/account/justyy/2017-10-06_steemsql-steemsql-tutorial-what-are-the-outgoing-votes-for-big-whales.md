
---
title: 'STEEMSQL 系列之大鱼们都给谁投票了？ STEEMSQL Tutorial - What are the Outgoing Votes for Big Whales?'
permlink: steemsql-steemsql-tutorial-what-are-the-outgoing-votes-for-big-whales
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-10-06 18:09:36
categories:
- cn
tags:
- cn
- cn-programming
- steemsql
- steemstem
- steemdev
thumbnail: https://justyy.com/png/whale.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://justyy.com/png/whale.png)
*Image Credit: steemit.com*

Thank you @arcange for creating STEEMSQL!

STEEM SQL Tutorial Series：
- [SteemSQL Tutorial - Can we Really Recover Deleted Comments/Posts on STEEMIT?](https://steemit.com/cn/@justyy/steemsql-steemit-steemsql-tutorial-can-we-really-recover-deleted-comments-posts)
- [SteemSQL Tutorial: How to Get Random Posts on SteemIt?](https://steemit.com/cn/@justyy/steem-sql-steemsql-tutorial-how-to-get-random-posts-on-steemit)
- [SteemSQL Tutorial: How to Get Authors Order By Potential Payout in Last 7 days?](https://steemit.com/cn/@justyy/steem-sql-7-cn)
- [SteemSQL Tutorial: How to Get Historic Posts of Today on SteemIt?](https://steemit.com/cn/@justyy/steem-sql-steemsql-tutorial-how-to-get-historic-posts-of-today-on-steemit)
- [SteemSQL Tutorial: How to Calculate Monthly Income on STEEMIT?](https://helloacm.com/steemsql-tutorial-what-is-your-monthly-income-on-steemit/)

In @nationalpark 's [post](https://steemit.com/cn/@nationalpark/2017-9),  a few whale's outgoing votes have been analysed. As we know, all the voting data have been recorded in Steem SQL's TxVotes where it has the following structure:

![](https://steemitimages.com/DQmRbob8djWNLq5BRQL4JXVMWi4Lf8LqfWhh4SdX9NUvPu5/image.png)

The input is the Big whale's ID `voter` and we can group the results by `author`, count and sum the weights up, like this:

```
select 
	author, count(1) "Count", sum(weight) "Total Weights", sum(weight)/count(1) "Average Weight"
from
	TxVotes
where
	voter = 'abit'
group by
	author
order by sum(weight) desc
```

The SQL will look for all historic votes made by @abit and here are the first 1000 items.

![](https://steemitimages.com/DQmZH9iyLtrQ4pb1Sc5UewqdWXhBP9GoukfCxjX6roqQnmm/image.png)

We can also add the timestamp restraints (in the where statement) for example, for the last 7 days.

`and datediff(day, timestamp, GetUTCDate()) between 0 and 7`

We can also add `select top 10` if you are only interested in the first 10 authors.

We can also sort the results by total number of votes `order by count(1)` instead of total voting weight.

We can also add `having count(1) >= 5` to show the authors that gain at least 5 votes.

![](https://cdn.pixabay.com/photo/2016/12/09/18/30/database-schema-1895779_960_720.png)
*Image Credit: Pixabay.com*

感谢 @arcange 创造了 STEEMSQL!

STEEM SQL 系列：
- [STEEM SQL 系列之  STEEMIT真的可以恢复删除的文章或评论么？ ](https://steemit.com/cn/@justyy/steemsql-steemit-steemsql-tutorial-can-we-really-recover-deleted-comments-posts)
- [STEEM SQL 系列之 随机返回是怎么实现的？](https://steemit.com/cn/@justyy/steem-sql-steemsql-tutorial-how-to-get-random-posts-on-steemit)
- [STEEM SQL 系列之 如何获取最近7天 CN 区用户发贴量，点赞数和估计收益值](https://steemit.com/cn/@justyy/steem-sql-7-cn)
- [STEEM SQL 系列之 历史上的今天怎么实现的？](https://steemit.com/cn/@justyy/steem-sql-steemsql-tutorial-how-to-get-historic-posts-of-today-on-steemit)
- [STEEM SQL 系列之 每个月能挣多少?](https://justyy.com/archives/5370)

PARK 兄在 [这里](https://steemit.com/cn/@nationalpark/2017-9) 分析了几条CN区大鱼在9月底的点赞受益作者。这些可以很简单的通过直接操作 TxVotes 这个表来实现，这个表结构是：

![](https://steemitimages.com/DQmRbob8djWNLq5BRQL4JXVMWi4Lf8LqfWhh4SdX9NUvPu5/image.png)

我们只需要指定大鱼的ID 填充到 `voter` 这个字段，然后按 受益作者 `author` 分组 (group by), 就可以进行简单的权重累计和计数：

```
select 
	author, count(1) "总次数", sum(weight) "总权重", sum(weight)/count(1) "平均每贴获赞权重"
from
	TxVotes
where
	voter = 'abit'
group by
	author
order by sum(weight) desc
```

这条SQL就会统计 abit 的所有投票记录，并按总权重来排序。

![](https://steemitimages.com/DQmaPdjegMC5gGpTxkkJk3ugEMGkDmNZRPHmYmWemnUD5Ne/image.png)

我们还可以加入时间限制，比如只统计过去7天的。

`and datediff(day, timestamp, GetUTCDate()) between 0 and 7`

只显示前10条记录 `select top 10` 

按点赞次数来排序 `order by count(1)` 

只显示至少被赞5次的作者 `having count(1) >= 5` 

--------------------------------
**@justyy 是CN 区的点赞机器人**，对优质内容进行点赞，只要代理给 @justyy 每天收利息(100 SP 每天0.04 SBD)并且能获得一次相应至少2倍的点赞，可以认为是VP 200%+ ，中文区的大鱼 **@htliao** 都加入了这个计划(530 SP)表示支持，您还不来试试么？
- [cn区最低保障系统 上线了!](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy) 
- [cn区低保计划还会继续下去](https://justyy.com/archives/5368)
- [cn区低保计划（鼓励新人）真的适合你么？](https://steemit.com/cn/@justyy/56dta3-cn)
> [说说我的机器人点赞策略](https://justyy.com/archives/5433)
> [How am I doing with SteemIt Curation Bot?](https://helloacm.com/how-am-i-doing-with-steemit-curation-bot/)
> [Steemit 在线工具和API接口](https://helloacm.com/tools/steemit-tools/)
> [SteemIt Tools and APIs](https://helloacm.com/tools/steemit/)

Reposted on my blogs: 
- [STEEMSQL 系列之大鱼们都给谁投票了？](https://justyy.com/archives/5440)
- [STEEMSQL Tutorial - What are the Outgoing Votes for Big Whales?](https://helloacm.com/steemsql-tutorial-what-are-the-outgoing-votes-for-big-whales/)

- - -

This page is synchronized from the post: [STEEMSQL 系列之大鱼们都给谁投票了？ STEEMSQL Tutorial - What are the Outgoing Votes for Big Whales?](https://steemit.com/@justyy/steemsql-steemsql-tutorial-what-are-the-outgoing-votes-for-big-whales)
