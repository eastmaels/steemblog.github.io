
---
title: '微信公众号增加见证人在线状态(Status)以及实际排名(Real Rank)信息'
permlink: status-real-rank
catalog: true
toc_nav_num: true
toc: true
date: 2018-04-06 14:56:45
categories:
- witness
tags:
- witness
- wechat
- cn-programming
- info
- cn
thumbnail: https://steemitimages.com/DQmTmk5V5fPrzGZxZbvniwB7t9Zikm8hbqgCEQTYzVRJ1g4/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在之前的帖子中，我们介绍过[微信公众号支持查询见证人信息](https://steemit.com/witness/@oflyhigh/witness)，之后我们又添加了[见证人排名查询](https://steemit.com/witness/@oflyhigh/witness-rank)

![](https://steemitimages.com/DQmTmk5V5fPrzGZxZbvniwB7t9Zikm8hbqgCEQTYzVRJ1g4/image.png)
(图源 ：[pixabay](https://pixabay.com))

在[见证人收益有几何？](https://steemit.com/witness/@oflyhigh/6cdbvp)，我们了解了见证人收益和排名有关，TOP20见证人每出一个块会拿到约0.195个STEEM，而备选见证人每出一个块会拿到约0.977个STEEM。

![](https://steemitimages.com/DQmeWH7198eBkV3zQHNNhCySTAnaipmWYcDM8hHwRp1GiUB/image.png)

尽管我们没有进一步分析备选见证人被选中中概率和什么有关，但是可以提前透露的是和得票排名有关。但是如果见证人离线了，那么还能拿到奖励吗？答案当然是否定的！那么这就引出两个问题：一是见证人的在线状态，二就是见证人的真实排名（去掉离线见证人）

因此我在对公众号查询见证人信息功能进行了更新，在返回信息中显示见证人在线状态(Status)以及实际排名(Real Rank)信息。

# 使用方式

使用方式依旧没有啥变化的啦，公众号中输入如下指令即可：

`@name?w`
其中name为你欲查询的见证人账户，比如 abit、furion、justyy等见证人。`?w`代表查询对应的见证人信息。

示例如下：
`@abit?w`

![](https://steemitimages.com/DQmcdWqeGToytVngETNhoxMCv5oZUcMAsbkf7ofUPbwnGVX/image.png)
可见，按得票数排名本为34位，但是因为前边一个见证人离线，所以实际排名为33位。


![](https://steemitimages.com/DQmTxUvqYZiXPFPK36iRcLTRbV3LDaE7EQyPZ3Wboq5ASrf/image.png)
得票数前50名见证人中，只有俩人离线。但是前100名见证人中，竟然有18人离线。所以得票数排名第100名的见证人，实际排名为82名。

# 公众号添加方法

还没加公众号的，快点上车啊

* 方式一：
进入微信通讯录->点击公众号->点右上角加号->搜索steemit，关注即可。

* 方式二：
直接扫描以下二维码：
![](https://steemitimages.com/DQmNxMW2tParyESCyp1s6fm5SjPmNSibkct4wcdaQcTA5BD/image.png)

# 参考页面

* https://steemd.com/witnesses

欢迎来以下链接投 @abit 一票哦
https://steemit.com/~witnesses

![](https://steemitimages.com/DQme1STMAhBVhbw8wAAeWFb1yHHmNPWW4rSLaTQxEqvwGAw/image.png)
点排名后边的小圆圈，图中的样子表示投票成功。

- - -

This page is synchronized from the post: [微信公众号增加见证人在线状态(Status)以及实际排名(Real Rank)信息](https://steemit.com/@oflyhigh/status-real-rank)
