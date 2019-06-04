
---
title: '公共Steem Full API 节点列表 / List of Public Steem Full API Nodes'
permlink: steem-full-api-list-of-public-steem-full-api-nodes
catalog: true
toc_nav_num: true
toc: true
date: 2017-10-01 11:49:03
categories:
- cn
tags:
- cn
- steemdev
- cn-programming
- api
- nodes
thumbnail: https://steemitimages.com/DQmV5yMubmBA67PHo21JQ3g79Ps6sTPj5ACigLS6Q2SwJv8/monitor-1307227_1280.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


我们和STEEM区块链的各种打交道，都离不开STEEM API节点。

如果比较注重速度以及稳定性等等，我们可以自建节点供自己访问。比如 @furion 为[SteemData](https://steemdata.com/) 创建的[私有节点](https://steemit.com/steem/@furion/furion-s-new-toy-a-full-rpc-steemd-node-for-steemdata)，就是出于这个目的。

创建私有节点，对于普通用户而言，还是有些门槛。

首先，一笔服务器租用费用是免不了的，比如Furion的主机配置就是：***6 core Xeon server with 256GB of ECC DDR4 RAM***其次，你要有一定的技能去编译Steemd。

所以公共节点就成为非专业用户的较好选择。

![monitor-1307227_1280.jpg](https://steemitimages.com/DQmV5yMubmBA67PHo21JQ3g79Ps6sTPj5ACigLS6Q2SwJv8/monitor-1307227_1280.jpg)
(图源：[pixabay](https://pixabay.com))

可惜的是，Steem Full API 节点不是很多，而且，也不是都很好用，我将我知道的内容整理一下，希望能给做开发的朋友一些帮助。

# 公共节点列表

### https://steemd.steemit.com
Item| Info
----|----
节点|https://steemd.steemit.com
版本| 0.19.0
说明| Steemit官方节点，很稳定，但是版本老旧，响应迟钝

### https://steemd.steemitdev.com
Item| Info
----|----
节点|https://steemd.steemitdev.com
版本|0.19.2
说明| 官网节点


### https://rpc.steemliberator.com
Item| Info
----|----
节点|https://rpc.steemliberator.com
版本|0.19.2
说明| 测试过程总返回一些奇怪的数据
链接|[Update to STEEM Full RPC Node + Roadmap](https://steemit.com/steemit-dev/@netuoso/update-to-steem-full-rpc-node-roadmap)

### https://steemd.minnowsupportproject.org
Item| Info
----|----
节点|https://steemd.minnowsupportproject.org
版本|0.19.0
说明|可以链接，版本低，不支持广播
链接|[Heard You Needed a Node? Witness FollowBTCNews Launches a New Public Full RPC Node](https://steemit.com/witness-category/@followbtcnews/heard-you-needed-a-node-witness-followbtcnews-launches-a-new-public-full-rpc-node)

### https://steemd.privex.io
Item| Info
----|----
节点|https://steemd.privex.io
版本|0.19.0
说明|可以链接，版本低，不支持广播
链接|[Privex is now running a public STEEM RPC Server to help the community](https://steemit.com/dev/@privex/privex-is-now-running-a-public-steem-rpc-server-to-help-the-community)

### https://steemd.pevo.science
Item| Info
----|----
节点|https://steemd.pevo.science
版本|0.19.2
说明|可以链接，版本新，创建时间较短
链接|[Public steemd cluster by PEvO online](https://steemit.com/witness-category/@pharesim/public-steemd-cluster-by-pevo-online)

### https://gtg.steem.house:8090
Item| Info
----|----
节点|https://gtg.steem.house:8090
版本|0.19.2
说明|历史悠久，运行相对稳定
链接|[gtg.steem.house runs a full node with a public steem API](https://steemit.com/witness-category/@gtg/gtg-steem-house-runs-a-full-node-with-a-public-steem-api)


### https://seed.bitcoiner.me
Item| Info
----|----
节点|https://seed.bitcoiner.me
版本|0.19.2
说明|历史悠久，运行相对稳定
链接|[bitcoiner - Witness Thread](https://steemit.com/witness-category/@bitcoiner/bitcoiner-witness-thread)


# 其它信息

提到公共Steem Full API 节点，不得不提到两个知名节点
* this.piston.rocks
* node.steem.ws

可惜似乎这两个节点都已然关闭了
this.piston.rocks 域名通过CNAME解析到steemd.steemit.com
![](https://steemitimages.com/DQmTKfwM3QGEkz9YY52JuQ8198uPHgb4nsJTcV842z4cStT/image.png)
也就是说我们依然可以在程序中使用，但是使用的实际上是steemd.steemit.com

至于node.steem.ws，主页上显示一切正常
https://steem.ws/
![](https://steemitimages.com/DQmeYFYAhSQZBfr5y4DF4WUpE9Gia7ZaNB6dWTSL6AEf1gj/image.png)
但是却在一些帖子中看到这个节点已经不维护了，并且我测试我这里无法连接。

作为STEEM史上两个著名节点，现在却都不复存在，让人不得不感慨一句：风流总被，雨打风吹去啊！

- - -

This page is synchronized from the post: [公共Steem Full API 节点列表 / List of Public Steem Full API Nodes](https://steemit.com/@oflyhigh/steem-full-api-list-of-public-steem-full-api-nodes)
