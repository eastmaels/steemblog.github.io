
---
title: 'BananaPi /RaspberryPi  Raspbian系统使用中国软件源'
permlink: bananapi-raspberrypi-raspbian
catalog: true
toc_nav_num: true
toc: true
date: 2016-09-21 01:22:15
categories:
- cn
tags:
- cn
- bananapi
- raspbian
- iot
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


![BananaPi M3](http://www-banana--pi-org-cn-static.smartgslb.com/images/bpi-images/M3/m32.jpg)

使用过BananaPi /RaspberryPi  Raspbian系统的都有这样的体验，
就是更新系统以及安装软件的时候特别的慢。

为何？
因为Raspbian 系统内置的软件源在国外
更新点东西，跨越千山万水，不慢才怪。

那有啥办法加速呢，最简单的做法莫过于使用国内的镜像软件源喽。


# 官网的镜像列表
http://www.raspbian.org/RaspbianMirrors

# 国内镜像列表

我把其中国内的部分抓出来，贴在这里方便大家

MIRROR| DEB/DEB-SRC ADDRESS
----|----
Tsinghua University Network Administrators | http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/
Dalian Neusoft University of Information|http://mirrors.neusoft.edu.cn/raspbian/raspbian
Cohesion Network Security Studio (CNSS)|http://raspbian.cnssuestc.org/raspbian/ rsync://raspbian.cnssuestc.org/raspbian
Unique Studio of Huazhong University of Science and Technology|(http&#124;rsync)://mirrors.hustunique.com/raspbian/raspbian
University of Science and Technology of China |(http&#124;rsync)://mirrors.ustc.edu.cn/raspbian/raspbian/
SUN YAT-SEN University|http://mirror.sysu.edu.cn/raspbian/
Zhejiang University|http://mirrors.zju.edu.cn/raspbian/raspbian/
Open Source Software Association of Chinese Academy of Sciences|http://mirrors.opencas.cn/raspbian/raspbian/
Chongqing University|http://mirrors.cqu.edu.cn/Raspbian/raspbian/ 

官网备注清华大学的： Unreachable as of 15-may-2015 
但我发现它还可用呢

# 如何使用国内的镜像软件源

`sudo vi /etc/apt/sources.list`
把类似这样的
`deb http://mirrordirector.raspbian.org/raspbian/ jessie main contrib non-free rpi`

前边的部分改成你要用的软件源地址即可：
比如我使用neusoft的源，改成下边的样子就行啦
`deb http://mirrors.neusoft.edu.cn/raspbian/raspbian jessie main contrib non-free rpi`

别忘了
`sudo apt-get update`
`sudo apt-get upgrade`

# 补充说明

本文适用于使用Raspbian系统 的BananaPi /RaspberryPi .
其它使用Raspbian系统的单板机，香橙派之类的应该都可以。

更多详情请参考：http://www.raspbian.org/RaspbianMirrors

- - -

This page is synchronized from the post: [BananaPi /RaspberryPi  Raspbian系统使用中国软件源](https://steemit.com/@oflyhigh/bananapi-raspberrypi-raspbian)
