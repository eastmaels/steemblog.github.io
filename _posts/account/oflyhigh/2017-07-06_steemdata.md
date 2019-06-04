
---
title: '简单介绍一下SteemData'
permlink: steemdata
catalog: true
toc_nav_num: true
toc: true
date: 2017-07-06 07:19:36
categories:
- cn
tags:
- cn
- steemdata
- cn-programming
- mongodb
- python
thumbnail: https://steemitimages.com/DQmPrNpoNpYV6cCGRn8hwh39VHwKEd9FtFKqTT3H2Kjzf7a/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmPrNpoNpYV6cCGRn8hwh39VHwKEd9FtFKqTT3H2Kjzf7a/image.png)

在之前的这篇文章中：
* [来来来，给大家分享点有意思的数据 / Share some interesting data](https://steemit.com/cn/@oflyhigh/share-some-interesting-data)
我给大家分享了一些有意思的数据，全网信用最高的用户、SP最多的、粉丝最多的、到处粉人的.....

有朋友看后私下和我表示这些数据挺有意思，问我咋弄出来的。我回答说使用steemdata.com 筛选出来的，他对此表示很好奇，希望我能介绍一下steemdata.com所以，今天我在这里给大家简要介绍一下。

# SteemData 是什么？

SteemData 简单的来讲，就是***Steem区块链的数据库(MongoDB)镜像版本***。
这个定义可能不甚准确，但是我自己觉得还算恰当。

Steem是去中心化的区块链，我们可以通过STEEMIT.com 或者Esteem、Busy.org、ChainBB工具或者站点与之交互，比如说发表帖子或者给别人的帖子投票等等。而如果我们要查找一些内容，则相对比较麻烦，比如在steemit上逐页翻阅、或者通过google.com 等工具的站点搜索，或者使用工具直接调用Steem API来查找。

以上无论是哪种方式，使用其它都有极大的局限性，尤其是在复杂的情况下。比如使用API我们可以查看@oflyhigh 的账户数据、看看他有多少SP。但是如果我们想看看所有持有SP数量大于1万个的，API就会无能为力了。所以SteemData 应运而生。

SteemData 由 @furion 发起并维护。
详情见发表于六个月之前的帖子
* [Introducing SteemData - A Database Layer for STEEM](https://steemit.com/steemdata/@furion/introducing-steemdata-a-database-layer-for-steem)

大致原理就是<del>实时</del>随时同步steem区块链的新数据，并存储到MongoDB中。没错，用的是MongoDB, NoSQL数据库类型的代表之一。至于NoSQL数据库有何优点等等话题本文就不做探讨啦。

# SteemData 连接信息以及Collections

@furion 的上述帖子中列出了数据库的连接信息，但是有些老旧
欲获得最新的连接信息可以访问SteemData官方网站： https://steemdata.com/
撰写本文时，连接信息如下：
```
Host: mongo1.steemdata.com
Port: 27017
Database: SteemData
Username: steemit
Password: steemit
```

SteemData有如下`collections`(可以近似理解成MySQL中的表格)
* Accounts 
* Operations
* Account Operations
* Posts
* Comments

其中 Accounts 包含用户信息、Operations包含所有操作信息、Account Operations包含个账户相关的操作、Posts包含主贴信息、Comments包含回复信息。

# 如何操作SteemData

首先SteemData给用户开放的是只读的权限，这很正常，如果大家胡乱写，那就没法用了。SteemData的作者推荐大家使用 [RoboMongo](https://robomongo.org/) 一款MongoDB的图形界面工具来了解SteemData.

另外，SteemData 直接封装了一个Python 库： steemdata, 可以通过pip 安装
`pip install -U steemdata`

欲了解如何使用steemdata Python 库来访问SteemData，可以访问官网的入门向导页面
* https://steemdata.com/guide

我使用的是pymongo
如果你还没有安装过它，你需要使用pip安装
`pip install pymongo`

使用下列命令连接并登陆
![](https://steemitimages.com/DQmTZZKJFRYcpneZRDmP3y4Yc5muB83Vba7YGzL5uVZysoZ/image.png)

看一下都有哪些`collections`
![](https://steemitimages.com/DQmRdjDTVWWQ3euaJh3J12Ua9KUBjZVYoTyGy24WnCXWMBR/image.png)
咦，居然还有几个`collections`官网页面上没有列出来
现在我们就开始我们的探索之旅啦。

# 查询声望分最高的10个用户

有了上述基础，你就可以做一些复杂的查询啦，比如说，查一下全网声望分最高的10个用户

![](https://steemitimages.com/DQmUyTrrasmTtVCnoD4egghKdWAqqvKkkEdDcShTEByXEod/image.png)
是不是很简单的啦？

顺便恭喜一下这些获奖用户：
```
{'name': 'steemsports', 'rep': 77.83}
{'name': 'knozaki2015', 'rep': 77.2}
{'name': 'juliettal', 'rep': 76.64}
{'name': 'gavvet', 'rep': 76.62}
{'name': 'krnel', 'rep': 76.39}
{'name': 'ozchartart', 'rep': 76.02}
{'name': 'papa-pepper', 'rep': 75.27}
{'name': 'curie', 'rep': 75.17}
{'name': 'ericvancewalton', 'rep': 75.17}
{'name': 'doitvoluntarily', 'rep': 74.91}
```

# 参考连接
* [Introducing SteemData - A Database Layer for STEEM](https://steemit.com/steemdata/@furion/introducing-steemdata-a-database-layer-for-steem)
* [Roadmap for SteemData 2.0 ∙ Crowdfunding](https://steemit.com/steemdata/@furion/roadmap-for-steemdata-2-0-help-needed)
* [SteemData 1.2 is here ∙ Raised $5,120 of $5,000 ∙ Now on GitHub](https://steemit.com/steemdata/@furion/steemdata-1-2-is-here-raised-usd2-600-of-usd5-000-now-on-github)
* [Getting started with SteemData](https://steemit.com/steemdata/@furion/getting-started-with-steemdata)
* [What is happening to SteemData?](https://steemit.com/steemdata/@furion/what-is-happening-to-steemdata)
* [SteemData 1.3](https://steemit.com/steemdata/@furion/steemdata-1-3)

Thanks @furion for providing steemdata service!

好了，今天就先介绍这些啦。
如果大家感兴趣，以后在介绍更多内容。

----
感谢阅读 / Thank you for reading.
欢迎upvote、resteem以及 following me @oflyhigh 😎

- - -

This page is synchronized from the post: [简单介绍一下SteemData](https://steemit.com/@oflyhigh/steemdata)
