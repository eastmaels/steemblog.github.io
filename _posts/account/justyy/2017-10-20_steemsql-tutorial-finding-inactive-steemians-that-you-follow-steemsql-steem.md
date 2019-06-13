
---
title: 'SteemSQL Tutorial - Finding Inactive Steemians that You Follow - SteemSQL 系列教程之 - 你的哪些好友已经好久没玩STEEM了？'
permlink: steemsql-tutorial-finding-inactive-steemians-that-you-follow-steemsql-steem
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-10-20 20:49:24
categories:
- steemstem
tags:
- steemstem
- cn
- cn-programming
- steemsql
- steemdev
thumbnail: https://cdn.pixabay.com/photo/2017/06/12/04/21/database-2394312_960_720.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://cdn.pixabay.com/photo/2017/06/12/04/21/database-2394312_960_720.jpg)
*Image Credit: Pixabay.com*

If you have a following list that you would like to unfollow if he/she is inactive for at least 7 days, you might run the following SQL query (thanks to @arcange 's [STEEMSQL](https://steemit.com/steemit/@arcange/steemsql-com-a-public-sql-server-database-with-all-steemit-blockchain-data)). Being inactive means that he/she did not make a post or comment.

```
select author, datediff(day, T.last, GetUTCDate()) 
from 
(
	select author, max(created) "last" 
	from Comments 
	where author in ('followingid1', 'followingid2' ...) 
	group by author
) T 
where 
	datediff(day, T.last, GetUTCDate()) > 7
```

The nested SQL groups the posts by author and returns the last activity time, store in column "last". The main query then further filters out the active users by `datediff(day, T.last, GetUTCDate()) > 7`

We can further optimise this SQL by storing the date columns in the inner SQL query. The following IDs can be fetched by query the `Followers` view. So the query becomes:

```
select author, T.days
from 
(
	select author, max(created) "last", datediff(day, max(created), GetUTCDate()) "days"
	from Comments 
	where author in (
		select 
			following
		from
			followers
		where
			follower = 'justyy'		
	) 
	group by author
) T 
where 
	T.days > 7
order by
	T.days desc
```

The above query will list @justyy 's most inactive following user IDs, this gives results:

![](https://steemitimages.com/DQmZPVBc6EPoSHYX4zK6xSZddsziHB3SBhnNT8aTFttHBEy/image.png)

![](http://www.steemsql.com/STEEMSQL%20-%20A%20public%20SQL%20database%20with%20all%20blockchain%20data%20_files/image002.png)
*Image Credit: steemsql.com*
----------------------------

假设你想知道你关注的哪些好友很久没玩STEEM了，你可以通过 @arcange 的 [STEEMSQL](https://steemit.com/steemit/@arcange/steemsql-com-a-public-sql-server-database-with-all-steemit-blockchain-data) 来进行查询。我们可以简单的定义7天内如果用户没有发表评论或者文章就算没玩（因为可以通过机器人自动点赞）

```
select author, datediff(day, T.last, GetUTCDate()) 
from 
(
	select author, max(created) "last" 
	from Comments 
	where author in ('followingid1', 'followingid2' ...) 
	group by author
) T 
where 
	datediff(day, T.last, GetUTCDate()) > 7
```

嵌套的SQL用于按用户排序并返回最近一次活动时间 `last`。主SQL则把这时间再一次过滤，去掉7天内有活动的用户。`datediff(day, T.last, GetUTCDate()) > 7`

我们可以把时间天数间隔保存在嵌套的SQL里当成一字段，我们还可以从视图 `Followers` 中取得关注的列表。

```
select author, T.days
from 
(
	select author, max(created) "last", datediff(day, max(created), GetUTCDate()) "days"
	from Comments 
	where author in (
		select 
			following
		from
			followers
		where
			follower = 'justyy'		
	) 
	group by author
) T 
where 
	T.days > 7
order by
	T.days desc
```

上面的SQL就返回了我关注的这用户中已经不玩STEEM的，你也试试看吧？

![](https://steemitimages.com/DQmZPVBc6EPoSHYX4zK6xSZddsziHB3SBhnNT8aTFttHBEy/image.png)

-------------------

> @justyy 是 https://justyy.com 的博主，在  @tumutanzi  [大哥](https://steemit.com/cn/@tumutanzi/5ndvpm-steemit) 的介绍下加入 STEEMIT，写些帖子挣些小钱养家糊口。
--------------------------------
**@justyy 也是CN 区的点赞机器人**，对优质内容点赞，只要代理给 @justyy 每天收利息（**年化率10%**）并能获得一次至少2倍(VP 200%+)的点赞，大鱼 **@htliao** 都加入了这个计划(530 SP)表示支持。
1. [cn区最低保障系统 上线了!](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy) 
2. [cn区低保计划（鼓励新人）真的适合你么？](https://steemit.com/cn/@justyy/56dta3-cn)
3. 今天(2017-10-20) [银行股东名单](https://steemit.com/cn/@justyy/daily-cn-updates-cn2017-10-20)

- [你的哪些好友已经好久没玩STEEM了？](https://justyy.com/archives/5510)
- [Finding Inactive Steemians](https://helloacm.com/steemsql-tutorial-finding-inactive-steemians-that-you-follow/)
-------------------
- [SteemIt SP Delegation Tool 简易SP代理工具](https://steemit.com/cn/@justyy/steemit-sp-delegation-tool-sp)
- **[Steemit 在线工具，API接口和教程](https://helloacm.com/tools/steemit-tools/)**
- **[SteemIt Tutorials, Tools and APIs](https://helloacm.com/tools/steemit/)**

- - -

This page is synchronized from the post: [SteemSQL Tutorial - Finding Inactive Steemians that You Follow - SteemSQL 系列教程之 - 你的哪些好友已经好久没玩STEEM了？](https://steemit.com/@justyy/steemsql-tutorial-finding-inactive-steemians-that-you-follow-steemsql-steem)
