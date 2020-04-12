
---
title: '每天进步一点点：验证用get_transaction_hex 获取的HEX'
permlink: gettransactionhex-hex
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-04-12 13:30:18
categories:
- cn
tags:
- cn
- cn-programming
- python
- api
- serialized
thumbnail: 'https://cdn.pixabay.com/photo/2018/10/10/14/44/audit-3737447_960_720.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


昨天的文章中介绍了一个序列化(serialized)transaction取巧的办法，就是不在本地进行，而且丢给API节点，让它们去帮忙序列化。虽然序列化的结果肯定是正确的，但是还是要想办法验证一下。

![](https://cdn.pixabay.com/photo/2018/10/10/14/44/audit-3737447_960_720.jpg)
(图源 ：[pixabay](https://pixabay.com/))

因为我们选取的是已经在STEEM/HIVE网络上存在的transaction，那么验证似乎有两个思路可以走，一是对序列化的结果进行签名并对比；二是通过序列化的内容获取摘要，然后从签名中恢复出公钥。

# 对比签名是不可行的

首先，我们来分析签名并对比是否可行？我们知道，如果使用的是ecdsa签名，那么一般会调用如下函数：
>`def sign_digest(self, digest, entropy=None, sigencode=sigencode_string, k=None)`

其中`k`是作为nonce的一个随机量，这样相同的密钥相同的信息每次签名出来的结果都不相同，防御了一些猜测私钥的攻击。

尽管我们之前的文章中，用相同的私钥对相同的摘要每次都生成了相同的签名，但是那是为了方便对比将`k`设置成了固定的值，而实际生产系统中是不会这样设置的（***可能会被计算出私钥***）。

因为`k`是随机量，所以每次签名得到的字符串都不相同，是没法对比的。

# 从签名恢复公钥

既然对比签名不可行，我们就要用别的方法验证一下序列化的结果是否正确。

我们知道序列化的结果是生成被签名HASH的输入之一，而我们通过被签名的HASH以及签名是可以恢复出公钥的，那么一旦我们恢复出来的公钥和签名用公钥一致，说明序列化这个步骤的结果是正确的。

我们昨天的代码获取了相应transaction的如下序列化结果：
>![image.png](https://images.hive.blog/DQmW7EEM4jjfiHnYuQ6nHECVcP8YnpfNcG1LV69zXXoR2Dn/image.png)

并且transtion中已有签名部分：
>`'signatures': ['206cdc148d6535899fb43c452656989611c1a01bc84da7e08002bbabcdd7f583091c2b9e3aa3cc0a05c417b4dce4ce8979972b61a218b595f88c0a013bd4bafb95']`

接下来我们就用这两部分内容来尝试恢复公钥。

首先，用于生成签名hash的内容就是序列化后的结果吗？答案是否定的，用于生成签名hash的内容是chain_id和序列化结果链接到一起。

STEEEM/HIVE的chain_id定义如下（其实就是256个二进制0）：
>`chain_id =  "0" * int(256 / 4)`

那么理论上，hash前的内容就是(`str_hex`是`get_transaction_hex `返回结果）：
>`msg = chain_id + str_hex`

然而这样做的结果并不正确，研究了好久发现是***`get_transaction_hex `返回的内容结尾多了两个`0`***，所以正确内容应为：
>`msg = chain_id + str_hex[0:-2]`

(关于多出来的`00`，详情可以参考，@abit 在bitshares 提交的一个[issue](https://github.com/bitshares/bitshares-core/issues/1013)）

然后生成摘要：
>`digest = hashlib.sha256(unhexlify(msg)).digest()`

接下来用我们以前文章中恢复公钥的方法/代码来恢复公钥就可以啦。

代码参考我之前文章内的代码就可以，就不浪费篇幅啦。

# 用公钥验证签名

除了利用从签名恢复公钥来验证序列化结果外，还可以用公钥来验证签名的方式来判断序列化结果的正确与否。

这个方式同样要链接chain_id，代码同样可以参考我以前文章内的代码，同样不多写啦。

# 结论

用`get_transaction_hex`可以获取transaction的序列化后(serialized)的结果，不过要去掉尾巴上的`00`才可以。

这算BUG还是算feature？我有些晕，不过好用就好。

# 相关链接

* [每天进步一点点：用get_transaction_hex 序列化transaction](https://steemit.com/cn/@oflyhigh/gettransactionhex-transaction)
* [每天进步一点点：学习用公钥验证](https://steemit.com/cn/@oflyhigh/68rccl)
* [每天进步一点点：学习用私钥签名](https://steemit.com/cn/@oflyhigh/4hr4hy)
* [New API: get transaction hex without `signatures` field #1013](https://github.com/bitshares/bitshares-core/issues/1013)

- - -

This page is synchronized from the post: ['每天进步一点点：验证用get_transaction_hex 获取的HEX'](https://steemit.com/@oflyhigh/gettransactionhex-hex)
