
---
title: 'SteemSQL 教程 - 如何使用 ISJSON 和 JSON_VALUE 函数？SteemSQL Tutorial - How to Fix "JSON text is not properly formated. Unexpected character ''.'' is found at position 0."?'
permlink: steemsql-isjson-jsonvalue-steemsql-tutorial-how-to-fix-json-text-is-not-properly-formated-unexpected-character-is-found-at
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-11-16 14:45:51
categories:
- cn
tags:
- cn
- steemstem
- sql
- steemsql
- cn-programming
thumbnail: https://steemitimages.com/DQmeb3W9Z4K1B6JrEY4kEieqzS6yMy4jXrAHh5fjdTNgQ94/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I have a [SQL](https://helloacm.com/sql-exercise-how-to-swap-columns-mysql/)  (mssql) to fetch the data from `Comments` table thanks to @arcange 's [STEEMSQL](https://steemit.com/steemit/@arcange/steemsql-com-a-public-sql-server-database-with-all-steemit-blockchain-data), like this:

```
select top 10 
	title
from
	Comments (NOLOCK)
where	
	(category='cn') or        
        (	 
		(
	         ( JSON_VALUE(json_metadata,'$.tags[4]') in ('cn','china') ) or   
	         ( JSON_VALUE(json_metadata,'$.tags[3]') in ('cn','china') ) or   
	         ( JSON_VALUE(json_metadata,'$.tags[2]') in ('cn','china') ) or   
	         ( JSON_VALUE(json_metadata,'$.tags[1]') in ('cn','china') ) or   
	         ( JSON_VALUE(json_metadata,'$.tags[0]') in ('cn','china') )
		)
      )
order by 
	created desc
```

It is supposed to return all posts (including comments) that are tagged 'cn'  in one of the tags. The field `category` is the first tag (main tag). However, in some cases, for example, when the tag string is empty for comments, the SQL failed:

`Error 13609: JSON text is not properly formatted. Unexpected character '.' is found at position 0.`

[The easy fix](https://helloacm.com/steemsql-tutorial-how-to-fix-json-text-is-not-properly-formated-unexpected-character-is-found-at-position-0/)  is to add the following test to avoid evaluating the invalid JSON string via `JSON_VALUE` function.

`ISJSON(json_metadataa) > 0`

The query becomes:

![](https://steemitimages.com/DQmeb3W9Z4K1B6JrEY4kEieqzS6yMy4jXrAHh5fjdTNgQ94/image.png)

Make sure `ISJSON` is placed before `JSON_VALUE` to allow boolean shortcut evaluation i.e. when `ISJSON` is false, `JSON_VALUE` will not be evaluated. If you place `JSON_VALUE` after, it will still cause error.

![](https://steemitimages.com/DQmVqLNjngjtic7L91tU5GtaQUkj3RHprAVMdKUBdgmW2ob/image.png)

![](https://cdn.pixabay.com/photo/2017/10/29/14/47/data-2899901_960_720.jpg)
*Image Credit: Pixabay.com*
---------------------------------------

我的[机器人](https://justyy.com/archives/5540)每日前30名排行通过以下MSSQL来查询@arcange 的 [STEEMSQL](https://steemit.com/steemit/@arcange/steemsql-com-a-public-sql-server-database-with-all-steemit-blockchain-data) `Comments` 表中 标签中有 cn 或者 china 的帖子或者评论：

```
select top 10 
	title
from
	Comments (NOLOCK)
where	
	(category='cn') or        
        (	 
		(
	         ( JSON_VALUE(json_metadata,'$.tags[4]') in ('cn','china') ) or   
	         ( JSON_VALUE(json_metadata,'$.tags[3]') in ('cn','china') ) or   
	         ( JSON_VALUE(json_metadata,'$.tags[2]') in ('cn','china') ) or   
	         ( JSON_VALUE(json_metadata,'$.tags[1]') in ('cn','china') ) or   
	         ( JSON_VALUE(json_metadata,'$.tags[0]') in ('cn','china') )
		)
      )
order by 
	created desc
```

主标签在 `category` 字段里定义，但是其它标签则被保存于JSON格式的字符串，所以我们需要通过 JSON_VALUE 这个函数来解析JSON，有时候当被解析的字符串是空或者无效时，[SQL](https://justyy.com/archives/5026)就出错了：

`Error 13609: JSON text is not properly formatted. Unexpected character '.' is found at position 0.`

最简单的[解决方法](https://justyy.com/archives/5589)就是通过布尔短路，在 `JSON_VALUE` 前加入有效性判断：

`ISJSON(json_metadataa) > 0`

正确的版本：

![](https://steemitimages.com/DQmeb3W9Z4K1B6JrEY4kEieqzS6yMy4jXrAHh5fjdTNgQ94/image.png)

如果我们把 ISJSON 放在 JSON_VALUE 之后，起不到布尔短路的作用，因为查询还是会对每组数据（包括无效）进行 JSON_VALUE解析。

![](https://steemitimages.com/DQmVqLNjngjtic7L91tU5GtaQUkj3RHprAVMdKUBdgmW2ob/image.png)


----------

> @justyy 是有名的[晒媳妇](https://steemit.com/cn/@justyy/photography-of-our-love-2017)博主，也是西半球最装X装土豪 (https://justyy.com) 的博主。@justyy 定居英国，一妻两娃，在STEEMIT上开办了历史上中文第一家银行，史称 YY央行，每日赔钱吆喝。
> @justyy 在  @tumutanzi  [大哥](https://steemit.com/cn/@tumutanzi/5ndvpm-steemit) 的介绍下加入 STEEMIT，写些帖子挣些小钱养家糊口。
> @justyy 凡事喜欢折腾，现在在一家英国软件公司里当码农，好听一点叫作算法攻城狮。 @justyy  喜欢结交天下好友，一起YY。
--------------------------------
**@justyy 也是CN 区的点赞机器人**，对优质内容点赞，只要代理给 @justyy 每天收利息（**年化率5%**）并能获得一次至少2倍(VP 200%+)的点赞，大鱼 **@htliao** 都加入了这个计划(530 SP)表示支持。
1. [cn区最低保障系统 上线了!](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy) 
2. [cn区低保计划（鼓励新人）真的适合你么？](https://steemit.com/cn/@justyy/56dta3-cn)
3. 今天(2017-11-15) [银行股东名单](https://steemit.com/cn/@justyy/daily-cn-updates-cnyy2017-11-15)
4. [CN 中文区每日【财富总值】【活跃统计数据】](https://steemit.com/cn/@justyy/cn--2017-11-15)
5. [CN 中文区每日【点赞收益年化率】【YY银行利息统计】](https://steemit.com/cn/@justyy/cn-yy-2017-11-15)
-------------------
- [SteemIt SP Delegation Tool 简易SP代理工具](https://steemit.com/cn/@justyy/steemit-sp-delegation-tool-sp)
- **[Steemit 在线工具，机器人， API接口和教程](https://helloacm.com/tools/steemit-tools/)**
- **[SteemIt Tutorials, Robots, Tools and APIs](https://helloacm.com/tools/steemit/)**

> AD 一波，听说最近 STEEM没有SBD值钱，那赶紧加入 CN区低保银行，成为股东，好处多多，每天收获点赞并且能获得5%的利息（发放SBD），[今日股东列表](https://steemit.com/cn/@justyy/daily-cn-updates-cnyy2017-11-15)

- - -

This page is synchronized from the post: [SteemSQL 教程 - 如何使用 ISJSON 和 JSON_VALUE 函数？SteemSQL Tutorial - How to Fix "JSON text is not properly formated. Unexpected character ''.'' is found at position 0."?](https://steemit.com/@justyy/steemsql-isjson-jsonvalue-steemsql-tutorial-how-to-fix-json-text-is-not-properly-formated-unexpected-character-is-found-at)
