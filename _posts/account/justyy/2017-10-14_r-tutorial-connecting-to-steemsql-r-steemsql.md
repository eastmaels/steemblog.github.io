
---
title: 'R Tutorial - Connecting to STEEMSQL - R 教程之 怎么样连接到 STEEMSQL 数据库'
permlink: r-tutorial-connecting-to-steemsql-r-steemsql
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-10-14 22:32:18
categories:
- cn
tags:
- cn
- steemstem
- cn-programming
- steemdev
- steemsql
thumbnail: http://www.cazena.com/sites/default/files/Picture2_1.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](http://www.cazena.com/sites/default/files/Picture2_1.png)

R is suitable for data analysis and we can use R to do [machine learning](https://helloacm.com/the-chess-ai-model-base-or-machine-learning/) after mining the data from [STEEMSQL](https://helloacm.com/steemsql-tutorial-what-are-the-outgoing-votes-for-big-whales/). The first step is to connect to STEEMSQL, and let's do it.

# Step 1 - Install the MS SQL package
@arcange 's [STEEMSQL](https://steemit.com/steemit/@arcange/steemsql-com-a-public-sql-server-database-with-all-steemit-blockchain-data) is a Microsoft SQL Server, thus we need R to be able to handle the MSSQL connection via the RODBC library. To install the connector in R, run the following command

`install.packages("ROBDC")`

# Step 2 - Reference the RODBC library
After RODBC is installed, you first need to reference it e.g. in [R script](https://helloacm.com/r-programming-tutorial-map-reduce-filter-and-lambda-examples/).

`library(RODBC)`

# Step 3 - Connect via odbcDriverConnect method
Like other programming language, RODBC has a DB-connect method, i.e. odbcDriverConnect  which needs to be customised to the following according to [STEEMSQL](https://helloacm.com/steemsql-tutorial-how-to-get-random-posts-on-steemit/):

`conn <- odbcDriverConnect("Driver=SQL Server Native Client 11.0;Server=sql.steemsql.com;Database=DBSteem;Uid=steemit;Pwd=steemit")`

Upon success, the connection is stored in `conn`

# Step 4 - Run the query
This is easy to understand, first parameter is the db connection and the second parameter is the actual SQL statement!

`sqlQuery(conn, str_c("select voting_power from Accounts where name='justyy'"))`

# Demo R Function - Get Current Voting Power
Let's wrap this up!

```
library(RODBC)
library(stringr)

getvp = function(id) {
  conn <- odbcDriverConnect("Driver=SQL Server Native Client 11.0;Server=sql.steemsql.com;Database=DBSteem;Uid=steemit;Pwd=steemit")
  x <- sqlQuery(conn, str_c("select voting_power from Accounts where name='", id, "'"))
  close(conn)
  return(x)
}
```

![](https://steemitimages.com/DQmdqsvGBkZt1tJWK6HYQBsrEWrVixJsw6pR8HSHC8F9QEN/image.png)

-----------------------------------------------

R 语言非常适合做数据处理和大数据分析，比如我们可以很容易的通过 STEEMSQL 把数据抓下来再通过R脚本来做一些大数据分析和[机器学习](https://justyy.com/archives/5430)。那么首先就是要在[R语言](https://justyy.com/archives/3457)里连接数据库，[STEEMSQL](https://justyy.com/archives/5440)是基于MS SQL的，所以我们需要：

# 安装 RODBC
@arcange 's [STEEMSQL](https://steemit.com/steemit/@arcange/steemsql-com-a-public-sql-server-database-with-all-steemit-blockchain-data) 是 Microsoft SQL Server, 我们需要在R控制台上运行安装命令

`install.packages("ROBDC")`

# 引用 RODBC
在 RODBC包安装好后，需要在R脚本的开头引用RODBC

`library(RODBC)`

# 通过 odbcDriverConnect 建立数据库连接
和其它语言类似，在使用数据库前需要建立连接，在RODBC里，我们可以通过 `odbcDriverConnect`

`conn <- odbcDriverConnect("Driver=SQL Server Native Client 11.0;Server=sql.steemsql.com;Database=DBSteem;Uid=steemit;Pwd=steemit")`

数据库连接成功后，存于变量 `conn`

# 执行SQL
这一步容易理解，第一个参数就是[数据库](https://justyy.com/archives/1556)连接，第二个参数是SQL语句。

`sqlQuery(conn, str_c("select voting_power from Accounts where name='justyy'"))`

# R示例，通过STEEMSQL查询 VP
把上面几个合起来！

```
library(RODBC)
library(stringr)

getvp = function(id) {
  conn <- odbcDriverConnect("Driver=SQL Server Native Client 11.0;Server=sql.steemsql.com;Database=DBSteem;Uid=steemit;Pwd=steemit")
  x <- sqlQuery(conn, str_c("select voting_power from Accounts where name='", id, "'"))
  close(conn)
  return(x)
}
```

![](https://steemitimages.com/DQmdqsvGBkZt1tJWK6HYQBsrEWrVixJsw6pR8HSHC8F9QEN/image.png)


-------------------

> @justyy 是 https://justyy.com 的博主，在  @tumutanzi  [大哥](https://steemit.com/cn/@tumutanzi/5ndvpm-steemit) 的介绍下加入 STEEMIT，写些帖子挣些小钱养家糊口。
--------------------------------
**@justyy 也是CN 区的点赞机器人**，对优质内容点赞，只要代理给 @justyy 每天收利息（**年化率14.6%**）并能获得一次至少2倍(VP 200%+)的点赞，大鱼 **@htliao** 都加入了这个计划(530 SP)表示支持。
1. [cn区最低保障系统 上线了!](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy) 
2. [cn区低保计划（鼓励新人）真的适合你么？](https://steemit.com/cn/@justyy/56dta3-cn)

-------------------
> [R 教程之 怎么样连接到 STEEMSQL 数据库](https://justyy.com/archives/5478)
> [R Tutorial – Connecting to STEEMSQL](https://helloacm.com/r-tutorial-connecting-to-steemsql/)
> [Steemit 在线工具和API接口](https://helloacm.com/tools/steemit-tools/)
> [SteemIt Tools and APIs](https://helloacm.com/tools/steemit/)

- - -

This page is synchronized from the post: [R Tutorial - Connecting to STEEMSQL - R 教程之 怎么样连接到 STEEMSQL 数据库](https://steemit.com/@justyy/r-tutorial-connecting-to-steemsql-r-steemsql)
