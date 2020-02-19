
---
title: '升级本地EOS节点至v1.8.9 & 测试网 & Voice & steem'
permlink: eosv1-8-9----voice--steemebbe7ebfa0
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-01-18 12:11:24
categories:
- cn
tags:
- cn
- eos
- voice
- steem
- busy
thumbnail: 'https://cdn.steemitimages.com/DQmerztGKfE5bchdbGkcUgAURBmntCoHEAapC7uXLspf2yj/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---



自从上次哪个XXX项目空投搞了个CPU挖矿的项目后，我没上车，酸酸的我对EOS就有些失望了。而 且EOS价格之前一路下跌，我在18元附近把我138元建仓的EOS都清掉后，更是提不起什么兴趣来。

不过看EOSIO的Github上已经释出了EOSIO v2.0.0，才想起距离上次升级本地节点已经过了好久了呢，那么就升级一下喽。

不过虽说v2.0.0是最新版本，但是据说改动较大，可能会存在一些问题，那么就升级到v1.8.9好了。

# 升级

克隆源码，编译，虽然慢，但是好在一切顺利：
>![](https://cdn.steemitimages.com/DQmerztGKfE5bchdbGkcUgAURBmntCoHEAapC7uXLspf2yj/image.png)


编译完成后检查一下版本号：
>`nodeos --version`

返回如下信息，版本号v1.8.9，看来没搞错。
>![](https://cdn.steemitimages.com/DQmYXggRL1sdfmU67Q7S3wi4kquPfK8GSpqnYfzuppjvEkC/image.png)

替换原来的nodeos并重启，一切🆗！

# 测试网

EOSIO官方（B1）最近官宣个测试网：
>https://testnet.eos.io/

来感受一下：
>![](https://cdn.steemitimages.com/DQmZ33mVtiQCxj6g2kwWYZYxkHo1D91W3akBzVQZuUShsHP/image.png)

其实EOS除了主网(mainnet)外，已经有好几个测试网了，B1官宣这个测试网就有意思了。

# Voice

我猜测B1弄这个测试网的主要目的可能是要在上边部署Voice的测试版。毕竟之前B1曾放言要在今年2月14日上线Voice beta版，在主网上部署Voice肯定是来不及啦。

所以这个测试网的出现，极大可能是为Voice铺路。

# STEEM

昨天我在想，去年6月Voice就宣称要取代STEEM，而却一再放鸽子。这次宣布2月14日上线Beta版，也对STEEM造成了一定冲击。但是最后却大概率在测试网上部署Voice，上线主网依旧是遥遥无期，那么这对STEEM该是利好吧？

然后准备加仓一些STEEM看看，结果还没来得及操作，STEEM就暴涨了，又错过了几个亿。不过STEEM暴涨的原因到底是什么呢？

是因为SMT要上线？还是因为Voice的放鸽子？或者是因为BTC的减半行情提前到来？不过我觉得主要还是资本炒作吧，哈哈。不管如何，涨就是好事啊，最好涨回10美元/STEEM。

期盼着

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>


- - -

This page is synchronized from the post: ['升级本地EOS节点至v1.8.9 & 测试网 & Voice & steem'](https://steemit.com/@oflyhigh/eosv1-8-9----voice--steemebbe7ebfa0)
