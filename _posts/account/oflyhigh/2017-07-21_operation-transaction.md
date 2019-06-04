
---
title: '将多个操作(operation)放入一个事务中(transaction)'
permlink: operation-transaction
catalog: true
toc_nav_num: true
toc: true
date: 2017-07-21 11:21:18
categories:
- cn
tags:
- cn
- cn-programming
- python
thumbnail: https://steemitimages.com/DQmXwkJ451C9t7oxds1Wj4xXvjpc74t8mE1YcikVd1ceD5A/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


# 操作、事务、区块 以及区块链

先来简单介绍一下操作、事务以及区块
* ***操作(operation)***： 你在steemit上的每一项活动，发帖、回复、点赞、转账等都是操作
* ***事务(transaction)***: 事务中包含一个或者几个操作(可能是不同人不同种类操作)
* ***区块(block)***: 每个区块中可能包含一组(0组)或者N组事务
* ***区块链(blockchain)***: 一系列不断增加（3秒每个)的区块，就构成了STEEM区块链。

亦即： 
区块链由区块组成、区块中包含事务，事务中包含操作，操作是我们在STEEM上活动的基本单位。


# STEEMIT 一个事务中两个操作的例子

![](https://steemitimages.com/DQmXwkJ451C9t7oxds1Wj4xXvjpc74t8mE1YcikVd1ceD5A/image.png)
[Image source](http://www.itworks-inc.com/wp-content/uploads/2015/12/transaction-breakdown-report.jpg)

以发帖为例，我们发表帖子，可以选择发帖的同时投票，也可以选择不投票。
![](https://steemitimages.com/DQmfBVvqCxhdQRnj7Towvm2nmujYdTPZzd6xokJdjTSsLBR/image.png)
如果勾选了箭头所示的单选框，就会在发帖的同时给帖子投票。

发帖、投票是两个独立的操作，
***发帖的同时给帖子投票就是把两个操作放到一个事务中***

![](https://steemitimages.com/DQmPK6Koznda5t6MPkWfY9eufbz6ZquZ5QpyEG8gxUn2zzG/image.png)
以我的帖子为例，发帖和投票在一个事务中***有相同的transaction_id***

如果我们在steemd上打开这个transaction就会看到里边有两项操作，发帖和投票。

# Python 库处理发帖并投票的实现

Steemit Python 库也支持发帖的同时投票。
如果设置了对应参数，则在***发帖操作***以外
```
        post_op = operations.Comment(
            **{"parent_author": parent_author,
               "parent_permlink": parent_permlink,
               "author": author,
               "permlink": permlink,
               "title": title,
               "body": body,
               "json_metadata": json_metadata}
        )
        ops = [post_op]
```

额外增加了***投票操作***
```
        if self_vote:
            vote_op = operations.Vote(
                **{'voter': author,
                   'author': author,
                   'permlink': permlink,
                   'weight': 10000,
                   }
            )
        ops.append(vote_op)
```

通过这个例子可知，Python库是支持把多个操作放到一个事务中的

# 将多个操作放到一个事务中的例子

Steem 官方Python 库同时提供了一个将多个操作放到一个事务中的例子
详情可以参考这里：

https://github.com/steemit/steem-python/blob/master/docs/examples.rst

>Batching Operations

>Most of the time each transaction contains only one operation (for example, an upvote, a transfer or a new post). We can however cram multiple operations in a single transaction, to achieve better efficiency and size reduction.

>This script will also teach us how to create and sign transactions ourselves.

代码太长，感兴趣的朋友自己去看吧。

# 我的测试

我修改了这个例子，并针对我的一个回复进行测试：

![](https://steemitimages.com/DQmXLrkPf5oLz9V4LqjN46v2vGJUh2YuJggZM4q4RXmE11e/image.png)
(两个操作在一个事务中，相同的transaction_id)

![](https://steemitimages.com/DQmSkpmhyHzVhK6NaKkYfwE2krG9wwBWQmhtrLmZuPQs86R/image.png)
(两个操作在一个事务中，详情)

# 结论

使用使用官方Python库，***将多个操作(operation)放入一个事务中(transaction)是切实可行的***。

- - -

This page is synchronized from the post: [将多个操作(operation)放入一个事务中(transaction)](https://steemit.com/@oflyhigh/operation-transaction)
