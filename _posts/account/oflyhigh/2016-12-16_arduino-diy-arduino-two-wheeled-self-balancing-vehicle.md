
---
title: '用Arduino 制作双轮自平衡车 / DIY Arduino Two wheeled self balancing vehicle'
permlink: arduino-diy-arduino-two-wheeled-self-balancing-vehicle
catalog: true
toc_nav_num: true
toc: true
date: 2016-12-16 12:26:33
categories:
- cn
tags:
- cn
- diy
- arduino
- life
thumbnail: http://www.steemimg.com/images/2016/12/16/132666565_21n822de.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![132666565_21n822de.jpg](http://www.steemimg.com/images/2016/12/16/132666565_21n822de.jpg)
(薄瓜瓜的Segway, 图片来自网络）

****

# 准备直播DIY双轮自平衡车的全过程

提起平衡车，现在大家应该都不陌生。
也许当年徐明送给薄瓜瓜的Segway大家还不知道是啥，但是现在小区里和公园广场上到处都是的小米平衡车你一定见过。
这次我准备用一系列帖子直播我DIY一辆双轮自平衡车的全过程。

# 失败的经历

其实呢，我有过一次DIY自平衡车失败的经历。
历时近一个多月尝试，最终我的平衡车还是没有站立起来。
用网上所有DIY平衡车失败者的言语来形容，就是运动趋势有，站立不起来：（

那之后我总结了失败的原因，，包括但不限于：
* 使用的是直流电机而不是步进电机(因为步进电机可以精确控制）
* 使用的是Arduino/Genuino 101 而不是Arduino UNO (其实101的性能更强悍，但是有各种令人抓狂的小毛病）
* 使用Curie的BMI160而不是MPU6050作为陀螺仪加速度计 （用BMI160做平衡车，我该是第一例吧？)
* 传感器位置放置过高，据说会影响稳定
* PID参数整定没有经验
* Curie的IO电流推灌都有限，最终我成功的把Curie的电源部分烧掉了

确切的说，这些原因可能是我自己臆想的原因，失败总是各有借口的嘛。

# 基本目标

雄关漫道真如铁，而今迈步从头越！
原本想从哪里跌倒就在哪里趴着，但是趴着趴着也没有人来扶，讹不到无知小青年，只好爬起来了。
奈何原本失败的平衡车被儿子当作玩具滚来滚去，除了部分组件已经零碎了。
所以自己打算从头再来。

当然也许又一次失败。
不过那又有什么呢，失败失败，多失败几次就习惯了。

但愿这次能站起来吧。
当然，我的目标是个玩具车，不能载人的，大家不要多想。

# 友情提示

我身边有些朋友在使用平衡车的时候平衡车突然失控导致摔伤。
网上也经常看到类似事件。
所以提醒大家玩真正的平衡车的时候要带护具，避免摔伤。

另外不要给孩子买这类设备，一则危险，二则起不到什么锻炼作用。

好了，敬请期待我的这个系列的帖子吧。
进度啥的，大家不要期望太高，水平和精力有限，快不起来。

- - -

This page is synchronized from the post: [用Arduino 制作双轮自平衡车 / DIY Arduino Two wheeled self balancing vehicle](https://steemit.com/@oflyhigh/arduino-diy-arduino-two-wheeled-self-balancing-vehicle)
