
---
title: '关于见证人收益估算功能出错的说明 / api.steemit.com was suddenly upgraded to 0.21.0'
permlink: --api-steemit-com-was-suddenly-upgraded-to-0-21-0-2019-07-30
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-07-30 11:07:12
categories:
- witness-category
tags:
- witness-category
- witness
- steemit
- api
- cn
thumbnail: 'https://cdn.steemitimages.com/DQmd8WdCzQrvkaQ3Wkoh2t8nBrGq5mmPdYdGWooz3auC5QB/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---



今天按惯例检查了一下我的见证人列表程序，结果发现其它功能还算正常，但是收益估算严重偏差。

以TOP10见证人为例，单日收益竟然高达3249.50STEEM：
>![](https://cdn.steemitimages.com/DQmd8WdCzQrvkaQ3Wkoh2t8nBrGq5mmPdYdGWooz3auC5QB/image.png)

我的见证人日收益，显示的值竟然高达99.92 STEEM：
>![](https://cdn.steemitimages.com/DQmQ5XDLYqzDrxJiVsqJyqCkM1ErebbeiHKAQ2jt4jJM3oA/image.png)

我是要发家了嘛？仔细想想，估计是想多了，看了一下steemd.com，随机见证人每个块的奖励还是1.184 SP，也就是说上述显示通通是幻觉。

问题出在哪里呢？我在本地用`anyx.io`做节点，跑了一下计算程序，显示一切正常。
>![](https://cdn.steemitimages.com/DQmRi5YaEwmijEjVPHf57thCxca5Ha8CbyZ4eY1ew9qgfex/image.png)

也就是说TOP20的见证人收益约为324SP每天，随机见证人大家平分1624.7452个SP，TOP20和随机见证人每块收益分别为：
>`witness_reward (TOP 20) 0.23694201410676866`
`witness_reward (RANDOM) 1.1847100705338434`

这数据还算贴题，那服务器的脚本哪里出错了呢？我想了想，唯一的差异就是服务器脚本用的是`api.steemit.com`节点。

那么用`api.steemit.com`节点跑一下程序试试，结果出现如下错误：
>`    STEEM_CONTENT_REWARD_PERCENT =  cfg['STEEM_CONTENT_REWARD_PERCENT']`
> `KeyError: 'STEEM_CONTENT_REWARD_PERCENT'`

可是这个参数怎么会没有了呢？看了一下STEEM的github最新代码，果然把`STEEM_CONTENT_REWARD_PERCENT`这个参数拿掉了，可是这个参数即便拿掉不也应该是硬叉21之后的事情嘛？

然后看了一下`api.steemit.com`节点的版本，果然已经是0.21.0了
>![](https://cdn.steemitimages.com/DQmWygXkpj4DTki6wHHvbJHNQPZNngvtAtpSsBJMk8YajLt/image.png)

所以问题的原因就是：api.steemit.com 突然升级至0.21.0（was suddenly upgraded to 0.21.0）导致我的程序判断出错。

哎，作为服务提供者，你不会事先发个声明嘛？说升级就升级，也太任性了吧？

不过没办法，有钱就可以这么任性，至于我们这样没钱的，只好认命的去改程序喽？/(ㄒoㄒ)/~~

---

English version:

The sudden upgrade of api.steemit.com to 0.21.0 caused my program to misjudge.
I will modify the program as soon as possible

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>


- - -

This page is synchronized from the post: ['关于见证人收益估算功能出错的说明 / api.steemit.com was suddenly upgraded to 0.21.0'](https://steemit.com/@oflyhigh/--api-steemit-com-was-suddenly-upgraded-to-0-21-0-2019-07-30)
