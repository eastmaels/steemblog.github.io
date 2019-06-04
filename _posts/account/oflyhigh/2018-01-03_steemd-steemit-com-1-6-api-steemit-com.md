
---
title: '重要提示: 节点 steemd.steemit.com 将于1月6日停止使用，请及时切换至 api.steemit.com'
permlink: steemd-steemit-com-1-6-api-steemit-com
catalog: true
toc_nav_num: true
toc: true
date: 2018-01-03 02:10:54
categories:
- steemitdev
tags:
- steemitdev
- steemit
- api
- cn
- cn-programming
thumbnail: https://steemitimages.com/DQmf5EePvLANsZTGCfCGPLoUSKAKgfRYdWA6h7nyLbENuMo/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在我以前不少文章的示例代码中，我都用到了 ***`steemd.steemit.com`***这个官方的Full API Node，比如在[《如何批量取消内部市场订单》](https://steemit.com/cn/@oflyhigh/6szbbj)中，我使用如下代码获取内部市场我的挂单：

>`curl --data '{"jsonrpc": "2.0", "method": "call", "params": ["database_api", "get_open_orders", ["xxxxx"]], "id": 1}' https://steemd.steemit.com`

又比如在文章[《如何查询 PowerDown Route>](https://steemit.com/cn/@oflyhigh/powerdown-route)中，使用如下代码查询account_a的PowerDown Routes
>`curl --data '{"jsonrpc": "2.0", "method": "get_withdraw_routes", "params": ["account_a", 1], "id": 1}' https://steemd.steemit.com`

另外在我的很多程序中，我同样使用了 ***`steemd.steemit.com`***，比如文章[《获取共同操作账户某个操作的真实操作者，附简单脚本 / Get real operator of a transaction made by the ID which operated by multi accounts, script attached》](https://steemit.com/cn/@oflyhigh/get-real-operator-of-a-transaction-made-by-the-id-which-operated-by-multi-accounts-script-attached)中提及的程序。我自己使用的程序中，我更是多处用到了节点 ***`steemd.steemit.com`***



# ***`steemd.steemit.com`***将被关闭

![](https://steemitimages.com/DQmf5EePvLANsZTGCfCGPLoUSKAKgfRYdWA6h7nyLbENuMo/image.png)

但是，如果还在命令或者程序中使用节点***`steemd.steemit.com`***，那么1月6号以后，你的命令/代码将会无法正确运行了。

steemit官方的开发账号 @steemitdev 4小时以前公布了[《关闭节点steemd.steemit.com的最后通牒》](https://steemit.com/steemitdev/@steemitdev/last-chance-to-update-steemd-steemit-com-will-be-retired-on-january-6)

>***从2018年1月6日起，节点`steemd.steemit.com`将正式关闭。***

那么以后我们的程序就不好用了，或者只能找第三方节点了吗？当然不是，steemit官方开放了个新节点给大家使用：***`api.steemit.com`***

>***所以，请尽快将程序切换到新节点：`api.steemit.com`***

# 如何切换至***`api.steemit.com`***

***`api.steemit.com`***将***不支持Websockets访问，只支持http/jsonrpc***

如果你使用以下几个steem的库，它们都已经支持了http/jsonrpc
* steem-js
* steem-python
* radiator
* dsteem

那么你只要在代码中将节点从***`wss://steemd.steemit.com`***，替换成***`https://api.steemit.com`***，是不是超级简单？

其它未在此处说明的大部分库，应该都已经支持http/jsonrpc。如果用到了哪个steem库不支持http/jsonrpc或者你自己实现的使用websockets访问steem的代码，那么就需要动手改一下啦。

# 官方为何要切换节点

![](https://steemitimages.com/0x0/https://i.imgsafe.org/3a/3ab6e1a723.jpeg)

你可能会问，`steemd.steemit.com`用得好好的，为何要切换到`api.steemit.com`，答案是`api.steemit.com`不单单是一个STEEM Full RPC node，它应该叫[jussi节点](https://github.com/steemit/jussi)，它在steemd之上弄了个缓存层(caching layer)，并包含了[SDBS](https://github.com/steemit/sbds)等其它服务。

包含缓存层的好处是不言而喻的，就好比给CPU或者硬盘加了个高速缓存。比如我们读取最新区块指令，每个应用访问steemd，都问一遍，原本的操作是steemd去查询区块链，获取此项信息。但是有了缓存层，缓存层每3秒读一次区块链，然后别的应用要求此项信息，缓存层直接答复就行了。是不是效率高了好多？

至于包含其它服务，更是让节点可以提供更多功能和便利。

# 总结

* 节点***`steemd.steemit.com`***将于1月6日正式关闭
* 请切换至新节点：***`api.steemit.com`***
* 新节点使用http/jsonrpc，不再支持Websockets访问
* 新节点(jussi节点)包含缓存层以及[SDBS](https://github.com/steemit/sbds)等其它服务

# 参考链接

* [Last chance to update - steemd.steemit.com will be retired on January 6](https://steemit.com/steemitdev/@steemitdev/last-chance-to-update-steemd-steemit-com-will-be-retired-on-january-6)
* [Update your STEEM apps! Big changes coming for 3rd party developers](https://steemit.com/steemitdev/@steemitdev/update-your-steem-apps-big-changes-coming-for-3rd-party-developers)
* https://github.com/steemit/jussi
* https://github.com/steemit/sbds

- - -

This page is synchronized from the post: [重要提示: 节点 steemd.steemit.com 将于1月6日停止使用，请及时切换至 api.steemit.com](https://steemit.com/@oflyhigh/steemd-steemit-com-1-6-api-steemit-com)
