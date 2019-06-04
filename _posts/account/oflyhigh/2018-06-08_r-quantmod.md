
---
title: '继续学R：体验一下quantmod'
permlink: r-quantmod
catalog: true
toc_nav_num: true
toc: true
date: 2018-06-08 01:29:36
categories:
- r
tags:
- r
- tutorial
- quantmod
- cn-programming
- cn
thumbnail: https://cdn.steemitimages.com/DQmY95nVTAxQMsXiNWNgRt98LHmChP6kjqBe8cJMqmgp8dh/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


之前折腾一系列装R的帖子，其实我最初的目的就是升级一下R的版本，使之能安装上**quantmod**，R的量化金融建模与交易框架(Quantitative Financial Modelling & Trading Framework for R)。

![](https://cdn.steemitimages.com/DQmY95nVTAxQMsXiNWNgRt98LHmChP6kjqBe8cJMqmgp8dh/image.png)

其实这玩意是啥，干啥的，我一点也不知道，只是因为有问到了这个东西，我想试一下而已，比如说最起码的安装。这次折腾完新版本的R，来体验一下这个东东吧。

# 安装

安装是超级简单的啦，在R环境中执行以下指令即可：
>`install.packages('quantmod')`

因为我使用的是普通的账户，所以会提示如下信息：
![](https://cdn.steemitimages.com/DQmcVJeiAaSRWwQfJRXQx63jTSSDTw8YuuTs5MjR4cAbpor/image.png)

我推荐使用非安装时使用的账户或者超级权限账户来玩R，这样就会创建一个个人库，一旦我们玩坏了，直接`rm -rf *` 删除，重新来玩即可，还不破坏我的R安装环境。

之后会提示选择CRAN镜像(CRAN mirrors)，这个根据你的地理位置大致选一个能觉得访问挺快的就好，部分截图如下：
![](https://cdn.steemitimages.com/DQmamjUJc51k5u3HtpsUuRYHn2T4iiVJrc8CyXaCBWALcUR/image.png)

敲入镜像编号等安装就行了
![](https://cdn.steemitimages.com/DQmNjbmHtwPiuhcPoha5Wvfh2kNB48JX4ug7RZyVubTDd9f/image.png)
可见它还装入一堆其它依赖包。

因为我使用的是源码编译，所以安装每个包都要编译一些文件，不过相比装R，还是很快的，不出异常的话很快就会完成。

需要注意的是，因为我之前使用过不同方法Build R ，然后还试过安装**quantmod**，在重新安装之前，我需要`rm -rf *`个人目录下的R库，否则会安装失败。

# 加载

安装之后，我们需要首先加载软件包，才能使用其内的各种指令和功能等。

>`library(quantmod)`

![](https://cdn.steemitimages.com/DQmWErPKKkiX7zNCcj7cnskWjUSCD6yrxg22EeAbjAZbWwT/image.png)
加载成功，说明我装的没啥问题。

# 加载数据

加载股票数据
>`getSymbols("AAPL",src="yahoo")`

![](https://cdn.steemitimages.com/DQmdHdeWkms9DQSh1gKqJh4iW8rHhGtkKnoVe3aF99fySjp/image.png)

查看数据(注意不要加双引号)
>`head(AAPL)`
>`tail(AAPL)`

![](https://cdn.steemitimages.com/DQmSiWgLzMsD9qzSEJqfJeokFvBhRzdWyKdvAtz26cNHqbo/image.png)

# 绘图

使用如下指令可以绘制这个股票的时间和价格曲线
>`chartSeries(AAPL, TA=NULL)`

![](https://cdn.steemitimages.com/DQmXXQfVhALYexHrSMMSf9RqPecaGB2QnBdThbH1fL3YD9s/image.png)

>`barChart(AAPL)`

![](https://cdn.steemitimages.com/DQmfG9dEh76VGwQrKZWWqYhzWVAUgRxE83P6mRX1sgqsmHL/image.png)

其它柱状图啥的我就不演示了，因为我根本不知道是啥意思。

# 技术指标
>`chartSeries(AAPL)`
`addMACD()`

![](https://cdn.steemitimages.com/DQmSfUZvsHzVeLwkeJPniBFb4EaxG8ahxSxkir6UCWw3wFh/image.png)
除了知道这是一种技术指标，我就啥也不知道了。😵

>`chartSeries(AAPL)`
`addMACD()`
`addADX()`

![](https://cdn.steemitimages.com/DQmYT6rbjfW79Ah1BjDMtCctcSrpBswRuHWczRTtKZXvDoo/image.png)
除了赞叹一声好看，我还能说啥？

---

好了，就体验到这吧，我是根本玩不来啦😭

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
* [继续学R：重新装R / Installing R from source (2) 又掉坑里了😭](https://steemit.com/r/@oflyhigh/r-r-installing-r-from-source-2)
* [继续学R：重新装R / Installing R from source (3) 再也不装R了](https://steemit.com/r/@oflyhigh/r-r-installing-r-from-source-3-r)
* [Quantitative Financial Modelling & Trading Framework for R](http://www.quantmod.com/)
* [A Guide On R Quantmod Package: How To Get Started?](https://www.quantinsti.com/blog/a-guide-on-r-quantmod-package-how-to-get-started/)

- - -

This page is synchronized from the post: [继续学R：体验一下quantmod](https://steemit.com/@oflyhigh/r-quantmod)
