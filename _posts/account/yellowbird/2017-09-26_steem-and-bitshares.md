
---
title: 'Steem and Bitshares'
permlink: steem-and-bitshares
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-09-26 03:40:06
categories:
- cn
tags:
- cn
- steemit
- steem
- blockchain
- blog
thumbnail: https://steemitimages.com/DQmSRPzH51gHuZzF4Hqg8JH6JoN4U7jzSSoo74ubvLRc6fD/1.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


### 1、steem的去中心化交易所

Steem蓝皮书提到，Steem区块链提供去中心化的代币交易所，类似于Bitshares比特股交易所。交易所允许用户通过公共、去中心化、点对点的市场来交换他们的steem和SBD（steem blockchain dollars）代币。用户可以下买单和卖单，由区块链自动执行订单匹配。
![1.png](https://steemitimages.com/DQmSRPzH51gHuZzF4Hqg8JH6JoN4U7jzSSoo74ubvLRc6fD/1.png)

通过，个人账户界面右上角的三根横线可以进入steem的去中心化交易所。或者通过wallet下SBD里的market进入。
![2.png](https://steemitimages.com/DQmUdpA8YCccHybwCmn3ykM9j6BVC1d9jtFbDFA8PBBBioZ/2.png)
这种SBD与steem间的兑换，可以简单理解为在云币交易所里CNY与BTC间的兑换。不同的是CNY就等值为人民币，SBD代币是通过一些技术设计为锚定美元的代币。所以，steem完全也可以设计SCNY（自己假想的steem锚定人民币的货币）。

### 2、Bitshares去中心化交易所

Bitshares又称比特股，去中心化的交易所，下图就是目前bitshares热门的交易市场。
![3.png](https://steemitimages.com/DQmdLJq1cWZPzTB1whbv7EeBRLrqY243KpfJFDKqKC87E7r/3.png)

怎么理解去中心化的交易所与云币这样的中心化交易所的区别呢。

中心化的交易所比如云币，是由云币平台来维护，以及用云币的信用来给交易提供担保，中心化的最大缺点就是“中心”出问题，就玩完。比如政策风险导致云币平台的关闭。

而Bitshares去中心化交易所是运行在区块链上，由区块链来提供动力记录交易，是点对点的交易，所有的交易被记录在区块链上，由区块链技术来解决交易的信用问题。所以，它不受政策影响。
![4.png](https://steemitimages.com/DQmZWYMmpdJbxTU67nMoEnEBxiv6RjjPotrxc9NqjjcB3wY/4.png)
![5.png](https://steemitimages.com/DQmf7AyyeFxMBfx1S4o1eTHxEg4pu1fXMbkRUtrniBwMxzA/5.png)

上面两张图，是我在Bitshares上的几次操作，包括创建账户、交易、转账等。去中心化的交易所，你会明显发现，所有的这些操作记录都有对应的交易区块信息。

这也是为什么云币之后，其背后的团队急于开发Bigone，Bigone就是一个去中心化的交易所。Bittrex，Bitfinex等也都是中心化的交易所，只是并不受中国政策影响罢了。

### 3、Steem与Bitshares的异同

Bitshares又不能简单理解为去中心化的交易所，就像steem也不能简单理解为去中心化的内容分享平台（上文也介绍steem也是一个交易所）。

>**相同点1：交易速度快**

Steem与Bitshares都是Daniel Larimer（论坛和博客上叫Byte Master，简称BM）开发的项目，基于同样的石墨烯区块链技术，交易速度快（3秒就可以产生一个区块）。在之前的文章《steem交易转账操作》，曾试验过给另外一个账户转账，几乎是秒速，用户体验比比特币好一个档次。

>**相同点2：自然名称系统**

Steem的蓝皮书提到，许多区块链技术，比如比特币和以太坊，使用的钱包地址都是一长串的随机字母和数字。而用户无法凭记忆回想起这么长串的字符地址，使得这些钱包地址很难在典型的线上社交媒体中与别人互动。Steem区块链以每个参与者的用户名作为自己的钱包地址，提升了用户体验。

比特股跟steem一样都是以用户名作为自己的钱包地址。Steem和比特股创建的账户名会被写入区块链，也具有唯一性。我们申请账户时察觉不出来，实际是代理帮我们将账户名写入区块链上。

比如上图的比特股，我的账户是openledger注册的，代理帮我交了一笔注册费，比特股上写入信息到区块链上是有交易费用的（类比矿工费）。后续在我在平台交易的手续费，会有一部分给代理。

Steem也是一样的。我们申请的账户都是来自代理的注册，是需要费用的。所以，当我们注册不成功时，懂一些程序的，完全可以自己付一些代币，自己在区块链上注册账户。

>**相同点3：都是一个去中心化的交易所**

都是一个去中心化的交易所，只是steem只支持steemit系统里的货币交易，而比特股支持更多。

都有基于法币的锚定货币系统，steem里是SBD，比特股里有bitX（bitCNY与人民币锚定的代币，bitUSD与美元锚定的代币）

>**相同点4：支持账户间点对点转账**

比特股这个交易所，有些类似于去中心化的支付宝+云币网的结合体。首先它有交易所的功能，可以实现各种代币间的兑换，同时它也可以支持支付宝那样账户间的点对点自由转账。

Steem也支持账户间的自由转账，而且零费用，steem也具有去中心化的支付宝的功能。支付宝是一个账户可以实现人民币的点对点转账，steem的ID也是一个账户，也可以实现SBD或者steem的点对点转账。

这不同于区块链间的资产转账，比如我在云币网有比特币，我给另外一个云币账户转一点比特币，我需要知道对方的比特币地址，这实际上是区块链资产本身的转账。

而比特股只需要知道比特股的账户名，直接转移各种资产到同一个账户下，而不是每一种资产都去找钱包地址。

>**不同点**

Steem的重点是内容及社交平台，Bitshares的重点是交易平台。

### 4、结束语：

本文对BM的两个项目，从我自己的理解出发，主要对两者相同点进行了一些说明，可能存在不够全面和有失偏颇。

对比来看两个项目对我们有什么用呢，主要是让我们更好的理解它们的价值。包括尝试理解BM的第三个项目EOS未来的价值。

EOS的首次发布会上提到，Steem和Bitshares是实际交易中使用最多的区块链应用，最接地气的应用，区块链目前炒作概念的多，真正能够落地的有实用价值的其实并不多。

---

我主业是桥梁设计，经常不务正业写点文字，后来 @speeding邀请我写一些关于区块链的文章，那时正好偶遇steemit，所以，我就开始写一些关于steemit的文章，目前写了大概四五篇关于steemit的文章，特别是[《steemit注册详细教程》](http://mp.weixin.qq.com/s/lN5yBEbMJdu91hy-DeNU9g)，也算为steemit的CN区的推广做了一些事。

这篇文章也算其中之一，希望对大家有些许帮助。

- - -

This page is synchronized from the post: [Steem and Bitshares](https://steemit.com/@yellowbird/steem-and-bitshares)
