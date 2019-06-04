
---
title: 'python-bitshares 边学边记 (九) / Memo类'
permlink: python-bitshares-memo
catalog: true
toc_nav_num: true
toc: true
date: 2018-01-04 08:39:21
categories:
- python-bitshares
tags:
- python-bitshares
- bitshares
- python
- cn
- cn-programming
thumbnail: https://steemitimages.com/DQmab7QPFcG6Q4U9Z1FMThkdVcDneSY5xR2bPxVWryEZfeX/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在之前的几篇文章中，我们简单介绍了如何安装python-bitshares 、python-bitshares的钱包相关操作、BitShares类以及Account类、Market类、Dex类、Block类、Blockchain类。

详情可以参考文末的参考链接。
![](https://steemitimages.com/DQmab7QPFcG6Q4U9Z1FMThkdVcDneSY5xR2bPxVWryEZfeX/image.png)
(图源 ：pixabay)

这节我们来继续学习python-bitshares 。

---
# Memo类

#### 创建实例

我们可以使用以下代码创建Memo类实例
` from bitshares.memo import Memo` 
` m = Memo("from_account", "to_account")` 

其中：
* `from_account`: 发送Memo的账户
* `to_account`: 接收Memo的账户

因为Account类实例可以由帐户名创建，也可以由账户ID创建，所以我们可以传入类似***`test2018`***或者***`1.2.534782`***的形式。

#### 加密Memo

加密Memo即将明文信息转换成为密文，我们可以使用encrypt方法加密Memo
`from pprint import pprint`
`encrypted_msg = m.encrypt("foobar")`
`pprint(encrypted_msg)`

加密Memo需要首先导入`from_account`的active key或者memo key，否则会出如下错误提示：
>    raise MissingKeyError("Memo key for %s missing!" % self.from_account["name"])
bitshares.exceptions.MissingKeyError: Memo key for test2018 missing!

导入私钥后重新执行上述代码：
![](https://steemitimages.com/DQmfTzAEAaUPQ45pPMWZqWSkeTCKqwTKjZfSgzhGi5oefYr/image.png)


#### 解密Memo

加密Memo即将密文信息转换成为明文，我们可以使用decrypt方法解密Memo
`plaintext_msg = m.decrypt(enc)`
`print(plaintext_msg)`

解密Memo需要首先导入to_account的active key或者memo key，否则会出如下错误提示：
>raise MissingKeyError("Memo key for %s missing!" % self.to_account["name"])
bitshares.exceptions.MissingKeyError: Memo key for oflyhigh-bts missing!


导入私钥后重新执行上述代码：
![](https://steemitimages.com/DQmNss5sS6r9JZwhYotnfQxSSgqiQ3mgACTKoHHyDs6MVcw/image.png)

解密出来的内容和我们加密的内容是一致的。


# 测试

为了验证我们上述学习的内容，我使用测试账户转账并附加Memo

在活动记录中我们看到的操作信息以及明文Memo为：
![](https://steemitimages.com/DQmYByg9vdGX7GAkKLbSG93nVPnGCKbNQaVUMcLepM8pnNC/image.png)

在区块链浏览器上我们查看到的原始信息为：
![](https://steemitimages.com/DQmUe9a619ucWSjYc5Y5ugM8AZRtRPZtRPV1eNindgaC9jt/image.png)

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
运行结果如下：
![](https://steemitimages.com/DQmPekNWxw4e4gAyBUafKomqLEWQGtQz5MsVjgDDh6VNRAo/image.png)
和我们输入的信息一般无二哦😀

# 总结

Memo类提供了bitshares区块链Memo信息加密和解密的方法。本文通过实例介绍了如何使用Memo类加密消息以及解密Memo。

在文末，本文以一个实际的例子来验证Memo类的功能。

***文中信息仅供参考，使用文中代码造成损失概不负责！***


# 参考信息

* [https://github.com/xeroc/python-bitshares](https://github.com/xeroc/python-bitshares)
* [python-bitshares 边学边记 (一) : 简介与安装](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares)
* [python-bitshares 边学边记 (二) : 钱包操作](https://steemit.com/python-bitshares/@oflyhigh/3ab1oc-python-bitshares)
* [python-bitshares 边学边记 (三) / BitShares类](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares-bitshares)
* [python-bitshares 边学边记 (四) / Account类](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares-account)
* [python-bitshares 边学边记 (五) / Market类](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares-market)
* [python-bitshares 边学边记 (六) / Dex类](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares-dex)
* [python-bitshares 边学边记 (七) / Block类](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares-block)
* [python-bitshares 边学边记 (八) / Blockchain类](https://steemit.com/python-bitshares/@oflyhigh/python-bitshares-blockchain)

- - -

This page is synchronized from the post: [python-bitshares 边学边记 (九) / Memo类](https://steemit.com/@oflyhigh/python-bitshares-memo)
