
---
title: 'Holybread漏洞导致HBBC代币作废'
permlink: holybread-hbbc
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-02-09 04:45:15
categories:
- cn
tags:
- cn
- cn-reader
- holybread
- whalepower
- lifestyle
- build-it
- steemace
- battle
- iv
- steemleo
- cc
- jjm
- mini
- palnet
- zzan
- dblog
- mediaofficials
- marlians
- neoxian
- lassecash
- upfundme
- busy
thumbnail: 'https://cdn.steemitimages.com/DQmc4gikRYRofYVhALZ8oAwabZkJB7kx85Qx5KB2xALnWQt/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


今天登陆Holybread的游戏，想把游戏里面的面包屑转至Steem-Engine出售

但是登陆Steem-Engine后，等了好几分钟HBBC一直没有到帐

看了一下HBBC的挂单情况，感觉不妙

![](https://cdn.steemitimages.com/DQmc4gikRYRofYVhALZ8oAwabZkJB7kx85Qx5KB2xALnWQt/image.png)

全部都是卖单，没有买单的。这是要跑路的节奏吗？

同时发现HBBC的代币的图标有点不太对，多了个![](https://cdn.steemitimages.com/DQmU7Wuzw35yrvZxzrni91fZCHAbbZhfiwe6JLbAqe8wKTz/image.png)

![](https://cdn.steemitimages.com/DQma7GpjDovowSemeCMJNzaa7gDp58DcesRTyxCsDZ9q97U/image.png)

难道真是跑路吧？赶紧到他们的discord看看情况。

![](https://cdn.steemitimages.com/DQmT9h3cVDzTSZDRjmYKswzdncVqH9ZtyJFDG5CvGJhoAhr/image.png)

原来昨天有人发现游戏的一个漏洞，获取了大量的面包屑，市场上的买单基本都被他扫完。

Holybread团队发现这个问题后，马上联系Steem-Engine把HBBC这个币给废除了，又重新新建了一个代币HBC

如果你的SE上还有HBBC，Holybread团队将会空投同等数量的HBC给你

同时还会补充那些因为这个漏洞损失的玩家

看完公告，第一个想法是，是什么漏洞呢？

查了一下聊天记录，虽然没有具体解释，但是看到那人账号的记录，大概猜到是什么漏洞了

这是那人的几个转面包屑的json，数量部分有惊人的数字。一个2400万面包屑，一个2亿面包屑。这游戏才开始一周多，没有可能在这么短时间内会赚到这么多的面包屑。

![](https://cdn.steemitimages.com/DQmZABefVmWz7s5LZMMdP31FHzytEp2LKzJbzKdVquP4d8D/image.png)

所以漏洞就在游戏里面转面包屑的数量上。游戏的漏洞是，在转面包屑到Steem-Engine上的时候，并没有检查账号是否有那么多的面包屑。

比如，我的账号内有86000面包屑，但是在转出面包屑数量的时候，我填了10万面包屑：
![](https://cdn.steemitimages.com/DQmSwzA6reSs8WgmCtFo8E5Gdw6ny6RiAQRtg9tjucUsmed/image.png)

本来应该提示面包屑数量不足，但是游戏居然通过了转账。（这次转账没成功，因为HBBC这个币已经被废了）

![](https://cdn.steemitimages.com/DQmbcVSaXVKkdqxFkLiBmYh299PfKRERSUuXTw9vWYChUpv/image.png)

那人就是利用这个漏洞转走了好几亿的面包屑。虽然我觉得这个漏洞Holybread要付主要责任，但是由于那人闷声发大财，所以现在被人狂踩中。

希望Holybread好好开发，不要真的Holyshit了

- - -

This page is synchronized from the post: ['Holybread漏洞导致HBBC代币作废'](https://steemit.com/@ericet/holybread-hbbc)
