
---
title: '体验Linode VPS Down机'
permlink: linode-vps-down
catalog: true
toc_nav_num: true
toc: true
date: 2017-11-09 01:56:39
categories:
- linode
tags:
- linode
- vps
- down
- cn
- life
thumbnail: https://steemitimages.com/DQmcPJTJD5Dw2rvfnHKj9rmtvihRhuwdP5A5P5xPEZvnZ4A/home-2910647_960_720.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


今早凌晨临睡前，躺在床上习惯性的刷刷我的几个程序的状态报告，额，有俩程序怎么两个多小时没有新动态了？这不科学啊。好吧，估摸是网络故障啥的，一般网络故障，恢复后我的程序会自动重新连接，大可不必担心。又等了大约半个小时，发现状态还没有更新，我意识到事情可能有些不对劲了。

![home-2910647_960_720.jpg](https://steemitimages.com/DQmcPJTJD5Dw2rvfnHKj9rmtvihRhuwdP5A5P5xPEZvnZ4A/home-2910647_960_720.jpg)

放在家里小设备上的程序一切正常，放在SOFTLAYER独立服务器上的程序一切，唯独放在VPS上的程序不正常，那么就登陆VPS的面板看看吧。我的几个VPS都放在Linode，登陆面板一下子就看到大大的黄色提示信息，说有重要的内容未查看。

点进去一看，果然有个紧急维护通知：
***Emergency Maintenance***
>Hello,
We have detected ***an issue*** affecting the physical host your Linode resides on.
We're working to resolve this as quickly as possible and will update this ticket as soon as we have more information for you.
Your patience and understanding is greatly appreciated.
Regards,
XXXX.

然后随后是一条更新：
>Hello,
We have resolved the issue affecting the physical host at this time.
There is no need to issue boot jobs for your Linode. If your Linode was previously running, a boot job has been queued and your Linode will boot shortly. You can monitor the progress of your Linode's boot from the Dashboard tab within the Linode Manager.
Please let us know if you have any additional questions or concerns.
Thank you for your patience and understanding.
Regards,
XXXX.

大概意思就是我VPS所在的服务器出故障啦，他们解决掉故障并帮我重启VPS啦。
可问题是我的程序没设置开机自动运行，所以虽然VPS重启起来了，但是我的程序并没有启动。

一边哀叹自己劳碌命，一边从床上爬起来，使用putty登陆vps，把程序启动起来，看了一眼，一切正常，迷糊糊的继续去睡。

睡了大概不到两个小时，乱七八糟的梦做了一大堆，总觉得有心事一般，醒了过来，又刷了一下状态报告，我晕，怎么还没有新动态，我明明已经把程序启动起来了啊。该不会又出问了吧？

登陆Linode的面板，果然***又是大大的黄色提示信息***。
>Hello,
We have detected ***an additional issue*** that is affecting the physical host your Linode resides on.
We're working to resolve this as quickly as possible and will update this ticket as soon as we have more information for you.
We're very sorry for the inconvenience. Your patience and understanding is greatly appreciated.
Kind Regards,
XXXXX
Linode Support

然后随后是一条更新：

>Hello,
We have resolved the issue affecting the physical host at this time.
There is no need to issue boot jobs for your Linode. If your Linode was previously running, a boot job has been queued and your Linode will boot shortly. You can monitor the progress of your Linode's boot from the Dashboard tab within the Linode Manager.
Please let us know if you have any additional questions or concerns.
Thank you for your patience and understanding.
Kind Regards,
XXXX
Linode Support

***an issue***, ***an additional issue***, 话说你们确定不是再玩我？
***又双叒叕***出故障，又重启，能不能让我睡个安稳觉了？

好吧，起床，开机，登陆，重启程序，顺便把程序加到自动启动里。不管了，睡觉去，有能耐你再出故障？！

一觉醒来，一切正常，Linode也没再出故障，可惜一晚上，我只睡了两三个小时，害人不浅啊。不过倒是提醒了我，***不能指望服务器/VPS永不DOWN机***，要考虑到这种情况才对。

(封面图源 ：pixabay)

- - -

This page is synchronized from the post: [体验Linode VPS Down机](https://steemit.com/@oflyhigh/linode-vps-down)
