
---
title: '温故而知新 /比特币(Bitcoin)有关的 Base58 & Base58Check、私钥(Private KEY)、公钥(Public KEY)、地址(Address)'
permlink: bitcoin-base58-and-base58check-private-key-public-key-address
catalog: true
toc_nav_num: true
toc: true
date: 2017-11-07 02:35:06
categories:
- cn
tags:
- cn
- cn-programming
- python
- bitcoin
- wif
thumbnail: https://steemitimages.com/DQmdqLCmAiWQy8rbk82JTrjNombFv3LfzQKA8vjSbDYkVWE/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


这两天在学习STEEM的交易签名，由于智商感人，所以进展缓慢。里边涉及有一些公钥私钥方面的内容，然后惊觉***我之前对这部分内容的了解，已经忘干净了！***从头再学，有些压力，还好之前学习的内容都记录在STEEMIT上，把之前的相关帖子都翻看一下，顺便摘录一些重点贴在这篇文章中，算是做笔记吧。

***STEEM中~~照搬了~~借鉴了比特币(Bitcoin)的那一套东西，所以之前写的比特币(Bitcoin)一系列文章对自己还是很有参考价值的。***

![](https://steemitimages.com/DQmdqLCmAiWQy8rbk82JTrjNombFv3LfzQKA8vjSbDYkVWE/image.png)

本文主要涉及以下方面内容：
* ***Base58 & Base58Check***
* ***私钥(Private KEY)***
* ***公钥(Public KEY)***
* ***地址(Address)***
<br>
# Base58 & Base58Check

因为涉及私钥、公钥的时候经常要用到***`Base58 & Base58Check`***编解码，所以首先简要介绍一下这两个东西。

#### Base58

***`Base58`***简单地说，就是***把数字表示成不容易输入错误的文本编码，因为这组不容易出错的文本编码一共包含58个字符，所以叫Base58***

编解码规则也很简单，编码就是***把文本表示数字串，转换成一个大整数，然后再按58进制表示。***

58进制和16进制类似，16进制数字0-15和0x0 - 0xF是一一对应的，而这个0-57，需要查表对应，仅此而已！解码就是逆过程！

码表为：
***`BASE58_ALPHABET = b"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"`***

#### Base58Check

***`Base58Check`在就是`Base58`基础上加上了版本信息以及校验***，这样如果不小心输错一两个字符，就会检查出来。

***`Base58Check`***流程可以用下图表示：
![](https://steemitimages.com/DQmR6osyE59XryeuQyffbf74WoMcN9vcMs8xYnQ9qDMH3tP/image.png)
Image source [Here](http://orm-chimera-prod.s3.amazonaws.com/1234000001802/images/msbt_0406.png)

整理成文字说明如下：
* 把版本/程序信息字节和负载(payload)按字节连接到一起
* 对结果一执行两次SHA256操作并取前四个字节
* 按字节把结果一和结果二的四个字节连接起来
* 把结果三当成一个大数字，对结果三执行Bash58编码
 (原链接第四步，分为4、5、6三个步骤，包括如何处理前导字节零)
<br>
# 私钥(Private KEY)

#### 私钥是什么

***私钥就是一个256位，取值处于1到n - 1之间的随机数***
其中： ***n = 1.158 * 10<sup>77</sup>***

#### 私钥表示方式

私钥有几种表示方式
![](https://steemitimages.com/DQmSkr2rwj81AanQ5BD41MxvdmVtVEPEba7jf5SeqwZwnEg/image.png)
其中***`WIF`亦即： `Wallet Import Format (WIF)`***

* ***64位16进制串***就是把私钥直接转换
* ***Base58编码***就是对64位16进制串直接编码 （https://blockchain.info中有用到）
* ***WIF***就是在64位16进制串对应的字节串前加上***`前缀0x80`***， 并用Base58Check编码
* ***WIF-compressed***就是在64位16进制串对应的字节串前加上***`前缀0x80`***，并加上***`后缀0x01`***， 并用Base58Check编码

#### 私钥的生成

私钥可以用hashlib.sha256来生成（仅供参考，请勿使用）
```
>>> import hashlib
>>> from binascii import hexlify, unhexlify
>>> s = hashlib.sha256(bytes('Hello World', 'utf-8')).digest()
>>> print(hexlify(s).decode('ascii'))
a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e
```
<br>
# 公钥(Public KEY)

涉及到椭圆曲线等数学知识我就方了，直接上干货吧。

#### 如何生成公钥

* `公钥(K)`可以通过椭圆曲线运算由`私钥(k)`计算得出
* `私钥(k)`到`公钥(K)`计算公式：***` K=k∗G`***
* 生成过程使用`secp256k1标准`中定义的椭圆曲线以及一组数学常量
* 从`私钥(k)`到`公钥(K)`结果是确定的，并且只能单向运算
* 使用Python的ecdsa库，可以轻松实现`私钥(k)`到`公钥(K)`的计算

#### 关于***` K=k∗G`***
其中小***`k`是我们的`私钥`***，***`G`是`生成点`***，***`K`是结果亦即`公钥`是`曲线上的另外一个点`***。

因为生成点对所有的比特币用户都是相同的，所以同一个私钥k乘以生成点G，总会得到相同的公钥K。***所以从k到K是确定的，并且只能单向运算。***这就是为何比特币地址(由公钥生成)可以告诉任何人不用担心泄露私钥。

#### 公钥压缩

***公钥(K)是通过私钥(k)乘以生成点(G)得到的，并且是椭圆曲线上的一个点P(x, y)***
![](https://steemitimages.com/DQmb7rcLbqp9vb4ZawJTtvPLNCkYzWhPvddmAJjmY69V1cb/image.png)

将`点P(x, y)`表示成公钥其实就是***加上前缀04并把x和y连接起来***
![](https://steemitimages.com/DQmTegJz1aAW9VwFRyQ3G7AwGHiRs5GUe8M31b3ucmg7gJg/image.png)

一共是520bits (8 + 256 + 256)，使用16进制字符串表示，要130个字节，浪费网络资源。

公钥压缩原理：
根据***椭圆曲线的方程，我们是可以通过x求得y的***，所以我们只要保留x部分就可以了

公钥压缩流程：
![](https://steemitimages.com/DQmfQFYDtexuAT9x1ELJZJ4oboBUrbLDfkmuz6NvEytvCPT/image.png)
公钥压缩的示意图( Source: [《Mastering Bitcoin》](http://chimera.labs.oreilly.com/books/1234000001802/ch04.html#_key_formats))

#### 示例代码：私钥生成公钥
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
p = 115792089237316195423570985008687907853269984665640564039457584007908834671663
x = int(hexlify(x_str).decode('ascii'), 16)
y = int(hexlify(y_str).decode('ascii'), 16)
(x ** 3 + 7 - y**2) % p
```
<br>
# 地址(Address)

***比特币地址由公钥按固定流程生成。***

生成流程如下：
![](https://steemitimages.com/DQmZ3Zc3bNTYX12BcsyWdQ8aKuJfd8uUeznRVGS2q8bky17/image.png)

根据地址生成流程可知：
* 压缩公钥生成对应压缩公钥的地址
* 未压缩公钥生成对应未压缩公钥的地址

***地址和私钥本身是不压缩的，只是代表对应的公钥是压缩的而已***

#### 示例代码：公钥生成地址

```
def ripemd160(s):
        ripemd160 = hashlib.new('ripemd160')
        ripemd160.update(unhexlify(s))
        return ripemd160.digest()

def get_address(public_key):
        pkbin = unhexlify(public_key)
        addressbin = ripemd160(hexlify(hashlib.sha256(pkbin).digest()))
        address = base58CheckEncode(0x00, hexlify(addressbin).decode('ascii'))
        return address
```


# 参考资料(以前文章)
* [学习了一下Base58编解码](https://steemit.com/cn/@oflyhigh/base58)
* [继续学习Base58以及Base58Check](https://steemit.com/cn/@oflyhigh/base58-base58check)
* [继续学习比特币的私钥 & 私钥的表示方法](https://steemit.com/cn/@oflyhigh/6qp5kr-and)
* [每天进步一点点： 学习比特币的公钥](https://steemit.com/cn/@oflyhigh/61quvw)
* [每天进步一点点： 比特币的公钥压缩与地址](https://steemit.com/cn/@oflyhigh/4xgqtd)
* [真金白银出真知： 测试一下生成的比特币地址😭😭](https://steemit.com/cn/@oflyhigh/26qjos)


***免责声明，本文为个人理解，示例仅供参考
因使用文中代码或地址造成的损失，概不负责！***

- - -

This page is synchronized from the post: [温故而知新 /比特币(Bitcoin)有关的 Base58 & Base58Check、私钥(Private KEY)、公钥(Public KEY)、地址(Address)](https://steemit.com/@oflyhigh/bitcoin-base58-and-base58check-private-key-public-key-address)
