
---
title: '用Arduino 制作双轮（玩具）自平衡车(九，焊接无止境) / DIY Arduino Two wheeled self balancing vehicle (9: continue to welding)'
permlink: arduino-diy-arduino-two-wheeled-self-balancing-vehicle-9-continue-to-welding
catalog: true
toc_nav_num: true
toc: true
date: 2017-01-02 02:48:06
categories:
- cn
tags:
- cn
- diy
- arduino
- life
thumbnail: http://www.steemimg.com/images/2017/01/01/IMG_20170101_155949e4507.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![IMG_20170101_155949e4507.jpg](http://www.steemimg.com/images/2017/01/01/IMG_20170101_155949e4507.jpg)
****

继续我们的玩具自平衡车DIY之旅。

有些事想起来很简单，但是做起来麻烦不断，就好比这个DIY自平衡车。
之前我已经想办法用铝板上放置洞洞板的方式来规避在铝板上打孔的麻烦。
但是使用洞洞板就没法使用类似Arduino UNO R3 以及记不清上几节我们介绍的L298N模块了。
为何？因为没地方摆放喽。
为此，也丧失了连接的便利性，毕竟UNO R3啥的都给你留出连接插孔了。

但是事情依旧得继续，不是嘛
于是操起我的又老又破的电烙铁，继续焊焊焊。
我原本计划把几个小模块直接焊到洞洞板上，然后洞洞板背面用飞线或者堆锡的方式完成电路。
但是一则怕模块有故障不好更换，二则也对自己飞线或者堆锡的能力十分之不自信。
所以我的想法是让模块可插拔，并且模块外围连出插线的排针，这样我就可以更方便的更改线路了。

我大致要在洞洞板上放置如下模块：
* 主控模块(Arduino Micro 或者 Arduino Nano)
* 电机驱动模块 TB6612FNG， L298N 放不下，没办法
* 三轴陀螺仪以及加速度计，毫无疑问这次用MPU6050模块，不敢折腾BMI160啦
* 其它的诸如WIFI通信，OLED显示屏之类的以后视情况再说

# TB6612FNG

* 正脸
![IMG_20170101_15522222c66.jpg](http://www.steemimg.com/images/2017/01/01/IMG_20170101_15522222c66.jpg)

* 背面
![IMG_20170101_15523568a5e.jpg](http://www.steemimg.com/images/2017/01/01/IMG_20170101_15523568a5e.jpg)

* 用面包板固定后焊上两排排针，这手艺还算不错吧
![IMG_20170101_155631af9fd.jpg](http://www.steemimg.com/images/2017/01/01/IMG_20170101_155631af9fd.jpg)

# MPU6050

* 正面
![IMG_20170101_153507d19b0.jpg](http://www.steemimg.com/images/2017/01/01/IMG_20170101_153507d19b0.jpg)

* 正面背面合影
![IMG_20170101_1535291b0d8.jpg](http://www.steemimg.com/images/2017/01/01/IMG_20170101_1535291b0d8.jpg)

* 正面背面合影加上排针
![IMG_20170101_1536087029e.jpg](http://www.steemimg.com/images/2017/01/01/IMG_20170101_1536087029e.jpg)

* 用面包板固定排针后待焊（一并焊它个两枚），焊完的图随手删掉了，主要是焊点太完美，挑图的时候没区别出来焊完与没焊的。
![IMG_20170101_154524a9b4a.jpg](http://www.steemimg.com/images/2017/01/01/IMG_20170101_154524a9b4a.jpg)

# 大致布局

完成后的大致布局就是这个样子啦
![IMG_20170101_155949e4507.jpg](http://www.steemimg.com/images/2017/01/01/IMG_20170101_155949e4507.jpg)

当然，我还要焊上一堆排座，一堆排针，用于固定几个模块和连线。
然后似乎应该加上一个开关，方便调试的时候断电和供电。
这贴就不多说了。
焊接的工作还要继续，但是就不额外开贴了，累啊。

# 部分相关帖子列表

* [用Arduino 制作双轮（玩具）自平衡车(六，手工工具之一) / DIY Arduino Two wheeled self balancing vehicle (6)](https://steemit.com/cn/@oflyhigh/arduino-diy-arduino-two-wheeled-self-balancing-vehicle-6)
* [用Arduino 制作双轮（玩具）自平衡车(七，说一下电机驱动板L298N) / DIY Arduino Two wheeled self balancing vehicle (7)](https://steemit.com/cn/@oflyhigh/arduino-l298n-diy-arduino-two-wheeled-self-balancing-vehicle-7)
* [用Arduino 制作双轮（玩具）自平衡车(八，切割与焊接) / DIY Arduino Two wheeled self balancing vehicle (8: Cutting and welding)](https://steemit.com/cn/@oflyhigh/arduino-diy-arduino-two-wheeled-self-balancing-vehicle-8-cutting-and-welding)

不全部列出来了，感兴趣的朋友直接进我blog，就可以看到全部内容啦
@oflyhigh

谢谢大家！

- - -

This page is synchronized from the post: [用Arduino 制作双轮（玩具）自平衡车(九，焊接无止境) / DIY Arduino Two wheeled self balancing vehicle (9: continue to welding)](https://steemit.com/@oflyhigh/arduino-diy-arduino-two-wheeled-self-balancing-vehicle-9-continue-to-welding)
