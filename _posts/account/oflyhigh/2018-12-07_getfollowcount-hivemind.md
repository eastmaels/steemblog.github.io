
---
title: 'get_follow_count 和hivemind 八字不合啊，明早的切换是否会如期进行？'
permlink: getfollowcount-hivemind
catalog: true
toc_nav_num: true
toc: true
date: 2018-12-07 10:11:30
categories:
- witness-category
tags:
- witness-category
- steemdev
- steemit
- hivemind
- cn
thumbnail: https://cdn.steemitimages.com/DQmVwkMp1e8Sfv2QWeoFwE4epLtB3W8L8Bz1ua66ora3UY7/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在@steemitdev之前的帖子[Upcoming Changes to api.steemit.com](https://steemit.com/steemit/@steemitdev/upcoming-changes-to-api-steemit-com)曾提到最快要在2018-12-07 23:00:00 UTC(北京时间明早7:00)将api.steemit.com的一些调用重定向给hivemind，我曾经特意发个帖子介绍这事：[关于api.steemit.com 即将到来的变化](https://steemit.com/cn/@oflyhigh/api-steemit-com)

![](https://cdn.steemitimages.com/DQmVwkMp1e8Sfv2QWeoFwE4epLtB3W8L8Bz1ua66ora3UY7/image.png)
(图源 ：[pixabay](https://pixabay.com/))

今天就是12月7日啦，虽然还没到23:00:00 UTC，于是我想着测试一下，看看这些调用都好用，因为涉及到的API也不少，所以我就随便测试一下，比如说试试：`get_follow_count`

于是我给***`api.steemitdev.com`***发送了如下JSON内容
>`{"jsonrpc": "2.0", "method": "condenser_api.get_follow_count", "params": ["oflyhigh"], "id": 1}`

结果返回内容如下：
>![](https://cdn.steemitimages.com/DQmNWxSr2kF6d1VfrbT3j9JMgWG3eLgzuhKdo37xgwTUzGj/image.png)

什么，***我的Followers少了数千人，另外我Following -5个人，是什么鬼概念？***

我向***`api.steemit.com`***重新发送上述JSON内容，返回的结果是正确的。
>![](https://cdn.steemitimages.com/DQma3ZLC1XpWqKEKcThKQfyAxRiNCb6UgLNK3kJkFwePViB/image.png)


哎，出师不利，测试的第一个最简单的调用就返回完全错误的结果，不想再试下去了。

你问我这个API不正确有啥后果呀？其实也没啥大后果，就是网页上显示的followers和following人数不正确罢了。

正确的结果应该是这样：
>![](https://cdn.steemitimages.com/DQmdV7rRsRk1hfo8i3YVtxQ2J5QxsRWUxkU56JoRoS4FUNu/image.png)

错误的结果是这样：
>![](https://cdn.steemitimages.com/DQmah6oMGx8au2Na9kNn3AQX1E8oLgr1EwipfNYNsTdNE6h/image.png)

另外，如果你程序中有根据followers和following人数做一些判断等机制，那么判断的结果就没啥意义了。

2018-12-07 23:00:00 UTC换成北京时间是明早七点，@steemitdev帖子中提到的切换是否会如期进行？我倒是期望他们切换之前好好测试一下，毕竟晚点无所谓，出问题就不好玩了。

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>

- - -

This page is synchronized from the post: [get_follow_count 和hivemind 八字不合啊，明早的切换是否会如期进行？](https://steemit.com/@oflyhigh/getfollowcount-hivemind)
