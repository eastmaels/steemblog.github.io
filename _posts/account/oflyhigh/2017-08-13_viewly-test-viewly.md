
---
title: '测试一下Viewly / Test Viewly'
permlink: viewly-test-viewly
catalog: true
toc_nav_num: true
toc: true
date: 2017-08-13 10:50:51
categories:
- cn
tags:
- cn
- cn-programing
- viewly
- vedio
thumbnail: https://steemitimages.com/DQmaWf85CTobyLf5qeNovqU5GBS2SRMVRyc6fZTGoXHBsEM/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


昨天，继 @heimindanger  发布***DTube***之后， @furion 马上发布了***Viewly*** 的最新进展，相关详情见：

* [Introducing DTube: a decentralized video platform using STEEM and IPFS](https://steemit.com/video/@heimindanger/introducing-dtube-a-decentralized-video-platform-using-steem-and-ipfs)
* [You can now publish videos to your own Steemit blog](https://steemit.com/viewly/@furion/you-can-now-publish-videos-to-your-own-steemit-blog)

这种百花齐放百家争鸣的现象非常好，会极大促进STEEM区块链的发展，更多功能，更多精彩。这两个平台都是基于STEEM以及IPFS，我粗略了解一下，可谓各有千秋吧。两个平台的站点：
* https://dtube.video/
* https://upload.view.ly/

今天我测试了一下使用Viewly.

----

# 使用流程

#### 上传界面非常简洁

![](https://steemitimages.com/DQmaWf85CTobyLf5qeNovqU5GBS2SRMVRyc6fZTGoXHBsEM/image.png)

----

#### 上传很迅速

![](https://steemitimages.com/DQma4pNdB4ENETGVNTYQeshd79KTT5jLJq14WT6HjwoZr3H/image.png)

----

#### 上传完成
![](https://steemitimages.com/DQmYZV6PrZ7A2kCi5yAxejncmbQeEVqTGNgSs46TTWmYoWe/image.png)
发布需要STEEM用户账户和POSTING 私钥

----

#### 发布成功

![](https://steemitimages.com/DQmSViJkR5v5pVn1NSJtAdtyNaYaYL2xewA7qBGN8ADjDB2/image.png)
来看一下帖子，有预览图片和正常的文字
点击预览图片可以进入到view.ly的对应播放页面

----

#### 播放试试

![](https://steemitimages.com/DQmVeP35A63cFAHDCkPHpZbbTbfMJWVMiKbyG3fXcxUSmhS/image.png)

----

# 实现机制

略微探索了一下它是如何使用STEEM区块链保存数据的
![](https://steemitimages.com/DQmT7eZu5jcvYcZHMmqXkc48DA6hS7r6MMVANWgzjFTMroy/image.png)
就是将一些数据存储在json_metadata区域，播放的时候再来steem区块链中读回这部分数据

至于IPFS部分，我就一点也不懂啦。

# 结论

从上传视频到播放，整个流程都很顺畅。
简洁的风格和STEEMIT很搭
不足之处就是***没法在STEEMIT上直接播放***，如果能像Youtube的视频能在STEEMIT文章中直接插入和播放就完美啦。

至于Comments没有同步过去之类的小问题，不算啥问题，估计解决起来是相当简单的啦。


附，我上传的测试视频
费玉清莫文蔚合唱《当你老了》，旋律动人，歌词感人。
https://steemit.com/cn/@oflyhigh.test/5659--2017-08-13--test-viewly-dang-ni-lao-liao

- - -

This page is synchronized from the post: [测试一下Viewly / Test Viewly](https://steemit.com/@oflyhigh/viewly-test-viewly)
