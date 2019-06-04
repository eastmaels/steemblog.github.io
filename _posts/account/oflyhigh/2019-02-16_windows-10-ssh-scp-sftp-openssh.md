
---
title: 'Windows 10可以直接使用SSH、SCP、SFTP啦 / 开启OpenSSH客户端'
permlink: windows-10-ssh-scp-sftp-openssh
catalog: true
toc_nav_num: true
toc: true
date: 2019-02-16 10:13:24
categories:
- cn
tags:
- cn
- ssh
- sftp
- openssh
- windows
thumbnail: https://cdn.steemitimages.com/DQmaFb4HCrMAHknTdisHpTgooDPaNcc9iB9aiTyqvznrT7C/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


之前说到换电脑懒得在机器上装很多东西比如说QQ——又比如说FTP客户端。FTP客户端我以前一直使用的都是Filezilla，一款非常方便和强大的客户端，但是讨厌的是，它总是在升级，当然这也可能算做优点。

寻思反正没多少FTP的需求，那就先不装吧，等有需要的时候再说，况且在二十年前我就会使用命令行FTP，有这个也足够了。

结果事实啪啪啪打脸，我很快遇到个问题需要往VPS上传一点数据，而VPS上还没开启FTP服务，平常这种情况我用FileZilla的SFTP的就解决了，可是没有FileZilla可咋办，难道要装个SFTP客户端。

![](https://cdn.steemitimages.com/DQmaFb4HCrMAHknTdisHpTgooDPaNcc9iB9aiTyqvznrT7C/image.png)
(图源：https://www.openssh.com/）

# SFTP

我一般思考一边无论地打开Windows命令行窗口，然后随手敲***`sftp`***结果竟然没有出现常见的
>'xxx' is not recognized as an internal or external command,
operable program or batch file.

而是出现了如下提示：
>![](https://cdn.steemitimages.com/DQmQpDjojtNS5kHUcZ1iAnm7qz19VEJwVMg6zkYdvxMZS6d/image.png)

这不是sftp命令行客户端嘛？既然有这个，那么我的问题解决起来就轻而易举了，直接sftp搞定。

# SSH

又试着敲一下***`ssh`***
>![](https://cdn.steemitimages.com/DQmWqtQPHVfy4dgV7mzkFEus9MiGVwgAb7aog53PUVLi2xj/image.png)

原来也支持ssh命令行了，试着登录了一下Linux主机，完全没有任何问题，这么说，我岂不是可以丢掉Putty了？

# SCP

那么再来试试***`scp`***
>![](https://cdn.steemitimages.com/DQmbayZRUirV4RozX4M66MVRvSec9gK1rZrdxTowyahb9Dt/image.png)

这样以后Windows和Linux系统交换文件岂不是太方便啦？

# 开启OpenSSH客户端

查了一下，原来Windows 10某个版本后，内置了***OpenSSH客户端***，所以支持了***sftp以及ssh***。如果你的版本尚未开启这个功能，可以按如下方式开启。

>![](https://cdn.steemitimages.com/DQmYfSrejDAiDna4mQ776yuaivMY5GdJznZUfC9xA5VtP5k/image.png)

>![](https://cdn.steemitimages.com/DQmQ8S6U96rDXuvontediQsDKn7wrgePi11oqSqByZU8uiZ/image.png)

开启成功后就是这个样子啦，我的Windows10已经自动帮我开启好了，真体贴呀。
>![](https://cdn.steemitimages.com/DQmWe12ytsj5zsVF5BRcobncfrvV9kc9p39XFR1qeta1w7g/image.png)

好了，就介绍到这里啦，更多好玩的功能，大家自己去发掘吧。

# 相关链接

* [OpenSSH](https://www.openssh.com/)

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>

- - -

This page is synchronized from the post: [Windows 10可以直接使用SSH、SCP、SFTP啦 / 开启OpenSSH客户端](https://steemit.com/@oflyhigh/windows-10-ssh-scp-sftp-openssh)
