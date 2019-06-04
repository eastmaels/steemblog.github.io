
---
title: 'Linksys WRT 1900ACS 端口转发设置 & 思维定式'
permlink: linksys-wrt-1900acs-and
catalog: true
toc_nav_num: true
toc: true
date: 2017-08-03 12:09:09
categories:
- cn
tags:
- cn
- linksys
thumbnail: https://steemitimages.com/DQmYBz58DrDpt5y7b17STLadf6QB5bLn34j9vxWq196CHnL/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


一般想远程访问家里的电脑，有几个选择：
* 通过VPN拨号到家里的网络
* 通过DDNS以及NAT来访问家里指定电脑的指定端口，并藉此为跳板访问其它主机

当然除了远程访问的需要，也有不少朋友使用家里的网络资源搭建服务器，那么使用DDNS将域名映射至家里拨号(或光纤 )的公网IP，再将80端口映射至内网提供HTTP服务的主机对应的HTTP服务端口就行。

之前我在其它例子中，比如微信语音控制开关灯的例子中使用BANANAPI M2+ 搭建过MQTT代理以及HTTP服务器，都是基于上述思路。感兴趣的朋友可以自行搜索我的相关文章，就不一一列出了。

但是我当时用的是NETGEAR小白，很精简的一个路由器，设置NAT非常简单。
大概6个月以前，手贱，换了个新路由***Linksys WRT1900ACS***
* [My new router / 过年了，换点新装备](https://steemit.com/life/@oflyhigh/my-new-router)

![](https://steemitimages.com/DQmYBz58DrDpt5y7b17STLadf6QB5bLn34j9vxWq196CHnL/image.png)
就是这货

换路由的本意是想折腾一下OPENWRT，已经曾经在BananaPi R1上折腾过好长时间，觉得相当好玩。然而换上之后，因为挂了一堆重要的设备，就没有再折腾，也就是说，我相当于花巨款，买了个性能强大的路由器，和以前的小白一样用。更重要的是，我发现有时候还不如小白。比如今天我要设置一下NAT.

我以为设置个NAT对于我的这个强大路由器，应该不算啥问题吧。
结果我在设置界面找了半天，死活没找到。

![](https://steemitimages.com/DQmSinsvTCsb8u3BfxVkAVnAK4W1XQqJbvpYL3WS8yiJ9if/image.png)
NAT嘛，当然在连接里找了，然而哪个像呢？

![](https://steemitimages.com/DQme51hmdALVxdzdpZ2gauaK1C2ACixhDbDUXLxmrU8sx6B/image.png)
逐个标签打开，终于找到NAT字样了，然而如何设置呢？

我保存啊，重进啊，找啊找，各种手段都试过了，也没找到NAT设置的地方。然后开始漫长的百度之旅，可惜百度上也没有人介绍这块，或者是因为大家都搞成OpenWRT了，或者太简单了，没有写出来的必要。

我都准备给客服打电话了，什么破路由器，NAT的功能都没有！！
在打电话之前，我决定静下心来再找一遍，该找的都找啦啊
总不能在什么***外部存储、无线设置、网络测速***里吧， 不死心的点了一遍， 果然没有！
![](https://steemitimages.com/DQmPMRwFU7cQX8WmC1r46qkrk7yj4aiWfbog8DvGaCpZknw/image.png)

然后发现，咦，还有一个***安全设置***没点呢，![](https://steemitimages.com/DQmcX8ysAjmKSpTdLxSjNMqLVvXcv4PQysLJ86WFscoGaKf/image.png)

![](https://steemitimages.com/DQmaZNP9n9UNL6rKY9pamRReY1AYX9wSJhtnZbirwSAb4K1/image.png)
进去一看，我晕，居然藏在这里呢！

![](https://steemitimages.com/DQmNnnZCqQtmM99BLWq9x4L4GYPrVoK9Sr2JyuiqzPBk6Lr/image.png)
剩下的事情就简单了。

本来觉得很简单的事情，却费了这么多时间和这么大波折。
LinkSys这个路由器管理界面是否友好、布局是否合理姑且不论，我们有时候养成的思维定式真的是很可怕。如果不是因为思维定式直接排除了![](https://steemitimages.com/DQmcX8ysAjmKSpTdLxSjNMqLVvXcv4PQysLJ86WFscoGaKf/image.png)， 那么或许几分钟就搞定了吧。

写出来，万一有遇到同样问题的朋友，可以参考一下。
另一方面，也***提醒朋友们注意避免思维定式，尤其是接触新东西的时候。***

- - -

This page is synchronized from the post: [Linksys WRT 1900ACS 端口转发设置 & 思维定式](https://steemit.com/@oflyhigh/linksys-wrt-1900acs-and)
