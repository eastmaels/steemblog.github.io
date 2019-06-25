
---
title: '搭建自己的steemconnect'
permlink: steemconnect-d95906vroq
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-06-24 19:56:30
categories:
- cn
tags:
- cn
- sct
- sct-cn
- whalepower
- cn-reader
- cn-programming
- steem-guides
thumbnail: 'https://ipfs.busy.org/ipfs/QmUjhCW2bNWvMgYgus9MeJLQKzCpnMT2wn9s97wRd8kW8T'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


自从steem-engine出现以后，登录steem-engine进行一些交易已经成为CN区的日常。steem-engine很多操作是需要通过steemconnect来完成，但是由于steemconnect使用的节点api.steemit.com被墙了，国内用户就会卡在steemconnect这一步骤而完成不了交易。

为了解决这个问题，我临时搭建了一个不使用api.steemit.com这个节点的steemconnect。
这是我使用heroku搭建的steemconnect： https://steemconnectcn.herokuapp.com/

操作并不是很复杂，如果你有兴趣搭建自己版本的steemconnect，可以按照下面步骤搭建：

<h3>注册github账号</h3>

github号称全球最大的同姓交友平台, 有着自己独特的魅力，那就是开源。steemconnect是开源程序，所以只要注册github就可以使用steemconnect代码搭建属于自己的steemconnect。
注册链接：https://github.com/join

<h3>到steemconnect的代码库克隆steemconnect的代码</h3>

链接：https://github.com/steemscript/steemconnect
点击右上角的“fork”，就可以克隆一份steemconnect的代码到你自己的代码库里。
<img src="https://ipfs.busy.org/ipfs/QmUjhCW2bNWvMgYgus9MeJLQKzCpnMT2wn9s97wRd8kW8T" alt="image.png" /><br/>

<h3>通过heroku注册一个账号</h3>

Heroku是一个支持多种编程语言的云平台。你可以很方便的部署你的应用在heroku平台上。
Heroku还提供1个月1000小时（注册获得550小时，如果添加信用卡再获得450小时）的免费使用额度。但是免费的问题是要和其他用户共享一个内存池，并且如果30分钟没有请求，就自动断线，直到有人访问后才重新连接。
注册链接：https://signup.heroku.com/
<img src="https://ipfs.busy.org/ipfs/QmYvcfSsGnB8eHxaQnUPPZiFdh7E6PKf7BoxWSVDRun2en" alt="image.png" /><br/>

<h3>创建新的应用</h3>

注册好heroku的账号后，点击右上角“New"->"Create new app" 创建新的应用
<img src="https://ipfs.busy.org/ipfs/QmTK16bqrbSw2gDZphQWpeSQKsgTmHeSBEpNit2xGxHnKg" alt="image.png" /><br/>

<h3>给应用起个名字</h3>

给应用输入一个名字，比如我给这个教程的steemconnect起了“steemconnecttest”的名字。创建的名字就是你的二级域名的名字，比如我新应用的网址是：http://steemconnecttest.herokuapp.com/
<img src="https://ipfs.busy.org/ipfs/QmZSqySQZd162QkgobbSbk9QmYEjKWJtQD6hnRPRcxjxw2" alt="image.png" /><br/>

<h3>绑定github的代码库</h3>

创建好应用的名字后，会出现下面的页面。在Deployment Method那一栏选择“github”。如果是第一次绑定，会要求你登录你的github账号绑定。绑定成功后，点击“search”并绑定steemconnect的代码库

<img src="https://ipfs.busy.org/ipfs/QmVqoNpuFmqrCa24p8oGoTU9VNzLR5dLykn7S3cF7z8dfF" alt="image.png" /><br/>

<h3>设置环境变量（Environment Variables）</h3>

环境变量是程序运行时设置的参数。设置环境变量的好处是，每次更改参数不需要修改代码。
比如steemconnect使用的节点就是一个环境变量。你可以把变量改成"https://steemd.minnowsupportproject.org" 而不需要修改代码。

选择“Settings" -> "Reveal Config Vars", 然后输入以下环境变量：
* CSP_CONNECT_SRC ：'self',*.steemit.com,https://steemd.minnowsupportproject.org
* STEEMD_URL：https://steemd.minnowsupportproject.org
<img src="https://ipfs.busy.org/ipfs/QmVCKSXPWJhf7wKYVrVm4xCdFvTX8BHfwNFa6nMu8jMop9" alt="image.png" /><br/>

<h3>部署steemconnect</h3>

设置好环境变量后，回到刚才”Deploy“页面。在manual deploy那一栏选择”sc2"这个branch。
为什么选择这个branch而不选择master呢？因为新版的steemconnect实在太难用了，还不如旧版的steemconnect好用。
选择好branch后，就可以点击“Deploy Branch”开始搭建自己的steemconnect了。等搭建成功后点击右上角的“Open App”就可以访问自己搭建的steemconnect了~
<img src="https://ipfs.busy.org/ipfs/QmarsyeAsc9LHbq9zLa7ofiSTnTYGi3KL1JasbiDLozjSu" alt="image.png" /><br/>

<h3>搭建完steemconnect后怎么用呢？</h3>

比如你想代理20sp给teamcn-shop，可以设置你的链接如下：
https://steemconnectcn.herokuapp.com/sign/delegateVestingShares?delegator=&amp;delegatee=teamcn-shop&amp;vesting_shares=20%20SP

如果想领取SCT的代币，可以设置你的链接如下：
https://steemconnectcn.herokuapp.com/sign/custom-json?required_posting_auths=%5B%22davidchen%22%5D&amp;id=scot_claim_token&amp;json=%7B%22symbol%22:%22SCT%22%7D

反正生出的steemconnect链接，把域名改成“steemconnectcn.herokuapp.com（或者你自己搭建的steemconnect的域名）”就好了。

- - -

This page is synchronized from the post: ['搭建自己的steemconnect'](https://steemit.com/@ericet/steemconnect-d95906vroq)
