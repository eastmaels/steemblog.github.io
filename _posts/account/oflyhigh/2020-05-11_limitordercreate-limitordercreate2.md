
---
title: '每天进步一点点：limit_order_create 以及 limit_order_create2'
permlink: limitordercreate-limitordercreate2
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-05-11 06:13:36
categories:
- cn
tags:
- cn
- cutehive
- cn-programming
- market
- order
thumbnail: 'https://cdn.pixabay.com/photo/2018/09/21/07/44/buy-3692490_960_720.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


之前说到Power Up，并且[实现了Power UP 功能](https://hive.blog/hive-105017/@oflyhigh/transfertovesting-power-up)，然而Power UP需要有流动性HIVE才行，如果只有HBD，那么就需要用到内部市场来交易成HIVE了。

![](https://cdn.pixabay.com/photo/2018/09/21/07/44/buy-3692490_960_720.jpg)
(图源 ：[pixabay](https://pixabay.com/))

同样，之前的交易我是用cli_wallet完成的，命令格式为：
>`create_order(string owner, uint32_t order_id, condenser_api::legacy_asset amount_to_sell, condenser_api::legacy_asset min_to_receive, bool fill_or_kill, uint32_t expiration, bool broadcast)`

# limit_order_create2

那么自己实现一个create_order功能好不好呢？于是看了一下，发现其实并不难，首先我是用 `limit_order_create2`来实现的，因为我总觉得所谓的`2`，一定是升级版本，一定比`1`要强。

`limit_order_create2` operation大致长成这样：
```
op_limit_order_create2 = ['limit_order_create2',{
    'owner': '',
    'orderid': 0,
    'amount_to_sell': {},
    'exchange_rate': {
          'base': '',
          'quote': ''},
    'fill_or_kill':True,
    'expiration':''
    }]
```
其中`amount_to_sell`是要卖出的资产，`exchange_rate`是指定价格。原本按着我之前的理解：
>* Base: 基础资产，用于计价的资产
>* Quote: 买卖资产，就是要买卖的资产

那么我指定 价格为`0.340 HBD/HIVE`，`exchange_rate`部分应该是
>base: 0.340 HBD
>quote: 1.000 HIVE

看起来思路挺明确的，然而当我广播时，却被提示：
>'Assert Exception:amount_to_sell.symbol == exchange_rate.base.symbol: Sell '
 'asset must be the base of the price'

看了一下代码中的判断：
>`FC_ASSERT( o.amount_to_sell.symbol == o.exchange_rate.base.symbol, "Sell asset must be the base of the price" );`

竟然要求销售的资产和价格中的计价资产相同，这是啥逻辑，还是我犯糊涂了。讲真，看到我发布成功的order，我都不知道自己想卖多少钱/想多少钱买了：
>![image.png](https://images.hive.blog/DQmTAoZ9HbTwfKsSjak1kgeKBP4Z85z8U9qrxTqPjC7sweg/image.png)



虽然无论用谁当作计价资产，都无所谓把价格处理一下就好，不过总觉得怪怪的，果断弃坑。

# limit_order_create

既然被`limit_order_create2`绕晕了，觉得它不够优雅，那么还是回头看看`limit_order_create`吧。

`limit_order_create` operation大致长成这样：

```
op_limit_order_create = ['limit_order_create',{
    'owner': '',
    'orderid': 0,
    'amount_to_sell': {},
    'min_to_receive': {},
    'fill_or_kill':True,
    'expiration':''
    }]
```

这逻辑就简单清楚多了：
>`amount_to_sell`: 就是你要卖多少资产
>`min_to_receive` : 就是你想到得到多少资产

这逻辑就很优雅了，好比我打算卖88个土豆，你至少给我56块钱；或者反过来，我打算出88块钱，你至少给我128个土豆。

代码也很简单，创建OP后，将对应信息填进去，然后追加到transaction中，并签名广播就好了。

填充数据：
>`op[1]['owner'] = owner`
>`op[1]['amount_to_sell'] = HIVE_ASSET(amount_to_sell)`
>`op[1]['min_to_receive'] = HIVE_ASSET(min_to_receive)`
>`op[1]['orderid'] = orderid`
>`op[1]['fill_or_kill'] = fill_or_kill`
>`op[1]['expiration'] = (datetime.datetime.utcnow() + datetime.timedelta(seconds=expiration)).strftime('%Y-%m-%dT%H:%M:%S')`

追加到transaction并签名广播：
>`trx.append_op(op)`
>`trx.sign_digest(wif)`
>`trx.broadcast()`

发送成功的transaction 
>![image.png](https://images.hive.blog/DQmaT5tKGVtxeyp9EWnBpPp2H2aWSjfKBv3XL7PxM5fqWfw/image.png)

是不是和买卖土豆一样简单？

# 补充

在实际测试时，还发生过类似如下的错误：
>'could not insert object, most likely a uniqueness constraint was '
 'violated:could not insert object, most likely a uniqueness constraint was '
 'violated: '

我之前以为是我的operation填充得不对，后来才发现是因为之前已经创建成功订单，再用相同得订单ID，就会出问题了。

虽然这个提示信息不够友好，但是最终也算让我注意到订单ID重复的问题：要么管理好订单ID，要么用足够大的随机数吧。

总之，已经可以用`limit_order_create`来愉快地交易啦。

- - -

This page is synchronized from the post: ['每天进步一点点：limit_order_create 以及 limit_order_create2'](https://steemit.com/@oflyhigh/limitordercreate-limitordercreate2)
