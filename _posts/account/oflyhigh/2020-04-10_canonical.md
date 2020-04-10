
---
title: '每天进步一点点："Canonical" 交易签名'
permlink: canonical
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-04-10 14:12:24
categories:
- cn
tags:
- cn
- cn-programming
- signature
- bip
- steem-python
thumbnail: 'https://cdn.pixabay.com/photo/2016/10/15/18/23/pen-1743189_960_720.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在之前[学习用私钥签名](https://hive.blog/hive-105017/@oflyhigh/fgit8)的文章中，虽然我们完成了用私钥进行签名，但是我还留下一下问题，就是生成的签名尽管可以通过验证，但是是否适用于STEEM/HIVE区块链呢？这里涉及到一个知识点就是***`canonical signature`***。

![](https://cdn.pixabay.com/photo/2016/10/15/18/23/pen-1743189_960_720.jpg)
(图源 ：[pixabay](https://pixabay.com/))

# canonical signature

说到***`canonical signature`***，就要提到一个***`Signature Malleability`***，简单来讲就是对于同一个HASH，`signature (r,s)`以及`signature (r, -s (mod N))`都是合法的签名：
>In addition for every ECDSA `signature (r,s)`, the`signature (r, -s (mod N))` is a valid signature of the same message.

对于恶意攻击者而言，就可以利用这点来进行重播攻击，将一个交易用不同的签名提交两次（说的是啥？一头雾水ing）。

而杜绝这个问题的一个方法就是对签名的`r、s`进行一些约束，只有符合约束的才能算做合法的签名。

# steemd中相关代码

在steemd中对应的检查代码如下：
>![image.png](https://images.hive.blog/DQmdtMXkUjP3cfQ5ojDBLGaGGVhkETeJvbExWeh56AAanxk/image.png)

其中两个检查代码分别如下：
>![image.png](https://images.hive.blog/DQmSdrrsFj1agJ2CPrnAGbz2RPmPWL2HNEi6QZvfVWApxVd/image.png)

如下代码会作为参数传递给签名/验证的相关函数：
>`has_hardfork( STEEM_HARDFORK_0_20__1944 ) ? fc::ecc::bip_0062 : fc::ecc::fc_canonical );`

也就是说HF20之前用`fc_canonical`来检查，HF20之后用`bip_0062`来检查。话说，这个两个检查哪个更严格一些呢？另外bip_0062中为啥不检查

# steem-python 中的相应检查

steem-python中针对用使用`SECP256K1`生成的签名使用如下代码检查：
```
    def _is_canonical(self, sig):
        return (not (sig[0] & 0x80)
                and not (sig[0] == 0 and not (sig[1] & 0x80))
                and not (sig[32] & 0x80)
                and not (sig[32] == 0 and not (sig[33] & 0x80)))
```

而针对使用ecdsa生成的签名则使用如下代码来检查：
```
# Make sure signature is canonical!
#
lenR = sigder[3]
 lenS = sigder[5 + lenR]
if lenR is 32 and lenS is 32:
               其它代码
```

可见都不是遵循新的`bip_0062`标准。

不过这两组代码现在也都是工作的，我猜测是因为按着`bip_0062`标准，上述代码检查后的签名不符合标准的概率微乎其微，所以很难触发吧？😳


# 相关链接

* https://en.bitcoin.it/wiki/BIP_0062
* [Transaction malleability](https://en.bitcoin.it/wiki/Transaction_malleability)
* https://github.com/steemit/steem-python
* ["Canonical" transaction signatures #1944](https://github.com/steemit/steem/issues/1944)

- - -

This page is synchronized from the post: ['每天进步一点点："Canonical" 交易签名'](https://steemit.com/@oflyhigh/canonical)
