
---
title: 'Python之再遇 (传值/引用) 错误'
permlink: uwemn-python
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-04-20 12:26:30
categories:
- cn
tags:
- cn
- cn-programming
- python
- study
- blog
thumbnail: 'https://cdn.pixabay.com/photo/2017/10/23/20/45/memory-2882481_960_720.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


昨晚写了一小段测试代码，打算实现在一个事务(transaction)中放置多个操作(oprations)，思路很简单，就是定义一个transfer opration的模板，然后设置，追加到transaction中，再设置一个新值，然后再次追加到transaction中。

![](https://cdn.pixabay.com/photo/2017/10/23/20/45/memory-2882481_960_720.jpg)
(图源 ：[pixabay](https://pixabay.com/))

模板如下：
```
op = ['transfer',{
    'from': '',
    'to': '',
    'amount': '',
    'memo': ''
    }]
```
设置过程大致如下：
>`op[1]["from"] = "oflyhigh.demo"`
>`op[1]["to"] = "oflyhigh.test"`
>`op[1]["amount"] = "0.005 HBD"`
>`op[1]["memo"] = "Hello 1"`
>`tx["operations"].append(op)`

然后对op值进行重新设置，再次追加op到tx：
>`op[1]["from"] = "oflyhigh.demo"`
>`op[1]["to"] = "oflyhigh.test"`
>`op[1]["amount"] = "0.010 HBD"`
>`op[1]["memo"] = "Hello 2"`
>`tx["operations"].append(op)`

然后对tx进行签名并广播，结果却发现写到链上变成了这个样子：
>![image.png](https://images.hive.blog/DQmU1NfmFhWNAZZTZvzto8bRDtD1VHDiwN5JeWq2patqpbX/image.png)

什么？怎么是两条一模一样的转账内容呢？不过稍一思索马上就想通了，据说***Python当中一个变量保存的内容除了基本类型保存的是值外，其它都是引用***。

因为是按引用传递，那么我第一次追加后，第二次再修改op，修改的都是同一个op，所以最后的结果就是两个op都是相同的，都被替换成了第二个。

解决起来其实很简单，用***`copy.deepcopy`***处理一下就好啦，再测试就成功啦（op内容我改动了一点）：
>![image.png](https://images.hive.blog/DQmYDkmbJNtEdEVuaZ6goXWgqwkgtyMLMyJv7UEvsdgY11k/image.png)


颇为感慨的是，其实这个问题我遇到过不止一次，比如在[这个帖子](https://hive.blog/python/@oflyhigh/bug-random-choices)中就写遇到的这个错误，然而每次遇到类似情况还是总犯错。

哎，年纪大了，记性不好啦。

# 相关链接

* [列表复制导致的BUG，以及random.choices()的问题](https://hive.blog/python/@oflyhigh/bug-random-choices)

- - -

This page is synchronized from the post: ['Python之再遇 (传值/引用) 错误'](https://steemit.com/@oflyhigh/uwemn-python)
