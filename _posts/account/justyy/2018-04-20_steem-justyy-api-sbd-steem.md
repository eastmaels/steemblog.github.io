
---
title: '《Steem 指南》之 justyy 在线工具与 API 系列 - 同时给多个帐号发送SBD或者STEEM'
permlink: steem-justyy-api-sbd-steem
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-20 00:38:51
categories:
- cn
tags:
- cn
- cn-reader
- steemtools
- steem-guides
- steemapps
thumbnail: https://steemitimages.com/DQmc9ka9n5aVok9ShgzmuswUVjMKnJXWkSYfhTyXtKLr41c/banner.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


English Translation: [SteemIt Wallet Tool - Send SBD or STEEM to Multiple Accounts](https://steemit.com/steemdev/@justyy/steemit-wallet-tool-send-sbd-or-steem-to-multiple-accounts)

![](https://steemitimages.com/DQmc9ka9n5aVok9ShgzmuswUVjMKnJXWkSYfhTyXtKLr41c/banner.jpg)
*Image Credit: steemh.org*

# 同时给多个帐号发送SBD或者STEEM
STEEMIT 和 BUSY 的前端都有一个内置的钱包工具，您可以一次给一个帐号发送 SBD 或者 STEEM。当我们要给很多很多人发送钱的时候，就显得有些不方便了。这时候可以用这个在线工具：

https://helloacm.com/tools/steemit/wallet-tool/

# 填写表单
只需要填上你的ID、私钥(active key)、需要发送的金额（最少0.001）、选择SBD或者STEEM，然后把收款人的ID放在每一行上，如下：

![](https://steemitimages.com/DQmT3CCCqoDvK3EeaTEtdHkmir69XVLrPYBDmmzLuoEdwrS/image.png)

MEMO 就是附言，这里可以用 `[username]` 来替代收款人的ID。私钥不会被上传或者保存，只会在浏览器中调用 steem.min.js 的时候使用到。

点击 *发送* 将会有一个最终确认：
![](https://steemitimages.com/DQmSTa5astuqntabFN3H7UsGU8kwYSJiEdwfxGzVJBmrdWz/image.png)

然后显示已经发送成功了！
![](https://steemitimages.com/DQmaTZ5AaHLXsNX6MjjmoXVTGcxX6sf9A3FHXUP5fLaFJuE/image.png)

在区块链上已经有记录了。
![](https://steemitimages.com/DQmSN5uM3aMFyQkf5nuS6k63dbanBokB7UqHMpDz6TtLMyg/image.png)

这个小工具用来群发消息或者发些奖励再适合不过了。不过当前版本的局限性就是每个收款人的金额是一样的。

-------------------------------------------
本文同步到: [https://justyy.com/archives/6266](https://justyy.com/archives/6266)

## 支持我的工作 支持我成为 [见证人](https://steemit.com/cn/@justyy/5h6gyv-cn)
1. [请在 这里 投我一票](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), 或者
2. 设置我 为[代理](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

谢谢您！

您可能还会喜欢：**[SteemIt 工具、API接口、机器人和教程](https://helloacm.com/tools/steemit-tools/)**

English Translation: [SteemIt Wallet Tool - Send SBD or STEEM to Multiple Accounts](https://steemit.com/steemdev/@justyy/steemit-wallet-tool-send-sbd-or-steem-to-multiple-accounts)

- - -

This page is synchronized from the post: [《Steem 指南》之 justyy 在线工具与 API 系列 - 同时给多个帐号发送SBD或者STEEM](https://steemit.com/@justyy/steem-justyy-api-sbd-steem)
