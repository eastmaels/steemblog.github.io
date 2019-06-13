
---
title: 'cn区最低保障系统 上线了！ Introduction to the CN Wechat Group Voting Robot @justyy'
permlink: cn-introduction-to-the-cn-wechat-group-voting-robot-justyy
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-09-18 15:58:06
categories:
- cn
tags:
- cn
- steemit
- voting-bot
- delegate
thumbnail: https://steemitimages.com/DQmXLJ3f8LrpDSp1eto3ewY5W5a97eAviGi9LJuw9QajLti/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmXLJ3f8LrpDSp1eto3ewY5W5a97eAviGi9LJuw9QajLti/image.png)
*Image Credit: Pixabay.com*

@shenchensucc  12天前写了 [YY一个cn区最低保障系统](https://steemit.com/cn/@shenchensucc/yy-cn) 老实说，规则太复杂，实现起来有点难度（不仅是程序，而且还要考虑到 @justyy 机器人的资源 VP, SP）。

今天 YY了一个简单的雏形，当然规则还需要进一步细化，现[机器人](https://justyy.com/archives/5260)已经上线，使用方法及规则如下：

# 谁能使用
需要是 CN 区 微信群成员 并在这个列表上： https://helloacm.com/tools/steemit/wechat/

# 怎么使用
使用方法很简单，只需要 代理给 @justyy 任意量的SP，信任可以从最基本的比如  20 SP做起。

## 怎么代理？
可以通过 [vessel](https://justyy.com/archives/5106) 钱包(  作者： @jesta  开源steemit钱包  ):  https://steemit.com/steem-project/@jesta/vessel-006-steem-power-delegation

或者可以通过 steemconnect 比如下面URL代理20SP给 @justyy 机器人

https://v2.steemconnect.com/sign/delegateVestingShares?delegator=YOUR_STEEM_ID&delegatee=justyy&vesting_shares=20 SP  (**20后面有个空格**)

记得替换掉上面的 YOUR_STEEM_ID.

# 有啥好处？
每天英国时间0点的时候会根据你代理的SP给一些利息表示感谢 （CNU我认为是 CN Upvoting 的意思）：

比如：
```
Thank you for supporting CNU! Your 10.64 SP gives you interests of 0.004 SBD.
Thank you for supporting CNU! Your 15.84 SP gives you interests of 0.006 SBD.
Thank you for supporting CNU! Your 20.01 SP gives you interests of 0.008 SBD.
Thank you for supporting CNU! Your 35.06 SP gives you interests of 0.014 SBD.
```

当然最重要的好处是可以获得 @justyy 的点赞，先看一下下面这个 [Python](https://justyy.com/archives/5217)  函数:

```
def getScore(sp, total_esp, vp):
  bonus = 2 + min(sp, 1000) / 1000  
  ratio = min(100, sp / total_esp * bonus * 100 / (vp / 100))
  return ratio
```

sp 是你给 @justyy 代理的 SP， total_esp 是现在 @justyy 的有效总SP，然后 VP是 现在机器人的投票能量。函数返回值就是  @justyy 会给你最新文章（发表时间大于半小时小于24小时） 点赞的比重。

sp / total_esp * 100 就是你代理的SP占的整个 ESP的比重，然后奖励保底是2倍，并且按每多 100 SP (封底1000)多 10% 这也就是 bonus 的求法。

然后还得看当前的VP投票能量，所以这也就是后面 / (vp/100) 的意思。比如现在 @justyy 的 有效ESP是 2000，投票能量是 50%，如果你这时候代理 100 SP，那么将获得 机器人点赞的比例是:

bonus = 2 + 100/1000 = 2.1
ratio = min(100, 100/(2000+100) X 2.1 X 100/(50/100)) = 20%

那么这一次赞你将得到  2100 X 0.2 X 0.5=210 SP 的赞，是划算的，**这还不算上67级给你点赞，等级的传递，特别是有利于小鱼的升级**。

# 点赞次数
根据比例，如果你的  sp/total_esp 比例大于 80%，每天将得到 最多3次点赞；如果大于40%小于80% 将得到2次点赞，否则就是1次点赞。

需要注意的是，之前上线的 [优质内容机器人](https://steemit.com/cn/@justyy/good-content-upvoting-history-now-integrated-into-to-daily-ranking-table)点赞比例将大幅下调，并且已经限制为一天最多一次。如果你只发表一篇文章，并且已经加入这个计划，而且又在[排名前30](https://steemit.com/cn/@justyy/daily-cn-updates---cn72017-09-18)，那么会优先考虑 这个计划的点赞比例。

# 信任可以从 少量 SP开始
1. 记住，我是用 @justyy (没有专门的机器人号)  来为你点赞，这是因为可以用上 @justyy 2000的 ESP。
2. 我不会因为这么点事情而 毁坏我 67级的名誉。
3. 代理后，因为我用的是 [steemsql](https://justyy.com/archives/5198) 可能有几个小时延时，如果没有点赞，可以给我留言，我一定会补上（点赞和每日利息）
4. 如果取消计划，只需要 undelegate 就可以了， 但代理出的 SP 系统需要7天才能还到你帐号上。
5. 代理 SP只是借给 @justyy  所以各位可以放心，7天随时可以拿回。

有其它建议可以在下面留言，谢谢！

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
- [CN 每日排行榜](https://steemit.com/cn/@justyy/daily-cn-updates---cn72017-09-18)
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
- [Daily Top 30 Authors by Pending Payout in Last 7 Days](https://steemit.com/stats/@dailystats/daily-top-30-authors-pending-payout-in-the-last-7-days-2017-09-17)
- [Logic Tests Series (2) - DECR](https://steemit.com/cn/@justyy/logic-tests-series-2-decr-decr)
- [The experience of using Teamviewer on iPhone SE, connecting to desktop, and SSH to VPS, in order to make a Robot Python script up running.](https://steemit.com/cn/@justyy/teamviewer-vps-steemit-the-experience-of-using-teamviewer-on-iphone-se-connecting-to-desktop-and-ssh-to-vps-in-order-to-make-a)
- [Go to an Interview even if you are not changing your job.](https://steemit.com/cn/@justyy/go-to-an-interview-even-if-you-are-not-changing-your-job)
- [Rock-Paper-Scissors Gaming Contest for SteemIt CN Community](https://steemit.com/cn/@justyy/steem-50-sbd)
 
// Later, it may be reposted to my blogs: [justyy.com](https://justyy.com), [helloacm.com](https://helloacm.com) and [codingforspeed.com](https://codingforspeed.com)  稍后同步到我的[中文博客](https://justyy.com)和英文[计算机](https://helloacm.com)[博客](https://codingforspeed.com)。
- [STEEMIT cn区最低保障系统 上线了！](https://justyy.com/archives/5337)
- [记一次通过手机TeamViewer远程登陆家里服务器再远程登陆VPS敲命令在STEEMIT上发贴的经历](https://justyy.com/archives/5322)
- [The experience of using Teamviewer on iPhone SE, connecting to desktop, and SSH to VPS, in order to make a Robot Python script up running.](https://helloacm.com/the-experience-of-using-teamviewer-on-iphone-se-connecting-to-desktop-and-ssh-to-vps-in-order-to-make-a-robot-python-script-up-running/)

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原文首发于 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

**@justyy 是CN 区的点赞机器人，对优质内容进行点赞，只要代理给 @justyy 每天收利息(100 SP 每天0.04 SBD)并且能获得一次相应至少2倍的点赞，可以认为是VP 200%+ ，详细请看： [cn区最低保障系统 上线了!](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy) 和 [CN 区优质内容点赞机器人上线了!](https://steemit.com/cn/@justyy/a-good-content-upvote-bot-cn) 和 [点赞机器人每日点赞记录整合到每日报表中！](https://steemit.com/cn/@justyy/good-content-upvoting-history-now-integrated-into-to-daily-ranking-table)**

![](https://justyy.com/gif/justyy-php-is-the-best.gif)
欢迎你发表你的见解和看法，特别有意思的评论我可能会奖励你1 SBD哦。
Interesting Comments might be rewarded with 1 SBD.

- - -

This page is synchronized from the post: [cn区最低保障系统 上线了！ Introduction to the CN Wechat Group Voting Robot @justyy](https://steemit.com/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy)
