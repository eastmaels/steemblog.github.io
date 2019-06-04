
---
title: '继续学R：Matrices(矩阵) Part 1，创建矩阵&命名&访问'
permlink: r-matrices-part-1
catalog: true
toc_nav_num: true
toc: true
date: 2018-06-03 01:00:15
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


在之前的文章中我们学习了R的列表，包括[创建列表&命名&访问](https://steemit.com/r/@oflyhigh/r-list-part-1-and-and)以及[列表的操作](https://steemit.com/r/@oflyhigh/r-list-part-2)，哎，有点想放弃了，我为啥要凑热闹学R呢？就是为了一时好奇😔？啥时候烂尾千万不要意外啊。

![](https://cdn.steemitimages.com/DQmULNEof836YCum6PtcjGH8DLRMXySbL31WY8ZPaGThPJG/image.png)

这节我们来了解一下R的Matrices(矩阵) 。我理解的矩阵有点像其它语言中的二维数组，里边只能存相同类型的元素。让我们来实际操作见识一下吧。

# 创建 Matrices(矩阵) 

#### 语法

创建矩阵的语法如下：
>`matrix(data, nrow, ncol, byrow, dimnames)`

其中
* `data`：作为矩阵数据的向量
* `nrow`：指定行数
* `ncol`：指定列数
* `byrow`：向量元素是否按行排列
* `dimnames`：分配给行列的名称

#### 示例

来试一下创建矩阵
>`m<-matrix(c(1:12), nrow=3, byrow=TRUE)`
>`print(m)`

![](https://cdn.steemitimages.com/DQmSeLksPLd5dKzzyKLPEgBYoPiRKyqU8p6ou2akAt1FqrM/image.png)
上述代码为我们创建了一个三行四列的矩阵，元素按行排列

#### 创建并命名行列

关于`dimnames`，这个是给矩阵的行列命名，它必须是一个列表，包含向量组成的行名称以及列名称。列名称可以省略（只命名行），只命名列时行需要指定为NULL。行名称以及列名称的向量数必须和行列数一致。

例如：
>`m<-matrix(c(1:12), nrow=3, byrow=TRUE, dimnames=list(c('a', 'b', 'c')))`
`print(m)`
`m<-matrix(c(1:12), nrow=3, byrow=TRUE, dimnames=list(NULL, c('a', 'b', 'c', 'd')))`
`print(m)`
`m<-matrix(c(1:12), nrow=3, byrow=TRUE, dimnames=list(c('a', 'b', 'c'), c('1', '2', '3', '4')))`
`print(m)`

![](https://cdn.steemitimages.com/DQmcZYAVpDoD3CooAei3HfKD2Kqgzi2PHMv26euMcUAoN4i/image.png)

# 访问矩阵的元素

#### 通过下标访问

不同于其它语言中的二维数组可以用**`a[i][j]`**的方式访问矩阵中的元素只可以用诸如**`a[i, j]`**的方式访问。

以上边我们生成的矩阵为例，欲访问第二行第三个元素，我们需要使用如下代码：
>`m<-matrix(c(1:12), nrow=3, byrow=TRUE, dimnames=list(c('a', 'b', 'c'), c('1', '2', '3', '4')))`
`print(m)`
`print(m[2, 3])`

![](https://cdn.steemitimages.com/DQmUZ98grtDYWD3PZMfWvebeWT7ukRepD4hoMcq7QZNPLDM/image.png)

另外我们可以通过只传入行或者列来读取一整行或者一整列数据，比如说：
>m<-matrix(c(1:12), nrow=3, byrow=TRUE, dimnames=list(c('r1', 'r2', 'r3'), c('c1', 'c2', 'c3', 'c4')))
`print(m)`
`print(m[2, ]) # 读取整个第二行`
`print(m[, 3]) # 读取整个第三列`

![](https://cdn.steemitimages.com/DQmYrGhd7oQW94vWNBQoswj4z2t2uaKRj1N9v67ezZ6emD5/image.png)

#### 按命名访问

[R - Matrices](https://www.tutorialspoint.com/r/r_matrices.htm)一文中并未涉及按命名访问，不过我想既然都给起名了，不能按命名访问，岂不是说过不去？

>`m<-matrix(c(1:12), nrow=3, byrow=TRUE, dimnames=list(c('r1', 'r2', 'r3'), c('c1', 'c2', 'c3', 'c4')))`
`print(m)`
`print(m['r3', 'c2' ]) # 读取第三行第二个元素`
`print(m['r2', ]) # 读取整个第二行`
`print(m[, 'c3']) # 读取整个第三列`

![](https://cdn.steemitimages.com/DQmeNRUHnBvMkpHFVX7rVUGJmfq7TBzMabD1jvK9rwTg3k7/image.png)

----

好了，今天就到这吧，下节继续。

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
* https://www.tutorialspoint.com/r/r_matrices.htm

- - -

This page is synchronized from the post: [继续学R：Matrices(矩阵) Part 1，创建矩阵&命名&访问](https://steemit.com/@oflyhigh/r-matrices-part-1)
