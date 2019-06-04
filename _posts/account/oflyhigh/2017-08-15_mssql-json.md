
---
title: '请MSSQL高手指点一下JSON的问题'
permlink: mssql-json
catalog: true
toc_nav_num: true
toc: true
date: 2017-08-15 14:43:18
categories:
- cn
tags:
- cn
- cn-programing
- json
- mssql
- steemsql
thumbnail: https://steemitimages.com/DQmezDAf4ECH7M3Mu3FW5osgueg8CAW3cUEZWF4dRscxZVp/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


@jubi 小友今天与我探讨如何使用STEEMSQL查询符合条件的帖子用了哪些标签。

有关STEEMSQL的介绍以及一些我学习的记录，可以参考：
* [第一次使用STEEMSQL查询谷哥点名数据](https://steemit.com/cn/@oflyhigh/steemsql)
* [使用pymssql以及STEEMSQL的一点经验](https://steemit.com/cn/@oflyhigh/pymssql-steemsql)

![](https://steemitimages.com/DQmezDAf4ECH7M3Mu3FW5osgueg8CAW3cUEZWF4dRscxZVp/image.png)

# 读取标签

他问的这个问题，我并不以为是个难题，所以爽快的答应了下来。

在STEEMDATA中TAGS数据已经解析好了，我们可以直接拿到，我以为STEEMSQL也是如此，结果却并不是这么回事。Comments数据表中不存在TAGS字段，仅有json_metadata字段：
`json_metadata   varchar         0       -1`
以[这篇帖子](https://steemit.com/cn/@oflyhigh/pymssql-steemsql)为例, json_metadata数据是这个样子
![](https://steemitimages.com/DQmbwsjDj7742u7EqLg77D317C1b3HwdKLGGJw77TzXGXzL/image.png)
在数据库中作为字符串存储。


所以要把tags数据拿出来，我们需要对这部分数据进行解析，幸运的是SQL Server 从2016版本开始，加入了JSON的支持。
详情可以参考： [JSON Functions (Transact-SQL)](https://docs.microsoft.com/en-us/sql/t-sql/functions/json-functions-transact-sql)
https://docs.microsoft.com/en-us/sql/t-sql/functions/json-functions-transact-sql

经过对上述网页以及其内相关链接的学习，我觉得我们应该用
`JSON_QUERY 	Extracts an object or an array from a JSON string.`

`cur.execute("SELECT title, JSON_QUERY(json_metadata, '$.tags') as tags FROM Comments WHERE author= 'oflyhigh' and title like N'%区块链%'")`

![](https://steemitimages.com/DQmV9edXeVbfHhM4wLs122uNyEyubrEmCKUvGsxitHmBeYh/image.png)
哪里不对？
我期望返回tags应该类似`['literature', 'poem', 'cn']`，这样的列表
结果却是：  `'["literature","poem","cn"]'`这样的字符串！吐血！

看这个文档：
https://docs.microsoft.com/en-us/sql/t-sql/functions/json-query-transact-sql
上边介绍说的是：`Extracts an object or an array from a JSON string. `
底下却又说：`Returns a JSON fragment of type nvarchar(max). `

例子中，返回的也是列表
![](https://steemitimages.com/DQmRCDVjvCWiSwYDmsouQnVinx1GErRLtpEKBabGhbErYqc/image.png)

到底应该返回啥，我有点方。

但是问题总得要解决是吧，SQL我尝试了各种方法实在没辙，我想到的方法就是在程序这端解决，比如这样：
![](https://steemitimages.com/DQmd8MtiCx4BMid1B4bGi5ReMQHxgFQxwY1HLiSW87AY2kR/image.png)


# 更进一步

这算是解答了 @jubi 小友的问题， 但是依然有以下疑问。

* 如何用SQL直接返回tags列表, 例如：`['literature', 'poem', 'cn']`
* 如果想查询包含指定tag的文章，该如何操作？比如查询包括`cn` tag 的文章。

因为json_metadata是字符串存储，所以对于问题二， jubi小友提出使用***`like '%cn%' `***或者正则匹配等方式，这也不失为一个好办法。或者我们还可以用***`JSON_QUERY(json_metadata, '$.tags') like '%cn%'`***缩小搜索范围，但是能否有精确匹配的查询方法呢？如果JSON_QUERY返回的是列表，我或许可以想些办法试试，但是返回的是字符串，我只好跪了。

期望各位程序大牛， SQL大牛不吝赐教，不胜感激。

# 参考文章
* https://docs.microsoft.com/en-us/sql/t-sql/functions/json-functions-transact-sql
* https://docs.microsoft.com/en-us/sql/t-sql/functions/json-query-transact-sql
* https://docs.microsoft.com/en-us/sql/relational-databases/json/json-data-sql-server
* https://docs.microsoft.com/en-us/sql/relational-databases/json/validate-query-and-change-json-data-with-built-in-functions-sql-server
* https://www.sqlshack.com/native-json-support-in-sql-server-2016/
* https://blogs.oracle.com/jsondb/the-new-sqljson-query-operators-part2:-jsonquery  (From Oracle)

- - -

This page is synchronized from the post: [请MSSQL高手指点一下JSON的问题](https://steemit.com/@oflyhigh/mssql-json)
