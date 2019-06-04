
---
title: '基于Intel Edison自动浇花系统的最终报告/The automatic watering device with Intel Edison'
permlink: intel-edison-the-automatic-watering-device-with-it-intel-edison
catalog: true
toc_nav_num: true
toc: true
date: 2016-12-21 04:41:15
categories:
- diy
tags:
- diy
- cn
- iot
- edison
thumbnail: https://www.steemimg.com/images/2016/09/01/20150826214443_TRFCQ1a388.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://www.steemimg.com/images/2016/09/01/20150826214443_TRFCQ1a388.jpg)
(* 这个图拿自baidu.com )

今天有朋友问我，你的自动浇花系统完成的如何了？
突然想起来，在steemit上挖的这个坑还没有填上。
其实这个小装置应该说已经完成了，但是由于我没有花可浇，所以就没真的去买土壤湿度传感器以及水泵之类的。
其实即便是有花可浇，也不舍得花1500人民币弄个浇花装置吧？那得多奢侈啊，哈哈。

好了，把项目总结文档发一下，算是填坑。

# 系统介绍

基于Intel® Edison的自动浇花系统

自动浇花系统做为作为智能家居的一个很典型的例子，既能解决实际的问题（自动浇花）减轻工作量；又很有学习意义, 其中涉及到传感器数据的读取、以及水泵等装置的控制。

Intel® Edison作为一款低成本片上系统 (SoC) 开发平台，支持发明者、企业家和消费产品设计人员原型构建并开发“物联网”(IoT) 和耐用计算产品。 Edison 模块可与 Edison 分路板或 Arduino Edison 板一起使用。后者可充当 Arduino Rev3 兼容罩的管座。

基于Intel® Edison的自动浇花系统将赋予自动浇花系统更多有意义的特性。

# 系统功能

* 采集温度
* 采集湿度 (通过电位器模拟)
* LCD显示  (温度、湿度、工作状态等）
* 控制水泵 (通过继电器)
* 蜂鸣器报警
* 定时器精准控制时长
* 温湿度数据以及灌溉数据上传至网络

# 系统逻辑

整个系统分两个状态
1）	空闲状态
2）	灌溉状态

空闲状态

* 液晶屏绿色背光
* 液晶屏标题栏交替显示系统标题以及温度
* 液晶屏第二行显示最后获取的湿度数据 并在右侧显示IDLE… 后边的（.）每秒动态变化

灌溉状态

系统按指定时间间隔检测湿度传感器。
当到达指定时间间隔(时间间隔可以通过全局变量设定)
* 上报温湿度以及是否灌溉信息至网络

当湿度低于阈值，则认为土壤干燥，系统进入到灌溉状态
* 液晶屏标题栏显示灌溉中
* 液晶屏第二栏显示湿度数据 以及WORK…后边的（.）每秒动态变化
* 液晶屏背光7彩闪烁
* 蜂鸣器报警（可以通过全局变量设定）

>为了防止水量溢出，采取多次少量的方案执行灌溉
灌溉持续时间5秒（值可以通过全局变量设定）
到达时间后，重新检测湿度，如果依旧干燥，则继续灌溉（存在风险，湿度传感器失效则灌溉一直持续，可以修改成30分钟只灌溉一次，滴灌效果）

# 主要技术

* 土壤湿度传感器读取

>土壤湿度传感器通过模拟口连接Edison
通过anologRead读取
详见代码

* 温度传感器读取

>Edison 使用的是NTC加运放的方式实现的温度传感器
通过模拟口连接
通过anologRead读取
并通过B值等进行计算获取
详见代码

* 蜂鸣器控制

>蜂鸣器使用数字口连接，高电平发声音，低电平关闭。
详见代码

* 继电器控制

>继电器使用数字口连接，高电平联通，低电平断开。
详见代码

* 定时器使用

>定时器使用Edison自带的定时器库
但是这个库有些BUG，无法定时较长时间。
所以对这个进行了封装和加强，使其能应用于更长时间控制。
详见代码。

* RGB背光LCD使用

>RGB背光LCD的使用基于西递的函数库
RGB背光LCD使用I2C链接。
西递的函数库部分功能实现的不够优雅，比如设置背光，
对此进行了修改
使其更加方便的应用于此项目。
详见代码。

* WIFI链接

>Edison自带WIFI功能，以及WIFI函数库
我们对此进行了一些小改动，并适度封装。
详见代码。

* 网络数据发送

>温湿度以及是否灌溉信息定时通过HTTP协议上报至网络。
GET请求格式大致如下：
`/water.php?h=222&t=28.2&s=1`
其中:
H为湿度
T为温度
s为是否执行灌溉
详见代码。

* 服务器端

>服务器端应该实现的功能包括但不限于：
接收并存储数据到数据库
提供展示页面以表格或者其它直观的方式展示数据。

>本例中我使用BANAPI M2+ 自建了LMAP网站环境。
使用PHP接收数据。

>因为服务器端属于另外的范畴，本例不做深入讨论。
服务器端最简单的示例代码如下：
```
<?php
printf("Humidity:\t%.2f\n", $_GET['h']);
printf("Temperature:\t%.2f\n", $_GET['t']);
$status = $_GET['s']==0?"False":"True";
printf("Watered:\t%s\n", $status);
?>
```
主要作用为将Edison发送的数据以一定格式显示。
可用于调试Edison发送网络数据部分。

# 主要模块

除了上述控制系统外，我们还需要一些模块来完成实际自动浇花应用。
但是因为这些模块比较简单，所以只在控制系统中模拟。

* 土壤湿度传感器

>土壤湿度传感器，使用起来非常简单，上述控制系统中我们使用电位器模拟，实际接线我们和电位器一样接线即可，用其中的AO口（模拟输出）
程序无需调整。

* 水泵，软管/水箱/供电

>实际浇灌需要水泵进行浇水。
水泵部分也比较简单，我们控制系统中用LED模拟，实际上与LED也没有什么区别。

>5V水泵，将水泵浸入水箱，用软管连接出水口和花盆土壤。
5V供电，给电则水泵开启，实施灌溉。断电停止。

>水箱无需特意购买，用4L的农夫山泉或者其它类似的瓶子即可。

>因为Edison IO口推电流比较弱，所以可以用独立电源，找个5V2A以上的电源即可。
连接方式和我们控制系统的连线没区别，唯一供电部分换成独立电源即可。

* 花

>最后我还缺一盆花。


好吧，就这样吧，坑填上啦。
再也不怕小伙伴们问我进度啦：）

****
之前的相关文章：
* [What will you make? 秀一下Intel Edison套件，计划做一个自动浇花装置](https://steemit.com/cn/@oflyhigh/what-will-you-make-intel-edison)
* [Say Hello to steemians from my Intel Edison device, and the progress of my automatic watering device.](https://steemit.com/life/@oflyhigh/say-hello-to-steemians-from-my-intel-edison-device-and-the-progress-of-my-automatic-watering-device)
* [用Intel Edison向大家打招呼, 以及介绍我自动浇花系统的进展](https://steemit.com/cn/@oflyhigh/intel-edison)
* [LM358不是LM35](https://steemit.com/cn/@oflyhigh/lm358-lm35)

- - -

This page is synchronized from the post: [基于Intel Edison自动浇花系统的最终报告/The automatic watering device with Intel Edison](https://steemit.com/@oflyhigh/intel-edison-the-automatic-watering-device-with-it-intel-edison)
