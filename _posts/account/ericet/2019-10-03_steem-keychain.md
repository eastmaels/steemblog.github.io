
---
title: '无需翻墙版的Steem Keychain'
permlink: steem-keychain
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-10-03 14:56:15
categories:
- cn
tags:
- cn
- cn-reader
- cn-curation
- whalepower
- steem-keychain
- steem-guides
- sct-userguide
- build-it
- jjm
- palnet
- zzan
- mediaofficials
- actnearn
- marlians
- neoxian
- lassecash
- upfundme
- sct
- sct-cn
- sct-freeboard
thumbnail: 'https://cdn.steemitimages.com/DQmPomNc289GiagNmsjZYBJ6ZuA1csZKquC5H29BQgAEVFN/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Steem Keychain是Steem上众多工具里面，我最喜欢的一个工具之一

他的出现让登录，转账，代理，投见证人，领取收益等操作变得更加的方便

虽然很棒的一个工具，但是有一个小缺点，这个小缺点让部分国内用户难以使用。

这个小缺点就是，工具的默认节点是api.steemit.com

当你安装后插件后，会要求你输入账号和密钥来完成设置。但是这个设置背后的节点是api.steemit.com. 由于api.steemit.com在国内被墙了，所以没有翻墙的用户就卡在这一步，完成不了设置。并且没有任何地方可以切换节点。

所以这里出现了一个死循环：你需要完成设置才能切换节点，但是你需要切换节点来完成设置。

![](https://cdn.steemitimages.com/DQmPomNc289GiagNmsjZYBJ6ZuA1csZKquC5H29BQgAEVFN/image.png)

为了解决这个死循环，对源代码进行了修改。把默认的节点改成了anyx.io.

源代码可以在这里找到：https://github.com/ericet/steem-keychain
zip文件可以从这里下载：https://github.com/ericet/steem-keychain/raw/master/steem-keychain.zip

### 安装无需翻墙版的Keychain步骤：
---

1. 下载[steem-keychain.zip](https://github.com/ericet/steem-keychain/raw/master/steem-keychain.zip)
2. 打开Chrome或者Brave浏览器，在地址栏输入“chrome://extensions/”
![](https://cdn.steemitimages.com/DQmQQcjxKhgaTTtXB3UMjFgcWfU6BiJ2Mgs8FagsZMW2mjQ/image.png)
3. 在右上角，有个Developer mode的选项，开启这个选项（刷新一下）。
![](https://cdn.steemitimages.com/DQmQ7S3HFTMjujVdsfVvA9QBSVUJsBpEtSwRDUbFda9X4Xb/image.png)
4. 把第一步下载的steem-keychain.zip直接拽入到插件的页面。这时会自动安装插件。
![](https://cdn.steemitimages.com/DQmYfzZ1htwbqNf8kmsT4jp6TH17Y2e4B2pg91n3VtyLRBD/image.png)
5. 安装成功后，右上角就会出现steem keychain的图标：![](https://cdn.steemitimages.com/DQmbQaczt5jrZVRxGpAhdWhZsmsXvUxzguT13zzz5Y1aN5Q/image.png)
6. 按照[Steem Keychain 简介和操作指南](https://steemblog.github.io/@ericet/steemkeychain-7n2z3fu72e/)进行设置


好了，无需翻墙版的Steem keychain就这样安装并且设置好了。

如果有任何问题，欢迎留言提问。

- - -

This page is synchronized from the post: ['无需翻墙版的Steem Keychain'](https://steemit.com/@ericet/steem-keychain)
