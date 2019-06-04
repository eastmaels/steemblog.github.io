
---
title: '通过事务ID(transaction id) 获取事务(transaction) / Database API:  get_transaction'
permlink: id-transaction-id-transaction-database-api-gettransaction
catalog: true
toc_nav_num: true
toc: true
date: 2017-06-25 06:42:42
categories:
- cn-programming
tags:
- cn-programming
- cn
thumbnail: https://steemitimages.com/DQmdFCHtL8t3uN2xUef6HYnrTJbqZG6n9Sm8ciy6rw12dXP/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmdFCHtL8t3uN2xUef6HYnrTJbqZG6n9Sm8ciy6rw12dXP/image.png)

# 问题的提出

因为在写一些脚本，需要获取事务的签名部分
而查阅了好多API，发现都是获取事务操作的本身，其中并没有包含签名部分。
这就有点纠结了，我想取出一堆事务的签名，看起来比想象中的要麻烦。

原本计划的程序结构如下：
* 获取带签名的事务列表
* 根据带签名的事务进行下一步处理

现在带签名的事务列表没法获取，我将程序结构修改如下（将第一步分解成两步）：
* 获取事务列表（获取不到签名）
* 遍历每个事务，获取其签名，或者说更新为带签名的事务
* 根据带签名的事务进行下一步处理

第一步获取的事务列表中，包含了***事务ID(transaction_id)***
好了，现在的问题出来了，如何根据不带签名的事务，获得带签名的事务（有点拗口）

# 尝试方法之一

于是我想，能不能用事务ID取得事务呢？
查找API列表，找到这样一个API:
`annotated_signed_transaction get_transaction( transaction_id_type trx_id )const;`
看Y眉清目秀的，应该是个好人吧，就用他了

于是用埋头coding，OMG，出来的神马鬼东西，结果乱的一塌糊涂。
一定是我的姿势不对。

使用CURL直接测试一下吧，随便找了个事务ID
![](https://steemitimages.com/DQmbhjeZVB8WAuPenSpyvVs6uxtEsnzN5BT8GDTqTwRRj9c/image.png)
来一个甜心妹妹给我回复投票的

事务ID(transaction id)是：`5077183fd03e873b7080a0330eb2bf0da4a8a514`
使用CURL测试：
```
curl https://steemd.steemitdev.com --data '{"jsonrpc": "2.0", "method": "call", "params": ["database_api", "get_transaction", ['5077183fd03e873b7080a0330eb2bf0da4a8a514']], "id": 1}'
```

结果返回的是一个空的事务，晕
```
{"id":1,"result":{"ref_block_num":0,"ref_block_prefix":0,"expiration":"1970-01-01T00:00:00","operations":[],"extensions":[],"signatures":[],"transaction_id":"0000000000000000000000000000000000000000","block_num":0,"transaction_num":0}}
```

OMG，我的姿势又不对。空的事务，对我而言又还不如之前缺签名的呢。



# 换一种方法

既然上述的方法无效，那么就想想是否有别的方法？

上边获得事务列表的事务中包含***block ID***
比如上边的例子中，甜心妹妹的投票就包含在block 13116722中
![](https://steemitimages.com/DQmYdVbYgCrQtLkEeWvFCo48ZHm8qHk1F3LeMvnu23RbEDN/image.png)
没错，这个块中包含了20个事务

哎，先别管多少事务了，撸起袖子加油干吧。

* 从事务中获取block ID 13116722
* 通过block ID 获取block
* 从block 中取出事务

获取block 调用的API:
`optional<signed_block_api_obj> get_block(uint32_t block_num)const;`
测试一下，获取block 成功

然而，新的问题来了，block中那么多transactions
如何获取我们想要的transaction呢？比对操作的各个项目？想想就醉了。

最后发现block中事务ID是放一起的***transaction_ids***
而***事务列表transactions*** 中事务的顺序和事务ID在transaction_ids的顺序是一样的
于是就有了如下思路：
* 查询transaction_id在transaction_ids中的index
* 用获得的index去transactions中取出对应的transaction

最终取出来的transaction是这个样子，😭，这才是我想要的东西啊
```
{'expiration': '2017-06-25T01:42:21',
 'extensions': [],
 'operations': [['vote',
                 {'author': 'oflyhigh',
                  'permlink': 're-sweetsssj-happy-birthday-to-me-my-first-birthday-as-a-steemian-20170625t012421385z',
                  'voter': 'sweetsssj',
                  'weight': 500}]],
 'ref_block_num': 9518,
 'ref_block_prefix': 4153056001,
 'signatures': ['20232b570f87e0938c81017b423bbbd1c91b6ecc5d31e1bd7031e0602f4a9d3ba334dce971e4c3f1ab4934b814e44791448aa5e9f415b1ce40c8db24d12fea9fff']}
```

# 结论

尽管我换了一种方法，费劲周折，终于取回了想要的transaction
但是，因为要取回整个block中所有内容，效率极其低下

那么还有什么方法，能用transaction id 获取完整的事务呢？

我在考虑***get_transaction***这个API是真的有BUG还是***我没用对***？
我在github上提交了一个issuse 
https://github.com/steemit/steem/issues/1213
希望是我用的姿势不对吧，这样专家们给出方法后，我就可以快速应用到我的程序中啦。

----
感谢阅读
水平有限，欢迎大家一起讨论，如有谬误，烦请指正

欢迎upvote、resteem以及 following me @oflyhigh 😎
请将我设置成为你的见证人投票代理, 访问 https://steemit.com/~witnesses
 ![](https://steemitimages.com/DQmQhMNaw3fXpHsDM6Jx1bNi732DySj8JQefq9jjQENcosJ/image.png)

- - -

This page is synchronized from the post: [通过事务ID(transaction id) 获取事务(transaction) / Database API:  get_transaction](https://steemit.com/@oflyhigh/id-transaction-id-transaction-database-api-gettransaction)
