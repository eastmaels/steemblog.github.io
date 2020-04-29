
---
title: 'Amazon EC2动态扩展挂载磁盘(Volume)空间'
permlink: amazon-ec2-volume
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-04-29 12:54:27
categories:
- cn
tags:
- cn
- linux
- amazon
- disk
- volume
- ebs
- ec2
thumbnail: 'https://cdn.pixabay.com/photo/2019/02/17/14/48/harddisk-4002369_960_720.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


我有一个Amazon的EC2实例最近磁盘空间告急，眼看着就要满员了，这可让我急坏了。不过想着Amazon这么先进的云设施，一定会支持动态扩容吧，进面板看了一下，还真就支持，那就来实际操作一下喽。

![](https://cdn.pixabay.com/photo/2019/02/17/14/48/harddisk-4002369_960_720.jpg)
(图源 ：[pixabay](https://pixabay.com/))


# 准备工作

在这之前我们先在面板里看看我挂载的云盘(Volume)类型和大小：
>![image.png](https://images.hive.blog/DQmNcPNDAabcBzYgg5HUTKfuvQcBsZ1DFdqaL5x6F39To9x/image.png)

除了在面板里查看外，在系统中我用`sudo fdisk -l`也看了一下
>![image.png](https://images.hive.blog/DQmeysPwtsGxSNuW9Z8ZgdBgzZGCfT3DeJckwvC9fK1vaDZ/image.png)

没啥其它额外的工作要做，不过我还是顺便升级了一下系统软件😀。

# 调整卷空间

接下来我们就可以在面板中直接调整卷大小了，其实很是简单粗暴。

直接选中卷，然后在菜单中选择***`Modify Volume`***
>![image.png](https://images.hive.blog/DQmamL9vvJjEEyzbm4XFh7Hgzeizx1HZS5xppJQ7BskCFqZ/image.png)

点进去后会出现类似如下界面：
>![image.png](https://images.hive.blog/DQmWsicDrK4QfKk7uWKvzifcLTYoqJP7riaekvfgG8FpB1S/image.png)

直接指定新的空间大小(IOPS也会随之动态增加)
>![image.png](https://images.hive.blog/DQmdxc8g3GiXrUdhAwWYpx7HWUushTUZj77YdkjMCbD9pFw/image.png)

选择***`Modify`***按钮，会出现如下提示：
>![image.png](https://images.hive.blog/DQmczAdfKJnRxbUTpwvZJ5KBCqB1PH7Bo2NwAhnaTGiiMvY/image.png)

其中最主要的信息莫过于调整卷大小后，还要扩展操作系统的文件系统：
>You may need to extend the OS file system on the volume to use any newly-allocated space.

按下***`Yes`***按钮确认，瞬间调整成功。
>![image.png](https://images.hive.blog/DQmSQq9eFWvAD3esMkgCo79sBZrM2i5bsoiGRp67reNFVXN/image.png)

# 拓展分区大小

调整成功后，我们可以在面板中检查卷大小：
>![image.png](https://images.hive.blog/DQmbk9AnPKDtHNHb41WZcENRSwoacz2ZQEQrd6arHGL9TrV/image.png)

同样可以在操作系统中检查，不过你会发现虽然卷(磁盘)大小改变了，但是***分区大小并没有改变***
>![image.png](https://images.hive.blog/DQmf7Xmk436vm5U11i1uTMYy6eWXxSbtAWWSngSgPWSZT15/image.png)

要让新增的空间可以被使用，我们首先需要扩展分区大小，确定分区后，执行如下命令即可：
>`sudo growpart /dev/nvme0n1 1`

其中`/dev/nvme0n1`为设备(磁盘/卷)，`1`为分区编号(第一个分区)，执行命令后会出现如下提示：
>CHANGED: partition=1 start=2048 old: size=2516580319 end=2516582367 new: size=3145725919,end=3145727967

现在再来检查分区空间，发现分区空间已经成功变大了：
>![image.png](https://images.hive.blog/DQmczbGhHFjg3AydeWTQ2askXmEvimUjhHheqqZirNAeTxb/image.png)

# 调整文件系统

使用如下命令查看我们的文件系统：
>`df -lh`

我们会发现尽管我们扩展的磁盘/卷空间，调整了分区大小，但是对应的文件系统显示的空间还是原来那么大。

为了让文件系统也跟上变化，我们需要执行如下命令：
>`sudo resize2fs /dev/nvme0n1p1`

执行上述命令后会出现类似如下提示，代表我们调整成功：
>![image.png](https://images.hive.blog/DQmYPHgS47dTfDFErFa9K4qgvgaacgf68k6BrMQ8ZsZKLtB/image.png)

再使用`df -lh`查看文件系统，就会发现对应的空间已经调整啦，至此扩容成功！

# 总结

尽管又是截图又是文字写了一大篇，不过其实概况起来就是如下几个步骤：
* 面板中调整对应Volume的空间大小
* 系统中拓展分区大小(`growpart`)
* 系统中调整文件系统(`resize2fs`)

不过简单归简单，操作的时候一定要谨慎，尤其是重要数据的情况，一旦不小心搞崩溃，那就欲哭无泪了。

# 相关链接

* [Amazon EBS Elastic Volumes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modify-volume.html)
* [Extending a Linux file system after resizing a volume](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/requesting-ebs-volume-modifications.html)

- - -

This page is synchronized from the post: ['Amazon EC2动态扩展挂载磁盘(Volume)空间'](https://steemit.com/@oflyhigh/amazon-ec2-volume)
