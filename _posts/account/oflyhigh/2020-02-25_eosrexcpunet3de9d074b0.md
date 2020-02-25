
---
title: '学习了一下EOS的REX机制(一)：从CPU/NET说起'
permlink: eosrexcpunet3de9d074b0
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-02-25 09:12:48
categories:
- cn
tags:
- cn
- eos
- rex
- bandwidth
- busy
thumbnail: 'https://cdn.steemitimages.com/DQmYFVUVBaCom3PnRF5ddYJSkHD3MonZG3Z5TPkgih8qXbq/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---



好早以前就听说EOS上的REX，但是一直不清楚REX是什么鬼，有些啥用，这几天抽空看了一眼，了解了个大概。


![image.png](https://cdn.steemitimages.com/DQmYFVUVBaCom3PnRF5ddYJSkHD3MonZG3Z5TPkgih8qXbq/image.png)
(图源 ：[pixabay](https://pixabay.com/))

# Bandwidth
要说起REX，首先要从EOS的`CPU、NET`来说起，而这`CPU/NET`又是什么鬼呢？STEEM早期用户/开发者，肯定对一个词汇不太陌生，那就是`Bandwidth`。

`Bandwidth`是代表着用户在STEEM网络上的一种资源，每次操作都会消耗，同时会按时间线性恢复，当`Bandwidth`不足时，就没法进行诸如发帖、点赞等操作了。

在Hardfork 20之后，STEEM的`Bandwidth`被调整为更加先进的RC系统了(Resource Credit System)，但是本质上还是和`Bandwidth`相同的。

无论`Bandwidth`还是RC，主要都和用户锁仓的STEEM，亦即SP（STEEM Power)有关。

# CPU/NET & 抵押操作

而在EOS系统中，CPU和NET就相当于STEEM系统上的bandwidth，只不过将其分为两种资源(CPU/NET)，其本质还是大同小异的。

而增加CPU/NET的方法，就是锁仓EOS，这有点类似于STEEM上的Power UP操作。使用命令行钱包的操作方式为：
>`cleos system delegatebw [OPTIONS] from receiver stake_net_quantity stake_cpu_quantity`

其中from和receiver可以是同一个账户，也可以是不同的账户，这就相当于STEEM上的给自己Power Up以及给别人Power Up（或者相当于SP代理？）.

# 示例(eoshuobipool)

已EOS网络上当前排名第一的BP(eoshuobipool)为例，它的CPU和NET抵押情况如下：
>![image.png](https://cdn.steemitimages.com/DQmW2VKbFUDGda13HM8EFwE7VYUU61QpxRVEDwoPHHCkjc2/image.png)

其中自己抵押给自己的：
>![image.png](https://cdn.steemitimages.com/DQmfA2jAXaWtrjKTGpPS2PVXRWtuwyEvdVmqq57hR36T8gL/image.png)

别人抵押过来的：
>![image.png](https://cdn.steemitimages.com/DQmU8d7i5egLVpUA6u6xHg62pVAS8TacrBUmxb1j3CbJiZS/image.png)

# 解除抵押

解除抵押也很方便，直接使用`undelegatebw`命令即可：
>`cleos system undelegatebw [OPTIONS] from receiver unstake_net_quantity unstake_cpu_quantity`

而抵押的EOS，不但和CPU/NET等EOS上的资源相关，也和EOS网络里的BP投票相关，这里我们暂时不做过多讨论。

写了一大堆废话，还没写到REX，不过别急，以后我们慢慢写，不做这些铺垫，我怕我自己理不清啊。


----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>


- - -

This page is synchronized from the post: ['学习了一下EOS的REX机制(一)：从CPU/NET说起'](https://steemit.com/@oflyhigh/eosrexcpunet3de9d074b0)
