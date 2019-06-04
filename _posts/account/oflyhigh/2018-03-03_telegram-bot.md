
---
title: 'Telegram bot 与微信公众号/微信机器人'
permlink: telegram-bot
catalog: true
toc_nav_num: true
toc: true
date: 2018-03-03 03:42:51
categories:
- telegram
tags:
- telegram
- bot
- cn
thumbnail: https://steemitimages.com/DQmPzSCWKiV7vuPjX8PZtoFSr7mwjwtDUU6xiTfaeh4gKaA/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在之前的文章中，说到自己计划[把萌蛋弄到 Telegram 上，做一个Telegram bot](https://steemit.com/cn/@oflyhigh/6acgm8)，准备一步一步~~似魔鬼的步伐~~ 记录下来。

今天就先来大概了解一些Telegram bot 与微信公众号/微信机器人的异同。

![](https://steemitimages.com/DQmPzSCWKiV7vuPjX8PZtoFSr7mwjwtDUU6xiTfaeh4gKaA/image.png)
(图源 ：[bing.com](https://bing.com))

# 微信机器人


#### 微信公众号机器人

微信公众号收到信息后，微信会把信息发送到你指定的网址上，你的网站程序收到并处理信息后再返回给微信，微信再返回给用户。

所以要给微信公众号添加一些功能，你**首先得有一个网站**，否则是没法添加一些自定义的功能的。微信公众号无法应用在群聊中，只能坐等用户去访问，这是最大的弊端了。


#### 微信机器人，基于Web版

除了微信公众号，我们还可以直接用一个微信号来跑微信机器人。

微信机器人的本质是利用微信Web版的API收发消息（相当于一个真人登陆微信Web版）。所以微信机器人可以实现很多微信公众号实现不了的功能，比如说在群内应答消息，添加好友，删除好友等功能。

但是由于微信Web版不支持抢红包，所以利用Web版API实现的机器人也无法抢红包哦。另外，对于微信而言，微信Web版修改API比较方便，所以一旦微信API变动，基于微信Web版的机器人将会无法使用。


#### 微信机器人，基于破解版

Web版的机器人比较好实现，有好多前辈监听整理了微信Web版的API，但是每次微信修改API，就得随之变动。另外，也无法实现发红包抢红包等微信手机客户端才有的功能。

所以，更高端的做法是破解（反编译）微信，然后在其基础之上实现各种功能，比如说抢红包。

#### 微信机器人的封号问题

相比于微信公众号，后两种微信机器人使用频度过高的话，非常容易被微信发觉并封号。这也是我后来停掉萌蛋并把其迁移到微信公众号的主要原因。

因为萌蛋那个微信号，我舍不得被封掉呢。

# Telegram 机器人

![](https://steemitimages.com/DQmUVqrNSpNMSkRGMz9JC3BQriTpbHLZn2vZoYLdrhpdeNv/image.png)
(图源 ：[bing.com](https://bing.com))

Telegram 机器人最大的优点在于官方提供API。

这样你就无需去研究如何破解Telegram软件，或者如何监听整理API，也不用担心API频繁变动导致的机器人不工作。

Telegram机器人的工作方式类似于基于Web版微信机器人，也就是说无需像微信公众号那样提供一个网址来接收、处理以及反馈消息，我们只需在本地跑一个脚本即可，省却了购买网站空间的费用啊。


除了提供API以外，Telegram还提供了完善的教程以及Python库（别的库应该也有，我没去关注）。你想到的没想到的，Telegram 都帮你想了，帮你做了，所以，你还等什么呢？机器人玩起来吧。


# 参考资料

* https://github.com/python-telegram-bot/python-telegram-bot
* https://core.telegram.org/bots/api

- - -

This page is synchronized from the post: [Telegram bot 与微信公众号/微信机器人](https://steemit.com/@oflyhigh/telegram-bot)
