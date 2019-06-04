
---
title: '昨晚steemit肿了啦？'
permlink: 2trjv1-steemit
catalog: true
toc_nav_num: true
toc: true
date: 2018-03-04 02:12:09
categories:
- steemit
tags:
- steemit
- api
- rpc
- steem
- cn
thumbnail: https://steemitstageimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


想必很多朋友意识到，昨晚steemit.com 几乎访问不了，要么是打不开要么打开后奇慢无比。有小伙伴上来和我说：“O哥，我想给你的文章点赞，然而我根本登陆不上去，没法点赞。”。啥也别说了，全是眼泪。

早晨起来，试着访问STEEMIT，发现又是嗷嗷快啊，网页秒开。那些想给我点赞的小伙伴们，你们的机会来了，哈哈哈。可能大家会很好奇，到底昨天发生了什么事情，难道的STEEMIT或者STEEM的RPC节点被DDOS了？

![](https://steemitstageimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png)
（图源：[https://pixabay.com](https://pixabay.com)）

# 从Steem 0.19.4版本说起

来得稍微早一点的用户，可能记得五个月以前闹得沸沸扬扬的STEEMIT被DDOS的事件。我还蹭热点发了篇文章[《不经历风雨，怎么见彩虹—— 有感于STEEMIT被DDOS事件》](https://steemit.com/cn/@oflyhigh/steemit-ddos)，那么昨晚的事情，和五个月以前的事情有什么异同呢？

其实说起来这事，也算是DDOS攻击吧，不过这个攻击的原因却挺搞笑的，攻击者估摸自己也不知道干了啥坏事，总之彻头彻底的搞笑事件。

这事要从Steem 0.19.4版本说起，如果你不知道Steem 0.19.4版本都干了啥，可以参考我的这篇文章：[《体验一下 Steem 0.19.4 & condenser_api》](https://steemit.com/steemdev/@oflyhigh/steem-0-19-4-and-condenserapi)或者访问官网的这篇文章[《AppBase: The next step forward for the Steem blockchain (let the testing begin)》](https://steemit.com/steem/@steemitdev/appbase-the-next-step-forward-for-the-steem-blockchain-let-the-testing-begin)，当然也可以直接去Github上看[《Steem Equality 0.19.4 (Appbase) Release Notes》](https://github.com/steemit/steem/releases/tag/v0.19.4rc1)，总而言之就是一个新的小版本，改动的东西还挺多。

# 官方API节点升级到0.19.4

STEEMIT发布完这个版本以后，没直接在 api.steemit.com 这个节点上部署，在一些测试节点上自己玩得很Happy，然后昨天估摸觉得我自己玩的这个开心，应该没问题，我把 api.steemit.com 也升级到新版本吧。

之所以我知道昨天 api.steemit.com 节点升级，是因为有小伙伴问我为啥api.steemit.com节点死慢死慢，然后我就随手看了一下Vesion，显示的是0.19.4，而这之前一直是0.19.2。

# 老脚本访问新节点导致DDOS

STEEMIT官方想得挺好，新版本新气象，但是他们忽略了新版本的兼容性，一些老版本上的没问题的用法，到新版本上就会出现错误，这应该不算BUG，如果STEEMIT发个公告，告诉大家如何处理兼容性问题，就好比当初从steemd.steemit.com 切换到api.steemit.com，提前设置个截止期，让大家限期之内处理，那么应该没啥大问题。

但问题在于STEEMIT没给出兼容性修改的建议，也没给出切换的限期，一言不合就开始升级。于是一堆原本0.19.2上运行的好好的程序和脚本就都崩溃啦。崩溃了咋办呢？自动重试自动重启继续访问呗！于是一堆堆错误的请求都堆到节点那边了。节点也很懵逼啊，你们问的啥玩意，我根本不懂啊，我都回复你们我不懂了，你们咋还继续问啊？

然后错误的请求太多，节点答不过来，正确的请求也没机会处理了，节点想了想，干脆我罢工吧。就这样，节点被一堆以前正常现在错误的请求D死了。

# 官方API节点降级回0.19.2

这个问题，没啥立竿见影的解决方法。但是STEEMIT的人还是很聪明的，既然升级了，死翘翘了，那我降级回来就好了，于是现在我们访问又回复了正常。你问我为啥知道又降级回来了？当然是检查了一下版本喽。

JSON内容如下：
`{"jsonrpc": "2.0", "method": "call", "params": ["login_api", "get_version", []], "id": 1}`

返回如下：
![](https://steemitstageimages.com/DQmfQCcfM476HLfUbwQXGCsh8Grmpy9E68LLxKA26oou4ta/image.png)

# 总结

啰啰嗦嗦大半天，总结一下吧

* STEEM 0.19.4和0.19.2存在兼容性问题
* 官方昨天升级api.steemit.com到0.19.4
* 兼容性问题导致各种脚本访问api.steemit.com出错
* 频繁出错形成类似DDOS的效果
* 官方今早将api.steemit.com降级回到0.19.2

- - -

This page is synchronized from the post: [昨晚steemit肿了啦？](https://steemit.com/@oflyhigh/2trjv1-steemit)
