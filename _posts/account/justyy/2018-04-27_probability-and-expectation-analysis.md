
---
title: 'Probability and Expectation Analysis 屌丝与美女的硬币游戏（概率和期望值）'
permlink: probability-and-expectation-analysis
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-04-27 14:54:48
categories:
- math
tags:
- math
- steemstem
- busy
- cn-programming
- probability
thumbnail: https://steemitimages.com/DQmQizzgLyc4CaAyZJppJgXR2PmT692ApYx42mLkU7c747A/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


A man is drinking a beer in a pub, he feels boring. A lady comes to him, takes out two coins and says: "Let's play a game. Let's throw a coin each. And if both are heads, you win $3, if both are tails, you win $1. Otherwise I win $2"

So, put this in a table:

| Lady\Men | Head | Tail|
--- | --- | ---
| Head | 3 | -2 |
| Tail | -2 | 1 |

The positive numbers mean a gain for the man and the negative numbers mean a gain for the lady. The man aims to maximum the numbers while the lady is minimizing the numbers.

At a glance, each is 25\% probability so it should be quite fair for each player.  For example:

1. Both heads 1/4
2. Both tails 1/4
3. Head + Tail 1/4
4. Tail + Head 1/4

## Expectation
The expectation is the [probability](https://helloacm.com/what-is-the-probability-of-two-sharing-birthday/) of winning times the gain. Let's assume for the man, the probability of heads is `x` and the probability of tails is thus `1-x`. Similarly, let's assume for the lady, the probability of heads is `y` and the corresponding `tails` is `1-y`.

Thus the expectation for the man winning is 

> 3xy + (1-x)(1-y) - 2[(1-x)y + x(1-y)]

The man want's to maximum the above equation. Let's rearrange the equation to:

> 3xy + 1 + xy - x - y - 2(y - xy + x - xy)
> 3xy + 1 + xy - x - y - 2y + 2xy - 2x + 2xy
> 8xy - 3x - 3y + 1
> y(8x - 3) - 3x + 1

So, this should be positive for the man, thus `y(8x-3)-3x+1>0` and we should get:

> (8x-3)y > 3x-1

So, if `8x-3>0` which is `x>0.375`, `y>(3x-1)/(8x-3)` (for man wining). And on the other hand,
when `x<0.375` `y<(3x-1)/(8x-3)` (for man winning).

If `x = 3/8`  which means if the probability of the man's throwing heads is 0.375, the expectation is `-1/8`. In the long term, the main is losing.

Let's say that the lady knows `x`, then, she will adjust the `y` so that above [expectation](https://helloacm.com/probability-and-expectation-analysis/) for the man is smaller than zero, which is indidated in below graph.

![](https://steemitimages.com/DQmQizzgLyc4CaAyZJppJgXR2PmT692ApYx42mLkU7c747A/image.png)

Similarly, the expectation for the lady can be computed and analysed in the same way.

In the next article, we will simulate this in computer program to see if the winning strategy works.

Support me and my work as a [witness](https://steemit.com/witness-category/@justyy/justyy-just-another-witness) by
1. voting me [here, or](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy)
2. voting me as a [proxy](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1)

Some of my contributions: **[SteemIt Tools, Bots, APIs and Tutorial](https://helloacm.com/tools/steemit/)**

-------------------------------------------------------------------

一屌丝在[酒巴](https://justyy.com/archives/4920)里喝酒，一美女过来说：来，我们玩一游戏，我们各抛一硬币，如果两面都是正面，我给你3块钱，如果两面都是反面，我给你一块钱，否则你给我2块钱。

屌丝一看，好像概率都差不多，那就和美女玩吧。

| 美女\屌丝 | 正面|  反面|
--- | --- | ---
| 正面| 3 | -2 |
| 反面| -2 | 1 |

对于屌丝来说，正数代表赢钱了，负数代表输钱了。屌丝的目标是让数字变得越大（收益越多），而相反，美女是想让数字变得越小。

初步看来，每一种可能都是 25%的概率：

1. 都是正 1/4
2. 都是反 1/4
3. 1正1反 1/4
4. 1反1正 1/4

## 期望值
期望值 = 赢钱的概率 * 赢钱的数量。假设屌丝抛正面的[概率](https://justyy.com/archives/5381)为 x , 那么反面的概率就是 1 - x, 同样的，假设美女抛出正面的概率为 y ,  那么反面的概率就是 1 - y。

对于屌丝来说，期望值就是：

> 3xy + (1-x)(1-y) - 2[(1-x)y + x(1-y)]

屌丝希望上面的期望值越大越好，我们整理一下：

> 3xy + 1 + xy - x - y - 2(y - xy + x - xy)
> 3xy + 1 + xy - x - y - 2y + 2xy - 2x + 2xy
> 8xy - 3x - 3y + 1
> y(8x - 3) - 3x + 1

如果期望值为正，则 `y(8x-3)-3x+1>0` 我们调整一下得到：

> (8x-3)y > 3x-1

所以 如果 `8x-3>0` 即 `x>0.375` 那么屌丝要赢钱，则`y>(3x-1)/(8x-3)`另一方面：
当 `x<0.375` 则`y<(3x-1)/(8x-3)` 那么屌丝就能赢钱。

如果屌丝出正面的概率确定为 `x = 3/8` 也就是 37.5% ，那么长远来看是要输的，因为期望值是 -1/8。

如果美女有点心计，知道屌丝的 `x` 那么她就可以调整 `y` 让上面的期望值为负值。

也就是以下曲线的箭头指向的部分。
![](https://steemitimages.com/DQmQizzgLyc4CaAyZJppJgXR2PmT692ApYx42mLkU7c747A/image.png)

当然，对于屌丝来说，也可以通过类似的方法计算出美女的[期望值](https://justyy.com/archives/6275)进而调整 `x`

在之后的文章中，我们会写点小程序来验证一下这个赢钱的策略，看看是否正确。

## 支持我的工作 支持我成为 [见证人](https://steemit.com/cn/@justyy/5h6gyv-cn) 
1. [请在 这里 投我一票](https://steemconnect.com/sign/account_witness_vote?approve=1&witness=justyy), 或者
2. 设置我 [为代理](https://v2.steemconnect.com/sign/account-witness-proxy?proxy=justyy&approve=1).

我的一些贡献: **[SteemIt 工具、API接口、机器人和教程](https://helloacm.com/tools/steemit-tools/)**

- - -

This page is synchronized from the post: [Probability and Expectation Analysis 屌丝与美女的硬币游戏（概率和期望值）](https://steemit.com/@justyy/probability-and-expectation-analysis)
