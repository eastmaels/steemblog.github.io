
---
title: '每天进步一点点：STEEM/HIVE私钥(Private Key)生成探索'
permlink: steem-hive-private-key
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-03-29 14:41:57
categories:
- cn
tags:
- cn
- cn-programming
- python
- bitcoin
- wif
thumbnail: 'https://cdn.pixabay.com/photo/2013/07/25/11/56/padlock-166882_960_720.jpg'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


大家都知道私钥(Private Key)是区块链STEEM/HIVE系统中重要的组成部分，那么你知道私钥是如何生成的吗？我也很是好奇，所以探索了一下。

![](https://cdn.pixabay.com/photo/2013/07/25/11/56/padlock-166882_960_720.jpg)
(图源 ：[pixabay](https://pixabay.com/))

# 私钥

在探索这个问题之前，我首先回顾一下我以前对比特币系统私钥的探索，在之前的探索中，我获得信息是：
>***私钥就是一个256位二进制数***

并且我有了如下***由字符串生成私钥的代码***：
```
>>> import hashlib
>>> from binascii import hexlify, unhexlify
>>> s = hashlib.sha256(bytes('Hello World', 'utf-8')).digest()
>>> print(hexlify(s).decode('ascii'))
a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e
```
# 私钥的表示方式

好，现在我们有了私钥，不过这个私钥和STEEM/HIVE上常用的私钥一点也不像，这又涉及到***私钥的表示方法***，关于这点，《Mastering Bitcoin》中有如下描述：
>![image.png](https://images.hive.blog/DQmUhBKsuMAs7cuN6NDhpHYWxTg5GwFMwAEmMTfPxHXxXXA/image.png)

其中WIF亦即： Wallet Import Format (WIF)，简单来讲就是***加上前缀(`0x80`)加上校验码，然后用Base58Check编码***。

于是对上述私钥进行编码即可得到：
>`a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e`
`5K5CpQZtUvPqwk2UE1FAiWC1nPV1WYqMnEhMYy2WTiMz3J1u9nm`

前边是64位16进制字符串形式，后边是WIF形式，咦，看起来和STEEM/HIVE上的私钥很像了。

# STEEM/HIVE中密码和私钥的关系

尽管我得到了一个私钥，但是再确定这个私钥和STEEM/HIVE私钥计算方法一致之前，我是不敢使用的。

至于如何校验，要先说一下STEEM/HIVE中密码和私钥的关系，如果要形容两者关系，我可以用如下两句话总结：
>* 私钥可以独立于密码存在
>* 密码可以用来生成私钥

换句话说，密码类似上述代码中的'Hello World'，我们其实可以用任意密码生成私钥或者直接用随机数。

而在STEEM/HIVE系统中，由密码生成对应的私钥，一般符合如下规则：
>`随机源 = account + role + password`

也就是说，如果我用"HelloWorld"作为密码，那么生成Posting私钥的随机源就是：`oflyhighHelloWorldposting`

# 校验

知道上述规则后，我们可以写一个自己的用密码生成私钥的函数，再调用一下steem-python库对应的函数，看看生成的私钥是否一致，就知道二者是否采取相同的规则了。
>`from steembase.account import PasswordKey`
`account = 'oflyhigh'`
`passwd = 'HelloWorld'`
`pwk = PasswordKey(account, passwd, role='posting')`
`print("Posting private key:", pwk.get_private())`

输出如下：
>![image.png](https://images.hive.blog/DQma8AXRXYX7s1Myvu1FqCAst5nSrrmyfUZGrEyLkjb8d1h/image.png)

亦即私钥为：`5JK4yeeivq6j3y4sVwZESJiuBPdi1ZinnePreZ1syeQ9HAMWzBH`

使用我自己的代码，测试程序部分内容如下：
>`account="oflyhigh"`
`passwd="HelloWorld"`
`role = "posting"`
`s = hashlib.sha256(bytes(account+role+passwd, 'utf-8')).digest()`
`print(base58CheckEncode(0x80, hexlify(s).decode('ascii')))`

输出的私钥和之前steem-python是完全一样的：
>![image.png](https://images.hive.blog/DQmeTLgT2YRJpdzGdkUS6VsvPVdsBLTgqLe5k2NYpswKUgQ/image.png)

# 结论

STEEM/HIVE使用的私钥，就是***加了前缀(0x80)和校验码并用Base58Check编码的256位二进制随机数***，和BTC上的私钥没什么大不同。

- - -

This page is synchronized from the post: ['每天进步一点点：STEEM/HIVE私钥(Private Key)生成探索'](https://steemit.com/@oflyhigh/steem-hive-private-key)
