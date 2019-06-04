
---
title: '继续探索python-bitshares的Memo类 / Pub(Alice) * Priv(Bob) = Pub(Bob) * Priv(Alice)'
permlink: python-bitshares-memo-pub-alice-priv-bob-pub-bob-priv-alice
catalog: true
toc_nav_num: true
toc: true
date: 2018-01-05 13:56:24
categories:
- python-bitshares
tags:
- python-bitshares
- bitshares
- python
- cn
- cn-programming
thumbnail: https://steemitimages.com/DQmXxyvF5nQTMprEYfjvr8vKKNDAXsBn6v5B9cBaC9a5kVB/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在昨天的帖子[《python-bitshares 边学边记 (九) / Memo类》](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares-memo)中，我学习了Memo类。

![](https://steemitimages.com/DQmXxyvF5nQTMprEYfjvr8vKKNDAXsBn6v5B9cBaC9a5kVB/image.png)
(图源 ：pixabay)

# Memo 类

Memo类提供了bitshares区块链Memo信息加密和解密的方法。其中，
* `encrypt方法`用于加密Memo
* `decrypt方法`用于解密Memo
* 加密Memo需要发送者账户(`from_account`)的Memo/Active私钥
* 解密Memo需要接收者账户(`to_account`)的Memo/Active私钥

# 发送者查看已发送的Memo的问题

一般情况，我们作为发送者，加密Memo，发送给接收者；或者我们作为接收者，解密Memo，查看明文信息，这些都没问题。


在上文中的例子中，我们从账户`test2018`发送Memo至`oflyhigh-bts`
![](https://steemitimages.com/0x0/https://steemitimages.com/DQmYByg9vdGX7GAkKLbSG93nVPnGCKbNQaVUMcLepM8pnNC/image.png)

然后从区块链浏览器中获取加密的Memo数据
![](https://steemitimages.com/DQmUe9a619ucWSjYc5Y5ugM8AZRtRPZtRPV1eNindgaC9jt/image.png)

然后使用如下代码解密Memo
```
from bitshares.memo import Memo
m = Memo("1.2.534782", "1.2.170436")
enc = {
        "from": "BTS6Eq6kGgYRuujDpFtYduCAjdgMfvkHZ3f8SbHVmsjSC9HgCnxFt",
        "message": "33b980c72e22f942454a8ae6b6740a54",
        "nonce": "387853483215441",
        "to": "BTS8HbXtZPbLACch1pvfrZEPH2xbt74VMPMD4ZSZwYeT96jwkpHFo"}

plaintext_msg = m.decrypt(enc)
print(plaintext_msg)
```
![](https://steemitimages.com/0x0/https://steemitimages.com/DQmPekNWxw4e4gAyBUafKomqLEWQGtQz5MsVjgDDh6VNRAo/image.png)
在这个例子中，我们假定自己是接收者(`oflyhigh-bts`)，并且我们拥有`oflyhigh-bts`的私钥，所以上述例子没什么问题。

但是考虑这样一种情况，如果***作为发送者，我们想查看自己已发送的Memo***，并且我们没有接收者的Memo/Active私钥，这时会报如下错误：

>raise MissingKeyError("Memo key for %s missing!" % self.to_account["name"])
bitshares.exceptions.MissingKeyError: Memo key for oflyhigh-bts missing!

也就是说***使用python-bitshares库的Memo类，发送者无法解密已发送Memo.***

# 如何解决

发送者无法查看自己已经发送的Memo，这听起来有点奇怪，我给别人写了一些信息，过几天想起来想看看我写的是啥，发现我看不了。如果实在想看，只能去问接收者了：***“喂喂，我前两天给你发的消息说啥来着？”*** 这会不会有些尴尬？

还好，网页钱包中，我们可以通过解锁钱包来查看我们发送的Memo
![](https://steemitimages.com/DQmSFMnSmMLEB7Z8mv4Eny3Mnc3w7SrcsHcHzZJPNYtjb1t/image.png)
避免了我们上述尴尬情景。

但是，作为程序员，遇到这种问题岂能善罢甘休。

我们来了解一下Memo实现的核心机制，除了加密解密等乱七八糟的东西以外，核心的内容就是： ***`shared secret`***，具有如下特性：

***`Pub(Alice) * Priv(Bob) = Pub(Bob) * Priv(Alice)`***

也就是说，无论是用***`Pub(Alice)以及 Priv(Bob)`***或者是***`Pub(Bob)以及 Priv(Alice)`***都是可以生成的。换句话讲，***无论是加密memo还是解密memo，并不存在谁是发送者谁是接收者的问题！***

知道了这个原理，那么问题就好办了。

原本的解密代码如下：
![](https://steemitimages.com/DQmWAhBkNvPvoGhvuA4dexEC81JvUBLKJRbvN4pvgjEBqxn/image.png)

基于上述代码，我们可以轻易实现一个简单解密代码，用于解密已发送Memo
![](https://steemitimages.com/DQmbgjej9nh9PLP7j7A94Xxt51JrWtPs81iHxwJ71rZRBF8/image.png)

假设我给abit发了一条消息，那么调用上述我实现的代码来解密Memo的示例如下：
![](https://steemitimages.com/DQmTLqV8E9XVpACbvF8vbmtcBkmBkNKGxZPKb6FCv2MvAMt/image.png)
请注意，我并没有abit的私钥，但是成功地解密了消息。

# 总结

* python-bitshares的Memo类 不支持解密已发送Memo
* Memo的实现机制核心为：***`shared secret`***
* ***`shared secret`***符合***`Pub(Alice) * Priv(Bob) = Pub(Bob) * Priv(Alice)`***
* 根据上述原理和原本解密代码，实现了解密已发送信息的代码


# 参考链接
* [python-bitshares 边学边记 (九) / Memo类](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares-memo)
* https://github.com/xeroc/python-bitshares/blob/master/bitshares/memo.py
* https://github.com/xeroc/python-bitshares/blob/master/bitsharesbase/memo.py

- - -

This page is synchronized from the post: [继续探索python-bitshares的Memo类 / Pub(Alice) * Priv(Bob) = Pub(Bob) * Priv(Alice)](https://steemit.com/@oflyhigh/python-bitshares-memo-pub-alice-priv-bob-pub-bob-priv-alice)
