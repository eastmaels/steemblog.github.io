
---
title: '每天进步一点点：STEEM/HIVE公钥(Public Key)生成探索'
permlink: steem-hive-public-key
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-03-30 14:30:18
categories:
- cn
tags:
- cn
- cn-programming
- python
- bitcoin
- wif
thumbnail: 'https://cdn.steemitimages.com/DQmch2dccTeSUgEMFFJH7vPcmgv7ZW1cSQfG4BN6z51pm9T/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


上一篇文章中，我们探索了[STEEM/HIVE私钥(Private Key)是如何生成的](https://hive.blog/hive-105017/@oflyhigh/steem-hive-private-key)，得出结论是和比特币一样一样的，那小伙伴们有没有很好奇，STEEM/HIVE公钥(Public Key)又是如何生成的呢？


![image.png](https://cdn.steemitimages.com/DQmch2dccTeSUgEMFFJH7vPcmgv7ZW1cSQfG4BN6z51pm9T/image.png)
(图源 ：[pixabay](https://pixabay.com/))

讲真，我也很好奇啊，那一起来探索一下吧。

# 比特币的公钥

之前学习比特币相关内容时，我们得出过如下结论：

>* 公钥(K)可以通过椭圆曲线运算由私钥(k)计算得出
>* 私钥(k)到公钥(K)计算公式： K=k∗G
>* 生成过程使用secp256k1标准中定义的椭圆曲线以及一组数学常量
>* 从私钥(k)到公钥(K)结果是确定的，并且只能单向运算
>* 使用Python的ecdsa库，可以轻松实现私钥(k)到公钥(K)的计算

并且有如下代码：
```
import ecdsa
from binascii import hexlify, unhexlify
secret = unhexlify('a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e')
order = ecdsa.SigningKey.from_string(secret, curve=ecdsa.SECP256k1).curve.generator.order()
p = ecdsa.SigningKey.from_string(secret, curve=ecdsa.SECP256k1).verifying_key.pubkey.point
x_str = ecdsa.util.number_to_string(p.x(), order)
y_str = ecdsa.util.number_to_string(p.y(), order)
compressed = hexlify(bytes(chr(2 + (p.y() & 1)), 'ascii') + x_str).decode('ascii')
uncompressed = hexlify(bytes(chr(4), 'ascii') + x_str + y_str).decode('ascii')
```
其中涉及到`compressed`以及`uncompressed`，可以参考下图：
>![image.png](https://cdn.steemitimages.com/DQmZTADw51R2eMcciNhmmhHfFcdnUdua2ps4zUJZ6HK65SD/image.png)
( Source: 《Mastering Bitcoin》)

将我们之前的文章中得到的私钥代入上述代码，得到如下两种类型公钥：
>![image.png](https://cdn.steemitimages.com/DQmYAvryDygpM48zQG7iL635tbgmSq9anj5EMCTiL6J2nnW/image.png)

不过怎么看和STEEM/HIVE的公钥都不像呢？

# 比特币地址

再来想想我们拿到的私钥，是用加了前缀(0x80)并用Base58Check编码的256位二进制随机数，最终是可以阅读的字符串，那公钥是不是也应该利用差不多的方式生成可阅读字符串呢？

在比特币系统中，地址的生成方式如下：
>![image.png](https://cdn.steemitimages.com/DQmSkchDDcx14yrg7A6mRHT5XjB8M3H5xDjGYXYoWd3zWUs/image.png)
( Source: 《Mastering Bitcoin》)

# STEEM/HIVE中地址：

STEEM/HIVE中是不是也是这样呢？我看了一下steem-python代码，发现并没有使用比特币地址的生成方式，而是使用了如下编码规则：
```
def gphBase58CheckEncode(s):
    checksum = ripemd160(s)[:4]
    result = s + hexlify(checksum).decode('ascii')
    return base58encode(result)
```
简单来讲，就是把我们之前获取比特币形式的公钥，使用***`gphBase58CheckEncode`***编码即可。

让我们来测试一下，对之前代码生成的公钥进行编码：
>![image.png](https://cdn.steemitimages.com/DQmf2pjC6MEpDz5SbFghMM7s3hRHFXxxvzjYNrP8eX4c1px/image.png)

```
原始私钥:  415ac848c316b406920e0a4b43adc7f93c45bb89124f80ced8d1f50fae4f080d
编码私钥:  5JK4yeeivq6j3y4sVwZESJiuBPdi1ZinnePreZ1syeQ9HAMWzBH
压缩公钥:  02f5810b31e23d76a1b8a76cfe43d7168abbaf6363c3927aafaf4751697488d329
非压缩公钥:  04f5810b31e23d76a1b8a76cfe43d7168abbaf6363c3927aafaf4751697488d329147d6d4e232cf7de60d94b3962ea260894fe02274223b2a3050eb9b7e655ab4e
压缩地址:  6kcRebtq32xhvWU169smx9W8wRcENWMDMv11mEZNAM8CwxM3r9
非压缩地址: 3s64c2YwPXWh3GEky4TmJeqGsEbXtBReey9byPwtzGrEUfdqiyWCwZkiqPqLuGbMpiLcu1UQAUoHFTZ6sYVNDHzqCnMjJX
```
通过分析steem-python代码，可知地址都是用压缩公钥生成的，并且在STEEM/HIVE系统中要加上前缀`STM`，所以最终得到的STEEM/HIVE可阅读公钥(地址)为：
>`STM6kcRebtq32xhvWU169smx9W8wRcENWMDMv11mEZNAM8CwxM3r9`

# 校验

使用我们上个帖子中的测试代码，进行测试：
>![image.png](https://cdn.steemitimages.com/DQmXAqXzEAVMK3ApYgX7cM1uAbVDK9PMULHTxE9NeVXfhZb/image.png)


和我们生成的对比，完全一致。

# 结论

STEEM/HIVE使用的公钥，生成方法和比特币中公钥的生成没有区别，也有压缩和非压缩两种。

然后STEEM/HIVE中使用***`gphBase58CheckEncode`***对其中的***压缩公钥***进行编码，并加上***`STM`***前缀。

# 相关链接

* [每天进步一点点：STEEM/HIVE私钥(Private Key)生成探索](https://hive.blog/hive-105017/@oflyhigh/steem-hive-private-key)

- - -

This page is synchronized from the post: ['每天进步一点点：STEEM/HIVE公钥(Public Key)生成探索'](https://steemit.com/@oflyhigh/steem-hive-public-key)
