
---
title: 'Unlimited content editing (past seven days) / 编辑7天以上的帖子'
permlink: unlimited-content-editing-past-seven-days-7
catalog: true
toc_nav_num: true
toc: true
date: 2018-07-13 01:51:39
categories:
- steemdev
tags:
- steemdev
- steemit
- edit
- cn
- cn-programming
thumbnail: https://cdn.steemitimages.com/DQmWAVTTkEtzVYQX3vD6WHehpSkZnbpYDYPrhnEP88bxszh/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


前些天 @steemitblog 发布了一篇文章，里边提及了steem新版本(19.10)，将支持编译7天以上的老文章。相关内容如下：

>The release will include a change to allow unlimited content editing (beyond seven days)!
>
>Once the 19.10 release is deployed to production nodes (by the witnesses and RPC node operators), the blockchain will allow changes past the seven-day threshold. After that, it will be up to individual UIs to support unlimited content (or not).
>
>Steemit has already created pull request 2826 to update condenser to allow unlimited content editing, which will be deployed to steemit.com after a sufficient number of witnesses have updated.

![](https://cdn.steemitimages.com/DQmWAVTTkEtzVYQX3vD6WHehpSkZnbpYDYPrhnEP88bxszh/image.png)
(图源 ：[pixabay](https://pixabay.com/))

但是呢，我看了一下老文章的文章底部并没有显示Edit按钮，然后看了一下[Witnesses列表](https://steemd.com/witnesses)，发现前20见证人，只有3人升级到了19.10。

既然界面不支持，咱就手动试试呗，据我了解编辑老帖子一共分为两步操作(把大象装冰箱分几步？)
* 允许用户编辑帖子
* 用户编辑帖子

允许用户编辑帖子是通过custom json实现的：
![](https://cdn.steemitimages.com/DQmbYTx9DcQo2cJUpUdnuB9KFqPxchENb1nHfutevPsE7q3/image.png)

为了达成目的，我先发送如上JSON到steem区块链，这段JSON的意思就是允许@oflyhigh.test这个用户编辑老帖子，这个允许的失效时间是2100年xxx(有点长啊，哈哈)

用户解锁以后呢，我们就可以编辑这个用户的老帖子啦，什么10天20天，甚至几年以前，全不在话下，不过有一点就是因为界面还不支持，所以要使用脚本来操作，至于你用什么Python啊、JS啊、Ruby啊，甚至用命令行钱包，都可以的啦。

![](https://cdn.steemitimages.com/DQmepf4iKQ3EjaSpsP48kYFiavyw3pP1YxZC5PsG2LybCiC/image.png)

以上就是我测试的效果喽，5月20号的帖子，我成功地修改了内容，请注意红框中的创建时间以及更新时间。

另外，需要注意的是，由于TOP 20见证人仅仅有三人升级到19.10了，所以进行这项操作，成功的概率是大概有七分之一吧（我瞎猜的，没考据过），想必STEEMIT.COM界面上老帖不加编辑功能也是这个因素，毕竟辛苦编辑了半天，提交上去之后，发现只有1/7的概率成功，这想必是很恼人的吧。

# 参考链接

* https://steemd.com/witnesses
* [Steem 19.10 Officially Released: AppBase, RocksDB, Unlimited Content Editing, and More!](https://steemit.com/steem/@steemitblog/steem-19-10-officially-released-appbase-rocksdb-unlimited-content-editing-and-more)

- - -

This page is synchronized from the post: [Unlimited content editing (past seven days) / 编辑7天以上的帖子](https://steemit.com/@oflyhigh/unlimited-content-editing-past-seven-days-7)
