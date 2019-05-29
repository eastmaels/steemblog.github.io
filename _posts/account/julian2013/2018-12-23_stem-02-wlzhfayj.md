
---
title: "我们身边的STEM 02：空气温湿度之水的饱和蒸汽压及其计算函数"
permlink: stem-02-wlzhfayj
catalog: true
toc_nav_num: true
toc: true
date: 2018-12-23 01:25:06
categories:
- cn-stem
tags:
- cn-stem
- steemstem
- cn
- cnstm
- cn-reader
- partiko
thumbnail: https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmTrEJaTCwjW51cpeHisGiXmiEB8ndq3Auc6FqjDYDwYUi
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


我们生活的这颗蓝色的星球上，整个表面积中陆地占29%，海洋占71%。

水是自然界中唯一一种三态同时并存的物质。这三态就是固态，液态，气态。

**其中，气态的水，就分布在我们周围的空气中，看不见，摸得着。**

空气是多种气体的混合物.它的恒定组成部分为氧、等稀有气体,可变组成部分为二氧化碳和水蒸气。就是这么一点点水蒸气，对于人们生活产生了极大的影响。

为了方便衡量空气中水蒸气的多少，人们定义了空气湿度这个概念。而空气湿度又分为相对湿度和绝对湿度。

- 绝对湿度（absolute humidity），就是空气中的水汽密度，指单位容积空气中含有水蒸气的质量，以g／m3为单位。
- 相对湿度（ relative humidity）用RH表示。是指在一定温度时，空气中的实际水蒸气含量与饱和值水蒸气含量之比，用百分比表示单位。也可以说是空气中的绝对湿度与同温度和气压下的饱和绝对湿度的比值。

---

**在日常生活中，相对湿度的使用最为频繁。因为人体感觉不但和空气中的水蒸气含量有关，还和温度有关。**

随着温度的升高，空气中可以含的水蒸气就越多。也就是说，在同样多的水蒸气的情况下温度升高相对湿度就会降低。因此在提供相对湿度的同时也必须提供温度的数据。

一般来说，相对湿度为50％～60％时人体感觉最为舒适，也不容易引起疾病。空气湿度过大或过小，都对人体健康不利。

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmTrEJaTCwjW51cpeHisGiXmiEB8ndq3Auc6FqjDYDwYUi)

以上面相对湿度和绝对湿度的对应表格中，在气温30℃，相对湿度35%时，绝对湿度是10.61g／m3；而在几乎差不多的绝对湿度时（甚至绝对湿度还要小一些），9.39g／m3的绝对湿度在气温10℃的时候，相对湿度是100%。

就人体感觉而言，绝对湿度几乎一样的情况下，相对湿度一个是35%，一个是100%。前者人们会觉得有些干燥，但并没有很大的不适，但后者相对湿度100%时，人们感觉就很闷了，几乎难以呼吸。

介绍到这里，我们今天的主角——饱和蒸汽压——就要隆重登场了。

在空气热力学研究中，水的饱和蒸汽压是一个很重要的参数。

当液体在有限的密闭空间中蒸发时，液体分子通过液面进入上面空间，成为蒸汽分子。当单位时间内进入空间的分子数目与返回液体中的分子数目相等时，则蒸发与凝结处于动平衡状态，这时虽然蒸发和凝结仍在进行，但空间中蒸汽分子的密度不再增大，此时的状态称为饱和状态。在饱和状态下的液体称为饱和液体，其对应的蒸汽是饱和蒸汽。

**饱和水蒸气压力**，指密闭条件下水的气相与液相达到平衡即饱和状态下的水蒸气压力。饱和水蒸气压力数值与饱和温度相关，当温度上升时，对应的饱和水蒸气压力随之上升。

相对湿度100%的时候，就意味空气中的水汽已经饱和，如果温度不变的情况下，人体很难再向空气蒸发水分，因此会感觉很不舒服。

既然**饱和水蒸气压力**这么重要，那么它怎样才能得到呢？

它没有办法直接测量得出，一般，可以查表取得：

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/Qmd8JmbotxKN4V98R98bvMQjFSxNXyBU81GByJFyqGErFp)

但是，对于一些设计中，没有这么大的容量ROM来存储表格的时候，我们就要用Goff-Gratch方程式，来计算在给定温度的情况下水的饱和蒸汽压了（基于纯水平面）：

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmRXkbnimXu1gW4sbSfdBmw6Qp6L2xVkaZ3fBXhNwMdw5n)

公式中，T1是273.16K（水的三相点温度），T是绝对温度，273.15+t℃。

将这个公式进一步推导简化，最后就可以直接得出占用ROM空间小，计算精度足够日常生活使用的水的饱和蒸汽压计算函数了：
float satPrCalcu(float temp)
//temp in degC, Pr in KPa
{

float tmpSatPr;

tmpSatPr = 6.1121_exp(17.62_temp/(243.12+temp)); //KPa
return(tmpSatPr);
}

这个函数在我们今后的STEM系列的温湿度介绍文章中非常重要，会经常出现。

_注：书中表格及公式，来源于《工程热力学基础》一书。_

---

**我们身边的STEM系列：**
[我们身边的STEM 01：单片机及其堆栈设计小窍门](https://steemit.com/@julian2013/stem-01-sriqgucl)

---

希望喜欢我文字的人，去看看这个吧，说说对我的看法，请我吃星星

![](https://steemitimages.com/0x0/http://bit.ly/5credstars)

，谢谢啦~
[我的 @ReviewMe 凭证留言板!](https://steemit.com/cn/@julian2013/reviewme-yoursteemitname)

Posted using [Partiko iOS](https://steemit.com/@partiko-ios)

- - -

This page is synchronized from the post: [我们身边的STEM 02：空气温湿度之水的饱和蒸汽压及其计算函数](https://steemit.com/@julian2013/stem-02-wlzhfayj)
