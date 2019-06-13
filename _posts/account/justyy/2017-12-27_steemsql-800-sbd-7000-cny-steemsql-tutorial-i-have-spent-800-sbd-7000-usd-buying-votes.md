
---
title: 'SteemSQL Tutorial - I have spent 800 SBD (7000+ USD) buying votes! SteemSQL 教程 - 我花了800多 SBD (7000多美元)买赞。'
permlink: steemsql-800-sbd-7000-cny-steemsql-tutorial-i-have-spent-800-sbd-7000-usd-buying-votes
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-12-27 11:23:24
categories:
- busy
tags:
- busy
- cn
- steemsql
- steemstem
- cn-programming
thumbnail: https://res.cloudinary.com/hpiynhbhq/image/upload/v1514372209/kocop5sf2c4mrlkr26mr.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I spent around 800 SBD (7000 USD) in buying votes. The following queries the table `TxTransfers` thanks to @arcange's [STEEMSQL](https://steemit.com/steemit/@arcange/steemsql-com-a-public-sql-server-database-with-all-steemit-blockchain-data)

```
select "from", "to", "memo", (amount)
from TxTransfers (NOLOCK)
where
	"from" = 'justyy' and
	memo like 'http%'	
```

This will list all the transfers with memo starting "http". If we group the results, we know exactly how much have been sent to per vote-buying ID.

```
select "to", sum(amount)
from TxTransfers (NOLOCK)
where
	"from" = 'justyy' and
	memo like 'http%'
group by
	"to"
```

This is clear and I did spend a lot in this!

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1514372209/kocop5sf2c4mrlkr26mr.png)

Some data should have been excluded from the [SteemSQL](https://helloacm.com/steemsql-how-to-avoid-sql-injection/) results, for example, the SBD sent to @oflyhigh, @travelgirl, @wilkinshui and @yuxi were not for buying votes. The biggest service I use is @minnowbooster which I have spent 686.7 SBD, Gosh!

Why buy votes? My reasons are:
- Increase your Reputation faster
- Promote your posts
- SEO, the posts worth more than 10 USD have do-follow links

This might still be [useful and reasonable](https://helloacm.com/steemsql-tutorial-i-have-spent-800-sbd-7000-usd-buying-votes/) to use these services. What do you think?

![](https://cdn.pixabay.com/photo/2015/10/31/08/50/coins-1015125_960_720.jpg)
*Image Credit: Pixabay.com*

不查不知道，一查吓一跳，我前前后后花了大概800多 SBD买赞！按市价就是7000多美元！天啊撸。查询如下：

```
select "from", "to", "memo", (amount)
from TxTransfers (NOLOCK)
where
	"from" = 'justyy' and
	memo like 'http%'	
```

这个语句显示了所有买赞的记录，我们再细分一下，按 "to" 来分组：

```
select "to", sum(amount)
from TxTransfers (NOLOCK)
where
	"from" = 'justyy' and
	memo like 'http%'
group by
	"to"
```

这下更清楚了：

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1514372209/kocop5sf2c4mrlkr26mr.png)

除去之前搞活动给 @oflyhigh , @travelgril, @wilkinshui 还有 @yuxi 的几笔小额奖励不算，真的花了7000多美元买赞！特别是之前很大一段时间都在给 @minnowbooster 买赞，一共花了 686.7 SBD。

为啥要买赞？我的原因有：
- [升级](https://justyy.com/archives/5640)更快
- 花钱推帖子
- [SEO](https://justyy.com/archives/5214)，帖子超过10块钱左右，文中的链接就是 follow。

所以即使从帐面上看，买赞并不划算，但是考虑到以上三点，也不那么纠结了。

已同步到博文: [https://justyy.com/archives/5772](https://justyy.com/archives/5772)

> AD 一波，最近SBD涨到10块钱了，SBD比SP值钱多了，所以你把钱存在[YY银行](https://steemit.com/cn-stats/@justyy/daily-cn-updates-cnyy2017-12-15)是很划算的，YY银行吃的是草（借的SP），挤的是奶啊（值钱的SBD）， 每日发 SBD利息，从不间断，提前祝YY股东们圣诞快乐，新年快乐，股东们都在2018里赚大钱，实现[财务自由](https://justyy.com/archives/3954)啊！

通过 [SP 代理工具](https://helloacm.com/tools/steemit/delegate-form/?delegatee=justyy) 成为 YY银行股东，好处多多。只要代理大于10 SP给 @justyy 即可自动成为YY股东。
> [SteemIt 教程、机器人、在线工具和API接口](https://helloacm.com/tools/steemit-tools/)
> [SteemIt Tutorials, Robots, Tools and APIs](https://helloacm.com/tools/steemit/)

# 近期帖子
- [愉快的 Boxing Day | Happy Boxing Day (Photography)](https://steemit.com/cn/@justyy/boxing-day)
- [2017 年，我的热门帖子 My Top Posts in 2017!](https://steemit.com/busy/@justyy/2017-my-top-posts-in-2017)
- [在英国的第13个圣诞节 Merry Christmas 2017! | 月旦评](https://steemit.com/cn/@justyy/13-merry-christmas-2017)
- [乌托邦给 STEEM 带来了第二春 | 月旦评](https://steemit.com/cn/@justyy/steem-or)
- [柴油汽车的 AdBlue 是啥？](https://steemit.com/cn/@justyy/adblue)
- [我玩区块链虚拟货币的原则 - 月旦评](https://steemit.com/cn/@justyy/4awu29)
- [教你如何抱上 utopian 大腿, 如何最大化乌托邦点赞收益？](https://steemit.com/cn/@justyy/utopian)
- [Paypal 贝宝开通 日元帐户](https://steemit.com/cn/@justyy/paypal-cny)
- [Coinbase 支持 BCH的交易了！](https://steemit.com/cn/@justyy/coinbase-bch)

- - -

This page is synchronized from the post: [SteemSQL Tutorial - I have spent 800 SBD (7000+ USD) buying votes! SteemSQL 教程 - 我花了800多 SBD (7000多美元)买赞。](https://steemit.com/@justyy/steemsql-800-sbd-7000-cny-steemsql-tutorial-i-have-spent-800-sbd-7000-usd-buying-votes)
