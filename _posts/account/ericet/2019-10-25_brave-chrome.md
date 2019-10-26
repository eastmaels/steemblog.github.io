
---
title: 'Brave/Chrome一起崩溃了'
permlink: brave-chrome
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-10-25 17:40:39
categories:
- cn
tags:
- cn
- cn-reader
- brave
- whalepower
- build-it
- lifestyle
- steemleo
- jjm
- sct
- sct-cn
- sct-freeboard
- palnet
- zzan
- dblog
- mediaofficials
- marlians
- neoxian
- lassecash
- upfundme
- actnearn
thumbnail: 'https://cdn.steemitimages.com/DQmPawggmg3n3iSXSGYtcneHsymj9uYH6DMhxhR1zK4bPCY/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


今早像往常一样，打开Brave浏览器。突然，弹出一个小窗口说我装的steem keychain崩溃了，让我重新安装。同时，Brave的页面也崩溃了：

![](https://cdn.steemitimages.com/DQmPawggmg3n3iSXSGYtcneHsymj9uYH6DMhxhR1zK4bPCY/image.png)

检查了一下，网络没有问题。并且点击任何页面都没有反应。想尝试清除一下缓存也没有办法。

没办法下，只能卸载了Brave浏览器，又重新下了新的brave。但是还是同样一个问题。

既然不让我用Brave，那我改用chrome好了。打开chrome后，发现也是同样的问题。

既然是同样的问题，那就应该是chrome方面出了问题，毕竟brave是基于chrome开发的。

在网上搜索了一番，找到了原因：[Google Chrome/Microsoft Edge Chromium version 78.0.x error "Aw, Snap! Something went wrong while displaying this webpage." when using Endpoint Protection](https://support.symantec.com/us/en/article.tech256047.html)

根据今日SEP发布的问题，如果你的Chrome/Brave浏览器的Chrome版本是78.0.x，那就可能和Symantec Endpoint Protection（SEP）有冲突。

目前发现几个环境可以引起这个问题：
* 使用Chrome版本是78.0.x
* 使用Windows Server 2016 或者Windows 10 RS1
* 使用任何装有低于14.2版本的SEP的Windows操作系统

看了一下我的几个环境，发现我中了2个：chrome版本78.0.x，并且使用低于14.2版本的SEP

![](https://cdn.steemitimages.com/DQmc44KFG8mo5a9UBzuJjhJAYUY3nDkfn1zHnout1S3QH7K/image.png)

![](https://cdn.steemitimages.com/DQmcNTWpByw5cy4qtDWRJKdr3EZxv9SLCgqqY14MmMDEjuK/image.png)

文章里面给了暂时的解决办法。如果没办法升级SEP或者Chrome版本，可以使用暂时的一个解决办法：

运行的时候，关闭RendererCodeIntegrity 功能
~~~
Chrome.exe –disable-features=RendererCodeIntegrity 
~~~

![](https://cdn.steemitimages.com/DQmXUUa585h5hCfS8PLkvcAE1k9kzpwQLQGfmejgqNRZ36X/image.png)

运行后一切恢复正常~

如果你不想每次都使用命令的模式打开浏览器，可以修改便捷方式，在Target那里加上“-disable-features=RendererCodeIntegrity”。这样每次只要点击图标就可以打开了。

![](https://cdn.steemitimages.com/DQmVNHctmcmSu579nTBCQSGGxcACWLuHEzNzH5eHADiM8KH/image.png)

- - -

This page is synchronized from the post: ['Brave/Chrome一起崩溃了'](https://steemit.com/@ericet/brave-chrome)
