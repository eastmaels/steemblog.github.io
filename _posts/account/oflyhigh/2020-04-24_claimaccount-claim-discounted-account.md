
---
title: '每天进步一点点：批量claim_account (claim discounted account)'
permlink: claimaccount-claim-discounted-account
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-04-24 02:08:54
categories:
- cn
tags:
- cn
- cn-programming
- claim
- account
thumbnail: 'https://cdn.pixabay.com/photo/2017/10/25/19/46/piggy-2889044_960_720.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


昨天发帖讲了[HIVE/STEEM的Batching Operations](https://hive.blog/hive-105017/@oflyhigh/hive-steem-batching-operations)，测试用的是最简单的transfer操作，今天来弄一下`claim_account`，用于替换当前正在运行的beem脚本。

![](https://cdn.pixabay.com/photo/2017/10/25/19/46/piggy-2889044_960_720.jpg)
(图源 ：[pixabay](https://pixabay.com/))


在HF20之前，创建账户是要花费一笔不菲的费用，这个费用参数由见证人们共同维持，好长一段时间这个费用都是`3.000 HIVE/STEEM` 。

这个费用看起来似乎并不多，但是要知道有段时间STEEM价格可是一度达到近50元一个，这对账户注册服务提供者来讲真是一笔不小的开支，当然了，这部分费用可以转嫁给用户，但是谁会舍得用150元注册个账户呢？

好在HF20的时候，随着RC(Resource Credits)系统的引入，这种情况得以改善。RC可以简单地理解成用户可用的资源，转账、发帖、点赞都耗费资源，并且资源按时间线性恢复，有效SP越多，可用资源越多。

HF20中还引进了用RC创建账户的概念，也就是说，不用耗费1分钱，只要RC足够，就可用创建账户，这样是不是很酷？

创建账户之前，我们要先领一张票，就好比我们想去看电影，要先买电影票一样，这个领票的过程就叫做：***`claim  account`***，领完票之后我们可以先不创建账户等有需要的时候再创建(***`create_claimed_account`***)，这样可以充分利用RC资源。

`claim_account` 以及`create_claimed_account`分别对应下边两个操作，我们这篇文章先研究第一个：
>![image.png](https://images.hive.blog/DQmby57C4jHad5tcDjqZLwQ5Qf9fjLK4uWtv5UvxPSxnb3m/image.png)

根据上边的代码不难构造出`claim_account`对应的Operation
```
op = ['claim_account',{
    'fee': '',
    'creator': '',
    'extensions': []
  }]
```

 然后，我们构造一个Transaction:
>`trx = Transaction(client)`

然后，我们根据创建者信息来设置op:
>`op[1]['creator'] = "oflyhigh"`
`op[1]['fee'] = "0.000 HIVE"`

因为是要批量操作，所以我将10个op循环加入到事务中：
>`for i in range(0,10): trx.append_op(op)`

剩下的事情就简单了，签名并广播就可以了。
>`trx.derive_digest(chain_id)`
>`trx.sign_digest(wif)`
>`trx.broadcast()`

广播出去的transaction大致长这样：
>![image.png](https://images.hive.blog/DQmaie8Y5GJMHzPeHa2JFDxsdPTnb5pxUKkAwxS3Yn7AGM9/image.png)


如果RC足够，就会申领成功：
>![image.png](https://images.hive.blog/DQmQiThHK2nQtsKponejnkQM5e6fjybx6vRGnsC3vJeRwhA/image.png)


一下子10个账户到手，是不是很过瘾？将其设置到定时任务(crontab)中，然后就不用管了。

有朋友可能会问，RC不够申领失败咋办？这个也不用担心，失败没啥影响的，当然也可以估算或者程序计算出个合理值，但是我觉得大可不必的，失败了就等攒够了再申领呗，当然前提是你申领的数值不能大于你RC全满时可申领的数值。

(***说明：文内代码仅为逻辑表达，相关库正在完善中***)

# 相关链接

* [每天进步一点点：再谈HIVE/STEEM的Batching Operations](https://hive.blog/hive-105017/@oflyhigh/hive-steem-batching-operations)

- - -

This page is synchronized from the post: ['每天进步一点点：批量claim_account (claim discounted account)'](https://steemit.com/@oflyhigh/claimaccount-claim-discounted-account)
