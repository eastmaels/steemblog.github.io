
---
title: '笔记：Ubuntu登陆后提示有更新，apt-get upgrade不安装更新的问题'
permlink: ubuntu-apt-get-upgrade
catalog: true
toc_nav_num: true
toc: true
date: 2018-07-26 12:56:09
categories:
- linux
tags:
- linux
- ubuntu
- upgrade
- kernel
- cn
thumbnail: https://cdn.steemitimages.com/DQmfUkDzcGhxNvmRPV3kSw5EiFdq1KjbhSjSQHxNmPMfCWs/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Putty登陆Ubuntu系统，提示说有更新:

>8 packages can be updated.
8 updates are security updates.

![](https://cdn.steemitimages.com/DQmfUkDzcGhxNvmRPV3kSw5EiFdq1KjbhSjSQHxNmPMfCWs/image.png)
(图源 ：[pixabay](https://pixabay.com/))


运行如下指令：
>`sudo apt-get update`
>`sudo apt-get upgrade`

返回类似如下提示信息：
>![](https://cdn.steemitimages.com/DQmRgNbL85fSRBHMqsLobxmHqQ672TnLhKWHKKyGxAMMxCB/image.png)

也就是说，它啥也没干！简单来讲有些依赖性问题`apt-get upgrade`处理不了的时候，它就放弃处理了。比如说需要更新内核补丁啥的，这时候就要请出大杀器

>`sudo apt-get dist-upgrade`

提示信息如下：
>![](https://cdn.steemitimages.com/DQmW3usoJsSFoYTVHM7Q8TBudYHygpfW2q5fsLAg8RDKvKU/image.png)

闭上眼睛选择y，执行更新。完成后，看一眼启动菜单，已经把最新的Kernel设置为默认项了

>![](https://cdn.steemitimages.com/DQmRkRnRNZcTkqdeqVQGpEjzwDWVAwWghu4LDcvn5Lwa7be/image.png)

但是如果我们再次登陆系统，尽管没有新的更新提示，却提示如下内容：
>0 packages can be updated.
>0 updates are security updates.
>*** System restart required ***

也就是说，尽管我们已经安装的最新的Kernel补丁，但是现在系统内存中还是上次启动的Kernel呢，所以需要重启。重启系统，然后再查看一下系统当前内核：

>`uname -a`

返回信息如下：
>Linux xxxx 4.15.0-29-generic #31-Ubuntu SMP Tue Jul 17 15:39:52 UTC 2018 x86_64 x86_64 x86_64 GNU/Linux

>![](https://cdn.steemitimages.com/DQmPMZ7UCtg5DdfBdSQYFGRpos9VmTH8u1mGri7728wHjhE/image.png)

另外，据说可以使用**Canonical Livepatch**来搞定内核升级啥，并且无需重启，不过我懒得去弄啦，偶尔重启一下，感觉有事情做，不然多无聊啊

- - -

This page is synchronized from the post: [笔记：Ubuntu登陆后提示有更新，apt-get upgrade不安装更新的问题](https://steemit.com/@oflyhigh/ubuntu-apt-get-upgrade)
