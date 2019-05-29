
---
title: "SteemLogin 新的登录Steem的方式"
permlink: steemloginsteem-agi3s1sv24
catalog: true
toc_nav_num: true
toc: true
date: 2019-05-01 19:59:54
categories:
- cn
tags:
- cn
- cn-reader
- jjm
- steemlogin
- whalepower
thumbnail: https://steemitimages.com/0x0/https://i.postimg.cc/hv46YzWL/steemlogin.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<img src="https://steemitimages.com/0x0/https://i.postimg.cc/hv46YzWL/steemlogin.png" alt="" /><br/>

大家是不是觉得每次登录STEEM的DApps，都要输入长长的一段密钥是一种困恼？

大家不是超人，不太可能会记下这么长的密码。有没有一种友好的登录方式，可以通过google，facebook，twitter，github账号登录呢？

答案是肯定，SteemLogin就是这样的一种友好的登录方式。

只要DApps加入了SteemLogin的登录方式，用户只需设置一次登录密钥，就可以使用他们自己的Google，facebook，twitter，github账号登录上Steem了~

用户的用户名和Posting Key将会储存在Cloud Firestore数据库，通过Firebase自己的加密方式加密保存。

这里的风险是，如果Firestore被黑了，这些Posting Key将会被盗。但是由于是Posting Key，只能用于点赞/留言/发帖/转发，这个风险还是可以接受的。

目前Wherein也有相似的登录方式，那就是通过wherein app创建新号后，可用手机号绑定STEEM账号登录。

越来越多的DApps会使用这种方式来登录，毕竟门槛低了，操作简易了，STEEM才会有人流。

SteemLogin是个开源项目，源代码可以在这里找到：https://www.github.com/irelandscape/steemlogin

想了解更多关于SteemLogin，可看原帖：<a href="https://busy.org/@steemlogin/steemlogin-a-new-and-easy-way-to-sign-in-to-steem">SteemLogin - a new and easy way to sign in to Steem!</a> <br /><center><hr/><em>Posted from my blog with <a href='https://wordpress.org/plugins/steempress/'>SteemPress</a> : https://tecirechen.000webhostapp.com/2019/05/steemlogin-%e6%96%b0%e7%9a%84%e7%99%bb%e5%bd%95steem%e7%9a%84%e6%96%b9%e5%bc%8f </em><hr/></center> 

- - -

This page is synchronized from the post: [SteemLogin 新的登录Steem的方式](https://steemit.com/@ericet/steemloginsteem-agi3s1sv24)
