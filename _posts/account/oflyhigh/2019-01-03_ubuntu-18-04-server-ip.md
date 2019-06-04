
---
title: 'Ubuntu 18.04 Server安装时设置静态IP'
permlink: ubuntu-18-04-server-ip
catalog: true
toc_nav_num: true
toc: true
date: 2019-01-03 09:56:42
categories:
- cn
tags:
- cn
- netplan
- ubuntu
- x61
- linux
thumbnail: https://cdn.steemitimages.com/DQme7rKPdYkGz3VuCxnSmPwRJFzpErn4wWRyni2JKQ1sQzH/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


之前曾在NUC7I5BNHL以及X61上安装了Ubuntu 18.04 Server，但是奇怪的是NUC7I5BNHL安装时我直接设置了静态IP，而X61不知如何没能设置上，甚至连DHCP都没设置好。

之后我通过手动修改如下文件为X61设置了静态IP，但是总是好奇我当时怎么略过设置IP这步呢？
>`/etc/netplan/50-cloud-init.yaml`

实在是忍不住，于是手欠又重新跑了一遍安装程序，只为在安装时设置静态IP。之前的步骤没啥说的，直接进行到网络设置这块。

![](https://cdn.steemitimages.com/DQme7rKPdYkGz3VuCxnSmPwRJFzpErn4wWRyni2JKQ1sQzH/image.png)

咦，这DHCP已经获得IP了，为何我之前的安装连DHCP都没设置好呢？想来想去，可能和我是半道才插上网线有关，这次我是***一开始就插上网线***了。

然后我通过***`TAB键`***将光标跳到对应网卡上，这里是***`enp0s25`***
![](https://cdn.steemitimages.com/DQmfWz7JCH8yoUfCPytQvKUwNNgTLfR7n89LuuBJd7wURy7/image.png)

再按回车键进入到如下菜单，分别是***`设置静态IP`***、***`使用DHCP`***以及***`不使用`***
![](https://cdn.steemitimages.com/DQmeEUsWY61V8vKb4KBPoKyeRxCkmZFWHEqQxqvQdKThHxe/image.png)

选择***`设置静态IP`***进入到静态IP设置界面
![](https://cdn.steemitimages.com/DQmUm8KuaZX7bb6YrpcXuHd4NBZpeu6mkVujY2rPru2NeQN/image.png)

然后按提示设置好，再通过***`TAB键&回车键`***选择***`DONE`***并返回之前的安装界面，继续安装就可以啦。

安装完成后，检查一下***`/etc/netplan/50-cloud-init.yaml`***，内容如下：
>![](https://cdn.steemitimages.com/DQmQyGiSdKw2fe5Pqm2gt8Ft9ZdbMMesaaPyj7k6gcdRsGz/image.png)

折腾来折腾去，和我们手动编辑***`/etc/netplan/50-cloud-init.yaml`***文件其实是一样的，不过不折腾一下，我就睡不着觉啦，生命在于折腾嘛😂

X61还有WIFI，应该也可以设置WIFI连接，不过我不打算使用WIFI就不去测试啦，感兴趣的可以参考文末相关链接中的内容。


# 相关链接

* [在X61上安装Ubuntu 18.04 Server遇到的坑](https://steemit.com/cn/@oflyhigh/x61-ubuntu-18-04-server)
* [Ubuntu Server 18.04 设置WIFI上网](https://steemit.com/network/@oflyhigh/ubuntu-server-18-04-wifi)
* [Intel NUC7I5BNHL 组装好啦](https://steemit.com/intel/@oflyhigh/3x4w3q-intel-nuc7i5bnhl)

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>

- - -

This page is synchronized from the post: [Ubuntu 18.04 Server安装时设置静态IP](https://steemit.com/@oflyhigh/ubuntu-18-04-server-ip)
