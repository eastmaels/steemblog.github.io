
---
title: '继续学R：Vector(向量) Part 2, 多元素向量访问 & 计算长度'
permlink: r-vector-part-2-cny-and
catalog: true
toc_nav_num: true
toc: true
date: 2018-05-30 05:20:39
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


在之前的文章中，我学习了[《多元素向量创建&类型》](https://steemit.com/r/@oflyhigh/r-vector-part-1-cny-and)，学到了用**`c()函数`**、**`冒号操作符(:)`**、**`seq()`**操作符等几种方式创建多元素向量访问，并且测试了多元素向量类型转换的优先级，得出**`raw > logical > integer >numeric >complex > character`**的结论。

![](https://cdn.steemitimages.com/DQmULNEof836YCum6PtcjGH8DLRMXySbL31WY8ZPaGThPJG/image.png)

这节我们来继续学习。

# 多元素向量访问

#### 下标单元素

和很多语言一样，多元素向量中的元素是可以使用下标来访问的，举例如下：
>`v<-c('a', 'b', 'c', 'd', 'e', 'f');`
>`print(v[1])`

![](https://cdn.steemitimages.com/DQmeA2aCfPvAFegxo148sqLL7wCVsr2TKHSPRsovzNifAhG/image.png)

一个有意思的事就这个**下标是从1开始计算的**，这个和C语言以及Python语言中的习惯不太一致。

#### 下标多元素

另外一个有意思的地方是，可以同时访问多个多个元素
>`v<-c('a', 'b', 'c', 'd', 'e', 'f');`
>`print(v[c(1, 2, 3)])`

![](https://cdn.steemitimages.com/DQmc3aXSfL1tLNZstdMaEqRKk2CdzyfGtp8D8y1PptfuaMf/image.png)
是不是有些神奇？

#### 逻辑开关

除了上述两种访问方式外，还有其它访问方式，比如说使用**逻辑类型来控制显示开关**
>`v<-c('a', 'b', 'c', 'd', 'e', 'f');`
>`print(v[c(TRUE, FALSE, TRUE, FALSE, TRUE, FALSE)])`

![](https://cdn.steemitimages.com/DQmQVuHARhTvXMNyfnpgi3NtLcFKwmdpxJScLApdTa2WK4n/image.png)
写到这里不禁有一个疑问，**如果传递的开关量比元素个数少，剩下的该如何显示？**经过测试，我发现找不出来啥规律，行为诡异啊。所以如果用到了，还是老老实实传递相同个数的开关量吧，要么等以后找到规律再说。

#### 下标 0
在[R Tutorial](https://www.tutorialspoint.com/r/index.htm)的[R - Vectors](https://www.tutorialspoint.com/r/r_vectors.htm)中，有这样一段示例：
>`# Accessing vector elements using 0/1 indexing.`
>`t <- c("Sun","Mon","Tue","Wed","Thurs","Fri","Sat")`
>`y <- t[c(0,0,0,0,0,0,1)]`
>`print(y)`

乍一看上边的示例，还以为是可以用0/1来做开关和TRUE/FALSE一样，实际上0/1并非开关量，还是下标，只是**对于下标0而言，相当于空值**。所以上述代码等价于：
>`t <- c("Sun","Mon","Tue","Wed","Thurs","Fri","Sat")`
>`y <- t[c(1)]`
>`print(y)`
![](https://cdn.steemitimages.com/DQmRTtGcrb4V6cGDjYAjY3zcfTzWRFQMGC7iyP923SueFiQ/image.png)

#### 下标负数

还有一种方式就是下标传入负数
>`v<-c('a', 'b', 'c', 'd', 'e', 'f');`
>`print(v[c(-2, -4)])`

![](https://cdn.steemitimages.com/DQmRURrzyDjF4sP8kRCLXUG45Bezu2usa5UsLG86BMf8wrh/image.png)
由此可见，负数相当于关掉对应位置的元素。

# 多元素向量长度

顺便考察了一下多元素向量长度如何计算，发现了一个**`length()`**函数，示例如下：

>`v<-c('a', 'b', 'c', 'd', 'e', 'f');`
` print(length(v))`

![](https://cdn.steemitimages.com/DQmTk9L5wv4VGXPnhKRydUK3Lu7egvsiq1Ca5Xuto95MEzU/image.png)

好了，今天就水到这里了。

# 相关链接
* [学R：准备工作](https://steemit.com/r/@oflyhigh/r)
* [继续学R：安装软件包](https://steemit.com/r/@oflyhigh/5m2s1h-r)
* [继续学R：另一款在线R环境](https://steemit.com/r/@oflyhigh/r-r)
* [继续学R：R的6大基本数据类型(原子向量)](https://steemit.com/r/@oflyhigh/r-r-6)
* [继续学R：Vector(向量)  Part 1, 多元素向量创建&类型](https://steemit.com/r/@oflyhigh/r-vector-part-1-cny-and)
* https://www.tutorialspoint.com/r/r_vectors.htm

- - -

This page is synchronized from the post: [继续学R：Vector(向量) Part 2, 多元素向量访问 & 计算长度](https://steemit.com/@oflyhigh/r-vector-part-2-cny-and)
