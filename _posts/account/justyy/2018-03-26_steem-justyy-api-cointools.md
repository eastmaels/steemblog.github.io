
---
title: '《Steem 指南》之 justyy 在线工具与 API 系列 - 炒币必备 CoinTools'
permlink: steem-justyy-api-cointools
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-03-26 23:17:33
categories:
- cn-reader
tags:
- cn-reader
- cn-programming
- steem-guides
- busy
- cn
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

## CoinTools 介绍
我之前很零碎的开发了查询STEEM/SBD币价的功能，把同样的功能放在[公众号](https://justyy.com/archives/6086)或者 [Discord](https://justyy.com/archives/6089) 频道里，但终究觉得不够直观，因为用户需要键盘敲入命令才能查询，这很程序员思维的设计。

我想着如何让币价查询变得再简单一些，于是我想到了做成Chrome[浏览器插件](https://justyy.com/archives/4324)，因为我觉得这是最好的入口：
1. Chrome 浏览器的市场占有率接近60\%
2. Chrome 浏览器扩展是个非常方便的入口（右上角）
3. Chrome 浏览器扩展的安装方便 (Google Webstore) 自动更新
4. 跨平台

## 实现技术 Technology Stack
大佬 [Jeff Atwood](https://en.wikipedia.org/wiki/Jeff_Atwood) 曾经说过：
> Any application that can be written in JavaScript, will eventually be written in JavaScript

意思就是，如果一个软件能用Javascript 来写，那么终究，它就会被用Javascript 来写。

## 安装
首先，您需要使用 Chrome 浏览器，当然如果您使用的是 Firefox，也许可以通过 [Chrome Store Foxified](https://addons.mozilla.org/en-GB/firefox/addon/chrome-store-foxified/) 来使用 大部分 Chrome 扩展。

然后，在 Google Webstore 的  CoinTools 安装地址点击 “添加到 Chrome” (或者 "Add to Chrome") 就可以了。

https://chrome.google.com/webstore/detail/coin-tools/fmglcggbdcbkpkfapngjobfeakehpcgj

## 源代码
开源： https://github.com/DoctorLai/CoinTools
感谢各国友人提供界面翻译：https://github.com/DoctorLai/CoinTools/tree/master/lang

## 使用的API
CoinTools 采集了以下三个数据源的数据：
- CoinMarketCap
- CryptoCompare
- Coinbase

## 使用方法
点击右上角的 XRP 图标 即可打开 CoinTools:

![icon.jpg](https://gateway.ipfs.io/ipfs/QmeFxzpPGC2zKC3pJDiajJCNL1FPW5pEZJ97qX9DDJ8EwJ)

## 软件设置
CoinTools软件的默认语言是英语，在第一次使用的时候可以通过 Settings 标签页来选择成其它您喜爱的语言（支持十来种语言）：

![image.png](https://gateway.ipfs.io/ipfs/QmPoeBpx2o6mc7p4Hnp1HVUdGb51mzJ8A4BiepLWgsV5Ww)

在这个界面设置里，我们还可以设置本地的法币，比如人民币。最下面的这个 “货币转换” 这是软件的精华。在这里，可以自定义我们想要看的信息，每一行就是一个查询命令。比如：

- 虚拟货币和法币：`SBD USD` 命令查询 1 个 SBD 等于多少 USD
- 法币和虚拟货币：`CNY BTC` 命令查询 1 元可以买 多少个 BTC
- 虚拟货币和虚拟货币： `BTC SBD` 命令查询 1 个 BTC 等于多少 SBD
- 法币和法币：`USD CNY` 1美元等于多少RMB
- 虚拟货币查询：直接输入虚拟货币的代号，比如 SBD 或者 steem-dollars
- 在前面的查询前可以加上数量，比如 `100 SBD USD` 查询 100 个 SBD 等于多少 USD
- 还可以这样玩：`SBD 2 BTC` 查询 多少个 SBD 能换 2 个BTC

## 通用
软件一启动，所看到的页面，显示市场概况，更重要的是一些我们想看的币价信息，也就是上面所自定义的：

![image.png](https://gateway.ipfs.io/ipfs/QmRZn41oFbofA15AGcKoQt4LPYqSRSJbMofyUbyEa7Zc78)

## 新闻
显示着一些英文的关于虚拟货币的一些文章 (Feed):
![image.png](https://gateway.ipfs.io/ipfs/Qma43iwbL9quX8FYzveBp3sj4Ah227BvxkYNnXbniWR85M)

## 排名
默认列出了前200名的虚拟货币（按市场总量）：
![image.png](https://gateway.ipfs.io/ipfs/QmT1TnoDs92Fktk2Rp2w79aiopjDXfD8pw4Lnj4UedFBHZ)

我们可以搜索，边敲字符就可以马上得到结果 (Instant)
![image.png](https://gateway.ipfs.io/ipfs/QmdZW6mNWWMg6dK8x1hpYABtp8dy3S29P9iBkWfhPz1HGr)

点击虚拟货币的名称，可以得到额外的一些信息：
![image.png](https://gateway.ipfs.io/ipfs/Qme1vBErmByLt7rqsHMNQiZFWt4YgRG53g7kEj7gd2i2ZJ)

## 图表
### 所有市场总值（美元）
![image.png](https://gateway.ipfs.io/ipfs/QmQ3YAmbn1DhsWzDKRs1gFJyYFAt6MPu5wsjXvbfNo3YoZ)

### 24小时市场占用量（美元）
![image.png](https://gateway.ipfs.io/ipfs/QmdTtBWP8GyQTbz5skv8gDLnMVmTxzYrs3vtaRnpATymjB)

## 工具
该工具可以转换任意两种货币（虚拟货币或者法币）
![image.png](https://gateway.ipfs.io/ipfs/Qmf9Say8hiMgyxiJGnUc4zETXLvZodiqC2R96RpHX2E6Gq)

数量为负的时候则会把转换的货币调换，如上图所示。

## 历史
任意天数，任意币种之间的历史数据，包括了 Open, Close, Low, High 和 Average 五条曲线 （默认只显示 平均，也就是 当日最高+最低价除于2）。
![](https://steemitimages.com/DQmaP5QUkugaffqdga7ps8hXaNmZxEjREoEEkYCEzCmM3kk/image.png)

## 配对
该功能用于显示交易所中该币种的配对情况，如：

![image.png](https://gateway.ipfs.io/ipfs/QmZyAMoTJP6FAQBsZNe9wpaD5r1xRmq646QvaNZJ7wLfgA)

## 总结
这个工具，我相对来说 还是较满意的，因为：简单、好用。

--------------------------
- [SteemIt 工具、API接口、机器人和教程](https://helloacm.com/tools/steemit-tools/)
- 支持我的工作 支持我成为 [见证人](https://steemit.com/cn/@justyy/5h6gyv-cn) 请在 [这里 投我一票!](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy)
- [代理 5 SP](https://helloacm.com/tools/steemit/delegate-form/?delegatee=justyy) 即可成为 [YY 银行股东](https://steemit.com/cn/@justyy/2bwmvk-yy).

同步到博文: [https://justyy.com/archives/6146](https://justyy.com/archives/6146)
[SteemIt Tools, Bots, APIs and Tutorial](https://helloacm.com/tools/steemit/)

- - -

This page is synchronized from the post: [《Steem 指南》之 justyy 在线工具与 API 系列 - 炒币必备 CoinTools](https://steemit.com/@justyy/steem-justyy-api-cointools)
