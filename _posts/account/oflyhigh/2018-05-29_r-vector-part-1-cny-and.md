
---
title: '继续学R：Vector(向量)  Part 1, 多元素向量创建&类型'
permlink: r-vector-part-1-cny-and
catalog: true
toc_nav_num: true
toc: true
date: 2018-05-29 02:16:12
categories:
- r
tags:
- r
- tutorial
- programming
- cn-programming
- cn
thumbnail: https://cdn.steemitimages.com/DQmULNEof836YCum6PtcjGH8DLRMXySbL31WY8ZPaGThPJG/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在之前的文章中，学习了[《R的6大基本数据类型(原子向量)》](https://steemit.com/r/@oflyhigh/r-r-6)，既然说到基本类型，那么肯定就有复杂类型喽，今天我们要说的就是Vector(向量)，咦，怎么又是Vector(向量)？

![](https://cdn.steemitimages.com/DQmULNEof836YCum6PtcjGH8DLRMXySbL31WY8ZPaGThPJG/image.png)

别急，之前的文章中介绍的向量是最最基本的向量，今天的介绍的向量是指原子向量和原子向量组成的向量(多元素向量）。

# 多元素向量创建

原子向量[之前的文章](https://steemit.com/r/@oflyhigh/r-r-6)介绍过，我们就不用多说了，今天来学一下多元是向量，看字面的意思就很好理解了，就是多个元素组成的向量呗。

#### 创建：使用**`c()`**函数

创建多元素向量有好多方法，最常用的就是使用**`c()`**这个函数，例如：

>`v<-c(1, 2, 3)`
`print(v)`
`print(class(v))`

上述代码输出以下结果：
![](https://cdn.steemitimages.com/DQmW6XbPcNbkrg6aJgEX7qYFt26xeX2eFvy7XUsiZ1zt7P5/image.png)

从上述代码以及对应结果来看，我们知道了**多元素向量的类型取决于元素的类型**，和我预想的打印出Vertor大相径庭，看来还是要多尝试呀。

#### 创建：使用**`冒号操作符(:)`**

除了使用**`c()`**函数，我们还可以对数字类型(numeric/integer/complex)使用**`冒号操作符(:)`**，例如:
>`v<-1:5; print(v); print(class(v));`
`v<-1.2:5.9; print(v); print(class(v));`
`v<-1L:5L; print(v); print(class(v));`
`v<-1:"5"; print(v); print(class(v));`
`v<-1:5+2i; print(v); print(class(v));`

输出如下：
![](https://cdn.steemitimages.com/DQmaiYPPGJXcSbJrAE2fVEXWKsma8vMT97iZD3zjV1bpEg7/image.png)
注意其中的类型变化，挺有意思的

#### 创建：使用**`seq()操作符`**

别问我为啥**`c()`**是函数，而**`seq()`**叫操作符，我也迷糊，不过这不影响我们使用。

使用**`seq()操作符`**创建多元素向量的列子如下：
>`v<-seq(5, 9, by = 0.4); print(v);`

![](https://cdn.steemitimages.com/DQmWtoyrfS2BdR2ZG9LfzV9QvLBcRowgsWKGnzWn7YqbNM4/image.png)

# 多元素向量类型

再回到使用**`c()`**函数创建多元素向量的例子，我们在那得出结论：**多元素向量的类型取决于元素的类型**，那么问题来了？如果**`c()`**函数中传入的是不同的类型，那么最终多元素向量的类型是啥？例如：

>`v<-c(1L, 1.8); print(v); print(class(v));`

执行上述代码，结果如下：
![](https://cdn.steemitimages.com/DQma7KSwSjpLVXa4VuA6eKpMt1sKpgRyjjFK3KC9bz5A4Bw/image.png)
也就是说，**对于不同类型的元素，最终会被转换成相同的类型**。

那么问题又来了，转换是按什么规律转换的呢？经过我不懈努力，终于找出如下规律（转换优先级排序）：
>**`raw > logical > integer >numeric >complex > character`**

举例俩简单例子：
>`v= c(TRUE, charToRaw("Hello")); print(v); print(class(v));`
`v= c(2, charToRaw("Hello")); print(v); print(class(v));`

![](https://cdn.steemitimages.com/DQmQg1nwZXW1SdAY4zR7KDigZSdgDbz7149EN8atB3DiJZD/image.png)

----

好了，今天就到这里了，学太多了，怕消化不良。

# 相关链接
* [学R：准备工作](https://steemit.com/r/@oflyhigh/r)
* [继续学R：安装软件包](https://steemit.com/r/@oflyhigh/5m2s1h-r)
* [继续学R：另一款在线R环境](https://steemit.com/r/@oflyhigh/r-r)
* [继续学R：R的6大基本数据类型(原子向量)](https://steemit.com/r/@oflyhigh/r-r-6)
* https://www.tutorialspoint.com/r/r_vectors.htm

- - -

This page is synchronized from the post: [继续学R：Vector(向量)  Part 1, 多元素向量创建&类型](https://steemit.com/@oflyhigh/r-vector-part-1-cny-and)
