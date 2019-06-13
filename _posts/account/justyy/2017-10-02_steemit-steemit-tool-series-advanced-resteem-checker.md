
---
title: 'SteemIt 在线工具系列 -  谁才真的爱你（增强版转发查询利器）- SteemIt Tool Series -  Advanced Resteem Checker'
permlink: steemit-steemit-tool-series-advanced-resteem-checker
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-10-02 23:30:00
categories:
- cn
tags:
- cn
- resteem
- steemtools
- steemstem
- cn-programming
thumbnail: https://steemitimages.com/DQmZJdUY3M6FeEzfgv8rtKJwkVdWXX2Pf8aV1jzkLuWHk81/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


@oflyhigh has made a simple [resteem checker tool](http://steemit.serviceuptime.net/check_resteem.php) ([post](https://steemit.com/cn/@oflyhigh/who-resteemed-rebloged-your-posts)), which lists all your posts in the last 14 days and who resteemed them. I want to share you with an advanced resteem checker tool that has the following features:

1. the posts are collected in the last 365 days.
2. the report can be sorted via dates&time per resteem.
3. the report can be grouped by each post and who resteem them.
4. the report can show who resteem your posts most (group by authors).
5. API is made available, based on @arcange 's STEEMSQL.

# Advanced Resteem Checker
[https://helloacm.com/tools/steemit/reblogs/](https://helloacm.com/tools/steemit/reblogs/)

Put your ID and click the Green Button, the three types of report will be made available instantly.
![](https://steemitimages.com/DQmZJdUY3M6FeEzfgv8rtKJwkVdWXX2Pf8aV1jzkLuWHk81/image.png)

![](https://steemitimages.com/DQmamqf1r451CyKNs6UuBkab99pbj96LJWm1DBmdA4vRJg6/image.png)
*Image Credit: Steemit.com*

@oflyhigh 之前有一个简易的 [转发查询工具](http://steemit.serviceuptime.net/check_resteem.php)，可以检查过去14天内转发的文章记录，做的已经很简单很强大了，不过并没有解决我的痛点，我决定造个增强版的轮子：

1. 时间跨度为过去365天。
2. 过滤掉没有被转发的文章（自己不算转发）
3.  可以按时间排序 ，显示每次转发的记录 （谁，哪篇帖子，文章点赞数，还有时间）
4.  可以按文章排序，显示每篇文章谁转发了（ O 哥的版本）
5.  可以按转发作者次数排序，这样我们很清楚的知道 谁才是真的爱你啊（转发真是真爱啊）。
6.  提供 API 可供使用 （基于 @arcange 的 STEEMSQL ）。

# 为啥转发才是真爱？
转发(resteem)没有给转发的人带来任何收益上的好处，虽然不耗能量，但是会把主页弄的很乱。

# 工具地址
[https://helloacm.com/tools/steemit/list-of-reblogs](https://helloacm.com/tools/steemit/list-of-reblogs)

输入ID，点击绿色的按钮，红框内可以选择报表的类型
![](https://steemitimages.com/DQmc3jmhb6XhVohC2znVhNPk8mEAv6tAsyctGrvYGkE5pKQ/image.png)

可以很清楚的看到，哪篇文章被转发次数最多。点击“点赞数” 排序则可以看到哪篇文章转发后点赞数最多。
![](https://steemitimages.com/DQmeU8efn3CmGotVHFkCXDpiSTNRgYUrnnyVjKwkrfs4EyZ/image.png)

也可以很轻松的看到 哪个转发次数最多。
![](https://steemitimages.com/DQmS4zXKwsfi4sBG4V4ggHSG54DcP9ptcKcEjWiwZmQ4tj9/image.png)

--------------------------------
**@justyy 是CN 区的点赞机器人**，对优质内容进行点赞，只要代理给 @justyy 每天收利息(100 SP 每天0.04 SBD)并且能获得一次相应至少2倍的点赞，可以认为是VP 200%+ ，详细请看：
- [cn区最低保障系统 上线了!](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy) 
- [cn区低保计划还会继续下去](https://justyy.com/archives/5368)
- [cn区低保计划（鼓励新人）真的适合你么？](https://steemit.com/cn/@justyy/56dta3-cn)

> @justyy 是 [https://justyy.com](https://justyy.com/) 的博主 - 西半球知名的“土豪”博主。在大哥 @tumutanzi 的带领下加入了 [STEEMIT](https://steemit.com/cn/@tumutanzi/66fqyu-steemit)。感谢您阅读 @justyy  的帖子 希望得到您的follow、upvote 或者是 reply 。

- - -

This page is synchronized from the post: [SteemIt 在线工具系列 -  谁才真的爱你（增强版转发查询利器）- SteemIt Tool Series -  Advanced Resteem Checker](https://steemit.com/@justyy/steemit-steemit-tool-series-advanced-resteem-checker)
