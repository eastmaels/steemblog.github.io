
---
title: '每天进步一点点：create_claimed_account'
permlink: createclaimedaccount
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-04-28 03:08:33
categories:
- cn
tags:
- cn
- cutehive
- cn-programming
- python
- account
- study
thumbnail: 'https://cdn.pixabay.com/photo/2017/10/25/19/45/piggy-bank-2889042_960_720.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在之前的文章[每天进步一点点：批量claim_account (claim discounted account)](https://hive.blog/hive-105017/@oflyhigh/claimaccount-claim-discounted-account)中，我们介绍了使用RC申领打折账户的操作，这个操作相当于申领到一张入场券，实际创建账户时则使用`create_claimed_account`。

![](https://cdn.pixabay.com/photo/2017/10/25/19/45/piggy-bank-2889042_960_720.jpg)
(图源 ：[pixabay](https://pixabay.com/))

`create_claimed_account`使用的结构体如下，一看就相当复杂了：
>![image.png](https://images.hive.blog/DQmSbnpQ6UWFDu38TKsS2xuiJENX8zpuDi3zw11v7nUSTbg/image.png)

# 账户权限

之所以复杂，是因为创建账户的同时，要为账户设置对应的权限(`owener`、`active`、`posting`、`memo_key`)，前三者是比较复杂的类型，memo_key则可以当作字符串处理。

```
{'active': {
    'account_auths': [],
    'key_auths': [['STM798n7jMPF4JM8D7dj4g1M2GiG8Dx79vbYWfuJCJkSTxXCvrosF',  1]],
    'weight_threshold': 1}
```

以最简单的active权限为例，`weight_threshold`代表多签的阈值，`account_auths`代表添加的授权账户，`key_auths`代表添加的授权公钥。

无论是授权账户还是授权公钥都是列表，就是说可以添加多组，以单组授权的公钥为例，类似这样：
>`['STM798n7jMPF4JM8D7dj4g1M2GiG8Dx79vbYWfuJCJkSTxXCvrosF',  1]`

前者代表被授权的公钥，后者代表阈值。

# 创建claimed账户

知道了账户权限的相关内容后，剩下的就应该很简单了，我们创建类似如下的模板：
```
op = ['create_claimed_account',{
    'creator':'',
    'new_account_name':'',
    'owner':{},
    'active':{},
    'posting':{},
    'memo_key':{},
    'json_metadata':'{}',
    'extensions':[]
  }]
```

并创建类似如下的权限类型：
```
auth = {
     'weight_threshold':1,
     'account_auths':[],
     'key_auths':[]
 }
```

为每个权限设置初值并赋值到OP中，然后将交易追加到transaction中，签名交易并广播：
>`trx.append_op(op)`
>`trx.sign_digest(wif)`
>`trx.broadcast()`

被广播出去的内容大概长成这个样子：
>![image.png](https://images.hive.blog/DQmNt6cDKVEnTaHvXuaFSJrXM1KcKJEJDFgRhNF7icrCBtE/image.png)

广播成功并且不出问题后，区块链上就会创建成功我们的账户：
>![image.png](https://images.hive.blog/DQmNxbxpmvUjEhgipXBYiDf6DJrKNuWC23KPdBYugGopuaf/image.png)

# 其它

我在尝试创建@oflyhigh.account后，又尝试创建@oflyhigh.accounts，可是却给我如下错误提示：
>'could not insert object, most likely a uniqueness constraint was '
 'violated:could not insert object, most likely a uniqueness constraint was '
 'violated: '

这种报错一半是因为有同名账户存在，所以不允许再被创建，然而我查了，并没有同名账户啊。找来找去才发现，***账户长度被限定为16个字符***，`oflyhigh.accounts`尽管广播出去是`oflyhigh.accounts`但是到链端被截短为`oflyhigh.account`就和之前创建的账户重复了。

为了证实这点，我用了26个字母来创建账户，广播出去的内容如下：
>![image.png](https://images.hive.blog/DQmd2wZhRcmZdKQJJ29FgxjyXTP5jJRDK67ZLyAknXTAUTh/image.png)

创建的账户如下：
>![image.png](https://images.hive.blog/DQmauy7WQ3ppMkrpUmoxc1SbWHKTwKnKmvXm1heteUW9NwC/image.png)

可见成功的被截短了，不过尽管如此，我还是拥有了最长的字母序账户@abcdefghijklmnop，有人出高价收购不？哈哈哈哈。

* [每天进步一点点：批量claim_account (claim discounted account)](https://hive.blog/hive-105017/@oflyhigh/claimaccount-claim-discounted-account)

- - -

This page is synchronized from the post: ['每天进步一点点：create_claimed_account'](https://steemit.com/@oflyhigh/createclaimedaccount)
