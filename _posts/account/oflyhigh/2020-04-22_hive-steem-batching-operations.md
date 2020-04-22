
---
title: '每天进步一点点：再谈HIVE/STEEM的Batching Operations'
permlink: hive-steem-batching-operations
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-04-22 12:29:45
categories:
- cn
tags:
- cn
- study
- transaction
- opration
- python
thumbnail: 'https://cdn.pixabay.com/photo/2017/01/07/20/40/candy-1961536_960_720.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在大约三年前，我写过一篇文章[将多个操作(operation)放入一个事务中(transaction)](https://hive.blog/cn/@oflyhigh/operation-transaction)，介绍了使用steem-python实现一个事务(transaction)中放置两个或者多个操作(operation)的方法。

![](https://cdn.pixabay.com/photo/2017/01/07/20/40/candy-1961536_960_720.jpg)
(图源 ：[pixabay](https://pixabay.com/))


这在很多场景下都很有用，比如说给多人转账、用RC申领账户、多个账户点赞同一内容等等。（当时我文章中用的示例是发文的同时点赞，因为EIP的缘故，这个在HF21/HF22以后不适合了）

今天我来测试两种场景，一是一个用户给两个用户转账（多个用户一样），另外一个是两个用户给不同用户转账。

# 同一用户转账给不同用户

一个用户给两个用户转账这个好办一些，我们直接把oprations弄好并放到transaction中，因为发起者是同一个用户，那么我们用这个用户的私钥签名一次即可。

其中转账(transfer)模板如下：
```
op = ['transfer',{
    'from': '',
    'to': '',
    'amount': '',
    'memo': ''
    }]
```

设置并追加第一个转账操作：
>`op[1]["from"] = "oflyhigh.demo"`
>`op[1]["to"] = "oflyhigh.test"`
>`op[1]["amount"] = "0.001 HBD"`
>`op[1]["memo"] = "Hello 111"`
>`trx.append_op(op)`

完成后，transaction中内容如下：
>![image.png](https://images.hive.blog/DQmUDwNh9Jk3qFgQ8r6Dge6VrWcFUqc34J2hmRwxdmrsX3D/image.png)


设置并追加第二个转账操作：
>`op[1]["from"] = "oflyhigh.demo"`
>`op[1]["to"] = "oflyhigh.abc"`
>`op[1]["amount"] = "0.002 HBD"`
>`op[1]["memo"] = "Hello 222"`
>`trx.append_op(op)`

完成后，transaction中内容如下：
>![image.png](https://images.hive.blog/DQmYjGbPQxhXX4kGNBULdH2TN46wHrcbsK4NfE2Wb8RrxK2/image.png)


生成摘要并使用`oflyhigh.demo`的active key对transaction进行签名：
>`trx.derive_digest(chain_id)`
>` trx.sign_digest(wif_1)`

结果如下：
>![image.png](https://images.hive.blog/DQmNT5EWXncpCqyTKD5q6W1H5mpmtQqFnN7VzdAy5FTfCVd/image.png)


使用`trx.broadcast()`广播交易，结果如下：
>![image.png](https://images.hive.blog/DQmSfvAuNnj3uxVH2Z9VoQAi9EX9hBaKB5rv7zdYXqnudg1/image.png)

# 两个用户给不同用户转账

接下来我们设置两个不同用户对外转账，看看和同一用户有什么区别。

关于operation和transaction的设置暂且略过（参考上边内容就好），设置好的transaction如下：
>![image.png](https://images.hive.blog/DQmbqufcPP9Bk5rGLzqjcYVfsZkusbRRCFXRfhuM4sp7LpS/image.png)

因为是两个不同用户发起的操作，所以我们***需要两个对应的active key对transaction分别签名***：
>`trx.derive_digest(chain_id)`
`trx.sign_digest(wif_1)`
`trx.sign_digest(wif_2)`

使用trx.broadcast()广播交易，结果如下：
>![image.png](https://images.hive.blog/DQmawUDgJ68ctZZsFJ12FBSrk81pQYmnyJT8GTx51x967cd/image.png)

# 其它

除了上述操作外，我又测试了一些其它情况，比如相同用户两笔转账的情况我签名两次，那么就会出现如下错误：
>`'message': 'duplicate signature included:Duplicate Signature detected'`

另外测试了，不同用户转账的时候调换签名顺序，发现不管用哪个私钥先签，都无所谓，也就是说和顺序无关。

# 总结

* 我们可以将多个操作放到一个事务中提升效率
* 操作发起方为同一账号时，只需用对应私钥签名一次
* 操作发起方包含不同账户时，需要用不同的账户各签名一次

# 相关链接

* [将多个操作(operation)放入一个事务中(transaction)](https://steemit.com/cn/@oflyhigh/operation-transaction)

- - -

This page is synchronized from the post: ['每天进步一点点：再谈HIVE/STEEM的Batching Operations'](https://steemit.com/@oflyhigh/hive-steem-batching-operations)
