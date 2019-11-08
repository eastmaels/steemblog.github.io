
---
title: '跟赞团@cn-trail程序调整'
permlink: 5rdmvf-cn-trail
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-11-08 03:03:24
categories:
- cn
tags:
- cn
- cn-reader
- cn-trail
- whalepower
- steemleo
- cc
- jjm
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
thumbnail: 'https://files.steempeak.com/file/steempeak/ericet/PDtPc5uU-image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


最近跟赞团因为VP不足，频繁的暂停cn-trail程序。今早跟赞团休息12小时后，手动启动的程序的时候，操作失误，给出了4个满赞，让VP又跌到80%以下了。

为了减少人为的失误，对程序进行了调整。如果@cn-trail的VP低于85%，将自动进入休息状态，等休息够了会继续给跟赞的团员点赞或者补赞。

同时对点赞比例的算法进行了调整。

一开始由于跟赞的人数不多，并且有几位大户不怎么发帖，使得跟赞团有很多空闲的VP可以利用，所以把前100位跟赞的团员的点赞倍数从20倍调整到了40倍。但是随着跟赞的人数越来越多，团员越来越活越，VP变得不够用了，所以又把40倍调整到了30倍。

一直的人为调整倍数和观察VP的情况也是蛮累人的，所以将采用以下方式让程序自动对倍数进行调整：

给予前100跟赞的初始30倍的点赞倍数，当每次@cn-trail的VP低于85%的时候，会进入休息状态，同时点赞倍数减1（最低20倍）。每天会自动给点赞倍数加上1（最高40倍）。

也就是说，当跟赞团的VP空闲的比较多的时候，点赞倍数会提高。相反，如果VP比较紧张，点赞倍数就会减少。最坏的情况（VP持续低于85%），团员将最少获得20倍点赞。而最好的情况（VP持续高于85%），团员最高可获得40倍点赞。

如果要查看@cn-trail的运行情况，可以查看cn-trail账号的状态。 这是目前状态，程序在休息。等休息够了，程序会更新状态为“运行中...” 并会显示目前的点赞倍数。这样我就不用每次发帖通知了

![image.png](https://files.steempeak.com/file/steempeak/ericet/PDtPc5uU-image.png)



希望这次调整可以达到满意的效果。

- - -

This page is synchronized from the post: ['跟赞团@cn-trail程序调整'](https://steemit.com/@ericet/5rdmvf-cn-trail)
