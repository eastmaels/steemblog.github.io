
---
title: '让Witness 列表手机友好(mobile friendly)'
permlink: witness-mobile-friendly
catalog: true
toc_nav_num: true
toc: true
date: 2018-10-26 13:21:42
categories:
- design
tags:
- design
- css
- html
- ui
- cn
thumbnail: https://cdn.steemitimages.com/DQmQLX31R7rPbp51RNreDzrjQEKegY4MLbC9HjdAovGA3KM/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


今天在微信群里发我的[见证人列表工具](https://www.eztk.net/tools/my_witnesses.php) @justyy 提出宝贵意见： ***手机不友好***。其实对我而言，功能好用就行了，啥手机友好不友好的，手机不友好不是还有电脑嘛。

![](https://cdn.steemitimages.com/DQmQLX31R7rPbp51RNreDzrjQEKegY4MLbC9HjdAovGA3KM/image.png)

# 响应式表格
其实在他提出意见之前，我已经解决一项我觉得在手机上访问最大的障碍，就是手机浏览器访问表格显示不完整。也就是说表格太宽了，内容只显示左侧的部分内容，右侧的全丢掉了，是可忍熟不可忍！

经我在百度上一通GOOGLE之后，我发现了一个简单的解决方案，就是让表格滚！（哦，应该说让表格可以滚动）。好像用术语讲叫：***响应式表格***
>.table-responsive 类用于创建响应式表格：在屏幕宽度小于 992px 时会创建水平滚动条，如果可视区域宽度大于 992px 则显示不同效果（没有滚动条）

实现起来也超级简单啦，把表格部分代码用下列代码包裹起来就可以了：
>`<div class="table-responsive">`
`</div>`

# 手机友好

接下来就是解决手机友好的问题啦。原本以为报了4个问题，改起来一定很麻烦，但是按第一个提示修改以后，一下子全解决啦。

也就是在HTML代码`<head></head>`部分添加如下代码：
>`<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">`

至于这玩意到底起啥作用，我就懒得研究啦，感兴趣的可以参考:[Using the viewport meta tag to control layout on mobile browsers](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag)不过在测试一下，果然都通过了，另外在手机上试了一下，感觉上是舒服了好多，也不知道是不是心里作用呢。

![](https://cdn.steemitimages.com/DQmXrB78WSAHGLwPt5diUw4UAumTtTg538TQ9bmaMpsprsq/image.png)

# 其它

本来已经改好了，但是手欠又改了几个地方，然后，测试有几项通不过了，不过还好依然提示：***This page is mobile friendly***，我试用了一下和改动前没啥区别啊，用着效果一样一样的。

水平有限，又懒，只好如此喽。

# 相关链接

* https://www.eztk.net/tools/my_witnesses.php
* https://www.bing.com/webmaster/tools/mobile-friendliness
* [Using the viewport meta tag to control layout on mobile browsers](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag)

- - -

This page is synchronized from the post: [让Witness 列表手机友好(mobile friendly)](https://steemit.com/@oflyhigh/witness-mobile-friendly)
