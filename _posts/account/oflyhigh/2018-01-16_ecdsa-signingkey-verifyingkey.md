
---
title: 'ecdsa学习笔记 / SigningKey、VerifyingKey以及公钥'
permlink: ecdsa-signingkey-verifyingkey
catalog: true
toc_nav_num: true
toc: true
date: 2018-01-16 05:59:21
categories:
- python
tags:
- python
- python-ecdsa
- ecdsa
- cn-programming
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


在我们上一篇文章[对比一下ecdsa与secp256k1-py从私钥生成公钥](https://steemit.com/python/@oflyhigh/ecdsa-secp256k1-py)中，我们介绍了由私钥通过ecdsa以及secp256k1-py生成公钥的代码。

其中ecdsa生成公钥的代码是我从steem-python库中扒出来的，咳咳，一直挺好用的，我也就懒得看它具体是咋做的啦。

![](https://steemitimages.com/DQmUwfJKhimmg8ukGkeEpdAaKKyRjb6xWdnanTKvGTCbbGq/image.png)
(图源 ：[pixabay](https://pixabay.com))

# ecdsa 生成校验Key(VerifyingKey)

但是今天看ecdsa，发现从签名Key(SigningKey)生成校验Key(VerifyingKey)还是很方便的。比如拿我们之前用Hello World生成的私钥，那么生成校验Key(VerifyingKey)的代码如下：
```
import ecdsa
from binascii import hexlify, unhexlify
secret = 'a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e'
sk = ecdsa.SigningKey.from_string(unhexlify(secret), curve=ecdsa.SECP256k1)
vk = sk.get_verifying_key()
print(hexlify(vk.to_string()).decode())
```

以字符串形式输入如下：
>98c39ac0d91ff4cea6e79ae5836e50868c47191bca0fbfd2a6838d303665f506ad0a9ccb60c7758ce4c2759b8f7b0f731f0d8d90caf3778c4a65a0c53cf94210

![](https://steemitimages.com/0x0/https://steemitimages.com/DQmYD2wXWcJob67CwAVr1aaiS5pzmT2pWdva6Lx1vRUjqqy/image.png)

对比公钥压缩流程，可知
![](https://steemitimages.com/0x0/https://steemitimages.com/DQmfQFYDtexuAT9x1ELJZJ4oboBUrbLDfkmuz6NvEytvCPT/image.png)
ecdsa输出的字符串就是把x, y串接到一起。

也就是说，如果vk.to_string()加上个参数format，分别是raw、compressed、uncompressed比较易于理解了。

# ecdsa 生成公钥

知道了上述事实，在看我们之前使用ecdsa生成公钥的代码，就觉得可读性太差了。

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
print(compressed)
print(uncompressed)
```

为了生成公钥，我们需要知道以下要素：
* SigningKey: 可由私钥生成
* order： 由我们指定的曲线生成
* p：公钥点

那么我们把上述代码改进为更加便于阅读的方式：

```
import ecdsa
from binascii import hexlify, unhexlify
secret = unhexlify('a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e')
```
导入必要的库以及指定私钥

```
sk = ecdsa.SigningKey.from_string(unhexlify(secret), curve=ecdsa.SECP256k1)
vk = sk.get_verifying_key()
```
由私钥生成SigningKey，并进而生成VerifyingKey

```
order = ecdsa.SECP256k1.generator.order()
p = vk.pubkey.point
```
取出order和p (order还可以从order = vk.pubkey.order语句获得)

```
x_str = ecdsa.util.number_to_string(p.x(), order)
y_str = ecdsa.util.number_to_string(p.y(), order)
```
生成点p的x和y

剩下的就和我们之前的代码没什么区别了。

# 由VerifyingKey生成的字符串生成公钥

在文章开头，我们用
>print(hexlify(vk.to_string()).decode())
生成了VerifyingKey的字符串表示，也就是x_str+y_str

那么能否从这个字符串生成公钥呢？

一种方式是从字符串生成VerifyingKey，再用我们上述方法生成公钥。

而另外一种方式是直接将字符串拆分成x部和y部
`vk_b = unhexlify(vk_str)`
`xs =  vk_b[:ecdsa.SECP256k1.baselen]`
`ys = vk_b[ecdsa.SECP256k1.baselen:]`

剩下的步骤就不用多说啦。

# 结论

Python ECDSA是 ECDSA的纯Python实现，尽管速度要慢一些(相比ECDSA的C++实现)，但是还是相当好玩的。


# 相关文章

* https://github.com/warner/python-ecdsa
* [secp256k1-py 安装以及命令行操作](https://steemit.com/python/@oflyhigh/secp256k1-py)
* [温故而知新 /比特币(Bitcoin)有关的 Base58 & Base58Check、私钥(Private KEY)、公钥(Public KEY)、地址(Address)](https://steemit.com/cn/@oflyhigh/bitcoin-base58-and-base58check-private-key-public-key-address)

- - -

This page is synchronized from the post: [ecdsa学习笔记 / SigningKey、VerifyingKey以及公钥](https://steemit.com/@oflyhigh/ecdsa-signingkey-verifyingkey)
