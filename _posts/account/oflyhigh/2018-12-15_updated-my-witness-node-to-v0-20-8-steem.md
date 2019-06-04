
---
title: 'Updated my witness node to v0.20.8 / STEEM又双叒叕升级了'
permlink: updated-my-witness-node-to-v0-20-8-steem
catalog: true
toc_nav_num: true
toc: true
date: 2018-12-15 09:39:45
categories:
- witness-update
tags:
- witness-update
- witness-category
- witness
- steem
- cn
thumbnail: https://cdn.steemitimages.com/DQmNSF8FQDTm45ezXmESVxABtx8EGLBv65R5Fj9nGyb6ohF/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


早晨瞄一眼[STEEM的Github](https://github.com/steemit/steem)，神马，STEEM又双叒叕发新版本了，跟新说明如下：

>This release fixes a fatal memory leak during reconstruction of the block log index. This update is optional so long as you do not need to reindex. However, if your block log index needs to be reconstructed, this update is required.

简单翻译过来就是，此版本修复了***日志索引重建过程中致命的内存泄漏***，如果你不需要重构块日志索引那么就可以选择更新或者不更新，否则就需要更新。

>0.20.8 does not require reindexing from 0.20.7

如果是从0.20.7升级上来的，则不需要重建索引(重播/replay)

虽然说不需要重构块日志索引可以选择不更新，但是谁知道啥时候会需要呢，更新上来总是会更靠谱一些，那就更新呗。

老规矩，编译完成后看一下版本信息
>`steemd --version`

![](https://cdn.steemitimages.com/DQmNSF8FQDTm45ezXmESVxABtx8EGLBv65R5Fj9nGyb6ohF/image.png)

执行也起来一切正常
![](https://cdn.steemitimages.com/DQmVLzDmKKvHhSbTJUMAQExAUJYJj9g5FRbPbb2EqUUNTn2/image.png)

尽管升级起来其实并不麻烦，但是这升级太频繁了点啦，但愿STEEM开发稳一点吧，毕竟这行情，见证人们也不愿意折腾呢😂

# 相关链接
* https://www.eztk.net/witnesses.php
* [Steem Velocity 0.20.8 Release Notes](https://github.com/steemit/steem/releases/tag/v0.20.8)

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>

- - -

This page is synchronized from the post: [Updated my witness node to v0.20.8 / STEEM又双叒叕升级了](https://steemit.com/@oflyhigh/updated-my-witness-node-to-v0-20-8-steem)
