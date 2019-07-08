
---
title: '终于摆平了新版steemconnect~'
permlink: 5mzbdy-steemconnect
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-07-08 09:06:48
categories:
- cn
tags:
- cn
- sct
- zzan
- palnet
- steem
thumbnail: 'https://cdn.steemitimages.com/DQmbcqDTZ6x69h6TskeHV6rVvwUSYYPyxSnj55RczEqfcB4/steemconnect4.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


上周折腾新版steemconnect没有成功（https://steempeak.com/cn/@andrewma/steemconnect），今天想再试一把。

首先还是想试一下sc推荐的desktop app，点击网站接直接到了https://github.com/bonustrack/steemconnect/releases.

![steemconnect4.jpg](https://cdn.steemitimages.com/DQmbcqDTZ6x69h6TskeHV6rVvwUSYYPyxSnj55RczEqfcB4/steemconnect4.jpg)

用就用最新的，V0.1.2，我主要试了红框标识的两个应用，第一个是chrome扩展程序，下载，问了问度娘如何在chrome中增加扩展程序，增加成功，工具栏显示出了sc的小图标，小小一阵欣喜，但点击图标后没有任何反应？不知道为什么？是不是要梯子才行？白高兴了。第二个应用是exe文件，但必须要求64位机器，可惜我的机器太老，还是32位的，此路又不通。

没有办法用desktop，只能回去再试试登陆授权的方法了。重新回到sc的登陆首页，点登陆后发现需要输入keychain密码，keychain同样需要梯子（之前试过），但下面有个import account，点这个试一下，这里要输入master key 或者 active key，登陆成功再点击授权，还是报上次出现过的错误，本以为只是时间的提示。

![steemconnect1.jpg](https://cdn.steemitimages.com/DQmPUHMGykxTvQAU1RpmcgDwXXqcMdAJzZiScs6K5hLxCL8/steemconnect1.jpg)

这次仔细看了一下，前面是now，后面是trx.erp，不知道trx.erp是个什么东东，但感觉是不是时间不一致的提示呢？报着试一试的想法，修改了机器的系统时间，大概和提示中now的时间看齐，再返回重新登陆授权，这次终于成功了！

![steemconnect6.jpg](https://cdn.steemitimages.com/DQmW2Z1tiyzyg84ah8wYoVBpB2LyAPipiuPQKBoqLwoeG52/steemconnect6.jpg)

- - -

This page is synchronized from the post: ['终于摆平了新版steemconnect~'](https://steemit.com/@andrewma/5mzbdy-steemconnect)
