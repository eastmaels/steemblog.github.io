
---
title: '每天进步一点点：(实战)从HIVE/STEEM签名中恢复公钥 / Recover the Public KEY from the signature'
permlink: hive-steem-recover-the-public-key-from-the-signature
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-04-08 12:39:24
categories:
- cn
tags:
- cn
- cn-programming
- python
- ecdsa
- signature
thumbnail: 'https://cdn.pixabay.com/photo/2015/02/03/02/14/keyboard-621830_960_720.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


之前写过好几篇文章学习私钥、公钥、签名、验证以及从签名中恢复出公钥等等。但是这些都是理论，那么能否应用到实际中来呢？今天就来测试一下***从HIVE/STEEM交易签名中恢复出公钥***。

![](https://cdn.pixabay.com/photo/2015/02/03/02/14/keyboard-621830_960_720.jpg)
(图源 ：[pixabay](https://pixabay.com/))

大家都知道，STEEM/HIVE上有很多公共账户，比如以前的busy.org、utopian.app、steemauto等等，我们将账户授权给这个账户后，这些账户就可以用我们的用户名发帖/点赞等。

假设A账户授权给B账户，然后在区块链上我们看到A账户做了一个点赞操作，那么如何判断出是A账户操作的还是B账户操作的呢？

好久以前，我曾经探索过这个问题，我的思路是取出A账户所有管理的公钥，然后去对对应的操作的签名进行验证，如果哪个公钥验证成功，则说明是这个公钥对应的账户进行的操作。

上述思路的详情以及代码可以参考：[获取共同操作账户某个操作的真实操作者，附简单脚本 / Get real operator of a transaction made by the ID which operated by multi accounts, script attached](https://hive.blog/cn/@oflyhigh/get-real-operator-of-a-transaction-made-by-the-id-which-operated-by-multi-accounts-script-attached)

当年对私钥、公钥、签名这块学习的不够透彻，现在又过了2、3年，有没有更方便快捷的方法呢？答案就是直接从签名中恢复出公钥，这篇文章我们就来实际操作一下。

以如下这个[transaction](https://hiveblocks.com/tx/2e3091807ff1d25630d27815f8605f270f913f8d)为例：
>![image.png](https://images.hive.blog/DQma8ifxi5U62tT4LSVPudh2FyHQTwvzXXXPftryPbGmHLw/image.png)

我们可以通过如下代码获取这个transaction:
>`block = steem.get_block(block_num)`
`index = block['transaction_ids'].index(tx_id)`
`tx =  block['transactions'][index]`

代入block_num `42357710`和tx_id `2e3091807ff1d25630d27815f8605f270f913f8d`后，我们会得到类似如下的transaction(为了便于查看，签名部分我没截全）：
>![image.png](https://images.hive.blog/DQmeHga91ZLEdLEF8eWpMjSV1qCfNMEMi7bwA1iy6eSUAGf/image.png)

这个内容（去掉签名后）可以理解成要被签名的原始内容，而签名是针对原始内容序列化后的摘要进行的，获取摘要部分是很复杂的部分，以后再探究，我们可以先用steem-python的代码来获取摘要：
>`tx_obj = transactions.SignedTransaction(**tx)`
`tx_obj.deriveDigest("HIVE")`
`digest = tx_obj.digest`

好了，摘要我们有了，签名信息就更简单了，我们直接用如下语句就可以取到：
>`signature = tx["signatures"][0]`


现在从签名中恢复公钥的要素基本全了：`摘要` & `签名`。不过在这之前我们要知道STEEM/HIVE的签名和普通的签名有一丁点不同：那就是第一个字节包含了`recover_pubkey_parameter`这个东西，我们可以把它理解成实际公钥在恢复出来的公钥组的位置。
>`sig = unhexlify(signature)`
>`recover_pubkey_parameter = sig[0] - 4 -27`

接下来就是将signature剩余部分分解成为`r、s`，可以用如下代码(`r、s`长度均为32字节）：
>`r = int.from_bytes(sig[1:33], "big")`
`s = int.from_bytes(sig[33:65], "big")`

接下来就可以计算出公钥啦：
>`Sig = ecdsa.ecdsa.Signature(r, s)`
>`digest_number = ecdsa.util.string_to_number(digest)`
>`pubks = Sig.recover_public_keys(digest_number,ecdsa.SECP256k1.generator)`
>`pk = ecdsa.VerifyingKey.from_public_point(pubks[recover_pubkey_parameter].point, curve=ecdsa.SECP256k1)`
>`print(hexlify(pk.to_string(encoding="compressed")))`

算出来的公钥是一长串数字，再调用`gphBase58CheckEncode()`并加上STM前缀，就可以变成我们的公钥啦。公共上述代码，计算出来的公钥为：
>![image.png](https://images.hive.blog/DQmZSpfRDbmWYv9iBxQWoJs5NsTL5TEuAsKSV2a31YzaHD1/image.png)

再看一下我的POSTING Key：
>![image.png](https://images.hive.blog/DQmYad35TmAbq71MbR3xCE2SEK5GiKUQ6KzCBB2GvjUZehr/image.png)

是不是完全一样啊，所以我这波实战操作还是成功的，并且这也是一个有实际意义的操作，至少我自己觉得比2、3年前的代码要进步的多得多啦。

# 相关链接

* [每天进步一点点：从签名恢复公钥](https://hive.blog/hive-105017/@oflyhigh/397bw1)
* [每天进步一点点：学习用公钥验证](https://hive.blog/hive-105017/@oflyhigh/6yfk5i)
* [每天进步一点点：学习用私钥签名](https://hive.blog/hive-105017/@oflyhigh/fgit8)
* [每天进步一点点：STEEM/HIVE私钥/公钥的还原](https://hive.blog/hive-105017/@oflyhigh/steem-hive)
* [每天进步一点点：STEEM/HIVE公钥(Public Key)生成探索](https://hive.blog/hive-105017/@oflyhigh/steem-hive-public-key)
* [每天进步一点点：STEEM/HIVE私钥(Private Key)生成探索](https://hive.blog/hive-105017/@oflyhigh/steem-hive-private-key)
* [获取共同操作账户某个操作的真实操作者，附简单脚本 / Get real operator of a transaction made by the ID which operated by multi accounts, script attached](https://hive.blog/cn/@oflyhigh/get-real-operator-of-a-transaction-made-by-the-id-which-operated-by-multi-accounts-script-attached)

- - -

This page is synchronized from the post: ['每天进步一点点：(实战)从HIVE/STEEM签名中恢复公钥 / Recover the Public KEY from the signature'](https://steemit.com/@oflyhigh/hive-steem-recover-the-public-key-from-the-signature)
