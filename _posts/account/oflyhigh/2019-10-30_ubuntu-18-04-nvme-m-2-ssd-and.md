
---
title: 'Ubuntu 18.04下NVMe M.2接口SSD的分区、格式化 & 自动挂载'
permlink: ubuntu-18-04-nvme-m-2-ssd-and
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-10-30 01:58:45
categories:
- cn
tags:
- cn
- fdisk
- ssd
- uuid
- mke2fs
thumbnail: 'https://cdn.steemitimages.com/DQmP8WPvbEHmZ1y8FksGpocYuJSwXJVC9SEdHeVLSve3UHw/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


为了追求速度，我给大电脑配了两块硬盘，分别是512GB的Intel 760P NVMe M.2 2280接口SSD以及2TB的Intel 760P NVMe M.2 2280接口SSD。

![](https://cdn.steemitimages.com/DQmP8WPvbEHmZ1y8FksGpocYuJSwXJVC9SEdHeVLSve3UHw/image.png)
(图源 ：[pixabay](https://pixabay.com/))

其中512G的SSD我用作系统盘，在装机的时候系统自动帮我处理了分区/格式化之类的问题，今天来处理一下2T的SSD。

# 列举磁盘

首先，列举一下磁盘
>`sudo fdisk -l`

找到2T的SSD对应的条目
>![](https://cdn.steemitimages.com/DQmdDVYoPP6prS1uoHcbfbuWqvEkgA1zyQfc2rvEgTwY64V/image.png)

可见我的这个2T的磁盘在系统中对应：`/dev/nvme1n1`

# 

接下来就可以用fdisk开搞了：
>`sudo fdisk /dev/nvme1n1`

输入密码后提示如下：
>![](https://cdn.steemitimages.com/DQmYdcrL4RAGbkW7ii7mju5txVmmL9w2itT2H1ZDwUaAYUL/image.png)

如果不熟悉命令的话，可以输入`m`来查看一下帮助
>![](https://cdn.steemitimages.com/DQmUoK6DyEgTiXf14xTBeXLs8Ku7Faqftp9S9izNweBNoNR/image.png)

虽然上述指令挺多的，但是对我而言其实把硬盘分一个主分区就行，所以输入`n`后一路默认即可
>![](https://cdn.steemitimages.com/DQmUW5s3g1nrthuCJKKmAUKoeZMxAtMJAGzXt1g52cWL6SW/image.png)

我们可以使用命令`p`来查看一下分区情况：
>![](https://cdn.steemitimages.com/DQma9w3Xra1Pd2pgm6W3wg1MxfZQ4r65vkjKDcQZFMCpQbK/image.png)

使用命令`w`保存设置：
>![](https://cdn.steemitimages.com/DQmXhEV83bPg9nioQFG7KaGHSk4SbAedfCFiqMQjRC2VeYT/image.png)

# 格式化分区

现在我们已经用`fdisk`命令完成了分区操作，但是在读写数据之前，我们还需要对它进行格式化操作。

执行如下命令即可（千万别弄错分区啊，哈哈哈）
>sudo mkfs.ext4 /dev/nvme1n1p1

格式化完成：
>![](https://cdn.steemitimages.com/DQmax2yb2rrzCCFXXhScbigZKQGUwDmAJcDJcA4cV89isqB/image.png)

其中我们要关注的是：`Filesystem UUID: cb0e8fdc-15b6-4cff-8586-6a745d9fb500`
这个一会要用到。

# 自动挂载

我们还需要将分区挂载到系统上才能访问到，为了避免每次挂载，我们可以使用fstab让分区自动挂载到指令目录。

创建目录：
>`sudo mkdir /work`

在etc/fstab中追加如下内容即可：
>![](https://cdn.steemitimages.com/DQmQPkyc1pK93WfuCkhcQFCZPE2YwkYApRYkrhBeVmf5jq1/image.png)

其中UUID就是我们之前格式化完成后显示的UUID，如果忘记记下来，也可以用如下指令获取：
>`sudo blkid`

现在我们就可以直接使用如下指令来挂载分区了
>`sudo mount /work`

重启后，分区也可以自动挂载啦，自此全部搞定。

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>

- - -

This page is synchronized from the post: ['Ubuntu 18.04下NVMe M.2接口SSD的分区、格式化 & 自动挂载'](https://steemit.com/@oflyhigh/ubuntu-18-04-nvme-m-2-ssd-and)
