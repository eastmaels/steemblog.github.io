
---
title: '机器人头像、Jdenticon、Identicon'
permlink: jdenticon-identicon
catalog: true
toc_nav_num: true
toc: true
date: 2018-11-04 01:50:51
categories:
- jdenticon
tags:
- jdenticon
- identicon
- php
- steemd
- cn
thumbnail: https://cdn.steemitimages.com/DQmeLcib1PCscVpq5Eo1Hvesrb8LkY7MGihoYbHEcEaAFZy/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


想必早期用过[steemd.com](https://steemd.com)会对steemd里边的机器人头像印象深刻，每个ID都有不同的头像，有的看起来善良，有的看起来邪恶，各有特色但是都挺招人喜欢的。

![](https://cdn.steemitimages.com/DQmeLcib1PCscVpq5Eo1Hvesrb8LkY7MGihoYbHEcEaAFZy/image.png)

但是最近[steemd.com](https://steemd.com)改版后，机器人头像都消失了，变成了一组奇形怪状的图片。比如说我的以及 @deanliu 刘美女的：
>![](https://cdn.steemitimages.com/DQmdaCffdB1Dkws6BtKdaqh9pKqpgJ2rcWzMLyQRDGdARSd/image.png) ![](https://cdn.steemitimages.com/DQmSqm6Su8RjAbb2mWpg1YXiWSpGsY2Mws2Pn8G5zTMmBFn/image.png)

当然了，谁的头像更好看一些那是一目了然的事情。

其实如果你使用过BTS(bitshares)的UI，那么对这组图就不会觉得陌生了。曾经给对方转账时，会显示对方的头像图标，就是和上边的图标一样的。(我现在用的bitshares UI不显示头像了，可能版本太老）

因为不同ID的图像是唯一的，所以可以用来初步判断用户，比如我转账给 @deanliu，但是显示的图标不是![](https://cdn.steemitimages.com/DQmbQoDgAFRDYXfYAvRG6BnF91oqdLccD13Yvi5pgn1PSEg/image.png)，就有可能是我把deanliu的ID拼写错误了。

# JDENTICON

那么steemd以及bitshares中如何生成这组图标呢？我研究了一下，原来它们都是用了一个叫做[JDENTICON](https://jdenticon.com)的库，介绍中是这么写的：

>Open source library for generating identicons.

而关于Identicon，Wikipedia的介绍为：
>An Identicon is a visual representation of a hash value, usually of an IP address, that serves to identify a user of a computer system as a form of avatar while protecting the users' privacy.

至于为什么能生成独一无二的图标呢？简单来讲就是通过传入ID的hash值，来决定每个位置像素的开关以及像素的颜色。当然了，实际上要生成独一无二且好看的图像，还是很复杂的，我就不去研究啦。

# 示例代码

下面我尝试生成一下我和@deanliu 美女的头像，首先在页面中插入如下代码：
>`<script src="https://cdn.jsdelivr.net/npm/jdenticon@2.1.0" async>`
`</script>`

然后在PHP页面中插入类似如下代码：
>`$user1= hash('sha256', "oflyhigh");`
`$user2 = hash('sha256', "deanliu");`
`echo "<svg data-jdenticon-hash=\"{$user1}\" width=\"120\" height=\"120\"></svg>";`
`echo "<svg data-jdenticon-hash=\"{$user2}\" width=\"120\" height=\"120\"></svg>";`

执行后，效果如下：
![](https://cdn.steemitimages.com/DQmb1LWSPy2Ag6biQ9gxtdW7CRQbek7tZcNarLjTRKZvEZ4/image.png)

是不是很好玩？可以访问https://jdenticon.com/#quick-start 获得更多示例，我就不再赘述啦。

# 相关链接

* [JDENTICON](https://jdenticon.com)

- - -

This page is synchronized from the post: [机器人头像、Jdenticon、Identicon](https://steemit.com/@oflyhigh/jdenticon-identicon)
