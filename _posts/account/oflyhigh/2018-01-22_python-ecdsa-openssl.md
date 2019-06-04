
---
title: '用python-ecdsa验证OpenSSL生成的私钥公钥'
permlink: python-ecdsa-openssl
catalog: true
toc_nav_num: true
toc: true
date: 2018-01-22 13:06:21
categories:
- openssl
tags:
- openssl
- python
- ecdsa
- secp256k1
- cn
thumbnail: https://steemitimages.com/DQmUwfJKhimmg8ukGkeEpdAaKKyRjb6xWdnanTKvGTCbbGq/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在[之前的文章中](https://steemit.com/openssl/@oflyhigh/openssl-elliptic-curve-ec-algorithms)，我们学习了用OpenSSL命令行生成Elliptic Curve (EC) algorithms(椭圆曲线算法)私钥、公钥。在文末我们提出计划，将尝试ecdsa来操作OpenSSL生成的公私钥，来验证一下他们生成出来的东西是否本质上是一样的。

这一节我们将着手进行尝试，来解除心里的疑问。

![](https://steemitimages.com/DQmUwfJKhimmg8ukGkeEpdAaKKyRjb6xWdnanTKvGTCbbGq/image.png)
(图源 ：[pixabay](https://pixabay.com/))

# 思路 

我们知道OpenSSL可以生成公钥私钥，python-ecdsa 同样可以。那么如果用OpenSSL生成公钥公钥对，用python-ecdsa使用OpenSSL生成的私钥来生成公钥，再去与OpenSSL生成的公钥对比，如果二者相同，那么说明他们从相同的私钥生成的公钥完全一致。也就是说本质上是一样的。

其实还可以反过来用python-ecdsa生成公私钥对，然后用OpenSSL用ecdsa生成的私钥来生成公钥再对比，结果应该没什么不同，感兴趣的朋友可以自己试试。


# 方法

为了便于实现，我将上述思路简化为如下方法：
* OpenSSL生成公私钥
* python-ecdsa读入私钥生成SigningKey
* python-ecdsa使用SigningKey生成VerifyingKey_1
* 显示VerifyingKey_1的字符串形式
* python-ecdsa读入公钥生成VerifyingKey_2
* 显示VerifyingKey_2的字符串形式
* 比较VerifyingKey_1和VerifyingKey_2的字符串形式异同

# 步骤如下

* 用OpenSSL生成私钥
`openssl ecparam -name secp256k1 -genkey -out secp256k1-key.pem`

* 用OpenSSL使用上述私钥生成公钥
`openssl ec -in secp256k1-key.pem -pubout -out ecpubkey.pem`

* 使用python-ecdsa读入OpenSSL生成的私钥生成SigningKey
`sk = ecdsa.SigningKey.from_pem(open('secp256k1-key.pem').read())`

* 使用SigningKey生成VerifyingKey1
`vk1 = sk.get_verifying_key()`

* 显示vk1字符串形式
`print(hexlify(vk1.to_string()).decode())`
>7b640807271f75d09be794b54f1b3df5d1830cd3a2238325816ddc4dfd9eff2187794e70efd716fa5b2b13abc60cbdc2fdcda7f7779bf2fd7945d9d6936e0925

* python-ecdsa读入公钥生成VerifyingKey_2
`vk2 = ecdsa.VerifyingKey.from_pem(open('ecpubkey.pem').read())`

* 显示vk2字符串形式
`print(hexlify(vk2.to_string()).decode())`
>7b640807271f75d09be794b54f1b3df5d1830cd3a2238325816ddc4dfd9eff2187794e70efd716fa5b2b13abc60cbdc2fdcda7f7779bf2fd7945d9d6936e0925

* 当然了，我们也可以直接用以下代码来确认
`assert vk.to_string()==vk2.to_string()`

# 结论

通过上述测试，我们可知OpenSSL生成的私钥公钥和python-ecdsa生成，没有什么本质的区别(至少私钥到公钥部分是这样的)。

而我们之前的文章也介绍过，使用secp256k1-py也可以生成公私钥。也就是说***无论是OpenSSL还是secp256k1-py又或是python-ecdsa都可以用于生成私钥公钥，当然了，其实也都可以用于签名和校验。***

也就是说，无论是刀还是剑还是其它十八般兵器中的一种，都可以用来战斗，具体选择哪个，取决于你擅长那个喽。

![](https://steemitimages.com/DQmQcXkbdbWV5zrXMdr4YUnNBKyy3kaEPaYqQx2S63YQpbE/image.png)
(图源 ：[pixabay](https://pixabay.com/))

# 相关链接
* https://wiki.openssl.org/index.php/Command_Line_Elliptic_Curve_Operations
* [secp256k1-py 安装以及命令行操作](https://steemit.com/python/@oflyhigh/secp256k1-py)
* [对比一下ecdsa与secp256k1-py从私钥生成公钥](https://steemit.com/python/@oflyhigh/ecdsa-secp256k1-py)
* [ecdsa学习笔记 / SigningKey、VerifyingKey以及公钥](https://steemit.com/python/@oflyhigh/ecdsa-signingkey-verifyingkey)
* [OpenSSL 命令行生成Elliptic Curve (EC) algorithms(椭圆曲线算法)私钥、公钥](https://steemit.com/openssl/@oflyhigh/openssl-elliptic-curve-ec-algorithms)

- - -

This page is synchronized from the post: [用python-ecdsa验证OpenSSL生成的私钥公钥](https://steemit.com/@oflyhigh/python-ecdsa-openssl)
