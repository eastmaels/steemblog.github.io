
---
title: 'R Tutorial - How rich is SteemIt Wechat Group? R 语言教程 - STEEMIT微信群有多少钱？'
permlink: r-tutorial-how-rich-is-steemit-wechat-group-r-steemit
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-10-15 21:58:06
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

There are current 211 members in the [Steemit Wechat Group](https://helloacm.com/tools/steemit/wechat-ranking/) and I want to know how rich we are as a group. [Last tutorial](https://steemit.com/cn/@justyy/r-tutorial-connecting-to-steemsql-r-steemsql), we talked about how to connect to @arcange 's [STEEMSQL](https://steemit.com/steemit/@arcange/steemsql-com-a-public-sql-server-database-with-all-steemit-blockchain-data) via RODBC, and today, we are going to exercise this a little bit with a code example - How rich is SteemIt Wechat Group?

The STEEMSQL we are looking for is something like this:

`select savings_balance, savings_sbd_balance, balance, sbd_balance from Accounts where name='justyy'`

![](https://steemitimages.com/DQmU6FzPkmpS6FiM9TBNz8fKKvRNFwFmHUMZzGYnuyHAvQC/image.png)

The values of these four fields are not pure numbers, instead, they come with the unit either SBD or STEEM.  So it is sad that we cann't do this in pure SQL via aggregate function `sum`  But that is OK.

The members of the wechat group can be found via Github where you can [submit a pull request](https://github.com/DoctorLai/steemit-wechat-group/blob/master/members.txt) if you believe you are not in the list. 

`https://raw.githubusercontent.com/DoctorLai/steemit-wechat-group/master/members.txt`

Basically, it is a text file with each line containing the STEEMID. So in R, we can just use `readLines` to import the data into an array.

```
url = "https://raw.githubusercontent.com/DoctorLai/steemit-wechat-group/master/members.txt"
members = readLines(url)
```

Now, we can then construct the SQL to explicitly limit the account names to be within the group,  namely,

```
sqlQuery(conn, str_c("select savings_balance, savings_sbd_balance, balance, sbd_balance from Accounts where name in ('", paste(members, collapse = "','"), "')"))
```

So the SQL will become something like this:

```
select savings_balance, savings_sbd_balance, balance, sbd_balance from Accounts where name in ('justyy', 'tumutanzi' ...)
```

It is better to save this in a R function:

```
getsbd = function(members) {
  conn <- odbcDriverConnect("Driver=SQL Server Native Client 11.0;Server=sql.steemsql.com;Database=DBSteem;Uid=steemit;Pwd=steemit")
  x <- sqlQuery(conn, str_c("select savings_balance, savings_sbd_balance, balance, sbd_balance from Accounts where name in ('", paste(members, collapse = "','"), "')"))
  close(conn)
  return(x)
}
```

Then, `arr <- getsbd(members)` gets the data (four columns, i.e.  `> dim(arr) [1] 211   4 `) and we can process them individually.

```
sum_sbd = 0.0
sum_steem = 0.0
sum_sbd_saving = 0.0
sum_steem_saving = 0.0

for(money in arr[,4]) {
  x = unlist(str_split(money, " "))[1]
  sum_sbd = sum_sbd + as.numeric(x)
}

for(money in arr[,2]) {
  x = unlist(str_split(money, " "))[1]
  sum_sbd_saving = sum_sbd_saving + as.numeric(x)
}

for(money in arr[,3]) {
  x = unlist(str_split(money, " "))[1]
  sum_steem = sum_steem + as.numeric(x)
}

for(money in arr[,1]) {
  x = unlist(str_split(money, " "))[1]
  sum_steem_saving = sum_steem_saving + as.numeric(x)
}
```

`str_split` will split the string e.g. `1.00 SBD` or `2.00 STEEM` to vectors so that the value and unit are separated. And the final result is:

```
> print(paste("Total SBD = ", sum_sbd))
> print(paste("Total SBD Savings = ", sum_sbd_saving))
> print(paste("Total STEEM = ", sum_steem))
> print(paste("Total STEEM Savings = ", sum_steem_saving))
[1] "Total SBD =  31739.145"
[1] "Total SBD Savings =  597.972"
[1] "Total STEEM =  16067.426"
[1] "Total STEEM Savings =  0.01"
```

Similarly, you can sum up the Steem Power, however, it is a bit tricky to convert the VESTS to SP.


![](https://cdn.pixabay.com/photo/2014/11/03/11/20/money-515058_960_720.jpg)
*Image Credit: Pixabay.com*
------------------------------------------------------------------------------------------------------------------------------------------------------------



当前，[微信群名单](https://helloacm.com/tools/steemit/wechat/)一共有211人（没有上榜的请火速联系 wexin@justyy.com  好处多多，你会懂的）， 昨天，我们讲了怎么在R语言里[通过RODBC连接STEEMSQL数据库](https://steemit.com/cn/@justyy/r-tutorial-connecting-to-steemsql-r-steemsql)，今天我们就来温故而知新，介绍一个实用的例子：STEEMIT中文微信群一共有多少钱？

查询 @justyy 的帐号很简单，[STEEMSQL](https://justyy.com/archives/5420)是：

`select savings_balance, savings_sbd_balance, balance, sbd_balance from Accounts where name='justyy'`

![](https://steemitimages.com/DQmU6FzPkmpS6FiM9TBNz8fKKvRNFwFmHUMZzGYnuyHAvQC/image.png)

我们注意到了，这些字段并不是数值，因为还有单位，这就无法直接在STEEMSQL里直接用聚类函数 `sum` 把它们相加起来。

我们需要先把成员列表读进来，这个例表在 github 上，如果你还没在列表里，你也可以提交一个[PR](https://github.com/DoctorLai/steemit-wechat-group/blob/master/members.txt)

`https://raw.githubusercontent.com/DoctorLai/steemit-wechat-group/master/members.txt`

这是一个文本文件，每一行就是一个STEEMIT 帐号ID，我们在[R](https://justyy.com/archives/3457)里可以用 `readLines` 把文本数据读成数组。

```
url = "https://raw.githubusercontent.com/DoctorLai/steemit-wechat-group/master/members.txt"
members = readLines(url)
```

然后，通过类似 join 之类的方法，来构造这个SQL

```
sqlQuery(conn, str_c("select savings_balance, savings_sbd_balance, balance, sbd_balance from Accounts where name in ('", paste(members, collapse = "','"), "')"))
```

生成的SQL大概长这样……

```
select savings_balance, savings_sbd_balance, balance, sbd_balance from Accounts where name in ('justyy', 'tumutanzi' ...)
```

把获取数据这块写成函数

```
getsbd = function(members) {
  conn <- odbcDriverConnect("Driver=SQL Server Native Client 11.0;Server=sql.steemsql.com;Database=DBSteem;Uid=steemit;Pwd=steemit")
  x <- sqlQuery(conn, str_c("select savings_balance, savings_sbd_balance, balance, sbd_balance from Accounts where name in ('", paste(members, collapse = "','"), "')"))
  close(conn)
  return(x)
}
```

然后, `arr <- getsbd(members)` 就会返回一个含有4个字段的数组 `> dim(arr) [1] 211   4 `，接下来就好办了，遍历每个字段数组，然后相加。


```
sum_sbd = 0.0
sum_steem = 0.0
sum_sbd_saving = 0.0
sum_steem_saving = 0.0

for(money in arr[,4]) {
  x = unlist(str_split(money, " "))[1]
  sum_sbd = sum_sbd + as.numeric(x)
}

for(money in arr[,2]) {
  x = unlist(str_split(money, " "))[1]
  sum_sbd_saving = sum_sbd_saving + as.numeric(x)
}

for(money in arr[,3]) {
  x = unlist(str_split(money, " "))[1]
  sum_steem = sum_steem + as.numeric(x)
}

for(money in arr[,1]) {
  x = unlist(str_split(money, " "))[1]
  sum_steem_saving = sum_steem_saving + as.numeric(x)
}
```

`str_split` 函数把数值和单位分开，方便累计。不多说了，直接上结果：
```
> print(paste("Total SBD = ", sum_sbd))
> print(paste("Total SBD Savings = ", sum_sbd_saving))
> print(paste("Total STEEM = ", sum_steem))
> print(paste("Total STEEM Savings = ", sum_steem_saving))
[1] "Total SBD =  31739.145"
[1] "Total SBD Savings =  597.972"
[1] "Total STEEM =  16067.426"
[1] "Total STEEM Savings =  0.01"
```

类似可以累计 VESTS 然后再计算SP，不过较麻烦，这里就不展开细节了。

-------------------

> @justyy 是 https://justyy.com 的博主，在  @tumutanzi  [大哥](https://steemit.com/cn/@tumutanzi/5ndvpm-steemit) 的介绍下加入 STEEMIT，写些帖子挣些小钱养家糊口。
--------------------------------
**@justyy 也是CN 区的点赞机器人**，对优质内容点赞，只要代理给 @justyy 每天收利息（**年化率14.6%**）并能获得一次至少2倍(VP 200%+)的点赞，大鱼 **@htliao** 都加入了这个计划(530 SP)表示支持。
1. [cn区最低保障系统 上线了!](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy) 
2. [cn区低保计划（鼓励新人）真的适合你么？](https://steemit.com/cn/@justyy/56dta3-cn)

-------------------
> [R Tutorial – How rich is SteemIt Wechat Group? ](https://helloacm.com/r-tutorial-how-rich-is-steemit-wechat-group/)
> [R 语言教程 – STEEMIT微信群有多少钱？](https://justyy.com/archives/5480)
> [R 教程之 怎么样连接到 STEEMSQL 数据库](https://justyy.com/archives/5478)
> [R Tutorial – Connecting to STEEMSQL](https://helloacm.com/r-tutorial-connecting-to-steemsql/)
> [Steemit 在线工具和API接口](https://helloacm.com/tools/steemit-tools/)
> [SteemIt Tools and APIs](https://helloacm.com/tools/steemit/)

![](https://steemitimages.com/DQmeq8e5HKANWhkFqKj4XLFp9ifYt8EMvJahMZfLVj98oDY/image.png)

- - -

This page is synchronized from the post: [R Tutorial - How rich is SteemIt Wechat Group? R 语言教程 - STEEMIT微信群有多少钱？](https://steemit.com/@justyy/r-tutorial-how-rich-is-steemit-wechat-group-r-steemit)
