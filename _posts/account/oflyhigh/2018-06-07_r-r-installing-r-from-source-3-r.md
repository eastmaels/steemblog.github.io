
---
title: '继续学R：重新装R / Installing R from source (3) 再也不装R了'
permlink: r-r-installing-r-from-source-3-r
catalog: true
toc_nav_num: true
toc: true
date: 2018-06-07 01:02:09
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


之前为了解决PNG图片绘制以及--enable-R-shlib带来的性能折扣（其实我并不是很在意这个）问题，我决定[再次重新装R](https://steemit.com/r/@oflyhigh/r-r-installing-r-from-source-2)。然后并没有解决我的问题，感觉好像掉进更深的坑里。

![](https://steemitimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png)
(图源 ：[pixabay](https://pixabay.com/))

然后有些家伙竟然要往坑里填土，着实太坏了。你以为填上土，落井下石就可以打倒O哥？太幼稚！再坑里填上土，浇点水，到了秋天，会长出好多好好O哥的。


哦，其实没用到秋天，用了几近一天的时间，O哥从坑里爬出来啦。

# 问题

之前说到第二次从源码重新装R并没有解决类似如下语句出错的问题：
>`png(file = "barchart.png")`

![](https://cdn.steemitimages.com/DQmcLSYwH7HLd2xbfefkjBYn5yUwdaEBaBd6ZUyKUzZ6Cip/image.png)

看了一下，PNG、X11、cairo状态都是**FALSE**
![](https://cdn.steemitimages.com/DQmTrDbeaEk4cLjasXiP3ob4Y1djkqajNa32qx8a7b591xn/image.png)

我的要求并不高，**`png()`**能正常绘图就行。

# 思路

那么如何解决这个问题呢，我又开始疯狂搜索模式，大致有以下几个思路：
* Linux下装X11 Server 
`sudo apt-get install xorg openbox`
* 不装X，安装 virtual framebuffer X11 server
`apt-get install xvfb xauth xfonts-base`
 `xvfb-run`
* 配置X11转发(Xming等)
`#vi /etc/ssh/sshd_config `
`X11 Forwarding yes `
* 使用cairo

前三种方式我没有去核实，仅供参考，接下来我们来看看第四种方式，使用**cairo**

# cairo

对于我们遇到的问题，很多回答都建议`png()`前加上如下语句：
>`options(bitmapType='cairo')`

原因是，R中`png()`使用默认的基于X11的设备，而我们的X11状态为FALSE，当然就用不起来了，上述语句的意思是让`png()`换用**cairo**。

Cairo是一个2D图形库，支持多种输出设备。可是在回头看我们的输出
![](https://cdn.steemitimages.com/DQmTrDbeaEk4cLjasXiP3ob4Y1djkqajNa32qx8a7b591xn/image.png)
cairo状态也是**FALSE**，这就尴尬了啊。

于是使用如下命令安装**Cairo**
>`sudo apt-get install libcairo2-dev libxt-dev`

然后重做R的编译配置
![](https://cdn.steemitimages.com/DQmb6hcZkNW7PpQqbG8DKSLvggQUbyfW3wTWcYBtomSdVK9/image.png)
注意红框部分，对比一下我上个帖子中的截图：
![](https://cdn.steemitimages.com/DQmRSLeT77ZCvBTfTHe6kzQtJrn8Dtx5efGmmUhJkDhtz6n/image.png)
哈哈，**Cairo**冒出来啦。

# 解决

然后就简单了，重新编译&安装，再来看一下
![](https://cdn.steemitimages.com/DQmYAL7QBTTjLysrM3kLLhQAcmMqgxSoN3neZM8J1rjhXiE/image.png)

来试试上述方案工作不？
>`options(bitmapType='cairo')`
>`png(file = "barchart.png")`

耶，一切正常。但是每次都多敲一行是不是很别扭。[这个文章下边的回答中给出了一个方案](https://stackoverflow.com/questions/17243648/cant-display-png)

>`vi .Rprofile`
`options(bitmapType='cairo')`

关于**.Rprofile**，可以参考[Customizing Startup](https://www.statmethods.net/interface/customizing.html)。

# 总结

好在解决了，不然在坑里的感觉真不好受。让我重新折腾一遍，我不确定我能否正确无误的装R（还好不是X语言），这玩意太折磨人了。

我觉得以后再也不装R了😭

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
* [R Installation and Administration](https://cran.r-project.org/doc/manuals/R-admin.html)
* [Customizing Startup](https://www.statmethods.net/interface/customizing.html)

- - -

This page is synchronized from the post: [继续学R：重新装R / Installing R from source (3) 再也不装R了](https://steemit.com/@oflyhigh/r-r-installing-r-from-source-3-r)
