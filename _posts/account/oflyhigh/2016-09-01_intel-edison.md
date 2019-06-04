
---
title: '用Intel Edison向大家打招呼,  以及介绍我自动浇花系统的进展'
permlink: intel-edison
catalog: true
toc_nav_num: true
toc: true
date: 2016-09-01 12:23:27
categories:
- cn
tags:
- cn
- life
- edison
- iot
- hardware
thumbnail: https://www.steemimg.com/images/2016/09/01/IMG_20160901_122347caee6.md.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


[![IMG_20160901_122347caee6.md.jpg](https://www.steemimg.com/images/2016/09/01/IMG_20160901_122347caee6.md.jpg)](https://www.steemimg.com/image/2vjU8)

English version: 
* [Say Hello to steemians from my Intel Edison device, and the progress of my automatic watering device.](https://steemit.com/life/@oflyhigh/say-hello-to-steemians-from-my-intel-edison-device-and-the-progress-of-my-automatic-watering-device)

# 打招呼以及自动浇花系统的进展

我在之前的一篇文章中，展示了我的 Intel Edison套件，并计划用它做一个自动浇花装置
* [What will you make? 秀一下Intel Edison套件，计划做一个自动浇花装置](https://steemit.com/cn/@oflyhigh/what-will-you-make-intel-edison)

但是一个多月过去了，我还没做完，因为我将大部分时间花费在Steemit上。

今天我决定继续来做这个装置
首先，让我用Intel Edison向大家打招呼
[![IMG_20160901_123423cd739.md.jpg](https://www.steemimg.com/images/2016/09/01/IMG_20160901_123423cd739.md.jpg)](https://www.steemimg.com/image/2vtws)

LCD 上显示的第二行信息在这里没啥意义，你可以忽略它（电位器的值）

我用一个电位器（就是右下角那个家伙）来模拟湿度传感器，读回模拟值。实际应用时，它会被替换成下边的模块：
![shidu1388c.jpg](https://www.steemimg.com/images/2016/09/01/shidu1388c.jpg)

我用一个插在面包板上的LED来模拟水泵，并用一个继电器来控制它。

我的程序每30分钟检查一下湿度传感器的值，当这个值低于阈值（表示土壤干燥），我就通过继电器启动水泵来为花浇水。

# 任务列表
程序部分差不多完成啦，我还需要做其下内容：
* 买个水泵替换LED
* 买个湿度传感器替换电位器
* 为继电器和水泵使用独立供电.  因为Intel Edison GPIO口提供的推动电流太小了，不足以驱动水泵，可能会烧坏核心板.
* 可能还需要个变压器. 因为大部分水泵工作在24V.
* 我还需要一个装水的水箱.


最重要的是， 我还需要一盆花:)
![20150826214443_TRFCQ1a388.jpg](https://www.steemimg.com/images/2016/09/01/20150826214443_TRFCQ1a388.jpg)
(* 这个图拿自baidu.com )

不多说了，我得抓紧完成这个自动浇花装置：）

- - -

This page is synchronized from the post: [用Intel Edison向大家打招呼,  以及介绍我自动浇花系统的进展](https://steemit.com/@oflyhigh/intel-edison)
