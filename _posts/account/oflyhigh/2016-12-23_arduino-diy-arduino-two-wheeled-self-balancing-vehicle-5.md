
---
title: '用Arduino 制作双轮（玩具）自平衡车(五，直流减速电机) / DIY Arduino Two wheeled self balancing vehicle (5)'
permlink: arduino-diy-arduino-two-wheeled-self-balancing-vehicle-5
catalog: true
toc_nav_num: true
toc: true
date: 2016-12-23 05:05:39
categories:
- cn
tags:
- cn
- diy
- arduino
- life
thumbnail: http://www.steemimg.com/images/2016/12/17/IMG_20161216_18554359313.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](http://www.steemimg.com/images/2016/12/17/IMG_20161216_18554359313.jpg)

继续我们的玩具自平衡车DIY之旅。

上篇帖子中提及的铝合金板上打孔的问题，暂时还没解决。
偶尔在同学群里提了一句，结果各路大神纷纷给我建议： 有的建议让我买个台钻，有的让我去他家取金属麻花钻头，有的让我提供图纸给我用CNC机床加工，有的要去给我问问他们实验室都有啥设备可以让我使用...
真是一堆亲同学啊。

然而我最主要的问题，还是要确定到底用什么样方案以及如何摆放。

先来说说直流减速电机吧。

# 电机的组成

![](http://www.steemimg.com/images/2016/12/17/IMG_20161216_18554359313.jpg)

我们这次DIY平衡车用的是这款电机。
全称应该叫做`带霍尔编码器的直流减速电机`。
所以从逻辑上，可以分为三个部分

* 霍尔编码器
* 直流电机
* 变速箱

# 霍尔编码器

有关编码器的话题相对复杂一点点，我会在后续的帖子中单独介绍。
这里暂时略过。

# 直流电机

去掉霍尔编码器部分后，就变成了直流减速电机。
为了方便说明，我用另外一款直流减速电机来说明。其实是一样的，只是我DIY用的电机没有更详细的参数。
![IMG_20161223_1203002596a.jpg](http://www.steemimg.com/images/2016/12/22/IMG_20161223_1203002596a.jpg)
大致这个样子，后边是电机，前边是变速箱。

这款电机相对比较正规，印有详细的参数，我们弄个大点的图片来看。
![IMG_20161223_120332f070f.jpg](http://www.steemimg.com/images/2016/12/22/IMG_20161223_120332f070f.jpg)
可以看到电机的电压是12V，转速是3500转每分钟。

而加上变速箱后，是12V下是60转每分钟。

直流电机就需要两根线。分别接电源的正负极，对调接线则电机更换转动方向。
另外，电压决定电机的转速。比如这个电机12V下3500转，如果我们给更高的电压，它的转速就会提高，反之则会降低。
根据这个原理，我们可以控制电源的正负极来控制电机转向，通过调制电压来控制转速。
（需要注意的是，电压有一定范围，太高了会导致电机烧毁，太低了可能不转）

# 变速箱

变速箱的作用就是通过一系列的齿轮传动，来达到增加或者降低转速的目的。

此款电机的变速箱为减速齿轮，来张特写。
![IMG_20161223_120127cae2f.jpg](http://www.steemimg.com/images/2016/12/22/IMG_20161223_120127cae2f.jpg)

降低转速的目的是提高电机转矩，简单的说让它有更大的力气。
比如电动窗帘电机，汽车车窗升降电机，后视镜调整电机，都用的减速电机。

增加速度的齿轮，最常见的是老式钟表的发条机制，小时候总拆着玩，现在很少见到了。


# 关于电机驱动

讲了这么多，但是也不能手动更换电源极性，也不能手动调节电压不是？
所以要用到电机驱动板，这样我们就可以通过单片机程序控制啦。
接下来的文章，我会详细介绍，这里先放个图喽。
![IMG_20161223_12041168cc3.jpg](http://www.steemimg.com/images/2016/12/22/IMG_20161223_12041168cc3.jpg)





# 相关帖子列表
* [用Arduino 制作双轮自平衡车 / DIY Arduino Two wheeled self balancing vehicle](https://steemit.com/cn/@oflyhigh/arduino-diy-arduino-two-wheeled-self-balancing-vehicle)
* [用Arduino 制作双轮自平衡车(二，主要材料) / DIY Arduino Two wheeled self balancing vehicle (2)](https://steemit.com/cn/@oflyhigh/arduino-diy-arduino-two-wheeled-self-balancing-vehicle-2)
* [用Arduino 制作双轮（玩具）自平衡车(三，组装底盘) / DIY Arduino Two wheeled self balancing vehicle (3)](https://steemit.com/cn/@oflyhigh/arduino-diy-arduino-two-wheeled-self-balancing-vehicle-3)
* [用Arduino 制作双轮（玩具）自平衡车(四，安装电池等，遇到难题了) / DIY Arduino Two wheeled self balancing vehicle (4)](https://steemit.com/cn/@oflyhigh/arduino-diy-arduino-two-wheeled-self-balancing-vehicle-4)

- - -

This page is synchronized from the post: [用Arduino 制作双轮（玩具）自平衡车(五，直流减速电机) / DIY Arduino Two wheeled self balancing vehicle (5)](https://steemit.com/@oflyhigh/arduino-diy-arduino-two-wheeled-self-balancing-vehicle-5)
