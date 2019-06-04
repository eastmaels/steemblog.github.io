
---
title: '继续学习Base58以及Base58Check'
permlink: base58-base58check
catalog: true
toc_nav_num: true
toc: true
date: 2017-07-27 03:50:48
categories:
- cn
tags:
- cn
- cn-programming
- base58
- python
- base58check
thumbnail: https://steemitimages.com/DQmQnHkdobwxGxmScVTao8W5t5mdxxbnW2notPjYi7icu4y/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


昨天学习了[Base58编解码](https://steemit.com/cn/@oflyhigh/base58)
今天来继续学习***Base58Check_encoding***
https://en.bitcoin.it/wiki/Base58Check_encoding

![](https://steemitimages.com/DQmQnHkdobwxGxmScVTao8W5t5mdxxbnW2notPjYi7icu4y/image.png)

# 为什么要Base58Check

你可能会问，既然有了Base58编码，我们已经不会搞错0和O, 1和l和I，也把大整数转换成了可读字符串，明明就足够了，为啥还要折腾？

好，让我们假设一种情况，你在程序中输入一个Base58编码的地址，尽管你已经***不会搞错0和O, 1和l和I***，但是万一你不小心***输错一个字符，或者少写多写一个字符***，会咋样？

你可能会说，没啥大不了的，错个字符而已嘛，这不是很常见嘛，我们输入QQ密码啥的也常输错，重新输入呗！但是你有没有考虑到，***如果是涉及金钱操作呢？比如你给一个比特币地址转账？***

实际上，我们给比特币地址转账等操作，网站或者软件中都会校验地址是否合法，而这个***校验合法性的关键操作，就是Base58Check!***

《Mastering Bitcoin》中对Base58Check的描述：
>To add extra security against typos or transcription errors, Base58Check is a Base58 encoding format, frequently used in bitcoin, which has a built-in error-checking code. The checksum is an additional four bytes added to the end of the data that is being encoded. The checksum is derived from the hash of the encoded data and can therefore be used to detect and prevent transcription and typing errors. 


# Base58Check的特色

以下是上述Wiki中介绍的Base58Check的特色
> * An arbitrarily sized payload.
> * A set of 58 alphanumeric symbols consisting of easily distinguished uppercase and lowercase letters (0OIl are not used) 
> * One byte of version/application information. Bitcoin addresses use 0x00 for this byte (future ones may use 0x05).
>  * Four bytes (32 bits) of SHA256-based error checking code. This code can be used to automatically detect and possibly correct typographical errors.
>  * An extra step for preservation of leading zeroes in the data.

我们不难看出，相比Base58, 它多出了***一个字节的版本/程序信息***以及***四个字节的校验码***

# 创建Base58Check编码字符串的流程

在上述Wiki中同样列出了创建ase58Check编码字符串的流程，我粗略的翻译如下：
1) 把版本/程序信息字节和负载(payload)按字节连接到一起
2) 对结果一执行两次SHA256操作并取前四个字节
3) 按字节把结果一和结果二的四个字节连接起来
4) 把结果三当成一个大数字，对结果三执行Bash58编码
(原链接第四步，分为4、5、6三个步骤，包括如何处理前导字节零)

上述步骤在《Mastering Bitcoin》一书中有一个图，很好的说明了这个过程
![](https://steemitimages.com/DQmR6osyE59XryeuQyffbf74WoMcN9vcMs8xYnQ9qDMH3tP/image.png)
(Figure 4-6. Base58Check encoding: a Base58, versioned, and checksummed format for unambiguously encoding bitcoin data)
Image source [Here](http://orm-chimera-prod.s3.amazonaws.com/1234000001802/images/msbt_0406.png)

# Python 库中的实现

有了上述学习和了解，再回过头来看steem python 库中对base58Check编解码的实现，相当容易理解了，就无需赘述了。
 

```
def base58CheckEncode(version, payload):
    s = ('%.2x' % version) + payload
    checksum = doublesha256(s)[:4]
    result = s + hexlify(checksum).decode('ascii')
    return base58encode(result)


def base58CheckDecode(s):
    s = unhexlify(base58decode(s))
    dec = hexlify(s[:-4]).decode('ascii')
    checksum = doublesha256(dec)[:4]
    assert(s[-4:] == checksum)
    return dec[2:]
```

其中俩次SHA256对应的函数实现如下：

```
def doublesha256(s):
    return hashlib.sha256(hashlib.sha256(unhexlify(s)).digest()).digest()
```

至于***hashlib***，想必你不会陌生
我们在 [这篇文章](https://steemit.com/cn/@oflyhigh/4pshou-and) 中揭秘了我们之前抽奖密码的生成方法
比如一等奖：
>`>>> hashlib.sha1(bytes('一等奖中奖密码:6', 'utf-8')).hexdigest()`
`'fcc420adc5de61752db7ecfa837564f45c47852b'`

# 参考链接

* https://en.bitcoin.it/wiki/Base58Check_encoding
* https://en.bitcoin.it/wiki/Address
* https://en.bitcoin.it/wiki/Technical_background_of_version_1_Bitcoin_addresses
* http://chimera.labs.oreilly.com/books/1234000001802/ch04.html

- - -

This page is synchronized from the post: [继续学习Base58以及Base58Check](https://steemit.com/@oflyhigh/base58-base58check)
