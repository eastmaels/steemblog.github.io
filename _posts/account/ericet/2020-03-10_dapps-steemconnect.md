
---
title: 'DApps使用steemconnect授权登录的问题'
permlink: dapps-steemconnect
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-03-10 20:50:06
categories:
- hive-180932
tags:
- hive-180932
- cn
- cn-reader
- steemconnect
- whalepower
- build-it
- lifestyle
- cc
- jjm
- mini
- palnet
- zzan
- dblog
- diamondtoken
- marlians
- neoxian
- lassecash
- upfundme
- busy
- actnearn
thumbnail: 'https://cdn.steemitimages.com/DQmUs1MeAW68XkEKnH75XshxwVUv9bAmTF91fhaNRgEHsjY/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


很多DApps使用Steemconnect授权登陆，比如wherein，partiko，steempeak，busy, steemauto等等

你可以通过https://steemd.com/@用户名 来查看你给哪些DApps授权

![](https://cdn.steemitimages.com/DQmUs1MeAW68XkEKnH75XshxwVUv9bAmTF91fhaNRgEHsjY/image.png)

授权登录的意思是，用户授权给DApps，DApps就可以以用户的名义发帖，点赞，踩等等

比如你授权给partiko，你通过partiko写文章，点赞，评论等操作。看起来是你在做这些操作，其实背后是partiko替你完成这些操作。当你提交一篇文章，partiko就用你的账号+自己的发帖密钥替你发帖（因为你已经授权给partiko，所以partiko拥有你的posting权限）。


前几天和阿盐@robertyan在捣鼓无需翻墙版的steemconnect的时候，发现在Dapps背后还有一个大Boss，这个大Boss的权利更广

还拿partiko做个例子。下面是partiko的授权列表，partiko授权给steemconnect

![](https://cdn.steemitimages.com/DQmYki1D3YsKUs74ytZojPPVALPwE3v3zicEFnPVbVCC6Eq/image.png)

为什么Partiko要授权给steemconnect呢？

和Partiko用户授权给Partiko的原因类似，部分操作需要steemconnect替partiko来操作。而steemconnect没有partiko的Posting Key，所以需要partiko授权给steemconnect来完成操作。

Partiko的用户授权给Partiko，而Partiko授权给steemconnect，理论上Partiko用户间接的授权给了steemconnect

所以是否steemconnect在Partiko没有直接授权的情况下可以使用Partiko用户的Posting权限呢？

做了一个实验，账号A授权给账号B，然后账号B授权给账号C。最后账号C用账号A+自己的发帖密钥给一篇帖子点赞。结果居然成功了！

所以如果拥有steemconnect这个账号的所有权，你就可以拥有所有DApps用户的Posting权限！

但是大家不要太担心，Posting权限最多用来点赞，发帖，回复和踩，对你的钱包没有任何控制权

目前来说，Steem Keychain是最安全的，可惜只能在电脑上使用。希望出手机版。

- - -

This page is synchronized from the post: ['DApps使用steemconnect授权登录的问题'](https://steemit.com/@ericet/dapps-steemconnect)
