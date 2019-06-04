
---
title: 'STEEMIT/STEEM今天肿么了？'
permlink: 5xxnpe-steemit-steem
catalog: true
toc_nav_num: true
toc: true
date: 2018-07-03 13:30:27
categories:
- steem
tags:
- steem
- steemit
- blockchain
- witness
- cn
thumbnail: https://cdn.steemitimages.com/DQmTBf3ucMgZ8vGhyezMKUzKqNoTGTaV5wPwibgvQQvYxtp/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


大概在北京时间上午八九点钟的时候，有朋友问我STEEMIT网站怎么访问不了啦？一看是熟悉的**504 gateway time-out**错误，我就放心了，因为STEEMIT站点抽风不是一次两次的事情了，有时候是因为DDOS、有时候是官网节点升级、有时候是JUSSI缓存出错，我已经见怪不怪了。

![](https://cdn.steemitimages.com/DQmTBf3ucMgZ8vGhyezMKUzKqNoTGTaV5wPwibgvQQvYxtp/image.png)
(图源 ：[pixabay](https://pixabay.com/))

# STEEM停止出块

然后过了好长一段时间，STEEMIT还没有好，并且BUSY啊、DLive啊、DTube啊通通都访问不了啦，我执行一下我在本地机器上的测试脚本，测试了几个公共节点，STEEMIT官方的以及几个非官方的通通都挂了。

这时候我也没太担心，因为节点挂了，还有节点没挂嘛，说明STEEM区块链没问题。然而我使用一个没挂的节点执行了一下`get_dynamic_global_properties`发现了一个很严重的问题，steem的最新区块还停留在几个小时前。当时读回的数据是这样的
> 'head_block_number': 23847548,
'last_irreversible_block_num': 23847529,
'time': '2018-07-03T00:47:00',

而我执行上述操作的时间是在北京时间11:50，也就是说STEEM区块链近三个小时没有新的区块产生了😱。有时候我们读带JUSSI的节点因为缓存的问题，也可能出现类似的情况，但是我确定当前访问的这个节点没加JUSSI，我换了另外一个节点，得到的结果一样，于是我得出一个吓人的结论：STEEM区块链卡壳了。

于是我登陆https://steem.chat 进入见证人频道，一看大家果然在讨论这个问题，并且看到了官网的公告信息：
>The dev team is aware of the current issues and is working on a patch that will be rolled out to witness nodes. The chain has not forked and no funds are at risk.

为了让大家安心，我在公众号STEEMIT上发布了一条群发消息：
![](https://cdn.steemitimages.com/DQmPMjiKSciZGkXQ6Sb9QGMqiWjxXydHMqNAHYEkaagegZ1/image.png)
（可惜每天只能群发一条信息，哈哈）

# 开发人员&见证人定位并解决问题

大约在北京时间下午一点左右：
STEEMIT开发人员在Github上提交了修改
![](https://cdn.steemitimages.com/DQmestCUoJL24NZMQBSEoqKQjnNpR5XbJH6tCW4mU1LFZ8m/image.png)

感兴趣的可以去看一下这个修改
https://github.com/steemit/steem/commit/ecb2a90e9e2268e40916eb5bc57fde07aade5260
![](https://cdn.steemitimages.com/DQmdMnChrcCXjcZn3nsDxBqEEXX3UEtBLaRMKKE9c98rY32/image.png)
这个账户出名喽，他干啥操作了？

![](https://cdn.steemitimages.com/DQmZo8ENJr2jN8j2nQB2wXxMvaBUpeDrqyFnmW9immVyhD2/image.png)
简单地说，相当于从银行取负的一百万，你去银行和柜员说我要取款负的一百万，好一点的柜员会你说：滚，厉害点的柜员就会直接打精神病院的电话，让他们来抓你了。

但是遗憾的是STEEM区块链还真就去做这个操作了，然后发现操作不明白啦，就傻眼了，然后就卡住了（具体细节我也没研究啊）

STEEMIT的开发人员很快定位并解决了BUG，并发布了[Steem 0.19.5](https://github.com/steemit/steem/releases/tag/v0.19.5)，简单地说重置那个人的操作并且在代码上做对应的检查防止再次发生类似操作。但是光STEEMIT自己更新代码没有用啊，需要绝大多说见证人都更新到新版本才可以。

这时候我们STEEM见证人是多么负责任就提现出来啦，[Steem 0.19.5](https://github.com/steemit/steem/releases/tag/v0.19.5)版本发布没多久，大部分见证人就都已经完成了更新，比如说我们中文区的见证人 @abit 。

然后的事情就简单了，STEEM区块链开始出块，大家发现STEEMIT、BUSY等各种网站都正常了，大家又可以愉快地玩耍了。

# 简单总结

* 有人试图Power down 负的VESTS
* STEEM代码没对此进行检查导致STEEM区块链停止出块
* STEEMIT官方及时定位问题并发布了补丁
* 见证人们及时地打了补丁
* STEEM区块链开始正常出块，大家又可以愉快玩耍


# 相关链接
* https://github.com/steemit/steem/releases/tag/v0.19.5

- - -

This page is synchronized from the post: [STEEMIT/STEEM今天肿么了？](https://steemit.com/@oflyhigh/5xxnpe-steemit-steem)
