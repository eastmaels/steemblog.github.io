
---
title: 'Logic Tests Series (2) - DECR 逻辑测试系列之二 - DECR'
permlink: logic-tests-series-2-decr-decr
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-09-18 11:30:42
categories:
- cn
tags:
- cn
- cn-programming
- steemstem
- interview
- coding
thumbnail: https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


@justyy 's series of Logits Tests:
- [Introduction to Logic Tests Series](https://helloacm.com/introduction-to-logic-tests-series/)

What you can do with this tiny programming language with only 4 instructions? Today, we are going to implement the DECR function which decrements the variable by one, for example, DECR(X) where X=5 will make X=4.

```
DECR(X) {

}
```

The only 4 instructions are: INCR, LOOP, ZERO and ASGN. And all variables hold non-negative integers. To make X decremented by 1, we can increment a temp variable by (X-1) times..

```
DECR(X) {
   ZERO(V1)
   LOOP(X) {
     ASGN(X, V1)
     INCR(V1)
  }
}
```

We translate this to [C++](https://helloacm.com/c-coding-exercise-use-hashtablepriority-queue-to-compute-the-relative-ranks/), which might be a bit easy to understand.

```
void decr(unsigned int &x) {
   int v1 = 0;
   int xx = x;
   for (; x > 0; -- x) {
      xx = v1;
      v1 ++;
   }
   x = xx;
}
```

If you change the value of the loop variable x, the loop iteration count may be altered. Therefore, we declare a temp variable xx and assign the xx to X after loop when it gets incremented (x-1) times.

![](https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg)
*Image Credit: pixabay.com*

@justyy 的逻辑测试系列:
- [逻辑测试系列 - 一种只有4种语句的编程语言 - （1）](https://justyy.com/archives/5320)

这种只有4条语句的语言能做什么呢？今天我们来定义一个DECR函数，该函数就是把 变量 X 减一。

```
DECR(X) {

}
```

要求填写函数体，使用 INCR、LOOP、ZERO、和 ASGN 仅有的4个语句。我们不妨想一下，已知变量 X 是非负整数，那么我们只需要 循环 X-1次，每次把X从0加1即可。

```
DECR(X) {
   ZERO(V1)
   LOOP(X) {
     ASGN(X, V1)
     INCR(V1)
  }
}
```

我们翻译成 [C++](https://justyy.com/archives/2257), 可能比较好懂一些:

```
void decr(unsigned int &x) {
   int v1 = 0;
   int xx = x;
   for (; x > 0; -- x) {
      xx = v1;
      v1 ++;
   }
   x = xx;
}
```

由于C++的 for 里改变 x 值会改变循环次数，所以我们用了一个临时变量 xx。

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
- [The experience of using Teamviewer on iPhone SE, connecting to desktop, and SSH to VPS, in order to make a Robot Python script up running.](https://steemit.com/cn/@justyy/teamviewer-vps-steemit-the-experience-of-using-teamviewer-on-iphone-se-connecting-to-desktop-and-ssh-to-vps-in-order-to-make-a)
- [Go to an Interview even if you are not changing your job.](https://steemit.com/cn/@justyy/go-to-an-interview-even-if-you-are-not-changing-your-job)
- [Rock-Paper-Scissors Gaming Contest for SteemIt CN Community](https://steemit.com/cn/@justyy/steem-50-sbd)
 
// Later, it may be reposted to my blogs: [justyy.com](https://justyy.com), [helloacm.com](https://helloacm.com) and [codingforspeed.com](https://codingforspeed.com)  稍后同步到我的[中文博客](https://justyy.com)和英文[计算机](https://helloacm.com)[博客](https://codingforspeed.com)。
- [逻辑测试系列之二 – DECR](https://justyy.com/archives/5339)
- [Logic Tests Series (2) – DECR](https://helloacm.com/logic-tests-series-2-decr/)
- [记一次通过手机TeamViewer远程登陆家里服务器再远程登陆VPS敲命令在STEEMIT上发贴的经历](https://justyy.com/archives/5322)
- [The experience of using Teamviewer on iPhone SE, connecting to desktop, and SSH to VPS, in order to make a Robot Python script up running.](https://helloacm.com/the-experience-of-using-teamviewer-on-iphone-se-connecting-to-desktop-and-ssh-to-vps-in-order-to-make-a-robot-python-script-up-running/)

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原文首发于 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

- - -

This page is synchronized from the post: [Logic Tests Series (2) - DECR 逻辑测试系列之二 - DECR](https://steemit.com/@justyy/logic-tests-series-2-decr-decr)
