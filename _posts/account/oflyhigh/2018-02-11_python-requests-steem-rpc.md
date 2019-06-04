
---
title: '每天进步一点点：Python中使用Requests访问STEEM RPC'
permlink: python-requests-steem-rpc
catalog: true
toc_nav_num: true
toc: true
date: 2018-02-11 14:08:39
categories:
- python
tags:
- python
- requests
- http
- cn-programming
- cn
thumbnail: https://steemitimages.com/DQmefy1d97k1eGU5fCSXwCWyCpga6ztwqFsQ2mT7He76v4d/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在之前的系列文章中，我们一起探讨过STEEM的RPC，并且不止一次使用**`curl`**来演示访问STEEM的RPC节点。今天我们换一种玩法，使用Requests访问STEEM RPC节点。

![](https://steemitimages.com/DQmefy1d97k1eGU5fCSXwCWyCpga6ztwqFsQ2mT7He76v4d/image.png)


# 使用**`curl`**命令

在介绍Requests之前，为了便于更好的引出问题以及对比，我们回顾一下如何使用**`curl`**命令访问STEEM RPC节点。

比如在[今天早些时候的帖子](https://steemit.com/security/@oflyhigh/o-qq)中，我就演示了如何使用公钥从STEEM区块链中获取用户名。

>`curl --data '{"jsonrpc": "2.0", "method": "call", "params": ["account_by_key_api", "get_key_references", [["STM6MGdForcZ8HskcguP84QSCb8udgz7W9yUPU5jtsAKQAxth3U16"]]], "id": 1}' https://api.steemit.com`

使用**`curl`**来演示，有一个好处就是读者可以直接拿来测试，复制、粘贴即可，无需编写任何代码。但是弊端也是有的，比如我们想对结果进行一些处理，直接用**`curl`**就傻眼了。

当然了，办法总是比问题多的，据我所知，可以使用subprocess来调用命令，或者使用PycURL，或者使用urlib，当然了，还有Requests 。这篇文章就先介绍一下Requests 。

# Requests 安装

如果你的Python还没有安装Requests 库，那么使用之前，你需要先安装它。

运行如下命令即可：
`pip install requests`
超级简单有木有？

# 使用Requests访问STEEM RPC 节点

好了，现在我们就可以使用requests来访问STEEM RPC节点啦

还是用我们之前的例子，使用requests改写起来，那是超级简单啊

```
import requests
import json
payload = {"jsonrpc": "2.0", "method": "call", "params": ["account_by_key_api", "get_key_references", [["STM6MGdForcZ8HskcguP84QSCb8udgz7W9yUPU5jtsAKQAxth3U16"]]], "id": 1}
rpc = "https://api.steemit.com"
ret = requests.post(rpc, data=json.dumps(payload))
print(ret.text)
```

执行上述代码段，结果如下：
![](https://steemitimages.com/DQmVGB5wdJ3gCLtGn7n1d5SgkhGRjrUbMyKUDwSGxbxTvha/image.png)
和**`curl`** 没有什么区别。

现在我们就可以对返回的数据进行各种方便的处理喽。


# Requests 的手册

通过上边的例子，想必大家已经知道了如何使用Requests访问STEEM RPC节点，简单到我都没有什么好解释的。但其实Requests还是很强大的，如果你想使用其强大的功能，当然了可能不止用在STEEM上，那么可以考虑学习一下Requests的用户手册。

用户手册地址：http://www.python-requests.org/en/master/
尽管我发现了一个[中文版本的手册](http://docs.python-requests.org/zh_CN/latest/index.html)，但是我并不推荐你阅读它。

比如中文版本手册关于Requests的介绍：
>Requests 唯一的一个非转基因的 Python HTTP 库，人类可以安全享用。
警告：非专业使用其他 HTTP 库会导致危险的副作用，包括：安全缺陷症、冗余代码症、重新发明轮子症、啃文档症、抑郁、头疼、甚至死亡。

这严重地触发了我的强迫症，比如**转基因是否真的不安全？**


# Requests 的高级功能

如果需要更好的使用Requests ，那么你有必要了解一下它的高级功能，比如说会话（Session）、持久链接（Keep-Alive）、Header等等。

如果想了解这部分内容，需要你有一定的HTTP协议的基本知识，这样理解起来就很方便了。

一个好消息是在会话（Session）中可以自动实现持久链接（Keep-Alive），是不是很激动人心？

啥？你问我持久链接有啥用？

什么TCP握手啥的我也不懂，用QQ聊天比喻一下，持久链接就相当于对方一直在线给你回答问题；而非持久链接，就好比你每次问题的时候，都打电话喊对方上线，然后他回答一个问题后就下线了，你想问第二个问题，再打电话喊他上线😰

# 总结

Requests~~很黄很暴力~~很好很强大，小伙伴们快点玩起来吧！

# 相关链接

* [Requests: HTTP for Humans](http://www.python-requests.org/en/master/)

- - -

This page is synchronized from the post: [每天进步一点点：Python中使用Requests访问STEEM RPC](https://steemit.com/@oflyhigh/python-requests-steem-rpc)
