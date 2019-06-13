
---
title: 'STEEMSQL Tutorial - Count Total Interests Sent 办银行一个月共发了多少利息？(STEEMSQL 教程)'
permlink: steemsql-tutorial-count-total-interests-sent-steemsql
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-10-18 23:23:33
categories:
- cn
tags:
- cn
- cn-programming
- steemstem
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

@justyy  's [CN Bank](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy) has been running exactly a month now and it is giving out daily interests as SBD. I wonder how much interests I have sent out in the past 30 days.

According to [this powerful online tool](https://helloacm.com/tools/steemit/delegators/?id=justyy) to check who have delegated SP to you,  as of today, there are 40 delegators who generously  delegate around 7200 SP to @justyy and @justyy sends them 14.6% APR daily interests and also try its best to upvote the delegator's content worth of 200% delegated SP.

Here are a few examples of transactions:

![](https://steemitimages.com/DQmbwsgtCu6dXbjfyzPMjh6w8ez1JTRTpp8WGt4yEdqZmZg/image.png)

So, let's list them out using @arcange 's [STEEMSQL](https://steemit.com/steemit/@arcange/steemsql-com-a-public-sql-server-database-with-all-steemit-blockchain-data) , which stores the transactions at table `TxTransfers`

```
select 
	* 
from
	TxTransfers (NOLOCK)
where
	"from"='justyy' and
	memo like 'Thank you%' and
	datediff(day, timestamp, GetUTCDate()) between 0 and 30
```

the `like` operator matches the string according to pattern and the percentage % sign matches zero or more characters. 

![](https://steemitimages.com/DQmTm1P9uVLLRmKnrCozn9WnCCngE9X3prVeVG3yVTn4hvb/image.png)

If you replace `*` with `sum(amount)` which will print out the total SBD sent:

![](https://steemitimages.com/DQmT6PuafxfFF8uSM5FwFPp7vs45dw9ozLaaNt7MetmNVn8/image.png)

I have sent out 76.564 SBD in the last 30 days! That is 2.55 SBD per day!

![](http://www.steemsql.com/STEEMSQL%20-%20A%20public%20SQL%20database%20with%20all%20blockchain%20data%20_files/image002.png)
*Image Credit: steemsql.com*

@justyy [办银行](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy) 已经刚好一个月了，这一个月一共发了多少利息呢？利息是每天英国时间(UTC时区)凌晨按年化率14.6%发的。

根据 [这个代理查询工具](https://helloacm.com/tools/steemit/list-of-delegators/?id=justyy) 得知，今天一共有40人代理了7200 SP给 @justyy 。每天按7200SP需要支付 2.88 SBD。

这是几个支付的记录：

![](https://steemitimages.com/DQmbwsgtCu6dXbjfyzPMjh6w8ez1JTRTpp8WGt4yEdqZmZg/image.png)

然后我们可以查询 STEEMSQL 中的 `TxTransfers`表格。这个表格记录了转帐的记录。

```
select 
	* 
from
	TxTransfers (NOLOCK)
where
	"from"='justyy' and
	memo like 'Thank you%' and
	datediff(day, timestamp, GetUTCDate()) between 0 and 30
```

其中 `like`用于匹配字符串，而百分号是通配符，用于匹配一个或者多个字符。

![](https://steemitimages.com/DQmTm1P9uVLLRmKnrCozn9WnCCngE9X3prVeVG3yVTn4hvb/image.png)

如果把 `*`（所有） 替换成 `sum(amount)` 那么我们就能得出这个月一共发了利息多少钱。

![](https://steemitimages.com/DQmT6PuafxfFF8uSM5FwFPp7vs45dw9ozLaaNt7MetmNVn8/image.png)

76.564 SBD ！平均每天2.55 SBD。

-------------------

> @justyy 是 https://justyy.com 的博主，在  @tumutanzi  [大哥](https://steemit.com/cn/@tumutanzi/5ndvpm-steemit) 的介绍下加入 STEEMIT，写些帖子挣些小钱养家糊口。
--------------------------------
**@justyy 也是CN 区的点赞机器人**，对优质内容点赞，只要代理给 @justyy 每天收利息（**年化率14.6%**）并能获得一次至少2倍(VP 200%+)的点赞，大鱼 **@htliao** 都加入了这个计划(530 SP)表示支持。
1. [cn区最低保障系统 上线了!](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy) 
2. [cn区低保计划（鼓励新人）真的适合你么？](https://steemit.com/cn/@justyy/56dta3-cn)

-------------------
> [STEEMSQL 教程 – 办银行一个月共发了多少利息？](https://justyy.com/archives/5503)
> [STEEMSQL Tutorial – Count Total Interests Sent](https://helloacm.com/steemsql-tutorial-count-total-interests-sent/)
> [SteemIt SP Delegation Tool 简易SP代理工具](https://steemit.com/cn/@justyy/steemit-sp-delegation-tool-sp)
> [Steemit 在线工具和API接口](https://helloacm.com/tools/steemit-tools/)
> [SteemIt Tools and APIs](https://helloacm.com/tools/steemit/)

- - -

This page is synchronized from the post: [STEEMSQL Tutorial - Count Total Interests Sent 办银行一个月共发了多少利息？(STEEMSQL 教程)](https://steemit.com/@justyy/steemsql-tutorial-count-total-interests-sent-steemsql)
