
---
title: '从对数函数来看STEEMIT的Reputation'
permlink: steemit-reputation
catalog: true
toc_nav_num: true
toc: true
date: 2018-12-17 01:27:24
categories:
- cn-stem
tags:
- cn-stem
- steemstem
- reputation
- steem
- cn
thumbnail: https://cdn.steemitimages.com/DQmP7bpVGV7rrs8rtAY55peL6jjwpf56cFhqi3Wxomtcfx3/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在STEEMIT上声望分(Reputation Score)是一个很重要也是一个很有意思的参数，虽然声望分并不能完全评价一个人在STEEMIT上的声望或者说影响力，但是大家包括好多机器人在内的STEEM用户，还是把声望分作为评价用户的标准之一。

![](https://cdn.steemitimages.com/DQmP7bpVGV7rrs8rtAY55peL6jjwpf56cFhqi3Wxomtcfx3/image.png)
(图源 ：[pixabay](https://pixabay.com/))

那么你知道声望分的增长规律吗？你是否好奇声望分的上限是多少，比如说是否会出现100分的用户？让我慢慢道来。

# 声望分是Reputation Number的直观表达

在STEEM中，并不直接存在声望分的概念的，而是存储一个***`Reputation Number`***。这个值和你文章/回复收获的***`net_rshares`***，简单来讲，你收获的点赞越多，点赞者的有效SP越高，点赞者的点赞百分比越大，点赞者的Voting Power越高，你的***`Reputation Number`***增长的越快。

相应的，如果有效SP高的用户大比例权重踩你的帖子，你的***`Reputation Number`***也会相应地减少。

***`Reputation Number`***的增加或者减少，可以看成是线性变化的，如果你用steemd.com查看你的***`Reputation Number`***，就会发现有人点赞或者差评时，变化明显。

我撰写本文时，当前的***`Reputation Number`***为：
>![](https://cdn.steemitimages.com/DQmSj79sRYrHfKeAHKAoLjmL3B6MUMzpkyk9K1UQCmzF64c/image.png)

而 @deanliu 的`Reputation Number`***为：
>![](https://cdn.steemitimages.com/DQmQfP5yG7aW5ZdzAtHJqKHbjJBSYoLDN2Qa9cAfc3MwMAs/image.png)

而***声望分(Reputation Score)***则是***`Reputation Number`***的直观表达，毕竟把上边的数字直接贴给大家，大家很难知道其所代表的意义，况且因为数字太长，很难比较出哪个更大，但是如果说我76，而他75，这样是不是就比较直观了？


# 声望分的计算方式

既然说***声望分是Reputation Number的直观表达***，那么如何由***`Reputation Number`***计算得出***声望分(Reputation Score)***呢？

答案可以参考以下这两段代码([来源](https://github.com/steemit/condenser/blob/master/src/app/utils/ParsersAndFormatters.js))：
>![](https://cdn.steemitimages.com/DQmTm2TEhwm1ooJvkvuhFvSiv6AkCZNJsCGoTZipMZrojE8/image.png)

因为不同语言有不同语言的语法，但是我们不难注意到代码的核心机制是对***`Reputation Number`***应用以10为底的对数函数***log<sub>10</sub>N***。

这样原本线性的***`Reputation Number`***就变成对数函数形式的***声望分(Reputation Score)***。

# 声望分的增长速度

通过上边的计算公式，我们不难做出如下图形，***声望分(Reputation Score)***与***`Reputation Number`***的对应关系。

![](https://cdn.steemitimages.com/DQmTgsH1dsTnMSwp7uP5GV9iwktYKi2PsKtAise6dVkwYN9/image.png)
图一： 声望分-20到70 / Reputation Score -20 to 70

![](https://cdn.steemitimages.com/DQmeHtkWTwwjxQ186z6zyAkPwFRofNtnuPLsM3Ld6fmA72B/image.png)
图二： 声望分25到60 / Reputation Score 25 to 60

从上边两幅图中，我们不难看出，声望分越高，增长所需要的***`Reputation Number`***越多，增长起来愈加缓慢，事实上也是如此，大家从25增长到40一般都很容易，而60分以后想升一级就太难了。

根据上边的计算公式，我计算得出的结论是：
>***声望分每升9级，需要10倍于之前的`Reputation Number`， 每升一级大约需要1.3倍于之前的`Reputation Number`***。

举例说，你当前声望分为60，那么升级到61分，你需要让你的`Reputation Number`增长30%。所以如果你从25升级到60用了1年，那么从60到61分大约需要4个月。😱


# 声望分的有顶吗？

以前我也好奇过这个问题，声望分有顶吗？换句话说就是***log<sub>10</sub>N有最大值吗？***

这个问题要从对数函数的定义说起，对数函数的定义为([对数函数](https://baike.baidu.com/item/%E5%AF%B9%E6%95%B0%E5%87%BD%E6%95%B0))：
>一般地，对数函数以幂（真数）为自变量，指数为因变量，底数为常量的函数。

原谅我初中没有好好学习，有点云里雾里的，但是如果换个角度，***对数函数是指数函数的反函数***，那么就好理解多了。

也就是说，对于***log<sub>10</sub>N***而言，相当于***10的x次幂等于N，我们知道N，求x***，那么x的取值范围（定义域）有限制吗？答案是没有，所以***log<sub>10</sub>N***的结果（值域）也就没有最大值的。

所以，***STEEMIT上的声望分(Reputation Score)也是没有顶的。*** 

但是，就好比每个人的财富值理论上而言是没有上限的，但是财富需要辛苦努力才能赚取得到一样，STEEMIT上据我所知，还没有声望分过85的用户呢。

快来看看前十名有没有你？
>![](https://cdn.steemitimages.com/DQmVhAQhoc2vseUDQDinSYY3MMkzEmtGabBB3at1wWEPpQ7/image.png)


# 相关链接

* [https://baike.baidu.com/item/对数函数/](https://baike.baidu.com/item/%E5%AF%B9%E6%95%B0%E5%87%BD%E6%95%B0)
* [https://baike.baidu.com/item/指数函数/](https://baike.baidu.com/item/%E6%8C%87%E6%95%B0%E5%87%BD%E6%95%B0)
* [关于声望分与Reputation数值对应关系的几幅图形](https://steemit.com/cn/@oflyhigh/reputation)

- - -

This page is synchronized from the post: [从对数函数来看STEEMIT的Reputation](https://steemit.com/@oflyhigh/steemit-reputation)
