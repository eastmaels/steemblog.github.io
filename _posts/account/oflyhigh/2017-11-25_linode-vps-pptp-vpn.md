
---
title: '如何在Linode的VPS上，搭建自己的爱国上网工具(PPTP VPN)'
permlink: linode-vps-pptp-vpn
catalog: true
toc_nav_num: true
toc: true
date: 2017-11-25 09:24:09
categories:
- cn
tags:
- cn
- vpn
- vps
- pptp
- linode
thumbnail: https://steemitimages.com/DQmdhUWddbvSKzp6YmEbFS5r1NNEQ5dZTc5w1NhqcgJJDKr/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


PPTP爱国上网工具，属于快被淘汰的那伙啦，但是我就是偶尔拿来应个急，咱是好孩子，从来不上啥不让上的网站，什么反动站啊、色情站啊，我都是不上的。😀 所以，对我而言，其实是够用的啦。

![](https://steemitimages.com/DQmdhUWddbvSKzp6YmEbFS5r1NNEQ5dZTc5w1NhqcgJJDKr/image.png)
(这是一个神奇的网站，人品好的人才可以上的)

之前我PPTP爱国上网工具跑得好好的，但是自己手欠，在那个VPS上跑了一个steem的seed节点，很快硬盘就满了。上边还有一些乱七八糟的东西，懒得清理，所以直接新买一个VPS，重新弄算了，顺便记录一下，便于以后自己查找。

# 购买 VPS

如果你还没有VPS，可以来这里[https://www.linode.com](https://www.linode.com/?r=5f1093d89316ed45be25e943e794b8e24ea99723) 注册购买。
(加了个介绍链接，试试能不能赚到提成😀）

最便宜的一款只需五美元每月，支持信用卡和Paypal付款，还是很方便的
[![](https://steemitimages.com/DQmb5fk77GdgDPzDicEYAWUUS9bXhCbLex9gfdS7GHL9LZ7/image.png)](https://www.linode.com/?r=5f1093d89316ed45be25e943e794b8e24ea99723)

地理位置我选的新加坡，虽然说日本更快一些，但是日本的IP被封锁的概率也要大一些。

# 安装系统

购买好VPS，需要为其安装系统

进入对应的控制面板
![](https://steemitimages.com/DQmV5ET47Go2As5Muapd2dEZjK3Ufug7nawav2eHhfLnX1u/image.png)

选择***Deploy an Image***，并根据自己的喜好选择系统以及设置root密码
![](https://steemitimages.com/DQmPW8SCGKKrQEAs3aBxderwUb3ULoCrsUccHj1yfCdLFeL/image.png)
我选择的Ubuntu 16.04TLS，密码不能太简单，然后点击***Deploy***

部署完毕应该是这个样子
![](https://steemitimages.com/DQmXZcxQNuBR8v2rFsXUsB9vNBhNdmC6U52mzTktLvdRZPZ/image.png)
然后点击***boot***，启动VPS

启动成功后，可以从右侧看到运行状态
![](https://steemitimages.com/DQmfPcT7o7uyN5DvR7nys6rt9dPrfqdcxeUpgMHcrxgemf8/image.png)

# 登陆VPS

回到linodes列表中，查看我们创建的VPS的IP
![](https://steemitimages.com/DQmX621NZgxbB9Wpvxz5LUVqGWexgHctddWMWM3dNshVUtB/image.png)

使用Putty用上边的IP，以及我们设置好的root密码登陆VPS上
![](https://steemitimages.com/DQmRnvPug4NoCHJ5HcUjXFySGeDMrQTNn3MyEUSppRtjcuZ/image.png)

登陆成功是这个样子
![](https://steemitimages.com/DQmfCYmsM7o1Eow5omGoHCWBbZPhpxEEed9ZtVxQsDZVyPH/image.png)

# 设置PPTP

现在我们就可以设置PPTP啦

首先更新一下系统软件
`apt-get update`
`apt-get upgrade`

![](https://steemitimages.com/DQmcUVVyRSCRwiqErZbL7rMNNmN8LoqiEiMZgamL7VirEqD/image.png)
系统软件更新成功了。

安装pptpd
`apt-get install pptpd`
![](https://steemitimages.com/DQmaeMUMEbqRUq3LPuKdZaGEJGzFju6du1DUekTGtyJBZ8p/image.png)
回车就会开始安装

安装完毕后需要对pptp进行一些设置
`vi /etc/pptpd.conf`
>localip 192.168.0.1
remoteip 192.168.0.220-238,192.168.0.245

`vi /etc/ppp/pptpd-options`
>ms-dns 8.8.8.8
ms-dns 8.8.4.4

`vi /etc/ppp/chap-secrets`
>pptpuser        pptpd   pptppasswd            *

`vi /etc/sysctl.conf`
>net.ipv4.ip_forward = 1

`sysctl -p`
使IP转发设置生效

设置iptables
>iptables -A INPUT -p tcp --dport 1723 -j ACCEPT
iptables -A INPUT -p tcp --dport 47 -j ACCEPT
iptables -A INPUT -p gre -j ACCEPT
iptables -t nat -A POSTROUTING -s 192.168.0.0/24 -o eth0 -j MASQUERADE

启动pptpd
`/etc/init.d/pptpd start`
![](https://steemitimages.com/DQmVxtkwKpFwNNtUh2fPjFpXaUKdcuJ4xTYmHFWFeXVfnhC/image.png)

***可以将iptables设置以及pptpd启动指令加入rc.local，这样重启VPS会自动启动服务***

# 连接到VPN

以WIN10为例，进入到***设置->VPN->添加VPN***

![](https://steemitimages.com/DQmaBcJgDkQCdL6nHFuUWK3EWp4jrz3qQR6g3y4U9AGtqnk/image.png)

以我们上边配置，那么对应的设置如下：
![](https://steemitimages.com/DQmUsRES8A1vttpoUacAbkMrZH4kbWgn6fPbxaU4bXQ9XQ2/image.png)

保存上述配置，我们会看到VPN项目下多了如下内容
![](https://steemitimages.com/DQmXLst9ugPgBB6PfCkLbrLh5NJp1PjgJknqn5xmXomXhnq/image.png)

连一下试试看
![](https://steemitimages.com/DQmSuX4CHmyMGx11Xy2PmmYo7ESfKBM9oZVyYSxz4cA4sPp/image.png)
✌，成功连接。

听说这是一个神奇的网站，只有人品好的人才能访问哦
![](https://steemitimages.com/DQmdhUWddbvSKzp6YmEbFS5r1NNEQ5dZTc5w1NhqcgJJDKr/image.png)

# 总结

爱国上网工具(pptp VPN)虽然过时啦，但是还能用，至少我用来访问神奇的网站是没有问题的。

本文介绍了Linode VPS的购买，安装系统，使用putty登陆，安装和设置pptpd，以及在Windows上访问。

如果你还没有Linode的VPS， 快来这里购买吧
[https://www.linode.com](https://www.linode.com/?r=5f1093d89316ed45be25e943e794b8e24ea99723)

- - -

This page is synchronized from the post: [如何在Linode的VPS上，搭建自己的爱国上网工具(PPTP VPN)](https://steemit.com/@oflyhigh/linode-vps-pptp-vpn)
