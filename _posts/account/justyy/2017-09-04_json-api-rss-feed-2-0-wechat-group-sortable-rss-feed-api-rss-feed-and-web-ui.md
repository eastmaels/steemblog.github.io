
---
title: '微信群好友文章列表（网页，JSON API, RSS Feed 2.0）永久免费给大家使用 - Wechat Group Sortable Rss Feed (API, RSS Feed and Web UI)'
permlink: json-api-rss-feed-2-0-wechat-group-sortable-rss-feed-api-rss-feed-and-web-ui
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-09-04 20:07:27
categories:
- cn
tags:
- cn
- cn-programming
- wechat
- steemit
- rss
thumbnail: https://steemitimages.com/DQmeSNTHXjTki1LhUb4csj7nipDJBx1GY2ZAySQHvY3xEyS/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmeSNTHXjTki1LhUb4csj7nipDJBx1GY2ZAySQHvY3xEyS/image.png)
# English Version
I have created the following :
- JSON API:  https://uploadbeta.com/api/steemit/wechat/feed/?cached  This returns the latest posts by the members in the wechat group. 
- RSS Feed 2.0:  https://uploadbeta.com/api/steemit/wechat/feed/rss/?cached You can import this feed into RSS Reader such as feedly.
- Web UI Reader: https://helloacm.com/tools/steemit/wechat-ranking/rss/

昨天在[开发 微信机器人](https://steemit.com/cn/@justyy/justyyuk-steem-wechat-bot-now-supports-inquiry-for-steemit-accounts)的时候就 和 @jubi 的想到一块了，既然已经有了[微信群](https://justyy.com/archives/5229)好友名单（通过以下API），为什么不弄个文章[RSS列表](https://justyy.com/archives/1887)？

> https://uploadbeta.com/api/steemit/wechat/?cached

白天的时候想了一整天，构思框架（主要是性能和易用性），今晚弄了2小时（没时间陪媳妇孩子），总算弄出来了：

# JSON API
这个[API](https://justyy.com/archives/5072)用于返回最近3天（之后如果不太够用，可以增加至7天）微信群的好友文章列表。返回的信息有： 文章，点赞数，收益，时间，内容，标签 等

> https://uploadbeta.com/api/steemit/wechat/feed/?cached

这是一个数组，每个数组元素是一个字典，对应一篇文章，字段有：

- author
- title
- url
- created
- comments
- categories
- tags
- net_votes
- body
- reward

## 参数
API 支持以下三个参数： sort,  allow 和 disallow.

sort 参数指定结果输出的排序方法默认是按时间排序(time) 还可以是按点赞数排序(votes) 或者是按 收益排序 (rewards)。

allow 是指定名单：默认为空则输出所有好友。可以按逗号隔开ID，比如  justyy,tumutanzi

disallow 是黑名单：比如不想看 justyy 就可以传入 disallow=justyy

举三个例子用于说明：

- https://uploadbeta.com/api/steemit/wechat/feed/?cached&sort=votes&allow=justyy
- https://uploadbeta.com/api/steemit/wechat/feed/?cached&sort=rewards&disallow=justyy,jubi
- https://uploadbeta.com/api/steemit/wechat/feed/?cached&sort=time&disallow=justyy,rea&allow=tumutanzi,oflyhigh

这个API用了[Cloudflare CDN](https://justyy.com/archives/3400) 加速，缓存每小时更新一次，源数据源每2小时生成一次数据。

# RSS 2.0 Feed
可以通过：

> https://uploadbeta.com/api/steemit/wechat/feed/rss/?cached

来在各大RSS阅读器里导入文章列表（**同时也支持以上的三个参数**）

![](https://steemitimages.com/DQmTSZAxRAtiTM3PCFWycHf5CtY78rfV7eMET8zyXe5GW4J/image.png)

比如我用 feedly 只导入我的文章：

![](https://steemitimages.com/DQmTzutKYsCxQkupe3fqkLZJfrWenunfDxLobmJ1rb84pRx/image.png)

效果如下：

![](https://steemitimages.com/DQmNmYBpgqp6bypmaue1aGPqGWnjVJHE7AHYf66h4bkvp1b/image.png)

# WEB 阅读器 UI
最后，你可以用 我开发的WEB图形界面来阅读文章列表，可以按收益或者[点赞](https://justyy.com/archives/5208)排序，当然**同时也支持以上的三个参数**

比如：

显示所有文章：https://helloacm.com/tools/steemit/wechat/rss/
显示我和坛子的文章：https://helloacm.com/tools/steemit/wechat/rss/?allow=justyy,tumutanzi

![](https://steemitimages.com/DQmSiaToZdxsAa1opKw6DmAk6pmxwNi7kPLbaLt9Gs7ypDS/image.png)

是不是很好用？有木有？

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原文首发于 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

// Later, it will be reposted to my blogs: [justyy.com](https://justyy.com), [helloacm.com](https://helloacm.com) and [codingforspeed.com](https://codingforspeed.com)  稍后同步到我的[中文博客](https://justyy.com)和英文[计算机](https://helloacm.com)[博客](https://codingforspeed.com)。
- [Steemit微信群好友文章列表](https://justyy.com/archives/5231)
- [微信公众号(justyyuk)机器人支持 STEEM 查询啦](https://justyy.com/archives/5229)

# 近期热贴
- [过去7天收益排行榜](https://steemit.com/cn/@justyy/daily-top-30-authors-in-cn-cn7-2017-09-04)
- [微信公众号(justyyuk)机器人支持 STEEM 查询啦](https://steemit.com/cn/@justyy/justyyuk-steem-wechat-bot-now-supports-inquiry-for-steemit-accounts)
- [暴力搜索[问题] 数学 × 程式编写比赛 (第五回)](https://steemit.com/cn/@justyy/bruteforce-solution-to-mathematics-programming-competition-5)
- [聂小倩 （1）| #5电影](https://steemit.com/cn/@justyy/1-or-5)
- [在EXCEL里也可以计算斐波那契数列 ](https://steemit.com/cn/@justyy/how-to-calculate-fibonacci-numbers-using-excel-excel)
- [面经：Python 的 List 和 Dictionary 有啥区别？](https://steemit.com/cn/@justyy/interview-question-what-is-the-difference-between-list-and-dictionary-in-python-python-list-dictionary)
- [今天国足嬴了，我们来说说什么是SEO？流量怎么挣钱？](https://steemit.com/cn/@justyy/seo)
- [SteemIt 好友微信群排行榜 - （实时更新版）](https://steemit.com/cn/@justyy/steemit-daily-wechat-group-ranking-steemit)
- [碧桂园海外(英国)招博士让我思考了人生规划, 碧桂园适不适合你?](https://steemit.com/cn/@justyy/3dyled)
- Ned 的代理SP是怎么被使用的 - Steemit 商业分析 [Part 1](https://steemit.com/cn/@justyy/ned-sp-steemit-part-1), [Part 2](https://steemit.com/cn/@justyy/ned-sp-steemit-part-2), [Part 3](https://steemit.com/cn/@justyy/ned-sp-steemit-part-3-sweetsssj-tumutanzi) and [Part 4](https://steemit.com/cn/@justyy/ned-sp-steemit-part-4)

# Recent Popular Posts
- [Daily Top 30 Authors Pending Payout in the Last 7 days ](https://steemit.com/statistics/@dailystats/daily-top-30-authors-pending-payout-in-the-last-7-days-2017-09-04) 
- [Wechat bot now supports inquiry for SteemIt Accounts.](https://steemit.com/cn/@justyy/justyyuk-steem-wechat-bot-now-supports-inquiry-for-steemit-accounts)
- [Bruteforce Solution to Mathematics × Programming Competition #5](https://steemit.com/cn/@justyy/bruteforce-solution-to-mathematics-programming-competition-5)
- [How to Calculate Fibonacci Numbers using Excel? ](https://steemit.com/cn/@justyy/how-to-calculate-fibonacci-numbers-using-excel-excel)
- [Interview Question: What is the difference between List and Dictionary in Python?](https://steemit.com/cn/@justyy/interview-question-what-is-the-difference-between-list-and-dictionary-in-python-python-list-dictionary)
- [SteemIt Daily Wechat Group Ranking](https://steemit.com/cn/@justyy/steemit-daily-wechat-group-ranking-steemit)
- [Voting Weight for SP less than 500](https://steemit.com/cn/@justyy/voting-weight-for-sp-less-than-500-sp-500)
- [SteemSQL Tutorial: How to Get Authors Order By Potential Payout in Last 7 days?](https://steemit.com/cn/@justyy/steem-sql-7-cn)

![](https://justyy.com/gif/steemit.gif)
Tags: cn cn-programming wechat steemit rss

- - -

This page is synchronized from the post: [微信群好友文章列表（网页，JSON API, RSS Feed 2.0）永久免费给大家使用 - Wechat Group Sortable Rss Feed (API, RSS Feed and Web UI)](https://steemit.com/@justyy/json-api-rss-feed-2-0-wechat-group-sortable-rss-feed-api-rss-feed-and-web-ui)
