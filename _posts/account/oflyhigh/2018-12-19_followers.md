
---
title: '分析一下为何Followers数量显示不对'
permlink: followers
catalog: true
toc_nav_num: true
toc: true
date: 2018-12-19 10:09:39
categories:
- witness-category
tags:
- witness-category
- steem
- steemit
- hivemind
- cn
thumbnail: https://cdn.steemitimages.com/DQmeptgwkGiekvjVyj4ePa6XN4RszrapvtnLFdYWwpKBWBT/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


因为我一直把8848个followers当成要达到了里程碑，所以经常关注一下自己的followers，可惜一直都是84xx，这阵市场不景气，玩STEEM的人不多，所以followers增长也极度缓慢。

![](https://cdn.steemitimages.com/DQmeptgwkGiekvjVyj4ePa6XN4RszrapvtnLFdYWwpKBWBT/image.png)

可是今天上线一看，哇，followers数量竟然达到了9403个，不但一举突破了8848的大关，并且还多出来500多个，这简直是***令人难以置信***。

我可不相信我的魅力有那么大，一下子增加近1000个followers，~~毕竟准备收购STEEMIT的事情我还没对外透露过~~，那么肯定是哪里出了问题。

再看一下Following，就更加坚定了这个想法，毕竟followers还有可能突然增加，但是Following我没去新关注别人，这个数字应该不变才对啊。

想起之前我的一个帖子：[get_follow_count 和hivemind 八字不合啊，明早的切换是否会如期进行？](https://steemitdev.com/witness-category/@oflyhigh/getfollowcount-hivemind)，我不禁怀疑，这次是不是也是类似的问题？***上次是变少，这次是变多了，总之都是不对。***

分别对***`api.steemit.com`***以及***`api.steemitdev.com`***发送对应JSON。
>`{"jsonrpc": "2.0", "method": "condenser_api.get_follow_count", "params": ["oflyhigh"], "id": 1}`

分别返回如下结果：

***`api.steemit.com`***
>![](https://cdn.steemitimages.com/DQmNrzFmm3T1NxiNRSX1DuwQhafbhBRSm3jxUZQJQjwxs5q/image.png)

***`api.steemitdev.com`***
>![](https://cdn.steemitimages.com/DQmP2dDPpS69rxx7H4Ak6otmoRX2hd6ck6NnumpKLhFmMQQ/image.png)

可见***`api.steemit.com`***对的；***`api.steemitdev.com`***返回的结果是错误的，和当前STEEMIT界面上显示的一样。

看了一下STEEMIT.COM首页的源码，找到类似如下两行代码：
>`"steemd_connection_client":"https://api-int.steemit.com"`
`"steemd_connection_server":"https://api-int.steemit.com"`

虽然我不清楚这两行中的client以及server有啥区别，但是毫无疑问的是，说STEEMIT.COM页面现在使用的是***`api-int.steemit.com`***节点，而不是***`api.steemit.com`***

看一下三个节点的版本信息：
***`api.steemit.com`***
>![](https://cdn.steemitimages.com/DQmf3yWkfvhkYPzegsTVUV9cNXimmyPdj4r9L4KRbD9jqP9/image.png)

***`api-int.steemit.com`***
>![](https://cdn.steemitimages.com/DQmWuntZubLQ5hGdJscDvJkYMitSKdmaovf3dMee2bPGiMU/image.png)

***`api.steemitdev.com`***
>![](https://cdn.steemitimages.com/DQmWuntZubLQ5hGdJscDvJkYMitSKdmaovf3dMee2bPGiMU/image.png)

所以答案就是，STEEMIT.COM当前使用的是***`api-int.steemit.com`***，和***`api.steemitdev.com`***相同的软件版本，至于其中怎么集成的JUSSI以及hivemind，或者说是JUSSI还是hivemind的问题，我就不清楚了。

但是，毫无疑问的是，返回的结果是不对的，好在这个并不影响我们在STEEM上的资产，那么不对就不对吧。

# 相关链接
* [get_follow_count 和hivemind 八字不合啊，明早的切换是否会如期进行？](https://steemitdev.com/witness-category/@oflyhigh/getfollowcount-hivemind)

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>

- - -

This page is synchronized from the post: [分析一下为何Followers数量显示不对](https://steemit.com/@oflyhigh/followers)
