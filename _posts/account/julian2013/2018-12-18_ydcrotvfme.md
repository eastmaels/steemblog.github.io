
---
title: "便携式红外接收热敏打印机软件设计"
permlink: ydcrotvfme
catalog: true
toc_nav_num: true
toc: true
date: 2018-12-18 11:19:00
categories:
- steempress
tags:
- steempress
- cn
- cn-curation
- cn-stem
- steemstem
thumbnail: https://ipfs.busy.org/ipfs/QmPuPoV1ZqpxNqpjA3EXrJxErHd9bkJhg1oAq7kmhyj1Je
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


我是一个电子研发工程师。工作以后，做的第一个产品就是便携式红外打印机的软件和部分硬件的设计。

当时刚毕业，经验不算多，那真是没日没夜地查资料，思考，搞了3个月，最终搞出来了，而且出货量一直很稳定，还没出什么问题，可以算作是奇迹了。

今天闲着没事，翻看原来的资料，看到了这份青涩的软件设计报告，觉得挺有意义的，就把它放上区块链吧。
***

# IrPrinter firmware说明
***

![image](https://ipfs.busy.org/ipfs/QmPuPoV1ZqpxNqpjA3EXrJxErHd9bkJhg1oAq7kmhyj1Je)
IrPrinter 工作状态图

IrPrinter工作状态如上图所示，正常上电后IrPrinter处于等待接收数据状态，当收到红外打印数据时，则开始打印数据。IrPrinter使用电池时，如果在十分钟内未收到打印数据，它就会自动关机，以节省电池电能。

![image](https://ipfs.busy.org/ipfs/QmXDbLhNvAgSCsMH8KfQfSV5paESvsL7ZVaexdz6UypgWb)
打印数据流程图
	
IrPrinter firmware 主要由红外通讯解码和打印两个模块组成，如图，它们通过一个缓冲区连接起来工作。要被打印的数据通过红外通讯解码模块还原后，保存在缓冲区中，打印模块从缓冲区读取数据，然后把它们打印出来，这样实现打印红外数据的功能。

## 红外通讯解码模块：

红外通讯解码模块包括IReceived()，Timer_0()，InitRecv()三个函数。

InitRecv()实现红外通讯解码模块的初始化功能。IReceived()和Timer_0()共同实现红外通讯数据帧解码、校验、纠错功能。
![image](https://ipfs.busy.org/ipfs/QmfC3jwjJbFaJCq5mi8tQafaf3hW1jccofVenwTrkoHyQR)

***

## 红外通讯数据帧协议：

红外通讯协议为如上图所示的Redeye协议，每个单元的周期为470us，调制信号的宽度占一个单元的50%。一个完整的数据帧由帧头START、帧尾STOP、纠错数据和数据DATA组成。

帧头为3个有调制信号的单元，帧尾是3个无调制信号的单元，纠错数据和数据都用2个单元来表示每bit，有调制信号的在前无调制信号的在后表示1，无调制信号的在前有调制信号的在后表示0，数据为8bits，纠错数据为4bits的Hamming Code。

经过红外接收硬件电路的解调，上图中黑框表示的调制信号变为高电平信号。

IReceived()为外部中断函数，当接收到的信号发生上升沿跳变时，IReceived()就被调用一次。Timer_0()为定时器0的溢出中断函数。IReceived()、Timer_0()流程如下图（图中的T为数据帧中一个单元的时间）。

当接收红外通讯信号时，外部中断将捕获解调信号每一次上升沿，用定时器T0计算每个上升沿的间隔时间。

从通讯协议可以知道，在正常情况下间隔只能是T、2T、3T（除了停止位）。帧头一定是连续2个为T的间隔，并且在每个帧里是唯一的。

接收数据位时，由间隔和前一位数据值判断当前位的数据值，如果间隔为T且前一位为0，则当前位为1；如果间隔为3T且前一位为1，则当前位为0；如果间隔为2T，则当前位和前一位相同；初始数据位的前一位值为0。所有的帧长度都是固定的30T，因此以通过间隔来求得接收的数据。

在通讯受到干扰的情况下，红外调制脉冲可能丢失或增加，因此加入抗干扰程序来增强通讯的可靠性。

由于数据帧长度是固定的，并且间隔一定是T的倍数，因此可以检测出脉冲丢失或增加。在每个帧里包含4bits的Hamming Code，并且知道出错数据位的位置，所以Hamming Code可以检验错误并且可纠正小于3bits的错误。

![image](https://ipfs.busy.org/ipfs/QmXe9QNRkwBR4WDRjgqUFMzdeCYw2LuDonWxw3Ysi7iEAg)

![image](https://ipfs.busy.org/ipfs/QmZ64XVxh4u7rufj65X3SePYm9wXYVe86QbMdB7tg2JQiX)

## 打印模块

打印模块包含打印文本、图形及出错溢出符号的功能。

Print()为打印子程序。

PrintChar()为打印字符子程序，打印文本，包含Roma和ECMA两种字体。

SetMode()为打印图形及设置控制字子程序，控制字包含加下划线、宽字体、字体切换等。

PrintError()为打印出错符号█ 的子程序，PrintLost()为溢出符号▒ 的子程序。

SelfTest()为打印机自检子程序，检测打印标准字体的正确性，同时还检测电池电量。

PrintHWInit()为打印硬件初始化子程序，
PrintSWInit()为打印软件初始化子程序，在上电时初始化打印机内部I/O端口。

OnPrintInt()为TG信号中断程序，提供打印点阵位置信号。
TestContrast()为打印浓度设置子程序，随电源电压变化自动调整打印浓度设置，保证打印浓度的一致性。

LoadingHead()为打印头复位子程序。
PutChar()为向缓冲区放数据子程序。
GetChar()为从缓冲区读数据子程序。
WaitOnHome()为打印头每行起始定位子程序。
ToLeft()为打印头复位至左端子程序。
ToRight()为打印头复位至右端子程序。
Delay()为打印加热延时子程序，决定打印时的浓度。
CheckDelay()为检测延时子程序。RestartPrinter()为打印机复位子程序。

下面为各个子程序的流程图：
![image](https://ipfs.busy.org/ipfs/QmbqQWHMnba4EaxkbiJoMafK5VbQuAcri5epTtJjyS2gDg)
打印子程序Print()

![image](https://ipfs.busy.org/ipfs/QmXneeUbEZYKW77Mr4mgQ2Q3AW6EZHTAbx71k5Ho2SKtr9)
打印字符子程序PrintChar()

![image](https://ipfs.busy.org/ipfs/QmWLrWzXW6QcL8efU5Uq7Qn8ASEHMcoVUS63poQTndafCi)
打印图形及设置控制字子程序SetMode()

和打印相关还有一些流程图，就不一一贴出来了，打印头的控制相对来说时序要求高，还是挺繁琐的。

## 主程序及其他模块:

主程序主要完成各模块间的调度和协调，上电后对整个打印机进行初始化，当缓冲区收到数据时，调用打印程序模块进行打印，详细流程见图。

打印机还包括键盘模块和I2C接口模块。键盘模块用外部中断来获得按键信号，用定时器1除去按键的抖动信号。I2C接口模块提供与E2PROM芯片24C02的接口，来保存打印浓度值和其他一些要保存的设定值。

![image](https://ipfs.busy.org/ipfs/QmUCMUG8imjtVF9rMvjnRKzPcDPcoU9h4op7qxXxEvWNSr)

![image](https://ipfs.busy.org/ipfs/QmPN6a3PRiPHfQGW85CRVkUY4SgJq5k2DTJ5hr1MeBo6Wn)

当初就是这个项目，让我3个月从实习期转正，然后一直做到现在。电子研发工程师的工作，还是很神奇的。

---

希望喜欢我文字的人，去看看这个吧，说说对我的看法，请我吃星星![](https://steemitimages.com/0x0/http://bit.ly/5credstars)，谢谢啦~
[我的 @ReviewMe 凭证留言板!](https://steemit.com/cn/@julian2013/reviewme-yoursteemitname)

- - -

This page is synchronized from the post: [便携式红外接收热敏打印机软件设计](https://steemit.com/@julian2013/ydcrotvfme)
