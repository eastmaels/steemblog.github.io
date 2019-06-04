
---
title: '每天进步一点点：向Access数据库中插入数据重复的问题'
permlink: 3aimww-access
catalog: true
toc_nav_num: true
toc: true
date: 2018-05-16 14:36:09
categories:
- database
tags:
- database
- odbc
- mfc
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


之前的文章中说到我计划在程序中使用Access作为数据库，哎，我现在才意识到这是个多么愚蠢的做法。不过开弓没有回头箭，继续用上了，我怎么的也得等用明白了在换诸如sqlite等数据库管理系统。

![](https://steemitimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png)
(图源 ：[pixabay](https://pixabay.com/))

# 避免重复数据

于是今天继续踩坑。话说，我计划在数据库里插入数据，比如说我在STEEM上的文章数据，之前的帖子中我提到踩过俩坑以后已经插入成功了，我拥有了一个我在STEEM区块链上文章的本地库。

但是插入成功之后，有一个问题，我时不时地在[steemit.com](https://steemit.com)上发布新文章，那么这时候我的文章库就不完整了，缺失了新发表的文章。所以除了之前的导入文章的功能，加入一个更新功能是很有必要的。

为了实现这个功能，我修改了数据表的结构，加入了**`id`**这个字段，ID亦即文章的ID，在steem区块链上，是文章的唯一标识（还可以用`author`以及`permlink`唯一标识文章，貌似`url`字段也能胜任）。我将ID的属性设置为**`不可重复（No Duplicates）`**。

因为ID不可重复，并且新文章的ID总是大于旧文章的，所以我基本可以确定更新时，发现已经存在的文章ID，就证明已经完成更新了。

# CDBException Class

原本我计划的逻辑是直接插入数据，然后捕获异常，判断是字段值重复异常，就认为更新成功，然而实际操作时我却发现找不到字段值重复异常的定义。

在[CDBException Class](https://docs.microsoft.com/en-us/cpp/mfc/reference/cdbexception-class)文章中找了半天，也没找到相关定义，在各种头文件中查了半天也没查到，跟踪了一下`m_nRetCode`，居然值是：`-1`。好吧，貌似[CDBException::m_strError](https://docs.microsoft.com/en-us/cpp/mfc/reference/cdbexception-class#m_strerror)以及[CDBException::m_strStateNativeOrigin](https://docs.microsoft.com/en-us/cpp/mfc/reference/cdbexception-class#m_strstatenativeorigin)中能找到一些端倪，然而实在不想在查下去了。（我的VC自动提示失灵了，哎）

# SELECT 语句

既然没法从异常这直接下手（或者说我没研究明白咋下手），那就换个方式吧，每次更新之前我先读数据库，获取数据库中以有的`id`最大值，然后插入数据过程中，判断一下待插入的文章数据的`id`是否和这个最大`id`重复。如果重复，证明更新完毕，主要用到的SQL语句示例如下：

>`SELECT top 1 id from posts where author = 'oflyhigh' order by id desc;`

突然间我觉得我有点像小猪佩奇中的佩奇和乔治，这么喜欢踩泥坑呢？！不过据说小猪佩奇最近火爆了，**小猪佩奇身上纹，掌声送给社会人**，看来我也有必要纹个佩奇了。

# 参考链接

* [每天进步一点点：MFC中使用Access数据库](https://steemit.com/database/@oflyhigh/mfc-access)
* [每天进步一点点：MFC中向Access 数据库插入数据](https://steemit.com/database/@oflyhigh/5oc9jp-mfc-access)
* [踩了Access数据库的两个坑，吐血中](https://steemitdev.com/database/@oflyhigh/access)
* [CDBException](https://docs.microsoft.com/en-us/cpp/mfc/reference/cdbexception-class)

- - -

This page is synchronized from the post: [每天进步一点点：向Access数据库中插入数据重复的问题](https://steemit.com/@oflyhigh/3aimww-access)
