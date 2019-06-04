
---
title: '学习一下BTS的远程过程调用 / Learn the remote procedure call of BTS'
permlink: bts-learn-the-remote-procedure-call-of-bts
catalog: true
toc_nav_num: true
toc: true
date: 2017-11-02 10:58:00
categories:
- bitshares
tags:
- bitshares
- bts
- api
- rpc
- cn
thumbnail: https://steemitimages.com/DQmbetK9MHQbWok8gPBTMkvuJQe6meQP5rRKdXQbwgvCUc5/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


先庆祝一下，昨天我终于跑步上车了，然后——***翻车了***😭

有没有被我忽悠一起上车的朋友啊，千万不要感谢我（谁丢的西红柿？谁丢的臭鸡蛋？不许再丢了）

不过是谁说的来着，不能计较一城一池的得失。如果BTS过段时间涨到5元10元，再回头看这一两毛钱的涨跌，不过是毛毛细雨。
***（注：我给自己打气呢，不构成投资建议啊）***

好了言归正传，既然已经上车了，就安心好好玩，记录并汇报一下这两天的对BTS RPC的学习。

![](https://steemitimages.com/DQmbetK9MHQbWok8gPBTMkvuJQe6meQP5rRKdXQbwgvCUc5/image.png)

----

# BTS RPC

#### 工作流程
![](https://steemitimages.com/DQmcdz5ZUg6s5c6WX6jBYbMsq8pSK7L7MwcBBdAYjfUhS6c/image.png)
（来自：http://docs.bitshares.org/api/index.html)

#### 文档地址

http://docs.bitshares.org/api/rpc.html

#### 调用格式
```
{
 "jsonrpc": "2.0",
 "id": 1
 "method": "get_accounts",
 "params": [["1.2.0", "1.2.1"]],
}
```
如果你有接触过STEEM的RPC调用，就会发现二者非常相似。

# 调用示例
`curl --data '{"jsonrpc": "2.0", "method": "get_accounts", "params": [["1.2.0", "1.2.1"]], "id": 1}' http://127.0.0.1:8090/rpc`

因为我没在本地装节点（确切地说是我不会弄啊），所以我直接使用了公共节点:
`curl --data '{"jsonrpc": "2.0", "method": "get_accounts", "params": [["1.2.0", "1.2.1"]], "id": 1}' https://openledger.hk/ws`

返回了如下数据(部分)：
![](https://steemitimages.com/DQmYGpNjJ36Mzons6H8jHxyA4QZruqr22hJDkvbrnvrHtig/image.png)
(好吧，其实没法看，之后在详细分析)

好吧，尽管一知半解，但是总算明白一点点了。

# Database API

上述调用中的***`method`***和***`params`***都是在API中被定义，比如说***`Database API`***。

#### 文档地址
http://docs.bitshares.org/api/database.html

#### API示例
以之前我们通过***`curl`***发起的get_accounts调用为例，在***`Database API`***中定义如下：
![](https://steemitimages.com/DQmcktgDQ5qQD7dFekMnnyy7g2tnRwM5iknem195GKxLkK7/image.png)


# 实际的例子

有了上述关于***`BTS RPC`***以及***`Database API`***介绍，我们就可以拿来做一些实际的工作了，比如查查我的账户下有多少资产余额？

原本以为，像STEEM一样，读取账户信息就会读到资产余额信息，但是BTS与STEEM还有有些不同。

用***`get_account_by_name`***读出来的并不包含资产余额信息
`curl -s --data '{"jsonrpc": "2.0", "method": "get_account_by_name", "params": ["oflyhigh"], "id": 1}' https://openledger.hk/ws`
![](https://steemitimages.com/DQmbYz83kqPFsDzciNHcaFW23ZxHWi1GAGR8NXsuooABD7R/image.png)
（注：***`get_full_accounts`***返回的内容包含余额信息）

所以我们要用***`get_named_account_balances`***来读取资产
`curl -s --data '{"jsonrpc": "2.0", "method": "get_named_account_balances", "params": ["oflyhigh", []], "id": 1}' https://openledger.hk/ws`
![](https://steemitimages.com/DQmTvyzpDe2eL2jBSUjkw7mohZgwos1LUw8ydp2LLmRP56k/image.png)
哇，我有点激动，这是啥东西，我怎么有这么多，我已经数不清楚有多少位了。

不过貌似激动的有点早，让我来看看这是啥资产，调用***`get_objects`***
`curl -s --data '{"jsonrpc": "2.0", "method": "get_objects", "params": [["1.3.0"]], "id": 1}' https://openledger.hk/ws`
![](https://steemitimages.com/DQmTxybZqbWiz3XUxWTZjAzeWC3FvuaLS1984CuCwCBo4Ep/image.png)
原来就是BTS，精度是五位，也就是我其实并没有几个😭
（从易读性来将，应该调用***`get_assets`***，其实本质都一样啦）

# 总结

通过上边的学习和示例，大致了解了BTS RPC调用的机制。还有很多东西要去学习和了解，就不多介绍啦。

既然币价还没飞起来，就好好学习吧。 币价迟早会飞起来的，我的预测一贯很准的😭。


# 参考文档
* http://docs.bitshares.org/bitshares/index.html
* http://docs.bitshares.org/api/index.html
* http://docs.bitshares.org/api/rpc.html
* http://docs.bitshares.org/api/database.html
* http://docs.bitshares.org/development/blockchain/objects.html

- - -

This page is synchronized from the post: [学习一下BTS的远程过程调用 / Learn the remote procedure call of BTS](https://steemit.com/@oflyhigh/bts-learn-the-remote-procedure-call-of-bts)
