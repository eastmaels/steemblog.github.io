
---
title: '每天进步一点点：HP委托  / delegate_vesting_shares'
permlink: hp-delegatevestingshares
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-06-27 13:45:30
categories:
- cn
tags:
- cn
- cutehive
- cn-programming
- python
- delegate
thumbnail: 'https://images.hive.blog/DQmeXqRS5YJFSDQ58ztLeryhT52MbvKxjvkBDU8VqHCDuhX/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


好久没有更新我的每天进步一点点系列了，因为最近太忙了，忙到连写代码和调程序的时间都几乎没有。所以每天进步一点点说起来很简单，但是实际要做到还真的挺难呢。

今天抽出些时间完成了HP委托这个功能，我们知道，HP就相当于你在HIVE上的股权，点赞能点出多少金额、踩人有多大力度、甚至你在HIVE上能用多少资源(RC)，这些都和你持有多少HP息息相关。

![image.png](https://images.hive.blog/DQmeXqRS5YJFSDQ58ztLeryhT52MbvKxjvkBDU8VqHCDuhX/image.png)
(图源 ：[pixabay](https://pixabay.com/))

而HP委托，就是***A账户把自己的部分和HP相关的权益委托给B账户***，相应地A账户和HP相关的权益减少，B账户则做对应的增加。好了，不多介绍了，其实这玩意大家都应该很熟悉了。

# 按VESTS委托

为了实现HP委托 操作，我定义了如下operation模板：
```
op_delegate_vesting_shares= ['delegate_vesting_shares', {
    'delegator': '',
    'delegatee': '',
    'vesting_shares': ''
  }]
```
其中`delegator`委托人，就是将HP相关权益委托出去的账户，也就是A账户；`delegatee`被委托人，就是接收HP相关权益的人，也就是B账户。

所以操作时填充上边结构就行，比如在函数中做对应的赋值：
>`op[1]['delegator'] = delegator`
>`op[1]['delegatee'] = delegatee`
>`op[1]['vesting_shares'] = HIVE_ASSET(vesting_shares)`

之后，将op放入transaction，再签名广播就可以了
>`trx.append_op(op)`
>`trx.sign_digest(wif)`
>` trx.broadcast()`

将上述代码包装成函数，我们就可以使用诸如如下调用来完成HP委托了：
>`client.delegate("oflyhigh", "oflyhigh.test", "5000 VESTS", wif)`

被广播的transaction大致长这样：
>![image.png](https://images.hive.blog/DQmTKiCnrwUkEPi5peqdf3FHMQpZJaUaAHqiPrU7GMznh3r/image.png)


调用成功后，在https://hiveblocks.com/可以查询到对应的transaction：
>![image.png](https://images.hive.blog/DQmP46sQbjysnwg8srcjHRsk8d35PuokecnsgpJbYE3f2Jr/image.png)

# 按HP 委托

虽然按VESTS委托操作起来比较简单，但是总感觉不够直观，因为平时我们打交道的都是HP，而不是`vesting_shares`，尽管HP只是`vesting_shares`的表现方式，但是我们还是希望以HP的形式直接来操作HP委托。

其实实现起来也很简单，只要把HP转换成`vesting_shares`即可，这个需要从dynamic_global_properties的参数中计算出vesting_shares和HP的换算关系，然后转换即可。

实现相应功能后，使用如下调用即可：
>`client.delegate("oflyhigh", "oflyhigh.test", "5 HP", wif)`

调用成功后，在https://hiveblocks.com/可以查询到对应的条目，可见数值计算的还是很准的：
>![image.png](https://images.hive.blog/DQmUpM1W5HofzdF7WcyCyJkT7xS4thad1FLmeYpWJUC7yJx/image.png)


# 取消HP 委托

取消HP 委托也很简单啦，只要委托的数值为0，就可以啦。
>`client.delegate("oflyhigh", "oflyhigh.test", "0 VESTS", wif)`

广播出去的transaction大致长这样：
>![image.png](https://images.hive.blog/DQmb2mV8FuMeptMpfJKBS2wgZxAVBcfmf43TBVD8RvsfyL8/image.png)

调用成功后，在https://hiveblocks.com/可以查询到对应的条目：
>![image.png](https://images.hive.blog/DQmfZWbgGAMxwUwhaziRwuoewX9VkUS5q7iSzxGqzqjZZdP/image.png)

所以，知道了原理，实现按VESTS委托、按HP 委托、取消HP 委托还是很简单的。

***注：文中代码仅为演示，仅供参考***

- - -

This page is synchronized from the post: ['每天进步一点点：HP委托  / delegate_vesting_shares'](https://steemit.com/@oflyhigh/hp-delegatevestingshares)
