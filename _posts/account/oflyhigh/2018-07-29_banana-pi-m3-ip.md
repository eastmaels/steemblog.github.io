
---
title: 'Banana Pi M3 设置静态IP地址'
permlink: banana-pi-m3-ip
catalog: true
toc_nav_num: true
toc: true
date: 2018-07-29 13:31:51
categories:
- cn
tags:
- cn
- linux
- lan
- network
- ip
thumbnail: https://cdn.steemitimages.com/DQmXEAvLCeavfEzuq97ue5W9xaLuPNb7aXABygimW8WpPXE/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


昨天说到因为手欠升级了路由器的固件，然后导致我不知道新接入的设备IP，没错的啦，新接入的设备就是我重做系统的Banana Pi M3。

![](https://cdn.steemitimages.com/DQmXEAvLCeavfEzuq97ue5W9xaLuPNb7aXABygimW8WpPXE/image.png)
(图源 ：[pexels.com]( https://www.pexels.com/))

最终我终于用串口线通过TX\RX\GND连接到设备上，看着熟悉的字符界面，我激动的想哭啊，但是哭之前，我还是先把IP地址设置好吧。因为总不能总用串口线连上去，并且115200的波特率还是很感人的。

那么如何给Banana Pi M3设置静态IP地址呢？其实很简单的啦：
>`sudo vi /etc/network/interfaces`

进去之后把里边乱七八糟的内容通通删除，填入如下内容即可：

>`auto lo`
>`iface lo inet loopback`
>
>`allow-hotplug eth0`
>`iface eth0 inet static`
>`address 192.168.1.181`
>`netmask 255.255.255.0`
>`gateway 192.168.1.1`
>`network 192.168.1.0`

当然了，如果你在不同的网段网关啥的，需要做对应的调整。保存后，重启设备即可，这样我就有了固定的IP地址啦，在也不怕忘掉啦。

另外，顺便把我的NUC7I5BNHL的无线和有线地址都修改了一下，我装的是Ubuntu Server 18.04，它使用**netplan**管理网络，打开对应的配置文件，按格式换一下里边的地址即可，就不多说啦：
>`sudo vi /etc/netplan/50-cloud-init.yaml`



再去改改别的设备，哎，家里的设备太多，我需要打印一个大大的地址对应表贴墙上。😭

# 相关链接

* [手欠要不得](https://steemit.com/cn/@oflyhigh/3pgy1e)

- - -

This page is synchronized from the post: [Banana Pi M3 设置静态IP地址](https://steemit.com/@oflyhigh/banana-pi-m3-ip)
