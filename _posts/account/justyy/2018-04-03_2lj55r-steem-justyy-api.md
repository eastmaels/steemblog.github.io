
---
title: '《Steem 指南》之 justyy 在线工具与 API 系列 - 见证人相互投票 - 谁没有给你投票?'
permlink: 2lj55r-steem-justyy-api
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-03 21:47:57
categories:
- cn
tags:
- cn
- cn-programming
- witness
- steemtools
- steem-guides
thumbnail: https://steemitimages.com/DQmc9ka9n5aVok9ShgzmuswUVjMKnJXWkSYfhTyXtKLr41c/banner.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


**English Translation: [Steemit Mutual Witness Report - Who Hasn't Voted You Back?](https://steemit.com/witness-category/@justyy/steemit-mutual-witness-report-who-hasn-t-voted-you-back)**

![](https://steemitimages.com/DQmc9ka9n5aVok9ShgzmuswUVjMKnJXWkSYfhTyXtKLr41c/banner.jpg)
*Image Credit: steemh.org*

## 前言
见证人也是互相抱团的，网红 @jerrybanfield 给我[留言](https://steemit.com/witness-category/@justyy/witness-tool-update-showing-total-blocks-produced-and-miss-rate#@jerrybanfield/re-justyy-witness-tool-update-showing-total-blocks-produced-and-miss-rate-20180331t010922718z)，问我是否能提供一个工具能用于查看投你为见证人的支持者、和你相互抱团的见证人 还有没给你投票的见证人。

## 工具地址
https://helloacm.com/tools/steemit/list-of-mutual-witness/

## 使用方法
在文本框里输入您的 STEEM ID 按回车或者点击查询按钮即可。

## 这个工具能做什么？
它能够获取以下信息：

1. 您的支持者，也就是谁投了您为见证人，列表将会链接到这个在线工具。
2. 您支持的见证人，这个列表会在这个在线工具中，您可以查看谁离线了。
3. 您支持的见证人中谁并没有投您为一票。需要注意的是：有些人使用投票代理，所以并不是直接的投票。
4. 相互抱团的见证人列表，也就是你投他/她，他/她也投你。

## API 程序接口(Application Programming Interface)
API访问接口如下：

> https://helloacm.com/api/steemit/witness_voters/?cached&id=justyy

将返回4个JSON数组：

1. voted (您的支持者)
2. votes (您支持的见证人)
3. not (您支持的见证人中谁没有给您投票)
4. both (相互投票者)

如果 \$_GET 参数 s 没有指定，该API接口也会去找 \$_POST 变量 id。

> curl -X POST https://helloacm.com/api/steemit/witness_voters/ -d "id=justyy"

--------------------------
本文已经同步到：[https://justyy.com/archives/6180](https://justyy.com/archives/6180)

- [SteemIt 工具、API接口、机器人和教程](https://helloacm.com/tools/steemit-tools/)
- [SteemIt Tools, Bots, APIs and Tutorial](https://helloacm.com/tools/steemit/)
- [代理 5 SP](https://helloacm.com/tools/steemit/delegate-form/?delegatee=justyy) 即可成为 [YY 银行股东](https://steemit.com/cn/@justyy/2bwmvk-yy).

## 支持我的工作 支持我成为 [见证人](https://steemit.com/cn/@justyy/5h6gyv-cn) 
1. [请在 这里 投我一票](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), 或者
2. 设置我 [为代理](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

谢谢您！

**English Translation: [Steemit Mutual Witness Report - Who Hasn't Voted You Back?](https://steemit.com/witness-category/@justyy/steemit-mutual-witness-report-who-hasn-t-voted-you-back)**

- - -

This page is synchronized from the post: [《Steem 指南》之 justyy 在线工具与 API 系列 - 见证人相互投票 - 谁没有给你投票?](https://steemit.com/@justyy/2lj55r-steem-justyy-api)
