
---
title: 'Ubuntu Server 18.04 设置WIFI上网'
permlink: ubuntu-server-18-04-wifi
catalog: true
toc_nav_num: true
toc: true
date: 2018-07-11 03:36:24
categories:
- network
tags:
- network
- wifi
- ubuntu
- netplan
- cn
thumbnail: https://cdn.steemitimages.com/DQmXEAvLCeavfEzuq97ue5W9xaLuPNb7aXABygimW8WpPXE/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Ubuntu Server 18.04 默认只开启了有线网卡，我总觉得有线扯个网线不优雅，于是想着能不能把无线开启了，这样我就可以随便将它扔到那个角落里，而不用放在路由器旁边了。

![](https://cdn.steemitimages.com/DQmXEAvLCeavfEzuq97ue5W9xaLuPNb7aXABygimW8WpPXE/image.png)
(图源 ：[pexels.com]( https://www.pexels.com/))

以前在树莓派呀、香蕉派呀啥的上设置无线网卡是很简单的事，只需编辑`/etc/network/interfaces`文件，加入相应的内容即可。

但是我打开`/etc/network/interfaces`文件一看，提示如下信息：
>`# ifupdown has been replaced by netplan(5) on this system.  See`
`# /etc/netplan for current configuration.`
`# To re-enable ifupdown on this system, you can run:`
`#    sudo apt install ifupdown`

好嘛，我以前的技能又过期了，然后我就去看`/etc/netplan`有啥，发现个这样的文件：
![](https://cdn.steemitimages.com/DQmTsYyrF5j81DaM5s2bZJvTgVzS4fKLcMf2sTDfSKXyHqY/image.png)
(没有renderer: NetworkManager这行，但是原始的我没截图）

上边的地址信息等是我安装Ubuntu Server 18.04 时按提示输入的，这么说来，我按一定规则把无线网卡信息填写进去就可以了。

先来看看无线网卡叫啥名：
>`ifconfig -a`

![](https://cdn.steemitimages.com/DQmXPzFnucdmLLuWuunmuc5EuWBLpgK4LML1oJuUrHZDD8J/image.png)
好奇怪的名字。

不管了，按上述规则往里填，可是WIFI的名称和密码该如何填写啊。到如下链接找了个帮助信息，可是还是有点晕：
https://netplan.io/reference

最后找到这样一个帖子[Netplan – How To Configure Static IP Address in Ubuntu 18.04 using Netplan](https://www.itzgeek.com/how-tos/linux/ubuntu-how-tos/netplan-how-to-configure-static-ip-address-in-ubuntu-18-04-using-netplan.html)

按照上述帖子里的示例，结合我的理解，最终wifis配置如下：
![](https://cdn.steemitimages.com/DQmNPxsfWrJG4Y2nGPm3F4vhpLMvsedDCn6rzib6QuEuFGj/image.png)

然后试了：
>`sudo netplan generate`
`sudo netplan apply`

但是无线网并没有连上。
然后看文档说要装`wpasupplicant`以及`network-manager`，
>`sudo apt-get install wpasupplicant`
`sudo apt-get install network-manager`

并在上述配置文件中加入：
>`renderer: NetworkManager`

重启后，发现无线网络已经可以正常链接啦。

# 总结

* 安装 `wpasupplicant`以及`network-manager`
* 编辑`/etc/netplan`目录下的配置文件
* 加入`renderer: NetworkManager`
* 加入对应无线网卡的设置
* 重启主机

# 参考链接

* [Netplan reference](https://netplan.io/reference)
* [Netplan – How To Configure Static IP Address in Ubuntu 18.04 using Netplan](https://www.itzgeek.com/how-tos/linux/ubuntu-how-tos/netplan-how-to-configure-static-ip-address-in-ubuntu-18-04-using-netplan.html)

- - -

This page is synchronized from the post: [Ubuntu Server 18.04 设置WIFI上网](https://steemit.com/@oflyhigh/ubuntu-server-18-04-wifi)
