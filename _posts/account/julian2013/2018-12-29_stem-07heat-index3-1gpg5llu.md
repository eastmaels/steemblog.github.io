
---
title: "我们身边的STEM 07：热指数heat index意义及编程实现——别人的肩膀（3）"
permlink: stem-07heat-index3-1gpg5llu
catalog: true
toc_nav_num: true
toc: true
date: 2018-12-29 00:56:33
categories:
- cn-stem
tags:
- cn-stem
- steemstem
- engineering
- technology
- cn
- partiko
thumbnail: https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmeF4e9cEcqEMqqpkWYTvEneaAyf6X14go9RfPhSNfYR71
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


最近就空气温湿度发了几个帖子，有人说，讲这些干嘛？作为普通人的我只需要知道明天多少度，是不是下雨就可以了。

表面上看似乎是这样的，但是你仔细想一下，是不是有时候会碰到实际上温度不高，但是人觉得特别闷热，酷热难耐的时候呢？这个时候，空气温度似乎就失去了人体对热的反应意义了。

这种时候，就需要了解热指数heat index了。热指数的计算函数如图所示：

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmeF4e9cEcqEMqqpkWYTvEneaAyf6X14go9RfPhSNfYR71)

后面会讲到这个函数怎么用最少的力气来得到。

**热指数是指高温时，当相对湿度增加后，人体真正感受到的温度会超过实际温度，也就是体感温度（Apparent temperature）。**

美国国家气象局（NWS）使用的热指数基于许多假设，如体重、身高、衣服、个人体力活动、血液厚度和风速。以上这些因素与个人实际情况的显著相关，而每一个人的情况都不一样，因此热指数温度并不能很准确地反映感知的温度，但是和普通的温度计测出的空气温度相比，还是有实际指导意义的。

1978年乔治·温特林（George Winterling）发展了用于估算热指数的NWS方程，该方程适用于80°F以上的温度和40%以上的相对湿度。NWS方程式是这样的，计算精度在±1.3°F（0.7°C）以内：

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmUUwUMGycV3pixU4prcq979ZeoXfuCaqvofFG767AiPic)

HI = 热指数heat index (in degrees Fahrenheit)
T = 实际干球温度 (in degrees Fahrenheit)
R = 相对湿度 (%)

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmZkJCRdr1gJhAqzVZwx5aMj2d3FRHfFgYcfyMvaCbgixT)

这个公式看起来很长，其实编程实现起来非常简单。但是，如果一个码农懒得打字输入程序，那么有什么好办法呢？

**哈哈，你应该已经猜到了，还是找网上的网页计算器，然后查看源代码，这样可以最大程度地偷懒。今天的网页是：**
[https://www.easycalculation.com/weather/Heat-index.php](https://www.easycalculation.com/weather/Heat-index.php)
计算器界面是这样的：

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmZ7o37GbfGEz7qqcNwRvnNsZNZWFiiTsMKrU61uGQkVGh)

老规矩，右键查看源代码：

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmU5yh5NkRAdJGMBtxPYmUuFosixUEc4TBLmGt2MRZ27nH)

干货出现在第391行：

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmRFtoSEnCXbs7LpPJ6zBh4WtnrZy9ZW69mdYEwvL1p3j4)

把它变成MCU可以执行的程序，就是这样的：

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmeF4e9cEcqEMqqpkWYTvEneaAyf6X14go9RfPhSNfYR71)

**实际运行一下，T=80°F，RH=65%,时， HI的计算值：**

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmPtxbE8ZX8jzb14rvqBfioxVtyXv38mSV3qjEsd9HJ1ik)

**运算结果是82.37°F。**

下面是热指数NWS方程式方程结果的图表（结果四舍五入）。

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmddHpvzbEeRjvirU5r8GE6JSGyJDd7Vvftu6EUTWuyBcw)

图源：[www.calculator.net](https://www.calculator.net/img/heat-index.png)

运算结果通过查表，可以得出结果一致。

所以，各位今后如果感到气温不适，或是出差要到某地去，可以先看看当时当地的温湿度，然后算一算热指数heat index，再根据上面这个表格，针对不同的颜色，就可以做相应的准备工作了。

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/Qmd7GkpxzSGfKzjARF3hXpjq5ZtYxrC8jswZdBKPMda51B)

**科技改变生活，科技让生活更美好。**

_参考：[维基百科：Heat_index](https://en.wikipedia.org/wiki/Heat_index)_
_[Heat Index Calculator](https://www.calculator.net/heat-index-calculator.html)_

---

**我们身边的STEM系列：**

[我们身边的STEM 01：单片机及其堆栈设计小窍门](https://steemit.com/@julian2013/stem-01-sriqgucl)

[我们身边的STEM 02：空气温湿度之水的饱和蒸汽压及其计算函数](https://steemit.com/cn-stem/@julian2013/stem-02-wlzhfayj)

[我们身边的STEM 03：空气温湿度之露点温度及其计算函数](https://steemd.com/cn-stem/@julian2013/stem-03-abxawrm8)

[我们身边的STEM 04：干湿球温度计及露点温度中马格努斯公式的应用](https://steemit.com/cn-stem/@julian2013/stem-04-scwujisr)

[我们身边的STEM 05：露点温度计算的一种偷懒的方法——站在别人的肩膀上](https://steemit.com/@julian2013/stem-05-jjt8e1ad)

[我们身边的STEM 06：湿球温度的意义及计算函数的推导与验证——别人的肩膀（续）](https://steemit.com/cn-stem/@julian2013/stem-06-mlswcxpu)

---

希望喜欢我文字的人，去看看这个吧，说说对我的看法，请我吃星星

![](https://steemitimages.com/0x0/http://bit.ly/5credstars)

，谢谢啦~
[我的 @ReviewMe 凭证留言板!](https://steemit.com/cn/@julian2013/reviewme-yoursteemitname)

Posted using [Partiko iOS](https://steemit.com/@partiko-ios)

- - -

This page is synchronized from the post: [我们身边的STEM 07：热指数heat index意义及编程实现——别人的肩膀（3）](https://steemit.com/@julian2013/stem-07heat-index3-1gpg5llu)
