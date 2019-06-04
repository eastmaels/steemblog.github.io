
---
title: '关于api.steemit.com 即将到来的变化'
permlink: api-steemit-com
catalog: true
toc_nav_num: true
toc: true
date: 2018-12-01 02:20:33
categories:
- cn
tags:
- cn
- steemit
- api
- hivemind
- hive
thumbnail: https://cdn.steemitimages.com/DQmPM57eDhwnPNxuJwEW7V8ny9kxV1eBfau3Xq4KkvKuq31/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


早晨看到 @steemitdev的帖子[Upcoming Changes to api.steemit.com](https://steemit.com/steemit/@steemitdev/upcoming-changes-to-api-steemit-com)，里边讲到最快将在七天之后，api.steemit.com的一些调用将会被重定向给hivemind。

![](https://cdn.steemitimages.com/DQmPM57eDhwnPNxuJwEW7V8ny9kxV1eBfau3Xq4KkvKuq31/image.png)

帖子中列举一些受影响的API，理论上讲，无用是用节点本身的实现，还是用hivemind（基于数据库）的实现，调用得出的结果应该都是一致的，但是仅仅是理论来讲罢了。

如果你的程序涉及到文中提到的API，建议及时做响应的测试以及调整，以免api.steemit.com变化后，响应的程序罢工。

STEEMIT公司这个操作可以看作是继裁员之后缩减开支的另一重大举措，其实在裁员贴中就已经提到了相应的内容。只不过我没想到这次操作会这么迅速，还有就是步调会这么大，或许是准备快刀斩乱麻了。

比较悲催的是我在声明贴中看到了几个我用到了的API，并且没看明白是要表达啥意思？

比如这句：
Deprecated/Unused Discussion Queries - NOT ported!

NOT  ported!我懂，可是里边涉及的API啥时候被弃用了或者不用了呢？比如`get_discussions_by_author_before_date` 这个我正在用着啊！！😭

还有这几个API，咋就要不可用了呢？（Additionally, the following have not been ported, which means they may become unavailable.）

>`get_blog_entries()`
`get_blog()`
`get_reblogged_by()`



总之那些基于api.steemit.com 做应用的，快去测试一下吧，测试地址为：***`api.steemitdev.com`***，更多详情，自己去@steemitdev的帖子里看吧。

请容我吐血5升先，本来就觉得STEEM的文档混乱，一团糟，这下更懵了😭

# 相关链接

* [Upcoming Changes to api.steemit.com](https://steemit.com/steemit/@steemitdev/upcoming-changes-to-api-steemit-com)

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>

- - -

This page is synchronized from the post: [关于api.steemit.com 即将到来的变化](https://steemit.com/@oflyhigh/api-steemit-com)
