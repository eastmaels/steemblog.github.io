
---
title: '继续学R：重新装R / Installing R from source (2) 又掉坑里了😭'
permlink: r-r-installing-r-from-source-2
catalog: true
toc_nav_num: true
toc: true
date: 2018-06-06 04:36:09
categories:
- r
tags:
- r
- tutorial
- programming
- cn-programming
- cn
thumbnail: https://steemitimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


上篇文章写到在Linux系统下安装R的开发环境，尽管最终R运行了起来，但是其实有很多坑。

其中一个坑是由于**`--enable-R-shlib`**带来的性能折扣，而其实我并不需要或者至少目前不需要R的动态库(libR.so)，所以加这个选项纯属多此一举。

另外一个坑是X11报错时我直接加上了**`--with-x=no`**配置选项，但是在我使用绘图功能时，比如**`png(file = "barchart.png")`**会提示如下错误信息：
>Error in png(file = "barchart.png") : X11 is not available

![](https://steemitimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png)
(图源 ：[pixabay](https://pixabay.com/))

这真是应了我前文中的一句话：**你以前偷的懒，都会在以后找回来的。**既然如此，那么就重新装R，尝试避免这些问题吧。

# 准备工作和其它

这部分和之前的文章没啥区别，参考[继续学R：在Linux下源码方式装R / Installing R from source](https://steemit.com/r/@oflyhigh/r-linux-r-installing-r-from-source)，对应部分吧。

无非是：
* 更新系统
* 下载软件
* 安装编译工具

因为这些我都做过啦，无需再做一遍。由于我是重装，所以可以使用个新目录，这样就可以对比两个安装的差异了，不过我懒得比啦，直接清空原来的内容好了。

>`rm -rf /opt/R/*`
(或者用`make uninstall`)

如果没有装过Fortran编译器，需要记得装上`gfortran`
>`sudo apt-get install gfortran`

因为我们主要遇到的是X11的问题，所以直接装上对应的软件包吧。在[R Installation and Administration](https://cran.r-project.org/doc/manuals/R-admin.html)的[Essential-programs-and-libraries](https://cran.r-project.org/doc/manuals/R-admin.html#Essential-programs-and-libraries)章节中，有如下内容：
>Unless you do not want to view graphs on-screen (or use macOS) you need ‘X11’ installed, including its headers and client libraries. For recent Fedora/RedHat distributions it means (at least) RPMs ‘libX11’, ‘libX11-devel’, ‘libXt’ and ‘libXt-devel’. On Debian/Ubuntu we recommend the meta-package ‘xorg-dev’. If you really do not want these you will need to explicitly configure R without X11, using --with-x=no. 

我试着在我的系统下使用如下命令：
>`sudo apt-get install libx11-dev`

虽然也可以安装成功libx11-dev，但是配置的时候还是提示：
>configure: error: --with-x=yes (default) and X11 headers/libs are not available

所以在我的系统下(Raspbian)使用以下命令才是正解
>`sudo apt-get install xorg-dev`

# 配置R编译选项

执行如下命令，进行编译选项配置
>`./configure --disable-java --prefix=/opt/R`

原以为会一路畅通，结果却报如下错误：
>checking whether PCRE support suffices... configure: error: pcre >= 8.20 library and headers are required

研究和尝试了半天，发现以下命令可以解决这个问题。
>`sudo apt-get install libpcrel3-dev`

重新进行编译选项配置
>`./configure --disable-java --prefix=/opt/R`

一切顺畅，结果如下：
![](https://cdn.steemitimages.com/DQmRYBrqkRXxbShdVP81JQunDGLe1sXfifxLUPjaBzmoGcC/image.png)

# 编译 & 安装

剩下的就简单喽，执行如下命令进行编译和安装

>`make`
>`make install`

**注意：**
R生成的Makefile可能有问题，make完了，执行安装时，会出如下错误（尽管之前我已经`make clean`了)
>/usr/bin/install: cannot stat ‘NEWS.pdf’: No such file or directory

解决的方法是，删除原来的源码目录，重新解压源码包，重新进行整个流程。

设置软链接（我的软链接还在，可以略过这步）

>`cd /usr/bin`
`sudo ln -s /opt/R/bin/R R`
`sudo ln -s /opt/R/bin/Rscript Rscript`

安装成功后让我们测试一下：

>`R`

![](https://cdn.steemitimages.com/DQmYoknSYK5fG7FKYPQMDV6upEcXMBsaZq166KRk3AHfaQN/image.png)
一切正常。

然后试一下：
>`png(file = "barchart.png")`

扎心了
![](https://cdn.steemitimages.com/DQmcLSYwH7HLd2xbfefkjBYn5yUwdaEBaBd6ZUyKUzZ6Cip/image.png)

继续
`capabilities()`
![](https://cdn.steemitimages.com/DQmTrDbeaEk4cLjasXiP3ob4Y1djkqajNa32qx8a7b591xn/image.png)

😭看来我没法从坑里爬出来了？谁来拉我一把？

# 相关链接
* [学R：准备工作](https://steemit.com/r/@oflyhigh/r)
* [继续学R：安装软件包](https://steemit.com/r/@oflyhigh/5m2s1h-r)
* [继续学R：另一款在线R环境](https://steemit.com/r/@oflyhigh/r-r)
* [继续学R：R的6大基本数据类型(原子向量)](https://steemit.com/r/@oflyhigh/r-r-6)
* [继续学R：Vector(向量)  Part 1, 多元素向量创建&类型](https://steemit.com/r/@oflyhigh/r-vector-part-1-cny-and)
* [继续学R：Vector(向量) Part 2, 多元素向量访问 & 计算长度](https://steemit.com/r/@oflyhigh/r-vector-part-2-cny-and)
* [继续学R：Vector(向量) Part 3, 多元素向量的操作(算术操作&排序)](https://steemit.com/r/@oflyhigh/r-vector-part-3-cny-and)
* [继续学R：List(列表) Part 1, 创建列表&命名&访问](https://steemit.com/r/@oflyhigh/r-list-part-1-and-and)
* [继续学R：List(列表) Part 2, 列表的操作](https://steemit.com/r/@oflyhigh/r-list-part-2)
* [继续学R：Matrices(矩阵) Part 1，创建矩阵&命名&访问](https://steemit.com/r/@oflyhigh/r-matrices-part-1)
* [继续学R：Matrices(矩阵) Part 2，矩阵访问方式&矩阵操作&进阶操作](https://steemit.com/r/@oflyhigh/r-matrices-part-2-and-and)
* [继续学R：在Linux下源码方式装R / Installing R from source](https://steemit.com/r/@oflyhigh/r-linux-r-installing-r-from-source)
* [R Installation and Administration](https://cran.r-project.org/doc/manuals/R-admin.html)

- - -

This page is synchronized from the post: [继续学R：重新装R / Installing R from source (2) 又掉坑里了😭](https://steemit.com/@oflyhigh/r-r-installing-r-from-source-2)
