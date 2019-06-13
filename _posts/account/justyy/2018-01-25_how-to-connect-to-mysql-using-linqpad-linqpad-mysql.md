
---
title: '怎么样通过 LinqPad 连接到 SBDS - MySQL? How to Connect to Steem Blockchain Database Service (MySQL) using LinqPad?'
permlink: how-to-connect-to-mysql-using-linqpad-linqpad-mysql
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-01-25 23:37:36
categories:
- cn
tags:
- cn
- programming
- cn-reader
- steemstem
- cn-programming
thumbnail: https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture&date=2018-01-25&kakak22sd
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture&date=2018-01-25&kakak22sd)
*Image Credit Daly Bing Wallpaper 图片来源： 每日BING桌面壁纸 @superbing*

*This tutorial is in both English and Chinese*

Previously, I have used LinqPad a lot to run a few handy queries to @steemsql server. The @steemsql is a [MSSQL](https://helloacm.com/steemsql-how-to-avoid-sql-injection/) server. However, I am more comfortable in MySQL and I found a good [MySQL](https://helloacm.com/sql-exercise-how-to-swap-columns-mysql/) relational database - sbds.privex.io, the [Steem Blockchain Database Service](https://steemit.com/dev/@privex/privex-launches-steem-blockchain-database-service)

To allow running MySQL queries in LinqPad, you need to `Add Connection` and click `View more Drivers`

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516922295/sykhtktewkbu55git3o1.png)

Download and Enable the ÌQ driver`which supports MySQL, Sqlite and Oracle.

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516922307/didnghdnhjk3jc8bcr94.png)

Getting back to the `Add Connection`, following the wizard to start a new MySQL connection.

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516922328/qtqamllim36qquyky6fs.png)

Put in the access details for the [Steem Blockchain](https://helloacm.com/technically-images-can-be-stored-on-blockchain/) Database Service in MySQL
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516922391/q4wfnapv49uyb8vlfaf8.png)

Then, we can write queries easily, by selecting the connection from `sbds.privex.io.steem.steem`

```
select 
	*
from 
	sbds_tx_comments
where
	author = 'justyy'
order by
	timestamp desc
limit 10
```
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516922475/ec9vi1e7bgxumac8qswb.png)

Reposted to my blog: [https://helloacm.com/how-to-connect-to-steem-blockchain-database-service-mysql-using-linqpad/](https://helloacm.com/how-to-connect-to-steem-blockchain-database-service-mysql-using-linqpad/)

------------------------------
我一直用的是 LinqPad 来连接 [steemsql](https://justyy.com/archives/5908)。在LinqPad 里也可以通过简单的设置就可以连接 MySQL 了。碰巧这几天我在研究类似 steemsql 一样的中心化数据库，找到了  sbds.privex.io, 这是[Steem Blockchain Database Service](https://steemit.com/dev/@privex/privex-launches-steem-blockchain-database-service)，一个给 steem 用的MySQL 的关系型[数据库](https://justyy.com/archives/5478)（开源的）

在 LinqPad 里我们需要 通过 添加新的链接 `Add Connection` 然后查看更多的驱动`View more Drivers`

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516922295/sykhtktewkbu55git3o1.png)

我们需要下载并启用 ÌQ driver`这是一个支持 [MySQL](https://justyy.com/archives/5043), Sqlite 和 Oracle 数据库的驱动

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516922307/didnghdnhjk3jc8bcr94.png)

回到添加新链接的窗口导向，我们选择IQ驱动，点击下一步。

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516922328/qtqamllim36qquyky6fs.png)

然后只需要把 数据库的访问方式点好。
![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516922391/q4wfnapv49uyb8vlfaf8.png)

最后面，选择`sbds.privex.io.steem.steem` 链接，选择SQL 语言，然后写一个SQL跑跑看！

```
select 
	*
from 
	sbds_tx_comments
where
	author = 'justyy'
order by
	timestamp desc
limit 10
```

这条MySQL将查询我的最新10条[SteemIt](https://justyy.com/archives/5879)帖子(包括评论)

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1516922475/ec9vi1e7bgxumac8qswb.png)


同步到博文: [https://justyy.com/archives/5918](https://justyy.com/archives/5918)




-----------------------------
通过 [SP 代理工具](https://helloacm.com/tools/steemit/delegate-form/?delegatee=justyy) 成为 YY银行股东，好处多多。只要代理大于10 SP给 @justyy 即可自动成为YY股东。用同样的工具输入0取消代理退出股东。来去自由，取消代理后系统需要7天才能将您代理的SP退回到您的帐号上。友情提示，不建议把所有SP都代理给银行，因为你需要留一些能量发贴。
- [SteemIt 教程、机器人、在线工具和API接口](https://helloacm.com/tools/steemit-tools/)
- 加入公众号 **justyyuk** 即可以实时查询 BTC, SBD, STEEM, YOYOW, LTC, ETH 等虚拟货币的价格.
- [大家好才是真的好，YY银行足球队，你还有啥理由不加入银行？](https://steemit.com/cn/@justyy/xi2jn-yy)
- [YY 银行开启互抱大腿模式](https://steemit.com/cn/@justyy/yy)

# 猜您喜欢
- [谈谈 Utopian 成立公司](https://steemit.com/cn/@justyy/3qfhuo-utopian)
- [SteemSQL 收费了 - 开银行的成本大了](https://steemit.com/cn/@justyy/steemsql)
- [开发一个报价机器人要具备哪些知识或技能？](https://steemit.com/cn/@justyy/42d6vg)
- [兄弟俩放学回家逗邻居的猫 - 还好英国没有狂犬病](https://steemit.com/cat/@justyy/3cy6dm6b)
- [(老照片)英国女皇百年前造访剑桥 - Old Photography of Queen in 1918](https://steemit.com/busy/@justyy/old-photography-of-queen-in-1918)
- [做女人真难](https://steemit.com/cn/@happyukgo/6kce8s)
- [村里停电后](https://steemit.com/busy/@happyukgo/7skaei)
- [公众号 justyyuk 全面支持 coinmarketcap 虚拟货币实时价格查询](https://steemit.com/cn/@justyy/justyyuk-coinmarketcap)
- [SteemIt Utopian 乌托邦怎么玩? (Bug 提交报告) | 我媳妇上了 github 的 issue report](https://steemit.com/cn/@justyy/steemit-utopian-bug-or-github-issue-report)
- [VR 体验让我手心冒汗](https://steemit.com/busy/@justyy/vr)
- [说说写 STEEM的原因](https://steemit.com/cn/@happyukgo/steem)

- - -

This page is synchronized from the post: [怎么样通过 LinqPad 连接到 SBDS - MySQL? How to Connect to Steem Blockchain Database Service (MySQL) using LinqPad?](https://steemit.com/@justyy/how-to-connect-to-mysql-using-linqpad-linqpad-mysql)
