
---
title: 'STEEM SQL 系列之 历史上的今天怎么实现的？SteemSQL Tutorial: How to Get Historic Posts of Today on SteemIt?'
permlink: steem-sql-steemsql-tutorial-how-to-get-historic-posts-of-today-on-steemit
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-09-24 09:00:09
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

@dapeng has some posts on "History of Today" which reveals some old posts that were published at the same time (but not this year apparently) on steemit. It can be achieved using the following [SQL](https://helloacm.com/how-to-list-the-most-voted-posts-in-a-year-using-sql/).

```
select top 10 *
from 
	Comments
where
	FORMAT(created,'MM-dd','en-us') = FORMAT(GetDate(),'MM-dd','en-us') and 
	FORMAT(created,'yyyy','en-us') <> FORMAT(GetDate(),'yyyy','en-us') and
	title <> ''
order by 
	total_payout_value desc
```

Let's explain this line by line.
- `select top 10 *` Choosing the first 10 posts
- `from Comments` Table `Comments` holds posts and comments
- `FORMAT(created,'MM-dd','en-us') = FORMAT(GetDate(),'MM-dd','en-us')`  The Month and Day should be the same as today
- `FORMAT(created,'yyyy','en-us') <> FORMAT(GetDate(),'yyyy','en-us')` But it can't be this year.
- `title <> ''` Filter out comments, which have empty titles.
- `order by total_payout_value desc` Show the most earned posts first.

We could also add other conditions, such as `categories = 'cn'` if we are only interested in the CN posts.

![](https://cdn.pixabay.com/photo/2016/12/09/18/30/database-schema-1895779_960_720.png)
*Image Credit: Pixabay.com*

感谢 @arcange 创造了 STEEMSQL!

STEEM SQL 系列：
- [STEEM SQL 系列之 如何获取最近7天 CN 区用户发贴量，点赞数和估计收益值](https://steemit.com/cn/@justyy/steem-sql-7-cn)

@dapeng 之前搞了一个 “历史上的今天” 挖坟贴 ，也就是通过 SQL 查询 在以前在同一天发表的帖子，听起来很玄乎？实际上就是以下[SQL](https://justyy.com/archives/5043)。我们先来看看：

```
select top 10 *
from 
	Comments
where
	FORMAT(created,'MM-dd','en-us') = FORMAT(GetDate(),'MM-dd','en-us') and 
	FORMAT(created,'yyyy','en-us') <> FORMAT(GetDate(),'yyyy','en-us') and
	title <> ''
order by 
	total_payout_value desc
```

我们来解释一下：
- `select top 10 *` 选择前10条记录
- `from Comments` 查询 STEEMSQL 里的 `Comments` 表
- `FORMAT(created,'MM-dd','en-us') = FORMAT(GetDate(),'MM-dd','en-us')`  发表时间的月和日要和今天一样
- `FORMAT(created,'yyyy','en-us') <> FORMAT(GetDate(),'yyyy','en-us')` 但是又不能是今年。
- `title <> ''` 标题为空，也就是限制文章类型（评论的标题一般是空）
- `order by total_payout_value desc` 按照收益排序

我们还可以其它条件， 比如 `categories = 'cn'` 只查询第一个标签为 cn 的帖子。



![](https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png)

**[CN 每日排行榜](https://steemit.com/cn/@justyy/daily-cn-updates---cn72017-09-24)**

// Later, it may be reposted to my blogs: [justyy.com](https://justyy.com), [helloacm.com](https://helloacm.com) and [codingforspeed.com](https://codingforspeed.com)  稍后同步到我的[中文博客](https://justyy.com)和英文[计算机](https://helloacm.com)[博客](https://codingforspeed.com)。
- [SteemSQL Tutorial: How to Get Historic Posts of Today on SteemIt?](https://helloacm.com/steemsql-tutorial-how-to-get-historic-posts-of-today-on-steemit/)
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

This page is synchronized from the post: [STEEM SQL 系列之 历史上的今天怎么实现的？SteemSQL Tutorial: How to Get Historic Posts of Today on SteemIt?](https://steemit.com/@justyy/steem-sql-steemsql-tutorial-how-to-get-historic-posts-of-today-on-steemit)
