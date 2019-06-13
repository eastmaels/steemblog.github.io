
---
title: 'Hide Steemit Payout/Wallet - Simple but Useful! 隐藏钱包，你能忍住不看么？'
permlink: hide-steemit-payout-wallet-simple-but-useful
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-10-04 22:32:57
categories:
- steemit
tags:
- steemit
- steemstem
- steemtools
- cn
- steemdev
thumbnail: https://steemitimages.com/DQmQPBgUCHmdeTqBLsRwBz2gxzZt5zWRQ7cSTT2AYYRKeaL/icon.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmQPBgUCHmdeTqBLsRwBz2gxzZt5zWRQ7cSTT2AYYRKeaL/icon.png)

A user has left a feedback on @justyy 's [Chrome Extension Hide SteemIt Payout](https://steemit.com/steemdev/@justyy/hide-steemit-payout),

> This is great. Can you hide wallets too?

![](https://steemitimages.com/DQmeAmQoMBwyMJicdPQ62jrhzWJpUzG6QCFapNgwmmEHWZH/image.png)

It seems she/he is not so happy about his/her payout. I think it makes sense to hide the wallet if you are not so interested in the payout figures. Keep it simple, keep calm and don't waste time in checking your earnings from time to time.

Hiding the Wallet is easy, with a few lines of [JS](https://helloacm.com/the-best-steemit-upvoting-strategy-calculator-in-javascript/) code in the extension:

```
var e = document.querySelectorAll("a[href*=transfers]");
for (var i = e.length - 1; i >= 0; -- i) {
    e[i].innerHTML = '';
    e[i].setAttribute("href", "#");
}
```

This is how it looks, the page looks much [more cleaner](https://helloacm.com/hide-steemit-payout/):

![](https://steemitimages.com/DQmarixY1jDtav3d71DHzpnataZSubGpse4ZgwFTGLtkAuA/image.png)

Hide the payout/wallet, focus on content-writing instead of checking the figures. This is good for you, trust me :)

Available at Webstore (v0.15):  https://chrome.google.com/webstore/detail/hide-steemit-payout/lbpcheminbfokogdnckkipdmaadldhlh

----------------------

今天无意中看到一用户在使用了 [隐藏收益的CHROME插件后](https://steemit.com/steemdev/@justyy/hide-steemit-payout)  留言: 

>  很不错，但是你能把钱包也隐藏了么？

![](https://steemitimages.com/DQmeAmQoMBwyMJicdPQ62jrhzWJpUzG6QCFapNgwmmEHWZH/image.png)

看来他/她也深度中毒用户啊，于是我觉得既然隐藏收益了，为啥不连钱包也隐藏了？简简单单多好，专注写作，别没事点点点，真的很浪费时间。

于是很容易的在[插件](https://justyy.com/archives/5016)中加入几行[JS](https://justyy.com/archives/3669)代码，搞定：

```
var e = document.querySelectorAll("a[href*=transfers]");
for (var i = e.length - 1; i >= 0; -- i) {
    e[i].innerHTML = '';
    e[i].setAttribute("href", "#");
}
```

效果如下，页面简单干净许多:

![](https://steemitimages.com/DQmarixY1jDtav3d71DHzpnataZSubGpse4ZgwFTGLtkAuA/image.png)

[隐藏收益](https://justyy.com/archives/5269)，隐藏钱包，减少浪费在STEEMIT的时间，对你有好处的。

Chrome 插件地址 (v0.15 版本)： https://chrome.google.com/webstore/detail/hide-steemit-payout/lbpcheminbfokogdnckkipdmaadldhlh

--------------------------------
**@justyy 是CN 区的点赞机器人**，对优质内容进行点赞，只要代理给 @justyy 每天收利息(100 SP 每天0.04 SBD)并且能获得一次相应至少2倍的点赞，可以认为是VP 200%+ ，详细请看：
- [cn区最低保障系统 上线了!](https://steemit.com/cn/@justyy/cn-introduction-to-the-cn-wechat-group-voting-robot-justyy) 
- [cn区低保计划还会继续下去](https://justyy.com/archives/5368)
- [cn区低保计划（鼓励新人）真的适合你么？](https://steemit.com/cn/@justyy/56dta3-cn)

中文区的大鱼 **@htliao** 都加入了这个计划(530 SP)表示支持，您还不来试试么？

> @justyy 是 [https://justyy.com](https://justyy.com/) 的博主 - 西半球知名的“土豪”博主。在大哥 @tumutanzi 的带领下加入了 [STEEMIT](https://steemit.com/cn/@tumutanzi/66fqyu-steemit)。感谢您阅读 @justyy  的帖子 希望得到您的follow、upvote 或者是 reply 。

> [Hide Steemit Payout/Wallet - Simple but Useful Chrome Extension](https://helloacm.com/hide-steemit-payoutwallet-simple-but-useful-chrome-extension/)
> [隐藏STEEMIT钱包，你能忍住不看么？](https://justyy.com/archives/5432)

欢迎您发表高见，我会赞赏(Upvote)高质量的评论。

> [Steemit 在线工具和API接口](https://helloacm.com/tools/steemit-tools/)
> [SteemIt Tools and APIs](https://helloacm.com/tools/steemit/)

- - -

This page is synchronized from the post: [Hide Steemit Payout/Wallet - Simple but Useful! 隐藏钱包，你能忍住不看么？](https://steemit.com/@justyy/hide-steemit-payout-wallet-simple-but-useful)
