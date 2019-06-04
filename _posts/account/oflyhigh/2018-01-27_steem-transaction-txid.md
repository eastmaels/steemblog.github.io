
---
title: '如何从steem transaction 获取txid?'
permlink: steem-transaction-txid
catalog: true
toc_nav_num: true
toc: true
date: 2018-01-27 12:43:27
categories:
- steemdev
tags:
- steemdev
- steem
- transaction
- cn-programming
- cn
thumbnail: https://steemitimages.com/DQmdFCHtL8t3uN2xUef6HYnrTJbqZG6n9Sm8ciy6rw12dXP/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


前些天大神 @xeroc 发了个帖子 [python-bitshares: How to derive transaction ids](https://steemit.com/bitshares/@xeroc/python-bitshares-how-to-derive-transaction-ids)，让我对bitshares的txid有了更深入的了解。于是我就想相同的问题放到STEEM上会是如何呢？

![](https://steemitimages.com/DQmdFCHtL8t3uN2xUef6HYnrTJbqZG6n9Sm8ciy6rw12dXP/image.png)

# [python-bitshares](https://github.com/xeroc/python-bitshares) 生成transaction_id

@xeroc 大神修改了[python-graphenelib](https://github.com/xeroc/python-graphenelib)库，给`Signed_Transaction`类添加了一个新属性: `id`，而[python-bitshares](https://github.com/xeroc/python-bitshares)的`Signed_Transaction`类继承了[python-graphenelib](https://github.com/xeroc/python-graphenelib)的`Signed_Transaction`类。

也就是下边两句：
`from graphenebase.signedtransactions import Signed_Transaction as GrapheneSigned_Transaction`

`class Signed_Transaction(GrapheneSigned_Transaction)`

我们再来看看属性`id`如何实现：
![](https://steemitimages.com/DQmQCipLHana33mf6dNHpHNZzVimMUrZNJafTnrsXZNSL9W/image.png)

也就是说，将Signed_Transaction的签名部分清空，序列号后生成摘要，取摘要的前20个字节，并转换成16禁止字符串形式(40个字节)。


# STEEM 生成transaction_id

STEEM和Bitshares是一奶同胞啦，python-steem的前身piston也是 @xeroc 大神开发的。所以在python-steem上实现类似功能非常简单。

```
import hashlib
from binascii import hexlify
from steem import Steem
from steembase.transactions import SignedTransaction

steem = Steem()
block = steem.get_block(10000000)
tx = SignedTransaction(**block["transactions"][2])
tx.data.pop("signatures", None)
h = hashlib.sha256(bytes(tx)).digest()
print(hexlify(h[:20]).decode("ascii"))
```

上述示例代码将计算出STEEM区块链上第10000000 中第3笔transaction的txid。
（transaction编号从零开始）

结果为：
>9f48f63edfd40e72ac6c9635dcdcad9d742e5d1c
![](https://steemitimages.com/DQmYEXNFDHwSdKP33Q1XRiGpuhGy1TLNa7ge8wg8dLwP5mT/image.png)
# STEEM 生成transaction_id 方法2

你是不是觉得上述方法很简单了？其实还有更简单的办法

```
from steem import Steem
steem = Steem()
block = steem.get_block(10000000)
txid = block['transaction_ids'][2]
print(txid)
```

结果为：
>9f48f63edfd40e72ac6c9635dcdcad9d742e5d1c
![](https://steemitimages.com/DQmYEXNFDHwSdKP33Q1XRiGpuhGy1TLNa7ge8wg8dLwP5mT/image.png)

完全一样，有木有，但是代码简单了好多有木有？


# 为什么？

既然获取txid如此简单，为何大神还要费此周折？答案在于steem区块链的get_block返回了transaction_ids列表，比如区块：10000000

![](https://steemitimages.com/DQmdKL9uGqcMcfDa1MgeNwtVvXFCqvGNLS5mqrsG6uxBrBG/image.png)
排列顺序和transaction列表顺序完全一致，所以直接拿出来即可。

而bitshares区块链的get_block不返回上述信息，如果需要，只好自己计算哦。


不过读读 @xeroc 大神的代码，了解了一下 txid的生成机制，还是受益匪浅的。

# 参考链接

*  [python-bitshares: How to derive transaction ids by @xeroc](https://steemit.com/bitshares/@xeroc/python-bitshares-how-to-derive-transaction-ids)
*  [通过事务ID(transaction id) 获取事务(transaction) / Database API: get_transaction](https://steemit.com/cn-programming/@oflyhigh/id-transaction-id-transaction-database-api-gettransaction)
*  [获取共同操作账户某个操作的真实操作者，附简单脚本 / Get real operator of a transaction made by the ID which operated by multi accounts, script attached](https://steemit.com/cn/@oflyhigh/get-real-operator-of-a-transaction-made-by-the-id-which-operated-by-multi-accounts-script-attached)
*  https://github.com/xeroc/python-bitshares
*  https://github.com/xeroc/python-graphenelib
*  https://github.com/steemit/steem-python

- - -

This page is synchronized from the post: [如何从steem transaction 获取txid?](https://steemit.com/@oflyhigh/steem-transaction-txid)
