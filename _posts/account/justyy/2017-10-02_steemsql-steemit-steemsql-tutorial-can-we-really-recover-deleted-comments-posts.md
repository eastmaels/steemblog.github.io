
---
title: 'STEEMSQL 系列之  STEEMIT真的可以恢复删除的文章或评论么？  STEEMSQL Tutorial - Can we Really Recover Deleted Comments/Posts on STEEMIT?'
permlink: steemsql-steemit-steemsql-tutorial-can-we-really-recover-deleted-comments-posts
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-10-02 05:57:33
categories:
- cn
tags:
- cn
- cn-programming
- steemsql
- steemstem
- steemdev
thumbnail: https://steemitimages.com/DQme2M233jj5CyfkiVefa4n8yPFC8ZyywjE1Z9QMrtcRpjM/image.png
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
- [SteemSQL Tutorial: How to Get Random Posts on SteemIt?](https://steemit.com/cn/@justyy/steem-sql-steemsql-tutorial-how-to-get-random-posts-on-steemit)
- [SteemSQL Tutorial: How to Get Authors Order By Potential Payout in Last 7 days?](https://steemit.com/cn/@justyy/steem-sql-7-cn)
- [SteemSQL Tutorial: How to Get Historic Posts of Today on SteemIt?](https://steemit.com/cn/@justyy/steem-sql-steemsql-tutorial-how-to-get-historic-posts-of-today-on-steemit)
- [SteemSQL Tutorial: How to Calculate Monthly Income on STEEMIT?](https://helloacm.com/steemsql-tutorial-what-is-your-monthly-income-on-steemit/)

@nationalpark posted [a simple SQL](https://steemit.com/cn/@nationalpark/steemsql) to list the deleted comments (which can be posts as well), however, the SQL output information is quite limited. The STEEMSQL table has the following structure:

![](https://steemitimages.com/DQme2M233jj5CyfkiVefa4n8yPFC8ZyywjE1Z9QMrtcRpjM/image.png)

In my case, it lists the following 5 comments I deleted (comments permlink start with `re-`)

![](https://steemitimages.com/DQmREL1mZjL3uiTX1wqT9PZnMgfQq8BzYQsfZaJmsycW5Tk/image.png)

As you probably noticed, the `tx_id` acts as a foreign key to `Transactions` table:

![](https://steemitimages.com/DQmYYqHxCzhyVaWW4mpDPKtXDLJVMQHyWJFbLv8NXqHZUSu/image.png)

And, this table stores the basic activities in the steem blockchain e.g. like account update, funds transfer, votes etc all of these are represented as 'transactions'.

The table `Transactions` can further be linked to `Blocks` via `block_num` key.

![](https://steemitimages.com/DQmcej7ws3vfSVCjtKwqpWMmKh5L82GHMQzB7zvKNuJixWm/image.png)

So, if we link all these three tables, what data can we get about the deleted-stuffs that people don't want others to see?

```
select 
	TxDeleteComments.tx_id, 
	TxDeleteComments.permlink,
	TxDeleteComments.timestamp,
	Transactions.block_num,
	Transactions.transaction_num,
	Transactions.ref_block_num,
	Transactions.ref_block_prefix,
	Transactions.expiration,
	Transactions.type,
	Blocks.previous,
	Blocks.witness,
	Blocks.witness_signature,
	Blocks.transaction_merkle_root
	
from 
	TxDeleteComments, 
	Transactions, 
	Blocks 
	
where 
	TxDeleteComments.author = 'justyy' and
	TxDeleteComments.tx_id = Transactions.tx_id and
	Transactions.block_num = Blocks.block_num
	
```

The results show:

![](https://steemitimages.com/DQmWXfCTy9ESZAxbTSV2mAB71NEVKusPFKEt5NrkRPCtEVK/image.png)

Can these [hashes](https://helloacm.com/simple-and-fast-hash-functions-in-delphi/) (transaction IDs, block numbers) be used to recover the deleted comments/posts in the STEEM blockchain e.g. from the witness servers? I don't know.. as currently I don't see such possibility simply using STEEMSQL.

Do you have other better ways? please share yours by commenting below. Innovative (better) solutions will be rewarded with 1 SBD.

![](https://cdn.pixabay.com/photo/2016/12/09/18/30/database-schema-1895779_960_720.png)
*Image Credit: Pixabay.com*

感谢 @arcange 创造了 STEEMSQL!

STEEM SQL 系列：
- [STEEM SQL 系列之 随机返回是怎么实现的？](https://steemit.com/cn/@justyy/steem-sql-steemsql-tutorial-how-to-get-random-posts-on-steemit)
- [STEEM SQL 系列之 如何获取最近7天 CN 区用户发贴量，点赞数和估计收益值](https://steemit.com/cn/@justyy/steem-sql-7-cn)
- [STEEM SQL 系列之 历史上的今天怎么实现的？](https://steemit.com/cn/@justyy/steem-sql-steemsql-tutorial-how-to-get-historic-posts-of-today-on-steemit)
- [STEEM SQL 系列之 每个月能挣多少?](https://justyy.com/archives/5370)

@nationalpark 兄在 [这篇帖子](https://steemit.com/cn/@nationalpark/steemsql) 里列出了被删除评论或者文章所存的STEEMSQL 语句。老实说，我很久之前也注意过这个表，但是当时还在纳闷说怎么没有列出我比较关心的，被删除内容的原文。这个 `TxDeleteComments` 意思就是被删除的评论表，结构如下：

![](https://steemitimages.com/DQme2M233jj5CyfkiVefa4n8yPFC8ZyywjE1Z9QMrtcRpjM/image.png)

我把我的ID代了进去，发现我曾经删除过5个评论，评论的 `permlink` 以`re-` 开始。

![](https://steemitimages.com/DQmREL1mZjL3uiTX1wqT9PZnMgfQq8BzYQsfZaJmsycW5Tk/image.png)

我们还注意到，`tx_id` 就是 `Transactions` 表的外键。

![](https://steemitimages.com/DQmYYqHxCzhyVaWW4mpDPKtXDLJVMQHyWJFbLv8NXqHZUSu/image.png)

这个`Transactions` 表应该存着STEEM 区块链上所有发生的动作，包括转帐、帐户更新、投票等。同时`Transactions` 这个表可以通过 `block_num` 这个外键联结到 `Blocks`块表。

![](https://steemitimages.com/DQmcej7ws3vfSVCjtKwqpWMmKh5L82GHMQzB7zvKNuJixWm/image.png)

然后我们很容易的把这三个表串起来

```
select 
	TxDeleteComments.tx_id, 
	TxDeleteComments.permlink,
	TxDeleteComments.timestamp,
	Transactions.block_num,
	Transactions.transaction_num,
	Transactions.ref_block_num,
	Transactions.ref_block_prefix,
	Transactions.expiration,
	Transactions.type,
	Blocks.previous,
	Blocks.witness,
	Blocks.witness_signature,
	Blocks.transaction_merkle_root
	
from 
	TxDeleteComments, 
	Transactions, 
	Blocks 
	
where 
	TxDeleteComments.author = 'justyy' and
	TxDeleteComments.tx_id = Transactions.tx_id and
	Transactions.block_num = Blocks.block_num
	
```

得到的信息是不是有点多？就问你怕不怕。

![](https://steemitimages.com/DQmWXfCTy9ESZAxbTSV2mAB71NEVKusPFKEt5NrkRPCtEVK/image.png)

当然，还是没有得到我们所关心的，是不是根据这些[HASH](https://justyy.com/archives/4987)值(tx_id,  block_id  等)就能到见证人机器上恢复这些数据（理论上）？请大神指点： @abit   @oflyhigh  感谢！

--------------------------------
**@justyy 是CN 区的点赞机器人**，对优质内容进行点赞，只要代理给 @justyy 每天收利息(100 SP 每天0.04 SBD)并且能获得一次相应至少2倍的点赞，可以认为是VP 200%+ ，详细请看：
- [cn区最低保障系统 上线了!](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy) 
- [cn区低保计划还会继续下去](https://justyy.com/archives/5368)
- [cn区低保计划（鼓励新人）真的适合你么？](https://steemit.com/cn/@justyy/56dta3-cn)
-----
- [STEEM SQL 系列之 随机返回是怎么实现的？](https://justyy.com/archives/5413)
- [SteemSQL Tutorial: How to Get Random Posts on SteemIt?](https://helloacm.com/steemsql-tutorial-how-to-get-random-posts-on-steemit/)
- [恢复删除的文章](https://justyy.com/archives/5420)
- [Recover Deleted Comments/Posts](https://helloacm.com/steemsql-tutorial-can-we-really-recover-deleted-commentsposts-on-steemit/)

> @justyy 是 [https://justyy.com](https://justyy.com/) 的博主 - 西半球知名的“土豪”博主。在大哥 @tumutanzi 的带领下加入了 [STEEMIT](https://steemit.com/cn/@tumutanzi/66fqyu-steemit)。

- - -

This page is synchronized from the post: [STEEMSQL 系列之  STEEMIT真的可以恢复删除的文章或评论么？  STEEMSQL Tutorial - Can we Really Recover Deleted Comments/Posts on STEEMIT?](https://steemit.com/@justyy/steemsql-steemit-steemsql-tutorial-can-we-really-recover-deleted-comments-posts)
