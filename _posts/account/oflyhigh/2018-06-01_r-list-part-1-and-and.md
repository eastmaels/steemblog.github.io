
---
title: '继续学R：List(列表) Part 1, 创建列表&命名&访问'
permlink: r-list-part-1-and-and
catalog: true
toc_nav_num: true
toc: true
date: 2018-06-01 00:43:36
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


粗略了浏览了一些各种R相关的文章，才惊觉R含金量最高的部分是统计分析部分，那部分我是一点不懂啊，所以真怀疑我能否坚持下去，姑且走着瞧吧，哪天写不下去了烂尾了，那也是意料之中的事情。

![](https://cdn.steemitimages.com/DQmULNEof836YCum6PtcjGH8DLRMXySbL31WY8ZPaGThPJG/image.png)

之前学了多元素向量，分三个小节学习了多元素向量的创建、访问以及操作。这篇文章我们来了解一下另外一种复杂的数据类型**List/列表**

# 创建列表

与多元素向量/Vertors不同，list可以同时容纳多种类型的元素。我们可以使用**`list()`**来创建list，示例如下：

>`mylist<-list('a', 5.2, c(7, 8, 9), 3+4i)`
`print(class(mylist))`
`print(mylist)`

![](https://cdn.steemitimages.com/DQmd1n5HS57Udo8L3r3QuAK4xt7Tn1opZ8G2nw2QqnoUeAt/image.png)

通过示例可见，不同于vertors的类型取决于其内元素的类型，而**list有自己的类型`list`**；另外不同于vertors只能包含相同类型的原子向量(不同类型会进行转换), **list可以同时容纳多种类型的元素**。

# 命名列表元素

我们可以通过**`names()`**来给列表元素命名。示例如下：
>`mylist<-list('a', 5.2, c(7, 8, 9), 3+4i)`
`names(mylist)<-c('char', 'number', 'vertors', 'complex')`
`print(mylist)`

![](https://cdn.steemitimages.com/DQmbbBNNpc8q6ucsBtuUc8nmMFTM3GRhBghqAM46CZ4NLW4/image.png)

# 访问列表元素

#### 下标访问

通过下标访问，和通过下标访问多元素向量类似，例如：
>`mylist<-list('a', 5.2, c(7, 8, 9), 3+4i)`
`print(mylist[2])`
`print(mylist[c(1,2)])`
`print(mylist[c(TRUE, FALSE, TRUE, FALSE)])`
`print(mylist[c(-1,-2)])`

![](https://cdn.steemitimages.com/DQmPKqR71rj2hv9UCN6yqxDyE5TrhGhqhoQGTdheCcCdSD2/image.png)

#### 命名访问

我们之前给list元素创建了名字，那么名字仅仅为了好看吗？答案是否定的，名字还可以用访问列表元素哦，例如：
>`mylist<-list('a', 5.2, c(7, 8, 9), 3+4i)`
`names(mylist)<-c('char', 'number', 'vertors', 'complex')`
`print(mylist$vertors)`
`print(mylist$number)`

![](https://cdn.steemitimages.com/DQmYq2YX8xWcXdAC1njt8zGgkjuWzizyratWyyC5jifdSjN/image.png)
是不是很神奇？

###### vertors 命名访问
说到列表的命名访问，我不禁有一个疑问，vertors是否可以这样操作呢？光想没用，试试看：
>`v<-c(1, 2, 3, 4)`
`names(v)<-c('a', 'b', 'c', 'd')`
`print(v)`
`print(v['b'])`

![](https://cdn.steemitimages.com/DQmXVkR49uC7a1DzwZ6Xpda5fAfJcTu49sAx6x6Yy4rvAqd/image.png)
貌似可行呢？

##### 重复命名

写到这，不禁又想一个问题，既然是对元素命名，那么命名应该是独一无二的，**那么如果我们传入重复的命名会是如何呢？**

> `v<-c(1, 2, 3, 4)`
`names(v)<-c('a', 'c', 'c', 'd')`
`mylist<-list('a', 5.2, c(7, 8, 9), 3+4i)`
`names(mylist)<-c('char', 'char', 'vertors', 'complex')`

竟然都没有执行出错，那么访问命名元素时指向的到底是哪个元素呢？这个当课后题留给大家吧。说实话，**可以给不同元素起相同命名，貌似有点坑啊**。😳

----

今天就水到这里了，下期继续水。


# 相关链接
* [学R：准备工作](https://steemit.com/r/@oflyhigh/r)
* [继续学R：安装软件包](https://steemit.com/r/@oflyhigh/5m2s1h-r)
* [继续学R：另一款在线R环境](https://steemit.com/r/@oflyhigh/r-r)
* [继续学R：R的6大基本数据类型(原子向量)](https://steemit.com/r/@oflyhigh/r-r-6)
* [继续学R：Vector(向量)  Part 1, 多元素向量创建&类型](https://steemit.com/r/@oflyhigh/r-vector-part-1-cny-and)
* [继续学R：Vector(向量) Part 2, 多元素向量访问 & 计算长度](https://steemit.com/r/@oflyhigh/r-vector-part-2-cny-and)
* [继续学R：Vector(向量) Part 3, 多元素向量的操作(算术操作&排序)](https://steemit.com/r/@oflyhigh/r-vector-part-3-cny-and)
* https://www.tutorialspoint.com/r/r_vectors.htm

- - -

This page is synchronized from the post: [继续学R：List(列表) Part 1, 创建列表&命名&访问](https://steemit.com/@oflyhigh/r-list-part-1-and-and)
