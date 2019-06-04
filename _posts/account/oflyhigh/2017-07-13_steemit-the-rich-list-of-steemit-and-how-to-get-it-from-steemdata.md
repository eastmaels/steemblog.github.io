
---
title: 'steemit 隐藏神技之: 富豪榜 / The rich list of steemit  & How to get it from SteemData'
permlink: steemit-the-rich-list-of-steemit-and-how-to-get-it-from-steemdata
catalog: true
toc_nav_num: true
toc: true
date: 2017-07-13 11:17:21
categories:
- cn
tags:
- cn
- steemdata
- cn-programming
- mongodb
- python
thumbnail: https://steemitimages.com/DQmZCU6U5c3k1gF6whRi62hEGbKKXyiDY5uCH3e2QBAKkSd/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


#  富豪榜 / The rich list


![](https://steemitimages.com/DQmZCU6U5c3k1gF6whRi62hEGbKKXyiDY5uCH3e2QBAKkSd/image.png)

你可能见过steemit上的各种榜单，什么每日发帖排行榜、每日得奖排行榜、每日回复排行榜等等。 但是你知道吗，这里有一个很重要的榜单： 富豪榜

Here is a very important list: The rich list.
https://steemd.com/richlist

在这里，列出了持有SP最多的、持有STEEM最多的、持有SBD最多的各5000名用户
There are three accounts lists, sorted by  
1) Amount of Holding SP
1) Amount of Holding STEEM
1) Amount of Holding SBD

快来看看你是否在这个列表里吧。

# Top 10 of the lists

这里我把三个列表的前十名截取过来了，快来崇拜一下吧
![](https://steemitimages.com/DQmTxSV5Vb1CbN2MLCbKnDxjd5qhtwj1BruS8sV7FjQkdmV/image.png)

# Get rich list from SteemData

在之前的文章中，我们简要地介绍过SteemData
[简单介绍一下SteemData](https://steemit.com/cn/@oflyhigh/steemdata)

那么我们是否可以获取使用SteemData获取rich list呢？
答案是肯定的，而且我们还可以获取用户存款账户信息哦，这是上边richlist里不包含的哦。

#### 1： Get Top 10 SP holders from SteemData

查询语句：
` rets = db.Accounts.find({}, {'name':1, 'sp':1, '_id':0}).sort('sp',-1).limit(10)`

结果如下：
```
{'name': 'steemit', 'sp': 70769848.699}
{'name': 'freedom', 'sp': 7190048.222}
{'name': 'steem', 'sp': 4917755.824}
{'name': 'dan', 'sp': 4165217.731}
{'name': 'ned', 'sp': 3552240.243}
{'name': 'blocktrades', 'sp': 2844940.108}
{'name': 'val-a', 'sp': 2545454.998}
{'name': 'mottler', 'sp': 2233127.725}
{'name': 'abit', 'sp': 1951864.398}
{'name': 'databass', 'sp': 1692808.919}
```
![](https://steemitimages.com/DQmUH6xddK8uqczmZ2p6wDWtTAFuap2NwMKJnXHn88xktQm/image.png)

#### 2： Get Top 10 STEEM holders from SteemData

查询语句：
`rets = db.Accounts.find({}, {'name':1, 'balance.amount':1, '_id':0}).sort('balance.amount',-1).limit(10)`

结果如下：
```
{'name': 'poloniex', 'balance': {'amount': 26664594.378}}
{'name': 'bittrex', 'balance': {'amount': 8382739.044}}
{'name': 'steemit2', 'balance': {'amount': 1022874.459}}
{'name': 'dantheman', 'balance': {'amount': 964296.224}}
{'name': 'firefire', 'balance': {'amount': 893204.0}}
{'name': 'imadev', 'balance': {'amount': 788297.713}}
{'name': 'tombstone', 'balance': {'amount': 678857.312}}
{'name': 'ben', 'balance': {'amount': 644064.704}}
{'name': 'steemit', 'balance': {'amount': 500001.183}}
{'name': 'openledger', 'balance': {'amount': 488797.205}}
```
![](https://steemitimages.com/DQme5EZ8jojwv4TQBXTsEMoQ3eycjF3aHYajrAoGYuftHMy/image.png)

#### 3： Get Top 10 SBD holders from SteemData

查询语句：
`rets = db.Accounts.find({}, {'name':1, 'sbd_balance.amount':1, '_id':0}).sort('sbd_balance.amount',-1).limit(10)`

结果如下：
```
{'name': 'poloniex', 'sbd_balance': {'amount': 1408592.375}}
{'name': 'bittrex', 'sbd_balance': {'amount': 634380.987}}
{'name': 'imadev', 'sbd_balance': {'amount': 71103.439}}
{'name': 'teamsmooth-mm', 'sbd_balance': {'amount': 69739.446}}
{'name': 'openledger', 'sbd_balance': {'amount': 43110.053}}
{'name': 'blocktrades', 'sbd_balance': {'amount': 38257.748}}
{'name': 'teamsmooth', 'sbd_balance': {'amount': 28113.009}}
{'name': 'nextgencrypto', 'sbd_balance': {'amount': 23056.34}}
{'name': 'azeroth', 'sbd_balance': {'amount': 20966.206}}
{'name': 'dang007', 'sbd_balance': {'amount': 19965.703}}
```
![](https://steemitimages.com/DQmPhDq2dUQSY6Bo6djv9pEqMY5ijgTLmyooAVesm7JPUVN/image.png)

#### 4：Get Top 10 SAVINGS  SBD holders  in from SteemData

查询语句：
`rets = db.Accounts.find({}, {'name':1, 'savings_sbd_balance.amount':1, '_id':0}).sort('savings_sbd_balance.amount',-1).limit(10)`


结果如下：
```
{'name': 'cryptomancer', 'savings_sbd_balance': {'amount': 20000.0}}
{'name': 'leesunmoo', 'savings_sbd_balance': {'amount': 6000.0}}
{'name': 'permacryptofolio', 'savings_sbd_balance': {'amount': 5000.0}}
{'name': 'camilla', 'savings_sbd_balance': {'amount': 4175.353}}
{'name': 'superstar', 'savings_sbd_balance': {'amount': 4012.435}}
{'name': 'clains', 'savings_sbd_balance': {'amount': 3800.712}}
{'name': 'psylains', 'savings_sbd_balance': {'amount': 3297.548}}
{'name': 'opheliafu', 'savings_sbd_balance': {'amount': 2782.369}}
{'name': 'dan-atstarlite', 'savings_sbd_balance': {'amount': 2000.0}}
{'name': 'chitty', 'savings_sbd_balance': {'amount': 1500.0}}
```
![](https://steemitimages.com/DQmXdqJL87yyohzDQw62RbfDU9bk4wbtV66Z2EPWQh57Gua/image.png)

#### 5： Get Top 10 SAVINGS  STEEM holders  in from SteemData

查询语句：
`rets = db.Accounts.find({}, {'name':1, 'savings_balance.amount':1, '_id':0}).sort('savings_balance.amount',-1).limit(10)`

结果如下：

```
{'name': 'steemit', 'savings_balance': {'amount': 18372915.751}}
{'name': 'ned', 'savings_balance': {'amount': 1328211.4}}
{'name': 'val', 'savings_balance': {'amount': 419040.606}}
{'name': 'bitone', 'savings_balance': {'amount': 120106.303}}
{'name': 'thejohalfiles', 'savings_balance': {'amount': 114362.882}}
{'name': 'goldenunicorn', 'savings_balance': {'amount': 110101.011}}
{'name': 'skan', 'savings_balance': {'amount': 64999.9}}
{'name': 'arhag', 'savings_balance': {'amount': 60000.0}}
{'name': 'opheliafu', 'savings_balance': {'amount': 16038.007}}
{'name': 'sofaking2020', 'savings_balance': {'amount': 9000.0}}
```
![](https://steemitimages.com/DQmdyrm6o4n9bfgVbUwUBkingMeT6cGvY87eoL4XibnJQfv/image.png)

----

是不是很有意思，这只是最简单的查询哦，你可以编程实现很复杂的查询和筛选，快来玩吧

感谢阅读 / Thank you for reading.
欢迎upvote、resteem以及 following me @oflyhigh 😎

- - -

This page is synchronized from the post: [steemit 隐藏神技之: 富豪榜 / The rich list of steemit  & How to get it from SteemData](https://steemit.com/@oflyhigh/steemit-the-rich-list-of-steemit-and-how-to-get-it-from-steemdata)
