
---
title: '每天进步一点点：comment_options 操作 & Power UP 100%'
permlink: commentoptions-and-power-up-100
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-05-03 03:09:12
categories:
- cn
tags:
- cn
- cutehive
- cn-programming
- comment
- option
thumbnail: 'https://cdn.pixabay.com/photo/2017/08/20/20/16/tool-2663036_960_720.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


你注意到有些帖子设置了100%  Power UP而不是默认的50%/50%分配比例嘛？你注意到网站首页有些项目方的帖子设置了拒绝收益嘛？你是不是很好奇，这些都都是如何设置的？

![](https://cdn.pixabay.com/photo/2017/08/20/20/16/tool-2663036_960_720.jpg)
(图源 ：[pixabay](https://pixabay.com/))

当然，从网站界面上/或者APP设置中，实现这样的操作都很简单，但是你想知道这背后的机制是什么嘛？

# comment_options

或许聪明的你已经猜到了，没错，这背后都使用了一个叫做`comment_options`的操作，直白点翻译/解释，就是设置文章的选项。

我们知道，发表文章要使用`comment`操作，以前我应该分享过`comment`操作大致长什么样，如果忘记了，我们这里再复习一下：
```
op_comment = ['comment',{
    'author': '',
    'body': '',
    'json_metadata': '',
    'parent_author': '',
    'parent_permlink': '',
    'permlink': '',
    'title': ''
    }]
```
里边内容极其简单，就不过多解释了，但是你会注意到，这里边并没有设置100% POWER UP以及拒绝收益的地方。

所以要想设置这些内容，我们需要另外一个独立的Operation：
```
op_comment_options = ['comment_options',{
    'author': '',
    'permlink': '',
    'max_accepted_payout': '',
    'percent_steem_dollars': 10000,
    'allow_votes': True,
    'allow_curation_rewards': True,
    'extensions': []
  }]
```

理论上来讲，这个操作可以在任何时候广播到网络上，但是实际上是有一些限制的，比如说：
>* `max_accepted_payout`只能减少不能增加
>* `percent_steem_dollars`只能减少不能增加
>* `beneficiaries`设置的时候，必须没有投票
>* ......

所以，最佳的方式，是把`comment`以及`comment_options`两个operations 放到一个transaction中，这样就不必去考虑那些复杂的约束条件了。

# 测试 comment_options

为了简便，我将`comment`以及`comment_options`两个操作分别命名`op`以及`op_co`（请原谅我的命名水平）：

文章链接、标题、内文等基本信息如下：
>`permlink = "testpost15"`
>`title = "测试100% Power UP"`
>`body = "这只是个测试，本文作者收益100% Power UP!"`

关于`op`的基本操作为：
>`op[1]["author"] = "oflyhigh.test"`
>`op[1]["permlink"] = permlink`
>`op[1]["parent_permlink"] = "test"`
>`op[1]["title"] = title`
>`op[1]["body"] = body`

关于`op_co`的基本操作为：
>`op_co[1]["author"] = "oflyhigh.test"`
>`op_co[1]["permlink"] = permlink`
>`op_co[1]["max_accepted_payout"] = HIVE_ASSET('1000.000 HBD')`
>`op_co[1]["percent_steem_dollars"] = 0`
>`op_co[1]["allow_votes"] = True`

将两个操作追加到transaction并广播：
>`trx.append_op(op)`
>`trx.append_op(op_co)`
>`trx.sign_digest(wif)`
>`trx.broadcast()`

广播出去的transaction大概长成这样：
>![image.png](https://images.hive.blog/DQmZLzBDVnTLuncgCV1h8rV67XoPEBZcTUvi3jTDELkzVmR/image.png)

区块链浏览器(https://hiveblocks.com/)上可以看到我们的transaction：
>![image.png](https://images.hive.blog/DQmZ4kJ3LeTx9mgmgkJR4s4STZbNAH8pPVrrNDpeaCEcfFT/image.png)


在[这里](https://hive.blog/test/@oflyhigh.test/testpost15)可以看到我们的帖子：
>![image.png](https://images.hive.blog/DQmbaya8DUXY8xURMPbciQgAWD6p1YXjZbN8txnjkH6A1VM/image.png)

那个红色的小LOGO就表示这个文章Power UP 100% 哦，欢迎大家去给文章点赞哦。(*^_^*)

# 相关链接

* https://hive.blog/test/@oflyhigh.test/testpost15

- - -

This page is synchronized from the post: ['每天进步一点点：comment_options 操作 & Power UP 100%'](https://steemit.com/@oflyhigh/commentoptions-and-power-up-100)
