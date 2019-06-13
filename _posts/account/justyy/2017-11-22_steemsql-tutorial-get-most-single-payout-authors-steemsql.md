
---
title: 'SteemSQL Tutorial - Get Most Single Payout Authors - SteemSQL 教程 - 一鸣惊人的作者'
permlink: steemsql-tutorial-get-most-single-payout-authors-steemsql
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-11-22 11:41:33
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

@nationalpark in [his post](https://steemit.com/cn/@nationalpark/observation-and-analysis-supernova) has listed the top authors that publish exactly 1 post and earn the most. This SteemSQL tutorial is going to uncover the magic behind the scene thanks to @arcange 's hard work on maintaining [SteemSQL](https://steemit.com/steemit/@arcange/steemsql-com-a-public-sql-server-database-with-all-steemit-blockchain-data).

Let's say we need to limit to those authors by publishing only 1 post (excluding comments), by using this criteria.

```
depth = 0
```

Then, we need to `group author` and check if the count of the post is one by `having count(1) = 1` i.e. we use `having` on aggregated fields i.e. `author`

Then, we just need to sort the result in descending order `order by max(total_payout_value) desc` because it is only 1 post, you can use `max`, `min` or `sum` which does not make any differences.

The final [SQL](https://helloacm.com/steemsql-tutorial-how-to-get-the-most-payout-authors-in-history/) is:

```
select 
	author, 
	max(total_payout_value) "payout"
from
	comments (NOLOCK)		
where
	depth = 0
group by
	author
having
	count(1) = 1
order by
	max(total_payout_value) desc
```

as you can see `max(total_payout_value)` is repeated twice, and unlike [MySQL](https://helloacm.com/sql-exercise-how-to-swap-columns-mysql/), we can't customize this field and use it as a variable e.g. `payout`, However we can do a nested SQL, and rewrite the above:

```
select T.author, T.payout 
from (
	select 
		author, 
		max(total_payout_value) "payout", 
		count(1) "count"
	from
		comments (NOLOCK)		
	where
		depth = 0
	group by
		author
) T
where
	T.count = 1
order by
	T.payout desc
```

Both queries return the same result:

![](https://steemitimages.com/DQmeZ2DewQEUk4qSQgSMKq7qpopbKM9GSQbBvnmpgZy9Fd3/image.png)

Confirmed with @arcange, the earnings are SBD not USD, so the figures are slighly different than what you read in @nationalpark 's post.

Reposted to: [https://helloacm.com/steemsql-tutorial-get-most-single-payout-authors/](https://helloacm.com/steemsql-tutorial-get-most-single-payout-authors/)

-----------------

@nationalpark 兄在 [他的帖子里](https://steemit.com/cn/@nationalpark/observation-and-analysis-supernova) 列出了史上一鸣惊人的作者，也就是只发表一篇文章但收入却好多金。

通过 SteemSQL 的 `Comments` 表格，我们可以通过下面的条件把评论给去除掉：

```
depth = 0
```

然后只需要 用 `group author`来对作者进行归类，通过 `having count(1) = 1` 对作者的文章数进行限制。如果是归类的字段，我们需要用 `having` 而不是 `where`

然后就是排序了，你可以用 `order by max(total_pending_payout) desc` 对收益进行从大到小的排序。因为只有一篇，你可以用 `max`, `min` 或者是 `sum` 都可以。

最终[SQL](https://justyy.com/archives/5612)版本是：

```
select 
	author, 
	max(total_payout_value) "payout"
from
	comments (NOLOCK)		
where
	depth = 0
group by
	author
having
	count(1) = 1
order by
	max(total_payout_value) desc
```

`max(total_payout_value)` 有点重复了，在[MYSQL](https://justyy.com/archives/5043)里可以定义别名直接用，但很可惜在 MSSQL 里却不行，不过我们可以换成嵌套的SQL，重写一下：

```
select T.author, T.payout 
from (
	select 
		author, 
		max(total_payout_value) "payout", 
		count(1) "count"
	from
		comments (NOLOCK)		
	where
		depth = 0
	group by
		author
) T
where
	T.count = 1
order by
	T.payout desc
```

两种写法都返回了一样的数据：

![](https://steemitimages.com/DQmeZ2DewQEUk4qSQgSMKq7qpopbKM9GSQbBvnmpgZy9Fd3/image.png)

这里的收益单位是SBD，所以和 PARK兄帖子里的美元数字有点出入。

同步到博文： [https://justyy.com/archives/5619](https://justyy.com/archives/5619)

> 本文由区块链内容激励网络yoyow（[yoyow.org](yoyow.org)）赞助 
This post has been sponsored by [yoyow.org](yoyow.org)

- - -

This page is synchronized from the post: [SteemSQL Tutorial - Get Most Single Payout Authors - SteemSQL 教程 - 一鸣惊人的作者](https://steemit.com/@justyy/steemsql-tutorial-get-most-single-payout-authors-steemsql)
