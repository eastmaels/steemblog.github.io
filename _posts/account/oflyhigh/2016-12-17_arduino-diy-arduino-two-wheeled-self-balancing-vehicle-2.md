
---
title: '用Arduino 制作双轮自平衡车(二，主要材料) / DIY Arduino Two wheeled self balancing vehicle (2)'
permlink: arduino-diy-arduino-two-wheeled-self-balancing-vehicle-2
catalog: true
toc_nav_num: true
toc: true
date: 2016-12-17 11:41:24
categories:
- cn
tags:
- cn
- diy
- arduino
- life
thumbnail: http://www.steemimg.com/images/2016/12/17/IMG_20161217_0703035bc23.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![IMG_20161217_0703035bc23.jpg](http://www.steemimg.com/images/2016/12/17/IMG_20161217_0703035bc23.jpg)

****
在前文中，我说要直播用Arduino 制作双轮自平衡车
[用Arduino 制作双轮自平衡车 / DIY Arduino Two wheeled self balancing vehicle](https://steemit.com/cn/@oflyhigh/arduino-diy-arduino-two-wheeled-self-balancing-vehicle)

这个帖子我介绍一下主要材料

# 关于大小的问题
@myfirst 在上一个帖子中给我回复
>历害了，我们小区好多人玩这个，偷懒，走个路还这玩意 :) 你要做出来了，我来做实验，准备摔几次

我给他的回复也顺便贴在这里：
>哈哈，我计划做的是玩具平衡车。
如果能成功站起来，我就可以实现前进，后退，旋转等诸多功能。然后加上遥控以及一堆传感器探头，那么一定非常好玩的。

>当然，前提是站起来。之前失败过一次，心里有阴影的。

>大的，载人的，其实和小的大同小异，只不过换更大的电机，更大容量的电池，原理都是一样的。

简而言之，我做的平衡车不能载人。
当然了，成功的话能载物，一罐可乐啥的还是有可能的。

# 主要材料

实现一个平衡车的主要材料包含但不限于以下内容：
* 车架 （车架，连接件，螺丝，铜柱之类乱七八糟的）
* 能量单元 （就是电池啦，说成能量单元是不是很科幻的感觉）
* 动力单元 （就是电机啦，这里我依然用直流电机，虽然说步进电机更好控制，但是不是还得重新买嘛）
* 控制单元 （如果是普通的电动车，有电池有电机了，给电就能跑了，但是平衡车还需要一个大脑）
* 通讯单元 （用于控制平衡车，初步打算用NRF24L01一类方案，当然也可能上ESP8266之类的WIFI模块）
* 传感器部分 （超声波等，以后慢慢加吧）

# 上图啦
有句话叫做不要重复发明轮子，所以买现成的喽
![IMG_20161217_0703035bc23.jpg](http://www.steemimg.com/images/2016/12/17/IMG_20161217_0703035bc23.jpg)

这货用来支撑车架的铝板，这货居然要18.88一块啊，白花花的银子啊
![IMG_20161217_0709214a237.jpg](http://www.steemimg.com/images/2016/12/17/IMG_20161217_0709214a237.jpg)

用来连接几层车架铝板的铜柱。长的短的我买了数千枚，话说管不住手咋办？剁了吗？
![IMG_20161217_0710161c6c3.jpg](http://www.steemimg.com/images/2016/12/17/IMG_20161217_0710161c6c3.jpg)

控制单元，这次我准备用Arduino UNO R3了。据说是山寨版本的，不过其实挺好用的。当然了，不排除用NANO, MINI, MIRCO等替代方案，各种模块我手头都有的。
![IMG_20161217_0707537dfc9.jpg](http://www.steemimg.com/images/2016/12/17/IMG_20161217_0707537dfc9.jpg)

顺便上一个上次失败项目用的Arduino 101，相当贵，也相当强悍，为何失败了呢？一定是我使用的方式不对。
![IMG_20161217_0708092de08.jpg](http://www.steemimg.com/images/2016/12/17/IMG_20161217_0708092de08.jpg)

L298N电机驱动模块。控制电机前进后退都指望它了。我手头应该还有另外一款电机驱动模块，据说更好，然而我找不到丫了，等找到的时候可能替换成那个，先放这个图在这吧
![IMG_20161217_070828048f2.jpg](http://www.steemimg.com/images/2016/12/17/IMG_20161217_070828048f2.jpg)

核动力电池，呃，开玩笑的啦，据说叫3S航模电池，动力强劲啊。前几天不小心短路了一次，接头的铜片像放烟花一样蒸发了。
![IMG_20161217_07085687013.jpg](http://www.steemimg.com/images/2016/12/17/IMG_20161217_07085687013.jpg)

MPU6050模块 三维角度传感器6DOF 三轴加速度计电子陀螺仪。不敢用BMI160了。
![IMG_20161217_19082624abb.jpg](http://www.steemimg.com/images/2016/12/17/IMG_20161217_19082624abb.jpg)

动力就靠它了，传说中的直流电机，带霍尔编码器。
![IMG_20161216_18554359313.jpg](http://www.steemimg.com/images/2016/12/17/IMG_20161216_18554359313.jpg)

# 其它

其它的比如联轴器啊，导线啊，支架啊啥的，就先不上照片了，太累了。
等做到对应步骤，再慢慢上图吧。
通讯部分和传感器部分暂时还用不到，等小车站起来以后才需要考虑的。
就这样吧，写累了。

# 相关帖子列表
* [用Arduino 制作双轮自平衡车 / DIY Arduino Two wheeled self balancing vehicle](https://steemit.com/cn/@oflyhigh/arduino-diy-arduino-two-wheeled-self-balancing-vehicle)

- - -

This page is synchronized from the post: [用Arduino 制作双轮自平衡车(二，主要材料) / DIY Arduino Two wheeled self balancing vehicle (2)](https://steemit.com/@oflyhigh/arduino-diy-arduino-two-wheeled-self-balancing-vehicle-2)
