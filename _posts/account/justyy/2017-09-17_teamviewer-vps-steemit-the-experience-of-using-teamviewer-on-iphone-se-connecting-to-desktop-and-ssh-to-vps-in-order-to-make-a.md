
---
title: '记一次通过手机TeamViewer远程登陆家里服务器再远程登陆VPS敲命令在STEEMIT上发贴的经历 - The experience of using Teamviewer on iPhone SE, connecting to desktop, and SSH to VPS, in order to make a Robot Python script up running.'
permlink: teamviewer-vps-steemit-the-experience-of-using-teamviewer-on-iphone-se-connecting-to-desktop-and-ssh-to-vps-in-order-to-make-a
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-09-17 09:37:48
categories:
- cn
tags:
- cn
- crontab
- steemstem
- linux
- teamviewer
thumbnail: https://steemitimages.com/DQmPRP7n7FwL1rwqqWc8wsedgMVtCasFSNmNbWNspuhRkXG/2017-09-15%2014.40.22.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


*Abstract*: One of the [Python](https://helloacm.com/simple-profiling-in-python/) scripts stopped working last Friday when I was AWAY_FROM_KEYBOARD. That script is used to automate (via the Linux [crontab](https://helloacm.com/crontab-generator/)) the CN Daily Ranking table and relevant information. I used [Teamviewer](https://helloacm.com/does-teamviewer-support-multi-screens-monitors/) to login to my desktop at home, where I opened the SSH terminal to connect to VPS remotely. I typed in the command manually and re-run the Python script.

However, there are SSH client terminals on both Android or IOS (iPhone) smart phones, so it might be quicker to SSH to remote servers using [SSH](https://helloacm.com/the-ultimate-vps-from-quickhostuk/) clients but there is still a risk to enter your account credentials of VPS account on your smart phones.

昨天 在和好基友（前群主）  @tumutanzi  电话时，就谈到了我那每日榜单。我说现在已经基本上实现全自动化了：我写了几个[PYTHON](https://justyy.com/archives/5217)脚本，每日通过 steemsql 生成统计数据，生成每日前30名榜单，然后每10分钟根据榜单实现自动点赞，记录到日子中，通过 crontab 设置：每日英国正午12点准时发布帖子。

当然，程序并不完美，有时候 使用的PYTHON库会抽风，就是会有异常抛出，为了避免重复发贴，我并没有做相应的异常处理。实际上重复发贴也不太可能，因为：[STEEMIT](https://justyy.com/archives/5301) 连续2次发贴必须间隔最少5分钟，并且程序本地做了记录（成功发贴做了相应的标记）

当时，我人在外面，大概2点多的时候我刷了一下手机，发现帖子并没有成功发出，所以我就有点焦虑了。虽然我可以等到晚上回家再补上，但是这明显并不是我的风格。于是我想到了 [TeamViewer](https://justyy.com/archives/1445), 一个可以免费（仅限于个人目的）使用的跨平台远程登陆的软件。

我在手机上装了 Teamviewer, 远程登陆家里的服务器，然后在 [iphone se](https://justyy.com/archives/4081) 小屏幕上打开 SSH 终端，远程登陆VPS，并且手动敲入命令。

![2017-09-15 14.40.22.png](https://steemitimages.com/DQmPRP7n7FwL1rwqqWc8wsedgMVtCasFSNmNbWNspuhRkXG/2017-09-15%2014.40.22.png)

![2017-09-15 14.40.26.png](https://steemitimages.com/DQmTszBUp2Hpd3JVVoEAzyniVq2jpeJkXZ88x8N4HHmPHFU/2017-09-15%2014.40.26.png)

成功了！刷新一下STEEM 页面，帖子发布了，每日一贴，为大家提供更新，鼓励大家创作（[优质机器人](https://justyy.com/archives/5239) @justyy 根据前30名点赞）从不间断。

其实也可以直接在手机上装 SSH 客户端，然后在手机上SSH直接连接VPS服务器即可，但是当时只想着连接家里的电脑更安全一些（因为不需要直接在手机上输入远程服务器的用户名和密码）。以下是在苹果手机IOS系统上装的一个SSH客户端。

![2017-09-17 12.32.14.png](https://steemitimages.com/DQmVHRsTbFLa3xJWE1kuZSRGFxk69bAg4TNBLBNwuW65mVV/2017-09-17%2012.32.14.png)

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
- [CN 每日排行榜](https://steemit.com/cn/@justyy/daily-cn-updates---cn72017-09-16)
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
- [Daily Top 30 Authors by Pending Payout in Last 7 Days](https://steemit.com/stats/@dailystats/daily-top-30-authors-pending-payout-in-the-last-7-days-2017-09-16)
- [Go to an Interview even if you are not changing your job.](https://steemit.com/cn/@justyy/go-to-an-interview-even-if-you-are-not-changing-your-job)
- [Rock-Paper-Scissors Gaming Contest for SteemIt CN Community](https://steemit.com/cn/@justyy/steem-50-sbd)
 
// Later, it may be reposted to my blogs: [justyy.com](https://justyy.com), [helloacm.com](https://helloacm.com) and [codingforspeed.com](https://codingforspeed.com)  稍后同步到我的[中文博客](https://justyy.com)和英文[计算机](https://helloacm.com)[博客](https://codingforspeed.com)。
- [记一次通过手机TeamViewer远程登陆家里服务器再远程登陆VPS敲命令在STEEMIT上发贴的经历](https://justyy.com/archives/5322)
- [The experience of using Teamviewer on iPhone SE, connecting to desktop, and SSH to VPS, in order to make a Robot Python script up running.](https://helloacm.com/the-experience-of-using-teamviewer-on-iphone-se-connecting-to-desktop-and-ssh-to-vps-in-order-to-make-a-robot-python-script-up-running/)

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原文首发于 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

- - -

This page is synchronized from the post: [记一次通过手机TeamViewer远程登陆家里服务器再远程登陆VPS敲命令在STEEMIT上发贴的经历 - The experience of using Teamviewer on iPhone SE, connecting to desktop, and SSH to VPS, in order to make a Robot Python script up running.](https://steemit.com/@justyy/teamviewer-vps-steemit-the-experience-of-using-teamviewer-on-iphone-se-connecting-to-desktop-and-ssh-to-vps-in-order-to-make-a)
