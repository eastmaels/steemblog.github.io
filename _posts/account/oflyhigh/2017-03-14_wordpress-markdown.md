
---
title: 'Wordpress Markdown 发帖方式的一点探究'
permlink: wordpress-markdown
catalog: true
toc_nav_num: true
toc: true
date: 2017-03-14 13:06:15
categories:
- cn
tags:
- cn
- markdown
- wordpress
- plugin
- cn-programming
thumbnail: https://steemitimages.com/DQmT7vrKfi2CJD68ZbxAbzwWZxJDeFJppki6FrYr1df78cU/Capture.PNG
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Steemit的`Markdown`发帖方式使用的极其顺手, 于是突然想能不能让Wordpress也支持`Markdown`发帖的方式呢？

# Wordpress 本身的 Markdown 支持

Wordpress 新版本也支持一些Markdown 语法
但是支持的不多，也支持的不好，期待后续版本能加强吧

# Jetpack插件

搜索了一下，据说目前最好的方式是使用Jetpack插件，本地安装测试了一下，结果使用的时候非得要Wordpress安装在公网上，想想不懂一个插件你为何非得要求我的Wordpress安装在哪里，遂卸载之。
![Capture.PNG](https://steemitimages.com/DQmT7vrKfi2CJD68ZbxAbzwWZxJDeFJppki6FrYr1df78cU/Capture.PNG)

# JP Markdown
然后又听到了JP Markdown，据说是Jetpack插件的Markdown部分，听起来似乎不错。
装上之后，不知道咋用，不知道是插件太老或者我的wordpress版本太新，抑或是我太笨的缘故？

# WP-Markdown
这个安装和设置都很简单
![Capture.PNG](https://steemitimages.com/DQmXA67B5ePER3TPVVFT9CEEMiYhUa6cyDCzCFtW65UTF2s/Capture.PNG)
用了一下，其它都很很好
但是竟然不支持表格？（也许是我没有设置好）这如何能忍？？

# PrettyPress
试用了一下，差强人意吧
![Capture.PNG](https://steemitimages.com/DQmRxmnxxuLxkabpAQDdiVmDP7xr9Xdi36MRyAmHTv8qzR2/Capture.PNG)

# 结论

我期待的是功能，存储到wordpress数据库中的文本就是Markdown的文本，而不是将Markdown转换成HTML存储。在显示的时候再解析成对应的HTML。不清楚这几款插件到底是用啥方式处理的，貌似不是我要的方式，懒得深入研究啦。

还是自己水平太差，不然就可以自己写或者自己改写插件了。

# 参考文章：

* [使用Markdown来让你的文章更易于阅读、更美观](https://steemit.com/cn/@oflyhigh/markdown)

- - -

This page is synchronized from the post: [Wordpress Markdown 发帖方式的一点探究](https://steemit.com/@oflyhigh/wordpress-markdown)
