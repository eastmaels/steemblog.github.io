
---
title: 'STEEM SQL 系列之 随机返回是怎么实现的？SteemSQL Tutorial: How to Get Random Posts on SteemIt?'
permlink: steem-sql-steemsql-tutorial-how-to-get-random-posts-on-steemit
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-10-01 10:49:33
categories:
- cn
tags:
- cn
- cn-programming
- steemsql
- steemstem
- sql
thumbnail: https://cdn.pixabay.com/photo/2016/12/09/18/30/database-schema-1895779_960_720.png
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
- [SteemSQL Tutorial: How to Get Authors Order By Potential Payout in Last 7 days?](https://steemit.com/cn/@justyy/steem-sql-7-cn)
- [SteemSQL Tutorial: How to Get Historic Posts of Today on SteemIt?](https://steemit.com/cn/@justyy/steem-sql-steemsql-tutorial-how-to-get-historic-posts-of-today-on-steemit)
- [How to Calculate Monthly Income on STEEMIT?](https://helloacm.com/steemsql-tutorial-what-is-your-monthly-income-on-steemit/)

We have seen many usages of returning some random records from MSSQL using STEEMSQL for example, pick some random posts published today in history (last year, the year before last ...), we can write a [SQL](https://helloacm.com/steemsql-tutorial-how-to-get-historic-posts-of-today-on-steemit/) like this:

```
SELECT TOP 10 
    author, body
FROM
    Comments (NOLOCK)
WHERE
    FORMAT(created,'MM-dd','en-us') = FORMAT(GETUTCDATE(),'MM-dd','en-us')
    AND YEAR(created) <> YEAR(GETUTCDATE())
    AND depth = 0
ORDER BY
    NEWID()
```
Notes:
-  only selecting the fields you want, which is faster than returning all fields `select *`
-  Put a `(NOLOCK)` to avoid database being injected lock
-  USE `GetUTCDate()` function as all dates & times in STEEMSQL are UTC.
-  Use `depth = 0` to limit to posts only while `depth > 0` refers to comments
-  `ORDER BY NEWID()` chooses random records, but this is slow as it needs to scan entire table and sort by `NEWID()`

We can also add:
- `category = "maintag"` to limit to specific categories

Better way to return random records:
We can add the following condition and remove the `ORDER BY NEWID()` which is inefficient.
`AND 	(ABS(CAST(   (BINARY_CHECKSUM(ID, NEWID())) as int)) % 100) < 50`

The `BINARY_CHECKSUM` function is fast and there is no need to scan entire table and do the sorting afterwards. 

Of course, there are other ways to return random records, e.g. generate a set of random IDs in the scripting (like Python, [PHP](https://helloacm.com/how-to-compute-the-modes-of-an-array-in-php/)) and then pass these IDs in the SQL.

Do you have other better ways? please share yours by commenting below. Innovative (better) solutions will be rewarded with 1 SBD.

![](https://cdn.pixabay.com/photo/2016/12/09/18/30/database-schema-1895779_960_720.png)
*Image Credit: Pixabay.com*

感谢 @arcange 创造了 STEEMSQL!

STEEM SQL 系列：
- [STEEM SQL 系列之 如何获取最近7天 CN 区用户发贴量，点赞数和估计收益值](https://steemit.com/cn/@justyy/steem-sql-7-cn)
- [STEEM SQL 系列之 历史上的今天怎么实现的？](https://steemit.com/cn/@justyy/steem-sql-steemsql-tutorial-how-to-get-historic-posts-of-today-on-steemit)
- [STEEM SQL 系列之 每个月能挣多少?](https://justyy.com/archives/5370)

比如你看到这样的 帖子 “随机挑选几个帖子” 或者 “随机挑选几个回复”，你是不是在想，这怎么弄的？其实不难，我们先来看第一个版本：


```
SELECT TOP 10 
    author, body
FROM
    Comments (NOLOCK)
WHERE
    FORMAT(created,'MM-dd','en-us') = FORMAT(GETUTCDATE(),'MM-dd','en-us')
    AND YEAR(created) <> YEAR(GETUTCDATE())
    AND depth = 0
ORDER BY
    NEWID()
```
说明:
-  尽可能只选择你需要的字段而不是返回所有 `select *`
-  在表后面加上`(NOLOCK)` 能避免数据库正在更新的时候锁定查询。
-  使用`GetUTCDate()` 日期时间函数因为在STEEMSQL上所有时间都是UTC。
-  使用 `depth = 0`来限制文章，相反使用`depth > 0`来查询所有的评论
-  `ORDER BY NEWID()` 能根据随机ID来排序，所以很慢，因为需要查找所有的记录然后再排序。

我们还可以限制类别，比如 `"cn" 类目随机挑选……`
- `category = "cn"` 

效率较高
在WHERE限制语句中加上以下判断：
`AND 	(ABS(CAST(   (BINARY_CHECKSUM(ID, NEWID())) as int)) % 100) < 50`

`BINARY_CHECKSUM` 函数用于返回一些字段的较验值，速度快，并且不需要查找所有记录也不需要排序就可以了。

当然，还可以在 PYTHON或PHP中先生成一个随机ID的列表，然后把这些列表值传入SQL语句中……

你还有什么好的办法？分享出来，如果是个很好的（创新）办法，那么我们奖励你 1 SBD。

--------------------------------
**@justyy 是CN 区的点赞机器人**，对优质内容进行点赞，只要代理给 @justyy 每天收利息(100 SP 每天0.04 SBD)并且能获得一次相应至少2倍的点赞，可以认为是VP 200%+ ，详细请看：
- [cn区最低保障系统 上线了!](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy) 
- [cn区低保计划还会继续下去](https://justyy.com/archives/5368)
- [cn区低保计划（鼓励新人）真的适合你么？](https://steemit.com/cn/@justyy/56dta3-cn)
-----
- [STEEM SQL 系列之 随机返回是怎么实现的？](https://justyy.com/archives/5413)
- [SteemSQL Tutorial: How to Get Random Posts on SteemIt?](https://helloacm.com/steemsql-tutorial-how-to-get-random-posts-on-steemit/)

> @justyy 是 [https://justyy.com](https://justyy.com/) 的博主 - 西半球知名的“土豪”博主。

- - -

This page is synchronized from the post: [STEEM SQL 系列之 随机返回是怎么实现的？SteemSQL Tutorial: How to Get Random Posts on SteemIt?](https://steemit.com/@justyy/steem-sql-steemsql-tutorial-how-to-get-random-posts-on-steemit)
