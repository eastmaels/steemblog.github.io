
---
title: '浅谈 Naive Bayes 算法在石头剪刀布游戏的应用 Applying Naive Bayes Algorithm in Rock-Sissor-Paper Game'
permlink: naive-bayes-applying-naive-bayes-algorithm-in-rock-sissor-paper-game
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-09-19 14:57:06
categories:
- cn
tags:
- cn
- cn-programming
- algorithm
- steemstem
thumbnail: https://steemitimages.com/DQmdFxj6nWrDGfocgznQvFwweD5BoMhVytDd4sDzRkbcMi8/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmdFxj6nWrDGfocgznQvFwweD5BoMhVytDd4sDzRkbcMi8/image.png)
*Image Credit: pixabay.com*

Last Friday, @justyy hosted a rock-sissors-papers wechat group contest for CN community and the contest is going on fire!  

The robot player just plays randomly without any intelligence at all and I am planing to add the basic intelligence to it by applying the Naive Bayes algorithm.

The [Naives Bayes](https://helloacm.com/how-to-use-naive-bayes-to-make-prediction-demonstration-via-sql/) model is basically the following formula to compute the probability:

![](https://steemitimages.com/DQmfDBAi1CFKCNZE1GnDv7Uv65p4wNqf9Zs5sNwodKJEXRv/image.png)

Known the probability of P(A), P(B), and the condition probability of P(A|B), then we can compute the P(B|A). How to apply this to the rock-sissors-papers game?

1. Assume the game has been going on for a few turns and the robot has collected enough sampling data (data set)
2. We need to compute the P(rock), P(paper), and P(sissors) for both player and the robot.
3. Assume the player had X, then we need to compute winning probability of P(scissor | X), P(paper | X) and P(rock | X)
4. Pick the one has the largest probability. 

Let's hope this is fun.


@justyy 上周五的  [STEEM中文区剪刀石头布大赛 - 第一期 （奖金30 SBD + 帖子SBD收益） - Rock-Paper-Scissors Gaming Contest for SteemIt CN Community](https://steemit.com/cn/@justyy/steem-50-sbd) 看来很受欢迎，才过一半，前6名已经竞争的不要不要的了。

![](https://steemitimages.com/DQmXeAzvZ6Wbk1g4m1iXnwU3PAsHGwub3N5hHtErpx3fGPZ/image.png)

但是，我这里要很负责的告诉大家，现在的算法就是随机，所以可以不用揣测机器人的智商，因为根本就没有。至于头几名怎么玩到几千分的，我只能说，我也不知道技巧是啥，也许真的是闲得蛋疼，哈哈（我自己以前玩过，最多100多分）

好吧，在这期结束后我会修改算法，还有一些限制和分数奖惩情况，比如每天限玩次数啥的，防止这游戏影响大家学习工作和生活。

其中算法部分，我打算用  Naive Bayes 算法，这是一个很简单的概率型模型，简单来说就是:

![](https://steemitimages.com/DQmfDBAi1CFKCNZE1GnDv7Uv65p4wNqf9Zs5sNwodKJEXRv/image.png)

已知 概率事件 P(A), P(B) 和条件概率 在B发生后A的概率 P(A|B)，那么我们能求出 在 A下 B的概率 P(B|A)

怎么应用到[剪刀石头布](https://justyy.com/archives/3171)上呢？很简单。

1.  假设机器人已经收集到了足够的样本，也就是说玩家已经和机器人玩了 10局左右。
2. 统计出 玩家和机器人 出 P(剪刀)、P(石头)和P(布) 分别的概率。
3. 假设最后一局玩家出的是 X，那么需要算出 机器人 P(剪刀|X)、P(布|X)、P(石头|X)的胜率。
4. 然后取最大的那个胜率出即可。

效果如何呢？让我们拭目以待吧。

![](https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png)

STEEMIT 中文区 RSS 工具和名单:
- [SteemIt 好友微信群排行榜](https://helloacm.com/tools/steemit/wechat/)
- [SteemIt 好友微信群文章列表](https://helloacm.com/tools/steemit/wechat/rss/)
- [SteemIt 好友微信群评论列表](https://helloacm.com/tools/steemit/wechat/rss/comments/)

Chrome 插件:
- [隐藏收益，专注写作！](https://justyy.com/archives/5269)
- [简繁体自动转换](https://justyy.com/archives/5016)

Steem API:
- [获取微信群成员关注和粉丝的API](https://justyy.com/archives/5241)
- [SteemIt API/transfer-history 最简单获取帐号钱包记录的API](https://justyy.com/archives/5070)
- [简单封装了一下 steemit/account](https://justyy.com/archives/5063)

最近帖子:
- [CN 每日排行榜](https://steemit.com/cn/@justyy/daily-cn-updates---cn72017-09-19)
- [浅谈 Naive Bayes 算法在石头剪刀布游戏的应用](https://justyy.com/archives/5340)
- [逻辑测试系列之二 - DECR](https://steemit.com/cn/@justyy/logic-tests-series-2-decr-decr)
- [记一次通过手机TeamViewer远程登陆家里服务器再远程登陆VPS敲命令在STEEMIT上发贴的经历](https://steemit.com/cn/@justyy/teamviewer-vps-steemit-the-experience-of-using-teamviewer-on-iphone-se-connecting-to-desktop-and-ssh-to-vps-in-order-to-make-a)
- [即使你不打算换工作，你每年也得去面试](https://steemit.com/cn/@justyy/go-to-an-interview-even-if-you-are-not-changing-your-job)
- [STEEM中文区剪刀石头布大赛 - 第一期 （奖金30 SBD + 帖子SBD收益）](https://steemit.com/cn/@justyy/steem-50-sbd)

STEEMIT CN RSS Tools:
- [SteemIt Daily Wechat Group Ranking ](https://helloacm.com/tools/steemit/wechat-ranking/)
- [SteemIt CN RSS for Posts](https://helloacm.com/tools/steemit/wechat-ranking/rss/)
- [SteemIt CN RSS for Comments](https://helloacm.com/tools/steemit/wechat-ranking/rss/comments/)

Chrome Extensions:
- [Hide Steemit Payout](https://helloacm.com/hide-steemit-payout/)
- [Simplified to Traditional Switch](https://helloacm.com/chrome-extension-to-switch-between-simplified-chinese-and-traditional-chinese-automatically/)

Steem API:
- [Two APIs to get the followers and following list in the Wechat Group](https://helloacm.com/steemit-api-two-apis-to-get-the-followers-and-following-list-in-the-wechat-group/)
- [SteemIt API/transfer-history](https://helloacm.com/how-to-get-transfer-history-of-steemit-accounts-via-steemit-apitransfer-history/)
- [steemit/account](https://helloacm.com/how-to-retrieve-steemit-account-information-via-api-steemitaccount/)

Recent Posts:
- [Daily Top 30 Authors by Pending Payout in Last 7 Days](https://steemit.com/stats/@dailystats/daily-top-30-authors-pending-payout-in-the-last-7-days-2017-09-19)
- [Applying Naive Bayes Algorithm in Rock-Scissor-Paper Game](https://helloacm.com/applying-naive-bayes-algorithm-in-rock-scissor-paper-game/)
- [Logic Tests Series (2) - DECR](https://steemit.com/cn/@justyy/logic-tests-series-2-decr-decr)
- [The experience of using Teamviewer on iPhone SE, connecting to desktop, and SSH to VPS, in order to make a Robot Python script up running.](https://steemit.com/cn/@justyy/teamviewer-vps-steemit-the-experience-of-using-teamviewer-on-iphone-se-connecting-to-desktop-and-ssh-to-vps-in-order-to-make-a)
- [Go to an Interview even if you are not changing your job.](https://steemit.com/cn/@justyy/go-to-an-interview-even-if-you-are-not-changing-your-job)
- [Rock-Paper-Scissors Gaming Contest for SteemIt CN Community](https://steemit.com/cn/@justyy/steem-50-sbd)

// Later, it may be reposted to my blogs: [justyy.com](https://justyy.com), [helloacm.com](https://helloacm.com) and [codingforspeed.com](https://codingforspeed.com)  稍后同步到我的[中文博客](https://justyy.com)和英文[计算机](https://helloacm.com)[博客](https://codingforspeed.com)。

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原文首发于 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

**@justyy 是CN 区的点赞机器人，对优质内容进行点赞，只要代理给 @justyy 每天收利息(100 SP 每天0.04 SBD)并且能获得一次相应至少2倍的点赞，可以认为是VP 200%+ ，详细请看： [cn区最低保障系统 上线了!](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy) 和 [CN 区优质内容点赞机器人上线了!](https://steemit.com/cn/@justyy/a-good-content-upvote-bot-cn) 和 [点赞机器人每日点赞记录整合到每日报表中！](https://steemit.com/cn/@justyy/good-content-upvoting-history-now-integrated-into-to-daily-ranking-table)**

![](https://justyy.com/gif/justyy-php-is-the-best.gif)
欢迎你发表你的见解和看法，特别有意思的评论我可能会奖励你1 SBD哦。
Interesting Comments might be rewarded with 1 SBD.

- - -

This page is synchronized from the post: [浅谈 Naive Bayes 算法在石头剪刀布游戏的应用 Applying Naive Bayes Algorithm in Rock-Sissor-Paper Game](https://steemit.com/@justyy/naive-bayes-applying-naive-bayes-algorithm-in-rock-sissor-paper-game)
