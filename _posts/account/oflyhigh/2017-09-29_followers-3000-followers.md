
---
title: 'Followers 突破3000大关，你想随时查看你的Followers数量吗？公众号增加新的小功能！'
permlink: followers-3000-followers
catalog: true
toc_nav_num: true
toc: true
date: 2017-09-29 12:43:39
categories:
- cn
tags:
- cn
- follower
- wechat
- cn-programming
thumbnail: https://steemitimages.com/DQmSAzkLz3WRbebjozj65KuGdsCDCzHPDZHgHDpSkfJExsD/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


距离Follower突破1000大关已经过去了两个多月，之前庆祝的帖子仿佛就是昨天刚刚发的一样
* [写在Reputation 70之际（Reputation 70+, Followers 1000+, SP 10000+)： 一： 玩steemit经历回顾](https://steemit.com/cn/@oflyhigh/reputation-70-reputation-70-followers-1000-sp-10000-steemit)
* [💰💰(Reputation 70+, Followers 1000+, SP 10000+) 二： 烤箱没有，活动来了, 奖励为 （💰100个STEEM ）](https://steemit.com/cn/@oflyhigh/reputation-70-followers-1000-sp-10000-100-steem)

前两天，偶尔看到Follower人数正好突破3000大关，遂截屏记录一下
![](https://steemitimages.com/DQmSAzkLz3WRbebjozj65KuGdsCDCzHPDZHgHDpSkfJExsD/image.png)


这次不搞什么庆祝了，也没啥值得庆祝的。

只是想告诉大家，微信公众号增加了个新功能：显示Followers和Following 数量。

----

# 如何查询

想知道 自己或别人的***Followers***和***Following*** 数量？ 
关注微信公众号： ***steemit***

输入***`@steemid`*** 即可查询
(将***`steemid`***替换成你自己的账户哦，比如***`oflyhigh`***

例如：
***`@oflyhigh`***
![](https://steemitimages.com/DQmSVLkJjzFgV1gZP4iFrfQ8q5kmb7qgU7Pdn5y1kqBZuKC/image.png)

再来看看刘美女的
***`@deanliu`***
![](https://steemitimages.com/DQmSwNF32y4c2cAFY4droFhQcpaqqdMQUoWiqfMTJqffuGD/image.png)
可恶😡，竟然又比我多！😡

再来看看甜心妹妹的
***`@sweetsssj`***
![](https://steemitimages.com/DQmWNVqeZBM2H6mootJk9qpYqzAyMJC3bSc2mAdzy9CC95M/image.png)
好有魅力 😍 ，好羡慕呀 😍 


# 指令整合
大家或许注意到，我将Followers和Following 数量查询，放在最基本的用户查询里，这样大家就无需记忆以及多输入类似***`?follow`***这样的子命令了。

之后对指令进行规范和整合，是我的一个目标，让公众号更便于大家使用。

# Follower数量排名

3045 个 Follower 大致能排到什么名次呢？
对此我感到很好奇，随手用 [steemdata](https://steemdata.com/) 查询了一下
`print(db['Accounts'].find({'followers_count': {'$gt': 3045}}).count())`
![](https://steemitimages.com/DQmRBCMb9GpJtPQueNgxgEmgCfG9m2xv3wXaWw1d8cnzXzb/image.png)
居然还没进入前200名，任重道远啊。

顺便说一下：
[furion's new toy: A full RPC steemd node for SteemData](https://steemit.com/steem/@furion/furion-s-new-toy-a-full-rpc-steemd-node-for-steemdata)
@furion 为SteemData 专门买了个服务器做Full RPC steemd节点，以后 [steemdata](https://steemdata.com/) 将会更加稳定、快速和可靠。

将followers数量的排名集成到公众号，似乎是个不错的主意。不过有点困难😭

----

# 公众号添加方法

* 方式一：
进入微信通讯录->点击公众号->点右上角加号->搜索steemit，关注即可。

* 方式二：
直接扫描以下二维码：
![](https://steemitimages.com/DQmPH3g5AFW9v9bTGhiMGSUHZL6zdUbPoZpqFEvoH1dCHd2/image.jpg)

欢迎大家多提宝贵意见啊。

- - -

This page is synchronized from the post: [Followers 突破3000大关，你想随时查看你的Followers数量吗？公众号增加新的小功能！](https://steemit.com/@oflyhigh/followers-3000-followers)
