
---
title: '如何通过 IFTTT 及时获得 STEEMIT上的比赛通知？ How to get notification on SteemIt contests using IFTTT + Feed?'
permlink: ifttt-steemit
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-09-21 14:16:33
categories:
- cn
tags:
- cn
- steemstem
- ifttt
- notification
- steemit
thumbnail: https://steemitimages.com/DQmVzvQhjsEp3uLhKq4UC4HszqhBpRCn3VM7QP8jNj8PEhX/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


I don't want to miss the contests held regularly by @kenchung so I come up with a method to combine [IFTTT](https://helloacm.com/how-to-save-gmail-attachments-backup-to-dropbox-folder-using-ifttt/) and RSS Feed, which notifies me if any contests coming up.

@kenchung 举办了很多期数学编程竞赛，但是有时候我发现的时候已经是好几天了， 错失了获奖良机。有没有简单一点的办法能迅速的知道有比赛呢？很简单，这需要结合 [IFTTT](https://justyy.com/archives/1011)和 [RSS](https://justyy.com/archives/5286)即可。


The RSS Feed to get the contests feed is:
首先，获得比赛相关的RSS为：

https://uploadbeta.com/api/steemit/wechat/feed/rss/?cached&allow_tags=contest

Add &allow=kenchung if only for specific author.
如果只想要参与 @kenchung 的比赛只需要在后面加上&allow=kenchung 即变成：

https://uploadbeta.com/api/steemit/wechat/feed/rss/?cached&allow_tags=contest&allow=kenchung

Add a new IFTTT rule:
那么我们需要 在[IFTTT](https://justyy.com/archives/4213)里添加一条规则：

![](https://steemitimages.com/DQmVzvQhjsEp3uLhKq4UC4HszqhBpRCn3VM7QP8jNj8PEhX/image.png)

Set the trigger to be on new items from the feed:
设置触发条件为 RSS 有新的文章发表：
![](https://steemitimages.com/DQmTbNAXc5Z6WnR9A2ZmeG7vyQhNs17234J8wyP5v5SyDLD/image.png)

The action could be send me an SMS:
指定动作可以是，给我发短信：
![](https://steemitimages.com/DQmcSLMAx3Fw12y523YXHbvFzDud4cX8WGQHMAUzP2yBAix/image.png)

Or simply email me:
或者是发邮件：
![](https://steemitimages.com/DQmQkm7twAcAkAST7ykt3vJeDXaDZH66prZKcRCboMyERup/image.png)

That is it! I will get notification at the earliest timing!
这样只要有比赛，我就能第一时间内获得通知，再也不用担心错过比赛了！

![](https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png)

[CN 每日排行榜](https://steemit.com/cn/@justyy/daily-cn-updates---cn72017-09-21)

// Later, it may be reposted to my blogs: [justyy.com](https://justyy.com), [helloacm.com](https://helloacm.com) and [codingforspeed.com](https://codingforspeed.com)  稍后同步到我的[中文博客](https://justyy.com)和英文[计算机](https://helloacm.com)[博客](https://codingforspeed.com)。
- [如何通过 IFTTT 及时获得 STEEMIT上的比赛通知？](https://justyy.com/archives/5352)
- [How to get notification on SteemIt contests using IFTTT + Feed?](https://helloacm.com/how-to-get-notification-on-steemit-contests-using-ifttt-feed/)
- [一顿饭与 一个 C++ 软件工程师的职位](https://justyy.com/archives/5345)

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原文首发于 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

![](https://steemitimages.com/0x0/https://justyy.com/gif/steemit.gif)

**@justyy 是CN 区的点赞机器人**，对优质内容进行点赞，只要代理给 @justyy 每天收利息(100 SP 每天0.04 SBD)并且能获得一次相应至少2倍的点赞，可以认为是VP 200%+ ，详细请看：
- [cn区最低保障系统 上线了!](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy) 
- [CN 区优质内容点赞机器人上线了!](https://steemit.com/cn/@justyy/a-good-content-upvote-bot-cn) 
- [点赞机器人每日点赞记录整合到每日报表中！](https://steemit.com/cn/@justyy/good-content-upvoting-history-now-integrated-into-to-daily-ranking-table)
- [虽然不挣钱，但是CN区低保计划还会继续下去](https://steemit.com/cn/@justyy/cn)

![](https://justyy.com/gif/justyy-php-is-the-best.gif)
欢迎你发表你的见解和看法，特别有意思的评论我可能会奖励你1 SBD哦。
Interesting Comments might be rewarded with 1 SBD.

- - -

This page is synchronized from the post: [如何通过 IFTTT 及时获得 STEEMIT上的比赛通知？ How to get notification on SteemIt contests using IFTTT + Feed?](https://steemit.com/@justyy/ifttt-steemit)
