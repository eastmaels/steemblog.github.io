
---
title: '每天进步一点点：Python读写文件的模式 & r+'
permlink: python-and-r
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-05-14 03:14:03
categories:
- cn
tags:
- cn
- cutehive
- cn-programming
- python
- study
thumbnail: 'https://cdn.pixabay.com/photo/2018/09/19/18/30/keyboard-3689225_960_720.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


帮朋友写一段短小的Python代码，其每次运行时会产生一个字符串，需要与上次运行时生成的结果字符串对比一下，来判断是否需要继续。

![](https://cdn.pixabay.com/photo/2018/09/19/18/30/keyboard-3689225_960_720.jpg)
(图源 ：[pixabay](https://pixabay.com/))

要想做到这点有很多办法，比如说读写数据库啊、读写配置文件啊，但是无论那样都觉得太麻烦了，毕竟我们没有太多的数据要存储，不过是一个字符串。

想来想去，最简单的办法莫过于直接写个文本文件了，因为既要读取又要写入，于是我直接写了如下打开文件的代码：
>`f = open(fname, 'rw')`

其中`fname`保存着路径+文件名，看着觉得挺完美的，然而执行时直接报错了：
>ValueError: must have exactly one of create/read/write/append mode

擦，如果只是这些模式，我怎么一边愉快地读，一边愉快地写了？网上找了一些内容，有建议读模式打开文件同时写模式再打开，还有的建议打开A文件读，再打开B文件写。

如果打开A读，再打开B写，那么我需要关闭A后，在用B覆盖A，那样好像还不如我打开并读A，关闭A，再打开写A。尽管这个思路应该完全可行，但是Python真的不能用读写方式打开吗？

于是找了一下Python官网上的[关于open的内容](https://docs.python.org/3/library/functions.html#open)，并看到这部分：
>![image.png](https://images.hive.blog/DQmYqSdcSwUUdLtGReZBpKnUhNsgeaiTY3anuMy3YFaNMVj/image.png)

尤其是其中`'+' | open for updating (reading and writing)`简直就是我想要的啊，虽然我按我的经验`+`是要和其它标记一起用的。但是还是不死心试了一下：
>`f = open(fname, '+')`

果不其然出错了：
>ValueError: Must have exactly one of create/read/write/append mode and at most one plus

还是老老实实用`r+`吧，亦即`f = open(fname, 'r+')`果然打开没有问题。但是新问题又来了，我读完字符串并写入后，新新写入的内容直接追加到原来的内容后边了。

不过想想也是，因为读完文件内容的时候，文件指针已经指到文件末尾了，在这个位置写入，当然就是追加喽。

或许我们可以用如下指令将指针移动到文件最前端：
>`f.seek(0)`

不过想想，这样或许也不安全，假设当前文件内的字符串为`1234567890`，我要新写入的字符串为`12345`，那么你写完以后，字符串的内容变不变呢？

我没去测试字符串的内容变不变，但是我觉得从逻辑上就不优雅。为了优雅的处理，我还是用如下代码吧：
>`f.seek(0)`
>`f.truncate()`
>`f.write(str_a)`

也就是说先定位到文件头，再清空内容，再写入，这样看起来优雅多了。把程序跑起来，果然好用，这样我就放心啦。


# 相关链接

* https://docs.python.org/3/library/functions.html#open
* https://docs.python.org/3.7/tutorial/inputoutput.html#methods-of-file-objects

- - -

This page is synchronized from the post: ['每天进步一点点：Python读写文件的模式 & r+'](https://steemit.com/@oflyhigh/python-and-r)
