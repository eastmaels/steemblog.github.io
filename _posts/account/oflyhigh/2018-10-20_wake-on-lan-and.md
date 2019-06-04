
---
title: '每天进步一点点：远程唤醒(Wake On LAN) & 工具'
permlink: wake-on-lan-and
catalog: true
toc_nav_num: true
toc: true
date: 2018-10-20 13:24:54
categories:
- cn
tags:
- cn
- wol
- ethtool
- wakeonlan
- tools
thumbnail: https://steemitimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


之前说过我的Ubuntu主机(NUC7I5BNHL)断电后不自动上电的问题，并提出解决方法一个是BIOS中设置掉电后重启(Power on after power failure or Last state  after power failure)，另外一个就是设置WOL了。

![](https://steemitimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png)
(图源 ：[pixabay](https://pixabay.com/))


因为我要时常保持开机，所以用第一个方法超级简单，我也准备采用第一个方法。但是在这篇文章中来介绍一下第二个方法。

# Wake-on-LAN (WoL)

Wake-on-LAN (WoL)简单地说就是通过发给网卡特定的网络消息，来唤醒指定的机器。有关WoL的介绍，可以参考如下WikiPedia页面，我就不做过多介绍了。
* https://en.wikipedia.org/wiki/Wake-on-LAN

而WoL中所谓的特定的网络消息，一般而言，是指广播一个特定格式的数据包(Magic packet)，这个包的负载部分包含***6个字节的0xFF以及重复16次的目标网卡MAC地址***。

>The magic packet is a broadcast frame containing anywhere within its payload 6 bytes of all 255 (FF FF FF FF FF FF in hexadecimal), followed by sixteen repetitions of the target computer's 48-bit MAC address, for a total of 102 bytes. 

好啦，扯远了，其实我需要的只是让我的NUC7I5BNHL可以被网络唤醒而已。

# ethtool

首先，涉及一个ethtool，可以用这个判断对应网卡是否支持WoL以及当前状态，比如我的网卡
>`sudo ethtool eno1`

显示如下状态(就是支持但是禁用)
>![](https://cdn.steemitimages.com/DQmSpjBHH4KjHTLPDa3arrvwZUSHrTNcJjpqYZcdwPqr77o/image.png)

然后在BIOS里启用一下就好了，其实如果你看BIOS，就会知道是否支持WoL啦，ethtool倒是多此一举啦。

# BIOS设置

Intel NUC支持有线和无线LAN唤醒，我直接从INTEL的页面上拿俩图过来。

![](https://cdn.steemitimages.com/DQmctZkkKECfG63emUKrjQnhaf3vLVHxU1b1H2VSaLKEKgX/image.png)

![](https://cdn.steemitimages.com/DQmdW126e6Rg3UkaYTCeK8SVUf77NnErb75xKv5sg1JM982/image.png)

设置还是很简单的。

# wakeonlan

如果你不想自己写程序去发魔力包(magic packet)，那么最简单的办法就是使用***`wakeonlan`***啦。

如果你还没装wakeonlan，那可以使用如下命令安装。
>`sudo apt-get install wakeonlan`

剩下的事情就简单咯，需要的时候直接往对应MAC发包就行了

>`wakeonlan xx:xx:xx:xx:xx:xx`

# 获取MAC地址

获取MAC地址也很简单，直接去对应的机器上执行***`ifconfig`***就行了。然后把这个地址保存到脚本里，下次就可以用来远程唤醒机器喽。

也可以先在本地机器上***`ping`***一下目标机器，然后用***`arp`***就可以查看对应IP的MAC地址啦。

另外据说自己写程序发包也很简单，不过有现成的，就懒得折腾了：）

# 参考链接

* https://en.wikipedia.org/wiki/Wake-on-LAN
* https://www.intel.cn/content/www/cn/zh/support/articles/000027615/mini-pcs.html

- - -

This page is synchronized from the post: [每天进步一点点：远程唤醒(Wake On LAN) & 工具](https://steemit.com/@oflyhigh/wake-on-lan-and)
