
---
title: '从代码看 Bandwidth 超限问题 & 如何避免和解决'
permlink: bandwidth-and
catalog: true
toc_nav_num: true
toc: true
date: 2017-07-18 11:11:15
categories:
- cn
tags:
- cn
- cn-programming
- bandwidth
thumbnail: https://steemitimages.com/DQmNxVX43fvZTU2wBouQVyp9LnVcda9JnAE1DRQ6CyBvgy2/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


# Bandwidth 机制

![](https://steemitimages.com/DQmNxVX43fvZTU2wBouQVyp9LnVcda9JnAE1DRQ6CyBvgy2/image.png)

Bandwidth  是STEEM引入用于防止滥用(SPAM)的机制。
分为以下两种：
* ***Forum Bandwidth***: 用于发文、回复、点赞等
* ***Market Bandwidth***： 用于转账、交易等等

 
简单的来讲，你的可用Bandwith 和你持有的股份成正比。
为了更加合理，Bandwidth的计算为7日平均值。

***Market Bandwidth***的计算与***Forum Bandwidth***的计算基本一样，所以我们这里以***Forum Bandwidth***为例进行讲解。

# 发文、点赞、回复等操作占用Bandwidth

每次我们进行一些操作，比如发表文章、给自己或者给别人点赞、回复内容，这些操作都会占用一定量的Bandwidth。占用的大小为每次我们操作产生的数据量大小。

每次我们进行一项操作时，对STEEM而言，亦即一个Transaction，包含操作的内容，以及签名信息等等，这个Transaction的体积，即为此次操作占用的Bandwidth。


# Bandwidth的计算为7日平均值

你可能说了，我好多天没发帖，发了一个帖子占用 5K Bandwidth，别人每天发帖，每个帖子占用1K，那怎么衡量谁占的多啊，谁占的少啊？

很好的问题，STEEM为了防止这种情况，引入了平均带宽Average Bandwidth的概念。
Average Bandwidth 已7天为时间窗

计算的方式为：
(7天 -  距离上次操作的时间)*之前的Average Bandwidth/7天 + 本次操作Bandwidth
(如果距离上次操作时间 > 7天，则新的Average Bandwidth 为 本次操作Bandwidth)

```
         share_type new_bandwidth;
         share_type trx_bandwidth = trx_size * STEEMIT_BANDWIDTH_PRECISION;
         auto delta_time = ( _db.head_block_time() - band->last_bandwidth_update ).to_seconds();

         if( delta_time > STEEMIT_BANDWIDTH_AVERAGE_WINDOW_SECONDS )
            new_bandwidth = 0;
         else
            new_bandwidth = ( ( ( STEEMIT_BANDWIDTH_AVERAGE_WINDOW_SECONDS - delta_time ) * fc::uint128( band->average_bandwidth.value ) )
               / STEEMIT_BANDWIDTH_AVERAGE_WINDOW_SECONDS ).to_uint64();

         new_bandwidth += trx_bandwidth;

         _db.modify( *band, [&]( account_bandwidth_object& b )
         {
            b.average_bandwidth = new_bandwidth;
            b.lifetime_bandwidth += trx_bandwidth;
            b.last_bandwidth_update = _db.head_block_time();
         });
```

代码如上，其中：
* trx_bandwidth： 即为本次操作占用的带宽
* new_bandwidth： 最后即为新的new_bandwidth
* delta_time： 距离上次操作的时间
* STEEMIT_BANDWIDTH_AVERAGE_WINDOW_SECONDS： 7天的总秒数

# 可用Bandwith 和持有的股份成正比

以下是代码：
```
         fc::uint128 account_vshares( a.effective_vesting_shares().amount.value );
         fc::uint128 total_vshares( props.total_vesting_shares.amount.value );
         fc::uint128 account_average_bandwidth( band->average_bandwidth.value );
         fc::uint128 max_virtual_bandwidth( props.max_virtual_bandwidth );

         has_bandwidth = ( account_vshares * max_virtual_bandwidth ) > ( account_average_bandwidth * total_vshares );
```

核心是这句：
`has_bandwidth = ( account_vshares * max_virtual_bandwidth ) > ( account_average_bandwidth * total_vshares );`

解释起来就是:     是否有可用带宽 = (你的vshares x 总的带宽)   > (你的平均带宽 x 总的vshares)
变换一下，似乎更好理解，可以是这个形式：
***是否有可用带宽 =  (你的vshares / 总的vshares) > (你的平均带宽/总的带宽)***

也就是说，***你的vshares占总vshares的比例 (不能低于) 你的平均带宽占总带宽的比例***
否则就会带宽超限了

其中你的vshares指***有效vshares***(包括你的STEEM POWER和别人代理给你的，减去你代理出去的)

# 如何避免 & 解决？

通过以上分析，我们得出结论：

* 发文、点赞、回复等操作占用Bandwidth
* Bandwidth的计算为7日平均值
* 你的vshares占总vshares的比例 (不能低于) 你的平均带宽占总带宽的比例

那么如何避免超限呢？
通过以上分析我们不难得出结论：

* ***增加vshares占比***
* ***减小你的平均带宽占用***

增加vshares占比： 可以通过***充值SP，让别人代理一些SP给你***等

减小你的平均带宽占用则可以从以下方面入手：
* ***加大操作间隔***
* ***降低操作次数(其实和加大间隔一个道理)***
* ***减少每次Transaction的体积***

而减小体积，一些系统打包上的东西，如签名等等，我们是减少不了的，只好从内容着手了。

举例说 @catwomanteresa 的这篇文章中
[bandwidth limit exceeded? 饒了我吧！](https://steemit.com/cn/@catwomanteresa/bandwidth-limit-exceeded)

这个表情：
![大哭02-80.gif](https://steemitimages.com/DQmaUs9JKJk2JNsM5VT27UPrXvDPbxWv7PrRCNAgnR19RjG/%E5%A4%A7%E5%93%AD02-80.gif)

`![大哭02-80.gif](https://steemitimages.com/DQmaUs9JKJk2JNsM5VT27UPrXvDPbxWv7PrRCNAgnR19RjG/%E5%A4%A7%E5%93%AD02-80.gif)`
使用了这么多文本，所以表情太丰富，会被系统禁止的 😭

附：截止写作本文时，3个ID的平均带宽占用
ID | Average bandwidth
----|----
@deanliu|275,813,067,443.8705
@oflyhigh|260,843,912,023.06836
@catwomanteresa|349,753,380,793.4731


# 结论

神马加大操作间隔、降低操作次数、减少发送的数据量，***统统不爽!!!!****

买买买，充值STEEM Power, 定个小目标，先加它***<del>一个亿</del>，<del>1000个</del>， 100个</del>***
有了SP, 牙口倍儿好、吃嘛嘛香，一口气上六楼，腰不酸、背背不疼......
又跑题了，打住了

----
感谢阅读 / Thank you for reading.
欢迎upvote、resteem以及 following me @oflyhigh 😎

- - -

This page is synchronized from the post: [从代码看 Bandwidth 超限问题 & 如何避免和解决](https://steemit.com/@oflyhigh/bandwidth-and)
