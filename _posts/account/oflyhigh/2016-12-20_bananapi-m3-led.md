
---
title: '禁用香蕉派BananaPi M3上恼人的绿色LED'
permlink: bananapi-m3-led
catalog: true
toc_nav_num: true
toc: true
date: 2016-12-20 12:46:30
categories:
- bananapi
tags:
- bananapi
- cn
- raspbian
- raspberrypi
thumbnail: http://www-banana--pi-org-cn-static.smartgslb.com/images/bpi-images/M3/m32.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](http://www-banana--pi-org-cn-static.smartgslb.com/images/bpi-images/M3/m32.jpg)

#  BananaPi M3
BananaPi  M3是一款类似的 开源硬件单板计算机，具有如下特征：
* 八核1.8GHz 强力CPU.
* 2 GB LPDDR3 内存.
* 8 GB eMMC储存.
* 板载Wifi & BT.

之前写过几篇文章介绍过这款板卡，详情参见本文底部链接。

# 恼人的LED
但是这款板卡上有个绿色的LED，默认系统安装上以后，这个LED就闪啊闪的。
这个LED亮度还挺高，尤其是晚上，晃的人睡不着觉。

于是乎，就想能不能关掉这个LED。
QQ群里问了一下专业人士，告诉我`用电烙铁把这个LED焊下来`。
呃，听起来似乎有点不靠谱。

百度一下，找到一个大神的这篇文章
>[【香蕉派进阶设置】一、关闭那个烦人的绿灯 ](http://www.eeboard.com/bbs/thread-38600-1-1.html)

大意是通过修改内核的配置文件达到关闭板载LED的目的
* 首先编译bin2fex以及fex2bin两个工具
* 用bin2fex将script.bin转换成fex格式（文本的配置文件）
* 修改fex文件，将“leds_used = 1”改为等于0，另一个就是“leds_trigger_1”将双引号中的内容删除为空
* 再用fex2bin转换回script.bin。

突然想起当年玩M1的时候也这样弄过，尽管也成功了，但是很繁琐。况且不知道是否试用于M3。
有没有更直接更简单的方式呢？

# 关闭方式

功夫不负有心人啊。
一顿胡乱查找后，终于发现了系统中这样一个目录
`/sys/class/leds/green_led`

这个是不是和板载LED有关呢？看看目录下都有啥？
```
-rw-r--r-- 1 root root 4096 Dec 20 12:07 brightness
-rw-r--r-- 1 root root 4096 Dec 20 12:59 delay_off
-rw-r--r-- 1 root root 4096 Dec 20 12:59 delay_on
lrwxrwxrwx 1 root root    0 Dec 20 12:01 device -> ../../../leds-gpio
-r--r--r-- 1 root root 4096 Dec 20 12:01 max_brightness
drwxr-xr-x 2 root root    0 Dec 20 11:56 power
lrwxrwxrwx 1 root root    0 Dec 20 12:01 subsystem -> ../../../../../class/leds
-rw-r--r-- 1 root root 4096 Dec 20 12:58 trigger
-rw-r--r-- 1 root root 4096 Dec 18 20:17 uevent
```

你一定会问是什么鬼?

经过我一番"苦心孤诣"的调研，总算大致搞明白三五分。

先来说这个*`brightness`*

字面上的意思就是亮度啦。这个值的默认值是255
我想当然的认为这个是PWM调制的亮度，实际上这个LED是接到数字口的，也就是说只有`开|关`两种状态。
传入0关闭，其它非零数字表示设置亮度为开

所以，要关闭LED，我们有个办法就是：

`echo 0 > /sys/class/leds/green_led/brightness`

看看，恼人的绿色LED是不是灭了？？

# 更进一步

虽然我们已经`关闭`了这个绿色LED，但是实际上，我们只是把亮度关闭。
举例来说，好比我们开着电脑，但是把显示器关了。

那有没有办法`彻底`关闭这个LED呢？
让我们来看看`/sys/class/leds/green_led/trigger`这个文件
```
cat /sys/class/leds/green_led/trigger
none battery-charging-or-full battery-charging battery-full battery-charging-blink-full-solid ac-online usb-online rfkill0 mmc0 mmc1 mmc2 timer [heartbeat] backlight gpio default-on sunxi_respiration_trigger rfkill1 rfkill2 rfkill4
```

默认[heartbeat]这个是选中的
所以这个破LED就像心跳似的一闪一闪的。
```
注（Bug?）： 
设置亮度为0，会改变/sys/class/leds/green_led/trigger 内容，默认为none
重新设置亮度为1，/sys/class/leds/green_led/trigger 内容，依旧为none，但是LED常亮
```

我们将其恢复默认，然后来看一下：
```
echo 255 > /sys/class/leds/green_led/brightness
echo heartbeat > /sys/class/leds/green_led/trigger
```
是不是又像心跳一样一闪一闪啦？

然后直接关闭
`echo none > /sys/class/leds/green_led/trigger`
是不是灭啦？并设置

# 秘籍哦

通过设置成timer，并设置delay_off和delay_on
就可以指定闪烁的时间间隔以及闪烁持续的时间。

更多玩法，你可以自己发掘啊。

我是写累了。



# 相关文章
* [Banana M3 安装系统概要记录](https://steemit.com/cn/@oflyhigh/banana-m3)
* [BananaPi /RaspberryPi Raspbian系统使用中国软件源](https://steemit.com/cn/@oflyhigh/bananapi-raspberrypi-raspbian)
* [[在香蕉派上使用摄像头：安装 & C++/Python示例程序]/Using OpenCV on BananaPi : Install & example programs in C++ / Python](https://steemit.com/opencv/@oflyhigh/and-c-python-using-opencv-on-bananapi-install-and-example-programs-in-c-python)

- - -

This page is synchronized from the post: [禁用香蕉派BananaPi M3上恼人的绿色LED](https://steemit.com/@oflyhigh/bananapi-m3-led)
