
---
title: '[Chinese Version] 关于Voting Power 的一点说明，以及对投票的影响等'
permlink: chinese-version-voting-power
catalog: true
toc_nav_num: true
toc: true
date: 2017-06-21 15:36:27
categories:
- cn
tags:
- cn
- steemit
- steem
- vote
- curation
thumbnail: https://steemitimages.com/0x0/https://steemitimages.com/DQmbMPTDJwKQYDRqxDn5JXy22cnAAPBf5eA81XdKfokzgrT/Vote_with_check_for_v.svg.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


This a Chinese version article "Something about voting powering".

![Vote](https://steemitimages.com/0x0/https://steemitimages.com/DQmbMPTDJwKQYDRqxDn5JXy22cnAAPBf5eA81XdKfokzgrT/Vote_with_check_for_v.svg.png)

在我的前一篇文章中：

* [非正式翻译：硬叉19 “平等”即将到来，线性奖励 / Informal translation：HF19 "Equality" Coming Soon: Linear Rewards!](https://steemit.com/steemit/@oflyhigh/19-informal-translation-hf19-equality-coming-soon-linear-rewards)

有涉及点赞能量方面的话题。但是因为是翻译贴，为了保证忠于原文，我没有对其进行更多的解释。官方博客的游泳池被雨水不断填满的例子我个人觉得很拗口，当然也可能是我阅读或者翻译不当所致。

看到论坛上有些朋友对此还不甚了解，我写了这篇文章，来详细阐述这个问题。
本文基于自己的理解，如有谬误，烦请批评指正！

虽然Voting power叫投票权更文雅一些，但是我觉得就steemit而言，叫点赞能量，感觉更直观，你觉得呢？

# 如何查看 Voting Power

你可以通过以下链接查看自己的Voting Power:
https://steemd.com/@userid
请将userid换成你自己的steemit ID

另外， ID @chinadaily 每日发布 [近七日中文区活跃用户信息速览](https://steemit.com/cn-stats/@chinadaily/active-authors-information-under-the-cn-category-2017-06-21)
中文区7天内发过帖子的用户，可以在其中查看帖子发布时自己剩余的Voting power
另外还有信用（精确到小数点后两位）、金钱等排行榜信息可供查看




#  Voting Power 哪里来？

你可能很关心，我的Voting Power 哪里来的呢，又有多少呢？
* Voting Power 由系统自动生成
* 每天生成20%的Voting Power
* 到达100%后就不再增加

继续沿用官网游泳池的例子，但是我做了一些修改，让其更便于理解。
* 游泳池装满水，那么Voting Power 即100%。
* 有一个水泵不停的往泳池内注水，每天注入的量是泳池容量的20%。
* 泳池水满了，就会溢出，流到下水道里。

(有的解释为每日恢复，和我每日增加的例子实质一样的，我觉得我这么说更好理解）

# Voting Power 的消耗机制

* 点赞消耗Voting Power
* 满Voting Power（100%）的情况下满权重（100%)点赞，会消耗2%的Voting Power
* Voting Power不满，以及权重非100%，消耗的Voting Power会相应的减少
* 剩余Voting Power计算公式为：` vp = vp - vp*weight*2%`

继续举栗子：

* 点赞相当于从泳池中抽出一部分水
* 泳池满着的情况下，100%点赞一次，会抽除泳池水量 2%的水
* 泳池不满，点赞权重非100%，会抽除对应比例的剩余水量
* 剩余水量计算公式为： ` vp = vp - vp*weight*2%`

也就是说泳池满着，我们一次抽除2%的水
如果半池水，我们100%点赞，那么就会抽除半池水的2%，亦即满着情况的1%
如果半池水，我们50%点赞，那么就会抽除半池水2%的50%，以及满着情况的0.5%

（还是有点拗口，那看结论吧）

# 关于4倍投票威力

HF18以及之前，每次100%点赞消耗掉剩余Voting Power的0.5%
而HF19，将0.5%修改为2%，消耗增加了4倍，所以点赞威力也增加了4倍

你可以理解成现在一票顶4票，是不是很爽？
（威力大了，消耗也变多了）
你是想爽，还是想省着用，见仁见智吧。

# 结论

其实就是一个水池，一个泵往里装水（Voting Power生成），一个泵抽水（投票消耗能量）
结论来了：

* 要保持生成和消耗平衡，每天适合100%权重投10票
* 你可以降低权重来给更多人投票，比如都是25%，那么你一天就可以投40票
* 投10票还是投40票，甚至投100票，并不会给你带来超额的点赞收益（多种因素）
* 你也可以超额投更多的高权重票，比如100%投100票，这样你的Voting power会下降的更多，需要更长时间充满（恢复）

有没有明白一点呢？
希望对你有所帮助。

----
感谢阅读
欢迎upvote、resteem以及 following me @oflyhigh 😎

- - -

This page is synchronized from the post: [[Chinese Version] 关于Voting Power 的一点说明，以及对投票的影响等](https://steemit.com/@oflyhigh/chinese-version-voting-power)
