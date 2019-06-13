
---
title: 'SteemSQL Tutorial: How to Get the Most Payout Authors in History? SteemSQL 教程 - 如何获取史上赚最多金的作者？'
permlink: steemsql-tutorial-how-to-get-the-most-payout-authors-in-history-steemsql
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-11-20 11:59:24
categories:
- cn
tags:
- cn
- steemstem
- sql
- steemsql
- cn-programming
thumbnail: https://cdn.pixabay.com/photo/2014/10/19/11/10/money-494167_960_720.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


> 本文由区块链内容激励网络yoyow（[yoyow.org](yoyow.org)）赞助 
This post has been sponsored by [yoyow.org](yoyow.org)

![](https://cdn.pixabay.com/photo/2014/10/19/11/10/money-494167_960_720.jpg)
*Image Credit: Pixabay.com*

@nationalpark has published quite a few posts on the most payout authors in history, and here is how it was done in [SteemSQL](https://helloacm.com/steemsql-tutorial-how-to-get-the-most-payout-authors-in-history/) just in case you want to get [these data](https://helloacm.com/steemsql-tutorial-how-to-fix-json-text-is-not-properly-formated-unexpected-character-is-found-at-position-0/) by yourself.

We know the payout posts are stored in `Comments` table thanks to @arcange 's hard work on maintaining [SteemSQL](https://steemit.com/steemit/@arcange/steemsql-com-a-public-sql-server-database-with-all-steemit-blockchain-data).  Now, we just need to group by author id and sum up all the payouts via fields `total_payout_value` (past payout) and `total_pending_payout`(posts not 7 days yet).

```
select top 100
	author, sum(total_payout_value) + sum(total_pending_payout_value)
from
	comments (NOLOCK)
group by
	author
order by
	sum(total_payout_value) + sum(total_pending_payout_value) desc
```

This takes time, as it needs to go through all authors and all posts... But eventually, it will return the most payout authors as we expect:

![](https://steemitimages.com/DQmXSdxYsw1HsuJbVcFwk7bqHREcqJ9NXqNeWvdiVR3an2b/image.png)

Remember, this payout includes the 25% curation rewards, for example, I slightly change the query to show my total payout:

```
select 
	author, sum(total_payout_value) + sum(total_pending_payout_value)
from
	comments (NOLOCK)
group by
	author
having
	author = 'justyy'
```

And this gives me:

![](https://steemitimages.com/DQmQeM8UfVpyYWDt8Tm4Ey33chUVbv29PDDcadqDiXwxbZL/image.png)

So roughly, I have earned slightly more than 11152.3 * 0.75 = 8364 SBD.

Let's get back to the first query, you can add a date and time/date constraint e.g. only counting in the last 30 days.

```
where
	datediff(day, created, GetUTCDate()) between 0 and 30
```

Write more, have fun and steem on!

------------------------------

@nationalpark 兄在过去几天发了好几篇 关于史上最多金的分析。这篇我将介绍这是如何实现的，这样的话，你也可以自己分析这些数据了。

我们都知道在`Comments` 表里存放的帖子数据，这就包括了收益。我们只需要按 作者来分类 (group by author) 然后累计
 `total_payout_value` (过去已经结算的帖子) 和 `total_pending_payout`(7天内的帖子) 即可。

```
select top 100
	author, sum(total_payout_value) + sum(total_pending_payout_value)
from
	comments (NOLOCK)
group by
	author
order by
	sum(total_payout_value) + sum(total_pending_payout_value) desc
```

本来想写一个[在线工具](https://helloacm.com/tools/steemit-tools/)的，无奈[这个SQL](https://justyy.com/archives/5612)执行效率太慢，因为需要遍例大量的文章才能统计得出结果。

![](https://steemitimages.com/DQmXSdxYsw1HsuJbVcFwk7bqHREcqJ9NXqNeWvdiVR3an2b/image.png)

这里的收益包括25%的点赞收益，所以大概你需要 X 0.75才能得到收益情况。比如，我改了一下，只显示我的：

```
select 
	author, sum(total_payout_value) + sum(total_pending_payout_value)
from
	comments (NOLOCK)
group by
	author
having
	author = 'justyy'
```

得到结果：

![](https://steemitimages.com/DQmQeM8UfVpyYWDt8Tm4Ey33chUVbv29PDDcadqDiXwxbZL/image.png)

也就是说，我大概得到比 11152.3 * 0.75 = 8364 SBD稍微多一点点的收入。

回到第一个语句，我们可以添加一个时间限制，比如显示过去30天的收排名：

```
where
	datediff(day, created, GetUTCDate()) between 0 and 30
```

是不是很简单？继续写吧，兄弟姐妹们！

> 本文由区块链内容激励网络yoyow（[yoyow.org](yoyow.org)）赞助

- - -

This page is synchronized from the post: [SteemSQL Tutorial: How to Get the Most Payout Authors in History? SteemSQL 教程 - 如何获取史上赚最多金的作者？](https://steemit.com/@justyy/steemsql-tutorial-how-to-get-the-most-payout-authors-in-history-steemsql)
