
---
title: 'Updated my witness node to v0.20.7 / 将我的STEEM见证人节点升级至v0.20.7'
permlink: updated-my-witness-node-to-v0-20-7-steem-v0-20-7
catalog: true
toc_nav_num: true
toc: true
date: 2018-12-11 11:33:51
categories:
- witness-update
tags:
- witness-update
- witness-category
- witness
- steem
- cn
thumbnail: https://cdn.steemitimages.com/DQmWyCBC4Ldm96tTomZVCFSsif3AMfUdB1N39c1HKFGUjQQ/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


大概十小时以前，steem发布了新的v0.20.7版本，这个版本是一个安全更新，说是只影响序列化逻辑，不影响序列化格式以及共识逻辑，并推荐节点操作者在方便的时候尽快更新。

>This is a security release that only impacts serialization logic, not the serialization format or consensus logic. We recommend all node operators update to 0.20.7 as soon as it is convenient.

既然要求尽快更新了，并且我也看到了，当然要尽快弄喽，赶紧编译一下，编译完成后看一下版本信息

>`steemd --version`

![](https://cdn.steemitimages.com/DQmWyCBC4Ldm96tTomZVCFSsif3AMfUdB1N39c1HKFGUjQQ/image.png)

貌似没毛病，直接替换原来的steemd文件，并重新执行，一切OK。

幸福的是，如果是***从v0.20.6升级上来***的，那么这次更新不需要 reindexing。
>0.20.7 does not require reindexing from 0.20.6


![](https://cdn.steemitimages.com/DQmc5RrfANqo8GhGGMBgGFoUxmWbyeN6u4Lg3AYz23TfoDb/image.png)
执行起来一切正常，不过在我的[见证人列表工具上](https://www.eztk.net/witnesses.php)显示的还是v0.20.6，这个要等我下次出块才会更新，我估算一下，大概半个多小时以后就会轮到我出块啦。


# 相关链接
* https://www.eztk.net/witnesses.php
* [Steem Velocity 0.20.7 Release Notes](https://github.com/steemit/steem/releases/tag/v0.20.7)

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>

- - -

This page is synchronized from the post: [Updated my witness node to v0.20.7 / 将我的STEEM见证人节点升级至v0.20.7](https://steemit.com/@oflyhigh/updated-my-witness-node-to-v0-20-7-steem-v0-20-7)
