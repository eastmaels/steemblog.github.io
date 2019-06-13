
---
title: '《Steem 指南》之 justyy 在线工具与 API 系列 - 设置见证人代理和见证人查询'
permlink: 78a3jr-steem-justyy-api
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-10 23:17:09
categories:
- cn
tags:
- cn
- cn-programming
- cn-reader
- steemtools
- steem-guides
thumbnail: https://steemitimages.com/DQmc9ka9n5aVok9ShgzmuswUVjMKnJXWkSYfhTyXtKLr41c/banner.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


**English Translation: [SteemIt Witness Proxy Lookup Tool - Who Sets You as Proxy?](https://steemit.com/witness-category/@justyy/steemit-witness-proxy-lookup-tool-who-sets-you-as-proxy)**

![](https://steemitimages.com/DQmc9ka9n5aVok9ShgzmuswUVjMKnJXWkSYfhTyXtKLr41c/banner.jpg)
*Image Credit: steemh.org*

# 见证人代理
之前我们了解到一个STEEM帐号可以有30票投给[见证人](https://justyy.com/archives/6180)，如果您有选择困难或者不愿意费心一个一个投，您可以设置 SteemIt 的见证人代理 (Witness Proxy) 。这个见证人代理就会全权代理你来投票：他/她投谁，那么你就跟投谁。

比如大神 @abit 设置 @smooth 为见证人代理，在 steemd.com/@abit 上就会有这样的信息：

> @abit uses smooth as a voting proxy.

见证人代理是可以串起来的，比如 同时很多人设置 @abit 为见证人代理。

# 如何设置见证人代理
通过 steemconnect 把下面的 proxy 参数设置成您想要设置的代理见证人即可，取消见证人代理需要把 approve=1 改成 approve=0
> https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1

# 查看谁设置您为代理见证人？
设置您为代理见证人的都是真爱，他/她们 对你如此相信，把选票全权交到您手上。可以通过工具： https://helloacm.com/tools/steemit/list-of-proxy/  来查看谁设置您为代理见证人

输入 ID，按回车或者点击按钮，一会儿就会显示列表。

![](https://steemitimages.com/DQmaog6UeTXTf6yJLAE11Jcrdo6SYYZJcDeG7pv7DweSXni/image.png) 

# API
API访问接口如下：
> https://helloacm.com/api/steemit/proxy/?cached&id=justyy

数据将以JSON格式返回，每一行就是一个见证人信息，其中包括了以下字段：

> account
proxy
timestamp

如果 \$\_GET 参数 s 没有指定，该API接口也会去找 \$\_POST 变量 id。

> curl -X POST https://helloacm.com/api/steemit/proxy/ -d "id=justyy"

----------------
本文同步到: [https://justyy.com/archives/6237](https://justyy.com/archives/6237)

## 支持我的工作 支持我成为 [见证人](https://steemit.com/cn/@justyy/5h6gyv-cn) 
1. [请在 这里 投我一票](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), 或者
2. 设置我 [为代理](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

谢谢您！

您可能还会喜欢：[SteemIt 工具、API接口、机器人和教程](https://helloacm.com/tools/steemit-tools/)

**English Translation: [SteemIt Witness Proxy Lookup Tool - Who Sets You as Proxy?](https://steemit.com/witness-category/@justyy/steemit-witness-proxy-lookup-tool-who-sets-you-as-proxy)**

- - -

This page is synchronized from the post: [《Steem 指南》之 justyy 在线工具与 API 系列 - 设置见证人代理和见证人查询](https://steemit.com/@justyy/78a3jr-steem-justyy-api)
