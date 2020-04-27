
---
title: '每天进步一点点：关于Power Down( withdraw_vesting)'
permlink: power-down-withdrawvesting
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-04-27 03:37:57
categories:
- cn
tags:
- cn
- cutehive
- cn-programming
- python
- study
thumbnail: 'https://cdn.pixabay.com/photo/2018/01/24/17/33/light-bulb-3104355_960_720.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


大家都知道玩HIVE的话，要想让自己的账户更有威力（RC资源/点赞价值/见证人票价值/SPS影响力），那么就要将***流动性的币锁仓变成HP(Hive Power)，亦即所谓的Power UP***。这个词很形象，Power UP，威力加，不就是更有威力嘛。

![](https://cdn.pixabay.com/photo/2018/01/24/17/33/light-bulb-3104355_960_720.jpg)
(图源 ：[pixabay](https://pixabay.com/))

除了Power UP来增加HP，文章收益的一半也是作为锁仓的币的发放的，点赞收益/见证人工资则全部是锁仓的币。那么怎么把锁仓的币变成可流通的币呢？那就要用到***Power DOWN***了，额，威力减少。

Power DOWN用来解锁全部或者部分锁仓的币，周期为13周，每周释放欲解锁的币的1/13。需要知晓的是，尽管我们在网页钱包里Power UP/Power DOWN都跟HP打交道，但是实际上系统中使用的是`vesting shares`(VESTS)，可以简单理解成股权。

Power Down这个操作，系统内的名称叫做`withdraw_vesting`，大致长成这样：
```
withdraw_vesting = ['withdraw_vesting',{
    'account': '',
    'vesting_shares':''
  }]
```

这次我采用`database_api`来处理，所以需要先将资产部分处理一下，原本资产部分应该类似：
>`'vesting_shares':'0.000001 VESTS'`

但是`database_api`不认这种便捷的方式，所以要用代码将其转换成类似如下的样式：
```
'vesting_shares': {'amount': '1',
   'nai': '@@000000037',
    'precision': 6}
```
其中`@@000000037`对应`vesting shares`这种资产类型，` 'precision': 6`代表精确到小数点后6位，那么`'amount': '1'`就等同于`'0.000001 VESTS'`了

大致代码长这样：
`op[1]['account'] = account`
`op[1]['vesting_shares'] = HIVE_ASSET(vests)`
`trx.append_op(op)`
`trx.sign_digest(wif)`
`trx.broadcast()`


使用network_broadcast_api广播上述交易，广播出去的结构大致是这样：
>![image.png](https://images.hive.blog/DQmSJFbRnQj6mQhgHBuNMxj9jLZohWVuosA9E8744Q46Hyw/image.png)

可见比`condenser_api`复杂好多好多，不过总算成功了，在https://hiveblocks.com/可以查到结果：
>![image.png](https://images.hive.blog/DQmaUiXoK37DFacyoqxL3N7LA21k8HkMH7nKgSQucVuxa1V/image.png)

尽管我们可以实现Power Down操作(` withdraw_vesting`)，但是要让其用起来更加方便，我们还需要做很多工作，比如支持按HP来Power Down，那么我们就需要先计算HP和vesting shares的转换关系，然后再传入函数中。

另外，可以使用读取账户信息来根据账户信息设置` withdraw_vesting`操作中的对应数值，这样可以直接Power Down所有的HP。不过那样的话，威力就会归零啦。

# 相关链接

* [每天进步一点点：condenser_api 与其它API(database_api)等的异同](https://hive.blog/hive-105017/@oflyhigh/condenserapi-api-databaseapi)

- - -

This page is synchronized from the post: ['每天进步一点点：关于Power Down( withdraw_vesting)'](https://steemit.com/@oflyhigh/power-down-withdrawvesting)
