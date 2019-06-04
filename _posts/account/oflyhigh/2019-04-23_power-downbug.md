
---
title: '修复微信公众号Power Down的一个小BUG'
permlink: power-downbug
catalog: true
toc_nav_num: true
toc: true
date: 2019-04-23 11:22:03
categories:
- cn
tags:
- cn
- wechat
- sp
- steem
- busy
thumbnail: https://cdn.steemitimages.com/DQmPaqviMYcQFp7xaD4UbTdM9DheK33cYVVhYWLCDUu2rJz/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---



微信公众号有一个查询账户Power Down的功能，当查询某个账户时，如果Power Down正在继续中，公众号会显示Power down信息。

![](https://cdn.steemitimages.com/DQmPaqviMYcQFp7xaD4UbTdM9DheK33cYVVhYWLCDUu2rJz/image.png)
(图源 ：[pexels.com](https://www.pexels.com/))

# 公众号的BUG

比如以@steemit账户为例，会显示类似如下Power Down信息：
>![](https://cdn.steemitimages.com/DQmbgtGNEVVUXcCZ8MAn9aWPQUHv1bTmR5pin3zESkThVFp/image.png)

但是当我用微信公众号查询另外一个账户时，发现并没有显示Power Down信息，而在steemd.com上查询这个账户，却发现还在进行Power Down中：
>![](https://cdn.steemitimages.com/DQmX2WE945SMRqHwYS8TMbTCE9F4TuVRJ2hofnQbem6U87Q/image.png)

这就奇了怪哉，为啥我的公众号不显示Power Down信息呢？仔细分析了我的实现代码，才发现端倪。

原来在公众号实现中，为了显示的内容更便于理解，每次Power Down的数量我换算成SP（精确到小数点后四位），然后判断需要Power Down的SP大于0，则认为Power Down正在进行中。

那么如果需要Power Down的SP非常小呢？我精确到小数点后四位的行为直接丢掉了部分数据，就会导致判断失误了。

解决起来也很简单，先行判断一下是否在Power Down就可以了。这时我们再查我之前查询的账户，就会发现一切正常了。
>![](https://cdn.steemitimages.com/DQmWHwHKC1bhJ78JGGtyK3fp676Sd4oLtXMreeLiZdxXv6u/image.png)

通过上图，我们可以看到显示的下次Power Down的SP不足0.0001，符合我们之前的分析。

>![](https://cdn.steemitimages.com/DQmbVsWAPiD2V1FgtTecZzSw9FumpyUPiRDreZ7hx8LTre2/image.png)

通过上图我们可以看到，待Power Down的VESTS为0.000011，按当前VESTS和SP的比率，折算成SP的话，还要除以约1997，可见这个数值有多么小了。

# 为什么不是13周？

不过新问题来了，说好的13周Down 完，这么出来第14周了（从第0周算起）？并且Power Down 154万SP，怎么还会剩个零头？

这要从***`vesting_withdraw_rate`***说起了
>![](https://cdn.steemitimages.com/DQmW7UdKKBebHKtvfxZLkiLwLF48tyKWiGP6txcCcofqxtT/image.png)

简单来讲，这个值是用待提取的VESTS除以13（13周）来计算得出的，而待提取的VESTS，系统中是用精度为小数点后6位的整数保存的，有时候可能会无法整除，就会余下小于0.000013的一个数。

而在处理Power Down时，只要是还没Down完，就继续Power Down，所以就会多出来一周来提取这个连零头都算不上的零头，真是浪费时间啊，哈哈。

要我说啊，STEEM或许可以做两个方向的修改，一种是在用户Power Down时，自动帮用户提取的VESTS向13（0.000013）取整，这样就不存在零头了；或者当发现到最后一周，小于13（0.000013），直接取消罢了。

# 微信公众号

微信公众号继续欢迎大家关注，有很多方便的小功能，还在不断完善中。

![](https://cdn.steemitimages.com/DQmZGHbCGz263CJHT5wLff6zqQJF5nEPC5RkZWJocmqLZE3/image.png)

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>


- - -

This page is synchronized from the post: [修复微信公众号Power Down的一个小BUG](https://steemit.com/@oflyhigh/power-downbug)
