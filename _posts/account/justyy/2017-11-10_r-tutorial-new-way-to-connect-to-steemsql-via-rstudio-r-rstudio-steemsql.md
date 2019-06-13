
---
title: 'R Tutorial - New Way to Connect to SteemSQL via RStudio - R 教程之通过 RStudio 来快速连接SteemSQL'
permlink: r-tutorial-new-way-to-connect-to-steemsql-via-rstudio-r-rstudio-steemsql
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-11-10 12:58:48
categories:
- cn
tags:
- cn
- cn-programming
- steemsql
- steemstem
- programming
thumbnail: https://steemitimages.com/DQmUEvNQvXpFXFy6SvwGikLkkdS8FZidDJKeynu4cADHyED/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmUEvNQvXpFXFy6SvwGikLkkdS8FZidDJKeynu4cADHyED/image.png)
*Image Credit: Pixabay.com*

Last month, in my [R tutorial](https://helloacm.com/r-tutorial-connecting-to-steemsql/), I [showed you](https://steemit.com/cn/@justyy/r-tutorial-connecting-to-steemsql-r-steemsql) how to connect to [SteemSQL](https://helloacm.com/steemsql-tutorial-count-total-interests-sent/) in R script. The latest R Studio has added a connection tab, which is a Database wizard that you can easily follow to connect to @arcange 's [STEEMSQL](https://steemit.com/steemit/@arcange/steemsql-com-a-public-sql-server-database-with-all-steemit-blockchain-data)

![](https://steemitimages.com/DQmV15YXmtwYZ7DKNB9h9qEMkrDsypPxkVjze616LdLkN2M/image.png)

And, if we click the 'New Connection', choose [ODBC](https://helloacm.com/r-tutorial-connecting-to-steemsql/)

![](https://steemitimages.com/DQmY7Xbt2wAGEhqNR4TEC8kmQvzzRrGTFNEC5odFxsj41L9/image.png)

Most likely, you will have to install the package 'ODBC' on the fly.

![](https://steemitimages.com/DQmSSr1pnmgkqZe7o4mfobgJLfkgT6mhFG68RnwvvDApTHC/image.png)

You can either choose 'SQL Server' or 'SQL Server Native Client 11.0' from the 'Data Sources'

![](https://steemitimages.com/DQmXibWgkD5adBDZCpzMwfTmFqt4X7MVP4EnrfnZ53Ctkmq/image.png)

And enter the Parameters textbox as the following values:

```
Server=sql.steemsql.com;Database=DBSteem;Uid=steemit;Pwd=steemit
```

![](https://steemitimages.com/DQmTYmT94uU7EkaGhvV2eQ98coCxNLewM5adMCHaesGNFKH/image.png)

You can test the connection before you proceed further.

![](https://steemitimages.com/DQmR4zseTrjp6cHMb3eLAnLCb6J54f6nDWJyytd1Av1urzE/image.png)

If you connect from 'R Console', the DBSteem object from SteemSQL will immediately become available.

![](https://steemitimages.com/DQmR98kH3Aj5f9hTYVkFPSx8FgJZNoDY9tRmGshc5fBSEBH/image.png)


---------------------------------------------------------

上个月，我在我的[R教程里](https://steemit.com/cn/@justyy/r-tutorial-connecting-to-steemsql-r-steemsql)介绍了如何通过R脚本来连接[STEEMSQL](https://justyy.com/archives/5510)。最新的R STUDIO添加了一个 Connection ([SteemSQL](https://justyy.com/archives/5503)) ，可以用于快速连接各种数据库，比如 @arcange 's [STEEMSQL](https://steemit.com/steemit/@arcange/steemsql-com-a-public-sql-server-database-with-all-steemit-blockchain-data)

![](https://steemitimages.com/DQmV15YXmtwYZ7DKNB9h9qEMkrDsypPxkVjze616LdLkN2M/image.png)

选择 'New Connection', - ODBC

![](https://steemitimages.com/DQmY7Xbt2wAGEhqNR4TEC8kmQvzzRrGTFNEC5odFxsj41L9/image.png)

第一次需要安装 ODBC这个包

![](https://steemitimages.com/DQmSSr1pnmgkqZe7o4mfobgJLfkgT6mhFG68RnwvvDApTHC/image.png)

我们可以选择数据源 'SQL Server' 或者 'SQL Server Native Client 11.0' 

![](https://steemitimages.com/DQmXibWgkD5adBDZCpzMwfTmFqt4X7MVP4EnrfnZ53Ctkmq/image.png)

然后在参数列表里添加：

```
Server=sql.steemsql.com;Database=DBSteem;Uid=steemit;Pwd=steemit
```

![](https://steemitimages.com/DQmTYmT94uU7EkaGhvV2eQ98coCxNLewM5adMCHaesGNFKH/image.png)

最好测试一下链接。

![](https://steemitimages.com/DQmR4zseTrjp6cHMb3eLAnLCb6J54f6nDWJyytd1Av1urzE/image.png)

如果我们选择 'R Console', 这样数据库对象就能立马在窗口中浏览。

![](https://steemitimages.com/DQmR98kH3Aj5f9hTYVkFPSx8FgJZNoDY9tRmGshc5fBSEBH/image.png)



- [R Studio Connecting to SteemSQL](https://helloacm.com/r-tutorial-how-to-connect-to-steemsql-via-rstudio/)
- [R 教程之通过 RStudio 来快速连接SteemSQL](https://justyy.com/archives/5580)


----------

> @justyy 是有名的[晒媳妇](https://steemit.com/cn/@justyy/photography-of-our-love-2017)博主，也是西半球最装X装土豪 (https://justyy.com) 的博主。@justyy 定居英国，一妻两娃，在STEEMIT上开办了历史上中文第一家银行，史称 YY央行，每日赔钱吆喝。
> @justyy 在  @tumutanzi  [大哥](https://steemit.com/cn/@tumutanzi/5ndvpm-steemit) 的介绍下加入 STEEMIT，写些帖子挣些小钱养家糊口。
> @justyy 凡事喜欢折腾，现在在一家英国软件公司里当码农，好听一点叫作算法攻城狮。 @justyy  喜欢结交天下好友，一起YY。
--------------------------------
**@justyy 也是CN 区的点赞机器人**，对优质内容点赞，只要代理给 @justyy 每天收利息（**年化率10%**）并能获得一次至少2倍(VP 200%+)的点赞，大鱼 **@htliao** 都加入了这个计划(530 SP)表示支持。
1. [cn区最低保障系统 上线了!](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy) 
2. [cn区低保计划（鼓励新人）真的适合你么？](https://steemit.com/cn/@justyy/56dta3-cn)
3. 今天(2017-11-10) [银行股东名单](https://steemit.com/cn/@justyy/daily-cn-updates-cnyy2017-11-10)
4. [CN 中文区每日【财富总值】【活跃统计数据】](https://steemit.com/cn/@justyy/cn--2017-11-09)
5. [CN 中文区每日【点赞收益年化率】【YY银行利息统计】](https://steemit.com/cn/@justyy/cn-yy-2017-11-09)
-------------------
- [SteemIt SP Delegation Tool 简易SP代理工具](https://steemit.com/cn/@justyy/steemit-sp-delegation-tool-sp)
- **[Steemit 在线工具，机器人， API接口和教程](https://helloacm.com/tools/steemit-tools/)**
- **[SteemIt Tutorials, Robots, Tools and APIs](https://helloacm.com/tools/steemit/)**

> AD 一波，听说最近 STEEM没有SBD值钱，那赶紧加入 CN区低保银行，成为股东，好处多多，每天收获点赞并且能获得10%的利息（发放SBD），[今日股东列表](https://steemit.com/cn/@justyy/daily-cn-updates-cnyy2017-11-10)

- - -

This page is synchronized from the post: [R Tutorial - New Way to Connect to SteemSQL via RStudio - R 教程之通过 RStudio 来快速连接SteemSQL](https://steemit.com/@justyy/r-tutorial-new-way-to-connect-to-steemsql-via-rstudio-r-rstudio-steemsql)
