
---
title: 'RC系统解密之最大MANA(max_mana) / 如何提升'
permlink: rc-mana-maxmana
catalog: true
toc_nav_num: true
toc: true
date: 2018-10-12 01:24:06
categories:
- steemdev
tags:
- steemdev
- steem
- rc
- mana
- cn
thumbnail: https://cdn.steemitimages.com/DQmWHdxn9UY33VPd2Q83ZuqT83f9uvtQPe9MCQHLctBA8vz/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


想必STEEM HF20以来最让人又爱又憎的东西莫过于RC系统了(Resource Credit System)，爱它是因为它的引进会防止STEEM网络被滥用，为STEEM的可持续发展铺平道路；恨它是因为它曾给我们很多人带来困扰，尤其是对于一个SP小户而言，这个困扰可能至今尚未消除。

![](https://cdn.steemitimages.com/DQmWHdxn9UY33VPd2Q83ZuqT83f9uvtQPe9MCQHLctBA8vz/image.png)
(图源 ：[pexels.com]( https://www.pexels.com/))

为了搞明白RC系统到底是啥玩意，我准备去刻苦学习一下，请不要鄙视我用刻苦这个词，因为对于一个半吊子程序员，要搞明白这个复杂系统的那怕一小小丁点功能，其实也是很困难的。

闲话少叙，之前STEEM的带宽系统(bandwidth)中，用户有一个可用带宽概念，简单来讲，就是对于某个用户而言系统中有多少带宽可以被使用。在RC系统中也有一个类似的概念，它的名字叫做***`max_mana`***。

以我的账户 @oflyhigh 为例，可以在steemd.com中查询到如下内容：
![](https://cdn.steemitimages.com/DQmSVYZ7ZdfJ8qQku7oPxsbGow3nFBfqqsPXRjmaPbuy8tP/image.png)
其中
>`max_mana	164,858,794,024,586`

看起来好长一串数字(是不是代表我有好多资源可用😀），那么这个***`max_mana`***是如何计算出来的呢？

通过阅读代码，我发现***`max_mana`***使用如下代码获取：
>`mbparams.max_mana = get_maximum_rc( account, rc_account );`

而***`get_maximum_rc`***的代码如下：
>![](https://cdn.steemitimages.com/DQmWdRVVUURJBqp9RrCSnWuNETpngEd2v5FABiTji9Lh5fw/image.png)

从中我们不难看出***`max_mana的计算规则`***：
* 当前用户持有的vesting_shares
* 减去用户代理出去的vesting_shares
* 加上用户收到的vesting_shares代理
* 加上***`max_rc_creation_adjustment`***
* 减去下次Powerdown要变现的vesting_shares

其它几项都好理解，但是***`max_rc_creation_adjustment`***这个是什么鬼？通过阅读代码我们不难发现，这个值是在创建RC账户时就被确定的了***`create_rc_account`***

>![](https://cdn.steemitimages.com/DQmVGa3Y1JyzUFngYX7w7PdFHfzmBgRPGXfKTLU79tErnU8/image.png)


>![](https://cdn.steemitimages.com/DQmZ7KHNPisNGQo8fdVf11PNgh6f5DB1TakdnnCafcrWRZD/image.png)

在***`create_rc_account`***的实现中
>![](https://cdn.steemitimages.com/DQmU7PgU2ADGdStmTJLxVSoQwwvRKdmA69UyvtPziag9STt/image.png)

通过上述分析，不难得出结论，***`max_rc_creation_adjustment`***就是注册RC账户时注册费(STEEM形式)按当时状况计算的***`vesting_shares`***。***`（这个也解释了为何有的用户持有0SP，但是RC还不少，因为注册费高呀）`***

所以***`max_mana的计算规则`***简单来讲就是：
>***`用户vests - 代理出去的vests + 收到代理的vests + 注册费vests + 下次power down vests`***

![](https://cdn.steemitimages.com/DQmYV1QUf6euBQwbo3vCv6zZeo7Cz2SCdDENw3GHpwPdN32/image.png)
(图源 ：[pexels.com]( https://www.pexels.com/))

所以如果RC不够用，如何***提升`max_mana`的方法***就显而易见了（当然了，你RC够用就随便喽）
* Power up SP
* 减少对外代理
* 避免Power Down

# 参考链接

* https://github.com/steemit/steem

- - -

This page is synchronized from the post: [RC系统解密之最大MANA(max_mana) / 如何提升](https://steemit.com/@oflyhigh/rc-mana-maxmana)
