
---
title: 'SteemData Notify 代码学习三：Notifier Worker / Code Study of SteemData Notify: Part Three'
permlink: steemdata-notify-notifier-worker-code-study-of-steemdata-notify-part-three
catalog: true
toc_nav_num: true
toc: true
date: 2017-07-11 08:47:54
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


想必通过前边两篇文章的介绍，大家对SteemData Notify的`Blockchain Worker`以及`Confirmation Worker`都有了一些了解，如果你错过了这两篇文章，那么请先移步这里：
* [SteemData Notify 代码学习一： Blockchain Worker / Code Study of SteemData Notify: Part one](https://steemit.com/cn/@oflyhigh/steemdata-notify-blockchain-worker-code-study-of-steemdata-notify-part-one)
* [SteemData Notify 代码学习二： Confirmation Worker / Code Study of SteemData Notify: Part two](https://steemit.com/cn/@oflyhigh/steemdata-notify-confirmation-worker-code-study-of-steemdata-notify-part-two) 

今天继续学习Notifier Worker，看看它是如何工作的。
![](https://steemitimages.com/DQmZvnifWgZhFpcuTrzFMTppjMHqRKCpSULPpQ5meeyCV1N/image.png)

# 工作流程

在继续学习之前，让我们先尝试理清一下SteemData Notify的工作流程。

以一个用户举例，SteemData Notify的工作流程应该是这样的
* 用户到网站进行设置，网站保存设置到数据库(未确认)并返回一个HASH的ID值给用户
* 用户转账给@null 账户，memo中填写上个步骤返回的ID
* Confirmation Worker抓取到用户的转账信息，并将用户设置修改为已确认
* Blockchain Worker 判断所有用户的和账户有关操作（转账、修改账户信息等）
* 判断是否是SteemData Notify 注册(并确认)用户相关的操作以及是否是用户关心的操作
* 如果是，写入数据库通知表notifications
* Notifier Worker 负责通知

# Notifier Worker

通过上述流程分析，我们知道Notifier Worker负责给用户发送通知信息。

```
def run_notifier_worker():
    log.info('Starting the notifier worker.')
    while True:
        for n in db.notifications.find({'email_sent': False}):
            if send_mail(n['email'], 'New Steem Event', n['message']):
                db.notifications.update_one(
                    {'_id': n['_id']},
                    {'$set': {'email_sent': True}},
                )
        for n in db.notifications.find({'telegram_sent': False}):
            if send_telegram(n['telegram_channel_id'], n['message']):
                db.notifications.update_one(
                    {'_id': n['_id']},
                    {'$set': {'telegram_sent': True}},
                )
        time.sleep(5)
```
代码很简单，就是在notifications中每五秒一次查询未处理的操作，然后调用send_mail发送邮件，调用send_telegram发送通知。如果发送成功则修改数据库中对应条目的状态为已处理。

# send_mail

SteemData Notify 发送邮件功能使用的是 [Mailgun](https://www.mailgun.com/)的服务。
 [Mailgun](https://www.mailgun.com/) 是专门为开发者提供的邮件发送服务，这样你就无需自建邮件服务器或者使用邮件服务商的SMTP服务。

自建邮件服务器很难保证投递率，并且大部分邮件都会被丢到垃圾箱。
使用邮件服务器的SMTP服务，一般也会有诸多限制，最基本的比如限制每小时的投递量。

Mailgun 每月 1W封的免费数量(10,000 emails free every month)，足以满足我们大多数时候的需求了。

更为让人心动的是，Mailgun 提供强大的API支持，比如网站上提供的示例，这样一段代码就可以使用Python轻松的发送邮件：
```
# Try running this locally.
def send_simple_message():
    return requests.post(
        "https://api.mailgun.net/v3/samples.mailgun.org/messages",
        auth=("api", "key-3ax6xnjp29jd6fds4gc373sgvjxteol0"),
        data={"from": "Excited User <excited@samples.mailgun.org>",
              "to": ["devs@mailgun.net"],
              "subject": "Hello",
              "text": "Testing some Mailgun awesomeness!"})
```

另外，除了发送邮件，MailGun 还有很多强大的功能，感兴趣的小伙伴快来学习吧。
https://documentation.mailgun.com/en/latest/api_reference.html

有了上述API和示例代码，在回头来理解send_mail函数就没啥难度了
```
def send_mail(to, subject, message):
    url = 'https://api.mailgun.net/v3/%s/messages' % mailgun_domain_name
    auth = ('api', mailgun_api_key)
    data = {
        'from': 'noreply@%s' % mailgun_domain_name,
        'to': [to],
        'subject': subject,
        'text': message,
    }
    try:
        r = requests.post(url, auth=auth, data=data)
        if r.status_code in [200, 201]:
            log.info('Sent mail to: %s.' % to)
            return True
        else:
            raise Exception(r.text)
    except Exception as e:
        log.error('Failed sending email to %s: %s' % (to, str(e)))
```

# send_telegram

这段代码和发送邮件的代码大同小异，只不过换成了发送telegram消息
```
def send_telegram(channel_id, message):
    url = 'https://api.telegram.org/bot%s/sendMessage' % telegram_token
    try:
        data = {'chat_id': channel_id, 'text': message}
        r = requests.post(url, data=data)
        log.info('Sent notification to: %s.' % channel_id)
        return True
    except Exception as e:
        log.error('Failed sending telegram message to %s: %s' % (channel_id, str(e)))
```

什么时候QQ和微信(WeChat)也提供这样的API该有多好
现在虽然有一些通过QQ微信网页版扒出来的API，但是官方一直没公开，也就是说你的使用，原则上是不被认可的。如果持续用，没准哪天就被封号了，哎！

# 总结

在这篇文章中我们整理了一下SteemData Notify的工作流程
并且分析了一下Notifier Worker是如何工作的。

我觉得最大的收获是了解了MailGun，前些日子我还在代码中使用SMTP发送邮件呢，落伍了不是？至于telegram, 有种高大上的东西，叫做墙。

---

感谢阅读 / Thank you for reading.
欢迎upvote、resteem以及 following me @oflyhigh 😎

- - -

This page is synchronized from the post: [SteemData Notify 代码学习三：Notifier Worker / Code Study of SteemData Notify: Part Three](https://steemit.com/@oflyhigh/steemdata-notify-notifier-worker-code-study-of-steemdata-notify-part-three)
