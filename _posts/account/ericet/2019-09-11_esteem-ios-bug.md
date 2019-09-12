
---
title: 'Esteem iOS 版本的Bug'
permlink: esteem-ios-bug
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-09-11 18:33:39
categories:
- cn
tags:
- cn
- cn-reader
- whalepower
- cn-stem
- steemstem
- cn-programming
- build-it
- bilpcoin
- esteem
- esteem-cn
- palnet
- zzan
- mediaofficials
- actnearn
- marlians
- neoxian
- lassecash
- upfundme
- sct
- sct-cn
- sct-freeboard
thumbnail: 'https://cdn.steemitimages.com/DQmZfVaGaXGUC9opDCtwdt9ZoMM7FAvBZYeoBbVponbQdqM/1125039998.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


前几天拉仔@davidke20说可以消费ESTM来换取esteemapp的点赞

今天有时间就试了一下积分换点赞的功能，发现Esteem的一个bug。不太确定这个bug是否在安卓版本上，但是我确定iOS版本有这个bug。

当你要使用ESTM来换点赞的时候，会生成一个custom json让你发布到区块链上。如下图：

![1125039998.jpg](https://cdn.steemitimages.com/DQmZfVaGaXGUC9opDCtwdt9ZoMM7FAvBZYeoBbVponbQdqM/1125039998.jpg)

等你按照steemconnect的要求输入你的active key后，steemconnect会报错，说账号没办法验证。

这个问题是在Esteem的程序，注意看上图里面required_auths那里显示empty。

正常发布到链上的custom json，required_auths或者required_posting_auths需要填入信息。完整的custom json应该像下图所示：

![](https://cdn.steemitimages.com/DQmTGX9fNZDYY2mhyFpDnBrDGhfTVXWRo2vvN5sYCHteosd/image.png)

既然esteem不让我换点赞，我就自己动手写了一个custom json发到steem链上。代码如下：

~~~
let steem = require('steem');
let account = 'ericet';
let activeKey = '活动密钥';
let permlink = 'keybase-200-xlm';//帖子的permlink
let amount = '800.000 POINTS';//要换点赞的ESTM分数

let json = JSON.stringify({
		user: account,
		author: account,
		permlink: permlink,
		amount: amount

	});
steem.broadcast.customJson(activeKey, [account], [], 'esteem_boost', json, (err, result) => {
	console.log(err, result);

});

~~~


是不是很简单（对于有编程基础的人来说）？

在esteem还没修复前，可以暂时使用这个方法来换点赞。

- - -

This page is synchronized from the post: ['Esteem iOS 版本的Bug'](https://steemit.com/@ericet/esteem-ios-bug)
