
---
title: '用TraceRoute为你的VPS测测速'
permlink: traceroute-vps
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-07-11 02:17:54
categories:
- cn
tags:
- cn
- steemit
- vps
- traceroute
thumbnail: 'https://cdn.steemitimages.com/DQmP66fQVnRGiK4vMVdHAmcEf5rRDc7U8QwDzAJpnw4yMP3/vps.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![vps.jpg](https://cdn.steemitimages.com/DQmP66fQVnRGiK4vMVdHAmcEf5rRDc7U8QwDzAJpnw4yMP3/vps.jpg)

https://tools.ipip.net/traceroute.php

作为steemit的老骨粉，在当前的环境下，没有一个好的工具（VPS）真是寸步难行。就算有好的工具，也要时时重建，因为你不知道是不是又被封了？！

像linode这样的主机商，它的IP是循环使用的，你重建的时候被分配的IP有可能是别人废弃的！所以，一定要先行检查一下它的速度，或是连接是否正常，不要建好了才发现它的龟速！

**这时，TraceRoute就该登场了！**如上图所示，将你的主机IP填入测试一下，如果响应时间超过200毫秒的话，那就最好换一个主机IP。我的经验是响应在150以下为好，如果在50以下的就是捡到便宜了！

这是一场持久战！

- - -

This page is synchronized from the post: ['用TraceRoute为你的VPS测测速'](https://steemit.com/@lemooljiang/traceroute-vps)
