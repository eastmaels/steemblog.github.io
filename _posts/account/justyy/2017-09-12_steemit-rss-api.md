
---
title: 'SteemIt 中文微信群好友评论 RSS/API/批量阅读工具也出来啦！'
permlink: steemit-rss-api
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-09-12 20:41:48
categories:
- cn
tags:
- cn
- comment-feed
- steemit
- steemdev
- wechat-group
thumbnail: https://steemitimages.com/DQmPXNHJ43Q58xFNGAwdBWAe7CZ6HWeqQzPqLjLF4AVf1oF/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmPXNHJ43Q58xFNGAwdBWAe7CZ6HWeqQzPqLjLF4AVf1oF/image.png)

*Abstract*: The Steemit Wechat Group now has the Comments Feed (including RSS, JSON API and Web UI) for all the members in the wechat group. Please visit: https://helloacm.com/tools/steemit/wechat-ranking/rss/comments/

我们都知道，文章列表可以让你定制[微信群](https://justyy.com/archives/5286)里的好友STEEM文章。具体地址是：

https://helloacm.com/tools/steemit/wechat/rss/

同样的，今天又撸了一个专门是评论的，有啥区别呢？简单来说，就是只看[评论](https://helloacm.com/tools/steemit/wechat/rss/comments/?cached&allow=tumutanzi,dapeng)不看文章，比如我只关心 @tumutanzi 和 @dapeng 的，可以访问：

> https://helloacm.com/tools/steemit/wechat/rss/comments/?cached&allow=tumutanzi,dapeng

就可以把这两位近三天的评论一起显示：

也支持 RSS

> https://uploadbeta.com/api/steemit/wechat/feed/comments/rss/?cached&allow=tumutanzi,dapeng

这样就可以RSS阅读器里阅读评论了。

![](https://steemitimages.com/DQmTgtWBBbaiqtuCo4owRg7QmdyUoDwJ1EVY3FhtLJiygie/image.png)

当然也支持 JSON API：

> https://uploadbeta.com/api/steemit/wechat/feed/comments/?cached&allow=tumutanzi,dapeng

总之，也和之前的文章列表一样， 支持以下参数：

- sort (结果排序方法：时间 time, 点赞数 votes, 或者是收益 rewards)
- allow (允许ID列表逗号隔开）
- disallow (不允许ID列表逗号隔开）
- allow_tags (允许标签列表)
- disallow_tags (不允许标签列表)
- allow_main_tags (允许主标列表签)
- disallow_main_tags (不允许主标签列表)
- following (用户ID的关注的所有文章)
- hideauthors (不看作者)

比如我想一下子看我关注的成员都留了啥言，就可以：

> https://uploadbeta.com/api/steemit/wechat/feed/comments/rss/?cached&following=justyy

这样就比较不会错过一些精彩的讨论，你说是不是？

![](https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png)

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原文首发于 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

// Later, it may be reposted to my blogs: [justyy.com](https://justyy.com), [helloacm.com](https://helloacm.com) and [codingforspeed.com](https://codingforspeed.com)  稍后同步到我的[中文博客](https://justyy.com)和英文[计算机](https://helloacm.com)[博客](https://codingforspeed.com)。
- [SteemIt 中文微信群好友评论 RSS/API/批量阅读工具也出来啦！](https://justyy.com/archives/5299)
- [返璞归真，重新成为小鱼 – 祭奠逝去的1万SP](https://justyy.com/archives/5289)
- [Steemit 微信群RSS文章列表添加新参数 hideauthors](https://justyy.com/archives/5286)

# 近期热贴
- [过去7天收益排行榜](https://steemit.com/cn/@justyy/daily-top-30-authors-in-cn-cn7-2017-09-13)
- [自掏腰包升级主机用于提高更快更好的RSS文章服务](https://steemit.com/cn/@justyy/rss)
- [你有本事就不要看 - 隐藏收益增加自定义信息](https://steemit.com/cn/@justyy/dare-you-not-look-at-the-payout)
- [隐藏收益，专注写作！](https://steemit.com/steemdev/@justyy/hide-steemit-payout)
- [信上帝，有饭吃。Hymns of Life](https://steemit.com/cn/@justyy/hymns-of-life)
- [SteemIt 好友微信群排行榜 支持显示数据统计和API了！](https://steemit.com/cn/@justyy/steemit-wechat-group-ranking-statistics-update-and-api-steemit-api)
- [数据初步分析系列 STEEM中文微信群排行榜单 - 中位数，平均，和标准方差](https://steemit.com/cn/@justyy/the-average-median-std-of-steemit-wechat-group-steem)
- [你给SteemIt中文微信群拖后腿了么? ](https://steemit.com/cn/@justyy/steemit-simple-nodejs-example-to-show-average-scores-in-the-steemit-wechat-group)

# Recent Popular Posts
- [Daily Top 30 Authors Pending Payout in the Last 7 days ](https://steemit.com/statistics/@dailystats/daily-top-30-authors-pending-payout-in-the-last-7-days-2017-09-13) 
- [Upgrade the Steemit/Wechat RSS Server](https://steemit.com/cn/@justyy/rss)
- [Dare you not look at the payout](https://steemit.com/cn/@justyy/dare-you-not-look-at-the-payout)
- [Hide SteemIt Payout](https://steemit.com/steemdev/@justyy/hide-steemit-payout)
- [Good-content Upvoting History now Integrated into to Daily Ranking Table](https://steemit.com/cn/@justyy/good-content-upvoting-history-now-integrated-into-to-daily-ranking-table)
- [Steemit Wechat Group Ranking Statistics Update and API](https://steemit.com/cn/@justyy/steemit-wechat-group-ranking-statistics-update-and-api-steemit-api)
- [Simple NodeJS Example to Show Average Scores in the Steemit-Wechat Group](https://steemit.com/cn/@justyy/steemit-simple-nodejs-example-to-show-average-scores-in-the-steemit-wechat-group)

![](https://justyy.com/gif/steemit.gif)
Tags: cn comment-feed steemit steemdev wechat-group

- - -

This page is synchronized from the post: [SteemIt 中文微信群好友评论 RSS/API/批量阅读工具也出来啦！](https://steemit.com/@justyy/steemit-rss-api)
