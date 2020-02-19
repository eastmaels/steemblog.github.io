
---
title: 'O哥学安卓(Android)二：Hello World & 开发者模式'
permlink: oandroidhello-world---2019-10-01
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-10-01 11:04:18
categories:
- cn
tags:
- cn
- android
- study
- app
- busy
thumbnail: 'https://cdn.steemitimages.com/DQmaVmaAhstqHp47XWnh97NaBKt8TMje1cugwXL1sbCiXaM/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---



在上一篇文章中，O哥折腾好久终于把[Android Studio安装成功](https://steemit.com/cn/@oflyhigh/oandroidandroid-studio-2019-09-27)了，不过接下来就两眼一抹黑了，根本不知道从哪开始。

![](https://cdn.steemitimages.com/DQmaVmaAhstqHp47XWnh97NaBKt8TMje1cugwXL1sbCiXaM/image.png)
(图源 ：[pixabay](https://pixabay.com/))

# Hello World
想象弄个简单的Hello World上传到手机，然后从这开始学起，应该会比较简单吧，于是新建了一个***Basic Activity***项目。

>![](https://cdn.steemitimages.com/DQmeyBHhxdjvWAVNGU7iHLrhN4hqdDM7ZhffpKdRZUqSTUu/image.png)

配置里边也基本没动什么，但是把***Minimum API Level***改成了`API 28: Android 9.0(Pie)`，之所以这样，是因为我只想让程序运行到我的真机上，支持一些低版本的没啥意义还浪费资源。
>![](https://cdn.steemitimages.com/DQmTZpC5NWKwKTMBUGyqk2PN6KMjw7QmefXVyuZm4A4WSRr/image.png)


在接下来的同步过程中，却出现了：
>dl.google.com:443 failed to respond

于是又研究半天配置代理以及设置等，稀里糊涂地设置完总算又好用了，哎，这墙，真麻烦。
>![](https://cdn.steemitimages.com/DQmdkKhYczHHwdqxauU6bX5TVRpkin5RVKSSiGBEJnswJ4u/image.png)

都弄完之后，IDE窗口大致是这样的：
>![](https://cdn.steemitimages.com/DQmcMQnpRGMYAnnksPahWsb1zexscxJCKWftkq6byS8fH1g/image.png)

# 开发者模式

 接下来，我想把这个简单的项目弄到手机上，可是USB连上手机后，点***Run App***按钮![](https://cdn.steemitimages.com/DQmXfE3ned42U5boEvg8nkhntkVsLJMqhKLZ1fGgRnNgGtW/image.png)，却在底部提示：
>Error running 'app': No target device found.

找了半天，原来***需要手机设置成开发者模式***，这对移动开发者非常简单的常识，在我看来无异于天书。

满满查找吧，我用Nokia X6和Samsung S8做测试机，找到的打开开发者模式的操作大同小异。

Nokia X6
>设置->系统->关于手机->版本号
连续点击N次之后即可调出开发者选项。

Samsung S8
>设置->关于手机->软件信息->编译编号
连续点击N次之后即可调出开发者选项。

不过只调出了开发者选项还不够，还要在***设置->开发者选项***，选择打开***开发者模式***，以及***USB调试***。

以Samsung S8为例，要保证这两个选项的开启：
>![](https://cdn.steemitimages.com/DQmcHAy1bgXnQkrcYx7DR9kEH8VrHSRTJbDKSsjUnD9s8H3/image.png)

重新连接手机，会发现手机已经被正常识别：
>![](https://cdn.steemitimages.com/DQmdNbByZZw7zjJFsPhR84B6hsM4MfT2vZt6isJohAXbuE5/image.png)

# 运行APP

再次点击***Run App***按钮![](https://cdn.steemitimages.com/DQmXfE3ned42U5boEvg8nkhntkVsLJMqhKLZ1fGgRnNgGtW/image.png)，片刻后会在IDE底部出现类似如下信息：
>![](https://cdn.steemitimages.com/DQmT5PrA5PeCp27AprrWT2gWjwN4VXSmG7ojPZiunb7km4r/image.png)

手机这边已经自动安装并运行这个程序啦：
>![](https://cdn.steemitimages.com/DQmb6AhxWHoFY15xei7FaL2yNXCaCXtg72YkrRvRdD7n3R1/image.png)


没写任何代码，一个Hello World就出来了，并且运行在手机端了，是不是灰常神奇？

# 相关链接

* [O哥学安卓(Android)一：安装Android Studio](https://steemit.com/cn/@oflyhigh/oandroidandroid-studio-2019-09-27)

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>


- - -

This page is synchronized from the post: ['O哥学安卓(Android)二：Hello World & 开发者模式'](https://steemit.com/@oflyhigh/oandroidhello-world---2019-10-01)
