
---
title: '每天进步一点点：Ubuntu 18.04 使用rc.local'
permlink: ubuntu-18-04-rc-local
catalog: true
toc_nav_num: true
toc: true
date: 2018-09-05 01:57:42
categories:
- cn
tags:
- cn
- linux
- ubuntu
- systemd
- study
thumbnail: https://steemitimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


好久以前，我有一台VPS特别不稳定，机房三天两头重启物理机。原则上重启物理机后机房会自动帮我启动VPS，事实上机房也是这么做的，但是问题是，我运行在VPS上的一些程序在VPS重启后没有自动运行。

![](https://steemitimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png)
(图源 ：[pixabay](https://pixabay.com/))


之所以这样，是因为我对VPS有足够的信任，以往除了我主动发起重启操作，还从未遇到过VPS自己重启呢。于是只好写了几个简单的脚本，然后在添加对应的指令到rc.local，这样一旦VPS重启，我的程序会自动跟着重启。

尽管后来我联系机房要求换了物理机，再没有出现过VPS自动重启的情况，但是觉得有个开机启动的功能也挺好的，也免得每次自己重启VPS后，一个一个的启动程序了。

但是昨晚我在一台VPS上将脚本启动指令加入到rc.local中觉得有些怪异，迷糊糊的感觉好像是新建的的文件，并不是以往编辑时的添加内容。但是也没多想，保存后随手重启了VPS，结果连接程序的时候却死活连接不上。

哪里出了问题呢？按说我程序应该自动启动啊？于是只好重新登陆VPS再次查看，一查发现，我的几个程序根本就没有启动，好诡异。

想想我这个VPS和其它的VPS，差异就在于这个用的是ubuntu 18.04，于是上网了解了一下，据说是因为[Ubuntu 16.10](https://wiki.ubuntu.com/YakketyYak/ReleaseNotes) 后开始使用systemd而不是initd管理用户会话。
>systemd is now used for user sessions. System sessions had already been provided by systemd in previous Ubuntu releases.

其实我不关心它用啥管理会话，我只关心咋能最少改动实现开机启动我的程序。网上有些教程说什么`/lib/systemd/system/rc.local.service` 里边启动文件少了**Install 段**，要手动加上**Install 段**并且要在` /etc/systemd/system`目录下创建软链接等等，看起来就很麻烦。

有没有啥简单的办法呢？其实这个文件的注释部分已经给了我们答案：
>`#  SPDX-License-Identifier: LGPL-2.1+`
>`#`
>`#  This file is part of systemd.`
>`#`
>`#  systemd is free software; you can redistribute it and/or modify it`
>`#  under the terms of the GNU Lesser General Public License as published by`
>`#  the Free Software Foundation; either version 2.1 of the License, or`
>`#  (at your option) any later version.`
>
>`# This unit gets pulled automatically into multi-user.target by`
>`# systemd-rc-local-generator if /etc/rc.local is executable.`

也就是说，只要这个文件存在并且可执行，其它事情是人家系统自动帮我搞定的。

那么这好办了，这也是我之前疏忽的地方，直接执行如下命令就OK了：
`chmod 777 /etc/rc.local`

![](https://cdn.steemitimages.com/DQmPhfz98CJK9ZFG1qNbUsVbtG4GwN9uG6MHCxeTiXeLm1c/image.png)
(图源 ：[pixabay](https://pixabay.com/))

有时候事情真的就是这么简单，偏偏是我们努力把它搞复杂了。😀

# 相关链接

* [SystemdForUpstartUsers ](https://wiki.ubuntu.com/SystemdForUpstartUsers)

- - -

This page is synchronized from the post: [每天进步一点点：Ubuntu 18.04 使用rc.local](https://steemit.com/@oflyhigh/ubuntu-18-04-rc-local)
