
---
title: '说说我的机器人点赞策略 How am I doing with Curation Bot?'
permlink: how-am-i-doing-with-curation-bot
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-10-05 18:42:03
categories:
- cn
tags:
- cn
- steemit
- steempower
- curation
- steem
thumbnail: https://steemitimages.com/DQmTCE8dZ28RozdVuadeQYwB9JWaqc9CFu2YrHmMVGUeZnm/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


**Abstract**: I have made following adjustments in @justyy smart upvoting robot and achieved around 7.3% APR in the last 7 days curator (12.672 STEEM / 9000 ESP / 7 * 365).

1. Vote from 27 minute, aim for  90% of the cake (instead of 30 min)
2. Adjust weighting for [daily 30 ranking](https://steemit.com/cn/@justyy/daily-cn-updates-cn2017-10-05), give more weight for mid-class.
3. Optimise upvoting scripts so they run smooth and faster than before i.e. should finish within seconds per scan-and-vote check.
4. Add good and bad author lists, which is used to award and punish some posts.
5. Take the current VP of the robot into weight calculation so that roughly 20% of VP is used per day.

I am quite happy about the outcome as the robot is online 24/7, and it saves me lots of time. 

> Then I can focus more on writing more quality posts! Oh Yeah! :)

And, according to @abh12345   I am doing [BETTER than AVERAGE! ](https://steemit.com/bisteemit/@abh12345/curation-how-are-you-doing-part-2#@abh12345/re-justyy-re-abh12345-curation-how-are-you-doing-part-2-20171004t064515048z)

![](https://steemitimages.com/DQmTCE8dZ28RozdVuadeQYwB9JWaqc9CFu2YrHmMVGUeZnm/image.png)

![](https://steemitimages.com/0x0/https://cdn.pixabay.com/photo/2016/09/29/23/01/revenue-1704073_960_720.png)
Image Credit: Pixabay.com

@tumutanzi 在8天前写了 这篇精彩的[分析](https://steemit.com/cn/@tumutanzi/3uvcpk-steemit) 里面说到了我当时的7天年化率大概是  6.86%

![](https://steemitimages.com/DQmcDxuD2vADX5jvg9LxfqnurwYG99hTfQhYERWkJoLN1GZ/sp-curation.PNG)
*图片版权属于 @tumutanzi*

不过我觉得当时的这个数字有点高，因为没有算上代理得的SP （有3000左右），如果算上应该只有4.2% 惨不忍暏。

中文区大鱼点赞状元 @htliao 在他的[文章里](https://steemit.com/cn/@htliao/5uadhw)也说到他的点赞策略，受益无穷，于是我在微调了策略，观察几天后发现点赞表现有所进步：

![](https://steemitimages.com/DQmYUobtNGvFQX685Mx83ZwTR5W4mQk6f96x2DpD3uxcQ3k/image.png)

@justyy 有效SP 大概9000 左右，7天年化率就是 12.672 / 9000 / 7 * 365 = 7.3%。我是如何调整的呢？

1.  不要在30分钟点，相反从27分钟就开始让机器人抢 那 90%的蛋糕。
2.  CN 区[每日排行前30名](https://steemit.com/cn/@justyy/daily-cn-updates-cn2017-10-05)，调整点赞权重和次数，排名中间8-20名的的权重适当增加，因为稳坐前几名的大鱼可能是点赞团队，他们的蛋糕有时候可能很难抢。
3.  优化[点赞](https://justyy.com/archives/5260)程序，使得每次机器人在几秒钟就能执行完。之前程序[单点故障](https://steemit.com/cn/@justyy/single-point-failure)，遇到STEEMD库不稳定的时候程序就特别慢甚至卡死，所以就很经常在30分钟的时候开始点，等轮到点哪一位作者的时候已经几分钟过去了，错过了最佳时机。
4.  加入了优秀作者名单和黑名单，这个名单进行微调（点赞权重和一天中点赞次数）
5.  根据 机器人当前能量 随时进行权重调整，观察下来，每天大概用上 20%的点赞能量，我们知道每天恢复20%，所以一点也不浪费。

不管如何，现在看来效果很不错，虽然做不到最好，但是至少，点赞这个是自动化，它不会疲惫，24/7 在线的点，点赞给我省下来的时候我可以更多的放在写作和程序上。

> 时间也是一种成本，况且由点赞程序来决定点赞权重不会让人类那么那么的纠结。

--------------------------------
**@justyy 是CN 区的点赞机器人**，对优质内容进行点赞，只要代理给 @justyy 每天收利息(100 SP 每天0.04 SBD)并且能获得一次相应至少2倍的点赞，可以认为是VP 200%+ ，中文区的大鱼 **@htliao** 都加入了这个计划(530 SP)表示支持，您还不来试试么？
- [cn区最低保障系统 上线了!](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy) 
- [cn区低保计划还会继续下去](https://justyy.com/archives/5368)
- [cn区低保计划（鼓励新人）真的适合你么？](https://steemit.com/cn/@justyy/56dta3-cn)
> [说说我的机器人点赞策略](https://justyy.com/archives/5433)
> [How am I doing with SteemIt Curation Bot?](https://helloacm.com/how-am-i-doing-with-steemit-curation-bot/)
> [Steemit 在线工具和API接口](https://helloacm.com/tools/steemit-tools/)
> [SteemIt Tools and APIs](https://helloacm.com/tools/steemit/)

- - -

This page is synchronized from the post: [说说我的机器人点赞策略 How am I doing with Curation Bot?](https://steemit.com/@justyy/how-am-i-doing-with-curation-bot)
