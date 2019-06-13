
---
title: 'Steem Engine数据查看利器：Steem Engine Block Explorer'
permlink: steemenginesteemengineblockexplorer-5a13reqn2k
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-06-09 22:45:36
categories:
- cn
tags:
- cn
- sct
- sct-cn
- sct-ubi
- whalepower
thumbnail: 'https://ipfs.busy.org/ipfs/QmdPYNAzfvUbn7P1kaNKxnbTGVPd8b986XmGFUFCXH71jw'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


最近由于steem-engine大热，使用steem-engine的次数也增加了。

但是steem-engine在数据显示做的不是很好，所以有人就弄了一个steem-engine的block explorer（类似steemd）

使用这个block explorer，你可以查看每个代币/每个账号的所有操作动作，代币的持有/锁仓状况，目前账号的open orders等。

这个block explorer的网址是：https://steem-engine.rocks

<h2>查看代币的所有操作动作</h2>

链接：https://steem-engine.rocks/transactions?symbol=代币符号
比如你想查看NBC账号所有的操作动作，可以输入https://steem-engine.rocks/transactions?symbol=NBC 查看。
<img src="https://ipfs.busy.org/ipfs/QmdPYNAzfvUbn7P1kaNKxnbTGVPd8b986XmGFUFCXH71jw" alt="image.png" /><br/>

<h2>查看账户的所有操作动作</h2>

链接：https://steem-engine.rocks/@账号
比如你想查看ericet账号的所有操作动作，可以输入https://steem-engine.rocks/@ericet

<img src="https://ipfs.busy.org/ipfs/QmQuDYZRZG8UCQZhatCNcCTv2bVwwjFhyXY4H9BfSFBTpW" alt="image.png" /><br/>

<h2>查看代币持有者的代币数量和锁仓状况</h2>

链接：https://steem-engine.rocks/tokens/代币符号/richlist

比如你想查看NBC的所有持有者代币数量和锁仓状况，可以输入https://steem-engine.rocks/tokens/NBC/richlist

<img src="https://ipfs.busy.org/ipfs/QmbVqmgF27GeY3P4kbPKJR6MNAt8s6QcYi6wewCByFhgTC" alt="image.png" /><br/>

<h2>查看Open Orders</h2>

链接：https://steem-engine.rocks/open_orders/@账号

steem-engine给我的一个不友好功能是没办法查看自己开放的订单（Open Orders). 我挂了很多的单子，在steem-engine上，我需要一个个点入代币的市场查看订单。

block explorer解决了这个问题，比如你想查看我的账号的开放订单，可以输入：https://steem-engine.rocks/open_orders/@ericet 就可以看到我的开放订单

<img src="https://ipfs.busy.org/ipfs/QmYUXMKYpLzDqcLe8tCnfVzNup4FVDS1gY4pWr7ohgiMWY" alt="image.png" /><br/>

目前block explorer还有几个功能在进行完善，比如添加transfer to，issue to等功能，但是基本想查看的东西都有了。 ---

- - -

This page is synchronized from the post: ['Steem Engine数据查看利器：Steem Engine Block Explorer'](https://steemit.com/@ericet/steemenginesteemengineblockexplorer-5a13reqn2k)
