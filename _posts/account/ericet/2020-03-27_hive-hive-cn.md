
---
title: '同步帖子到HIVE链，好文自动进驻HIVE CN中文社区'
permlink: hive-hive-cn
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-03-27 00:18:42
categories:
- hive-180932
tags:
- hive-180932
- cn
- cn-reader
- steem2hive
- whalepower
- lifestyle
- jjm
- mini
- palnet
- zzan
- dblog
- diamondtoken
- marlians
- neoxian
- lassecash
- upfundme
- actnearn
thumbnail: None
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


之前为了把STEEM的帖子自动同步到HIVE链上，写了一个很粗糙的程序自动同步：[Steem2Hive：自动同步 Steem 帖子到 Hive](https://steem.buzz/hive-180932/@koei/steem2hive-steem-hive)

这个程序步骤有点繁琐（代理，授权，加标签），经过阿盐@robertyan的提点，改写了一下程序，把步骤缩减到了2步（授权和加标签）

写完刚巧看到甜心@sweetsssj在HIVE上创建了HIVE CN中文社区，希望中文用户把自己的好文发到这个社区，她会在社区里面挑选文章点赞

所以给同步程序又加了一个功能，就是如果要同步的帖子带有cn-reader或者cn-curation标签，同步到HIVE链上的帖子会自动发到HIVE CN中文社区里面。这样帖子会有机会获得甜心点赞！

## 怎么同步帖子并且自动发到HIVE CN中文社区？
---
1. 授权 @steem2hive账号（Hive上）
使用这个链接授权：https://hivesigner.com/authorize/steem2hive  这个操作只需一次
2. 发帖的时候加上steem2hive标签
任意STEEM的平台发帖，只要加上steem2hive的标签，就可以自动同步到HIVE链上

发布到 Hive链 的帖子，收益的 1% 将会给 @steem-drivers，用于开发和支持开发者。Steem 上的帖子不抽成。

为了避免过多水贴发到HIVE CN中文社区，帖子带有cn-reader 或者cn-curation标签的才会发到社区里面

如果滥用cn-reader或者cn-curation标签，账号将会拉黑账号，不会自动发到中文社区里。



希望这个程序会帮到大家

- - -

This page is synchronized from the post: ['同步帖子到HIVE链，好文自动进驻HIVE CN中文社区'](https://steemit.com/@ericet/hive-hive-cn)
