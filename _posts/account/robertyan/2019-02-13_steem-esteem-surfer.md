
---
title: "【Steem指南】用eSteem Surfer发帖"
permlink: steem-esteem-surfer
catalog: true
toc_nav_num: true
toc: true
date: 2019-02-13 04:47:30
categories:
- esteem-cn
tags:
- esteem-cn
- cn
- steem-guides
- cn-reader
- cn-curation
thumbnail: https://esteem.app/images/08-p-2600.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


### 问题

由于尚不明确的原因，*.steemit.com域名在部分地区的访问受限，对某些用户的使用产生了一定影响。（【2019/02/13】）

针对这一情况，有一系列解决方案，大致可以归类如下：

【用户】：用户可以采取的方案
1. 使用其他客户端，如手机端的Partiko, Wherein和eSteem，PC端的Web界面如steemkr.com、steempress，桌面应用eSteem Surfer
2. 使用其他dApp发布，如dtube, Artifit
3. 采用V·-·P·-·N、S·~·S·~·R等方式浏览steemit.com / busy.org / steempeak.com等

【开发者】：需要开发者支持的方案
1. 创建和部署新的不涉及 "*.steemit.com" 的客户端，如partiko.app的PC版，翻译steemkr.com，修改并部署busy.org等
2. 现有的App如Busy, Steempeak等，支持steemconnect v2以外的登录方式，尝试绕过*.steemit.com被封杀的问题，如steem keychain或steemconnect v3等登录方式，并且更新steemjs的API URL
3. 创建浏览器插件，重定向api.steemit.com到别的api server，如api.steem.house

本文仅介绍【用户】（1）中，使用eSteem Surfer这一客户端访问的方法，可以初步替代steemit.com的发帖功能。

![](https://esteem.app/images/08-p-2600.png)
[Image Source: esteem.app](https://esteem.app/)

<br />

### 用eSteem Surfer发帖

1. 到 https://esteem.app/#downloads 下载对应的**eSteem Surfer桌面客户端（Desktop）**。链接会跳转到GitHub页面 https://github.com/eSteemApp/esteem-surfer/releases，选择Windiows版本（[exe](https://github.com/esteemapp/esteem-surfer/releases/download/2.0.5/eSteem.Surfer.Setup.2.0.5.exe)）或Mac版本（[dmg](https://github.com/esteemapp/esteem-surfer/releases/download/2.0.5/esteem-surfer-2.0.5.dmg)），Linux版本（[deb](https://github.com/esteemapp/esteem-surfer/releases/download/2.0.5/esteem-surfer_2.0.5_amd64.deb), [rpm](https://github.com/esteemapp/esteem-surfer/releases/download/2.0.5/esteem-surfer-2.0.5.x86_64.rpm)）。
2. 下载完毕，按照步骤安装。启动eSteem Surfer。
3. eSteem启动需要设置**PIN码**，即一个在本地启动使用的密码，与Steem无关。需牢记PIN码，下次启动eSteem时需要使用。
4. 用**Steem账户和post key**登录eSteem Surfer。
5. 点击顶部的设置（Settings）按钮，**将Server改成https://anyx.io**，即可正常使用eSteem Surfer。经测试https://anyx.io访问速度还比较快。

![图：选择Server](https://i.ibb.co/6ZX4Rdr/image.png)
Image Source: eSteem Surfer截图

<br />

### 对eSteem Surfer的一些说明
1. eSteem Surfer的图片服务器在部分地区访问存在问题（已报告官方进行修复），可以先通过 https://imgbb.com/ 上传图片，获得图片链接，再用Markdown格式发布图片，如本文所做的
2. eSteem Surfer可以使用的根本原因在于其可以**自由配置 API Server**，而不受steemit.com域名影响，其余的解决方案可以借鉴这一思路以保持灵活性。
3. 使用eSteem发帖会给esteem **10%的受益人费用**，但同时会获得**eSteem的点赞**，点赞金额与使用者所有粉丝的SP总和成正比。
4. 如CN区使用eSteem Surfer遇到其他问题，可以请教eSteem中文区审查员 @davidk20 提供支持。感谢拉仔！

希望本文对大家有帮助。如果在使用eSteem Surfer时遇到问题，或对于其他解决方案有兴趣，请留言讨论。

- - -

This page is synchronized from the post: [【Steem指南】用eSteem Surfer发帖](https://steemit.com/@robertyan/steem-esteem-surfer)
