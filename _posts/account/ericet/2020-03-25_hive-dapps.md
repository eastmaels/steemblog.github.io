
---
title: '怎么在HIVE上取消DApps授权？'
permlink: hive-dapps
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-03-25 03:16:30
categories:
- cn
tags:
- cn
- cn-reader
- revoke
- whalepower
- lifestyle
- jjm
- mini
- steem2hive
- palnet
- zzan
- dblog
- diamondtoken
- marlians
- neoxian
- lassecash
- upfundme
- actnearn
thumbnail: 'https://cdn.steemitimages.com/DQmTZbjM3zhUSiz6FysJ9Vy7JYs9dv4gEPE6ZvHfnWNRGDq/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


自从STEEM一分为二后，很多之前STEEM上的DApps纷纷搬离STEEM转投HIVE

但是也有部分的DApps留在了STEEM上，比如fundition，steemhunt，dclick等

既然这些DApps将要留在STEEM上，HIVE上授权给他们就没有什么意义了，所以有空可以清理一下授权名单。

要查自己授权给了哪些账号，可以通过https://hiveblocks.com/@用户名 查看。 比如这是我在HIVE上的授权名单：
![](https://cdn.steemitimages.com/DQmTZbjM3zhUSiz6FysJ9Vy7JYs9dv4gEPE6ZvHfnWNRGDq/image.png)

其中steempeak.app, drugwars.app, fundition.app, steemauto,dclick.app都留在了STEEM上，所以可以在HIVE上取消这些授权。

比较简单的方法是通过hivesigner取消授权（类似steemconnect）

取消授权链接：https://hivesigner.com/revoke/授权账号 

比如我想取消对steempeak.app的授权:

* 进入https://hivesigner.com/revoke/steempeak.app 

![](https://cdn.steemitimages.com/DQmdmPFntLvXAFj7cS5PmUpanYthF3WSaUS4PE3RZJw4Q3y/image.png)

* 输入账号和活动密钥

![](https://cdn.steemitimages.com/DQmZQxPbLCaE6YA7ky7dLPK4A9ConW4xazpCJcy6mk6mmcK/image.png)

* 点击Revoke取消授权

![](https://cdn.steemitimages.com/DQmXFR6rtZdBdqVwTay84Be9MgtxCzcsbJ6oYDKGYMNFoQ5/image.png)

这样就取消了对steempeak.app的授权了

- - -

This page is synchronized from the post: ['怎么在HIVE上取消DApps授权？'](https://steemit.com/@ericet/hive-dapps)
