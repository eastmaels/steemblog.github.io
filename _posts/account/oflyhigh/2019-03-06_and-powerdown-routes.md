
---
title: '查询 & 取消(或设置) PowerDown Routes'
permlink: and-powerdown-routes
catalog: true
toc_nav_num: true
toc: true
date: 2019-03-06 01:36:51
categories:
- steemdev
tags:
- steemdev
- steemstem
- cn-stem
- steem
- cn
thumbnail: https://cdn.steemitimages.com/DQmYUfP1JC39FuVuNgBfzrJ4pZ6iJ55TdqX4agzSNL1aiV5/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


今天在[steemd.com](https://steemd.com)浏览自己的账户时，发现竟然被设置了PowerDown Routes，惊出一身冷汗。

![](https://cdn.steemitimages.com/DQmYUfP1JC39FuVuNgBfzrJ4pZ6iJ55TdqX4agzSNL1aiV5/image.png)
(小路，本人拍摄）

# 何为PowerDown Routes？

那么什么是***PowerDown Routes***呢？

PowerDown Routes又称为Withdraw Routes，简单来讲，就是Power Down的时候不Power Down到自己的账户，可以按照设定的比例到其它账户，并可以设置是否直接Power Up。

前段时间闹得沸沸扬扬的 @steemit 官方账户Power Down就是通过设置PowerDown Routes直接提现到交易所，这样就省却了先Power Down再Transfer到交易所得繁琐步骤了。

另外一种情况就是账户被盗，黑客除了转走你活期STEEM/SBD以外，还可能***帮你设置PowerDown Routes***，这样即便你通过恢复账户功能重置了密码，但是只要你继续Power Down，那么钱还会源源不绝地到达黑客账户。

# 如何查询PowerDown Routes？

听起来是不是很恐怖😱，我觉得也是，为什么我的账户被设置上了PowerDown Routes呢？难道是被黑客盗取了？可是他为何没有把我的活期STEEM/SBD一并偷走呢？

解决这些疑问很简单，查询一下PowerDown Routes的设置就清楚了，查询有好多方法，比如直接调用API，又比如调用一些库封装好的函数，或者最简单的方式就是使用我们的公众号查询了。

#### API方式

调用如下JSON
>`{"jsonrpc": "2.0", "method": "condenser_api.get_withdraw_routes", "params": ["oflyhigh"], "id": 1}`

返回如下内容：
>![](https://cdn.steemitimages.com/DQmSWDhojDHD8U7kfDwWMvvocJsytvesT1bCvq19r6hp8Dm/image.png)

#### steem-python函数

简单示例如下：
>`from steem import Steem`
`from pprint import pprint`
`steem = Steem()`
`routes = steem.get_withdraw_routes('oflyhigh', 'all')`
`pprint(routes)`

返回如下：
>![](https://cdn.steemitimages.com/DQmNjTvxkdd4iwJGHvpB4WuRNkLfhJYwikEDWkzkiRZmq1d/image.png)

#### 微信公众号方式

向微信公众号发送如下指令：
>***`@oflyhigh?pdr`***

返回如下内容：
>![](https://cdn.steemitimages.com/DQmbp77Ex4xcXsJE52aekQriMTyGpUYKivF6uWaE1nVeKQ6/image.png)

注，查询支持方向，分别为***`outgoing`***、***`incoming`***、***`all`***，这些方向如何起作用可以参考这段代码：
>![](https://cdn.steemitimages.com/DQmV2mEKAjyQoszdgbfhGRQeWwkHJXFY9EKtS8W4PxQ5Y9o/image.png)

# 如何取消或设置PowerDown Routes？

通过上述查询，可以知道我账户的PowerDown Routes是我自己测试时手欠设置上的，不是被盗，总算可以松一口气啦。

可是作为强迫症患者，是不允许这样情形继续存在下去的，那么要如何取消或者重新设置PowerDown Routes呢？

其实设置和取消是同一个问题，我们来看一下withdraw_route的相关结构体：
````
struct withdraw_route
{
   string               from_account;
   string               to_account;
   uint16_t             percent;
   bool                 auto_vest;
};

enum withdraw_route_type
{
   incoming,
   outgoing,
   all
};
````

和之前我们查询时结果中的结构是一样的。所以，对于一个账户而言：设置的话，只需要设置目标账户、百分比、是否自动Power UP即可；取消的话，只需把百分比设置为0即可。

#### 使用STEEMPY设置或取消

最简单的设置方式是使用steempy——steempython附带的命令行客户端。如何使用请查阅帮助：
>`steempy powerdownroute --help`

返回如下，应该不用我多说啥啦。
>![](https://cdn.steemitimages.com/DQmW5TgHcXNSGZzzRdmrYj4ekgpJ8iBke6FbFWyYCFmnAVx/image.png)

#### 使用steem-python 函数

steem-python中设置PowerDown Routes的相关函数为：***`set_withdraw_vesting_route`***

简单的示例代码如下：
>`from steem import Steem`
`steem = Steem()`
`steem.set_withdraw_vesting_route("eval", 0, "oflyhigh")`
`steem.set_withdraw_vesting_route("exec", 0, "oflyhigh")`


执行上述代码成功后，我们再来查询一下，是不是已经去掉啦？😄
>![](https://cdn.steemitimages.com/DQmZTSiBuEZxp8rrKyTHbSgCtvbH9qgcG1bbBLLLV7YzymE/image.png)

***注：使用steem-python之前需要安装steem-python以及导入私钥等***

好了，关于 PowerDown Routes的查询、设置与取消就介绍到这里了，取消掉了@oflyhigh的 PowerDown Routes后，强迫症患者总算可以松一口气啦。

# 公众号添加方法

* 方式一：
进入微信通讯录->点击公众号->点右上角加号->搜索steemit，关注即可。

* 方式二：
直接扫描以下二维码：
![](https://cdn.steemitimages.com/DQmcE9CeWnQQc7EL3fKfD5jKVSff8qKVbCrMYyK2h1TntWq/image.png)


# 相关链接

* [steem-python](https://github.com/steemit/steem-python)
* [微信公众号支持查询Power Down Routes (又称为：Withdraw Routes)](https://steemit.com/security/@oflyhigh/power-down-routes-withdraw-routes)
* [如何查询 PowerDown Route](https://steemit.com/cn/@oflyhigh/powerdown-route)
* [你或许不知道的STEEMIT(STEEM)一些隐藏功能](https://steemit.com/cn/@oflyhigh/steemit-steem)

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>

- - -

This page is synchronized from the post: [查询 & 取消(或设置) PowerDown Routes](https://steemit.com/@oflyhigh/and-powerdown-routes)
