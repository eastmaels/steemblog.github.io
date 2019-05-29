
---
title: "我们身边的STEM 04：干湿球温度计及露点温度中马格努斯公式的应用"
permlink: stem-04-scwujisr
catalog: true
toc_nav_num: true
toc: true
date: 2018-12-25 03:16:03
categories:
- cn-stem
tags:
- cn-stem
- steemstem
- cn
- cnstm
- cn-reader
- partiko
thumbnail: https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmZmHtLtKPkNxk34QS78CbYAbSUfizCY7Xnwn8xd8rFEiE
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


昨天说了露点温度，在文末简单的说了一下露点温度的计算函数。可能有心人会很关心到底是怎么来的，那么今天就好好说说它。

先看看这张美轮美奂的图养养眼，最后我们会理解这张图：

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmZmHtLtKPkNxk34QS78CbYAbSUfizCY7Xnwn8xd8rFEiE)

**相对湿度和空气里面的水蒸气有关，而水蒸气的多少又跟空气温度有关。所以，测量温度就可以算出相对湿度。**

经典的测量湿度的方法就是使用两支水银温度计，一支温度计的底部包着纱布，纱布用蒸馏水浸润，测到的温度是**湿球温度Tw**；另一支温度计，直接测量空气温度，测到的温度叫做**干球温度T**。

这样的温度计叫做干湿温度计。

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmbMfJZ5Y5RY96hP4mDvRmmi4N5em9rkGgz6mv8wS1meuJ)

图源：[image09.71.net](http://image09.71.net/image09/94/54/42/36/ce42f6c6-a192-4e71-b5ea-58f48c4dc2a1.jpg)

使用干湿法测量湿度时，根据公式

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmQfizyEfgs5mo5SwZtJ14iL2sL1VANMHnHrkh5MFf5fcs)

其中:
A叫做干湿表系数，可近似等于6.2×10的-4次方;
P可由实际气压仪测得;

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmZwSystuEoE89QQB69fQQfm2c77ynWELgnfiUr4CsCxGX)

是在tw温度下的饱和水蒸气压，可以从以下表格中查得：

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/Qmd8JmbotxKN4V98R98bvMQjFSxNXyBU81GByJFyqGErFp)

之前说过，嵌入式系统设计在ROM不够的情况下，没有办法存储这么大的一个表格，只能用程序利用公式来计算。

饱和水蒸气压计算有2种公式，Goff-Gratch方程式和Magnus 方程式，Goff-Gratch比较复杂，在[我们身边的STEM 02：空气温湿度之水的饱和蒸汽压及其计算函数](https://busy.org/@julian2013/stem-02-wlzhfayj)有说过，而Magnus 公式相对简单，也是中国大陆国家气象局推荐的水的饱和蒸汽压公式。

**Magnus 公式：**

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmSM9hTxHmrMbhUqPwuxr1uTqZj9FwZuo6dvFpSS7dv6Ar)

其中，α=6.1129hpa，是0℃时的饱和水蒸气压；
T是温度，单位是℃；
对水平面来说，β=17.62 ， λ=243.12。

因为露点温度就是相对湿度在100%时的温度，也就是处于饱和水蒸气压的温度，所以露点温度Dp可以由Magnus 公式反算出来：

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmUW4AbMMeqtJsNrqCSJLDSkqVXGYVKrXi5TUuKXeT2e9t)

（Dp在-45°C至60°C范围内适用）

根据相对湿度RH(in%)的定义，即E=RH*EW/100，带入上面的2个方程式，可以导出从温度T和相对湿度RH计算露点Dp：

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmUVPo2MntJwsaD14eHa7fUoamx11uedKjCVkkiEiuq9Hv)

利用上面的公式，我们随便算2点：
RH=10%, T=25°C时， Dew point = -8.77°C
RH=90%, T=50°C时，Dew point = 47.90°C

当然，从数学角度来说，这只是近似计算，但是在日常使用中，这个精度已经足够了。

从下图我们可以看到这个公式带来的偏差：

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmZmHtLtKPkNxk34QS78CbYAbSUfizCY7Xnwn8xd8rFEiE)

可以看出，在温度大于-20 °C时，露点温度计算误差基本小于0.15 °C，在大部分场合可以使用这种算法。

---

**参考资料：**
_[Sonntag90] Sonntag D.: Important New Values of the Physical Constants of 1986, Vapour Pressure Formulations based on the IST-90 and Psychrometer Formulae; Z. Meteorol., 70 (5), pp. 340-344, 1990._

_[Hardy98] Hardy B., Thunder Scientific Corporation, Albuquerque, NM, USA The proceedings of the Third international Symposium on Humidity & Moisture, Teddington, London, England, April 1998._

---

**我们身边的STEM系列：**
[我们身边的STEM 01：单片机及其堆栈设计小窍门](https://steemit.com/@julian2013/stem-01-sriqgucl)

[我们身边的STEM 02：空气温湿度之水的饱和蒸汽压及其计算函数](https://steemit.com/cn-stem/@julian2013/stem-02-wlzhfayj)

[我们身边的STEM 03：空气温湿度之露点温度及其计算函数](https://steemd.com/cn-stem/@julian2013/stem-03-abxawrm8)

---

希望喜欢我文字的人，去看看这个吧，说说对我的看法，请我吃星星

![](https://steemitimages.com/0x0/http://bit.ly/5credstars)

，谢谢啦~
[我的 @ReviewMe 凭证留言板!](https://steemit.com/cn/@julian2013/reviewme-yoursteemitname)

Posted using [Partiko iOS](https://steemit.com/@partiko-ios)

- - -

This page is synchronized from the post: [我们身边的STEM 04：干湿球温度计及露点温度中马格努斯公式的应用](https://steemit.com/@julian2013/stem-04-scwujisr)
