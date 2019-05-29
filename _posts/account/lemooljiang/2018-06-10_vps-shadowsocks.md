
---
title: "vps + shadowsocks科学上网神器"
permlink: vps-shadowsocks
catalog: true
toc_nav_num: true
toc: true
date: 2018-06-10 04:28:15
categories:
- cn
tags:
- cn
- vps
- life
- vpn
- shadowsocks
thumbnail: https://cdn.steemitimages.com/DQmNqRF4xA1tTh8xbk57BASNUredYaCWbMQfnCwuj2dXv5h/shadowsock2.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


一直以来，国外的一些网站我都是用的免费的VPN（自由门），因为上的不多，感觉也够用了。不过自从交易所也被墙了，这个问题就严重起来，因为很多时候你连火币都没法上了！免费的就有这样的不好，很多时候不稳定。这几天发了个狠，一定要搞定，否则连币都没法卖了！

用google搜了下（百度搜不出），科学上网大体有两种解决方案，一种是直接买别人的服务，一种是自已建。查看了一下收费的VPN(https://www.top10vpn.com)，感觉有点不对味，价格也贵。另外还有种什么都交给别人手上的感觉。看来，还是自己建的好。

把自己建设的思路整理一下，也简单，主要有两步，第一步：一台在防火墙之外的服务器（海外服务器）；第二步：在本机安装 Shadowsocks 客户端，用于加密传输数据；

**自己建需要点ubuntu的知识！**

![shadowsock2.jpg](https://cdn.steemitimages.com/DQmNqRF4xA1tTh8xbk57BASNUredYaCWbMQfnCwuj2dXv5h/shadowsock2.jpg)

<center>Shadowsocks简要原理</center>

#### 第一步：买台海外服务器
![linode.jpg](https://cdn.steemitimages.com/DQmf6DPgxherJAhFfUqc4DmaVnS4KPkEwbREasV53aGjcSk/linode.jpg)

https://www.linode.com

这里推荐linode，最便宜的VPS是一个月$5(一年约￥390)，而且还可以同时建个站什么的，方便易用。配置是1TB Transfer月流量和40Gbps Network In入口带宽等，足够个人使用。

另外，还有个搬瓦工（https://bandwagonhost.com/），据称更便宜。

1、在主机上安装ubuntu16.04，此处略过。

2、使用putty连接远程服务器，进入到root端，使用如下命令配置：
```
a、安装PIP和组件
apt-get update
apt-get install python-pip
apt-get install python-setuptools m2crypto

b、安装 shadowsocks
pip install shadowsocks

c、配置 shadowsocks服务器
vi /etc/shadowsocks.json

{
    "server":"172.194.19.94",
    "server_port":8899,
    "local_address":"127.0.0.1",
    "local_port":1080,
    "password":"kkTREk542698",
    "timeout":300,
    "method":"aes-256-cfb",
    "fast_open":false
}

#各字段的含义：
server	    服务器的IP（改成自己的服务器地址）
server_port  服务器端口（可以改成其它端口，与客户端保存一致即可）
local_port	 本地端口
password	 用来加密的口令（设个自己的密码）
timeout	  超时时间（单位/秒）
method	 加密方式。可选择 “bf-cfb”, “aes-256-cfb”, “des-cfb”, “rc4″, 等等。
默认是一种不安全的加密，推荐用 “aes-256-cfb”

注：此处是单口模式的设置，还可以改成多口模式，几个人共用，这样又可以省下一大笔钱！

d、启动和关闭shadowsocks
ssserver -c /etc/shadowsocks.json -d start
ssserver -c /etc/shadowsocks.json -d stop
```

#### 第二步：本机安装和设置Shadowsocks 客户端

shadowsocks客户端
https://github.com/shadowsocks/shadowsocks-windows/releases

.NET 4.6.2安装包
https://www.microsoft.com/en-us/download/details.aspx?id=53344

![shadowsock3.jpg](https://cdn.steemitimages.com/DQmX8L6SRneXzpPqConMqnhWCJ1hCF8esR2V7kK7QFHgEuk/shadowsock3.jpg)

如上图所示配置即可。代理模式设为“全局模式”较好。

**好了，治好了各种网络不通，嗨起来！**

- - -

This page is synchronized from the post: [vps + shadowsocks科学上网神器](https://steemit.com/@lemooljiang/vps-shadowsocks)
