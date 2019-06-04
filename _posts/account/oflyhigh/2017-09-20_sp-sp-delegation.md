
---
title: '微信公众号支持查询SP委派/代理(SP delegation)信息啦！'
permlink: sp-sp-delegation
catalog: true
toc_nav_num: true
toc: true
date: 2017-09-20 12:46:45
categories:
- cn
tags:
- cn
- wechat
- cn-programming
thumbnail: https://steemitimages.com/DQmaQeCeGxk6hqxij8udiLpV9QhXdGy6krtP128yGiQh9H1/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


# SP委派 (SP delegation)简介

Steem 硬分叉 0.18 (HF 0.18 ) 之后多了个新功能，叫做 SP代理/委派 (SP delegation)

* delegator 委托人: 将股权委派的账户
* delegatee 受托者: 接收股权委派的账户

委托人将股权(vesting_shares)委派给受托人，股权（vesting shares）仍由原始账户（委托人）所有，但是投票权、投票收益以及带宽分配等权益被转移(委派)给受托者。

![](https://steemitimages.com/DQmaQeCeGxk6hqxij8udiLpV9QhXdGy6krtP128yGiQh9H1/image.png)
(图源：[pixabay](https://pixabay.com))

#  查询SP委派/代理(SP delegation)的意义

#### 一： 查询别人的SP代理名单

大家都知道 ned 代理给一些作者很多SP，你想知道详细的名单吗？ 想知道名单中是否有你吗？

#### 二： 查询自己的SP代理名单
@justyy 和 @shenchensucc 弄了个CN区的最低保障系统，详情可以参考
* [cn区最低保障系统 上线了！ Introduction to the CN Wechat Group Voting Robot @justyy](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy)
* [YY一个cn区最低保障系统](https://steemit.com/cn/@shenchensucc/yy-cn)

其中一个重要的步骤就是参与者代理SP给 @justyy 或者将来的公共账户。对于参与者而言。查查自己将SP代理给谁了以及代理出去了多少，或者有助于妥善安排资产。

# 如何查询

输入 ***`@steemid?dg`***或***`@steemid?delegations`***就可以开始查询啦。



#### ***`@oflyhigh?dg`***

比如，查询我都将SP代理给了谁，分别是多少？

![](https://steemitimages.com/DQmR4bNY9Cmg227FvtzZVE5xopQz2cWmjxCmpvLRKcCP3rU/image.png)


#### ***`@ned?dg`***

看看 @ned 都将SP代理给了谁，分别是多少？

![](https://steemitimages.com/DQmRvaN96F1L2sXoaYDRgc2mcQcB2kBm1UT9pcNFo2bHwPs/image.png)

#### ***`@dapeng`***

听说 @dapeng 给 @justyy 代理了好多SP

![](https://steemitimages.com/DQmW33Q5cdoWGJNSqXe36ceeNQsB8NXvPYtyhM1rfPmHzrT/image.png)
这才是真爱啊！

# 其它说明

#### 说明一

系统内实际上叫的是***vesting delegations***, 实际上代理过去的和收到的都是***vesting shares***，STEEM POWER是vesting shares的表现形式，但是有所不同。

比如我代理给 aaaa 账户4142028.451502 VESTS，代理时，计算下来可能是 2000 SP, 过了2个月，VEST还是4142028.451502， 折算成SP可能是2010 SP啦。
（以上数据非实测数据）

#### 说明二

微信公众号有返回数据长度的限制，据说是2048字节。

所以当返回数据内容过多，则公众号会返回如下信息：
![](https://steemitimages.com/DQmYWJVofatYjepamYDURCaJU9yyAWiErmPzjJyDuxAzLa8/image.png)

当然了，这种情况属于少数，原则上我可以通过减少显示的项目，比如说不显示时间，不显示VESTS来回避这个问题，但是这样又对大多数情况不友好。所以如果你遇到上述错误，那就是这个用户将SP代理给N多用户。


----

# 公众号添加方法

* 方式一：
进入微信通讯录->点击公众号->点右上角加号->搜索steemit，关注即可。

* 方式二：
直接扫描以下二维码：
![](https://steemitimages.com/DQmPH3g5AFW9v9bTGhiMGSUHZL6zdUbPoZpqFEvoH1dCHd2/image.jpg)

欢迎大家多提宝贵意见啊。

- - -

This page is synchronized from the post: [微信公众号支持查询SP委派/代理(SP delegation)信息啦！](https://steemit.com/@oflyhigh/sp-sp-delegation)
