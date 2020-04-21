
---
title: '每天进步一点点：在内存中replay HIVE/STEEM节点'
permlink: replay-hive-steem
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-04-21 12:14:09
categories:
- cn
tags:
- cn
- linux
- replay
- study
- blog
thumbnail: 'https://cdn.pixabay.com/photo/2014/10/26/14/36/light-bulb-503881_960_720.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


好久以前在试过在内存中replay HIVE/STEEM节点，但是后来每次replay的时候都是主备切换着来，所以并不急，也就一直没用内存模式。

![](https://cdn.pixabay.com/photo/2014/10/26/14/36/light-bulb-503881_960_720.jpg)
(图源 ：[pixabay](https://pixabay.com/))

最近被朋友问及在内存中操作，发现已经忘记的差不多了，于是在电脑上试着弄一遍。

# 准备/dev/shm

在这之前，我们先来了解一下`/dev/shm`，如果你听过ramdisk，那么对这个东西一定不会陌生，简单来讲就是在内存中开辟的磁盘，可以像磁盘一样使用，又能享受内存的超快读写速度。

在内存中Replay节点，首先要保证`/dev/shm`分配的空间大于Replay完成后的`shared_memory.bin`文件的大小，否则有可能出问题。

我的系统上，系统自动为我分配了63G的`/dev/shm`空间，倒是足够了：
>`tmpfs                            63G     0   63G   0% /dev/shm`

如果觉得不够用，可以用以下命令调整：
> `sudo mount -o remount,size=68G /dev/shm`

# 修改shared-file-dir & Replay

在节点配置文件中
将：`shared-file-dir = "blockchain" `
修改为：`shared-file-dir = /dev/shm`

然后使用如下指令Replay区块链：
>`steemd --replay-blockchain`

# 恢复设置

如果服务器/电脑内存不吃紧，那么Replay 完成后，可以让`shared_memory.bin`一直放在`/dev/shm`下运行，否则我们需要把它弄回磁盘上去(ssd）。

大致步骤如下：
* 使用`Ctrl+C`关闭程序
* 复制`/dev/shm/shared_memory.bin` 到`blockchain`目录（根据你自己的设置）
* 修改`shared-file-dir = "blockchain"`


然后，重新启动程序就行。

# /dev/shm的恢复

可以使用之前的命令将`/dev/shm`容量恢复成之前的大小。

当然还有一种方法就是重启系统，将其恢复至默认状态。（***重启之前不要忘记先关闭节点***，否则数据会损坏）。

# 效率提升多少

我使用当前最新的`block_log`文件(北京时间4月21日上午10时），包含区块数为：`42720937`， 全部Replay完，耗时情况如下：
>`Done reindexing, elapsed time: 19888.23536099999910221 sec`

有图有真相：
>![image.png](https://images.hive.blog/DQmZQa8MX5Aitcwwqzten2ZVvjNvnvAmZraiJQCR8uHjQuW/image.png)


折算下来约为5小时30分，而我在硬盘(ssd)上弄，大概需要8-10小时左右(还是之前区块更少一些的时候）。

所以在内存中Replay，对效率还是会有提升的。

# 其它

Replay完成的时间与***程序编译时的参数***、***开启的插件***、***CPU主频***、***硬盘读写速度***、***block_log的新旧(亦即大小）***等都高度相关，本文中使用的时间仅供参考。

- - -

This page is synchronized from the post: ['每天进步一点点：在内存中replay HIVE/STEEM节点'](https://steemit.com/@oflyhigh/replay-hive-steem)
