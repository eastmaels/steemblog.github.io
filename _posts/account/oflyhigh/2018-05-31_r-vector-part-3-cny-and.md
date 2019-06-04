
---
title: '继续学R：Vector(向量) Part 3, 多元素向量的操作(算术操作&排序)'
permlink: r-vector-part-3-cny-and
catalog: true
toc_nav_num: true
toc: true
date: 2018-05-31 02:41:51
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


在之前的两篇文章中，我们学习了[多元素向量的创建](https://steemit.com/r/@oflyhigh/r-vector-part-1-cny-and)以及[多元素向量的访问](https://steemit.com/r/@oflyhigh/r-vector-part-2-cny-and)，通过这两篇文章我们已经对多元素向量有了个基本的了解，接下来我们一起来看看多元素向量都如何操作。

![](https://cdn.steemitimages.com/DQmULNEof836YCum6PtcjGH8DLRMXySbL31WY8ZPaGThPJG/image.png)

# 算术操作

相同长度的两组多元素向量，可以进行**加、减、乘、除**操作。
 >`v1<-c(1,2,3,4)`
`v2<-c(5,6,7,8)`
`print(v1+v2); print(v1-v2); print(v1*v2); print(v1/v2);`

![](https://cdn.steemitimages.com/DQmSu3vrA3U8qg6k4YoLD2iT27QCXqJKdFfogni8rYUpdhh/image.png)
通过结果我们不难看出，加、减、乘、除就是将对应位置的元素进行相应的操作。

到这不难想出几个问题：
* 是否所有类型多元素向量都支持如此操作？
* 不同类型的多元素向量是否可以如此操作？
* 不同长度的多元素向量是否可以如此操作？

经过测试，问题1的答案是并非所有类型多元素向量都支持算术操作，数字类型的才可以; 问题2的答案是不同数字类型的之间可以操作。

对于这两个问题其实不难得出答案，因为既然算术操作就是将对应位置的元素进行操作，那么只有两个原子向量之间支持对应的算术操作才可以。比如在**Python**中我们可以使用：
>`print('a'+'b')`

![](https://cdn.steemitimages.com/DQmP4oSr8My3NjUgv9hH2nL5MAwpwBtygeyHJLKBqzEdySj/image.png)

而在R中，我试着执行：
>`print('a'+'b')`

![](https://cdn.steemitimages.com/DQmUZj4A7r49SnL42nV8aniicYiE3pFrJ7wHZBrdfVedPYV/image.png)
所以在R中，对两个字符型数据进行加运算是行不通的，当然对于字符型多元素向量更是行不通喽。

# 向量元素循环利用（Vector Element Recycling）

在算术操作中，我们提出了三个问题，但是解决了两个，那么剩下的问题呢？这里我们就来说一下不同长度的多元素向量进行算术操作时如何处理，比如这段代码：

> `v1<-c(1,2,3,4)`
`v2<-c(5,6)`
`print(v1+v2)`

![](https://cdn.steemitimages.com/DQmTrA46MDachu2BLhYFvBBmNzWa4RS1vt78aoDF2BA9kuX/image.png)
答案是R把v2的元素循环利用，扩展到与v1相同长度。

很多中文教程把这个翻译成**向量元素回收/Vector Element Recycling**，但是我个人认为**向量元素循环利用**更贴切，不过翻译成啥无所谓了，总之就是这么回事啦。

但是问题又来了，以以下代码为例：
> `v1<-c(1,2,3,4)`
`v2<-c(5,6,7)`
`print(v1+v2)`

这时候该如何把v2扩展成和v1相同长度呢？扩展成`5,6,7,5,6,7`又比v1长了，难道再去扩展v1？想想就很纠结。还是直接试一下吧：
![](https://cdn.steemitimages.com/DQmP7Sgx3ZUT5cogH77rhJBH8Thh9nu3xjy3HrQ2SyxL6wn/image.png)
答案是把短的扩展到和长的相同长度为止，然后给出个警告⚠

# 多元素向量排序

给多元素向量排序是很简单的事情，直接调用**`sort()`**函数即可，例如：

>`v1<-c(1,2,3,4,-10,200)`
`print(sort(v1))`

![](https://cdn.steemitimages.com/DQmc1vxDGqAWKhZsSp5XG6rKcuvuWpnrvwcTsVFCnMQVAsg/image.png)

当然了，还支持排序方向（递增，递减）
>`v1<-c(1,2,3,4,-10,200)`
`print(sort(v1, decreasing = TRUE))`

![](https://cdn.steemitimages.com/DQmXvJvjX9eNKo5PeyNyDc5wjPNpRVKpvZvzS3eWLBWBCqW/image.png)

除了数字类型，还支持字符以及其它类型，这里就不一一演示啦，感兴趣的朋友自己试试吧。

---

至此，多元素向量就了解的差不多了，下节争取接触新内容啦。今天就水到这里啦。

# 相关链接
* [学R：准备工作](https://steemit.com/r/@oflyhigh/r)
* [继续学R：安装软件包](https://steemit.com/r/@oflyhigh/5m2s1h-r)
* [继续学R：另一款在线R环境](https://steemit.com/r/@oflyhigh/r-r)
* [继续学R：R的6大基本数据类型(原子向量)](https://steemit.com/r/@oflyhigh/r-r-6)
* [继续学R：Vector(向量)  Part 1, 多元素向量创建&类型](https://steemit.com/r/@oflyhigh/r-vector-part-1-cny-and)
* [继续学R：Vector(向量) Part 2, 多元素向量访问 & 计算长度](https://steemit.com/r/@oflyhigh/r-vector-part-2-cny-and)
* https://www.tutorialspoint.com/r/r_vectors.htm

- - -

This page is synchronized from the post: [继续学R：Vector(向量) Part 3, 多元素向量的操作(算术操作&排序)](https://steemit.com/@oflyhigh/r-vector-part-3-cny-and)
