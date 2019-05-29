
---
title: "Vue和django rest framework做前后端分离设计 / 网络研习社#21"
permlink: vue-django-rest-framework-21
catalog: true
toc_nav_num: true
toc: true
date: 2019-05-12 10:52:21
categories:
- cn
tags:
- cn
- network-institute
- vue
- web
thumbnail: https://cdn.steemitimages.com/DQmYaTaW5P5Dt57CK5W3GoZnT44GJsCdPK9tQKC97ortFtr/web.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![web.jpg](https://cdn.steemitimages.com/DQmYaTaW5P5Dt57CK5W3GoZnT44GJsCdPK9tQKC97ortFtr/web.jpg)

今天有点小开心，倒不是因为是星期天，而是因为这段时间学习前后端分离设计有了点小小的成绩：前后端终于可以跑起来了！要知道这几天为了做服务器这块，狠是熬了几个晚上的。


![web2.jpg](https://cdn.steemitimages.com/DQmR8ui58CwQVAZYJ42RtHihcNKs6evMrmnSwDRfjprsz6X/web2.jpg)

<center>前后端分离设计如上图所示</center>

现在web的设计趋势就是这种前后端分离设计了。以前我都是wordpress神器全部搞定，现在慢慢转向了python开发。这种现学现卖地压力不小，也迫使自己不断学习前进。

在python web的开发中，django 和 rest framework是一对好搭档。由它们两者来完成后端的开发，还是很理想的。它不仅可以快速地写出接口，文档也可以快速生成，是个不错的工具。

Vue在前端中几乎可以完成所有的工作，而且可以在不同的终端中设计应用，可见它的野心是不小的。据说它的终级理想是：一个模型所有终端！在前面的一些文章中也分享了一些它的技术，它的应用性可是很理想的。

## 为什么做前后端分离？

也许是时代的发展，也许是多个终端的形成。一个PC网站打天下的场景慢慢变少了，移动端的市场在不断变大。虽然也有响应式地解决方案，但总是觉得差点意思。主要是因为要完全适配电脑端和手机端是不太可能的。所以，不同的终端还是要不同的开发。但是，后台可以共享啊，这步可以省省。所以，前后端分离的现状就这样出来了。

当然，前后端分离还有不少的优点，我就不一一列举了。人总是要适应技术的发展方向。

## 前后端分离所需的技术

列个清单，好像还蛮多的：
```
Ubuntu 18.04  
MySQL 8.0 
python 3.6
Vue.js 2.6
Django 2.2
django rest framework
uWSGI 
Supervisor
Nginx
Postman
SecureCRT
```
<br>
哈，学个技术不容易啊。要做出个前后端分离的网站还是要费不少劲的。当然，做好了也是可以吃挺长时间的。


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
* [用FileZilla作FTP文件服务器 / 网络研习社#17](https://steemit.com/cn/@lemooljiang/filezilla-ftp-17)
* [连接FTP文件服务器的方法/ 网络研习社#18](https://steemit.com/cn/@lemooljiang/ftp-18)
* [axios请求HTTP和vuex数据管理 / 网络研习社#19](https://steemit.com/cn/@lemooljiang/axios-http-vuex-19)
* [YouTube 视频下载利器—Youtube-DLG / 网络研习社#20](https://steemit.com/cn/@lemooljiang/youtube-youtube-dlg-20)

****
　@lemooljiang  #network-institute

- - -

This page is synchronized from the post: [Vue和django rest framework做前后端分离设计 / 网络研习社#21](https://steemit.com/@lemooljiang/vue-django-rest-framework-21)
