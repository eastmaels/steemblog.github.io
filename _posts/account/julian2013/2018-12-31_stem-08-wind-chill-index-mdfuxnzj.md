
---
title: "我们身边的STEM 08: 风寒指数Wind Chill Index的意义及编程实现与验证"
permlink: stem-08-wind-chill-index-mdfuxnzj
catalog: true
toc_nav_num: true
toc: true
date: 2018-12-31 00:53:51
categories:
- cn-stem
tags:
- cn-stem
- steemstem
- engineering
- technology
- cn
- partiko
thumbnail: https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmUCgdtCYWGkVoaKrLbLU5tSwU1jPrrZ7deJjzLXXKpmra
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


## 概述：

在文章[我们身边的STEM 07：热指数heat index意义及编程实现——别人的肩膀（3）](https://busy.org/@julian2013/stem-07heat-index3-1gpg5llu)我们介绍了热指数的意义，研究的是在温度较高的环境下人体的感觉及需要在不同热指数等级下所应该注意的危险。

那么，寒来暑往，夏冬更替，有高温对人体的影响，同样就有低温对于人体的影响。

**人体实际感受到的温度是皮肤表面的温度。**在寒冷、有风的气候条件下, 由人体内部传递到皮肤表面的热量会被风迅速吹走, 因此, 皮肤感觉到的温度要比无风的时候更低。

风寒指数WCI（ Wind Chill Index, 也称风冷却指数）是Siple和Passel在1945年提出的。他们之前在南极地区工作，在工作过程中对于温度和风速对于人体的影响产生了兴趣，做了很多相关的研究后提出的。

在不同的风寒指数下，我们需要注意防护等级：

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmUCgdtCYWGkVoaKrLbLU5tSwU1jPrrZ7deJjzLXXKpmra)

图源：[wikimedia.org](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Windchill_effect_en.svg/430px-Windchill_effect_en.svg.png)

- Very cold：非常冷
- Danger of frostbite：冻伤危险
- Great danger of frostbite：极度冻伤危险

---

## 定义：

风寒指数被定义为皮肤温度为33℃时皮肤表面的冷却速率。风寒指数及其后所衍生出的风寒等效温度得到了广泛应用, 但同时也遭到了一些批判, 如对暴露部位的皮肤温度考虑欠妥、没有考虑最长暴露时间及面部散热过程的复杂性等。最初的WCI计算公式如下：

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmcwLdmwuzf524K2MCNUmPbAJ2QwLccfi4ppyK7YuNeg4e)

- WCI = wind chill index, kcal/m2/h
- v = wind velocity, m/s
- Ta = air temperature, °C

---

后来，经过一系列的改善，在2001年11月，加拿大、美国和英国实施了一项新的风寒指数，该指数由科学家和医学专家根据联合行动小组的温度指数（JAG/TI）制定。计算公式如下：

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmXqnEbGi17tJVXJv8cupKo8uKvohYhrhaEv1PNeS7WCcC)

- Twc is the wind chill index, based on the °F;
- Ta is the air temperature in °F；
- v is the wind speed in miles per hour。

---

## 编程实现及交叉验证：

**根据维基百科举的例子：空气温度在 −20 °C（-4°F），风速在30 km/h (19 mph)时，风寒指数the wind chill index 是 −33°C.**

根据这个公式，我们写一个计算程序：

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmVadm1TZ6RwctPk91BdnkHwujW5fL7Xj3ubZRpPWgvoae)

可以看到，计算结果是-26.74836°F，转换成°C刚好就是−33°C.

实际上，这么简单的算式，也可以不编程，而直接使用excel来计算：

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmfQmzUbwNWrfNT1qzjmhvkwrRvNNdr4HpMcScFjLCUAsN)

可以看到，excel计算结果和程序结果相同。

最初的公式和2001年11月的公式计算出来的WCI误差如下图所示：

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmYF2P7VVRRRweAg2CBqxjtkZZRKrSSxkmvoCaM6P7qAqf)

图源：[wikimedia.org](https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/WindChill_Comparison.GIF/351px-WindChill_Comparison.GIF)
可以看出，经过几十年的不断修正，最新版公式考虑了更多的影响因素，计算值在大部分区间，比原始的公式要高一些。

网上找到现成的WCI的计算器，网址：
[https://www.easycalculation.com/weather/wind-chill.php](https://www.easycalculation.com/weather/wind-chill.php)

界面是这样的：

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmbwRZUco2q4BAyzFZjy421CX43tqCrmiqMCsCnTd13bzs)

图源：[网页截图](https://www.easycalculation.com/weather/wind-chill.php)

同样可以看到，空气温度在 −20 °C，风速在30 km/h时，风寒指数the wind chill index 是 −33°C。

看看这个计算器是怎样计算的，右键查看源码，从第379行开始，是主程序，包含了一些单位转换。

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmYW6Ddt231qb1VyhEjQV2haLNWbiFJPgpz1zz4TzvDJb1)

图源：[网页源代码截图](https://www.easycalculation.com/weather/wind-chill.php)

可以看到，使用的公式是一样的。

根据这个公式，计算出不同温度，风速下的风寒指数，然后人们根据不同的风寒指数，就需要做不同的防护等级，以免冻伤，这就是我们在开头看到的图表：

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmUCgdtCYWGkVoaKrLbLU5tSwU1jPrrZ7deJjzLXXKpmra)

图源：[wikimedia.org](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Windchill_effect_en.svg/430px-Windchill_effect_en.svg.png)

**科技改变生活，科技让生活更美好。**

_参考：[维基百科：Wind_chill](https://en.wikipedia.org/wiki/Wind_chill)_
*[WCI计算器](https://www.easycalculation.com/weather/wind-chill.php)*

---

**我们身边的STEM系列：**

[我们身边的STEM 01：单片机及其堆栈设计小窍门](https://steemit.com/@julian2013/stem-01-sriqgucl)

[我们身边的STEM 02：空气温湿度之水的饱和蒸汽压及其计算函数](https://steemit.com/cn-stem/@julian2013/stem-02-wlzhfayj)

[我们身边的STEM 03：空气温湿度之露点温度及其计算函数](https://steemd.com/cn-stem/@julian2013/stem-03-abxawrm8)

[我们身边的STEM 04：干湿球温度计及露点温度中马格努斯公式的应用](https://steemit.com/cn-stem/@julian2013/stem-04-scwujisr)

[我们身边的STEM 05：露点温度计算的一种偷懒的方法——站在别人的肩膀上](https://steemit.com/@julian2013/stem-05-jjt8e1ad)

[我们身边的STEM 06：湿球温度的意义及计算函数的推导与验证——别人的肩膀（续）](https://steemit.com/cn-stem/@julian2013/stem-06-mlswcxpu)

[我们身边的STEM 07：热指数heat index意义及编程实现——别人的肩膀（3）](https://steemit.com/cn-stem/@julian2013/stem-07heat-index3-1gpg5llu)

---

希望喜欢我文字的人，去看看这个吧，说说对我的看法，请我吃星星

![](https://steemitimages.com/0x0/http://bit.ly/5credstars)

，谢谢啦~
[我的 @ReviewMe 凭证留言板!](https://steemit.com/cn/@julian2013/reviewme-yoursteemitname)

Posted using [Partiko iOS](https://steemit.com/@partiko-ios)

- - -

This page is synchronized from the post: [我们身边的STEM 08: 风寒指数Wind Chill Index的意义及编程实现与验证](https://steemit.com/@julian2013/stem-08-wind-chill-index-mdfuxnzj)
