
---
title: 'STEM with Arduino(1)：Arduino介绍、Arduino环境下载&安装、blink示例'
permlink: arduino-arduino-and-blink
catalog: true
toc_nav_num: true
toc: true
date: 2018-12-18 06:50:09
categories:
- cn-stem
tags:
- cn-stem
- steemstem
- arduino
- iot
- cn
thumbnail: https://cdn.steemitimages.com/DQmfQV2HGJcghuSLtZrRs1CCstT5n4Ko3rHWZeUKXLKDGfJ/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


# Arduino介绍

![](https://cdn.steemitimages.com/DQmfQV2HGJcghuSLtZrRs1CCstT5n4Ko3rHWZeUKXLKDGfJ/image.png)

在介绍Arduino环境安装之前，我先简单介绍一下Arduino，官网上的定义如下：

>Arduino is an open-source electronics platform based on easy-to-use hardware and software. Arduino boards are able to read inputs - light on a sensor, a finger on a button, or a Twitter message - and turn it into an output - activating a motor, turning on an LED, publishing something online. 

简单翻译过来是Arduino是一款基于易用的硬件和软件的开源电子平台。Arduino板可以读取传感器上的光照、按键上的手指、Twitter消息等输入，并将其转换成输出用于激活马达、打开LED、在线发布内容等。

我从2013年第一次听说Arduino就马上被其所深深吸引，为什么呢？因为2001年前后，我曾经和几个朋友创业搞单片机(51)开发，那时候我主要负责单片机上的软件，那时候我们做一款产品，首先要搞硬件的朋友画电路板、再去制板、回来后再焊接元器件，然后在开发环境中写程序编译成bin或者hex文件，再通过编程器下载到单片机中，整个过程特别繁琐。

2006年以后，我又参与了一段时间硬件相关的开发，但是依旧未能摆脱上述模式。我想做一些软件方面的测试，必须等做硬件的同事提供支持。虽然当时市面上也有一些通用的开发板（原型平台），但是其实并不好用。

其实早在2005年，Arduino就被Massimo Banzi & David Cuartielles一起设计出来，可惜那时候它并不完善也并未流行。2013年我在玩树莓派的时候听说了Arduino，了解之后发现，它就是我一直想要的东西啊，***有了Arduino之后，开发硬件作品就和写软件程序一样简单，受限的只是你的想象力和创意***。

# Arduino环境下载

说了这么多，也不如亲自上手操作一下，之前我们说过***Arduino是一款基于易用的硬件和软件的开源电子平台***，其中硬件有好多款，比较常用的有Arduino Uno R3、Arduino Mini、Arduino Nano等，适用于不同的场景，这里暂不做过多介绍。

而软件，一般就是就是指的Arduino IDE ，现在还有一个Arduino Web Editor，但是还是觉得直接用Arduino IDE舒服。除此之外，还有一些适合小朋友玩的拖拽图形编程工具，这个我们就不讨论啦。Arduino IDE中默认包含一些基本的库，如果你需要一些特殊的板卡或者模块，那么需要安装额外的库，这些我们以后再具体介绍，今天先来介绍Arduino IDE的安装。

点击这个[链接](https://www.arduino.cc/en/Main/Software)进入Arduino Software界面，撰写本文时，最新版本为1.8.8
>![](https://cdn.steemitimages.com/DQmZU3rjDmVGXvtHP5LMCWuszWcevYpM8Vu12NdQhu4WeqC/image.png)

选择适合你的软件，我选择的是：***Windows Installer, for Windows XP and up***，点击后会出个捐助页面
>![](https://cdn.steemitimages.com/DQmZAwMsHk5UC1hgDbnhBtb8Hi51U8nxJeVYNBuEdqBEBkB/image.png)

如果暂时不想捐助的话，直接点击***JUSTDOWNLOAD***，就会自动弹出下载界面，选择***保存文件***即可。
>![](https://cdn.steemitimages.com/DQmdCjCyLW1Q5G7vNKwtpqKN1rWKsmgy1gNBNbujpMr46hZ/image.png)

# Arduino环境安装

下载完成后，就可以安装啦，基本上如果你没啥特别要求，都用默认就好啦。

>![](https://cdn.steemitimages.com/DQmVSLAVAsupbnXR1EMoy9kjqSZQ48wuVnycGk2Wfz5Xh49/image.png)

>![](https://cdn.steemitimages.com/DQmRchKUqXysL6yfGHA5Ny5XNDgNr1TYtvpkQvbQV1Zjqq1/image.png)

>![](https://cdn.steemitimages.com/DQmb5AhaXFATwFGGWrkwQpejfFQCNRVdZHsLcK4eP4tFdBe/image.png)

安装进行中
>![](https://cdn.steemitimages.com/DQmPvrNo5ozEfEpN173EpVTAMFgn8wLUEYFzVcPN8D8JDH3/image.png)

安装完成，我们关闭此窗口即可。
>![](https://cdn.steemitimages.com/DQmS3ALeknN2rTaHUg5H9arQtbXgRaz9vfkQpJ7uaqmJKBk/image.png)

这时我们可以看到开始菜单和桌面上都多了Arduino的图标和链接。
>![](https://cdn.steemitimages.com/DQmRG1WCEg6CCCWJXDdU86g59g6Jb9Q7hqZdWinx9h3z77A/image.png)

# blink示例

首先我们启动Arduino IDE，这个闪屏是不是非常有格调？
>![](https://cdn.steemitimages.com/DQmS36gPPaW5sJ4mN7m2A4nhh3gwDiaYUJBJv1bvrpxx3iD/image.png)

打开后发现界面非常简洁
>![](https://cdn.steemitimages.com/DQmSPSpzMSQxSzBMb2kgFgaVex3y8ZtUbw2oVz3GQs5XGSC/image.png)

尽管IDE底下写着Arduino/Genuino on COM3，但是实际上我并未连接任何硬件设备呢，连上我的UNO试试看，分配的端口还是COM3。
![](https://cdn.steemitimages.com/DQmQ6hLKMs9Dcp2seGEPoremxyU9qzPN3e5eXU2AHo6dEZm/image.png)

在***`File->Examples->Basics`***中点击***`Blink`***，打开***`Blink`***示例，尽管代码看起来很多，其实大部分是注释，核心代码如下：

>![](https://cdn.steemitimages.com/DQmP6qgzktVL2dMBVpqfZaTnDDSFhBNsnxaW7djNv4p17LY/image.png)

是不是看起来很熟悉，没错其实就是***`C语言`***。找不到我们熟悉main()函数，这并没有关系，其实Arduino把运行逻辑分成两大部分，一部分是***`初始设置/setup`***，一部分是***`主循环/loop`***。

上述代码的意思就是：
* 在初始设置中将LED_BUILTIN设置为输出模式
（LED_BUILTIN就是板载LED，在UNO R3中对应数字管脚13）
* 在主循环中交替给板载LED高低电平，并持续1000毫秒

程序要达成的效果就是板载LED闪啊闪啊，亮一秒暗一秒，像眨眼睛一样闪烁，这就是blink喽。


直接点击***上传按钮，会自动完成编译、校验、上传全套流程***（不嫌麻烦也可以使用菜单）
>![](https://cdn.steemitimages.com/DQmec1C2fSxh3BEwbTDP6mZM1d7C8wqfSyLSiPvQtMf6kYJ/image.png)

程序上传成功后会自动运行，效果如下（GIF转的效果不太好）
>![giphy.gif](https://cdn.steemitimages.com/DQmTzZEtuR3z232ZWJfSfPpHq6VWvDGmKLcK33nmShfSU5d/giphy.gif)

除了使用板载LED以外，还可以在数字口13以及GND之间串接LED以及一个220欧姆的电阻，与直接用板载LED效果是一样的，接线图如下：
>![](https://cdn.steemitimages.com/DQmXwZyPSputJL4xE82bR8XEKYRLS8gg7UnA7tm5hzQ14Hs/image.png)
（图源：https://www.arduino.cc/en/Tutorial/Blink）

可惜我的电阻和面包板、连接线都不知道哪里去了，就不做示范啦。

好了，今天就先介绍到这里，Arduino非常好玩，以后我会慢慢给大家介绍并顺带科普一些科学知识。

# 参考链接

* https://www.arduino.cc/en/Guide/Introduction
* https://www.arduino.cc/en/Main/Software
* http://www.arduino.cc/en/Tutorial/Blink

- - -

This page is synchronized from the post: [STEM with Arduino(1)：Arduino介绍、Arduino环境下载&安装、blink示例](https://steemit.com/@oflyhigh/arduino-arduino-and-blink)
