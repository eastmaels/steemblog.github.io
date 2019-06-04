
---
title: '两行代码将老版本steem-python 程序迁移到AppBase'
permlink: steem-python-appbase
catalog: true
toc_nav_num: true
toc: true
date: 2018-05-28 14:32:21
categories:
- cn
tags:
- cn
- steem-python
- appbase
- cn-programming
thumbnail: https://cdn.steemitimages.com/DQmYLCYG1EpexUW76azTWcdLHAWr81JHTiLYXH9YQqwfoZx/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


三个多月以前我发帖说AppBase相关的内容：[《体验一下 Steem 0.19.4 & condenser_api》](https://steemit.com/steemdev/@oflyhigh/steem-0-19-4-and-condenserapi)，3天以前又发帖说了JUSSI[《JUSSI： 想说爱你并不是很容易的事》](https://steemit.com/jussi/@oflyhigh/jussi)。

![](https://cdn.steemitimages.com/DQmYLCYG1EpexUW76azTWcdLHAWr81JHTiLYXH9YQqwfoZx/image.png)

# 变化

之所以时隔三个月又老话重提，实在是最近steem节点变化比较大，导致我的一些代码出了很多意想不到的BUG。

举例来讲，三个月之前steemd的代码里还看不到任何**`condenser_api`**相关的字样，大部分api还是在**`database_api`**中，如果我们调用了**`condenser_api`**实则是通过**`jussi`**重写规则生成的**`database_api`**调用。

而现今，steemd代码中已经有独立的**`condenser_api`**，**`database_api`**以及其它一些传统的api中大部分功能都放到了**`condenser_api`**中。老式的对**`database_api`** 的调用是通过**`jussi`**重写规则生成的**`condenser_api`**调用。

是不是有点晕？我也晕了😵

# 节点

因为上述变化以及JUSSI的存在，现在各个节点的状况比较混乱，主要有以下几个方面：

* 节点版本不同 （有的尚未做上述改变）
* 节点是否集成了JUSSI（未集成的节点不存在重写）
* JUSSI的版本

因为上述原因，不同节点行为会有很大的差异，简单来讲，你的程序使用A节点可以工作，到B节点可能就会出现异常。即便使用A节点可以工作，还要防备哪天节点A升级到新版本。

# steem-python

尽管不同版本的节点以及节点是否集成了JUSSI、集成了哪个版本，可能会导致程序行为不一致，但是往新版本新规则上靠拢总是没有大错的，尽管紧跟官方的步伐可能有点累。

这两天我的两个程序出现了一些异常，我调试发现，是因为我安装的老版本steem-python中大量功能还是使用**`database_api`** 进行的调用。对于集成JUSSI的节点，需要JUSSI对调用进行重写转发，而对于未集成JUSSI的节点，则会类似**`Could not find method xxx`**的错误。

升级steem-python或许是一种方法，但是我安装的版本自己改动的较多，并且代码都很熟悉了，新版本的steem-python改动较大，需要去测试后才能应用于生产环境。

另外一种做法是对steem-python中的每个方法进行修改，显式地指定api，比如说**`condenser_api`**，但是涉及修改的地方太多了，无力去逐一修改。所以想了个取巧的方法。

在`http_client.py`中对应处加入如下代码：
![](https://cdn.steemitimages.com/DQmckrqN6K53GxzJKuDz4kVj7Fri35RV99LFUBJ43gFRhZD/image.png)

----

当然了，以上修改只不过是应急之选，升级steem-python版本或许才是正确方案。不过上述方案无疑是最适合我的，不然谁知道过几天又要改什么，先这么用着吧，好用就好。

权且记录下来备忘，有相同问题的朋友也可以拿去参考。先声明，程序改坏了，我不负责哦😀

- - -

This page is synchronized from the post: [两行代码将老版本steem-python 程序迁移到AppBase](https://steemit.com/@oflyhigh/steem-python-appbase)
