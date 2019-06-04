
---
title: '试用一下SteemData SBDS'
permlink: steemdata-sbds
catalog: true
toc_nav_num: true
toc: true
date: 2017-10-11 02:22:15
categories:
- cn
tags:
- cn
- cn-programming
- steemitdev
- sbds
- mysql
thumbnail: https://steemitimages.com/DQmeYLcEyc771L7dc9a1u3pu1DJsaXcgjYYcMP51KCPJWmk/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


想写这篇文章已经很久很久，久远到4个月之前SBDS上线。
* [SteemData meets sbds - SQL Users Rejoice](https://steemit.com/steemdata/@furion/steemdata-meets-sbds-sql-users-rejoice)

之所以对这个SteemData SBDS特别感兴趣，是因为它使用的是MySQL——没错，我最最最最喜欢的数据库管理系统。如果这个MySQL数据库好用，再搭配世界上最好的语言PHP，那一定是令人极其愉悦的事情。

然而，这个数据库上线之初，我简单的测试了一下，被泼了一头冷水，为何？一切都很完美，连接上去，选择数据库，查询，返回结果，唯一令人遗憾的是，结果缺失严重。数据库数据库，缺失数据，那么对我们而言，几乎就没用了。

但是毕竟刚刚上线，有了Steemdata MongoDB的成功先例，我还是对这个MySQL满怀期待的，于是隔三差五我就登陆一下，看看有没有什么新变化。然而有段时间无法连接，有段时间数据库整个被清空。

直到上个月@furion 宣布：[SteemData SBDS hosting is making a comeback](https://steemit.com/steem/@furion/steemdata-sbds-hosting-is-making-a-comeback)

我上去连了一下，依然缺数据。但是那一时期，官方的第三方的节点总出问题，包括Steemdata MongoDB也各种缺数据，这个MySQL数据库不好用也情有可原。

继续等待继续试，直到 @furion 为数据库创建了新的私有RPC steemd节点
[furion's new toy: A full RPC steemd node for SteemData](https://steemit.com/steem/@furion/furion-s-new-toy-a-full-rpc-steemd-node-for-steemdata)

我很愉快地看到MongoDB 一切正常了，然而SteemData MySQL还是缺很多很多数据。

所以我这篇文章就一拖再拖，足足拖了4个月之久。

这几天又测试了几次，MySQL一如既往的缺数据，我想，等正常估摸要好久以后了，因为 @furion 正在搞[view.ly 的ICO](https://steemit.com/viewly/@furion/viewly-pre-ico-is-starting-soon-please-follow-the-security-precautions) ，估摸没时间和精力搞SteemData SBDS。我把我之前做了一些测试在这里记录一下吧，以免几个月后，我都忘记了有SteemData SBDS 这么回事。

----

# 测试SteemData SBDS
前言有点啰嗦，步入正题：

##### SteemData SBDS 连接信息
https://steemdata.com/sbds
>Host: mysql.steemdata.com
Port: 3306
Databases: sbds, hive
Username: steemit
Password: steemit

##### 让我们链接一下试试
`mysql -h sbds-mysql.steemdata.com -usteemit -psteemit -P 3306`
![](https://steemitimages.com/DQmeYLcEyc771L7dc9a1u3pu1DJsaXcgjYYcMP51KCPJWmk/image.png)
成功连接。

##### 来看看都有哪些数据库
`show databases;`
![](https://steemitimages.com/DQmbkatk4Jpx5p6mNnvLZGZ7pCC5ahTNQE9xy8B5Qnuy1mc/image.png)
可以看到除了系统数据库以外还有***sbds***和***hive***两个数据库

##### 选择sbds
`use sbds;`

##### 来看看都有哪些表
`show tables;`
![](https://steemitimages.com/DQmbgUkmL3SQwcyUWJyBgJo3LdfitaLSs2az8aLcqBkN1JD/image.png)

##### 来看看`sbds_core_blocks`这个表中记录的数量
`SELECT count(block_num) FROM sbds_core_blocks;`
![](https://steemitimages.com/DQmPQJRmCZqqxREZ1pmJdJYCLAmeSW6tvffYWFCgyTxCnwP/image.png)
而从steemd.com上我们可以查得，当前***`head_block_number：16,223,539`***
也就是说，SteemData SBDS ***缺失了大致3/4的内容！！！！***

##### 再来看看延迟了多久
`select block_num, timestamp from  sbds_core_blocks order by timestamp DESC limit 10;`
![](https://steemitimages.com/DQmdmzZwVnjPkVtfDK4aHomj2VierS7rd3qdm9B3GnvnCsC/image.png)
最新数据是3天以前的了，也就是说***除了缺失还有超大延迟***， 卖糕的，这还咋用。

将就试试吧，反正就是个测试
##### 查一下我最近十条主题贴
`select timestamp, author, title  from sbds_tx_comments where author='oflyhigh' and parent_author=''  order by timestamp DESC limit 10;`
![](https://steemitimages.com/DQmaFQw4QRyqhYeLoNPf5igHhVJitQ3sWivvoUnZnsEjp3B/image.png)
我晕，这得丢多少帖子啊，还好我的帖子都在区块链上好好活着呢，不然真的要哭了。

##### 查查和 @deanliu 美女在网上的打情骂俏
 `select timestamp,body from sbds_tx_comments where author='deanliu' and parent_author='oflyhigh' limit 10;`
![](https://steemitimages.com/DQmWr3hBfyEJkBjPjpXH6DGGY8w1p8oErDxnSHANcBsYvLP/image.png)

`select timestamp,body from sbds_tx_comments where author='oflyhigh' and parent_author='deanliu' limit 10;`
![](https://steemitimages.com/DQmXhAeTcEG8Y3aJf7H2uABPcPeuVt6q14Qc6fQ5XBDy4rM/image.png)
可惜的是，那些时光一去不返，@deanliu 已经从美女变成了老太婆。

##### 查查最早期的几个帖子
`select author, timestamp, title from sbds_tx_comments where parent_author='' limit 10;`
![](https://steemitimages.com/DQmYJTia9U7sTBtgNWVdYfCAuDxBX9z8PN1BBDQQFEdzyPm/image.png)
呃，看到A神的身影了。

其实最早的帖子应该是这个：
https://steemit.com/meta/@steemit/firstpost
发布于：2016-03-30 18:30:18
SteemData SBDS，竟然把最早的一个帖子都弄丢了，情何以堪啊。

好了，也没啥可以试的了。


# 结论

SteemData SBDS 的MySQL数据库，应该很好玩，应该有很多玩法。奈何***缺数据、延迟大***，目前看来，除了做做测试，没啥实际用途。至于那个HIVE更是糟糕
![](https://steemitimages.com/DQmQtLEHKYbAVcfLeSrGvCGFYsPsMe3kVKcuJefByB2wb5w/image.png)
帮我把声望分调到25了，我能说啥啥？

好在SteemData  MongoDB 安好，期待 @furion 有时间的时候能把sbds和hive完善一下吧。

他弄了这么多东西，也够辛苦的。大家手里还有见证人票的，不妨去投他一票，好让他有动力去改善sbds和hive 😀
投票地址：https://steemit.com/~witnesses

拖了4个月之久的文章，终于写完了，但愿有朝一日，SteemData SBDS变得可用吧。

- - -

This page is synchronized from the post: [试用一下SteemData SBDS](https://steemit.com/@oflyhigh/steemdata-sbds)
