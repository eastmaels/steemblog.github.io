
---
title: 'STEEM API 系列之获取货币转换 - Steem API/converter (SBD, STEEM, VESTS)'
permlink: steem-api-steem-api-converter-sbd-steem-vests
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-09-27 23:04:33
categories:
- cn
tags:
- cn
- cn-programming
- steemstem
- api
- steemdev
thumbnail: https://steemitimages.com/DQmPF5EkvQmViL3pEbj97w2EUA1MdtdwA9uSaDFmr6XcrV7/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


We have so many concepts in [STEEMIT](https://helloacm.com/steemit-quick-way-to-check-if-you-are-a-minnow-or-whale/) namely:  SBD, STEEM, STEEM POWER (SP) and VESTS. There are conversions between them. For instances:

- How much SBD can we get per STEEM?
- How much STEEM per SBD?
- 1 SP = ? VESTS
- 1M VESTS = ? STEEM
- 1 VESTS = ? STEEM POWER
- What is the current median price of SBD?

I have added an handy API to fetch all these data, which now is deployed to four API servers world wide:

- East USA：https://helloacm.com/api/steemit/converter/?cached
- West USA：https://steakovercooked.com/api/steemit/converter/?cached 
- London, UK：https://uploadbeta.com/api/steemit/converter/?cached
- Tokyo, Japan：https://happyukgo.com/api/steemit/converter/?cached

An example to invoke the API on the [Linux Bash](https://helloacm.com/how-to-parallel-for-in-linux-bash-shell/):
`curl -s -X GET "https://helloacm.com/api/steemit/converter/?cached"`

That returns the JSON key-pairs
```
{
"steem_to_sbd": 1.084,
"sbd_to_steem": 0.9225092250922509, 
"sp_to_vests": 2059.117814239809, 
"steem_per_mvests": 485.64486844050873, 
"vests_to_sp": 0.0004856448684405087, 
"sbd_median_price": 1.084
}
```
The results are cached and updated every hour. Using our favorite programming language [PHP](https://helloacm.com/how-to-compute-the-modes-of-an-array-in-php/), this can be pretty easy to use:

```
<?php
   $converter = json_decode(file_get_contents("https://helloacm.com/api/steemit/converter/?cached"), true);
   echo "1 STEEM = ". $converter['steem_to_sbd']. " SBD";
```
![](https://steemitimages.com/DQmPF5EkvQmViL3pEbj97w2EUA1MdtdwA9uSaDFmr6XcrV7/image.png)

[STEEMIT](https://justyy.com/archives/5374) 有 SBD、STEEM、STEEM POWER 还有 VESTS这几个概念。时不时，我们就需要知道它们之间几个转换关系：

- 1个STEEM等于多少SBD？
- 1个SBD 等于多少STEEM？
- 1个SP等于多少VESTS？
- 1M的VESTS 等于多少STEEM？
- 1个VESTS等于多少STEEM POWER？
- SBD的中位价？

这下好了，我把这些都整理成一个API，放在四个服务器上：

- 美国东部：https://helloacm.com/api/steemit/converter/?cached
- 美国西部：https://steakovercooked.com/api/steemit/converter/?cached 
- 英国伦敦：https://uploadbeta.com/api/steemit/converter/?cached
- 日本东京：https://happyukgo.com/api/steemit/converter/?cached

举例，在[SHELL](https://justyy.com/archives/2468)下执行命令：
`curl -s -X GET "https://helloacm.com/api/steemit/converter/?cached"`

返回JSON数据：
```
{
"steem_to_sbd": 1.084,
"sbd_to_steem": 0.9225092250922509, 
"sp_to_vests": 2059.117814239809, 
"steem_per_mvests": 485.64486844050873, 
"vests_to_sp": 0.0004856448684405087, 
"sbd_median_price": 1.084
}
```
API结果每小时更新结果一次。这下方便多了，啥语言想知道结果也就一两句话的事情，比如用我们最喜爱的[PHP](https://justyy.com/archives/5358)：

```
<?php
   $converter = json_decode(file_get_contents("https://helloacm.com/api/steemit/converter/?cached"), true);
   echo "1 STEEM = ". $converter['steem_to_sbd']. " SBD";
```
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**@justyy 是CN 区的点赞机器人**，对优质内容进行点赞，只要代理给 @justyy 每天收利息(100 SP 每天0.04 SBD)并且能获得一次相应至少2倍的点赞，可以认为是VP 200%+ ，详细请看：
- [cn区最低保障系统 上线了!](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy) 
- [CN 区优质内容点赞机器人上线了!](https://steemit.com/cn/@justyy/a-good-content-upvote-bot-cn) 
- [虽然不挣钱，但是CN区低保计划还会继续下去](https://steemit.com/cn/@justyy/cn)

--------------
- [Steem API/converter (SBD, STEEM, VESTS)](https://helloacm.com/steem-apiconverter-sbd-steem-vests/)
- [STEEM API 系列之获取货币转换](https://justyy.com/archives/5379)

欢迎你发表你的见解和看法，特别有意思的评论我可能会奖励你1 SBD哦。
Interesting Comments might be rewarded with 1 SBD.

- - -

This page is synchronized from the post: [STEEM API 系列之获取货币转换 - Steem API/converter (SBD, STEEM, VESTS)](https://steemit.com/@justyy/steem-api-steem-api-converter-sbd-steem-vests)
