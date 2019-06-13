
---
title: 'Steemit Wechat Group Ranking Statistics Update and API - SteemIt 好友微信群排行榜 支持显示数据统计和API了！'
permlink: steemit-wechat-group-ranking-statistics-update-and-api-steemit-api
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-09-08 21:09:45
categories:
- cn
tags:
- cn
- cn-programming
- steemdev
- steemstem
- wechat
thumbnail: https://steemitimages.com/DQmaZHzPVw7iq7FsGvcbCX8BFkWo4Zora8GumU1wc5apcJK/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmaZHzPVw7iq7FsGvcbCX8BFkWo4Zora8GumU1wc5apcJK/image.png)

I have added an API to display the statistics for the members in the Steemit Wechat Group. The statistics are updated daily, and the data is returned as JSON.

> https://uploadbeta.com/api/steemit/wechat/?cached

It will return something like this:

> {"count":175,"sbd":{"max":13327.625,"min":0,"mean":221.31464,"median":8.81,"std":1087.9571619885,"modes":[0]},"sp":{"max":66844.898,"min":0.5,"mean":1551.9490628571,"median":58.482,"std":5946.6024767058,"modes":[0]},"esp":{"max":847966.12199099,"min":5.303,"mean":18298.378448611,"median":67.646634050596,"std":98480.071820979,"modes":[15]},"steem":{"max":1322.117,"min":0,"mean":19.082971428571,"median":0,"std":118.73648608133,"modes":[0]},"value":{"max":106878.11127504,"min":0.6997085,"mean":2419.843576324,"median":112.805610783,"std":9297.029245956,"modes":[0]},"age":{"max":502,"min":3,"mean":108.37714285714,"median":53,"std":132.00162571664,"modes":[46]},"vp":{"max":100,"min":9.94,"mean":82.775542857143,"median":95.75,"std":22.0472821679,"modes":[98]},"rep":{"max":74.83,"min":3.52,"mean":48.6112,"median":50.83,"std":13.473083102033,"modes":[25]}}

And it is also updated daily on the [web UI](https://helloacm.com/tools/steemit/wechat-ranking/):   https://helloacm.com/tools/steemit/wechat-ranking/

![](https://steemitimages.com/DQmRFF37gfqyoAoaNaATTnWoqMEZe4kpaJJuNUamJfAWZZ2/image.png)

上两篇帖子讲了根据这个API

> https://uploadbeta.com/api/steemit/wechat/?cached

来获得每天中文区[微信成员](https://justyy.com/archives/5249)的数据（等级，SP，投票能量等），然后进行初步数据统计：

- [数据初步分析系列 STEEM中文微信群排行榜单 - 中位数，平均，和标准方差](https://steemit.com/cn/@justyy/the-average-median-std-of-steemit-wechat-group-steem)
- [你给SteemIt中文微信群拖后腿了么? ](https://steemit.com/cn/@justyy/steemit-simple-nodejs-example-to-show-average-scores-in-the-steemit-wechat-group)

这些数据如果直接放到网页版该多好啊！于是说到做到：

先加一个API 是个好习惯，因为这能让逻辑和表现层分开，可扩展性较强。

> 统计数据：https://uploadbeta.com/api/steemit/wechat/stats/?cached

同样支持日期参数，比如看 2017-08-31日的统计数据：

> 统计数据：https://uploadbeta.com/api/steemit/wechat/stats/?cached&date=2017-08-31

这API会返回JSON格式，也就是以下表（在网页端呈现 https://helloacm.com/tools/steemit/wechat/ ）

![](https://steemitimages.com/DQmbFRyoCbikN1gqQDTFCeRWnHi5xiL1vNGEu1bKMXyHMWF/image.png)

加了一个最大，最小值 ，还有一个频率出现最多的 [Mode](https://helloacm.com/how-to-compute-the-modes-of-an-array-in-php/), 比如帐号年龄在46天的最多，那天估计是被大哥给安利来的吧？

最后，再广告一下：
1. [SteemIt 好友微信群排行榜](https://helloacm.com/tools/steemit/wechat/) 需要入群者 请联系 @tumutanzi 或者 @rivalhw 谢谢。
2. [SteemIt 好友微信群文章列表 RSS Feed](https://helloacm.com/tools/steemit/wechat/rss/)
3. SteemIt 编程 Geek 微信群，请联系 @justyy 让我拉你入群。

![](https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png)
Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原文首发于 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

// Later, it will be reposted to my blogs: [justyy.com](https://justyy.com), [helloacm.com](https://helloacm.com) and [codingforspeed.com](https://codingforspeed.com)  稍后同步到我的[中文博客](https://justyy.com)和英文[计算机](https://helloacm.com)[博客](https://codingforspeed.com)。
- [SteemIt 好友微信群排行榜 支持显示数据统计和API了！](https://justyy.com/archives/5273)
- [你给SteemIt中文微信群拖后腿了么?](https://justyy.com/archives/5247)
- [Simple NodeJS Example to Show Average Scores in the Steemit-Wechat Group](https://helloacm.com/simple-nodejs-example-to-show-average-scores-in-the-steemit-wechat-group/)
- [The Average, Median, STD of SteemIt Wechat Group](https://helloacm.com/the-average-median-std-of-steemit-wechat-group/)
- [数据初步分析系列 STEEM中文微信群排行榜单](https://justyy.com/archives/5249)

# 近期热贴
- [过去7天收益排行榜](https://steemit.com/cn/@justyy/daily-top-30-authors-in-cn-cn7-2017-09-08)
- [数据初步分析系列 STEEM中文微信群排行榜单 - 中位数，平均，和标准方差](https://steemit.com/cn/@justyy/the-average-median-std-of-steemit-wechat-group-steem)
- [你给SteemIt中文微信群拖后腿了么? ](https://steemit.com/cn/@justyy/steemit-simple-nodejs-example-to-show-average-scores-in-the-steemit-wechat-group)
- [今天用了机器人给经理请了假](https://steemit.com/cn/@justyy/ywdqq)
- [ CN 区优质内容点赞机器人上线了！](https://steemit.com/cn/@justyy/a-good-content-upvote-bot-cn)
- [获取微信群成员关注和粉丝的API](https://steemit.com/cn/@justyy/api-two-apis-to-get-the-followers-and-following-list-in-the-wechat-group)
- [高级定制文章列表 RSS/API/阅读器 v2.0](https://steemit.com/cn/@justyy/rss-api-v2-0-the-advanced-wechat-group-posts-feed-api-reader-v2-0)
- [一不小心上了公司推 - 公司对我真是真爱啊](https://steemit.com/cn/@justyy/5ticiv)
- [微信群好友文章列表（网页，JSON API, RSS Feed 2.0）永久免费给大家使用](https://steemit.com/cn/@justyy/json-api-rss-feed-2-0-wechat-group-sortable-rss-feed-api-rss-feed-and-web-ui)
- [微信公众号(justyyuk)机器人支持 STEEM 查询啦](https://steemit.com/cn/@justyy/justyyuk-steem-wechat-bot-now-supports-inquiry-for-steemit-accounts)
- [SteemIt 好友微信群排行榜 - （实时更新版）](https://steemit.com/cn/@justyy/steemit-daily-wechat-group-ranking-steemit)

# Recent Popular Posts
- [Daily Top 30 Authors Pending Payout in the Last 7 days ](https://steemit.com/statistics/@dailystats/daily-top-30-authors-pending-payout-in-the-last-7-days-2017-09-08) 
- [Simple NodeJS Example to Show Average Scores in the Steemit-Wechat Group](https://steemit.com/cn/@justyy/steemit-simple-nodejs-example-to-show-average-scores-in-the-steemit-wechat-group)
- [The Average, Median, STD of SteemIt Wechat Group ](https://steemit.com/cn/@justyy/the-average-median-std-of-steemit-wechat-group-steem)
- [The Zenefit Bot on Slack](https://steemit.com/cn/@justyy/ywdqq)
- [A Good-Content-Upvote-Bot](https://steemit.com/cn/@justyy/a-good-content-upvote-bot-cn)
- [Two APIs to get the followers and following list in the Wechat Group](https://steemit.com/cn/@justyy/api-two-apis-to-get-the-followers-and-following-list-in-the-wechat-group)
- [The Advanced Wechat Group Posts Feed/API/Reader v2.0](https://steemit.com/cn/@justyy/rss-api-v2-0-the-advanced-wechat-group-posts-feed-api-reader-v2-0)
- [Wechat Group Sortable Rss Feed (API, RSS Feed and Web UI)](https://steemit.com/cn/@justyy/json-api-rss-feed-2-0-wechat-group-sortable-rss-feed-api-rss-feed-and-web-ui)
- [Wechat bot now supports inquiry for SteemIt Accounts.](https://steemit.com/cn/@justyy/justyyuk-steem-wechat-bot-now-supports-inquiry-for-steemit-accounts)
- [Bruteforce Solution to Mathematics × Programming Competition #5](https://steemit.com/cn/@justyy/bruteforce-solution-to-mathematics-programming-competition-5)
- [SteemIt Daily Wechat Group Ranking](https://steemit.com/cn/@justyy/steemit-daily-wechat-group-ranking-steemit)

![](https://justyy.com/gif/steemit.gif)
Tags: cn cn-programming steemdev steemstem wechat

- - -

This page is synchronized from the post: [Steemit Wechat Group Ranking Statistics Update and API - SteemIt 好友微信群排行榜 支持显示数据统计和API了！](https://steemit.com/@justyy/steemit-wechat-group-ranking-statistics-update-and-api-steemit-api)
