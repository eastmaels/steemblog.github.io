
---
title: '如何获取Steem API RPC 节点的版本信息'
permlink: steem-api-rpc
catalog: true
toc_nav_num: true
toc: true
date: 2018-03-11 13:02:57
categories:
- steemdev
tags:
- steemdev
- steem
- version
- cn-programming
- cn
thumbnail: https://steemitimages.com/DQmdQJBBqEUKc1KPNv5KDRiVcfTe3U2ZNAgU2StBKf4VSTf/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在之前的帖子[《昨晚steemit肿了啦？》](https://steemit.com/steemit/@oflyhigh/2trjv1-steemit)中，我提到过由于steem API RPC node 升级导致的STEEMIT网站故障。也就是说原本在0.19.2上好用的脚本用到0.19.4上可能会出一些问题。

![](https://steemitimages.com/DQmdQJBBqEUKc1KPNv5KDRiVcfTe3U2ZNAgU2StBKf4VSTf/image.png)
(图源 ：[pixabay](https://pixabay.com))

那个帖子之后就有朋友问我，如何知道自己脚本所使用的API节点是什么版本呢？这样当发生故障时，我们就可以判断是否是由于版本问题导致的不兼容。这里我就来介绍一下。

# STEEM 0.19.2

在STEEM  0.19.2 以及以前版本的节点，获取节点版本信息的JSON为：
`{"jsonrpc": "2.0", "method": "call", "params": ["login_api", "get_version", []], "id": 1}`
其中最需要注意的地方是，我们使用的是login_api，换言之，使用database_api等其它组别，是行不通的。

使用curl调用，完整的指令如下：
>`curl --data '{"jsonrpc": "2.0", "method": "call", "params": ["login_api", "get_version", []], "id": 1}' `https://api.steemit.com

返回结果如下：
![](https://steemitimages.com/DQmQ7upXJUsqJAtMDY5eZ36HPSk1AJQa6buAsoiZnoF4t73/image.png)
其中block_version就是我们说的steem区块链的版本号啦

steem_revision以及fc_revision代表的对应代码(steem 以及 fc)的版本，

* steem_revision '07be64314ce9d277eb7da921b459c993c2e2412c'对应的是
https://github.com/steemit/steem/tree/07be64314ce9d277eb7da921b459c993c2e2412c  
* fc_revision: '8dd1fd1ec0906509eb722fa7c8d280d59bcca23d' 对应的是：
https://github.com/steemit/fc/tree/8dd1fd1ec0906509eb722fa7c8d280d59bcca23d

# STEEM 0.19.4

**login_api**
按照 [STEEM 0.19.4的Release Notes](https://github.com/steemit/steem/releases/tag/v0.19.4rc1) Login API 是要（已经）被移除的
>The login_api was designed as a way to map the API names to numeric ids. Because the APIs are no longer called via id, there is now no need for the login_api, and so ***it has been removed***.

但是，上述指令居然还好用：
>curl --data '{"jsonrpc": "2.0", "method": "call", "params": ["login_api", "get_version", []], "id": 1}' https://api.steemitdev.com

![](https://steemitimages.com/DQmcnePi6nz8YYR9VMHvu3s1XWAZvq9AvL9bKsiGbdmHmC8/image.png)

这让人有点尴尬，咋就说了不算呢？尽管login_api 并未如官方说的那样不移除，但是既然官方说了，说不定啥时候就给移除掉了，用着终归不放心，那还有别的方法吗？

答案是在0.19.4节点上，database_api和condenser_api都和login_api一样可以用于获取版本信息。指令是一样的，替换一下API名称就可以了，示例如下：

**database_api**
>curl --data '{"jsonrpc": "2.0", "method": "call", "params": ["database_api", "get_version", []], "id": 1}' https://api.steemitdev.com

**condenser_api**
>curl --data '{"jsonrpc": "2.0", "method": "call", "params": ["condenser_api", "get_version", []], "id": 1}' https://api.steemitdev.com

返回内容都是一样的，就不列举出来啦。


# 如何获取版本？

你可能问了，这不对呀，我们的问题是如何获取版本，你这告诉我0.19.2如何获取，0.19.4如何获取，既然我知道版本，还获取啥啊？

这问题问的好，其实原本用login_api，没啥版本限制，一直可以用于获取版本，但0.19.4不是说要把login_api拿掉吗（尽管一直没拿掉）但是我们要做两手准备。

所以我们可以在程序中先用login_api去获取，一旦返回错误，再用condenser_api或者database_api 去获取好啰。搞这么麻烦，我也很无奈哦。

好消息是，除了STEEMIT官方节点总升着降着玩，版本变化略频繁，其它第三方节点几乎很少变化，并且一旦变化都是升级，很有有降级的，大可放心。

# 参考信息

* [昨晚steemit肿了啦？](https://steemit.com/steemit/@oflyhigh/2trjv1-steemit)
* [体验一下 Steem 0.19.4 & condenser_api](https://steemit.com/steemdev/@oflyhigh/steem-0-19-4-and-condenserapi)
*  [Steem Equality 0.19.4 (Appbase) Release Notes](https://github.com/steemit/steem/releases/tag/v0.19.4rc1)

- - -

This page is synchronized from the post: [如何获取Steem API RPC 节点的版本信息](https://steemit.com/@oflyhigh/steem-api-rpc)
