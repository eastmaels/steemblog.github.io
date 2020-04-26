
---
title: '每天进步一点点：有趣的claim_reward_balance'
permlink: claimrewardbalance
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-04-26 03:39:24
categories:
- cn
tags:
- cn
- cn-programming
- python
- reward
- study
thumbnail: 'https://cdn.pixabay.com/photo/2016/08/19/10/20/money-1604921_960_720.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


忘记从哪次硬分叉开始，文章/点赞收益不直接发放了，而是进入到一个叫做`reward_***_ balance`的池子，然后需要用户自己申领(claim)一下，才会到达账户余额中。

![](https://cdn.pixabay.com/photo/2016/08/19/10/20/money-1604921_960_720.jpg)
(图源 ：[pixabay](https://pixabay.com/))

以我的账户为例，当前这个池子的余额如下：
>![image.png](https://images.hive.blog/DQmca8mkVnYnMjcjv5keakaYiiQgr5iU9q6rJeLvQYoqjK3/image.png)

尽管你领或者不领，钱都在那里，不会少(随着文章/点赞收益等发放只会变多），但是感觉还是回到账户里更好一些，况且HIVE POWER越多，点赞收益越高，颇有些复利效应呢，所以收取收益还是很重要的。

收取收益使用的是`claim_reward_balance`，我定义个简单如下操作模板：
```
>op = ['claim_reward_balance',{
    'account': '',
    'reward_sbd': '',
    'reward_steem': '',
    'reward_vests': '',
  }]
```
程序中部分代码如下:
> `op[1]['account'] = "oflyhigh"`
>`op[1]['reward_steem'] = "0.000 HIVE"`
>`op[1]['reward_sbd'] = "0.000 HBD"`
>`op[1]['reward_vests'] = "0.000001 VESTS"`

然后追加操作并签名广播：
>`trx.append_op(op)`
>`trx.sign_digest(wif)`
>`ret = trx.broadcast()`

成功广播的transaction大致长成这样：
```
{'expiration': '2020-04-26T02:43:43',
 'operations': [['claim_reward_balance',
                 {'account': 'oflyhigh',
                  'reward_sbd': '0.000 HBD',
                  'reward_steem': '0.000 HIVE',
                  'reward_vests': '0.000001 VESTS'}]],
 'ref_block_num': 5502,
 'ref_block_prefix': 4148586632,
 'signatures': ['20288535518661dd5ce376a812436a630d546d12b01333a64b0d9837155b4c102a0818f55cd99e72725889e1501d2251d24f55a11216eebadde9ffcee91943b537']}
```

https://hiveblocks.com/上可以查看成功的记录：
>![image.png](https://images.hive.blog/DQmNtGpTm8GFWYz8koMdjKAV34kWdcRnMRTtStAojoDBVH9/image.png)

为什么是`0 HP`呢，因为我收取的太少，显示上被四舍五入了。

好了，这看起来并没有什么呀？为什么标题要叫：***有趣的claim_reward_balance***，标题党嘛？当然不是，你难道没有发现，其实***收益是可以只收取部分的***，是不是很好玩？

所有的都设置为零是否可以呢？我试了一下，出现如下提示：
>('Assert Exception:reward_steem.amount > 0 || reward_sbd.amount > 0 || '
 'reward_vests.amount > 0: Must claim something.')

就是可以少收，但是不难一点不收，那不是扯蛋呢嘛，哈哈。

那么收取全部收益是如何实现的呢？答案很简单，先读取账户信息，然后获取待收取的资产，然后一起收取就好了，思路就是这样了，实现也很简单，就不贴代码了。

怎么样，是不是很好玩？

- - -

This page is synchronized from the post: ['每天进步一点点：有趣的claim_reward_balance'](https://steemit.com/@oflyhigh/claimrewardbalance)
