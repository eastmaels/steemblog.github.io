
---
title: '《steem 指南》- Steem 钱包转帐查询工具'
permlink: 2bxnhm-steem-steem
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-06-26 22:08:45
categories:
- cn
tags:
- cn
- busy
- steemtools
- steem-guides
- cn-reader
thumbnail: https://justyy.com/wp-content/uploads/2018/03/steem-guides.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


**This is the Chinese version of [Advanced Steem Account Transfer Viewer](https://steemit.com/@turtlegraphics/advanced-steem-account-transfer-viewer)**

![](https://justyy.com/wp-content/uploads/2018/03/steem-guides.jpg)
*Image Credit: steemr.org*

# 前言
有时候我想搜索一下某条转帐记录，苦于记不太清楚时间，于是只能不停的刷或者翻页来找，很不方便，于是想着做一个简单的[钱包](https://justyy.com/archives/6266)转帐查询工具，可以满足这样的需求。

# 工具地址
https://helloacm.com/tools/steemit/advanced-transfer-viewer/

# 使用方法
只需要输入 ID 然后可以设置参数来限制搜索范围：
- 货币单位可以是SBD或者是STEEM
- 附言是加密过的或者是普通的
- 你发的或者是你收到的
- 有写附言或者是没写附言的
- 发送者ID、接收ID还是附言带着字符串的
- 数量在一定范围内的

# TODO
- 解密附言 - 提交了一个[PR](https://github.com/steemit/steem-js/pull/381)给 steem-js 但是还不清楚是啥状况
- 加入时间等搜索条件

# 使用例子
![image.png](https://ipfs.busy.org/ipfs/QmVonLrZc4zqvLvtqDvdz8oHb1w9KYEomTV74oKk1z41wU)

每条记录都可以通过链接来获得具体所在块的信息 (steemd)。

----------------

## 支持我的工作 支持我成为 [见证人](https://steemit.com/cn/@justyy/5h6gyv-cn) 
1. [请在 这里 投我一票](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), 或者
2. 设置我 [为代理](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

谢谢您！ 我的贡献：[SteemIt 工具、API接口、机器人和教程](https://helloacm.com/tools/steemit-tools/)

## 股东工具
1. 成为股东：[代理5 SP 即可 （退出股东 输入 0即可）](https://helloacm.com/tools/steemit/delegate-form/?delegatee=justyy)
2. [查询当前股东](https://helloacm.com/tools/steemit/list-of-delegators/?id=justyy)

请注意：每次代理都是以最后一次输入的SP数量为标准，比如已经代理10 SP，想多代理5 SP则需要输入 最后的数字 15 SP（而不是 5！）

本文已经同步到[博文](https://justyy.com/archives/6374)

**This is the Chinese version of [Advanced Steem Account Transfer Viewer](https://steemit.com/@turtlegraphics/advanced-steem-account-transfer-viewer)**

- - -

This page is synchronized from the post: [《steem 指南》- Steem 钱包转帐查询工具](https://steemit.com/@justyy/2bxnhm-steem-steem)
