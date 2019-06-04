
---
title: '小葵花课堂开课了：来聊聊微信语音控制家电 / Using WeChat voice control appliances'
permlink: using-wechat-voice-control-appliances
catalog: true
toc_nav_num: true
toc: true
date: 2017-06-26 05:26:54
categories:
- cn-diy
tags:
- cn-diy
- cn
- iot
- wechat
- esp8266
thumbnail: https://steemitimages.com/DQmP5vdhC9nxQig83AqoHQRjEsRnNDeMZ5dYPkCECJFLXpq/IMG_20170626_122324.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


天天聊steemit的相关技术，有点疲劳，换个话题，轻松一下。
之前在其它朋友的回复下提及以前用ESP8266和微信连接进行家电控制的事，回想那时候玩得是不亦乐乎啊，从点亮一个小灯到控制继电器以及舵机动作到能够做出有一丁点价值的东西，累并快乐着。今天随便分享一下微信语音控制家电的大致流程以及相关技术，不涉及代码，也没有成品的示例，因为以前做的东西玩过之后都不知道被我刷成什么内容啦。

言归正传，瓜子、饮料、爆米花准备好，开始讲课啦。

# 关于Airkiss等等
其实微信对IOT提供了很多技术支持和开发工具，比如airkiss啥的
不像以往设置点啥，都要先用电脑网线连接->设置电脑IP段->访问指定IP->进行设置
现在手机啥的直接连上设备、然后输入家里WIFI密码，一切搞定。
神奇之处就在于没输入密码，咋就通过WIFI连上设备了呢？

这就是微信的airkiss，在其它厂商有的叫做Smartconfig，还有叫做SmartConnect，还有叫做WIFI快连，本质都差不多，其实核心技术就是：
* 手机发送广播UDP数据包
* 设备扫描所有的可用热点，处于混杂模式（监听模式，此模式下可以收到广播UDP包）
* 设备在正确的热点上接收到密码（广播UDP数据包）
* 设备连入网络成功


其中UDP如何发送密码相对比较复杂
大概意思就是两者无法通过UDP包的内容来交换数据（因为还未建立起来连接？）但是可以获取数据包的长度然后呢，聪明的人类就在长度上做文章了，比如长度1000个字节代表1，1001个字节代表2...这样就可以通过不同的长度对内容进行编码

(关于Airkiss的理解直接引用我以前在其它网站发表的部分内容）
既然Airkiss这么高大上，咱也用呗，对不起，我之前的设备用没用这部分内容，因为这要申请成为微信的设备合作商，比较麻烦，并且咱就玩玩，直接把WIFI ID和密码写死在程序里多简单。说了这么多，就是想让大家多了解些技术背景，万一啥时候用到了呢。

# 为啥用微信

其实用啥都一样的，比如用命令行开关灯、或者网页开关灯、或者写个APP开关灯，都差不多了，之所以选择微信，是因为手机随时在身边、又不用写额外的应用、也不用装额外的软件。

微信可以使用注册微信ID，加好友，然后通过类似微信机器人（调用网页版API)的方式通信，弊端是注册ID比较麻烦，网页版API并非官方提供，而且爱好者抓包分析出来的，并不是十分稳定，并且要机器人好保持挂机。

还有一种方式是用微信公众号，额，我记不清订阅号是否有相关功能了，但是企业号和服务号一定可以。你说企业号难注册，有种功能叫测试号，用起来还是很方便的，足矣。


# 大致流程

* 向微信公共号发送控制信息，比如文本的`开灯`、`关灯`等，或者语音信息
* 公众号信息会传递给设置的API调用程序(网站上的脚本)
* 脚本中识别出控制信息，对于语音信息，微信提供语音识别引擎
* 脚本将控制信息推送至MQTT代理
* 控制设备接受MQTT代理推送的控制信息
* 控制设备根据对应的控制信息，控制继电器实现开关灯操作

# 需要的设备

* MQTT代理
在这个例子中，我使用的是MQTT技术，当然还可以用其它好多物联网通信协议/机制
但是MQTT简单啊
MQTT代理网上很多，自己搭建一个也不是很麻烦

* 运行网站脚本的网站服务器
因为微信公众号要调用网站上的脚本，所以需要你有个托管网站脚本的地方，比如说虚拟主机、独立服务器之类的

* 控制设备
其实还可以叫做MQTT 客户端
用来接收MQTT代理推送的订阅信息，并根据信息进行操作

* 执行设备
这个就简单啦，继电器一枚，台灯啥的是待控设备


# ESP8266

ESP8266是近年流行起来的带无线连接的单片机设备/模块
以往大家都是用W5100或者ENC28J60等有线连接设备，无线设备要么贵的要死，要么极其难用，ESP8266已经问世就改变了这种情况，并获得的极大的流行与成功。

ESP8266的各种模块/板卡数不胜数，适合不同的应用场景。我手头有三种以上，下边秀一下（有点脏，见谅）

![IMG_20170626_122324.jpg](https://steemitimages.com/DQmP5vdhC9nxQig83AqoHQRjEsRnNDeMZ5dYPkCECJFLXpq/IMG_20170626_122324.jpg)
开发快, 使用的是ESP8266-12F/E, 集成了温湿度传感器、OLED液晶屏、RGB LED、红外接收器、气压传感器等等等

----

![IMG_20170626_121206.jpg](https://steemitimages.com/DQme5myC1Xr7w2xAwJi7HBvJJEDPkVjJETjQy1q957PSy5Z/IMG_20170626_121206.jpg)
ESP8266-12F/E的简化应用小板

----

![IMG_20170626_121233.jpg](https://steemitimages.com/DQmcgeWPBaAEfTp3ptWssQmz9cuRnLuNniDFKE5nYmUNSCA/IMG_20170626_121233.jpg)
ESP8266-01 

----

当然，除了ESP8266你还可以用各种其它设备，不过我不会偷摸告诉你ESP8266最廉价的事实，上一套我玩Intel 爱迪生时弄的自动浇花系统模型，这套设备全下来1000多大洋，用来浇花或者开灯？那得多贵的花和灯啊。
![IMG_20160909_084922.jpg](https://steemitimages.com/DQmRc8Fwr493xANZtBP5Dhk4YnsSFtUVbFxzLXeDwAaVVTU/IMG_20160909_084922.jpg)


# MQTT 服务器

虽然网上有一些提供服务的MQTT服务器，但是自己搭建也是很有乐趣的事情不是，感兴趣的看这里，我记不清楚我是否在steemit上共享过搭建MQTT服务器的内容了，总之，很简单就是了。

>Eclipse Mosquitto™ is an open source (EPL/EDL licensed) message broker that implements the MQTT protocol versions 3.1 and 3.1.1. MQTT provides a lightweight method of carrying out messaging using a publish/subscribe model. This makes it suitable for "Internet of Things" messaging such as with low power sensors or mobile devices such as phones, embedded computers or microcontrollers like the Arduino.

# 网站服务器

其实网站服务器和独立主机啥的我有一大堆啦，但是为了玩，还是自己本地弄了一个，和MQTT服务器都搭建在一起，很方便的，然后用DDNS以及设置NAT让外网可以访问到服务，就可以啦。

使用香蕉派/树莓派之类的搭建HTTP服务器，这个我一定共享过，感兴趣的去我主页查找吧。

![IMG_20170626_121333.jpg](https://steemitimages.com/DQmNuSiALGzbbwiodN3MFjQnvVd67rm3Y14geTEd84BRJBS/IMG_20170626_121333.jpg)

我用来搭建HTTP服务器以及MQTT服务器的香蕉派M2+, 小巧可爱，性能强大。

----

好了，就聊这么多大，大致思路就是这个样子。
关键字
* 微信公众号
* 网站服务器
* MQTT服务器
* ESP8266

太多的细节和代码就不啰嗦啦。

----
感谢阅读
水平有限，欢迎大家一起讨论，如有谬误，烦请指正

欢迎upvote、resteem以及 following me @oflyhigh 😎
请将我设置成为你的见证人投票代理, 访问 https://steemit.com/~witnesses
 ![](https://steemitimages.com/DQmQhMNaw3fXpHsDM6Jx1bNi732DySj8JQefq9jjQENcosJ/image.png)

- - -

This page is synchronized from the post: [小葵花课堂开课了：来聊聊微信语音控制家电 / Using WeChat voice control appliances](https://steemit.com/@oflyhigh/using-wechat-voice-control-appliances)
