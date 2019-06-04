
---
title: '微信公众号支持查询Bitshares账户id啦！'
permlink: bitshares-id
catalog: true
toc_nav_num: true
toc: true
date: 2018-02-02 03:09:09
categories:
- wechat
tags:
- wechat
- cn
- bitshares
- cn-programming
thumbnail: https://steemitimages.com/DQmRNMKJVZkDvxXzT2DDjCefHQLJng8kNkWroiUgoaviHVa/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


不同于STEEM中用户名即账户名，Bitshares中用户ID才是用户核心标志，用户名只是用户的一个属性(当然了，这个属性可能没法修改)。其实BitShares中好多东东都使用ID来代表，比如是BitCNY的ID是`"1.3.113"`，BTS的ID则为：`"1.3.0"`。

![](https://steemitimages.com/DQmRNMKJVZkDvxXzT2DDjCefHQLJng8kNkWroiUgoaviHVa/image.png)
(图源 ：[pixabay](https://pixabay.com))

你可能会问，管它核心不核心的，我知道用户名就可以做一且操作了，用户ID啥的与我又有何关系？这或许没错，知道了用户名，我们就可以查询信息，转账给他，等等等等。但是你知道吗，BitShares的好多API以及操作都是依赖于用户ID的，也就是说你只是没直接用到它而已。

你可能又问，既然没直接用，对我透明，那么还关心它干啥？额，也没错，答案是它对我不是透明的啊。我很多操作要用到用户ID。

一般需要用到用户ID时，我会去网页钱包或者区块链浏览器中查看对应用户的ID是多少。我也写了个简单的脚本来显示对应用户的ID，但是每次找脚本执行一下，我总觉得很繁琐。于是我突然想到干脆在公众号里加上ID显示算了，于是就加上了。

# 如何使用
秉承我们一贯的简单原则，ID直接在账户余额项中显示：
![](https://steemitimages.com/DQmW9EZFTveNYLZnbLeveR8eLifnFHZQ4PoXGGWEMErAxoR/image.png)

请忽略上边的🆔图标，那个确切的讲应该叫“帐户名”；请忽略布局，我实在是没法让它更好看一些。

# 实现原理

其实实现起来很简单，就是个API调用啦
`curl  --data '{"jsonrpc": "2.0", "method": "call", "params": ["database", "get_account_by_name", ["test2018"]], "id": 1}' http://127.0.0.1:8090/rpc`

再从返回数据中拿出'id'就可以啦
![](https://steemitimages.com/DQmbj7CNJCnHexk93ysbj8R9tbRv1PF863DMN2sHYvsH9DX/image.png)

# 应用场景

以后遇到API中需要账户ID的，我就可以直接用公众号来查啦

比如：
`curl --data '{"jsonrpc": "2.0", "method": "call", "params": ["database", "get_accounts", [["1.2.534782"]]], "id": 1}' http://127.0.0.1:8090/rpc`

又比如：
`curl  --data '{"jsonrpc": "2.0", "method": "call", "params": ["database", "get_account_balances", ["1.2.534782", []]], "id": 1}' http://127.0.0.1:8090:8090/rpc`
![](https://steemitimages.com/DQmTnLKqaCzNdadQHMX2VN1r1LQ2GB32Gy9sNvxyJxrdJuN/image.png)

也就是说公众号不但是生活助手，还可以成为开发助手呢😀

# 公众号添加方法

* 方式一：
进入微信通讯录->点击公众号->点右上角加号->搜索steemit，关注即可。

* 方式二：
直接扫描以下二维码：
![](https://steemitimages.com/DQmNxMW2tParyESCyp1s6fm5SjPmNSibkct4wcdaQcTA5BD/image.png)

欢迎大家多提宝贵意见啊。
相关链接

- - -

This page is synchronized from the post: [微信公众号支持查询Bitshares账户id啦！](https://steemit.com/@oflyhigh/bitshares-id)
