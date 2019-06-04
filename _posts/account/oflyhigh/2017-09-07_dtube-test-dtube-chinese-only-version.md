
---
title: '测试一下 DTube / Test DTube (Chinese-only version)'
permlink: dtube-test-dtube-chinese-only-version
catalog: true
toc_nav_num: true
toc: true
date: 2017-09-07 04:11:36
categories:
- cn
tags:
- cn
- dtube
- dtube-test
- ipfs
thumbnail: https://steemitimages.com/DQmXcNtUcVHhNHSNV1EW2LxyuTAqYFbtsPwEavZcuKnhrMb/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


DTube 是一个使用STEEM和IPFS搭建起来的去中心化视频平台。

https://steemitimages.com/0x0/https://ipfs.io/ipfs/QmWJNhrmzWLB6GhBiqb92vWo4b46nPmhRUzb6vQEu1BFgb


Dtube 作者为： @heimindanger  
首次发布公告，见这里:
[Introducing DTube: a decentralized video platform using STEEM and IPFS](https://steemit.com/video/@heimindanger/introducing-dtube-a-decentralized-video-platform-using-steem-and-ipfs)

我看最近这个很是火热，于是也测试了一把
(之前有测试过 @furion 创建 view.ly, 详情请见[测试一下Viewly / Test Viewly](https://steemit.com/cn/@oflyhigh/viewly-test-viewly))

# Dtube域名以及登陆

https://dtube.video
请注意***不是dtube.com***，我想当然地输入了这个，哈哈

使用steemit的用户名(ID)以及对应的Posting私钥登陆
(如何获取Posting私钥:  登陆steemit,  **`Wallet->Permissions->Show private key`**)
请注意，***务必不要使用密码登陆***，这个原则适用于除了steemit.com以外任何网站。

# 发布内容

发布内容大致分为三个步骤：
* 上传视频
* 上传缩略图
* 输入标题、描述以及标签后发布到区块链上。

#### 步骤提示
![](https://steemitimages.com/DQmXcNtUcVHhNHSNV1EW2LxyuTAqYFbtsPwEavZcuKnhrMb/image.png)

#### 预览以及内容编辑界面
![](https://steemitimages.com/DQmXDWZyoEFhuyT9H5dAweU5vBBkfLDYxPZ9yPuJm3hBAip/image.png)

我使用Firefox测试N多次，都没有发布成功，完成各种步骤后点**`Submit`**没有任何响应。
微信群求助后， @jubi 告知我他用chrome可以发布，换了chrome后果然可行。


# 实现机制

很多第一次用DTube的朋友，总会问：***“哎呀，我明明发DTube的内容，怎么不小心跑STEEMIT上来了？”***

原因就在于DTube使用STEEM区块链保存用户数据，使用IPFS保存视频和图片数据。你在DTube上发布视频，等同于做了两件事：
1) ***将视频和图片等发布到IPFS网络***
2) ***将视频和图片的HASH以及你的描述等信息写到STEEM区块链这个大数据库中***

而步骤2的实现方式就是发一个帖子，在帖子中附加这部分信息。所以不要再好奇为何在DTube发了个视频，却同时在STEEMIT发了个帖子。

DTube的视频和图片的HASH以及描述信息保存在这里
![](https://steemitimages.com/DQmPU9smoGKE93sj2CrTbHPz2s5FXCwWppkqNtXJkd1GbHt/image.png)

即便你在STEEMIT.COM上编辑了帖子的内容，video部分的内容不会有所改变。
![](https://steemitimages.com/DQmTU4An7KXb2PNaf4cHbXPRY2oPm4uwbJ7jEzGkX1axWQf/image.png)
Dtube网站使用这部分内容来显示，以及搜索等，所以如果你想发表后修改DTube上显示的标题和描述文本，至少使用Steemit网站暂时是做不到的。

同样道理，因为DTube上发布的信息，是作为STEEMIT.COM上一个帖子存在的，所以可以被回复被点赞，获得收益等等，和STEEMIT上其它帖子是没有区别的。

# 关于收益分配

DTube的创建者，在DTube发布贴中提到，要支付一部分IPFS存储费用，所以要从每个帖子的收益中拿走25%。25%的10%用于支付存储费用。

假设你发布了一个视频显示收益为100SBD
那么结算时，付给点赞者大致25% 即 25 SBD； 剩余的75 SBD要付给DTube 25%, 即18.75SBD；这18.75有1.875 SBD用于支付存储费用。

也就是说，你最后得到56.25SBD， DTube得到16.875 SBD.

收益分配使用收益分享的方式由STEEM自动结算
![](https://steemitimages.com/DQmNXUHoKiGQuMxzCSLiUZV8FT4rzuUdYoDj5VA1MAyUJ1F/image.png)

# 结论

* ***DTube使用STEEM和IPFS搭建了去中心化的视频平台***
* ***DTube上发布视频即是STEEMIT上发帖***
* ***DTube上发布视频可以获得点赞收益（因为本质上就是发帖）***
* ***DTube通过收益分享，取走了25%的作者收益***

插入的视频无法像youtube一样直接播放，这个无疑是最大的不足了，或许将来STEEMIT页面自嵌一个IPFS播放器？或者将来主流浏览器都附带IPFS播放插件？这些我就不懂了。

----
BTW:  我发的测试视频，挺好玩的，大家可以去看看
https://steemit.com/dtube/@oflyhigh.test/82zr67oq

- - -

This page is synchronized from the post: [测试一下 DTube / Test DTube (Chinese-only version)](https://steemit.com/@oflyhigh/dtube-test-dtube-chinese-only-version)
