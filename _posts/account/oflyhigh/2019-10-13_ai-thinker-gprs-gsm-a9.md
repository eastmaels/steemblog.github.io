
---
title: '悲催，(Ai-Thinker) GPRS+GSM A9开发板不支持京东通信电话卡'
permlink: ai-thinker-gprs-gsm-a9
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-10-13 01:51:09
categories:
- cn
tags:
- cn
- gsm
- mobile
- gprs
- study
thumbnail: 'https://cdn.steemitimages.com/DQmdvaT8ete84o89z6cy152HaBoYL3AsHY19G3DPcJ697pi/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


之前的帖子中说过，为了完成一个小功能，买了安信可(Ai-Thinker) GPRS+GSM A9开发板以及京东通信的的电话卡(联通制式)。

![](https://cdn.steemitimages.com/DQmdvaT8ete84o89z6cy152HaBoYL3AsHY19G3DPcJ697pi/image.png)

一直懒得动手，今天决定着手开始弄了，可惜开发板上的丝印根本看不清楚啊。

找了半天找到了A9开发板的示意图，总算可以连线了：
>![](https://cdn.steemitimages.com/DQmfUMng7tX36CKnsyB46Wsc3peiMHCTmUTJAn6ppdGXMic/image.png)
(图源：https://wiki.ai-thinker.com/gprs/a9/boards)


然后用[Arduino UNO当作USB-TTL](https://steemit.com/cn/@oflyhigh/arduino-unousb-ttl-2019-10-12)开始连接，原本以为应该顺利的联网并可以拨打电话，结果死活注册不上网络。

初始化后始终等不到Ready提示，一直停留在：
>Init...
+CREG: 2
+CREG: 2
+CREG: 3

如果尝试打电话，则提示：
>+CME ERROR: 58

看提示，大致应该是没有成功注册到网络上(`3 registration denied`)。

我分析可能是供电不足或者信号不够强，于是又尝试换了5V2A的USB电源，无效；又尝试换了其它GSM/GPRS天线，还是无效。

好在我买模块一般习惯买两个，莫不是这个模块坏了，再换个模块试试，结果症状依然。

于是乎，考虑到可能是卡的问题，换了一张移动卡进去，瞬间注册到网络上一切OK。
>Init...
>^STN: 37
>+CTZV:19/10/12,10:57:23,+08
>
>+CREG: 1
>
>A9/A9G
>V02.02.20180825R
>Ai_Thinker_Co._Ltd.
>READY

拨打电话之类的也完全正常：
>ATD131XXXXXXXX;
>
>OK
>+CIEV: "CALL",1
>+CIEV: "SOUNDER",1
>+CIEV: "CALL",1
>+CIEV: "SOUNDER",0
>+CIEV: "CALL",0
>
>BUSY

那就奇怪了，为啥移动卡好用而联通卡不好用呢？按说都应该支持GSM啊？

对了，GSM，有可能联通禁用了GSM功能呢？于是乎打电话到联通客服，咨询后，大致有了如下结论：
>1: GSM已经快不运营了，所以好多地区信号都不好
2: 新开的卡要开通GSM业务，否则只有3G、4G业务
3: 虚拟运营商还得找对应的运营商处理

于是废了半天劲打进了京东通信的客服，转来转去，最后的客服告诉我，***京东通信不支持2G(GSM)业务，无法开通***。

也就是说，我的安信可(Ai-Thinker) GPRS+GSM A9开发板和这个京东通信电话卡，根本没法一起使用，白折腾半天啦，郁闷☹。

![](https://cdn.steemitimages.com/DQmYwQNUnJtAfREsXwZ1murN6yoHvedJFQvCquW1AUp9aM7/image.png)

# 相关链接

* [小技巧：Arduino UNO当作USB-TTL](https://steemit.com/cn/@oflyhigh/arduino-unousb-ttl-2019-10-12)
* [安信可(Ai-Thinker) GPRS+GSM A9开发板到货了](https://steemit.com/cn/@oflyhigh/ai-thinker-gprsgsm-a9-2019-10-02)
* [Pudding 系列开发板-A9开发板资料](https://wiki.ai-thinker.com/gprs/a9/boards)
* [GPRS A9/A9G 系列模组专题](https://wiki.ai-thinker.com/gprs)
* https://m2msupport.net/m2msupport/atcreg-network-registration/


----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>

- - -

This page is synchronized from the post: ['悲催，(Ai-Thinker) GPRS+GSM A9开发板不支持京东通信电话卡'](https://steemit.com/@oflyhigh/ai-thinker-gprs-gsm-a9)
