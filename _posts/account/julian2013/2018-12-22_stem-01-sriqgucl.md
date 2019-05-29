
---
title: "我们身边的STEM 01：单片机及其堆栈设计小窍门"
permlink: stem-01-sriqgucl
catalog: true
toc_nav_num: true
toc: true
date: 2018-12-22 01:13:30
categories:
- cn-stem
tags:
- cn-stem
- steemstem
- cn
- busy
- cn-reader
- partiko
thumbnail: https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmbEcxE6ZEUCyZGErDZRMMRBxkyvv2VTh3mtKrRd7PLqiC
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


我们身边很多东西都有用到单片机，比如电视，洗衣机，手机等等。这算是相对高大上的，还有一些平时不起眼的，比如遥控器，闹钟，定时器，仪器仪表等，也都用到了单片机。

先给大家介绍一下什么是单片机。按照百度百科的介绍：

> 单片机（Microcontrollers）是一种集成电路芯片，是采用超大规模集成电路技术把具有数据处理能力的中央处理器CPU、随机存储器RAM、只读存储器ROM、多种I/O口和中断系统、定时器/计数器等功能（可能还包括显示驱动电路、脉宽调制电路、模拟多路转换器、A/D转换器等电路）集成到一块硅片上构成的一个小而完善的微型计算机系统，在工业控制领域广泛应用。

简单来说，你可以认为单片机就是一台简化版的电脑。大家买电脑的时候，会要求更快的CPU，更大的内存（RAM），因为那样不会卡。快的CPU大家都好理解，为什么内存也要大呢？

内存是计算机系统里面的重要部件之一，它是和CPU进行沟通的桥梁。我们所有的程序都是安装在硬盘中，但是运行的时候，需要将程序调入内存，暂时存放CPU运算所需和所得的数据，再与硬盘等外部处理器交换数据。

内存小的话，就算CPU再快，但是桥梁不顺，电脑在使用的时候就会变慢，这对于用户，直观的感觉就是卡。

**堆栈是在内存中再开辟出一块区域，用于存取一些运行过程中重要的变量。如果堆栈出错，那么程序运行一定会奔溃。所以计算机编程的时候，堆栈的保护是一件很重要的事情。**

而单片机因为资源有限，不像现在电脑动辄十几G，几十G的内存，像很多便宜一点的单片机，只有几百个字节的RAM。如果电脑是一头大象，那么和PC相比，单片机就像一粒灰尘：
1G = 1024K,
1K = 1024byte，
也就是说，1G内存，就有1024*1024 byte = 1048576 bytes，而下面我举的例子，Texas Instruments的MSP430系列的单片机MSP430F135，它的RAM只有512 bytes。

**要说单片机编程的项目中，最怕的是什么？恐怕几乎所有的软件工程师都会异口同声地说：**

> 天不怕地不怕，就怕TNND堆栈溢出！！！

确实是这样。

因为其他人为写出来的bug，重现性比较确定，那么工程师在捉虫的时候相对容易找出；而如果是堆栈发生错误，比如堆栈溢出，那么最终产品的表现那可是千奇百怪五花八门，每一次都不一样，程序调试难度很大。

那么，有没有什么简单的方法得知单片机编程时，堆栈够不够用呢？

大神告诉你，其实是有的。

在若干年前，我曾经写过一篇关于MSP430的IAR调试技巧，当时拯救过无数的单片机应用业内的痴男怨女。

只是，那时文章都发在传统的bbs上，即使被一些大网站转载，往往也丢失了图。像我现在搜索当初的文档，就只有一点点文字，以及我的网名。

所以，我今天重新整理了一下，把这个小技巧po上区块链，看看能保存多久：

# iar430中查看ram使用情况以及如何判断堆栈是否溢出

iar430中定义的变量是从ram的起始地址向上，而堆栈是从ram的终止地址向下。

以msp430f135为例，它是512bytes的ram，起始地址为200h，终止地址为3ffh，所以它的变量是从200h开始，向3ffh方向存放，而堆栈是从3ffh开始，向200h方向压栈。

当变量存储空间和堆栈最大占用空间在中间相遇时，就发生了堆栈溢出。

下面就详细介绍如何查看ram使用情况：
1   当然是烧程序到目标板里呀

2   选择window/memory，打开memory窗口

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmbEcxE6ZEUCyZGErDZRMMRBxkyvv2VTh3mtKrRd7PLqiC)

3   从ram的起始地址200h开始，输入200，再回车
4  选中200h～3ffh区域（135为512ram），右键选择memory fill……
5  在memory fill中的start写入：0x200,length写:512,value填入FF（也可填入其他值）,被选中的区域全填充FF

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmcHVGTBeHd9mRKDBte1wgZTGx5VRqaksGtw17o4zt5xV6)

可以看到，整个RAM区域，全部都被赋值0xFF：

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmasfvjWkuxCdJBinwkXBWgZsDFnPsV7tLSKxY9njT8sPN)

6  运行程序，跑一遍设计的所有功能，再停止cspy，看看memory窗口

7  如果再填充的区域内已经没有FF存在，就说明已经发生堆栈溢出或是会有溢出的危险（ram刚好够用）。最好保留一定余量的ram不被改变，以防发生溢出

![](https://steemitimages.com/0x0/https://ipfs.busy.org/ipfs/QmSQAU7esaSQraQKdvuzuqGQVowynp8nJBjcxXVahmzj2m)

我们可以看出，在设计对象完整地跑一遍所有功能后，RAM区域还有很多byte没有被改变，还是0xFF，那么针对这个设计而言，堆栈留出的余量是足够的，不会有问题。

如果运行一段时间后，发现几乎没有多余的RAM空闲，那么，要么修改程序，降低复杂程度，减小RAM占用率；要么重新选取RAM更大的MCU，这样才能设计出可靠的产品。

Posted using [Partiko iOS](https://steemit.com/@partiko-ios)

- - -

This page is synchronized from the post: [我们身边的STEM 01：单片机及其堆栈设计小窍门](https://steemit.com/@julian2013/stem-01-sriqgucl)
