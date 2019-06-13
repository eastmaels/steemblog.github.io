
---
title: 'Steem API - Get Curation Stats 查看你平均的点赞数据'
permlink: steem-api-get-curation-stats
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-10-24 21:08:09
categories:
- cn
tags:
- cn
- cn-programming
- steemstem
- steemdev
- steemapi
thumbnail: https://developer.atlassian.com/bitbucket/api/2/reference/images/tags.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://developer.atlassian.com/bitbucket/api/2/reference/images/tags.png)
*Image Credit: atlassian.com*

How much did you curate per day? You can see curation rewards for the last 7 days via (Rewards -> Curation Rewards)

![](https://steemitimages.com/DQmZV8E42y8d4Vw8Gd7icTPkdMNrzfELULZgZWtXdHDyyTH/image.png)：

I spent some time providing this handy [API](https://helloacm.com/steem-apiconverter-sbd-steem-vests/) to get the curation states i.e. replace the ID part in the URL

https://uploadbeta.com/api/steemit/account/curation/?cached&id=justyy

It returns the JSON data

`{"24hr": 2.8020695257949124, "avg": 2.6121824377557816, "7d": 18.285277064290472}`

that corresponds to your curation rewards for the last 24 hours, average per day and last 7 days.

You can pass the value via a more secure POST method, like this.

`curl -s -X POST 'https://uploadbeta.com/api/steemit/account/curation/' -d 'id=tumutanzi'`

More SP, more curation rewards
`{"avg": 96.34443079687016, "24hr": 91.77042842951606, "7d": 674.4110155780911}`

You could use the following four SteemIt API servers (availability 24/7) globally (free of charge, subject to fair use policy):
- East USA: https://helloacm.com/api/steemit/account/curation/
- Japan: https://happyukgo.com/api/steemit/account/curation/
- UK: https://uploadbeta.com/api/steemit/account/curation/
- West USA: https://steakovercooked.com/api/steemit/account/curation/

I will also integrate this in the Wechat Subscription Channel (justyyuk) and [wechat daily ranking table](https://helloacm.com/tools/steemit/wechat-ranking/) later.

--------------------

你每天通过点赞(Curation)能得多少钱？可以通过官网能大概得到过去七天的点赞数据 (Rewards -> Curation Rewards)

![](https://steemitimages.com/DQmZV8E42y8d4Vw8Gd7icTPkdMNrzfELULZgZWtXdHDyyTH/image.png)：

花了点时间，整合了一个[API](https://justyy.com/archives/5379)，供大家使用(替换ID后面的部分)：

https://uploadbeta.com/api/steemit/account/curation/?cached&id=justyy

返回JSON数据：

`{"24hr": 2.8020695257949124, "avg": 2.6121824377557816, "7d": 18.285277064290472}`

分别指的是 过去24小时，平均每天，还有过去7天的点赞收入。

您还可以通过POST方式传递参数，比如：

`curl -s -X POST 'https://uploadbeta.com/api/steemit/account/curation/' -d 'id=tumutanzi'`

SP多点赞收入也会高很多。
`{"avg": 96.34443079687016, "24hr": 91.77042842951606, "7d": 674.4110155780911}`

当前 我提供了4个免费的STEEMIT API服务器 （24/7） 分别于世界不同的地方供免费使用 (fair use policy)
- 美国东部: https://helloacm.com/api/steemit/account/curation/
- 日本东京: https://happyukgo.com/api/steemit/account/curation/
- 英国伦敦: https://uploadbeta.com/api/steemit/account/curation/
- 美国西部: https://steakovercooked.com/api/steemit/account/curation/

将来会整合到 公众号 justyyuk 还有[微信群每日榜单](https://helloacm.com/tools/steemit/wechat/)中，敬请期待~！



> [点赞数据](https://justyy.com/archives/5528)
> [Get Curation Stats](https://helloacm.com/steem-api-get-curation-stats/)

-------------------

> @justyy 是 https://justyy.com 的博主，在  @tumutanzi  [大哥](https://steemit.com/cn/@tumutanzi/5ndvpm-steemit) 的介绍下加入 STEEMIT，写些帖子挣些小钱养家糊口。
--------------------------------
**@justyy 也是CN 区的点赞机器人**，对优质内容点赞，只要代理给 @justyy 每天收利息（**年化率10%**）并能获得一次至少2倍(VP 200%+)的点赞，大鱼 **@htliao** 都加入了这个计划(530 SP)表示支持。
1. [cn区最低保障系统 上线了!](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy) 
2. [cn区低保计划（鼓励新人）真的适合你么？](https://steemit.com/cn/@justyy/56dta3-cn)
3. 今天(2017-10-24) [银行股东名单](https://steemit.com/cn/@justyy/daily-cn-updates-cn2017-10-24)

-------------------
- [SteemIt SP Delegation Tool 简易SP代理工具](https://steemit.com/cn/@justyy/steemit-sp-delegation-tool-sp)
- **[Steemit 在线工具，API接口和教程](https://helloacm.com/tools/steemit-tools/)**
- **[SteemIt Tutorials, Tools and APIs](https://helloacm.com/tools/steemit/)**

- - -

This page is synchronized from the post: [Steem API - Get Curation Stats 查看你平均的点赞数据](https://steemit.com/@justyy/steem-api-get-curation-stats)
