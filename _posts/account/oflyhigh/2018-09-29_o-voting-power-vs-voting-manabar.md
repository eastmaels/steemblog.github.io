
---
title: 'O哥闲扯淡："Voting Power" vs "Voting Manabar"'
permlink: o-voting-power-vs-voting-manabar
catalog: true
toc_nav_num: true
toc: true
date: 2018-09-29 01:12:48
categories:
- manabar
tags:
- manabar
- mana
- power
- steem
- cn
thumbnail: https://cdn.steemitimages.com/DQmNoQDTL6A7QRsF3NTK1tsdtRQN9iJRNsVqSoP4JFEw1Tj/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


很多朋友发现，原本[steemd.com](https://steemd.com)上的**`Voting Power `**不见了，取而代之的是一个叫做**`Voting Manabar`**的东西，这又是什么鬼？和**`Voting Power `**是啥关系？

![](https://cdn.steemitimages.com/DQmNoQDTL6A7QRsF3NTK1tsdtRQN9iJRNsVqSoP4JFEw1Tj/image.png)
(图源 ：[pixabay](https://pixabay.com/))

#  Voting Manabar  & Voting Power 

首先我们来看一下**`Voting Manabar`**长啥样？以我的账户 @oflyhigh 当前状态为例，从[steemd.com](https://steemd.com)看到的**`Voting Manabar`**信息如下：

![](https://cdn.steemitimages.com/DQmdX8Jq7oS2yuJWdjC7aY2RauvK2e1ycK8rRnE2Ze2hs83/image.png)

再用我的微信公众号查询一下，庆幸的是，尽管我未作任何修改，**`Voting Power `**，还是可以读出来的
![](https://cdn.steemitimages.com/DQmU3WVNXKW9UJ4Uc8n1Uqt6hqrRD9vouyERugt4aXiTPPg/image.png)

对比一下**`Voting Manabar`**的**`current_mana_pct`**以及公众号显示**`Voting Power `**，都是49.85%，由此可见，其实两者是一个东西！

# 原本设计

那么**`Voting Manabar`**和**`Voting Power `**到底有啥区别呢？为何又要引进这样一个东西呢？这要从SP代理以及Power UP说起。

举例来讲，在原本的设计中，如果我当前SP为1W，VP为1%，我Power UP了100W SP，结果发现我SP为101W， VP还是1%😨，有没有感觉少赚了几十亿？？

还有一种方式，可以利用VP设计的漏洞多赚钱，假设我又个100WSP的账户，VP 100%，然后我猛点赞，将VP降至接近0，然后再将这100W SP代理给另外一个VP100%的账户，然后继续猛点，将VP消耗至0，再取消代理。发生了什么事？这样操作我可以多赚40%以上的收益！！有没有感觉多赚了几个亿？

# Voting Manabar

新的 **`Voting Manabar`**设计，解决了上述弊端，简单来讲，**`mana `**就是你未花出去的`rshares`，这样无论Power UP还是SP代理，都可以精确计算实际产生的**`mana `**而不是粗暴的用VP这个百分百去计算。

简单地说，你POWER UP的时候不吃亏，你用SP代理耍滑头也占不到便宜，这样才公正公平。至于其它的线性回复以及消耗之类的，与原本的VP系统并无太大的差异。

----

好了，大致就这样了，今天就先啰嗦到这，如果说得不对，朋友们多多指正！

- - -

This page is synchronized from the post: [O哥闲扯淡："Voting Power" vs "Voting Manabar"](https://steemit.com/@oflyhigh/o-voting-power-vs-voting-manabar)
