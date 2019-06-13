
---
title: '《Steem 指南》之 justyy 在线工具与 API 系列 - 查看被删除的帖子或评论'
permlink: 7gwnq3-steem-justyy-api
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-30 02:45:21
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
大家都知道，STEEM上的一言一行都是会被记录在STEEM区块链上的，哪怕是7天内可以修改（或者删除）文章或者评论，[修改的记录](https://justyy.com/archives/5420)也都是会被忠实的记录的。不相信？这个在线工具就可以做到把删除过的评论给列出来。

## 工具地址
中文：https://helloacm.com/tools/steemit/list-of-deleted-comments/
英文：[Steemit Deleted-Comments Checker - Recover Deleted Comments](https://helloacm.com/tools/steemit/deleted-comments/)

## 使用方法
把 ID 输入文本框中并按回车或者查询按钮即可：

![image.png](https://gateway.ipfs.io/ipfs/QmewyKSg23qzCLYC6fETAfAjBmiLEUxYQGkTwdHSzpNHUg)

这时候点击 `链接 Permlink` 就能看到删除前的文字。

## API
使用下面API接口

> https://helloacm.com/api/steemit/deleted/?cached&id=justyy

会返回JSON格式的数据，数组中的每个元素含有以下字段：

> tx_id
permlink
timestamp
block_num
transaction_num
ref_block_num
ref_block_prefix
expiration
type
previous
witness
witness_signature
transaction_merkle_root

如果 \$_GET 参数 s 没有指定，该API接口也会去找 \$_POST 变量 id。

> curl -X POST https://helloacm.com/api/steemit/deleted/ -d "id=justyy"

API 并没有直接返回被删除的文本，但是其中 `permlink` 就非常有用，我们可以通过 steemdata 工具来查看详细的修改记录（当然就可以看到删除的文字了），比如：

> https://phist.steemdata.com/history?identifier=https%3A%2F%2Fsteemit.com%2F%40justyy%2Fre-gallantmayor-cant-select-more-than-one-picture-when-using-browser-for-steemit-20180224t005535665z

最后，请记住：谨言慎行。

--------------------------
已经同步到博文：[https://justyy.com/archives/6167](https://justyy.com/archives/6167)

- [SteemIt 工具、API接口、机器人和教程](https://helloacm.com/tools/steemit-tools/)
- [SteemIt Tools, Bots, APIs and Tutorial](https://helloacm.com/tools/steemit/)
- [代理 5 SP](https://helloacm.com/tools/steemit/delegate-form/?delegatee=justyy) 即可成为 [YY 银行股东](https://steemit.com/cn/@justyy/2bwmvk-yy).

## 支持我的工作 支持我成为 [见证人](https://steemit.com/cn/@justyy/5h6gyv-cn) 
1. [请在 这里 投我一票](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), 或者
2. 设置我 [为代理](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

谢谢您！

- - -

This page is synchronized from the post: [《Steem 指南》之 justyy 在线工具与 API 系列 - 查看被删除的帖子或评论](https://steemit.com/@justyy/7gwnq3-steem-justyy-api)
