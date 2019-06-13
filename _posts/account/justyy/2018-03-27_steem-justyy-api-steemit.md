
---
title: '《Steem 指南》之 justyy 在线工具与 API 系列 - 查看您投票的SteemIt见证人'
permlink: steem-justyy-api-steemit
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-27 19:55:21
categories:
- cn-reader
tags:
- cn-reader
- busy
- cn-programming
- steem-guides
- cn
thumbnail: https://steemitimages.com/DQmc9ka9n5aVok9ShgzmuswUVjMKnJXWkSYfhTyXtKLr41c/banner.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmc9ka9n5aVok9ShgzmuswUVjMKnJXWkSYfhTyXtKLr41c/banner.jpg)
*Image Credit: steemh.org*

## 前言
我成为[见证人](https://steemit.com/cn/@justyy/5h6gyv-cn)有一个月左右了，然后就和其它见证人一样，到处拉票，特别是手上拥有大量SP的大鱼更是一票难求。

我在拉票的过程中，有些大鱼人比较 nice 则会说，“我手上30票已经满了，等哪天有人不在线上了，我就投你票”。好吧，这一等不知道得等多久……

这下好了，今天走在马路上琢磨着这事，想着，写一个工具，把你投票的见证人的状态全列出来，这样谁不在线上了，一清二楚，拿着这个数据再去找大鱼，估计他也很难再搪塞了吧，嘿嘿，说干就干，今天很顺利，代码一调就过。

## 离线的见证人
见证人的服务器离线了，很有可能是：
1. 不玩了
2. 机器硬件不够了（内存不够了）
3. 配置错误（私钥错误等）

如果您的见证人一直处在离线状态，那么请考虑取消对于他们的投票，这样才能把您手上珍贵的一票交到更需要的人手上，比如我 [投票给 @justyy](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy) ^_^。这个小工具能列出您所投票的见证人信息。

## 工具地址 Witness Tool
中文：https://helloacm.com/tools/steemit/list-of-witness/

英文 [Steemit Witnesses List - Unvote Inactive Witnesses](https://helloacm.com/tools/steemit/witness/)

## 使用方法
只需要在 STEEM ID 文本框里输入 ID 并按回车（或者点下方绿色的按钮）即可
![image.png](https://gateway.ipfs.io/ipfs/QmZQbXchaYrYVrE1eGeGg8DfWgokfLpdx1yBxpKePov1ky)

一会儿就得到了结果，比如：
![](https://steemitimages.com/DQmNM98NUmHTAxbE9US9o3LAM3rceaNvwj4DkaiArQHfdLF/image.png)

状态那一列如果红色字体就表示该见证人离线了，可以点击链接 `取消投票` 来空出一票。

取消投票是链接到 steemconnect:

![image.png](https://gateway.ipfs.io/ipfs/QmX53kUSbL38rK53pLY4BufJuJq9jP8P1ZSUZyP4u3DgNL)

## 原理
通过 STEEMSQL 获取见证人信息，其中 Signing Key 如果含有大量的1 就表示下线了，比如 `STM1111111111111111111111111111111114T1Anm`


## API 程序接口(Application Programming Interface)
API访问接口如下：
```
https://uploadbeta.com/api/steemit/account/witness/?cached&id=justyy
```

数据将以JSON格式返回，每一行就是一个见证人信息，其中包括了以下字段：

> total
miss_rate
sbd_interest_rate
account_creation_fee_symbol
last_sbd_exchange_update
maximum_block_size
sbd_exchange_rate_base_symbol
votes
votes_count
last_aslot
running_version
signing_key
account_creation_fee
total_missed
> hardfork_version_vote
last_confirmed_block_num
hardfork_time_vote
sbd_exchange_rate_quote
sbd_exchange_rate_quote_symbol
url
name
created


如果 $_GET 参数 s 没有指定，该API接口也会去找 $_POST 变量 id。

> curl -X POST https://helloacm.com/api/steemit/account/witness/ -d "id=justyy"

## STEEMIT API 服务器
当前 我提供了4个免费的STEEMIT API服务器 分别于世界不同的地方供免费使用 (fair use policy)

- 美国东部: helloacm.com
- 日本东京: happyukgo.com
- 英国伦敦: uploadbeta.com
- 美国西部: steakovercooked.com

--------------------------
- [SteemIt 工具、API接口、机器人和教程](https://helloacm.com/tools/steemit-tools/)
- 支持我的工作 支持我成为 [见证人](https://steemit.com/cn/@justyy/5h6gyv-cn) 请在 [这里 投我一票!](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy)
- [代理 5 SP](https://helloacm.com/tools/steemit/delegate-form/?delegatee=justyy) 即可成为 [YY 银行股东](https://steemit.com/cn/@justyy/2bwmvk-yy).

本文已经同步到：[https://justyy.com/archives/6162](https://justyy.com/archives/6162)
[SteemIt Tools, Bots, APIs and Tutorial](https://helloacm.com/tools/steemit/)

- - -

This page is synchronized from the post: [《Steem 指南》之 justyy 在线工具与 API 系列 - 查看您投票的SteemIt见证人](https://steemit.com/@justyy/steem-justyy-api-steemit)
