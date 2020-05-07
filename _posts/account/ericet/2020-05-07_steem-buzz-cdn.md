
---
title: 'steem.buzz加了CDN加速'
permlink: steem-buzz-cdn
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-05-07 02:00:15
categories:
- cn
tags:
- cn
- cn-reader
- cn-curation
- whalepower
- lifestyle
- build-it
- jjm
- mini
- palnet
- zzan
- dblog
- diamondtoken
- marlians
- neoxian
- lassecash
- upfundme
- actnearn
thumbnail: 'https://cdn.steemitimages.com/DQmfCwzAngoygX14Z5StzqPcTEo137KTHLRmQP9xS1H69fk/1.PNG'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


SteemCN的网站加载速度一直是个头痛的问题

由于服务器在国外，国内不同地区访问网站速度又有不同，有的慢，有的快，有的直接上不了

之前听阿盐提过很多次CDN加速，了解后碰了几次坑后，终于给steem.buzz加上了CDN加速

提升后，访问速度有明显的提升

这是CDN提速前测试的速度：

![1.PNG](https://cdn.steemitimages.com/DQmfCwzAngoygX14Z5StzqPcTEo137KTHLRmQP9xS1H69fk/1.PNG)


这是提速后：

![2.PNG](https://cdn.steemitimages.com/DQmNnVcwXmUyLu63UMwkATMbsCNLkr5f45voNbLQCHTYY4s/2.PNG)


绿色代表范围速度快，红色代表延迟。提速后绿色的地区明显多了

之前阿盐反应打开登陆页面非常的慢，其中有个文件需要加载1.7分钟才能完成：

![](https://cdn.steemitimages.com/DQmQfL5SbPs7HuCjdHnym1vhbURkUFuJ36miyZVC1q2S7pg/image.png)

使用Cloudflare提供的Rocket-Loader后，那个文件加载1秒不到。性能提升了100倍！

![](https://cdn.steemitimages.com/DQmYWRV8SGfWbGZeckynUsbzhid4BPRegsPyHQghJf7a69w/image.png)

部分用户登陆steem.buzz会出现502错误，刷新一下页面。如果问题还在，清理一下缓存就好了


![](https://cdn.steemitimages.com/DQmeQuifYnJyVntiNttqTyQdy5ppKhG6ZyLz2thENTJU38D/image.png)

- - -

This page is synchronized from the post: ['steem.buzz加了CDN加速'](https://steemit.com/@ericet/steem-buzz-cdn)
