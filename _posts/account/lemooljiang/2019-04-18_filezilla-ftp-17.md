
---
title: "用FileZilla作FTP文件服务器 / 网络研习社#17"
permlink: filezilla-ftp-17
catalog: true
toc_nav_num: true
toc: true
date: 2019-04-18 15:09:45
categories:
- cn
tags:
- cn
- network-institute
- ftp
- filezilla
thumbnail: https://cdn.steemitimages.com/DQmVSVqmfEd6VtQJ2ELPLZPA3jASFx3fGCVjLSWtvgG8WXU/filexilla.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![filexilla.jpg](https://cdn.steemitimages.com/DQmVSVqmfEd6VtQJ2ELPLZPA3jASFx3fGCVjLSWtvgG8WXU/filexilla.jpg)

https://filezilla-project.org

在局域网（比如校园网）中作个FTP文件服务器还是有它的便利性的。比如共享个资料，或是提交文件，会便利很多的。

###  一、FTP服务器的原理

![ftp.jpg](https://cdn.steemitimages.com/DQmWRw3jyF4gVsujQqpP9o3wV9aonffJjYXJYfmR5o6yLJV/ftp.jpg)
 
如上图所示，先来简单地了解一下FTP服务器的原理。由局域网中的某台电脑（10.39.3.77）来充当FTP服务器（共享文件的位置），其它电脑就可以通过FTP工具和它相连，从而达到文件共享的目的。

### 二、安装FileZilla Server

在一台电脑（10.39.3.77）上安装FileZilla Server，由它来提供服务。安装很简单，一个劲地下一步就可以了。
 
![a1.jpg](https://cdn.steemitimages.com/DQmZ3bJG6qqTiDQfVGd4rotMN2F73cB4fXhuPSS4TXPvVFm/a1.jpg)

在连接界面上如上填写即可。

### 三、几个重要的设置。

 ![a2.jpg](https://cdn.steemitimages.com/DQmZkAam9pL3hvPx74j7rjBqHhfstNd9ApaRDaBLhPsp6FY/a2.jpg)

a、edit --> settings --> passive mode settings，如上填上端口号和本机IP.

![a3.jpg](https://cdn.steemitimages.com/DQmYsxXDaLiNKtW51SYM7tvStFXHDZkPVhgTEgvgudcrn6H/a3.jpg)
 
b、settings --> FTP over TLS settings ，填写一些相关信息，生成一个证书。这个还蛮重要的，否则软件老是报错。

### 四、用户设置和设置权限。

![user.jpg](https://cdn.steemitimages.com/DQmcbQ2jcFxuVNhdWKcfMyoCyHuzKK7TX8yJUMcJmZ3L6cx/user.jpg)
 
a、edit --> users，增加用户，设置密码。别的电脑就是用这个用户名和密码登录的。可以设多个用户，设置不同的权限。这个功能还是很好用的。

![user2.jpg](https://cdn.steemitimages.com/DQmRpUC4GLqucbKM6JWovqgha2msspy4YoZgoGJmsRGm8xo/user2.jpg)
 
b、设置共享文件的位置，以及用户对它的权限。

五、用户连接
 
![a1.jpg](https://cdn.steemitimages.com/DQmbcmfBiYEu6anpGvzUYLgvf6cJFmRNtoztaj9RrdFRwSn/a1.jpg)

直接在文件地址栏中填入FTP地址：ftp://10.39.3.77 ，在弹出的登录框中输入用户名和密码即可使用。

![user3.jpg](https://cdn.steemitimages.com/DQmfWbuAffWcu4nXpqSSVHzTnbLcPYgcWrt9DKzxEcNpiJA/user3.jpg)
 
本机连接的界面如上图所示，下方有正连接的用户。到此，设置就基本成功了！不过，别的电脑要连的话，是连不上的，问题在于服务器的防火墙会禁止别的电脑相连！


### 六、防火墙设置

![rules.jpg](https://cdn.steemitimages.com/DQmaJ6PwVRpfiSeNc5Trv8S7KNVZpnXmTWU8nC9jWrJ1ibP/rules.jpg)
 
a、网络 --> 属性 --> windows防火墙 --> 高级设置 --> 入站规则 --> 新建规则

 ![rules2.jpg](https://cdn.steemitimages.com/DQmSfjBFqtidmsQQMkkJGT556zQUnQxGYoHdXjCjfDxo8hd/rules2.jpg)

b、在新建规则中，选择 端口 --> TCP --> 所有本地端口--> 允许连接  --> 所有域和公用规则  --> 取个名字 。有些没有写到的使用默认。

好了，到此大功告成！FTP文件服务器就这样完美地建立起来了。


****
网络研习社系列文章：
* [微信小程序开发初体验 / 网络研习社#1]( https://steemit.com/cn/@lemooljiang/61qx8h-1)
* [新技能：小程序空间当图床！ / 网络研习社#2](https://steemit.com/cn/@lemooljiang/gjekw-2)
* [小程序云开发中数据的传递形式 / 网络研习社#3](https://steemit.com/cn/@lemooljiang/6a8ukt-3)
* [如何突破coreldraw的网络限制 / 网络研习社#4](https://steemit.com/cn/@lemooljiang/coreldraw-4)
* [我师网小程序初发布，大家多多指教 / 网络研习社#5](https://steemit.com/cn/@lemooljiang/6rr2ug-5)
* [用github 做文件目录 / 网络研习社#6](https://steemit.com/cn/@lemooljiang/github-6)
* [LNMP环境一键安装（一） / 网络研习社#7](https://steemit.com/cn/@lemooljiang/lnmp-7)
* [LNMP环境自定义安装（二） / 网络研习社#8](https://steemit.com/cn/@lemooljiang/lnmp-8)
* [利用github做免费博客 / 网络研习社#9](https://steemit.com/cn/@lemooljiang/github-9)
* [Nodejs，打开服务器黑匣子 / 网络研习社#10](https://steemit.com/cn/@lemooljiang/nodejs-10)
* [一入前端深似海，聊聊vue.js / 网络研习社#11]( https://steemit.com/cn/@lemooljiang/vue-js-11)
* [我们想做的，vue都帮我们做好了 / 网络研习社#12]( https://steemit.com/cn/@lemooljiang/vue-11)
* [vue和小程序一家亲 / 网络研习社#13]( https://steemit.com/cn/@lemooljiang/vue-13)
* [vue的组件面面观 / 网络研习社#14]( https://steemit.com/cn/@lemooljiang/vue-14)
* [vue-router路由的参数和设计 / 网络研习社#15]( https://steemit.com/cn/@lemooljiang/vue-router-15)
* [webpack前端神器 / 网络研习社#16]( https://steemit.com/cn/@lemooljiang/webpack-16)
****
　@lemooljiang  #network-institute

- - -

This page is synchronized from the post: [用FileZilla作FTP文件服务器 / 网络研习社#17](https://steemit.com/@lemooljiang/filezilla-ftp-17)
