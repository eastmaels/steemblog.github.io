
---
title: '每天进步一点点：查看(get_open_orders)与取消订单(limit_order_cancel)'
permlink: getopenorders-limitordercancel
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-05-12 04:50:27
categories:
- cn
tags:
- cn
- cutehive
- cn-programming
- order
- market
thumbnail: 'https://images.hive.blog/DQmPa4AMf1W2MYN7WoXitQmQtjMFzxw5rXkDN7stzaGmMcF/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


之前的文章中，我学习了[如何创建订单](https://hive.blog/hive-105017/@oflyhigh/limitordercreate-limitordercreate2)，尽管有两种方法可以选择，但是最终我还是选择了一个便于理解的。但是新问题来了，订单创建后，我们如何查看？以及如何取消呢？

![image.png](https://images.hive.blog/DQmPa4AMf1W2MYN7WoXitQmQtjMFzxw5rXkDN7stzaGmMcF/image.png)
(图源 ：[pixabay](https://pixabay.com/))

在说到查看与取消之前，我们先来看看`fill_or_kill` & `expiration`两个参数。

# fill_or_kill 

`fill_or_kill` 的意思和字面一样，要么fill(成交)，要么kill(关闭掉)，也就是说我挂单出去，如果能成交就成交，如果不能成交则关闭掉。所以设置`fill_or_kill = True`

比如我尝试挂一个已0.888 HBD价格卖一个HIVE的订单，并设置`fill_or_kill = True`：
>![image.png](https://images.hive.blog/DQmUWJtNPnigLoGdhQ5Hvug1uVbZepvkAnUyWCxyfP2FwLN/image.png)

我会马上得到如下返回信息：
>`Assert Exception:filled: Cancelling order because it was not filled.`

所以`fill_or_kill`也可以算作取消订单的一种手段。

# expiration

`expiration`其实更不用多说了，字面意思就是***过期***。

有就是说我们下单的时候，可以指定这个订单什么时候过期，比如1分钟内？1个小时？3天？甚至可以是28天以内的任意一个时间点。

为什么是28天而不是30天呢？我也不懂，反正代码里这么限制的，估计和memo最大长度2048一样。
>`#define STEEM_MAX_LIMIT_ORDER_EXPIRATION     (60*60*24*28) // 28 days`

总之，`expiration` 可以让订单到期时自动取消，算是取消订单的另外一种手段。

# 查看订单

现在我们已经掌握了两种自动取消订单的手段，但是其实我们主要想要的是手动取消订单。然而说到手动取消之前，我们一定要学会如何查看订单，否则都不知道自己有哪些订单，谈何取消呢？

查看订单可以用`condenser_api.get_open_orders`也可以用`database_api.list_limit_orders`，以第一种为例，查看我自己的订单命令如下：
>`curl -s --data '{"jsonrpc":"2.0", "method":"condenser_api.get_open_orders", "params":["oflyhigh"], "id":1}' https://api.openhive.network`

如果当前有存在的订单，那么就会返回：
>{"jsonrpc":"2.0","result":[{"id":4273895,"created":"2020-05-12T04:03:36","expiration":"2020-05-12T14:03:35","seller":"oflyhigh","orderid":3,"for_sale":1000,"sell_price":{"base":"1.000 HIVE","quote":"0.888 HBD"},"real_price":"0.00000000000000000","rewarded":false}],"id":1}

好吧，我又被base/quote绕晕了，不过不用理会，只要知道这是一个还存在的订单就好。

除了`condenser_api.get_open_orders`，另外一种查看订单的方法是使用`database_api.list_limit_orders`，这种方法略复杂，用于查找自己的订单，大致示例如下：
>`curl -s --data '{"jsonrpc":"2.0", "method":"database_api.list_limit_orders", "params": {"start":["oflyhigh",0], "limit":10, "order":"by_account"}, "id":1}' https://api.openhive.network`

需要注意的是，如果自己的订单不足limit的数量，它会接着输出其它人的订单，傻得不要不要的，所以还需要自己处理一下，这里就不再赘述了。

# 取消订单：limit_order_cancel

扯了大半天，终于到正题了，其实取消订单操作是超级简单的。

取消订单的操作大致长这样：
```
op_limit_order_cancel = ['limit_order_cancel',{
    'owner': '',
    'orderid': 0,
    }]
```

代码大概这样：

>`op[1]['owner'] = owner`
>`op[1]['orderid'] = orderid`
>`trx.append_op(op)`
>`trx.sign_digest(wif)`
>`trx.broadcast()`

封装成函数后调用一下，这样就把我们之前创建的指定orderid的订单取消了：
>![image.png](https://images.hive.blog/DQmYW8wvx4r41tX7yiRa1A9d8mLZj5FFqNiJho4kxAwWmwQ/image.png)

https://hiveblocks.com/ 上可以查到如下信息，证明操作是成功滴：
>![image.png](https://images.hive.blog/DQmQbVEbiNa7CWmbytXv3qDvegNk2isbPVHrvbjCUa1kFAq/image.png)

# 前尘往事

说到取消订单，想起我以前跑过一个傻傻的自动交易机器人，帮我赔了好多钱。

后来我狠心把它杀掉之后，之前遗留的订单在继续成交，持续帮我赔钱。然后我研究如何批量取消订单，费了了好大的功夫。

![image.png](https://images.hive.blog/DQmT9mTXFkWDajUZpn8ZzPcPZ23L8AePY3q6sQNe9fRDjTC/image.png)
(图源 ：[pixabay](https://pixabay.com/))

现在再回头看，掌握了这篇文章中学到的本领，取消订单就是小CASE啦。哎，想念我可怜的交易机器人。

# 相关链接

* [每天进步一点点：limit_order_create 以及 limit_order_create2](https://hive.blog/hive-105017/@oflyhigh/limitordercreate-limitordercreate2)

- - -

This page is synchronized from the post: ['每天进步一点点：查看(get_open_orders)与取消订单(limit_order_cancel)'](https://steemit.com/@oflyhigh/getopenorders-limitordercancel)
