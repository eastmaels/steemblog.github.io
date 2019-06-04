
---
title: '对抗拖延症：第一个Telegram Echo 机器人'
permlink: telegram-echo
catalog: true
toc_nav_num: true
toc: true
date: 2018-03-08 13:00:27
categories:
- telegram
tags:
- telegram
- bot
- programming
- python
- cn
thumbnail: https://steemitimages.com/DQmUSQDxASribewGMijrabE6i2GtGMTE1fSc2bWGXoYCEgD/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


额，写完标题之后，才发觉ECHO是亚马逊的智能家具机器人的名字。不过我都已经打了十几个字了，就懒得改了，我要说的东西和亚马逊的ECHO风马牛不相及，只是用来学习制作Telegram机器人的一个中间测试环节产物啦。

话说发完[《Telegram bot 与微信公众号/微信机器人》](https://steemit.com/telegram/@oflyhigh/telegram-bot) 这个帖子已经5天没有任何进展了，拖延症越来越严重，难道这又是一个大坑，无法填平？不，不能这样，哪怕只做一点点，有一点点进展，那也是我对抗拖延症取得的重大胜利！走起！

![](https://steemitimages.com/DQmUSQDxASribewGMijrabE6i2GtGMTE1fSc2bWGXoYCEgD/image.png)

# 创建机器人账户

创建机器人是非常简单的事情

* 首先我们添加@botfather
![Screenshot_20180308-200154.png](https://steemitimages.com/DQmQ4eEHgJV46zmUhonYPwQh6gaWZefp6Nj2RACgmYZrVpc/Screenshot_20180308-200154.png)
从它的名字可见一斑，是所有机器人的爸爸

* 打开对话窗口，它会发一些介绍给我们
![Screenshot_20180307-214059.png](https://steemitimages.com/DQmWneYA63WVMnjorqhunzwV7mmhhR1cHBJSvghTop8apTe/Screenshot_20180307-214059.png)
底下则是START按钮

* 点击START，出来开始页面
![Screenshot_20180307-214122.png](https://steemitimages.com/DQmXu594sPFqy6dpa9qebvoMWsk9pskryKhcct3C6m3kCEV/Screenshot_20180307-214122.png)
它给我们列出好多命名，并逐一解释

* 因为我们要创建新bot，所以输入**`/newbot`**
![Screenshot_20180307-214628.png](https://steemitimages.com/DQmPeo7BY8qks5xPit3bBovuVKtDsiUsUcxqsnBaNVyhram/Screenshot_20180307-214628.png)
在这里我们按提示一步步设置我们的bot

* 设置成功信息
![Screenshot_20180307-214716.png](https://steemitimages.com/DQmUAg3cA9qUvp7HvkECoTxPGNLPL2rW2cqeaZK2QzkSvAR/Screenshot_20180307-214716.png)
其中token是我们要在程序中用到的，用来核实身份的

* 我们可以通过`mybot`指令对机器人进行设置和修改
![Screenshot_20180308-084431.png](https://steemitimages.com/DQmbfZtqJYt5Z4SBPdZ7EmFGaxu1Xcicd8ToVVmdUz4iAoU/Screenshot_20180308-084431.png)
我们先不做设置

# 创建成果

成功创建机器人后，我们就可以按照提示的链接信息搜索和添加机器人啦。

* 它长这个样子
![Screenshot_20180307-214735.png](https://steemitimages.com/DQmeWr7zqBrYkTVsErsaUiWiaYVFQRqfnmpCHEkz5gxV3dS/Screenshot_20180307-214735.png)
因为未作任何设置，所以头像啥的都是默认的

* 和它打个招呼
![Screenshot_20180307-214800.png](https://steemitimages.com/DQmaAj7ukL1GucwvJ1b6oG4VKasAVqpn6diXXDkVmKKroRk/Screenshot_20180307-214800.png)
无论发送开始命令还是骂它傻，他都不理我，傻得不要不要滴

# 添加程序

一个啥也不能干的机器人要他干啥？所以我们要给它加些功能啦，当然了，太复杂的我还不会加，先实现个简单的ECHO机器人吧，只会鹦鹉学舌。

#### 安装python-telegram-bot

首先安装 python-telegram-bot
`pip install python-telegram-bot`

#### 添加代码

简单的测试代码如下：
```
from telegram.ext import Updater
updater = Updater(token='533956420:AAG3d0BgHFHjZLhPsGu4feCBNhWHFNpHZ24')

dispatcher = updater.dispatcher

def echo(bot, update):
        bot.send_message(chat_id=update.message.chat_id, text=update.message.text)

from telegram.ext import MessageHandler, Filters
echo_handler = MessageHandler(Filters.text, echo)
dispatcher.add_handler(echo_handler)

updater.start_polling()
```

#### 测试

* 现在来测试一下
![Screenshot_20180308-192307.png](https://steemitimages.com/DQmVow87ZyQ2Yju4JSoFWJYZ9ReLbjJTuBJ2MURZDGeQQhq/Screenshot_20180308-192307.png)

**一个更傻的，只会学舌的机器人诞生啦!**

***注：文中代码以及机器人ID仅为示例，不提供任何服务和保障。***

# 参考链接

* https://github.com/python-telegram-bot/python-telegram-bot
* [Extensions – Your first Bot](https://github.com/python-telegram-bot/python-telegram-bot/wiki/Extensions-%E2%80%93-Your-first-Bot)

- - -

This page is synchronized from the post: [对抗拖延症：第一个Telegram Echo 机器人](https://steemit.com/@oflyhigh/telegram-echo)
