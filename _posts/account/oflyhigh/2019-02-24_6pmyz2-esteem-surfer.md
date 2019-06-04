
---
title: '如何在eSteem Surfer中插入第三方图床的图片？'
permlink: 6pmyz2-esteem-surfer
catalog: true
toc_nav_num: true
toc: true
date: 2019-02-24 10:28:18
categories:
- cn
tags:
- cn
- esteem
- markdown
- image
- howto
thumbnail: http://steemit.serviceuptime.net/images/geyou_20160729.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


有朋友问我steemit.com上不去还不会科学上网，可咋办？于是我推荐她用ESteem Surfer。但是eSteem Surfer现在有个小问题，就是没法上传图片。

朋友又问我上传图片的事情怎么解决，我告诉她找个第三方图床，然后复制链接到文章中就可以了，大部分而言这样做是没有问题的，但是如果图床生成的图片带一些乱七八糟的参数，那么图片就会显示不正常。

那么情况又如何解决呢？其实很简单，就是用MarkDown强制声明这是图片即可，声明的形式为(***将其中url替换为图片链接就可以了***）：
>`![](url)`

举例说，我们有一副图片，地址为
>`http://steemit.serviceuptime.net/images/geyou_20160729.jpg`

那么我们只需在文章正文中这样插入就可以了
>`![](http://steemit.serviceuptime.net/images/geyou_20160729.jpg)`

让我试一下
![](http://steemit.serviceuptime.net/images/geyou_20160729.jpg)

果然出来了，这是MarkDown的语法，所以在steemit.com或者eSteem Surfer或者其它客户端都是通用的。

其实如何插图的文章，我3年前就写过了，没想到三年后还要写如何插图，哎。

# 相关链接
* [[howto] Guide to insert pictures in the steemit articles. (The most popular picture of China in this summer)](https://steemit.com/cn/@oflyhigh/howto-guide-to-insert-pictures-in-the-steemit-articles-the-most-popular-picture-of-china-in-this-summer)
* [使用Markdown来让你的文章更易于阅读、更美观](https://steemit.com/cn/@oflyhigh/markdown)

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>

- - -

This page is synchronized from the post: [如何在eSteem Surfer中插入第三方图床的图片？](https://steemit.com/@oflyhigh/6pmyz2-esteem-surfer)
