
---
title: '除夕快乐，公众号的BUG改掉了（查询剩余带宽，查询SP Delegations）'
permlink: bug-sp-delegations
catalog: true
toc_nav_num: true
toc: true
date: 2018-02-15 13:10:45
categories:
- steemdev
tags:
- steemdev
- bug
- wechat
- cn-programming
- cn
thumbnail: https://steemitimages.com/DQmdY2DNMMtXZo5pEvGvZrbzmmwzWbCj8NNFR1uVQT3HxKn/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


早晨有朋友说公众号没法查用户的带宽使用情况了，也没法查SP代理啦。其实呢，这个问题我昨天就发现啦，一直没来得及改，晚上终于抽出来时间解决一下啦。

![](https://steemitimages.com/DQmdY2DNMMtXZo5pEvGvZrbzmmwzWbCj8NNFR1uVQT3HxKn/image.png)
(图源 ：[pixabay](https://pixabay.com))

其实呢，公众号没出BUG，但是为啥原本好用的功能不好用了呢，其实这是一个好消息，就是STEEM出0.19.4版本啦。想了解0.19.4版本都有啥变化，可以去看看 @steemitdev 的帖子： [AppBase: The next step forward for the Steem blockchain (let the testing begin)](https://steemit.com/steem/@steemitdev/appbase-the-next-step-forward-for-the-steem-blockchain-let-the-testing-begin)

但是这个升级呢，也带来了一些和老版本程序的不兼容，以及一些BUG，恰巧我用的节点被升级到了新版本，所以工作号当然一些功能不好用啦。

这时候其实有个选择就是我用回低版本的节点，但是低版本的节点早晚要升级，要面对这么问题不是嘛，那么就及时勇敢的面对吧。

# 带宽查询

对于带宽查询问题，我看了一下STEEM的代码，原本一些系统参数，名称类似：**`STEEMIT_BLOCK_INTERVAL、STEEMIT_BANDWIDTH_PRECISION、STEEMIT_BANDWIDTH_AVERAGE_WINDOW_SECONDS`**等，现在都改成了**`STEEM_BLOCK_INTERVAL、STEEM_BANDWIDTH_PRECISION、STEEM_BANDWIDTH_AVERAGE_WINDOW_SECONDS`**类似这样的样子，后者无疑更为合理，但是原本使用这些参数的程序都要修改啦。

按照这个思路去改带宽计算的程序，改好后一切正常啦。

# SP代理查询

SP代理的程序并没有出错，但是公众号却返回超时，这是怎么一回事呢？经过我对比，这应该是0.19.4的一个BUG，**0.19.4版本的node，`get_vesting_delegations`返回无关的内容**。

说明如下：

#### JSON数据

`{"jsonrpc": "2.0", "method": "call", "params": ["database_api", "get_vesting_delegations", ["oflyhigh", "", 10]], "id": 1}`

#### 返回结果

###### 0.19.2 版本的节点

```
{'id': 1,
 'result': [{'delegatee': 'eval',
             'delegator': 'oflyhigh',
             'id': 46459,
             'min_delegation_time': '2017-06-11T10:43:03',
             'vesting_shares': '41420.217668 VESTS'},
            {'delegatee': 'exec',
             'delegator': 'oflyhigh',
             'id': 46453,
             'min_delegation_time': '2017-06-11T09:59:36',
             'vesting_shares': '4142028.451502 VESTS'},
            {'delegatee': 'oflyhigh.test',
             'delegator': 'oflyhigh',
             'id': 189549,
             'min_delegation_time': '2017-09-12T09:21:12',
             'vesting_shares': '59859.310443 VESTS'},
            {'delegatee': 'wuyueling',
             'delegator': 'oflyhigh',
             'id': 465434,
             'min_delegation_time': '2018-01-07T08:26:03',
             'vesting_shares': '4097.079325 VESTS'}]}
```
这组数据是正确的。

######  0.19.4 版本的节点

```
{'id': 1,
 'jsonrpc': '2.0',
 'result': [{'delegatee': 'eval',
             'delegator': 'oflyhigh',
             'id': 46459,
             'min_delegation_time': '2017-06-11T10:43:03',
             'vesting_shares': '41420.217668 VESTS'},
            {'delegatee': 'exec',
             'delegator': 'oflyhigh',
             'id': 46453,
             'min_delegation_time': '2017-06-11T09:59:36',
             'vesting_shares': '4142028.451502 VESTS'},
            {'delegatee': 'oflyhigh.test',
             'delegator': 'oflyhigh',
             'id': 189549,
             'min_delegation_time': '2017-09-12T09:21:12',
             'vesting_shares': '59859.310443 VESTS'},
            {'delegatee': 'wuyueling',
             'delegator': 'oflyhigh',
             'id': 465434,
             'min_delegation_time': '2018-01-07T08:26:03',
             'vesting_shares': '4097.079325 VESTS'},
            {'delegatee': 'tard',
             'delegator': 'ofrantis',
             'id': 603426,
             'min_delegation_time': '2018-02-03T03:20:06',
             'vesting_shares': '8204.635745 VESTS'},
            {'delegatee': 'estonia',
             'delegator': 'og-kush',
             'id': 44536,
             'min_delegation_time': '2017-06-08T11:51:36',
             'vesting_shares': '81534.993119 VESTS'},
            {'delegatee': 'tard',
             'delegator': 'oganenova',
             'id': 603427,
             'min_delegation_time': '2018-02-03T03:20:09',
             'vesting_shares': '2553.358430 VESTS'},
            {'delegatee': 'tard',
             'delegator': 'ogolor',
             'id': 603428,
             'min_delegation_time': '2018-02-03T03:20:12',
             'vesting_shares': '2047.233971 VESTS'},
            {'delegatee': 'tard',
             'delegator': 'ogradnov',
             'id': 603429,
             'min_delegation_time': '2018-02-03T03:20:15',
             'vesting_shares': '34107.722623 VESTS'},
            {'delegatee': 'otobot',
             'delegator': 'oguzhangazi',
             'id': 661076,
             'min_delegation_time': '2018-02-14T12:47:09',
             'vesting_shares': '51200.000000 VESTS'}]}
```

我们不难发现，0.19.4版本的节点返回了一些无关的数据（错误数据），而程序中把这些数据当成正常的处理，就会造成公众号返回的数据量太大，导致超时

#### 解决方法

一方面我去steem 那边提交的bug报告，另一方面我在公众号的程序中对数据进行二次筛选，目前是可以返回正确结果的。

# 除夕快乐

总算把公众号的问题解决掉了，**不然就要把这个问题留到狗年解决啦**，终于可以松口气啦。

在这顺便祝大家除夕快乐吧，今晚都安排了什么节目呢？

# 相关链接

* [AppBase: The next step forward for the Steem blockchain (let the testing begin)](https://steemit.com/steem/@steemitdev/appbase-the-next-step-forward-for-the-steem-blockchain-let-the-testing-begin)

- - -

This page is synchronized from the post: [除夕快乐，公众号的BUG改掉了（查询剩余带宽，查询SP Delegations）](https://steemit.com/@oflyhigh/bug-sp-delegations)
