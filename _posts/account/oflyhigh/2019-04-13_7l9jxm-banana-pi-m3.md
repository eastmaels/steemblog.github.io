
---
title: 'Banana Pi M3调整时区'
permlink: 7l9jxm-banana-pi-m3
catalog: true
toc_nav_num: true
toc: true
date: 2019-04-13 01:27:39
categories:
- cn
tags:
- cn
- bananapi
- raspbian
- utc
- raspberrypi
thumbnail: https://cdn.steemitimages.com/DQmZbEt3rgSjajNXkZzLTFngw7bnZy4Bin8R2YsYMDJWUhz/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


好久没有玩香蕉派了，昨晚在上边弄了个简单的定时任务(Crontab)，可是在写入时间的时候突然想起来，我还不知道这香蕉派M3设置的是啥时区呢。

![](https://cdn.steemitimages.com/DQmZbEt3rgSjajNXkZzLTFngw7bnZy4Bin8R2YsYMDJWUhz/image.png)

于是乎运行一下下列命令：
>`date`

显示的时间如下：
>![](https://cdn.steemitimages.com/DQmXoRpAVrfvYvkm2EpcnX7ga3Hxb7KKn7DfbNFQ4zy8exX/image.png)

大家都知道，香港和北京都是东八区(UTC/GMT+08:00)，也就是说我按照和我们平时一样的时间去设定定时任务就好了。

不过因为我的服务器和VPS都是用的UTC(Coordinated Universal Time)时间，强迫症表示不把Banana Pi M3设置成UTC，浑身不舒服，必须改变。

# raspi-config

其实设置起来很简单，只需调用如下命令
>`sudo raspi-config`

![](https://cdn.steemitimages.com/DQmQdBmSkLzC8vZogEZo76mG6NjH4okYvrd3oRh1aDFPjCi/image.png)

选择`4 Localisation Options `
![](https://cdn.steemitimages.com/DQmZQLDGX1AnEdm1ruvuAAA5hvyX9mCvqKJTFzWDpRFMtHX/image.png)

选择`I2 Change Timezone`
![](https://cdn.steemitimages.com/DQmat6GQ8CMbF11tBmFAuCcLzREFUSSqryDSdgqaABwKeJd/image.png)

选择`None of the above`
![](https://cdn.steemitimages.com/DQmTVf538DSWMope39YSr1qP7kafqLSA21eaqSjGcouTtm1/image.png)

选择`UTC`，回到第一个界面，选择`Finish`即可，完成后会提示类似如下信息。
![](https://cdn.steemitimages.com/DQmfQCkvMNkQtoJ8deGCPkVELwBvh13oqEHHf5ty3orPr6c/image.png)

再用`date`命令看一下时间，响应如下：
>![](https://cdn.steemitimages.com/DQmerM6xJbAGa2rCd3c7KusoLLUi7pkT1LUdXmcH2MiqJfe/image.png)

# dpkg-reconfigure

除了使用`raspi-config`进行设置以外，还可以使用如下命令设置时区
>`dpkg-reconfigure tzdata`

如果你运行一下上述命令，就会发现其实和上边设置时区的界面是一样的，这是因为`raspi-config`其实只是简单地封装了`dpkg-reconfigure tzdata`这个命令而已。

在`raspi-config`的源码中，我们不难找到如下代码：
>![](https://cdn.steemitimages.com/DQmbCEWzecDf49RgwTGWTVsWbHdzrMji74fjhb6KNwg4JSW/image.png)

除了设置时区外，`dpkg-reconfigure`还可以做好多工作，这里就不再赘述啦。相比之下，我还是喜欢用`raspi-config`，原因嘛，当然是好记喽。

# 相关链接

* [Coordinated Universal Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)
* [Banana Pi M3扩展系统到整个eMMC存储空间](https://steemit.com/cn/@oflyhigh/banana-pi-m3-emmc)

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>

- - -

This page is synchronized from the post: [Banana Pi M3调整时区](https://steemit.com/@oflyhigh/7l9jxm-banana-pi-m3)
