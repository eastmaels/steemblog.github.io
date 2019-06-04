
---
title: '每天进步一点点: Linux普通用户下程序绑定特权端口(iptables转发)'
permlink: linux-iptables
catalog: true
toc_nav_num: true
toc: true
date: 2018-08-07 13:18:06
categories:
- iptables
tags:
- iptables
- linux
- forward
- root
- cn
thumbnail: https://cdn.steemitimages.com/DQmTLc14P1TcwaggYeTG22TYNHq8cyXXnhpyWR1yuLsnULL/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


我在Linux的普通用户下运行一组程序，想让其中的一个程序监听1024以下的端口，结果运行程序提示权限不足，无法绑定端口。

![](https://cdn.steemitimages.com/DQmTLc14P1TcwaggYeTG22TYNHq8cyXXnhpyWR1yuLsnULL/image.png)
(图源 ：[pixabay](https://pixabay.com/))

难道需要我把这组程序复制到root用户下，以root权限执行？那这样的话，为了安全我特意搞了个普通用户岂不是就没有意义了。

想了想，最简单的办法就是使用iptables转发啦，执行下列指令即可：
>`sudo iptables -t nat -A PREROUTING -p tcp --dport 666 -j REDIRECT --to-ports 12345`

这句的意思是，将666的端口tcp访问，重定向到12345。效果就是如果我们的程序绑定到12345端口，但是使用666端口也可以访问，和绑定666端口***效果相当***。

尽管iptables也需要root权限来执行，但是这类~~酒精~~久经考验的软件安全性要靠谱得多得多。

使用iptables转发，需要先开启相关功能
>`sudo vi /etc/sysctl.conf`

在其中将`net.ipv4.ip_forward = 0`修改为`net.ipv4.ip_forward = 1`，然后执行如下指令使其生效：
>`sudo sysctl -p`

是不是很简单啦？明天再介绍另外一种方法。

- - -

This page is synchronized from the post: [每天进步一点点: Linux普通用户下程序绑定特权端口(iptables转发)](https://steemit.com/@oflyhigh/linux-iptables)
