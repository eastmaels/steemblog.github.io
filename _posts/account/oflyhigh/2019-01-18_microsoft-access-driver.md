
---
title: '坑人的Microsoft Access Driver'
permlink: microsoft-access-driver
catalog: true
toc_nav_num: true
toc: true
date: 2019-01-18 03:44:45
categories:
- access
tags:
- access
- cn-prorgamming
- database
- odbc
- cn
thumbnail: https://cdn.steemitimages.com/DQmT7orhHkVkEqgG7YoABmcc2cwDnFRg3wv3MjYoZ4WeBVP/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


之前用MFC和ACCESS写了一个抓取和查询自己STEEM上文章的工具，这样就可以把STEEM当成自己大脑的备份了，比大脑靠谱的是，STEEM的数据不会遗忘。

![](https://cdn.steemitimages.com/DQmT7orhHkVkEqgG7YoABmcc2cwDnFRg3wv3MjYoZ4WeBVP/image.png)
(图源 ：[pexels.com](https://www.pexels.com/))

这工具一直用着挺方便的，虽然 无论是用MFC还是ACCESS都显得很傻，但是我一直以来的原则都是能用就行，至于一直计划把数据库换成SQLite，因为懒惰一直没行动。

前些天换了台电脑，然后就想着把这个工具也拿过来用，以往在其它电脑上也试过，装个Microsoft Access Driver就行了，因为我的程序编译成64位版本，所以也要装64位版本的Microsoft Access Driver。

我下载了一个Microsoft Access Database Engine 2016 Redistributable，选的64位的，结果安装时提示我Office是32位的，没法安装，晕啊，话说你管我Office用的啥版本啊，另一台机器我没装Office也正常用啊。

不过抗议是没用的，于是我把Office重装为X64版本，结果驱动倒是装上了，我的程序一查询就死机，没有道理啊，毕竟之前用得好好的。

想来想去只能是Office版本或者Microsoft Access Database Engine 2016 Redistributable版本的问题了，Office懒得降级，于是把Driver换成Microsoft Access Database Engine 2010 Redistributable。

程序总算可以用了，查询啥的都没问题，可是一更新文章内容，程序就死机，不过这我就判断不出来是我程序的问题还是API节点的问题又或者是Access Driver的问题了。

等以后不懒的时候调试一下吧，先这么用着喽。


----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>

- - -

This page is synchronized from the post: [坑人的Microsoft Access Driver](https://steemit.com/@oflyhigh/microsoft-access-driver)
