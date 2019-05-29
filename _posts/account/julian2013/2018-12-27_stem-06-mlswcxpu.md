
---
title: "我们身边的STEM 06：湿球温度的意义及计算函数的推导与验证——别人的肩膀（续）"
permlink: stem-06-mlswcxpu
catalog: true
toc_nav_num: true
toc: true
date: 2018-12-27 04:32:18
categories:
- cn-stem
tags:
- cn-stem
- steemstem
- engineering
- technology
- cn
- partiko
thumbnail: https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmZ8fVFNXbSUe34gHH3Fvw5r8ujty2pc2UxwVgaxPDp3B3
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在之前的文章[我们身边的STEM 04：干湿球温度计及露点温度中马格努斯公式的应用](https://busy.org/@julian2013/stem-04-scwujisr)里，我们讲到过干湿球温度计。湿球温度是用一支温度计的底部包着纱布，纱布用蒸馏水浸润，测量得到的。

热力学里面，湿球温度是指在绝热条件下，大量的水与有限的湿空气接触，水蒸发所需的潜热完全来自于湿空气温度降低所放出的显热，当系统中空气达饱和状态且系统达到热平衡时系统的温度，也叫绝热饱和温度。

简单地说，湿球温度就是当前环境仅通过蒸发水分所能达到的最低温度。

从严格的物理定义出发，湿球温度计测量到的湿球温度，并不是真正的绝热饱和温度，因为湿球温度计的湿球周围的空气并非是在绝热情况下(即等焓)达到饱和的,通常是一个焓增过程。

但是，理论湿球温度在实际中是很难测定的，也没有直接的计算公式，在实际应用中常用实测的湿球温度代替理论湿球温度，对于热力学工程中，最常遇到的水—空气体系，这两个温度在数值上近似相等。

从数值上说，露点温度和湿球温度都是未饱和变为饱和导致温度的降低，湿球温度只是温度计周围的气体吸收了水分达到饱和，而露点温度是所有气体都变为饱和状态，因此温度下降肯定比前者大，所有露点温度比湿球温度低。

湿球温度是很有用的。比如在冷却塔应用中,湿球温度是冷却塔的冷却极限温度。知道当地的湿球对冷却塔的选型有一定的帮助，同样的冷却塔处理水量在湿球温度低的地方要大一点。因此，如果当地湿球温度比较高，考虑到成本的问题，水塔就可以选小点，因为处理水量没有很大。

在日常的生活中，比较容易测量得到的是温度与相对湿度（湿度传感器很多），湿球温度计并不容易携带与维护，也不能在冰点以下使用。

而在昨天的帖子[我们身边的STEM 05：露点温度计算的一种偷懒的方法——站在别人的肩膀上](https://busy.org/@julian2013/stem-05-jjt8e1ad)里，网页计算器里面同时也有湿球温度的计算，那么我们下雨天打孩子，搂草打兔子，顺势而为，把湿球温度的计算函数也写一下吧：

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmZ8fVFNXbSUe34gHH3Fvw5r8ujty2pc2UxwVgaxPDp3B3)

下面我就告诉你这个程序是怎么来的。

源程序还是来源于网页：
[https://www.easycalculation.com/weather/dewpoint-wetbulb-calculator.php](https://www.easycalculation.com/weather/dewpoint-wetbulb-calculator.php)

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/Qmb7NFwm6sSXmX9HzccCXpJyLJfnMgR7WFcxBFcJiYRHLQ)

查看源代码，从第551行开始，是湿球温度的计算方法：

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/Qmb7NFwm6sSXmX9HzccCXpJyLJfnMgR7WFcxBFcJiYRHLQ)

主要函数是calcwetbulb()，函数如下：

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmaTVAUvdHRTUJYKEm1GkafuDSbDXr8bPVj9sntXoT6H4s)

这个程序就比昨天Td的计算函数科技含量高多了。

从函数主体，可以看出湿球温度是不停地假设一个湿球温度，算出水蒸气压值和已知的实际水蒸气压值比较迭代试算出来的。当带入的湿球温度算出的水蒸气压值和实际水蒸气压值相等时，说明代入的湿球温度是正确的。

当然，这个源程序是电脑运行的，而如果使用单片机编程的话，没有PC那么多资源，所以在允许Tw误差的时候，这里就取0.05了，跳出循环的条件也是0.05°C，这对于普通的精度0.1°C的精度要求已经够了。

一般使用的时候，干球温度，湿球温度和湿度之间，可以通过下面这个表格，已知2个参数，查得第三个参数：

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmdmLhrSHJN1rpjuqqHzqvVmiR7TWF7oafcQDGHJTfz5Qa)

我们用程序代入实际温湿度试算一下，下面是T=40°C，RH=20%,时， Tw的计算值：

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmfYNiztDiNipKMfVvSpHycxsQEB2jtqZ3j5TfCTsktQnS)

我们查上面的干球温度，湿球温度和湿度表格，T=40°C，RH=20%,时， Tw的值是22.06°C，这两个值是近似相等的。

再看网页计算器计算的结果：
![image](https://ipfs.busy.org/ipfs/QmTRUUrXno8yEEwSU65HRPM9Npzhn3NkaaJAteZdemVZNi)
这3个值出来的都差不多。湿球温度本来就是近似计算，这样的精度足够日常使用。

当然，以上所有过程只是给大家提供一个编程的思路和方法，如果有实际项目需要实现的时候，要考虑的因素就非常多了，但这属于商业机密，在本帖就不一一详述了。

总之，我们身边还是有很多科技知识，而这个知识并非只是存在于书本之上，它们对我们的实际生活还是非常实用的。

参考：[热力学湿球温度](https://baike.baidu.com/item/%E7%83%AD%E5%8A%9B%E5%AD%A6%E6%B9%BF%E7%90%83%E6%B8%A9%E5%BA%A6/5013511?fr=aladdin#reference-[3]-3814617-wrap)

---

**我们身边的STEM系列：**

[我们身边的STEM 01：单片机及其堆栈设计小窍门](https://steemit.com/@julian2013/stem-01-sriqgucl)

[我们身边的STEM 02：空气温湿度之水的饱和蒸汽压及其计算函数](https://steemit.com/cn-stem/@julian2013/stem-02-wlzhfayj)

[我们身边的STEM 03：空气温湿度之露点温度及其计算函数](https://steemd.com/cn-stem/@julian2013/stem-03-abxawrm8)

[我们身边的STEM 04：干湿球温度计及露点温度中马格努斯公式的应用](https://steemit.com/cn-stem/@julian2013/stem-04-scwujisr)

[我们身边的STEM 05：露点温度计算的一种偷懒的方法——站在别人的肩膀上](https://steemit.com/@julian2013/stem-05-jjt8e1ad)

---

希望喜欢我文字的人，去看看这个吧，说说对我的看法，请我吃星星

![](https://steemitimages.com/0x0/http://bit.ly/5credstars)

，谢谢啦~
[我的 @ReviewMe 凭证留言板!](https://steemit.com/cn/@julian2013/reviewme-yoursteemitname)

Posted using [Partiko iOS](https://steemit.com/@partiko-ios)

- - -

This page is synchronized from the post: [我们身边的STEM 06：湿球温度的意义及计算函数的推导与验证——别人的肩膀（续）](https://steemit.com/@julian2013/stem-06-mlswcxpu)
