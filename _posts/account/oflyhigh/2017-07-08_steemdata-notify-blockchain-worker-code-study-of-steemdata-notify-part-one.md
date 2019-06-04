
---
title: 'SteemData Notify 代码学习一： Blockchain Worker / Code Study of  SteemData Notify: Part one'
permlink: steemdata-notify-blockchain-worker-code-study-of-steemdata-notify-part-one
catalog: true
toc_nav_num: true
toc: true
date: 2017-07-08 15:48:48
categories:
- cn
tags:
- cn
- cn-programming
thumbnail: https://steemitimages.com/DQmZvnifWgZhFpcuTrzFMTppjMHqRKCpSULPpQ5meeyCV1N/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


话说学习编码最好的方式就是读优秀的代码和写代码。
尤其是读优秀的代码，既然自己写的代码很垃圾，多读读人家大牛们的优秀作品，受一下熏陶，沾惹点仙灵之气也好。俗话说：`读书破万卷，下笔如有神!`，俗话还说：`熟读唐诗三百首，不会作诗也会吟!`，那我把大牛们的代码读几遍，是不是也会写出牛光闪闪的代码呢？

又扯远了，言归正传，昨天给大家介绍了一下`SteemData Notify`，觉得是个挺有意思的产品：
* [非正式翻译：介绍一下 SteemData Notify / Informal translation：Introducing SteemData Notify](https://steemit.com/cn/@oflyhigh/steemdata-notify-informal-translation-introducing-steemdata-notify)

今天呢，就来学习一下它的代码，看看具体是如何实现相关功能的。

![](https://steemitimages.com/DQmZvnifWgZhFpcuTrzFMTppjMHqRKCpSULPpQ5meeyCV1N/image.png)

# 代码功能模块

代码托管在github上，地址是： https://github.com/SteemData/notify.steemdata.com

通过简单分析，可以知晓代码分为应用(网站)端和后端

* 应用(网站)端 src/app.py
* 后端  src/worker.py

应用端： 使用Python + Flask + MongoDB
后端则主要使用： Python + Steem官方Python库 + MongoDB

我们这节着重分析后端的代码

# 后端代码

源码在这里
https://github.com/SteemData/notify.steemdata.com/blob/master/src/worker.py

通过阅读main函数
我们可以知道代码分成三大逻辑块

* blockchain worker  
* confirmation worker
* notifier worker

顾名思义，分别区块链工作进程、确认进程、通知进程， 分别通过不同的命令行参数启动。
至于为何不使用线程？以我实际经验，官方的Python 库对线程不是特别友好，尤其是一些复杂情况，可能导致很多意想不到的问题，所以多跑俩进程貌似也没啥不好的。或许作者有别的方面的思量，就不得而知了。

这篇文章我们主要学习三者之一的Blockchain Worker

# Blockchain Worker 

函数名： run_blockchain_worker()

```
    b = Blockchain()
    types = [
        'account_update',
        'change_recovery_account',
        'request_account_recovery',
        'transfer',
        'transfer_from_savings',
        'set_withdraw_vesting_route',
        'withdraw_vesting',
        'fill_order',
        'fill_convert_request',
        'fill_transfer_from_savings',
        'fill_vesting_withdraw',
]
```

b = Blockchain() 定义了Blockchain 实例
其本质呢，就是封装了一些对steem 节点的API操作
其中一个基本的操作是：
`stream(self, filter_by: Union[str, list] = list(), *args, **kwargs)`
简单的解释就是把steem区块链上发生的操作yield成操作流，然后可以针对不同的操作类型进行处理，比如说投票机器人就是Yield出来文章流，然后投票。

types = [ xxxx] 
这一大堆，就是上述函数中的filter_by参数，用来过滤抽取我们需要的相关操作，忽略掉无关内容

有了上述对Blockchain以及filter_by的讲解，下面的代码就很好理解了
```
    try:
        block = db.last_processed_block.find_one()
        start_block = int(block['block_num']) - 1
    except Exception:
        start_block = None
    for op in b.stream(filter_by=types, start_block=start_block):
        processed = db.processed_blockchains.find({'_id': op['_id']}).count()
        if not processed:
            if parse_blockchain(op):
                db.processed_blockchains.insert_one(op)
                db.last_processed_block.delete_many({})
                db.last_processed_block.insert_one(op)
```

大致就是，把我们关心的操作读取回来，并且写到数据库中。

`processed = db.processed_blockchains.find({'_id': op['_id']}).count()`
判断我们是否已经处理过了，如果已经处理过，略过。

`parse_blockchain(op)`
这个判断是否是我们关心的数据，稍后详细讲


` db.processed_blockchains.insert_one(op)`
将op 插入我们处理过的op列表(mongodb)

`db.last_processed_block.delete_many({})`
`db.last_processed_block.insert_one(op)`
其实就是保存一下我们处理到哪里了，这样一旦因故障等问题中断，我们还可以接续上。


# parse_blockchain(op)

前文我们说过，这个来获取我们关心的操作，这个是如何实现的呢？

```
def parse_blockchain(op):
    settings = None
    message = None

    if op['type'] == 'account_update':
        settings = find_user_settings(op['account'])
        if settings and settings['account_update']:
            message = 'Received event: account_update (%s)' % op['account']

    elif op['type'] in ['transfer', 'transfer_from_savings']:
        settings = find_user_settings(op['from'])
        if settings and settings[op['type']]:
            message = 'Received event: %s\nEvent detail: %s -> %s (%s)' % (
                op['type'], op['from'], op['to'], op['amount'],
            )
....

    if settings and message:
        db.notifications.insert_one({
            'username': settings['username'],
            'email': settings['email'],
            'telegram_channel_id': settings['telegram_channel_id'],
            'message': message,
            'email_sent': False,
            'telegram_sent': False,
            'created_at': datetime.utcnow(),
        })

    return True
```
嗯，我好像发现了一个了不起的BUG，一会再说。
这里又出来一个函数
```
def find_user_settings(username):
    try:
        rows = db.settings.find({'username': username, 'confirmed': True}).sort('created_at', -1)
        return rows[0]
    except Exception:
        return dict()
```
这个函数的功能，就是按用户名，读取用户（已确认)的设置并返回。


```
    if op['type'] == 'account_update':
        settings = find_user_settings(op['account'])
        if settings and settings['account_update']:
            message = 'Received event: account_update (%s)' % op['account']
```
这样，这段代码就好理解了，按白话文翻译就是
如果操作是更新账户，
那么我就去设置表读取这个用户的设置
如果存在设置表中有这个用户的设置 并且 这个用户设置了关心 'account_update' 
那么通知信息就是吧啦啦啦
是不是很好理解

因为操作只能是这些操作中的一种，所以要逐一判断一下，直到发现或者判断完毕没有发现为止。


```
    if settings and message:
        db.notifications.insert_one({
            'username': settings['username'],
            'email': settings['email'],
            'telegram_channel_id': settings['telegram_channel_id'],
            'message': message,
            'email_sent': False,
            'telegram_sent': False,
            'created_at': datetime.utcnow(),
        })

    return True
```
如果发现了需要处理的操作，将其插入notifications 表。

***BUG，BUG***
注意这个 return True， 注意缩进，OMG，少缩进了一个TAB有木有？
这样，原本只有我们处理到的op 才应该返回True， 结果统统返回True了。

你问我后果是啥？貌似没啥后果，浪费一些数据库空间和CPU运算能力而已。


# 总结 

* Blockchain Worker 将blockchain上和账户有关的动态抓取进来
* 判断是否是SteemData Notify 注册(并确认)用户相关的操作以及是否是用户关心的操作
* 如果是，写入数据库通知表`notifications`

咦，一总结好像也没啥内容呢，那我为啥写了这么多呢？晕，这啰嗦的毛病要改一改了。
初学者水平有限，如有谬误敬请指正，深表谢意啦。

----
感谢阅读 / Thank you for reading.
欢迎upvote、resteem以及 following me @oflyhigh 😎

- - -

This page is synchronized from the post: [SteemData Notify 代码学习一： Blockchain Worker / Code Study of  SteemData Notify: Part one](https://steemit.com/@oflyhigh/steemdata-notify-blockchain-worker-code-study-of-steemdata-notify-part-one)
