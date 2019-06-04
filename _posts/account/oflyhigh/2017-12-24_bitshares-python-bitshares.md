
---
title: '使用bitshares账户密码以及python-bitshares直接获取私钥以及公钥'
permlink: bitshares-python-bitshares
catalog: true
toc_nav_num: true
toc: true
date: 2017-12-24 05:37:54
categories:
- bitshares
tags:
- bitshares
- python
- python-bitshares
- cn
- cn-programming
thumbnail: https://steemitimages.com/DQmVQhr3F1HTTobAL8K6mqtk1JxHG2vL35UczpUHeTYmHcf/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在昨天的帖子中，我介绍了如何导出导入私钥等操作：

* [在网页钱包中使用鼓鼓账户密码 / 如何导出、导入私钥 以及备份钱包](https://steemit.com/bitshares/@oflyhigh/ib3ms)

然而，作为一个程序猿，总觉得登陆来登陆去，点啊点啊的太麻烦，那么有没有方便快捷的方法获取私钥呢？前一阶段在学习python-bitshares，好吧，我承认我挖的坑还没有填完，以后慢慢填吧，让我先来尝试一下能否用账户密码以及python-bitshares直接获得私钥。

![](https://steemitimages.com/DQmVQhr3F1HTTobAL8K6mqtk1JxHG2vL35UczpUHeTYmHcf/image.png)
(图源 ：pixabay)


# 使用***`PasswordKey`***类获取私钥

经过一番学习，发现python-bitshares中有个***`PasswordKey`***类

用这个类，可以获取账户密码的对应私钥，简单的示例代码如下：

```
from bitsharesbase.account import PasswordKey

account = "test2018"
passwd = "P5JiDXtCaDdCTgCrkXAG2fEzVUjrBxSJbx9MsXXXXXX"
role = "active"

pwkey = PasswordKey(account, passwd, role=role)
private_key = pwkey.get_private()

print("Account:", account)
print("Passwd:",  passwd)
print("PrivateKey:",  private_key)

```

运行结果如下：
![](https://steemitimages.com/DQmUGSkkSgAUPuCP8oVk6ecqqFSgNZah39R46tEMveXV2aB/image.png)
我们成功的获取了这个账户对应的Active Private Key.

为了校验一下我们获取的私钥是否正确，我登陆网页钱包查看了一下私钥：
![](https://steemitimages.com/DQmRYirPptVf7BVcR3Zhxe7N4xsWngepraHzn82Hr9iaX2H/image.png)
对比上述私钥，可知我们获得的结果是正确的。

# 如何获得公钥

我们已经可以使用***`PasswordKey`***类获取私钥，但是为了校验我们获得的私钥是否正确，还特意登陆了网页钱包查看了一下私钥。这岂不是多此一举！既然还需要登陆网页钱包，那么直接获得私钥就好了，何必还用程序生成。

那么有啥办法来查看我们生成的私钥是否是账户对应的私钥呢？
很简单，对比一下公钥就可以了。

为了对比公钥，我们需要获得账户的公钥，以及用程序生成公钥。

账户的公钥可以通过区块链浏览器查看
![](https://steemitimages.com/DQmUCqUnv3rLhRapuVmHnKU4p8nhT674F6doaZgvjWdPswC/image.png)
以上为我这个账户的公钥，我们暂且以Active KEY为例。

将上述代码的下半部分更新成如下内容：
```
pwkey = PasswordKey(account, passwd, role=role)
private_key = pwkey.get_private()
public_key = pwkey.get_public()

print("Account:", account)
print("Passwd:",  passwd)
print("PrivateKey:",  private_key)
print("PublicKey:",  public_key)
```

结果，这是什么鬼？
![](https://steemitimages.com/DQmXSPXiEvPwqCMML96nuau3WmtuHBqEpKTHw4m67hSxfTz/image.png)
貌似公钥的值是正确的，但是***前缀是`GPH`而不是`BTS`***

看了一下代码，原来PasswordKey的get_private()和get_public()都是调用了父类***石墨烯库中的PasswordKey***中的方法。而在父类中，默认的前缀是***`GPH`***而不是***`BTS`***

要解决这个问题，一种方式是修改python-bitshares以及python-graphenelib库中对应的函数，这个比较麻烦。

所以我采用了另外一种方法：
即由Private Key 从新生成公钥
`public_key = PrivateKey(str(private_key)).pubkey`
因为我们调用的是python-bitshares中的PrivateKey类，所以默认的前缀为`BTS`，无需我们在参数中设置

![](https://steemitimages.com/DQmPX4hVC9nrdfQgXzAzdMfN1rHNRNuYv6QvCPkQN71DGbj/image.png)
前缀完全正常，和区块链浏览器中对比完全一致。

# 完整的示例代码

```
from bitsharesbase.account import PasswordKey
from bitsharesbase.account import PrivateKey

account = "test2018"
passwd = "P5JiDXtCaDdCTgCrkXAG2fEzVUjrBxSJbx9MsXXXXXX"
role = "active"

pwkey = PasswordKey(account, passwd, role=role)
private_key = pwkey.get_private()
#public_key = pwkey.get_public()
public_key = PrivateKey(str(private_key)).pubkey

print("Account:", account)
print("Passwd:",  passwd)
print("PrivateKey:",  private_key)
print("PublicKey:",  public_key)
```
以上为完整的示例代码，仅供参考。

# 结论

![](https://steemitimages.com/DQmWdh5meVuYMJ8Rza3vS9D2boRrzRVXG1JX3NwuEkB6Yhp/image.png)
(图源 ：pixabay)

使用账户密码以及python-bitshares中的PasswordKey类，可以轻易获取对应账户的私钥，无需登陆网页钱包等繁琐的步骤。

可以使用生成的私钥使用PrivateKey类来生成公钥与区块链浏览器上显示的公钥信息对比验证是否正确。

以上代码仅供参考。

- - -

This page is synchronized from the post: [使用bitshares账户密码以及python-bitshares直接获取私钥以及公钥](https://steemit.com/@oflyhigh/bitshares-python-bitshares)
