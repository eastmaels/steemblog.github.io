
---
title: '获取微信群成员关注和粉丝的API - Two APIs to get the followers and following list in the Wechat Group'
permlink: api-two-apis-to-get-the-followers-and-following-list-in-the-wechat-group
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-09-06 11:59:09
categories:
- cn
tags:
- cn
- cn-programming
- steemdev
- steemit
- php
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

Two APIs are made available exclusively for the members in the wechat group. Contact contact#tumutanzi.com or @rivalhw to join the steemit wechat group.

These APIs are used to get the list of followers and following. The API results are cached in the [CloudFlare edge servers](https://helloacm.com/how-to-cache-audiovideo-mp4-using-cloudflare-cdn/) and updated every hour.

昨天在[弄 RSS 2.0版本](https://steemit.com/cn/@justyy/rss-api-v2-0-the-advanced-wechat-group-posts-feed-api-reader-v2-0)的时候顺便把这两个API放出来。一个是获取粉丝列表，一个是获取关注列表，两个都是返回JSON格式的数据，数据每小时更新缓存。目前暂时只能获取[微信群](https://justyy.com/archives/5231)里的成员，但不排除之后扩展到全网。需要入群者可以联系 contact@tumutanzi.com 或者加大伟哥微信 @rivalhw。

Get the list of my following :
举例说明 - 我的关注列表：
> https://uploadbeta.com/api/steemit/account/following/?cached&id=justyy

Get the list of my fans (followed)
举例说明 - 我的粉丝列表：
> https://uploadbeta.com/api/steemit/account/followed/?cached&id=justyy

Wrapped in [PHP](https://helloacm.com/the-php-page-rule-checker-of-cloudflare/), that becomes:
然后在[PHP](https://justyy.com/archives/3637)里可以简单封装一下:

```
function getFollowing($id) {
   return json_decode(file_get_contents("https://uploadbeta.com/api/steemit/account/following/?cached&id=$id"), true);
}

function getFollowed($id) {
   return json_decode(file_get_contents("https://uploadbeta.com/api/steemit/account/followed/?cached&id=$id"), true);
}
```

Check the steemians that a big whale follows but you haven't followed yet.
据说，关注大神所关注的是成功的第一步：

```
print_r(array_diff(getFollowing('tumutanzi'), getFollowing('justyy')));
```

这样就能知道  @tumutanzi 关注的 而我却还没有关注的人。

**新技能，你 get 了么？** 
*在使用过程中如有建议或者BUG反馈，请直接 @justyy ([微信](https://justyy.com/archives/5229)或 [steemit](https://justyy.com/archives/5140) 都可以)* 
*Any suggestions/bugs, please report to @justyy*

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原文首发于 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

// Later, it will be reposted to my blogs: [justyy.com](https://justyy.com), [helloacm.com](https://helloacm.com) and [codingforspeed.com](https://codingforspeed.com)  稍后同步到我的[中文博客](https://justyy.com)和英文[计算机](https://helloacm.com)[博客](https://codingforspeed.com)。
- [SteemIt 获取微信群成员关注和粉丝的API](https://justyy.com/archives/5241)
- [SteemIt API – Two APIs to get the followers and following list in the Wechat Group](https://helloacm.com/steemit-api-two-apis-to-get-the-followers-and-following-list-in-the-wechat-group/)
- [SteemIt 高级定制微信文章列表 RSS/API/阅读器 v2.0](https://justyy.com/archives/5237)
- [Steemit微信群好友文章列表](https://justyy.com/archives/5231)
- [微信公众号(justyyuk)机器人支持 STEEM 查询啦](https://justyy.com/archives/5229)

# 近期热贴
- [过去7天收益排行榜](https://steemit.com/cn/@justyy/daily-top-30-authors-in-cn-cn7-2017-09-06)
- [高级定制文章列表 RSS/API/阅读器 v2.0](https://steemit.com/cn/@justyy/rss-api-v2-0-the-advanced-wechat-group-posts-feed-api-reader-v2-0)
- [一不小心上了公司推 - 公司对我真是真爱啊](https://steemit.com/cn/@justyy/5ticiv)
- [微信群好友文章列表（网页，JSON API, RSS Feed 2.0）永久免费给大家使用](https://steemit.com/cn/@justyy/json-api-rss-feed-2-0-wechat-group-sortable-rss-feed-api-rss-feed-and-web-ui)
- [微信公众号(justyyuk)机器人支持 STEEM 查询啦](https://steemit.com/cn/@justyy/justyyuk-steem-wechat-bot-now-supports-inquiry-for-steemit-accounts)
- [聂小倩 （1）| #5电影](https://steemit.com/cn/@justyy/1-or-5)
- [SteemIt 好友微信群排行榜 - （实时更新版）](https://steemit.com/cn/@justyy/steemit-daily-wechat-group-ranking-steemit)

# Recent Popular Posts
- [Daily Top 30 Authors Pending Payout in the Last 7 days ](https://steemit.com/statistics/@dailystats/daily-top-30-authors-pending-payout-in-the-last-7-days-2017-09-05) 
- [The Advanced Wechat Group Posts Feed/API/Reader v2.0](https://steemit.com/cn/@justyy/rss-api-v2-0-the-advanced-wechat-group-posts-feed-api-reader-v2-0)
- [Wechat Group Sortable Rss Feed (API, RSS Feed and Web UI)](https://steemit.com/cn/@justyy/json-api-rss-feed-2-0-wechat-group-sortable-rss-feed-api-rss-feed-and-web-ui)
- [Wechat bot now supports inquiry for SteemIt Accounts.](https://steemit.com/cn/@justyy/justyyuk-steem-wechat-bot-now-supports-inquiry-for-steemit-accounts)
- [Bruteforce Solution to Mathematics × Programming Competition #5](https://steemit.com/cn/@justyy/bruteforce-solution-to-mathematics-programming-competition-5)
- [SteemIt Daily Wechat Group Ranking](https://steemit.com/cn/@justyy/steemit-daily-wechat-group-ranking-steemit)
- [Voting Weight for SP less than 500](https://steemit.com/cn/@justyy/voting-weight-for-sp-less-than-500-sp-500)
- [SteemSQL Tutorial: How to Get Authors Order By Potential Payout in Last 7 days?](https://steemit.com/cn/@justyy/steem-sql-7-cn)

![](https://justyy.com/gif/steemit.gif)
Tags: cn cn-programming steemdev steemit php

- - -

This page is synchronized from the post: [获取微信群成员关注和粉丝的API - Two APIs to get the followers and following list in the Wechat Group](https://steemit.com/@justyy/api-two-apis-to-get-the-followers-and-following-list-in-the-wechat-group)
