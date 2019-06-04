
---
title: '拉黑检查工具加上了声望分检查 /  Add reputation check function to muted  check tool'
permlink: ---add-reputation-check-function-to-muted--check-tool
catalog: true
toc_nav_num: true
toc: true
date: 2019-03-30 10:52:06
categories:
- cn
tags:
- cn
- cn-programming
- php
- tools
- busy
thumbnail: https://cdn.steemitimages.com/DQmeKUdCzxYhU157QSnYDo2j2Lu8mg8zCJ3KAUrb3JoGAjr/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---



在之前的帖子[《更新一下拉黑检查工具 / [Update] A simple tool to check who muted you!》](https://steemit.com/cn/@oflyhigh/update-a-simple-tool-to-check-who-muted-you)中我提及我更新了一下拉黑检查工具，但是更新后总觉得还是挺简陋的。

![](https://cdn.steemitimages.com/DQmeKUdCzxYhU157QSnYDo2j2Lu8mg8zCJ3KAUrb3JoGAjr/image.png)

为什么说简陋呢，除了计数以及显示谁拉黑了我，并没有其它什么信息。但是你知道的，粗略了解一下拉黑我的人是什么情况还是有点用的，比如说了解一下拉黑我的人的声望分(Repution)。

# get_accounts

获取别人的声望分，有很多方法，最简单的方法是调用***`get_accounts`***
>`{"jsonrpc": "2.0", "method": "condenser_api.get_accounts", "params": [["oflyhigh", "exec"]], "id": 1}`

我们可以从返回的数据中找到***`reputation`***条目，如下所示：
>![](https://cdn.steemitimages.com/DQmdRzNVMaMpK3k2fsfjgpgQZZesUxT9apHxSyoM3EFdMra/image.png)

但是，有个问题是，get_accounts返回大量的无关数据，对程序内存之类的会有一定的要求，况且大量调用会对API节点造成一定压力。

# get_account_reputations

所以我去找找看，有没有直接获取一组账户的声望分的API，结果发现如下几个API
>* `condenser_api.get_account_reputations `
>    *  `follow_api.get_account_reputations`
>    *  `reputation_api.get_account_reputations`

可惜的是，尽管这三组API调用支持***`{"account_lower_bound": "oflyhigh", "limit": 10}`***这样形式的批量返回，但是并不能批量的查询一组账户的信息——比如类似***get_accounts***那样调用。

另外之所以对这三个API的排列进行了缩进，是因为***`condenser_api.get_account_reputations `***是对其下两个API的封装。

>![](https://cdn.steemitimages.com/DQmUUmbeymGD1AkZMhjwPrtpkidfnsvL6bjwgicJAi4xrh1/image.png)

看了一下***reputation_api***中的实现部分，并不存在我想要的批量读取账户组的功能
>![](https://cdn.steemitimages.com/DQmXWKRv9mNoUvPnoyBUk45jEP7p1u4fXdXcQaBMkG63X4t/image.png)

# 更新后

扯远了，尽管***`get_account_reputations`*** 方法每次只能读取一个账户，我还是决定选择这个，当然了还有一种方式是为STEEM贡献一个***`get_accounts_reputations`*** 啥的方法，但是我又懒又笨，就不丢人了。

更新后的效果类似这样
>![](https://cdn.steemitimages.com/DQmNaKbjaqKfbRsBbYZMYEkqe1oHLtS36dt9HqtEJJcqX96/image.png)

如果屏蔽你的人很多，那么会有一点点慢，以我被69个人屏蔽为例，大约需要3秒，也不是不能忍受。

看了一下，竟然有声望分70+的大户屏蔽了我，不知道咋得罪人了，哈哈哈哈哈。

# 相关链接

* https://www.eztk.net/muted.php
* [更新一下拉黑检查工具 / [Update] A simple tool to check who muted you!](https://steemit.com/cn/@oflyhigh/update-a-simple-tool-to-check-who-muted-you)

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>


- - -

This page is synchronized from the post: [拉黑检查工具加上了声望分检查 /  Add reputation check function to muted  check tool](https://steemit.com/@oflyhigh/---add-reputation-check-function-to-muted--check-tool)
