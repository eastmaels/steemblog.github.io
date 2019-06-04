
---
title: '继续学R：Matrices(矩阵) Part 2，矩阵访问方式&矩阵操作&进阶操作'
permlink: r-matrices-part-2-and-and
catalog: true
toc_nav_num: true
toc: true
date: 2018-06-04 00:52:00
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


在[之前的文章](https://steemit.com/r/@oflyhigh/r-matrices-part-1)中，我们学习了矩阵的创建、命名行列，以及按下标以及按命名访问。

![](https://cdn.steemitimages.com/DQmULNEof836YCum6PtcjGH8DLRMXySbL31WY8ZPaGThPJG/image.png)

# 访问方式的深入探索

尽管我们知道了矩阵的按下标和命名方式访问，但是记得学习列表的时候，访问方式才叫丰富呢！比如说：
>`mylist<-list('a', 5.2, c(7, 8, 9), 3+4i)`
`print(mylist[2])`
`print(mylist[c(1,2)])`
`print(mylist[c(TRUE, FALSE, TRUE, FALSE)])`
`print(mylist[c(-1,-2)])`

那么不难由此疑问，矩阵是否可以如此操作呢？来试试看吧：
>`m<-matrix(c(1:12), nrow=3, byrow=TRUE, dimnames=list(c('r1', 'r2', 'r3'), c('c1', 'c2', 'c3', 'c4')))`
`print(m)`
`print(m[1, 2])  # 访问第一行第二列上的元素`
`print(m[c(1,2),c(1,2)])  # 访问第一行和第二行上第一列和第二列元素`
`print(m[c(TRUE, TRUE, FALSE),c(TRUE, TRUE, FALSE, TRUE)]) # 关闭第三行，关闭第三列，显示其余内容`
`print(m[-3, -3])  # 关闭第三行，关闭第三列，显示其余内容`

![](https://cdn.steemitimages.com/DQmdUqKeL9Nq8ZcDz6H9yrsaGQpHnc8WQvk8SXKfh7atQWb/image.png)

# 矩阵的操作

[R - Matrices](https://www.tutorialspoint.com/r/r_matrices.htm)一文中，介绍了Matrices(矩阵) 的加减乘除（`+、-、x、/`)运算，也就是说四则运算。[R - Matrices](https://www.tutorialspoint.com/r/r_matrices.htm)说进行这些运算的两个矩阵必须具有相同行数和列数
>The dimensions (number of rows and columns) should be same for the matrices involved in the operation.

如果行数列数不一致，进行操作时会提示如下信息：
>Error in m1 + m2 : non-conformable arrays

好了，我们来规规矩矩的操作一下，示例如下：

>`m1<-matrix(c(1:12), nrow=3, byrow=TRUE)`
`m2<-matrix(c(1:12), nrow=3, byrow=FALSE)`
`print(m1)`
`print(m2)`
`print(m1+m2)`
`print(m1-m2)`
`print(m1*m2)`
`print(m1/m2)`

![](https://cdn.steemitimages.com/DQmUcP9ZaGfNxxdxhHZ8pD2gJivn2ABdvGozLdGHzymGchn/image.png)

# 矩阵的操作(进阶)

有朋友在我[之前的帖子](https://steemit.com/r/@oflyhigh/r-matrices-part-1)里回复，说R的矩阵乘法和数学中矩阵的乘法有些不一样。

我看了一下，类似我们本文中介绍的矩阵乘法，把对应元素相乘，其实属于**`hadamard product（哈达玛积）`**，与之相对的还有**`kronecker product（克罗内克积，也叫直积或张量积）`**，还有**`matmul product（一般矩阵乘积）`**，不过具体都是咋回事，我是搞不懂了，感兴趣的自己研究一下吧。

不过R肯定不止简单地支持哈达玛积，否则岂不是弱爆了？然后我搜索了一下R的矩阵操作，然后我和我的小伙伴们都惊呆了。

<center>![](https://cdn.steemitimages.com/DQmP6ZTQeDfXuMUCh5C19ijheSn1b3cZgUBWT4dbhPGUZda/image.png)</center>

我就截了一部分，感兴趣的小伙伴自己来学吧：[Matrix Algebra](https://www.statmethods.net/advstats/matrix.html)，这里列出的只是矩阵强大功能的冰山一角，感兴趣的可以参考文末链接。

----

好了，今天就到这里。看来学完[R Tutorial](https://www.tutorialspoint.com/r/index.htm)，不过是学了个皮毛，何况这个还不知道猴年学完呢，😔

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
* https://www.tutorialspoint.com/r/r_matrices.htm
* [Matrix Algebra](https://www.statmethods.net/advstats/matrix.html)
* [Quick Review of Matrix Algebra in R](https://www.r-bloggers.com/quick-review-of-matrix-algebra-in-r/)
* [Matrix Multiplication](http://stat.ethz.ch/R-manual/R-devel/library/base/html/matmult.html)

- - -

This page is synchronized from the post: [继续学R：Matrices(矩阵) Part 2，矩阵访问方式&矩阵操作&进阶操作](https://steemit.com/@oflyhigh/r-matrices-part-2-and-and)
