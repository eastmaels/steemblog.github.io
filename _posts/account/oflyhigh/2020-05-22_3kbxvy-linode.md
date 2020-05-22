
---
title: '又被Linode小小的坑了一下'
permlink: 3kbxvy-linode
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-05-22 13:46:54
categories:
- cn
tags:
- cn
- life
- blog
- vps
thumbnail: 'https://images.hive.blog/DQmVwuwcjFGEnck77LKYsshsAfNcZCAruYeGzYSUdhEbNQv/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


昨天早晨起床自己在AWS运行的某项服务很不稳定，查了大半天也没查到有什么问题，弄得满头雾水。


![image.png](https://images.hive.blog/DQmVwuwcjFGEnck77LKYsshsAfNcZCAruYeGzYSUdhEbNQv/image.png)
(图源 ：[pixabay](https://pixabay.com/))

然后下午和朋友聊天时，他提到他在Linode的服务昨晚也出了一些问题，时间段大致和我相同，这就引起了我的兴趣，难道是全球骨干网的故障？

但是浏览了一下邮件，我发现我冤枉骨干网了，因为我发现在那个时间段，我收到几封内容大致如下的邮件：
>Your Linode , XXXX, has exceeded the notification threshold (90) for CPU Usage by averaging 135.3% for the last 2 hours.

CPU超限这么多，那么肯定是服务不稳了，不如为啥超限这么多呢？我的程序不能这么废CPU啊，再继续检查邮件，又发现这样一封：
>Hello oflyhigh! The following activity has recently occurred:
>
> * Live Migration - XXXXXXXXXXX GMT
>
>Linode uses live migrations to evacuate hosts for routine maintenance and to rebalance its fleet. These are designed to occur in the background and cause minimal performance impact. No action is required from you, and we do not expect it to cause downtime for the Linode.

擦，这个`Live Migration`，我并不需要它帮我做什么迁移啊？然后看这对句对性能影响微乎其微(cause minimal performance impact)，我去看一下CPU占用图，结果发现类似这样的图形：
>![image.png](https://images.hive.blog/DQmQxN1UjVczPZ4AjDZ5FWb7UAPQRgWr2CM8v4MGvFzhhov/image.png)

而中间高高耸立的就是他们搞什么动态迁移的时间段！去帮助里找和`Live Migration`有关的内容，只找到这样一篇文章：
>[How does a "Live" Migration differ from a "Cold" Migration?](https://www.linode.com/community/questions/17853/how-does-a-live-migration-differ-from-a-cold-migration)

里边倒是没什么实质内容，倒是说了只会在邮件里收到通知，控制面板里不会有通知信息，我去控制面板里找了半天，果然没有。

也就是说Linode在没实现通知我的情况下，搞了个什么对性能影响微乎其微的动态迁移，导致我VPS负载超高。不过考虑到他们邮件里说是为了平衡队列优化性能啥的，我就不去计较了。


![image.png](https://images.hive.blog/DQmPhqLK7gdmGg6atA1TkP95bQnLjQr5SwkipLB6R1GcHKb/image.png)
(图源 ：[pixabay](https://pixabay.com/))

至于为什么Linode的故障导致我AWS某项服务的不稳，其实一想也就清楚了，因为我AWS的那项服务依赖于Linode几台VPS提供的服务啊。

- - -

This page is synchronized from the post: ['又被Linode小小的坑了一下'](https://steemit.com/@oflyhigh/3kbxvy-linode)
