
---
title: '新增STEEM API节点https://api.steem.buzz'
permlink: steem-api-https-api-steem-buzz
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-06-19 01:18:30
categories:
- cn
tags:
- cn
- node
- steem
- whalepower
- mini
- diy
- zzan
- dblog
- diamondtoken
- marlians
- upfundme
- actnearn
thumbnail: 'https://cdn.steemitimages.com/DQmbfQYgyQqjAGFpqauyf8s2PfPpzMV3W691KAH4RNa4ipU/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


由于STEEM分家的缘故，很多STEEM节点搬到了HIVE链上，所以STEEM上剩下的节点不多，而且也不太稳定

导致经常有用户出现不能登录steem.buzz的情况，所以需要经常查找可用的节点并换上

再加上原来的消息提醒依靠的节点动不动就掉线，导致经常replay消息和页面出现502错误

所以萌生搭建自己节点的想法。在@maiyude和@ety001的帮忙下，混合式节点https://api.steem.buzz就顺利搭建成功了

这个节点可以获取用户的消息提醒，所以就不需要原有的消息提醒服务了（https://notification.steem.buzz)

修改了SteemCN的消息提醒页面，用了steemit的前端代码：

![image.png](https://cdn.steemitimages.com/DQmbfQYgyQqjAGFpqauyf8s2PfPpzMV3W691KAH4RNa4ipU/image.png)

对这套消息提醒其实并不是太满意，因为少了转账提醒。但是总比搭建一个消息提醒服务来的省力

STEEM还是一个蛮练人的地方，从搭建前端，到搭建节点，可能下一步就是搭建区块链了

- - -

This page is synchronized from the post: ['新增STEEM API节点https://api.steem.buzz'](https://steemit.com/@ericet/steem-api-https-api-steem-buzz)
