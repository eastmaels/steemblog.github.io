
---
title: '[EOS学习笔记]database dirty flag set (likely due to unclean shutdown): replay required 问题的解决方法'
permlink: eosdatabase-dirty-flag-set-likely-due-to-unclean-shutdown-replay-required--1564497577
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-07-31 14:39:51
categories:
- cn-reader
tags:
- cn-reader
- cn
- partiko
- sct
- zzan
thumbnail: 'https://cdn.steemitimages.com/DQma5UA4x9Y1tgLRzMoANVPVKeW61MDDNj84MKY82FkQMp5/002.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


今天在开始打开 EOS: tail -f nodeos.log
结果发现提示：
database dirty flag set (likely due to unclean shutdown): replay required 见下图，
![002.png](https://cdn.steemitimages.com/DQma5UA4x9Y1tgLRzMoANVPVKeW61MDDNj84MKY82FkQMp5/002.png)
what?这个是什么问题？我啥也没做呀！

在网上查阅了下资料，才知道这个问题是由于上次 nodeos 非正常退出时引起的。

查询下nodeos --help，发现里边有这三个参数，

![005 nodeoshelp.png](https://cdn.steemitimages.com/DQmVBzqysYw3gdYaoVJCVyEnpUjB2QehZarCCuhJQcGiQpm/005%20nodeoshelp.png)

于是采用第一个参数：
nodeos --replay-blockchain

见下图
![003.png](https://cdn.steemitimages.com/DQmQsyig7uVdQpBznqRBCPtoWZG88aTHoUU8hoMqLg9Z8S1/003.png)

重新查看后，发现开始正常出块了。
![004 ok.png](https://cdn.steemitimages.com/DQmVWZ8BGZXQif7LKSbF87kCZ8AGAHDG6Y1e4ewpooowEjq/004%20ok.png)




- - -

This page is synchronized from the post: ['[EOS学习笔记]database dirty flag set (likely due to unclean shutdown): replay required 问题的解决方法'](https://steemit.com/@rivalhw/eosdatabase-dirty-flag-set-likely-due-to-unclean-shutdown-replay-required--1564497577)
