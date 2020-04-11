
---
title: '每天进步一点点：用get_transaction_hex 序列化transaction'
permlink: gettransactionhex-transaction
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-04-11 14:38:09
categories:
- cn
tags:
- cn
- cn-programming
- python
- api
- serialized
thumbnail: 'https://cdn.pixabay.com/photo/2014/05/27/23/32/matrix-356024_960_720.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


之前的文章中介绍了，STEEM/HIVE中的签名是对消息Hash的签名，STEEM/HIVE中的消息就是transaction，但是由于transaction中的条目位置不是固定的，所以仅仅是把消息转化成字符串并签名是行不通的。

![](https://cdn.pixabay.com/photo/2014/05/27/23/32/matrix-356024_960_720.jpg)
(图源 ：[pixabay](https://pixabay.com/))


解决这个问题的办法就是对消息当中的内容进行序列化(serialized)，无论transtion中内容位置如何变化，并不影响最终生成的二进制串的结果。

然而序列化(serialized)是一个很麻烦的事情，玩STEEM已经三四年了，我还没有把这块搞清楚。不过学习EOS和BTS相关内容的时候，知道两者都可以通过RPC API获取transtion序列化的结果。

# get_transaction_hex

好在，STEEM/HIVE当中也有类似的API，那就是：
>`condenser_api.get_transaction_hex`
Returns a hexdump of the serialized binary form of a transaction.

或者使用`database_api.get_transaction_hex`两者本质是一样的，只是暴露在不同的API接口中。

这个API的使用方法和其它的并无什么本质区别，所以按着我们以往使用方法使用即可。

同样以之前我们示例中的以[transaction](https://hiveblocks.com/tx/2e3091807ff1d25630d27815f8605f270f913f8d)为例：
>![image.png](https://images.hive.blog/DQmUsSQEy3zVbWeiQM5cJhPMzZLNyQusZ7n9xYkBsAtgTu7/image.png)

在获取这个tx，我们得到类似如下的数据：
>![image.png](https://images.hive.blog/DQmQY8CmLpLTC8YSEEsyE4eMgxFL1wQFRcrtGoXwztJqrfS/image.png)

因为block_num、transaction_id、transaction_num以及signatures内容本身并不参与序列化，所以我们可以把他们去掉（***其实不去掉也无所谓，服务器端会帮我清理***）：
>![image.png](https://images.hive.blog/DQmT5tqPwXNQDyUQLhdJzM2GYznYbpRZo2Yr9JySdWBHzFx/image.png)

然后我们得出如下json数据：
>`{"jsonrpc": "2.0", "method": "condenser_api.get_transaction_hex", "params": [{"ref_block_num": 21449, "ref_block_prefix": 4231435724, "expiration": "2020-04-08T09:44:27", "operations": [["vote", {"voter": "oflyhigh", "author": "deanliu", "permlink": "9fdbg", "weight": 10000}]], "extensions": [], "signatures": []}], "id": 1}`

向RPC节点POST上述数据：
>`curl -s  --data '{"jsonrpc": "2.0", "method": "condenser_api.get_transaction_hex", "params": [{"ref_block_num": 21449, "ref_block_prefix": 4231435724, "expiration": "2020-04-08T09:44:27", "operations": [["vote", {"voter": "oflyhigh", "author": "deanliu", "permlink": "9fdbg", "weight": 10000}]], "extensions": [], "signatures": []}], "id": 1}' https://api.hive.blog`

格式化后的返回结果为：
>![image.png](https://images.hive.blog/DQmbvhgodRPZHwDBfiJwhyii6gej2Rgr64AyX1y1gqY1gf4/image.png)

其中`c953cc9536fcfb9c8d5e0100086f666c7968696768076465616e6c697505396664626710270000`就是我们要的序列化结果啦。

如何验证这个序列化结果是争取的呢？下篇文章我们再做分析。

# 结论

使用这个RPC API会大幅减轻我们客户端程序的编码工作量。

不过这个东西有两个弊端，一个是效率问题，多增加一次网络访问；另外一个就是安全问题，恶意的API节点可以替换内容，发起攻击。

# 相关链接

* https://developers.hive.io/apidefinitions/#condenser_api.get_transaction_hex
* https://hiveblocks.com/tx/2e3091807ff1d25630d27815f8605f270f913f8d

- - -

This page is synchronized from the post: ['每天进步一点点：用get_transaction_hex 序列化transaction'](https://steemit.com/@oflyhigh/gettransactionhex-transaction)
