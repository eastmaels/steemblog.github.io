
---
title: '注意： 请不要登陆 openledger.info\\ openledger.io 等站点！！！'
permlink: openledger-info-openledger-io
catalog: true
toc_nav_num: true
toc: true
date: 2018-06-03 13:10:00
categories:
- openledger
tags:
- openledger
- security
- bitshares
- hack
- cn
thumbnail: https://cdn.steemitimages.com/DQmToRf2AYD8rdwX1bYNAvFYZbY3oQkZiFhpXsADEiSZTUY/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


今天登陆 openledger.info的博客，看到最新一条消息是提示大家不要访问openledger.info\ openledger.io域名以及相关子域名，原因是他们的域名被黑了（注意，不是DNS劫持，是**域名控制权直接到黑客手里**了）

![](https://cdn.steemitimages.com/DQmToRf2AYD8rdwX1bYNAvFYZbY3oQkZiFhpXsADEiSZTUY/image.png)
(图源 ：[pixabay](https://pixabay.com/))

这就意味着黑客可以搭建一个钓鱼站点，然后把域名指过去，然后设置好SSL证书，然后坐等用户登陆即可。一旦用户登陆openledger相关的交易所，那么**账户啊、私钥啊、密码啊，就可以很轻易的被黑客截获**，然后如果你账户内资产够多，黑客手速够快(或者程序效率够高)，那么除了哇哇大哭，貌似别无他法。

总之，从用户/访客的角度，你看不出任何异常， 然后就上当了，然后钱就没了😭 openledger官方给出的建议是，使用bitshares官网的钱包：https://wallet.bitshares.org。并且对于账户被黑的，建议参考如下链接**修改密码**：https://github.com/bitshares/bitshares-ui/wiki/Cloud-Wallet-Login-and-changing-password

同时，我注意到好多OpenLedger的内盘资产已经禁止交易了，比如在内盘访问Open.EOS、OPEN.ETH、OPEN.BTC、OPEN.STEEM等资产，我们会得到类似如下提示：
>* The owner of OPEN.EOS has disabled trading in this market.
>* The owner of OPEN.ETH has disabled trading in this market.
>* The owner of OPEN.BTC has disabled trading in this market.
>* The owner of OPEN.STEEM has disabled trading in this market.

涉及的OpenLedger的内盘资产有BTC、ETH、EOS、KRM、STEEM、DASH以及 LTC。

按说如果我们没登陆钓鱼站点，没在钓鱼站点输入过账户密码导入过私钥什么的，我们的账户以及账户资产应该是安全的。


![](https://cdn.steemitimages.com/DQmSw4Wwbs7dSAuEerHNMtj8spYQBooiE6FBoQj8fkWkRuH/image.png)
(图源 ：[pixabay](https://pixabay.com/))

# 划重点

* OpenLedger相关域名落到黑客手中了
* 先不要登陆openledger.info\ openledger.io等相关域名子域名站点
* 如果这两天登陆过，那么有被黑的可能，快去修改密码密钥
* OpenLedger的账户可以在https://wallet.bitshares.org


但愿OpenLedger早点解决这个问题吧。

- - -

This page is synchronized from the post: [注意： 请不要登陆 openledger.info\\ openledger.io 等站点！！！](https://steemit.com/@oflyhigh/openledger-info-openledger-io)
