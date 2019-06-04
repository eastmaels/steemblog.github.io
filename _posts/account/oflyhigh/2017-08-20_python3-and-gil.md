
---
title: 'Python3 线程 & GIL 学习笔记'
permlink: python3-and-gil
catalog: true
toc_nav_num: true
toc: true
date: 2017-08-20 11:03:51
categories:
- cn
tags:
- cn
- cn-programming
- python
thumbnail: https://steemitimages.com/DQmd49dm5bKty2sUUE8hHpiAYFhBiTMjerpSbBojdJdWYGK/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


作为Python的初学者，基本上是遇到啥需求，就现去学习，能解决问题就可以。

比如前段时间，做的一个小程序，需要并发处理一些操作，所以就想到了使用线程的概念。

![](https://steemitimages.com/DQmd49dm5bKty2sUUE8hHpiAYFhBiTMjerpSbBojdJdWYGK/image.png)

# _thread 模块

上网学习了一下
https://docs.python.org/3/library/_thread.html
`_thread.start_new_thread(function, args[, kwargs])`
这个貌似很简单

因为我的程序把线程启动起来就可以，然后就自己做自己的事情，做完就退出，对全局的东西不需要进行改变，所以也用不到线程锁之类的概念。


我用这个模块实现了我的程序，良好地运行了很长一段时间，完全符合我的要求。

 # threading 模块

前些天有个新任务，同样需要用到线程。不同的是，我程序中需要用到当前在执行的线程数量，当数量超过我定义的限制，就暂停启动新线程，直到其它线程有结束的，当前线程数量下降。

我想到的方法设置一个全局变量： 线程启动，变量加一； 线程退出，变量减一。
为了防止几个线程同时读写的情况，需要在对变量操作的时候加锁，操作完成释放。
然后我主线程中访问这个变量，判断当前运行中线程的数量
听起来似乎可行，然后我边去学习怎么加锁和释放

然后，我才发现我用_thread被叫做低级( low-level)模块, 而高级(higher-level)模块threading直接提供了
`threading.active_count()`
https://docs.python.org/3/library/threading.html

既然有了高级模块，咱就别自己造轮子啦。
然后就要去研究一下这个threading 模块咋用啦，结果发现还整出两种使用方法：

##### 方法一：
`threading.Thread(group=None, target=None, name=None, args=(), kwargs={}, *, daemon=None)`
方法一的方式和`_thread.start_new_thread`比较类似。

##### 方法二：
从Thread继承，并重写run()方法


我选择方法二的方式实现我的程序
`class myThread (threading.Thread):`
在 `__init__`中传入要处理的参数
在`run`做我要做的处理

在程序中这样启动线程：
`thread = myThread(arg_a, arg_b, arg_c)`
`thread.start()`

在程序中使用： `threading.active_count()`判断数量


程序运行了几天，最多时候几十个线程再跑，工作状况良好，完全达到预期。

# GIL 

在了解和学习Python多线程过程中，看到不少对Python多线程的争议。尤其是在多CPU和多核处理器环境下，没法充分利用CPU资源，确切地说，只能可一个CPU霍霍。

究其原因，是因为Python原始解释器CPython中使用了***GIL (Global Interpreter Lock，全局解释器锁)***来限制线程对共享资源的访问，同一时间只会有一个获得GIL的线程在跑，其他线程则处于等待状态。与其说是多线程，更像是时间片调度，当然了，具体调度方法肯定是更复杂和更科学的。

因为这个GIL的存在，Python多线程，没法真正的并行处理，而是并发处理。对于CPU密集型任务，如果使用多线程，因为GIL的存在导致除了不能利用多核多CPU的优势，反而要浪费时间在线程间切来切去，效率会变得低下。而对于IO密集型任务，因为IO浪费的时间比较多，所以使用多线程是会提升效率的。

看了下我的程序，嗯，还好，都是网络访问的，至少用多线程实现起来很方便，事实也证明很好用。

至于Python下怎么利用多核或者多CPU，据说是使用多进程。
但是我暂时没有这种需要，毕竟，我的原则是，好用就行，折腾啥呀。

另外，关于并发处理，还有可以参考这里：
https://docs.python.org/3/library/asyncio.html
看起来挺高大上的，不明觉厉。

有关GIL可以参考：
https://wiki.python.org/moin/GlobalInterpreterLock

就这样啦，代码啥的就不贴出来充数了。
网上示例一大堆，大家感兴趣的自己去看看好了。


# 参考资料：

* https://docs.python.org/3/library/_thread.html
* https://docs.python.org/3/library/threading.html
* https://wiki.python.org/moin/GlobalInterpreterLock
* https://docs.python.org/3/library/asyncio.html
* http://www.wellho.net/solutions/python-python-threads-a-first-example.html
* https://www.tutorialspoint.com/python/python_multithreading.htm
* https://stackoverflow.com/questions/2846653/how-to-use-threading-in-python
* http://www.python-course.eu/threads.php

- - -

This page is synchronized from the post: [Python3 线程 & GIL 学习笔记](https://steemit.com/@oflyhigh/python3-and-gil)
