
---
title: '高级定制文章列表 RSS/API/阅读器 v2.0 - The Advanced Wechat Group Posts Feed/API/Reader v2.0'
permlink: rss-api-v2-0-the-advanced-wechat-group-posts-feed-api-reader-v2-0
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-09-05 20:24:03
categories:
- cn
tags:
- cn
- cn-programming
- wechat
- steemit
- rss
thumbnail: https://steemitimages.com/DQmPM1vc3ui6vWUDMrDrKvfVxG8BkW8LhL4FRgwS1PTBhB7/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


**Abstract:** I have added five parameters to the [Wechat Group Feed](https://steemit.com/cn/@justyy/json-api-rss-feed-2-0-wechat-group-sortable-rss-feed-api-rss-feed-and-web-ui) (RSS, API and Web Reader). These parameters allow you to filter out or specify the categories and tags. It also allows you to fetch all posts feed from all the following list given a SteemID.

Any suggestions, please contact me directly @justyy  Thanks!.

![](https://steemitimages.com/DQmPM1vc3ui6vWUDMrDrKvfVxG8BkW8LhL4FRgwS1PTBhB7/image.png)
大伟 哥 @rivalhw 对我[昨天的作品](https://steemit.com/cn/@justyy/json-api-rss-feed-2-0-wechat-group-sortable-rss-feed-api-rss-feed-and-web-ui)提出了建议：

![](https://steemitimages.com/DQmeT7unL2BXwoKg3dqXg4fGaG52ZvLGoPjhnFZXbk8syzw/image.png)

好的，这是个抱大腿献殷勤的好机会，经过努力，升级了高级定制文章列表 RSS/API/阅读器，姑且称为2.0版本。主要改动：

## 支持 过滤标签和类别
支持了四个参数：

- 允许标签类别：allow_tags
- 不允许标签类别：disallow_tags
- 允许主标签类别：allow_main_tags
- 不允许主标签类别：disallow_main_tags

可以在RSS、API 和WEB 阅读器里指定这四个参数。比如 我只想看 主类别是 CN 但是又有 编程类 cn-programming 或者 travel 的文章：

- RSS：  https://uploadbeta.com/api/steemit/wechat/feed/rss/?cached&allow_main_tags=cn&allow_tags=cn-programming,travel
- WEB 阅读：https://helloacm.com/tools/steemit/wechat/rss/?cached&allow_main_tags=cn&allow_tags=cn-programming,travel
- JSON API：https://uploadbeta.com/api/steemit/wechat/feed/?cached&allow_main_tags=cn&allow_tags=cn-programming,travel

## 支持获取关注列表的所有文章
支持了参数 following: 比如我想看 我关注的所有文章：

- RSS：  https://uploadbeta.com/api/steemit/wechat/feed/rss/?cached&following=justyy
- WEB 阅读：https://helloacm.com/tools/steemit/wechat/rss/?cached&following=justyy
- JSON API：https://uploadbeta.com/api/steemit/wechat/feed/?cached&following=justyy

我关注的 除了 tumutanzi，并且不含 cn-programming 或者 travel

- RSS：https://uploadbeta.com/api/steemit/wechat/feed/rss/?cached&following=justyy&disallow=tumutanzi&disallow_tags=cn-programming,travel
- WEB 阅读：https://helloacm.com/tools/steemit/wechat/rss/?cached&following=justyy&disallow=tumutanzi&disallow_tags=cn-programming,travel
- JSON API：https://uploadbeta.com/api/steemit/wechat/feed/?cached&following=justyy&disallow=tumutanzi&disallow_tags=cn-programming,travel

## 已知问题
- 考虑到性能和实用性，关注列表 每小时更新一次（异步更新）
- 关注列表的成员需要在微信群列表里，需要入群者可以联系 contact AT tumutanzi.com 或者加大伟哥微信 @rivalhw

**新技能，你 get 了么？** 
*在使用过程中如有建议或者BUG反馈，请直接 @justyy (微信或 steemit 都可以)*

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原文首发于 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

// Later, it will be reposted to my blogs: [justyy.com](https://justyy.com), [helloacm.com](https://helloacm.com) and [codingforspeed.com](https://codingforspeed.com)  稍后同步到我的[中文博客](https://justyy.com)和英文[计算机](https://helloacm.com)[博客](https://codingforspeed.com)。
- [SteemIt 高级定制微信文章列表 RSS/API/阅读器 v2.0](https://justyy.com/archives/5237)
- [Steemit微信群好友文章列表](https://justyy.com/archives/5231)
- [微信公众号(justyyuk)机器人支持 STEEM 查询啦](https://justyy.com/archives/5229)

# 近期热贴
- [过去7天收益排行榜](https://steemit.com/cn/@justyy/daily-top-30-authors-in-cn-cn7-2017-09-05)
- [一不小心上了公司推 - 公司对我真是真爱啊](https://steemit.com/cn/@justyy/5ticiv)
- [微信群好友文章列表（网页，JSON API, RSS Feed 2.0）永久免费给大家使用](https://steemit.com/cn/@justyy/json-api-rss-feed-2-0-wechat-group-sortable-rss-feed-api-rss-feed-and-web-ui)
- [微信公众号(justyyuk)机器人支持 STEEM 查询啦](https://steemit.com/cn/@justyy/justyyuk-steem-wechat-bot-now-supports-inquiry-for-steemit-accounts)
- [聂小倩 （1）| #5电影](https://steemit.com/cn/@justyy/1-or-5)
- [SteemIt 好友微信群排行榜 - （实时更新版）](https://steemit.com/cn/@justyy/steemit-daily-wechat-group-ranking-steemit)

# Recent Popular Posts
- [Daily Top 30 Authors Pending Payout in the Last 7 days ](https://steemit.com/statistics/@dailystats/daily-top-30-authors-pending-payout-in-the-last-7-days-2017-09-05) 
- [Wechat Group Sortable Rss Feed (API, RSS Feed and Web UI)](https://steemit.com/cn/@justyy/json-api-rss-feed-2-0-wechat-group-sortable-rss-feed-api-rss-feed-and-web-ui)
- [Wechat bot now supports inquiry for SteemIt Accounts.](https://steemit.com/cn/@justyy/justyyuk-steem-wechat-bot-now-supports-inquiry-for-steemit-accounts)
- [Bruteforce Solution to Mathematics × Programming Competition #5](https://steemit.com/cn/@justyy/bruteforce-solution-to-mathematics-programming-competition-5)
- [SteemIt Daily Wechat Group Ranking](https://steemit.com/cn/@justyy/steemit-daily-wechat-group-ranking-steemit)
- [Voting Weight for SP less than 500](https://steemit.com/cn/@justyy/voting-weight-for-sp-less-than-500-sp-500)
- [SteemSQL Tutorial: How to Get Authors Order By Potential Payout in Last 7 days?](https://steemit.com/cn/@justyy/steem-sql-7-cn)

![](https://justyy.com/gif/steemit.gif)
Tags: cn cn-programming wechat steemit rss

- - -

This page is synchronized from the post: [高级定制文章列表 RSS/API/阅读器 v2.0 - The Advanced Wechat Group Posts Feed/API/Reader v2.0](https://steemit.com/@justyy/rss-api-v2-0-the-advanced-wechat-group-posts-feed-api-reader-v2-0)
