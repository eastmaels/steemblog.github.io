
---
title: 'Updated my witness node to v0.20.10 / 将我的STEEM见证人节点升级至v0.20.10'
permlink: updated-my-witness-node-to-v0-20-10--steemv0-20-10
catalog: true
toc_nav_num: true
toc: true
date: 2019-04-17 09:56:45
categories:
- cn
tags:
- cn
- witness-update
- witness-category
- witness
- busy
thumbnail: https://cdn.steemitimages.com/DQmQxqoGBTiPDmaQuy9UGun87E6xxJoaH3RGx8CTK6uSrAS/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---



今天早些时候，偶然查看了一眼[见证人列表](https://www.eztk.net/witnesses.php)，发现大部分TOP20见证人已经升级见证人节点至v0.20.10。

可是诡异的是，我在STEEMIT的Github上却只能看到v0.20.9版本，这是怎么回事？难道说TOP20节点密谋做一些什么大事？😱

我在steem.chat以及discord上向几个TOP20见证人求证，原来v0.20.10是一个安全更新，STEEMIT联合一些TOP20节点先行升级，升级之后再对外发布消息。

我猜之所以这样做，是为了避免有人利用漏洞发布以及节点升级之间的时间差来做坏事😀

在我得到朋友们的答复不久之后，STEEMIT的Github上就发布了更新[Steem 0.20.10](https://github.com/steemit/steem/releases/tag/v0.20.10)并建议所有节点升级

>This release fixes a vulnerability in how the pending transaction queue is treated during block application. In the worst case, the previous behavior could result in block propagation delays and general instability/denial of service of the Steem network.

那当然要升级喽，果然更新并编译，并编译成功后，部署到我的主备节点。
>![](https://cdn.steemitimages.com/DQmQxqoGBTiPDmaQuy9UGun87E6xxJoaH3RGx8CTK6uSrAS/image.png)

更多的细节可以参考：[Denial of Service Vulnerability Fix](https://steemit.com/steem/@steemitblog/denial-of-service-vulnerability-fix)

感谢 @timcliff @drakos @blocktrades @themarkymark @thecryptodrive 等几位top20见证人及时让我了解到发生了什么事情（排名不分先后）。

# 相关链接

* https://www.eztk.net/witnesses.php
* [Steem Velocity 0.20.10 Release Notes](https://github.com/steemit/steem/releases/tag/v0.20.10)
* [Denial of Service Vulnerability Fix](https://steemit.com/steem/@steemitblog/denial-of-service-vulnerability-fix)

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>


- - -

This page is synchronized from the post: [Updated my witness node to v0.20.10 / 将我的STEEM见证人节点升级至v0.20.10](https://steemit.com/@oflyhigh/updated-my-witness-node-to-v0-20-10--steemv0-20-10)
