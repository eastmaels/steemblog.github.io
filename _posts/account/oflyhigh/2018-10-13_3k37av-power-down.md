
---
title: '公众号Power Down查询功能更新'
permlink: 3k37av-power-down
catalog: true
toc_nav_num: true
toc: true
date: 2018-10-13 02:56:09
categories:
- cn
tags:
- cn
- wechat
- steem
- steemit
- cn-programming
thumbnail: https://cdn.steemitimages.com/DQmcWD3dCHckzZx7KnXkh9heYAGTgPo9TDBpmTqu6sD7Bzb/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在之前的文章[RC系统解密之最大MANA(max_mana) / 如何提升](https://steemit.com/steemdev/@oflyhigh/rc-mana-maxmana)中提到***`下次Powerdown要变现的vesting_shares`***是影响***`max_mana`***的关键因素之一。

![](https://cdn.steemitimages.com/DQmcWD3dCHckzZx7KnXkh9heYAGTgPo9TDBpmTqu6sD7Bzb/image.png)
(图源 ：[pixabay](https://pixabay.com/))

微信公共号之前就有一个Power Down的查询功能，会显示用户下次Power Down的时间以及STEEM数量。之前帖子详情可以参考[微信公众号增加账户Power Down信息查询](https://steemit.com/cn/@oflyhigh/power-down)

但是现在去看，好像不是那么完善，比如用户计划提多少？已经提了多少？当前是第几周（一共13周)？所以决心对Power Down的查询功能进行一些更新，更新后的查询支持显示以下信息：
* 计划提多少
* 已经提了多少
* Power Down 速率（每次提多少）
* 已经进展到第几周
* 下次Power Down数量
* 下次Power Down时间

使用方法，直接输入`@yourid`就可以，以我的账户为例，输入应为：***`@oflyhigh`***.

为了测试，我Power Down了200 STEEM，测试的部分返回内容为：
>![](https://cdn.steemitimages.com/DQmTMnVKVF38StXMFBwCCWQX1jHGUUMmMDk8gYM4V6g5FEJ/image.png)

(请忽略命名和排版，这方面我是弱智）

# 公众号添加方法

* 方式一：
进入微信通讯录->点击公众号->点右上角加号->搜索steemit，关注即可。

* 方式二：
直接扫描以下二维码：
![](https://cdn.steemitimages.com/DQmTTqrm6ZypuCGQUUGAaHrMs5LdDwF23kgXr6fXrr4j4NZ/image.png)

# 相关链接

* [RC系统解密之最大MANA(max_mana) / 如何提升](https://steemit.com/steemdev/@oflyhigh/rc-mana-maxmana)
* [微信公众号增加账户Power Down信息查询](https://steemit.com/cn/@oflyhigh/power-down)

- - -

This page is synchronized from the post: [公众号Power Down查询功能更新](https://steemit.com/@oflyhigh/3k37av-power-down)
