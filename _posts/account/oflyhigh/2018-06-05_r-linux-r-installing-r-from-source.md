
---
title: '继续学R：在Linux下源码方式装R / Installing R from source'
permlink: r-linux-r-installing-r-from-source
catalog: true
toc_nav_num: true
toc: true
date: 2018-06-05 01:39:21
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


之前为了体验一下R，随便用**`sudo apt-get install r-base r-base-dev`**装了个R，合计反正就是体验一下，没必要像正规军一样搞得很复杂。然后今天发现一个真理，就是**你以前偷的的懒，都会在以后找回来的**。

![](https://steemitimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png)
(图源 ：[pixabay](https://pixabay.com/))


话说昨天别人问我个小问题，用到**`quantmod`**这个东东，甭管它是啥，先装着试试呗。
>`install.packages('quantmod')`

结果想象中的一路yes，顺利安装被没有出现，而是我给我个提示：
>`package 'quantmod' is not available (for R version 3.1.1)`

原本以为我无往不利的搜索大法应该很快解决这个问题，结果这次找了N多网页却没有找到答案，满头雾水的我最后终于意识到，是我的R的版本太旧了😭。好吧，先不管这个**`quantmod`**，升级版本先，想用最新版本的最好方式当然是从源码安装了，说干就干，源码安装走起。

# 准备工作

#### 更新系统

首先更新一下系统

>`sudo apt-get update`
>`sudo apt-get upgrade`

无论干点啥，先更新一下，身体倍棒，吃嘛嘛香。

#### 创建目标目录

>`sudo mkdir /opt/R`
>`sudo chmod 777 /opt/R`

我瞎建个目录安装，要是没啥问题的话，其实可以使用默认目录的。


#### 下载源码

去https://www.r-project.org/ 找一下最新的源码，我找到的最新的是这个：
>[R version 3.5.0 (Joy in Playing)](https://cran.r-project.org/src/base/R-3) has been released on 2018-04-23.

点进去之后，找到下载链接：https://cran.r-project.org/src/base/R-3/R-3.5.0.tar.gz)，在Linux系统下执行如下命令，将其下载到本地，解压，并进入目录
>`wget https://cran.r-project.org/src/base/R-3/R-3.5.0.tar.gz`
>`tar xzvf R-3.5.0.tar.gz`
>`cd R-3.5.0`

#### 安装必要编译工具

其实我也不知道应该按啥，因为不知道系统都有啥，缺啥按啥吧。 因为我的系统上曾经按过不少东西，所以没提示缺啥😳。

# 配置 R

配置我参考的[Installing-R-under-Unix_002dalikes](https://cran.r-project.org/doc/manuals/r-release/R-admin.html#Installing-R-under-Unix_002dalikes)，可以使用如下命令查看详细帮助：
>`./configure --help`

一切默认的话，执行如下命令即可
>`./configure`

我手欠，先是执行这个配置命令：
>`./configure  --enable-R-shlib  --prefix=/opt/R`

其中：
* `--enable-R-shlib` 
将R编译成动态库(libR.so)，然后R的执行程序与之链接。加这个纯属我手欠，因为我没有想在其它语言中集成R，并且**设置这个选项会影响性能**，不过我如实记载我的操作，就放这了。
* `--prefix=/opt/R` 
这个指定安装目录，否则会安到默认的目录中。


等半天后提示我系统没有X11，我懒得装X，直接禁用吧（这块有坑，以后再说）
>`./configure  --enable-R-shlib  --with-x=no --prefix=/opt/R`

# 编译  R

配置成功后，执行如下命令进行编译：
>`make`

结果等半天后出现如下错误信息：
>configuring Java ...  *** Cannot find any Java interpreter *** Please make sure 'java' is on your PATH or set JAVA_HOME correspondingly。

晕，这难道不应该在配置阶段报错吗？反正我也不用什么JAVA(估计和我启用`--enable-R-shlib`有关)，重新配置：
>`./configure  --enable-R-shlib  --with-x=no --disable-java --prefix=/opt/R`

再次编译，成功！然后执行安装命令：
>`make install`

# 收尾

测试一下，启动R：
>`/opt/R/bin/R`

![](https://cdn.steemitimages.com/DQmerGXgKU1Jg9ixVKa731Pqy6WFgw9GjY1nGj99REudTLJ/image.png)
已经是最新版本喽。

创建软链接，方便访问
>`cd /usr/bin`
>`sudo ln -s /opt/R/bin/R R`
>`sudo ln -s /opt/R/bin/Rscript Rscript`

# 补充说明

R的编译和运行需要Fortran编译器以及运行时库支持，我后来不小心卸载了，也运行不起来，也配置和编译不了了。

运行R提示：
>/opt/R/lib/R/bin/exec/R: error while loading shared libraries: libgfortran.so.3: cannot open shared object file: No such file or directory

重新配置则提示：
>configure: error: No F77 compiler found

重新安装Fortran编译器，解决问题
>`sudo apt-get install gfortran`

----

总算把R搞到最新版本啦，否则拿明朝万历年间的R来学习，是有点落伍呢。不过这个不完美，有坑，下篇文章再说咋个坑法吧。


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
* [Installing-R-under-Unix_002dalikes](https://cran.r-project.org/doc/manuals/r-release/R-admin.html#Installing-R-under-Unix_002dalikes)

- - -

This page is synchronized from the post: [继续学R：在Linux下源码方式装R / Installing R from source](https://steemit.com/@oflyhigh/r-linux-r-installing-r-from-source)
