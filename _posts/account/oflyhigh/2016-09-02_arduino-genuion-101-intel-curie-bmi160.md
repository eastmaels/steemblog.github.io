
---
title: '【Arduino/Genuion 101 亲密接触】 查看芯片温度/ Intel Curie, BMI160'
permlink: arduino-genuion-101-intel-curie-bmi160
catalog: true
toc_nav_num: true
toc: true
date: 2016-09-02 02:13:42
categories:
- cn
tags:
- cn
- iot
- arduino
- curie
- bmi160
thumbnail: http://www.intel.com/content/dam/www/public/us/en/images/maker/rwd/arduino-front-angle-rwd.jpg.rendition.intel.web.1072.603.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![Arduino 101](http://www.intel.com/content/dam/www/public/us/en/images/maker/rwd/arduino-front-angle-rwd.jpg.rendition.intel.web.1072.603.jpg)
# 说明
我会陆续放一些Arduino、Raspberry Pi、Banana Pi、Curie、Edison、Mbed、ESP8266等开源硬件以及IOT相关的内容。

有些是我新写的，有些是我以前写的，希望在steemit上找到同好。

我会将其统一放置到 #iot 分类下。

# 简介

阅读Arduino/Genuion 101的库资料，偶然发现Intel Curie中竟然内置了温度传感器。
温度传感器隶属6轴加速度计/陀螺仪（BMI160），它包含在Intel Curie核心中。
本文介绍如何读取Intel Curie内置温度传感器获取芯片的温度。并在使用过程中发现官网手册中的一处失误，并予以纠正。


# 温度传感器资料

![BMI160](http://forum.godpub.com/data/attachment/forum/201604/12/130744z9ucy28su8eve8uu.png)

Arduino/Genuion 101  BMI160代码中读取温度的片段
```
/** Get current internal temperature as a signed 16-bit integer.
*  The resolution is typically 1/2^9 degrees Celcius per LSB, at an
*  offset of 23 degrees Celcius.  For example:
*
* <pre>
* Value    | Temperature
* ---------+----------------
* 0x7FFF   | 87 - 1/2^9 degrees C
* ...      | ...
* 0x0000   | 23 degrees C
* ...      | ...
* 0x8001   | -41 + 1/2^9 degrees C
* 0x8000   | Invalid
*
* @return Temperature reading in 16-bit 2's complement format
* @see BMI160_RA_TEMP_L
*/
int16_t BMI160Class::getTemperature() {
    uint8_t buffer[2];
    buffer[0] = BMI160_RA_TEMP_L;
    serial_buffer_transfer(buffer, 1, 2);
    return (((int16_t)buffer[1]) << 8) | buffer[0];
}
```

# Arduino官网的函数手册
在Intel CurieIMU 库中，对上述函数进行了简单的封装

```
    int CurieIMUClass::readTemperature()
    {
        return getTemperature();
    }
```

Arduino站上关于此函数链接：
http://www.arduino.cc/en/Reference/CurieIMUreadTemperature

所以我们不必去了解寄存器的信息，直接调用上述函数就可以得到原始的温度信息。
因为读出的是原始的温度数据，我们需要对其进行转换，才能变成我们所熟悉的摄氏温度，转换公式如下：

    `Celsius=(raw/32767.0)+23 `

(***注***：来自上述链接函数手册，这里有个巨大的坑！）

# 读取芯片温度的程序

根据上述信息，我们可以实现一个简单的程序通过串口读取芯片的温度。
代码如下：
```
    // http://forum.godpub.com/thread-118-1-1.html
    #include "CurieIMU.h"

    void setup() {
      Serial.begin(9600); // initialize Serial communication
      while (!Serial);    // wait for the serial port to open

      // initialize device
      Serial.println("Initializing IMU device...");
      CurieIMU.begin();
    }


    void loop() {
      // Returns the raw value of the temperature value read by the built-in motion sensor
      int  rawTemp = CurieIMU.readTemperature() ;
      
      <font color="Red">float Temp = (rawTemp/32767.0)+23 ;</font>
      Serial.println(Temp);
      delay(5000);
    }
```
打开串口监视器，可以看到每五秒输出当前芯片的温度值。效果如下：
![](http://forum.godpub.com/data/attachment/forum/201604/12/131442eo4f623kzd7vou3w.png)

# 掉进大坑里
看起来似乎很完美呢，23度，基本上和我当前室温相当。看来Curie发热很低啊，几乎不发热啊。
用手摸摸Curie的芯片，果然不是很热。
等等，哪里不对？按说体温36-7度，摸芯片，温度该有些变化呀，总不能我体温也23度吧？
到底差哪呢？好吧，姑且怀疑是我体表温度太低了吧，冷血动物

那么就想办法提高一下芯片温度试试。
本来想拿电烙铁烙丫一下，又怕烙坏，搞个温柔的方式，用电吹风吹吹吧
找来电吹风，调成高档，一顿吹呀，手都要烫掉了，发现温度只上升了零点几度，这不科学。

到底哪里出错了呢，官方的库，官方的算法。

对照文档，回头一步一步追查。
寄存器地址没错
```
    #define BMI160_RA_TEMP_L            0x20
    #define BMI160_RA_TEMP_H            0x21
```

读取寄存器的值代码没错
```
    int16_t BMI160Class::getTemperature() {
        uint8_t buffer[2];
        buffer[0] = BMI160_RA_TEMP_L;
        serial_buffer_transfer(buffer, 1, 2);
        return (((int16_t)buffer[1]) << 8) | buffer[0];
    }
```

CurieIMU的封装更是直接返回：

```
    int CurieIMUClass::readTemperature()
    {
    return getTemperature();
    }
```

那么除了硬件本身不对，就是以下转换有可能出错啦：

    `float Temp = (rawTemp/32767.0)+23 ;`

硬件一般很少有问题即便有问题我也没法调试不是，而这个温度转换是Arduino官网手册中提供的，那么就看看它有没有错误吧。
那么我们来分析为什么这么转换呢？
让我们回头看温度传感器的资料：
```
    * Value | Temperature
    * ---------+----------------
    * 0x7FFF | 87 - 1/2^9 degrees C
    * ... | ...
    * 0x0000 | 23 degrees C
    * ... | ...
    * 0x8001 | -41 + 1/2^9 degrees C
    * 0x8000 | Invalid
```

当数值为0 温度为23，所以转换公式后边+23，这没问题。
0x0000到0x7FFF总计为32767步，那么原始数据/32767表达的啥意思？！大坑原来在这里。
看上边引用的内容，0x0000到0x7FFF对应的温度变化从23度到（87 - 1/2^9）度，也就是说大致变化了87-23 = 64度
那么由原始数据变化成温度的计算公式应该为：(rawTemp/(32767.0/64))+23 ; 亦即：(rawTemp/512.0)+23;

再回头看BMI160的手册，人家都说了解析度是 1/2^9，Arduino官网手册害死人，浪费我大量精力。

# 修正后的代码与效果

针对上述结论，对代码进行修改。
修正后的代码如下：
```
    // http://forum.godpub.com/thread-118-1-1.html
    #include "CurieIMU.h"

    void setup() {
      Serial.begin(9600); // initialize Serial communication
      while (!Serial);    // wait for the serial port to open

      // initialize device
      Serial.println("Initializing IMU device...");
      CurieIMU.begin();
    }


    void loop() {
      // Returns the raw value of the temperature value read by the built-in motion sensor
      int  rawTemp = CurieIMU.readTemperature() ;

      float Temp = (rawTemp/512.0)+23 ;
      Serial.println(Temp);
      delay(5000);
    }
```
执行效果如下：
![](http://forum.godpub.com/data/attachment/forum/201604/12/135946z6ih7yhy8kqgyg68.png)

这还是比较合理的，用电吹风一吹数值变化明显，电吹风吹的就不截图啦，累了。

亲爱的读者，这里还有个无比巨大的坑，你们能否看出来？
这个大坑说严重很严重的哦，会导致一些条件下数据完全出错。
（小提示，和数据类型有关）


# 总结

本文介绍如何读取Intel Curie内置温度传感器获取芯片的温度。并在使用过程中发现官网手册中的一处失误，并予以纠正。
文末作者挖了一个大坑，希望细心的读者能够发现，猜对没有奖励哦。
谨以本文抛砖引玉，希望大家折腾出更好玩的东西。

- - -

This page is synchronized from the post: [【Arduino/Genuion 101 亲密接触】 查看芯片温度/ Intel Curie, BMI160](https://steemit.com/@oflyhigh/arduino-genuion-101-intel-curie-bmi160)
