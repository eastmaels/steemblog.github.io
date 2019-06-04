
---
title: 'BUG? 在非不可逆块应用get_ops_in_block API 返回结果为空'
permlink: bug-getopsinblock-api
catalog: true
toc_nav_num: true
toc: true
date: 2018-11-13 13:22:30
categories:
- steemdev
tags:
- steemdev
- steem
- api
- blockchain
- cn
thumbnail: https://cdn.steemitimages.com/DQmTrH68HGFm1UHqiX9WGpP7DhTiGAGM4PHmV7vfHVfeQci/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在我的一个程序中，我尝试用`get_ops_in_block`获取指定区块的内容，但是我发现一个诡异的事情，如果是比较新的区块，这个API返回空的结果。

![](https://cdn.steemitimages.com/DQmTrH68HGFm1UHqiX9WGpP7DhTiGAGM4PHmV7vfHVfeQci/image.png)
(图源 ：[pexels.com]( https://www.pexels.com/))

经过我一系列测试，得出结论，只能对不可逆块应用`get_ops_in_block`，也就是说block编号小于`last_irreversible_block_num`的块。

一般情况不可逆块比最新块落后约20左右个区块（一分钟左右），如果对最新块或者这期间的20左右个块应用`get_ops_in_block`，就啥也取不到喽。

# 测试步骤 &结果

* 获取最新块(head_block_number)
>`{"jsonrpc": "2.0", "method": "condenser_api.get_dynamic_global_properties", "params": [], "id": 1}`

* 调用get_ops_in_block，其中xxxx用最新块(head_block_number)
>{"jsonrpc": "2.0", "method": "condenser_api.get_ops_in_block", "params": [xxxx], "id": 1}

* 返回结果如下：
>`{'id': 1, 'jsonrpc': '2.0', 'result': []}`

# 补充说明

当然，这可能就是这样设计的，不过如果我没记错的话，好像HF19的时候不是这样的，当然也可能是我记错了。

但是如果就是这样设计的，那么应该在文档里加上说明，至少我在文档里是没找到相关信息。
https://developers.steem.io/apidefinitions/#condenser_api.get_ops_in_block

我在github上提交了一个issue，看看官方咋说😀
https://github.com/steemit/steem/issues/3155

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>

- - -

This page is synchronized from the post: [BUG? 在非不可逆块应用get_ops_in_block API 返回结果为空](https://steemit.com/@oflyhigh/bug-getopsinblock-api)
