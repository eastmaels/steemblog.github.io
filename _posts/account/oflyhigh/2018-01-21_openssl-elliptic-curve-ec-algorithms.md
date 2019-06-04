
---
title: 'OpenSSL 命令行生成Elliptic Curve (EC) algorithms(椭圆曲线算法)私钥、公钥'
permlink: openssl-elliptic-curve-ec-algorithms
catalog: true
toc_nav_num: true
toc: true
date: 2018-01-21 12:30:24
categories:
- openssl
tags:
- openssl
- secp256k1
- key
- cn-programming
- cn
thumbnail: https://steemitimages.com/DQmZqNYdBcinVjAezHo5ruiGA1Yj4e5GnGxw2wUA4pbKsbR/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在之前的文章中，我们介绍过[secp256k1-py](https://github.com/ludbb/secp256k1-py)以及[python-ecdsa](https://github.com/warner/python-ecdsa)

* [secp256k1-py 安装以及命令行操作](https://steemit.com/python/@oflyhigh/secp256k1-py)
* [对比一下ecdsa与secp256k1-py从私钥生成公钥](https://steemit.com/python/@oflyhigh/ecdsa-secp256k1-py)
* [ecdsa学习笔记 / SigningKey、VerifyingKey以及公钥](https://steemit.com/python/@oflyhigh/ecdsa-signingkey-verifyingkey)

两者都可以实现私钥、公钥的生成、签名、校验等操作。[secp256k1-py](https://github.com/ludbb/secp256k1-py)因为是C库libsecp256k1的Python FFI(foreign function interface)绑定，所以在效率上更胜一筹。而[python-ecdsa](https://github.com/warner/python-ecdsa)因为是纯Python实现，所以更便于阅读、理解以及修改。

![](https://steemitimages.com/DQmZqNYdBcinVjAezHo5ruiGA1Yj4e5GnGxw2wUA4pbKsbR/image.png)


而除了这两种方式可以进行上述bitcoin相关的这些操作以外，OpenSSL也同样可以胜任。因为OpenSSL太过于复杂，我弄了几天也只了解了一点皮毛，所以这里我讲太多细节了以免暴露自己的无知。

# 关于格式

https://wiki.openssl.org/index.php/Command_Line_Elliptic_Curve_Operations

在上述链接中介绍了OpenSSL Elliptic Curve (EC) algorithms(椭圆曲线算法)相关的私钥格式(EC Private Key File Formats)和公钥格式(EC Public Key File Formats)，无论私钥公钥都可以表示为两种格式的文件***`.pem`***以及***`.der`***。

***`.pem`***为文本格式，可以有好多表现形式以及加密方法，***`.der`***为二进制形式。

>A PEM file is essentially just DER data encoded using base 64 encoding rules with a header and footer added.

PEM文件本质上就是DER文件使用BASE64编码后加上了头尾，这句话一阵见血啊

# 生成私钥

生成私钥的过程要首先生成参数文件(EC Parameters file)：
`openssl ecparam -name secp256k1 -out secp256k1.pem`

然后再使用这个文件作为输入生成私钥：
`openssl ecparam -in secp256k1.pem -genkey -out secp256k1-key.pem`

上边两个步骤也可以简化成一步来完成
`openssl ecparam -name secp256k1 -genkey -out secp256k1-key.pem`

上述命令执行后，生成含类似如下内容的文本文件：
```
-----BEGIN EC PRIVATE KEY-----
MHQCAQEEIO/oTB61Jef6zBanUeWXUmyHIKQE6RCKuriskrNfee3AoAcGBSuBBAAK
oUQDQgAEBgmGjRWN+oZwehgqEmalK6YtMPgC/m1nkUE+YTymDp3sJ4L+VIAF7mrN
gPimd79cG37U2bn41bZIjGS2qXVjUA==
-----END EC PRIVATE KEY-----
```

我们也可以通过`-outform DER`来指定生成***`.der`***格式的文件，比如：
`openssl ecparam -name secp256k1 -genkey -outform DER -out secp256k1-key.der`
会生成包含类似如下内容的二进制文件
![](https://steemitimages.com/DQmS42QVdqJ4vrzGt3pHQdb5hqwXNzxEPpS1Vd1VvLqvQUq/image.png)

# 生成公钥

有了私钥后，我们可以用下列指令来生成公钥:
`openssl ec -in secp256k1-key.pem -pubout -out ecpubkey.pem`
会生成包含类似如下内容的文本文件
```
-----BEGIN PUBLIC KEY-----
MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAE1xy6i/50bcje4mrDWIGL729DDdHFtCz9
t4VCfr8KP5WyLH5+0FPB4qnwhVOrpg2CZi3UVOW44+hGqQke2eeURQ==
-----END PUBLIC KEY-----
```


当然，也可以通过-outform DER`来指定输出的文件格式，比如：
`openssl ec -in secp256k1-key.pem -pubout -outform DER -out ecpubkey.der`
会生成包含类似如下内容的二进制文件
![](https://steemitimages.com/DQmds4JAFHHXYuevuGVsW2tZ3GpKKHLv5YGbUCaVocSxeiX/image.png)

***`-inform  DER`选项无法在此使用，猜测是OpenSSL无法识别二进制串使用的曲线，需验证。***

# 其它

通过上述学习，知道了OpenSSL也可以生成secp256k1的私钥公钥。

但是OpenSSL中私钥公钥使用了不同的表示方法，让习惯于看字符串的我有点懵，接下来的文章中，我会尝试ecdsa来操作OpenSSL生成的公私钥，来验证一下他们生成出来的东西是否本质上是一样的。

# 参考资料及相关链接

* https://wiki.openssl.org/index.php/Command_Line_Elliptic_Curve_Operations
* [secp256k1-py 安装以及命令行操作](https://steemit.com/python/@oflyhigh/secp256k1-py)
* [对比一下ecdsa与secp256k1-py从私钥生成公钥](https://steemit.com/python/@oflyhigh/ecdsa-secp256k1-py)
* [ecdsa学习笔记 / SigningKey、VerifyingKey以及公钥](https://steemit.com/python/@oflyhigh/ecdsa-signingkey-verifyingkey)

- - -

This page is synchronized from the post: [OpenSSL 命令行生成Elliptic Curve (EC) algorithms(椭圆曲线算法)私钥、公钥](https://steemit.com/@oflyhigh/openssl-elliptic-curve-ec-algorithms)
