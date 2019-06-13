
---
title: 'RSS文章列表添加新参数 hideauthors'
permlink: rss-hideauthors
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-09-12 09:51:03
categories:
- cn
tags:
- cn
- wechat
- rss
thumbnail: https://steemitimages.com/DQmbseokcyTpPcFwPJc8e8hWP8NRp9DsxVLi7PC5ky39LRg/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmbseokcyTpPcFwPJc8e8hWP8NRp9DsxVLi7PC5ky39LRg/image.png)

@wlcpu 说之前RSS列表里没有作者，以至于在 阅读器里看不到作者。 而 @tumutanzi 大哥说：

> 我本来把功能当作盲审一样，不看作者是谁，只看哪个作品好。

之前我没有在RSS生成的XML文件里加入 authors 字段，实际上是因为 RSS Validator 需要这个字段为邮件，而 [steemit](https://justyy.com/archives/5269) ID 不是邮件，所以我就没有强上，因为加上了 RSS Validator 就会说 不是有效的RSS，实际上并不影响使用，但是我有点小强迫，一定得让它是官方认证的有效合理的RSS。

看来有需求，所以我就把作者改成了 [邮件](https://justyy.com/archives/1467)形式，比如:  justyy@steemit.com  （但实际上并不是邮件哈），这样一来，刷新[缓存](https://justyy.com/archives/3179)就可以看到作者了。

![](https://steemitimages.com/DQmTe96aN3yG3QcsB5MXcYVhKJbGpbJsu1hWhHEbYw3UUNp/image.png)

同时，为了满足大哥，于是加了一参数 hideauthors, 只要在RSS FEED的地址后面加入 &hideauthors, 就不会显示作者信息。

想起了那句话： **It is a feature, not a bug!**


最后，再广告一下：
1. [SteemIt 好友微信群排行榜](https://helloacm.com/tools/steemit/wechat/) 需要入群者 请联系 @tumutanzi 或者 @rivalhw 谢谢。
2. [SteemIt 好友微信群文章列表 RSS Feed](https://helloacm.com/tools/steemit/wechat/rss/)
3. SteemIt 编程 Geek 微信群，请联系 @justyy 让我拉你入群。

![](https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png)

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原文首发于 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

// Later, it may be reposted to my blogs: [justyy.com](https://justyy.com), [helloacm.com](https://helloacm.com) and [codingforspeed.com](https://codingforspeed.com)  稍后同步到我的[中文博客](https://justyy.com)和英文[计算机](https://helloacm.com)[博客](https://codingforspeed.com)。
- [Steemit 微信群RSS文章列表添加新参数 hideauthors](https://justyy.com/archives/5286)

# 近期热贴
- [过去7天收益排行榜](https://steemit.com/cn/@justyy/daily-top-30-authors-in-cn-cn7-2017-09-11)
- [自掏腰包升级主机用于提高更快更好的RSS文章服务](https://steemit.com/cn/@justyy/rss)
- [你有本事就不要看 - 隐藏收益增加自定义信息](https://steemit.com/cn/@justyy/dare-you-not-look-at-the-payout)
- [隐藏收益，专注写作！](https://steemit.com/steemdev/@justyy/hide-steemit-payout)
- [信上帝，有饭吃。Hymns of Life](https://steemit.com/cn/@justyy/hymns-of-life)
- [带孩子参观消防车 Cambridge Fire Station Open Day](https://steemit.com/cn/@justyy/cambridge-fire-station-open-day)
- [点赞机器人每日点赞记录整合到每日报表中！](https://steemit.com/cn/@justyy/good-content-upvoting-history-now-integrated-into-to-daily-ranking-table)
- [SteemIt 好友微信群排行榜 支持显示数据统计和API了！](https://steemit.com/cn/@justyy/steemit-wechat-group-ranking-statistics-update-and-api-steemit-api)
- [数据初步分析系列 STEEM中文微信群排行榜单 - 中位数，平均，和标准方差](https://steemit.com/cn/@justyy/the-average-median-std-of-steemit-wechat-group-steem)
- [你给SteemIt中文微信群拖后腿了么? ](https://steemit.com/cn/@justyy/steemit-simple-nodejs-example-to-show-average-scores-in-the-steemit-wechat-group)

# Recent Popular Posts
- [Daily Top 30 Authors Pending Payout in the Last 7 days ](https://steemit.com/statistics/@dailystats/daily-top-30-authors-pending-payout-in-the-last-7-days-2017-09-11) 
- [Upgrade the Steemit/Wechat RSS Server](https://steemit.com/cn/@justyy/rss)
- [Dare you not look at the payout](https://steemit.com/cn/@justyy/dare-you-not-look-at-the-payout)
- [Hide SteemIt Payout](https://steemit.com/steemdev/@justyy/hide-steemit-payout)
- [Good-content Upvoting History now Integrated into to Daily Ranking Table](https://steemit.com/cn/@justyy/good-content-upvoting-history-now-integrated-into-to-daily-ranking-table)
- [Steemit Wechat Group Ranking Statistics Update and API](https://steemit.com/cn/@justyy/steemit-wechat-group-ranking-statistics-update-and-api-steemit-api)
- [Simple NodeJS Example to Show Average Scores in the Steemit-Wechat Group](https://steemit.com/cn/@justyy/steemit-simple-nodejs-example-to-show-average-scores-in-the-steemit-wechat-group)
- [The Average, Median, STD of SteemIt Wechat Group ](https://steemit.com/cn/@justyy/the-average-median-std-of-steemit-wechat-group-steem)
- [A Good-Content-Upvote-Bot](https://steemit.com/cn/@justyy/a-good-content-upvote-bot-cn)

![](https://justyy.com/gif/steemit.gif)
Tags: cn wechat rss

- - -

This page is synchronized from the post: [RSS文章列表添加新参数 hideauthors](https://steemit.com/@justyy/rss-hideauthors)
