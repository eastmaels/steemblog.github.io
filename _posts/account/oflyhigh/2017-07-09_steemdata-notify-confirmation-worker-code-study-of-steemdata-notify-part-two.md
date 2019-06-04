
---
title: 'SteemData Notify 代码学习二： Confirmation Worker / Code Study of SteemData Notify: Part two'
permlink: steemdata-notify-confirmation-worker-code-study-of-steemdata-notify-part-two
catalog: true
toc_nav_num: true
toc: true
date: 2017-07-09 03:51:24
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


在上一篇文章中，我们学习了SteemData Notify后端代码中的Blockchain Worker
* [SteemData Notify 代码学习一： Blockchain Worker / Code Study of SteemData Notify: Part one](https://steemit.com/cn/@oflyhigh/steemdata-notify-blockchain-worker-code-study-of-steemdata-notify-part-one)

归纳起来就是
* Blockchain Worker 将blockchain上和账户有关的动态抓取进来
* 判断是否是SteemData Notify 注册(并确认)用户相关的操作以及是否是用户关心的操作
* 如果是，写入数据库通知表notifications

![](https://steemitimages.com/DQmZvnifWgZhFpcuTrzFMTppjMHqRKCpSULPpQ5meeyCV1N/image.png)

今天我们来继续学习 Confirmation Worker,  看看`基于尘埃支付认证`到底是什么鬼？

源码在这里：
https://github.com/SteemData/notify.steemdata.com/blob/master/src/worker.py

# Confirmation Worker

```
def run_confirmation_worker():
    log.info('Starting the confirmation worker.')
    b = Blockchain()
    for transfer in b.stream(filter_by='transfer'):
        confirm_user_settings(transfer)
```

关于`Blockchain`以及`stream(self, filter_by: Union[str, list] = list(), *args, **kwargs)`
昨天的帖子中已经介绍了
这段代码其实就是过滤区块链中的转账操作，并调用`confirm_user_settings(transfer)`

```
def confirm_user_settings(op):
    if op['to'] != steem_wallet:
        return
    if len(op['memo'].strip()) == 24:
        try:
            _id = ObjectId(op['memo'].strip())
        except Exception:
            return
    elif len(op['memo'].strip()) == 40:
        _id = op['memo'].strip()
    else:
        return
    settings = db.settings.find_one({'_id': _id})
    if settings:
        db.settings.update_one(
            {'_id': _id, 'username': op['from']},
            {'$set': {'confirmed': True}}
        )
        message = 'You have made the following changes:\n' + \
                  'Email: %s\n' % (str(settings['email'] or '-')) + \
                  'Telegram: %s\n' % (str(settings['telegram_channel_id'] or '-')) + \
                  'Notify account_update: %s\n' % str(settings['account_update']) + \
                  'Notify change_recovery_account: %s\n' % str(settings['change_recovery_account']) + \
                  'Notify request_account_recovery: %s\n' % str(settings['request_account_recovery']) + \
                  'Notify transfer: %s\n' % str(settings['transfer']) + \
                  'Notify transfer_from_savings: %s\n' % str(settings['transfer_from_savings']) + \
                  'Notify set_withdraw_vesting_route: %s\n' % str(settings['set_withdraw_vesting_route']) + \
                  'Notify withdraw_vesting: %s\n' % str(settings['withdraw_vesting']) + \
                  'Notify fill_order: %s\n' % str(settings['fill_order']) + \
                  'Notify fill_convert_request: %s\n' % str(settings['fill_convert_request']) + \
                  'Notify fill_transfer_from_savings: %s\n' % str(settings['fill_transfer_from_savings']) + \
                  'Notify fill_vesting_withdraw: %s\n' % str(settings['fill_vesting_withdraw'])
        log.info('Confirmed the settings for user %s.' % op['from'])
        if settings['email']:
            send_mail(settings['email'], 'Update confirmed', message)
        if settings['telegram_channel_id']:
            send_telegram(settings['telegram_channel_id'], message)
```
其中：
```
    if op['to'] != steem_wallet:
        return
```
如果不是转网指定钱包，则略过，本例中，steem_wallet 定义为 @null
顺便说一下，如果要改为收费服务，把这个钱包改成接收费用的账户，并且设置一下检查金额即可
不过大牛们都看不上这些钱啦，哈哈

```
    if len(op['memo'].strip()) == 24:
        try:
            _id = ObjectId(op['memo'].strip())
        except Exception:
            return
    elif len(op['memo'].strip()) == 40:
        _id = op['memo'].strip()
    else:
        return
    settings = db.settings.find_one({'_id': _id})
```
你可能好奇为啥又有24又有40呢？到底多长呢？
我也好奇，后来分析了一下，应该是历史版本遗留问题，这段一会我们再详细讲，只需知道按转账的memo去数据库中查找设置即可。Memo即_id。

```
    if settings:
        db.settings.update_one(
            {'_id': _id, 'username': op['from']},
            {'$set': {'confirmed': True}}
        )
        message = 'You have made the following changes:\n' + \
                  'Email: %s\n' % (str(settings['email'] or '-')) + \
                  'Telegram: %s\n' % (str(settings['telegram_channel_id'] or '-')) + \
                  'Notify account_update: %s\n' % str(settings['account_update']) + \
                  'Notify change_recovery_account: %s\n' % str(settings['change_recovery_account']) + \
                  'Notify request_account_recovery: %s\n' % str(settings['request_account_recovery']) + \
                  'Notify transfer: %s\n' % str(settings['transfer']) + \
                  'Notify transfer_from_savings: %s\n' % str(settings['transfer_from_savings']) + \
                  'Notify set_withdraw_vesting_route: %s\n' % str(settings['set_withdraw_vesting_route']) + \
                  'Notify withdraw_vesting: %s\n' % str(settings['withdraw_vesting']) + \
                  'Notify fill_order: %s\n' % str(settings['fill_order']) + \
                  'Notify fill_convert_request: %s\n' % str(settings['fill_convert_request']) + \
                  'Notify fill_transfer_from_savings: %s\n' % str(settings['fill_transfer_from_savings']) + \
                  'Notify fill_vesting_withdraw: %s\n' % str(settings['fill_vesting_withdraw'])
        log.info('Confirmed the settings for user %s.' % op['from'])
        if settings['email']:
            send_mail(settings['email'], 'Update confirmed', message)
        if settings['telegram_channel_id']:
            send_telegram(settings['telegram_channel_id'], message)
```
如果没有相关设置，当然不必说了，如果有则更新数据库中对应id以及对应用户的设置状态为确认(confirmed)。
后边的代码就很好理解啦，给用户发个通知，告诉他/她的最新设置情况。

# BUG, BUG

好像昨天我们已经发现了一个BUG，今天，看了这段代码以后，发现了另外一处BUG。
```
    settings = db.settings.find_one({'_id': _id})
    if settings:
        db.settings.update_one(
            {'_id': _id, 'username': op['from']},
            {'$set': {'confirmed': True}}
        )
```
注意这段代码，我们知道用户的设置会生成一个唯一的_id
如果用户自己去确认(转账给null, 并附_id做memo), 这并没有什么问题。

但是我们想一种坏坏的情况： ***你的设置，我去确认***
呃，好吧，我可能不知晓你生成的_id
那么换一种玩法，***我帮你设置，我帮你确认***，会是什么情况？

```
        db.settings.update_one(
            {'_id': _id, 'username': op['from']},
            {'$set': {'confirmed': True}}
        )
```
好在，系统在更新数据库的时候检查了实际操作的用户 `'username': op['from']`
所以，***我对你的账户进行设置并不会写入到库中***，但是：
`settings = db.settings.find_one({'_id': _id})`
查询的时候，仅仅查询了ID
这样后边代码会继续执行，会给设置的`telegram_channel_id`和`email`发信息哦。
所以***检查的时候，也应该加上`'username': op['from']`才更合理一些。***

# 关于Memo长度

![](https://steemitimages.com/DQmTMFHdrCumFK28ZwWDTyqrmECmyCFDKdYUYvUZ9Dsffow/image.png)
语言解释起来太过于苍白，直接上代码吧。
也就是说SHA1生成了就是40位的16进制字符串
至于24，咱就不去研究了，人家都改成新的了，咱在去研究老的，也没啥意思，是不？

# 关于ObjectId()

我们可以看到
```
    if len(op['memo'].strip()) == 24:
        try:
            _id = ObjectId(op['memo'].strip())
        except Exception:
            return
    elif len(op['memo'].strip()) == 40:
        _id = op['memo'].strip()
    else:
        return
```
之前代码中，把memo读取来的数据转换成了 ObjectId 类型
`from bson.objectid import ObjectId`
这是因为之前的生成的memo值并非通过setting hash而来，而是setting插入数据库后生成的记录的_id
这个类型是ObjectId，所以字符串值必须转换成ObjectId才可以读取。

比如 @a-0 这个用户，在数据库中存储的_id
![](https://steemitimages.com/DQmQokkMVMKFF558it812565wmKU4mE19QEoYrio1UoXmR7/image.png)

![](https://steemitimages.com/DQmQy4NyoxZiYpgy3mdNeqMFeNJKaUuvdSFCXM7vPzo2FUw/image.png)
我用字符串的形式直接查找，是找不到内容的。

![](https://steemitimages.com/DQmaGCaUnqsknkSjjvXd7MTibNRrJntKyqWF8TJpWY7DWBf/image.png)
而用ObjectId就可以直接查到

至于后来为何长度为40的时候不用转换了，因为存储的方式变了呗。

# 总结

* Confirmation Worker 将blockchain上给 @null 转账的数据抓过来
* 通过memo 判断是否是SteemData Notify的用户设置确认信息
* 如果是，将数据库中用户设置的状态修改为True

并且我们`又`发现了一处小BUG。
其实我还发现一个问题啊，有点坏坏的，不过我不能说，说了我就成坏人了，至少我还没坏透呢。

这就是所谓的基于尘埃支付的确认啦，我也学会咯。

咦，一总结好像也没啥内容呢，那我为啥写了这么多呢？ 咦，为啥这句话这么面熟呢？
初学者水平有限，如有谬误敬请指正，深表谢意啦。

---

感谢阅读 / Thank you for reading.
欢迎upvote、resteem以及 following me @oflyhigh 😎

- - -

This page is synchronized from the post: [SteemData Notify 代码学习二： Confirmation Worker / Code Study of SteemData Notify: Part two](https://steemit.com/@oflyhigh/steemdata-notify-confirmation-worker-code-study-of-steemdata-notify-part-two)
