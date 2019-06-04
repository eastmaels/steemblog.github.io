
---
title: '新工具，SP委派查询 / Tool to check SP Delegations'
permlink: sp-tool-to-check-sp-delegations
catalog: true
toc_nav_num: true
toc: true
date: 2019-04-02 00:49:48
categories:
- cn
tags:
- cn
- witness-category
- cn-programming
- tool
- steemdev
thumbnail: https://cdn.steemitimages.com/DQmUj6HFx8j9KP97ArbfWP4hkvk5GSDAt1TmACSBszv6feV/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


SP委派 (SP delegation)我们也常常叫做SP代理，是STEEM硬分叉18之后引进的功能。

![](https://cdn.steemitimages.com/DQmUj6HFx8j9KP97ArbfWP4hkvk5GSDAt1TmACSBszv6feV/image.png)
(图源 ：[Pixabay.com](https://pixabay.com/))

简单地讲SP委派 (SP delegation)就是
>委托人(delegator)将股权(vesting_shares)委派给受托人(delegatee)，股权（vesting shares）仍由原始账户（委托人）所有，但是投票权、投票收益以及资源(rc)分配等权益被转移(委派)给受托者。

# 微信公众号版

我之前已经在微信公众号中实现SP委派查询，比如查询我都代理给了谁：
>![](https://cdn.steemitimages.com/DQmR76FacD7JvU18SbPyWzmp4v3RWgJHSidvz6o7MspkHDa/image.png)

但是微信公众号有返回结果的长度限制据说是2048字节。所以当返回数据内容过多，则公众号会返回如下信息：
![](https://cdn.steemitimages.com/DQmPNgsRVmDp1LVhoUC5UQEFNhytxVyvFikLqcsBHQgvxYr/image.png)


# 网页版

尽管微信公众号用起来还算可以，但是为了方便不使用微信的朋友，或者SP委派数据量过大的朋友，我又弄了一个网页版。

网址为：https://www.eztk.net/delegations.php

>![](https://cdn.steemitimages.com/DQmUEPrNo4hRwxBjPMWEw4CYG69m4zWd7Pp5nQLhk8uCpuR/image.png)

显示结果分为两组表格，一组为委派出去的SP，一组为即将回收的SP。

# 补充说明

如果你很久之前代理出去一堆SP，那么当你再次检查你的SP代理时，你会发现一个有意思的事情，就是你的SP代理数值长大啦。

以我代理给@exec账户的数据为例
>![](https://cdn.steemitimages.com/DQmWfkksXaB76ojaQTBgeU3BAyd5Jy1h3vCRGZHp7DfEyK9/image.png)

2017年6月的时候我代理给这个账户2000 SP，现在过去了快两年的时间，代理出去的SP变成了2071，足足多了71个。

这个钱哪里来的呢？答案是由STEEM的通胀产生并发放给SP持有者的，是不是很惊喜啊？

# 相关链接

* https://www.eztk.net/delegations.php
* [微信公众号支持查询SP委派/代理(SP delegation)信息啦！](https://steemit.com/cn/@oflyhigh/sp-sp-delegation)

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>

- - -

This page is synchronized from the post: [新工具，SP委派查询 / Tool to check SP Delegations](https://steemit.com/@oflyhigh/sp-tool-to-check-sp-delegations)
