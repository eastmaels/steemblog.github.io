
---
title: '《Steem 指南》之 justyy 在线工具与 API 系列 - 查看代理'
permlink: steem-justyy-api
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-29 13:12:33
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
在我所有的[SteemIt工具](https://helloacm.com/tools/steemit-tools/)中，查看代理的两个工具最受欢迎。

## 代理能量 
比如我有两个号A和B，我想把A的1000个Steem Power 给B。但是Steem Power 需要3个月时候可以 Power Down 成 Steem（每7天系统把1/13变成Steem)。由此可见，这并不是最好方法，因为：
1. 过程慢
2. 如果B号不是你自己的帐号，那么通过这条路径把STEEM从一个帐号转到另一帐号就很有可能有去无回了。

STEEM代理就是为了解决这两个问题，简单来说，你可以把自己的Steem Power借给另一帐号，代理SP就如把一只会下蛋的母鸡(SP)借出去，从此，下的蛋立刻属于受赠者，但是这只母鸡却还是属于你，而且你也不用担心母鸡被杀人了炖汤吃。

代理和取消代理都可以通过这个[在线工具](https://helloacm.com/tools/steemit/delegate-form/)来完成。有几点我们需要注意的：

1. 代理的能量必须是属于自己的，也就是说别人代理给你的SP你是不能再代理给别人的。
2. 自己代理出去的能量是不能再代理给另一帐号的。
3. 代理立刻生效。
4. 取消代理输入 0 
5. 取消代理，受赠者立马失去了对SP的使用权，但是这些SP也需要7天才能被代理者再次使用。

## 代理查看工具
如果，A借给B，那么我们可以：
1. 查看A (Delegator) 借出的所有SP代理情况：https://helloacm.com/tools/steemit/list-of-delegatees/
2. 查看借给B (Delegatee)的所有代理情况：https://helloacm.com/tools/steemit/list-of-delegators/

## 使用方法
就拿 YY银行来说，我们可以通过 https://helloacm.com/tools/steemit/list-of-delegators/?id=justyy  来看把能量借给 @justyy 的情况，这里我们在工具地址上添加了参数 `id=justyy` 自动把页面上的 `Steem ID` 填上了 `justyy` 

很快，我们就得到了所有代理情况，默认是按照代理SP的数目从大到小排序，您也可以点击表头来对个别字段进行排序。

![image.png](https://gateway.ipfs.io/ipfs/QmTJYj9DMp8qkQbts3VJNQmWekHzAACon7vefr5obfRBxo)

## API
获取 STEEMIT 反向代理委派列表的 程序接口 API (Application Programming Interface) 您只需要传入 ID参数就可以 ：

> https://helloacm.com/api/steemit/delegatees/?cached&id=justyy

返回JSON数据，数组每个元素含有以下字段：

> time
vests
sp
delegator

下面是API返回的一个例子：

> [{"time": "2017-09-17 22:46:18", "vests": 1890000.0, "delegatee": "mrsquiggle", "sp": 917.8161972282788}]

如果 \$_GET 参数 s 没有指定，该API接口也会去找 \$_POST 变量 id。

> curl -X POST https://helloacm.com/api/steemit/delegatees/ -d "id=justyy"

如果您想查看谁把SP代理给了你（搞不好哪天就收到了 @ned 的代理呢），您可以把上面的 `delegatees` 换成 `delegators` 

--------------------------
本文同步到博文: [https://justyy.com/archives/6165](https://justyy.com/archives/6165)

- [SteemIt 工具、API接口、机器人和教程](https://helloacm.com/tools/steemit-tools/)
- [SteemIt Tools, Bots, APIs and Tutorial](https://helloacm.com/tools/steemit/)
- [代理 5 SP](https://helloacm.com/tools/steemit/delegate-form/?delegatee=justyy) 即可成为 [YY 银行股东](https://steemit.com/cn/@justyy/2bwmvk-yy).

## 支持我的工作 支持我成为 [见证人](https://steemit.com/cn/@justyy/5h6gyv-cn) 
1. [请在 这里 投我一票](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), 或者
2. 设置我 [为代理](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

谢谢您！

- - -

This page is synchronized from the post: [《Steem 指南》之 justyy 在线工具与 API 系列 - 查看代理](https://steemit.com/@justyy/steem-justyy-api)
