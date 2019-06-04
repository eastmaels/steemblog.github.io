
---
title: '使用pymssql以及STEEMSQL的一点经验'
permlink: pymssql-steemsql
catalog: true
toc_nav_num: true
toc: true
date: 2017-08-12 03:47:12
categories:
- cn
tags:
- cn
- steemsql
- cn-programming
- steemdev
- python
thumbnail: https://steemitimages.com/DQmeLZD8MonT9kRXc37bmCEL5xQcG6y5SeRDPFdVn5EGsPB/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


昨天写了个STEEMSQL相关的帖子
* [第一次使用STEEMSQL查询谷哥点名数据](https://steemit.com/cn/@oflyhigh/steemsql)

主要介绍了***如何安装pymssql***以及用***中文关键字查询数据***
因为我对MSSQL以及pymssql都不熟悉，所以使用过程中遇到了很多问题，限于篇幅，昨天没有过多讲述，今天整理一下，希望学习pymssql或者想使用STEEMSQL的朋友少走一些弯路。

![](https://steemitimages.com/DQmeLZD8MonT9kRXc37bmCEL5xQcG6y5SeRDPFdVn5EGsPB/image.png)

#### 查询所有数据库名 / Query all database names

昨天我们帖子中说了
SteemSQL 官网地址： http://steemsql.com/
但是很遗憾上边的链接信息不全，没有Database的信息

其实这不是大问题，因为数据库信息是可以自行获取的，查询语句如下：
`SELECT Name FROM Master..SysDatabases ORDER BY Name`

示例代码
```
import pymssql
conn = pymssql.connect(host ="sql.steemsql.com",user="steemit",password="steemit", charset="utf8")
cur = conn.cursor()
cur.execute("SELECT Name FROM Master..SysDatabases ORDER BY Name")
rows = cur.fetchall()
for row in rows: print(row[0])
```

结果如下：

```
DBSteem
master
tempdb
```
好了，DBSteem就是我们要的数据库啦。

(测试了一下，不选择数据库，居然也可以执行正常的查询，比如查询Comments表下的数据，莫非有默认设置?)

#### 查询数据库中所有数据表 / Query all data tables in the database

我们知道了DBSteem是我们要用到的数据库，但是这个库下边都有哪些表呢？

查询语句如下：
`SELECT Name FROM DatabaseName..SysObjects Where XType='U' ORDER BY Name`
* XType='U':表示所有用户表;
* XType='S':表示所有系统表; 

试着查一下DBSteem下的用户表
`cur.execute("Select Name From DBSteem..SysObjects Where XType='U' order By Name")`
(查询当前数据库可以省略路径`DBSteem..`)

结果如下：
>Accounts
Blocks
Comments
Tokens
Transactions
TxAccountCreates
TxAccountRecovers
TxAccountUpdates
TxAccountWitnessProxies
TxAccountWitnessVotes
TxClaimRewardBalances
TxComments
TxCommentsOptions
TxConverts
TxCustoms
TxDelegateVestingShares
TxDeleteComments
TxEscrowApproves
TxEscrowDisputes
TxEscrowReleases
TxEscrowTransfers
TxFeeds
TxLimitOrders
TxPows
TxTransfers
TxVotes
TxWithdraws
TxWithdrawVestingRoutes
TxWitnessUpdates
VOAuthorRewards
VOCurationRewards
VOFillConvertRequest
VOFillOrders
VOFillVestingWithdraws
VOInterests
VOShutdownWitnesses

这样我们就知道哪些表可用啦。

#### 查询数据表中的字段 / Query fields in a data table

知道数据库了，知道数据表了，我们还要知道表中都有哪些字段，才能方便我们查询，不是吗？

查询语句如下：
`SELECT Name FROM DatabaseName..SysColumns WHERE id=Object_Id('TableName') `

来试试Comments表
`cur.execute("SELECT Name FROM DBSteem..SysColumns WHERE id=Object_Id('Comments')")`
(查询当前数据库下的表可以省略路径`DBSteem..`)

结果如下：
>abs_rshares
active
active_votes
allow_curation_rewards
allow_replies
allow_votes
author
author_reputation
author_rewards
beneficiaries
body
body_language
body_length
cashout_time
category
children
children_abs_rshares
created
curator_payout_value
depth
dirty
ID
json_metadata
last_payout
last_update
max_accepted_payout
max_cashout_time
mode
net_rshares
net_votes
parent_author
parent_permlink
pending_payout_value
percent_steem_dollars
permlink
promoted
reblogged_by
replies
reward_weight
>root_comment
root_title
title
total_payout_value
total_pending_payout_value
total_vote_weight
TS
url
vote_rshares

#### 查询数据表中的字段详细信息 / Query fields details in a data table


有了上述基础，我们可以进一步查询字段的详细信息
以***TxComments***表为例:
`cur.execute("SELECT SysColumns.Name,SysTypes.Name,SysColumns.IsNullable,SysColumns.Length FROM SysColumns, SysTypes WHERE SysColumns.XUserType = SysTypes.XUserType AND SysColumns.Id = object_id('TxComments')")`

结果如下：

```
ID              int             0       4
tx_id           int             0       4
author          varchar         0       50
permlink        varchar         0       512
parent_author   varchar         0       50
parent_permlink varchar         0       512
title           nvarchar        0       -1
body            nvarchar        0       -1
json_metadata   varchar         0       -1
timestamp       datetime        0       8
```

# 结论 / Conclusions

我们探讨了如何通过SQL语句
* 查询数据库名 /  Query all database names
* 查询数据库中所有数据表 /  Query all data tables in the database
* 查询数据表中的字段 / Query fields in a data table
* 查询数据表中的字段详细信息 / Query fields details in a data table

通过了解这些信息，便于我们更好的实现我们的查询程序。
图形界面的程序，应该都会内置这些功能，大家不想深入了解的话，直接使用图形界面程序最方便了。

----

以上内容仅供参考，如有错漏欢迎指正。

- - -

This page is synchronized from the post: [使用pymssql以及STEEMSQL的一点经验](https://steemit.com/@oflyhigh/pymssql-steemsql)
