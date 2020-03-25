
---
title: '使用steempy(steem-python)转账HIVE/HBD'
permlink: steempy-steem-python-hive-hbd
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-03-25 03:51:57
categories:
- cn
tags:
- cn
- python
- steem-python
- hive
- wallet
thumbnail: 'https://images.hive.blog/DQmPtj3KwabgR1hK6S7m86EjJKAxmd7SysSTazmU4eUkKDd/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


不少朋友抱怨HIVE的网页钱包还不好用，没法进行HIVE/HBD等资产的转账。其实除了网页钱包，我们还有很多方式可以选择，比如`cli_wallet`以及`steempy`等。


![image.png](https://images.hive.blog/DQmPtj3KwabgR1hK6S7m86EjJKAxmd7SysSTazmU4eUkKDd/image.png)
(图源 ：[pixabay](https://pixabay.com/))

首先，需要说的是`steempy` 是steem-python的命令行工具，当然了为了让steem-python能在hive上工作，还是要做一些小小的修改的，详情可以参照我之前的文章。

我们这篇文章假定：***你已经安装/修改好steem-python并且设置好HIVE的节点***。

# 转账

大家最常用/最关注的就是转账操作了，steempy命令行不用修改就可以转账，我们先来看一下帮助信息：
> steempy transfer --help

可见转账指令还是很简单的，只是资产只能选择***STEEM/SBD***:
>![image.png](https://images.hive.blog/DQmd2PQxn9qVeczPFBmAM4r3wcppoCDwVMTdKUkJQZ43vF4/image.png)

我们先来写这样一条指令：
>`steempy transfer --account oflyhigh.test oflyhigh 0.001 HIVE test`

不出意料地，出错了：
>![image.png](https://images.hive.blog/DQmZgDdv3JMW4rafRoAxZbQK77uL3x43g5rzNVr4ATB33h9/image.png)

主要是这句：***error: argument asset: invalid choice: 'HIVE' (choose from 'STEEM', 'SBD')***

也就是说HIVE不是一个符合的选项，那么难道我们要修改命令行脚本的代码或者库代码吗？其实完全没有必要，让我们来试试如下指令：
>`steempy transfer --account oflyhigh.test oflyhigh 0.001 STEEM test`

貌似成功了耶：
>![image.png](https://images.hive.blog/DQmVcrCsBuFg2TRgmCMTqzp29taCptJE9aVHRoctQquqRuX/image.png)

来https://hiveblocks.com/tx/d107d6e1aa3db196ea94268c165800a268b2a6e6 这里看一下：
>![image.png](https://images.hive.blog/DQmRxdGwEwpYbRSSgM3srkdZmsm92e7HJAXN7FVU6XtoXSk/image.png)

果然成功的。

# 其它

除了transfer （转账操作外），steeempy还能干很多事情，比如power up、power down、upvote、downvote等等。

还可以投见证人票，见证人上下线等等，如果你要尝试投见证人票，***不妨顺手投我一票哦***，指令如下：
>`steempy approvewitness --account oflyhigh.test oflyhigh`

把其中的oflyhigh.test换成你的hive ID即可。


![image.png](https://images.hive.blog/DQmdWtzdKfbbi2opFYHHw5FeBtkZb5Dye3GYc1FNhMZGMjy/image.png)
(图源 ：[pixabay](https://pixabay.com/))

所以steempy(steem-python)还是很强大的，快来玩起来吧。

- - -

This page is synchronized from the post: ['使用steempy(steem-python)转账HIVE/HBD'](https://steemit.com/@oflyhigh/steempy-steem-python-hive-hbd)
