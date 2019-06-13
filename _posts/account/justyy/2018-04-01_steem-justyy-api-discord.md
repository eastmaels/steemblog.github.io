
---
title: '《Steem 指南》之 justyy 在线工具与 API 系列 - Discord 机器人'
permlink: steem-justyy-api-discord
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-01 16:27:24
categories:
- cn
tags:
- cn
- busy
- steem-guides
- discord
- cn-reader
thumbnail: https://steemitimages.com/DQmc9ka9n5aVok9ShgzmuswUVjMKnJXWkSYfhTyXtKLr41c/banner.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmc9ka9n5aVok9ShgzmuswUVjMKnJXWkSYfhTyXtKLr41c/banner.jpg)
*Image Credit: steemh.org*

## Discord 聊天频道
Discord 原本是给游戏设计的，但由于其功能多，接口开放能力强，使用的用户越来越多。我们CN区也有一个Discord 频道，加入地址为：

> https://discord.gg/7ctT3Xt

在网页里就可以加入 cnsteem 的大家庭了，当然也可以下载手机APP或者桌面程序来加入 discord。

相比微信群，Discord 没有500人限制，也可以无限时的撤回和修改消息，更重要的是，每个频道的聊天信息都是保存在服务器的，所以可以很方便的查看聊天记录。Discord 的每个频道都是一个聊天室，用于讨论不同的主题。

## Discord 机器人
我弄了两个Discord机器人，一个是 [币价机器人 `cryptocurrency`](https://justyy.com/archives/6089)，另一个是 [`steemit` 机器人](https://justyy.com/archives/6091)。我们可以分别添加这两个机器人为好友，通过和机器人私聊来对机器人发出指令，当然我们也可以在公共频道里发出指令（这样大家就可以信息共享）。

两个机器人都支持 命令 `?` 或者 `help` 来列出帮助。

### 币价机器人 cryptocurrency
币价机器人 `cryptocurrency` 的安装地址（您可以添加到其它的 Discord 频道里）

> https://discordapp.com/api/oauth2/authorize?client_id=417847038697406467&permissions=522304&scope=bot

这个机器人的使用方法和 [justyy 在线工具与 API 系列 - 炒币必备 CoinTools](https://steemit.com/cn-reader/@justyy/steem-justyy-api-cointools) 的命令使用是一样的：

- 虚拟货币和法币：`SBD USD` 命令查询 1 个 SBD 等于多少 USD
- 法币和虚拟货币：`CNY BTC` 命令查询 1 元可以买 多少个 BTC
- 虚拟货币和虚拟货币： `BTC SBD` 命令查询 1 个 BTC 等于多少 SBD
- 法币和法币：`USD CNY` 1美元等于多少RMB
- 虚拟货币查询：直接输入虚拟货币的代号，比如 SBD 或者 steem-dollars
- 在前面的查询前可以加上数量，比如 `100 SBD USD` 查询 100 个 SBD 等于多少 USD
- 还可以这样玩：`SBD 2 BTC` 查询 多少个 SBD 能换 2 个BTC

![image.png](https://gateway.ipfs.io/ipfs/QmWmf1zT8PbyxvpBFCQPfokJhstoJAb7vnaRsfQHYU6qvB)

币价数据是从 `coinmarketcap` 取得。

### steemit 机器人
该机器人的用途是用于查询 steemit 帐号和信息，您可以添加到您自己的 Discord 频道里：

> https://discordapp.com/oauth2/authorize?client_id=418196534660694037&permissions=522304&scope=bot

命令 `info` 将获取 STEEM区块链的一些信息：

![image.png](https://gateway.ipfs.io/ipfs/QmNQHEoALJkH6hxoUMidMkh8Uj8HS7GYhzxPjLXMDbXZd7)

使用 `?steemit_account` 来查询一个 steemit 帐号，比如:

![image.png](https://gateway.ipfs.io/ipfs/QmfQxQpYCkN5ybfChNigRr5U7DmdoJssJKJdCqBa9A4f9L)

使用 `p` 命令来获取是否 50/50\% 发文的建议

![image.png](https://gateway.ipfs.io/ipfs/QmQ1xXzPpnk5THbPLvQqfFcAam2M55kKRt5qAjVWRkKDTa)

使用 `w steemit_account` 来获得 steemit 见证人的信息，例如：

![image.png](https://gateway.ipfs.io/ipfs/QmbiaaKBznBu36m5DCLZBwUZbfgJKeEd3wDFvSkou97Jd4)

--------------------------
本文已经同步到: [https://justyy.com/archives/6172](https://justyy.com/archives/6172)

- [SteemIt 工具、API接口、机器人和教程](https://helloacm.com/tools/steemit-tools/)
- [SteemIt Tools, Bots, APIs and Tutorial](https://helloacm.com/tools/steemit/)
- [代理 5 SP](https://helloacm.com/tools/steemit/delegate-form/?delegatee=justyy) 即可成为 [YY 银行股东](https://steemit.com/cn/@justyy/2bwmvk-yy).

## 支持我的工作 支持我成为 [见证人](https://steemit.com/cn/@justyy/5h6gyv-cn) 
1. [请在 这里 投我一票](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), 或者
2. 设置我 [为代理](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

谢谢您！

- - -

This page is synchronized from the post: [《Steem 指南》之 justyy 在线工具与 API 系列 - Discord 机器人](https://steemit.com/@justyy/steem-justyy-api-discord)
