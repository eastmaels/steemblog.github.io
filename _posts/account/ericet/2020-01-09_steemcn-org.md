
---
title: 'steemcn.org被墙'
permlink: steemcn-org
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-01-09 03:38:24
categories:
- cn
tags:
- cn
- cn-reader
- steemcn
- firework
- whalepower
- lifestyle
- steemleo
- point
- jjm
- cc
- mini
- build-it
- palnet
- zzan
- dblog
- mediaofficials
- marlians
- neoxian
- lassecash
- upfundme
- actnearn
- sct
- sct-cn
- sct-freeboard
- busy
thumbnail: 'https://files.steempeak.com/file/steempeak/ericet/mcHRdAAw-image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


很不幸，但是也是事实，steemcn.org被国内墙了。国内用户现在无法访问steemcn.org了

昨天才给网站换了一个服务器，今天村民就反应steemcn上不去了

一开始以为是刚换了个服务器，本地保存了原来服务器的IP。但是村民清除了DNS缓存后，还是连接不上。

阿盐@robertyan给我一个网站可以查看不同国家的DNS解析：https://www.whatsmydns.net/#A/steemcn.org

从网站上可以看到，其他国家的steemcn.org DNS解析IP都是184.168.131.241（网站IP)， 而中国的DNS解析则是31.13.75.17(无法访问的IP）
![image.png](https://files.steempeak.com/file/steempeak/ericet/mcHRdAAw-image.png)

为什么会出现这个情况呢？很有可能的一个原因是长城防火墙把steemcn.org的域名拉黑了，只要访问这个域名的请求，一律返回一个无法访问的IP地址。

我同时查看一下早已被墙的steemit.com的DNS解析，也是相同情况:

![image.png](https://files.steempeak.com/file/steempeak/ericet/3CXsFQLS-image.png)

在查看不同steem前端的时候，发现原来busy.org也被墙了：
![image.png](https://files.steempeak.com/file/steempeak/ericet/aee2Umin-image.png)

不知道steemcn.org被墙的原因，毕竟使用的人数不多

既然改变不了被墙的事实，只能认命。

之前域名特价，买了一个steem.buzz的域名，这时候倒是排上用场了。

国内用户可以通过steem.buzz正常访问steem。如果steem.buzz也被墙了，可以使用备用的:https://steemcn.herokuapp.com/

- - -

This page is synchronized from the post: ['steemcn.org被墙'](https://steemit.com/@ericet/steemcn-org)
