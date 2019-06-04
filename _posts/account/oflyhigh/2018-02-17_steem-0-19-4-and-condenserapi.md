
---
title: '体验一下 Steem 0.19.4 & condenser_api'
permlink: steem-0-19-4-and-condenserapi
catalog: true
toc_nav_num: true
toc: true
date: 2018-02-17 14:24:39
categories:
- steemdev
tags:
- steemdev
- appbase
- jsonrpc
- cn-programming
- cn
thumbnail: https://steemitimages.com/DQmXXrdNbPZ1bPshipMAKxuGdjA5xHsZ5FL1hLUy6nNcHk9/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在 @steemitdev 3天前的文章[《AppBase: The next step forward for the Steem blockchain (let the testing begin)》](https://steemit.com/steem/@steemitdev/appbase-the-next-step-forward-for-the-steem-blockchain-let-the-testing-begin) 主要提到了两个东东，**AppBase** 以及 **condenser_api**。

AppBase 我一直以为是App 仓库呢，还以为steemit也要搞个类似应用商店一样的东西呢，结果后来我看到下边这个图，才知道他说的是系统架构，捂脸😳。
![](https://steemitimages.com/DQmXXrdNbPZ1bPshipMAKxuGdjA5xHsZ5FL1hLUy6nNcHk9/image.png)
(图片来源：[Steem Blockchain Update August 2017](https://steemit.com/steemitdev/@steemitdev/steem-blockchain-update-august-2017))

从这个图中我们可以看到无论**AppBase** 还是 **condenser_api**都是半年以前就计划的东西啦，还好我们终于看到影子啦，那么**AppBase** 就没啥说的了，来试试**condenser_api**吧。

# 新condenser_api

在 [Steem Equality 0.19.4 (Appbase) Release Notes](https://github.com/steemit/steem/releases/tag/v0.19.4rc1)着重提到了这个condenser_api，说的是它包含当前在用的所有API中的所有方法。**让你的程序跑到AppBase上最便捷的方法就是把api 都换成 condenser_api**。

我们之前讲过通过RPC调用STEEM API，比如我们前几篇文章中举过的例子：
>`curl --data '{"jsonrpc": "2.0", "method": "call", "params": ["account_by_key_api", "get_key_references", [["STM6MGdForcZ8HskcguP84QSCb8udgz7W9yUPU5jtsAKQAxth3U16"]]], "id": 1}' https://api.steemit.com`

其中**`account_by_key_api`** 需要我们显式的指定，类似情况还有**`follow_api, tag_api`**等等，参考上图。到了Steem 0.19.4以后呢，原来这些API都可以用**`condenser_api`**代替啦。

上边的命令，就可以改成如下模式
>`curl --data '{"jsonrpc": "2.0", "method": "call", "params": ["condenser_api", "get_key_references", [["STM6MGdForcZ8HskcguP84QSCb8udgz7W9yUPU5jtsAKQAxth3U16"]]], "id": 1}' https://api.steemitdev.com`

注意节点的变更，开发节点当前是0.19.4版本。
返回结果如下：
![](https://steemitimages.com/DQmbxk5fWoqZGaRXtKZ3ewaywH2E4Emg9r84J9S5wbu74Et/image.png)

# API methods 列表

可以通过调用jsonrpc.get_methods返回支持的API以及方法列表，有以下三种调用方法：

>`curl  --data '{"jsonrpc": "2.0", "method": "jsonrpc.get_methods", "id": 1}' https://api.steemitdev.com`

>`curl  --data '{"jsonrpc": "2.0", "method": "jsonrpc.get_methods", "params": {}, "id": 1}' https://api.steemitdev.com`

>`curl  --data '{"jsonrpc": "2.0", "method": "call", "params": ["jsonrpc", "get_methods", {}], "id": 1}' https://api.steemitdev.com`

返回列表的部分内容：
![](https://steemitimages.com/DQmUJy5jrW3rZQzuddeUnZN2zwyTfMThyMnpskweVdbaKMN/image.png)

需要注意的一点是，列表中列出的一些API，并非都已经实现的😳
也可以看[这个列表](https://github.com/steemit/jussi/blob/master/tests/appbase_methods.json)，感觉就是把这个打印了出来。

# 流水线语法

就是说调用，可以用这个形式：
`{"jsonrpc":"2.0", "id":0, "method":"call", "params":["api","function",[ARGS]]}`

也可以用这个形式：
`{"jsonrpc":"2.0", "id":0, "method":"api.function", "params":[ARGS]}`

在 **API methods 列表** 小节中，我演示了这两种以及第三种不含参数的调用方式，所以无需赘述了。

# 其它

`{"jsonrpc":"2.0", "method":"jsonrpc.get_signature", "params":{"method":"database_api.get_active_witnessess"}, "id":1}`

发布说明中的这个我没运行起来，提示消息：
> `"message":"Assert Exception:method_itr != api_itr->second.end(): Method database_api.get_active_witnessess does not exist"`

检查了一下，官网的文档中多写了个s，`get_active_witnessess` 应为 `get_active_witnesses`，修正后执行
>`{'id': 1, 'jsonrpc': '2.0', 'result': {'args': {}, 'ret': {'witnesses': []}}}`

然而我并没有搞懂它表达的是啥意思呢？迷糊了，不研究了。

# 结论

感觉  Steem 0.19.4 发布的有些仓促，除了加了个 **`condenser_api`**，并没有多少新内容，而**`jsonrpc.get_methods`** 中列出的东西好多都没有实现。

另外 **`condenser_api`**与其说是Steem 0.19.4的新功能，不如说是jussi的功能，至少我在steem源代码中找不到一行代码含 **`condenser_api`**的字样呢。

不过不管咋说，STEEM在不断进步，这是我们大家所喜闻乐见的，祝STEEM越来越好吧！


# 参考链接

* [AppBase: The next step forward for the Steem blockchain (let the testing begin)](https://steemit.com/steem/@steemitdev/appbase-the-next-step-forward-for-the-steem-blockchain-let-the-testing-begin) 
* [Steem Blockchain Update August 2017](https://steemit.com/steemitdev/@steemitdev/steem-blockchain-update-august-2017)
* [Steem Equality 0.19.4 (Appbase) Release Notes](https://github.com/steemit/steem/releases/tag/v0.19.4rc1)

- - -

This page is synchronized from the post: [体验一下 Steem 0.19.4 & condenser_api](https://steemit.com/@oflyhigh/steem-0-19-4-and-condenserapi)
