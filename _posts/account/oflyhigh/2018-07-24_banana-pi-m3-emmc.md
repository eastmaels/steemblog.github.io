
---
title: 'Banana Pi M3扩展系统到整个eMMC存储空间'
permlink: banana-pi-m3-emmc
catalog: true
toc_nav_num: true
toc: true
date: 2018-07-24 02:45:30
categories:
- cn
tags:
- cn
- bananapi
- raspbian
- iot
- raspberrypi
thumbnail: https://cdn.steemitimages.com/DQmPsdpyhM1FCQvPZtianMNmgxX6fYpp3NRz9QEzbR817dF/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


昨天装完M3的系统后，突然发现eMMC存储的空间并没有被完全利用。之所以这样的原因是，制作者在制作安装镜像的时候都制作得尽可能小，这样无论是网络传输还是写入到eMMC存储时效率都会更高一些。


# 大致思路

在写入完成后，再对系统空间进行扩展即可，大致思路如下：
* 删除原有分区
* 使用相同的起始扇面创建新分区
* 创建执行一次的启动脚本，下次启动试在此脚本中执行resize2fs对文件系统进行调整，并删除此脚本

当初在R1上折腾OPENWRT的时候没少折腾这事，并写过好多脚本，可惜刚刚找了一下电脑，一段代码也找不到了。😭

# 坏掉的`raspi-config`

当然了，其实可以不这么复杂，比如说，可是使用`raspi-config`工具来调整，大致思路还是那个思路，不过人家脚本做的非常完善。

>`sudo raspi-config`

![](https://cdn.steemitimages.com/DQmPsdpyhM1FCQvPZtianMNmgxX6fYpp3NRz9QEzbR817dF/image.png)

咦，怎么找不到扩展系统空间的选项了？

于是我去一个BPI 开发者的群里，问如何扩展空间？结果里边的人给的参考链接都是我们一伙人玩腻的，要是手动调，我自己可以有一堆的文章参考啊。

问`raspi-config`里对应的选项哪里去啦？回答说被开发者拿掉了！😲

# 修复`raspi-config`

看来只有自己动手搞定了，于是看了一下`raspi-config`的代码，发现里边扩展分区的代码还在，只是菜单中拿掉了，对比一下之前截图的菜单，果然发现6、7两项。

再看代码，发现6、7两项都是硬件相关的项目，不同硬件设备因为接口等区别，可能没法通用，所以`raspi-config`的代码首先判断是否是树莓派，如果不是树莓派，则屏蔽6、7两个项目。

知道了这个原因就好办了，因为我万分确认扩展空间这个功能，树莓派和香蕉派都是没啥区别的，于是直接强力修改代码，让其显示完整菜单
![](https://cdn.steemitimages.com/DQmRsMd9dzKMSqDXKRnamSVCFzgiRYiJE54WHa6nT4zRNQu/image.png)

>`sudo raspi-config`

哇咔咔，丢掉的选项都回来啦
![](https://cdn.steemitimages.com/DQmc1743wHB4xYA4in7MS4dnrPvLHo7mfiNMvKgWwudUJQv/image.png)

扩展文件系统的选项
![](https://cdn.steemitimages.com/DQmQb4xmy48CKBosGbxmZTiCASPD6EJPwDVddnya1Hfr6sd/image.png)

执行并重启，然后再对照扩展前后的分区大小

>`sudo fdisk -l`

扩展前截图
![](https://cdn.steemitimages.com/DQmQTYEj69CX8jv6fP9etP6SYBJxEmJGgxymciwpvXWpQif/image.png)

扩展后截图
![](https://cdn.steemitimages.com/DQmXeqcgJHZZFgMmVoEm6TjQHeqwfHrWTpZkvEALKhQL9PH/image.png)

# 总结

因为树莓派和香蕉派在扩展系统空间的操作上没啥区别，所以可以通过强力修改`raspi-config`工具的代码，恢复相应选项并执行即可。

当然了，不嫌费劲也可以手动操作，就是很麻烦是啦，能偷懒还是偷懒好啦。

- - -

This page is synchronized from the post: [Banana Pi M3扩展系统到整个eMMC存储空间](https://steemit.com/@oflyhigh/banana-pi-m3-emmc)
