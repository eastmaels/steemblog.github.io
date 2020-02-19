
---
title: '使用steem-python命令行工具steempy 投（撤销）见证人票'
permlink: steem-python-steempy
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-08-15 02:52:09
categories:
- cn
tags:
- cn
- steem
- witness
- steempy
- steem-python
thumbnail: 'https://cdn.steemitimages.com/DQmWodAjPZ65Qza3oaV3nyqkpaeRJZKERiB8U2yqhSpp7Ni/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


自动steemit把网站和钱包分开，做一些基本的操作变得超级麻烦，比如说看看最近收益、看看转账记录，当然也包括了投（撤销）见证人票。

![](https://cdn.steemitimages.com/DQmWodAjPZ65Qza3oaV3nyqkpaeRJZKERiB8U2yqhSpp7Ni/image.png)
(图源 ：[pixabay](https://pixabay.com/))

大家都知道见证人是STEEM的一项重要内容，没有见证人运行服务打包出块，STEEM就无法继续运行了，另外见证人们也做一些其它的工作来支持\促进STEEM的发展。

所以一般来讲，大家应该时不时的更新一下见证人票，把合适的见证人投上去把不合适的见证人票撤下来。

但是由于登录STEEM钱包怪麻烦的，所以我也好久没有做这事啦。今天想着要不要写个脚本来投票？其实也超级简单啦，调用steem-python中的如下函数即可：
>`def approve_witness(self, witness, account=None, approve=True):`

可是又突然想到，steem-python是自带命令行工具的，我何必又重复的发明轮子呢？查看一下命令帮助：
>steempy --help

可以看到有两项和见证人票有关的：
>![](https://cdn.steemitimages.com/DQmUohKEX6xbRM7Gu7rENw4xdBXF24S6AH342cuj2yxGNY1/image.png)

对应的使用方式也非常简单：
>`steempy approvewitness --help`

>![](https://cdn.steemitimages.com/DQmeuK47opezfAgXC7pKhi46UPkoZxg9AtjKm9sCn6y8e6h/image.png)

disapprovewitness与approvewitness的差别只有命令名不一样，就不单独列出了。

所以使用steem-python命令行工具steempy 投（撤销）见证人票还是超级简单的。取消一个掉线好久的见证人试试看：
>`steempy disapprovewitness --account  oflyhigh xxxxxx`

从返回内容可见，其实就是签名并广播了一个JSON
>![](https://cdn.steemitimages.com/DQmXRu6JjjvE1BgcfBmBCZcd1t513HsKcZfp6nPLuELuopx/image.png)

当然了，在这之前，要把active 私钥导入到钱包中，这个说过很多遍了，就不再赘述啦。

# 相关链接

* https://www.eztk.net/witnesses.php
* https://github.com/steemit/steem-python

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>

- - -

This page is synchronized from the post: ['使用steem-python命令行工具steempy 投（撤销）见证人票'](https://steemit.com/@oflyhigh/steem-python-steempy)
