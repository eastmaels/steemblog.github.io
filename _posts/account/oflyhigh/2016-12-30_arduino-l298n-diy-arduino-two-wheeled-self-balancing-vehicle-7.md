
---
title: '用Arduino 制作双轮（玩具）自平衡车(七，说一下电机驱动板L298N) / DIY Arduino Two wheeled self balancing vehicle (7)'
permlink: arduino-l298n-diy-arduino-two-wheeled-self-balancing-vehicle-7
catalog: true
toc_nav_num: true
toc: true
date: 2016-12-30 04:55:24
categories:
- cn
tags:
- cn
- diy
- arduino
- life
thumbnail: http://forum.godpub.com/data/attachment/forum/201411/25/105450n8lvt3vxy3xvn81u.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


继续我们的玩具自平衡车DIY之旅。

在前前文中，我们介绍了直流减速电机
[用Arduino 制作双轮（玩具）自平衡车(五，直流减速电机) / DIY Arduino Two wheeled self balancing vehicle (5)](https://steemit.com/cn/@oflyhigh/arduino-diy-arduino-two-wheeled-self-balancing-vehicle-5)
这一节我们介绍一下电机的驱动板

做平衡车比较常用的电机驱动板有`L298N`以及`TB6612FNG`
这里我们将先介绍一下`L298N`。

`以下内容为以前原创，乾坤大挪移过来了`

# 关于L298N

L298N是ST公司一种高电压、大电流电机驱动芯片，其中最高工作电压可达46V，持续工作电流为2A，瞬间峰值电流更是可达 3A。该芯片内含两个H桥的高电压大电流全桥式驱动器，可以直接驱动两个直流电动机。

* 这款红色的是比较常见的（这是我以前在别的论坛上发的图)
![L298N](http://forum.godpub.com/data/attachment/forum/201411/25/105450n8lvt3vxy3xvn81u.png)

* 这款蓝色的多了一个按钮开关，用起来更方便一些。
![IMG_20161223_12041168cc3.jpg](http://www.steemimg.com/images/2016/12/22/IMG_20161223_12041168cc3.jpg)

# 模块接口介绍

已红色模块为例
如图所示，模块上共有7个接线柱
底侧的三个接线柱，分别是VCC, GND, 5V，两侧分别为(OUT1, OUT2), (OUT3, OUT4), 两两一组，可以控制两个电机。

上边靠近OUT1处，有一处跳线(JP1)，控制是否使用板载供电。

底侧信号输入部分，可以分为两组（ENA, IN1, IN2) (ENB, IN3, IN4)，对应2个电机的控制。
底侧信号输入部分上边，一排针，分别是（5V, 5V, GND), (GND, 5V, 5V)

# 接线方式

以红色模块为例：
跳线JP1闭合（使用板载7805 5V供电电路板）。
`(如果不使用板载7805供电电路板，那么ENA上方的5V接Arduino的5V)`
接线柱VCC接电源（+），接线柱GND接电源地（-）.
ENA 接Arduino PWM调速信号（我接的3， 如果不需要调速，则可以直接将ENA与上边的5V用跳线帽连接）
IN1, IN2接Arduino的数字针（我接的是5， 6）
信号GND，接Arduino的GND `（*：共地非常重要）`
OUT1, OUT2接电机的正负极

* 来张以前做的实物图
![L298N](http://forum.godpub.com/data/attachment/forum/201411/25/121351lsotsff1bo0xvylo.jpg)
# 如何控制

通过ENA来控制电机使能，当ENA为低电平时，电机停转
可以通过对ENA输出PWM对电机进行调速
通过给IN1, IN2高低电平，来控制电机旋转
IN1, IN2 = LOW, HIGH 正转
IN1, IN2 = HIGH, LOW 反转
IN2, IN2 = LOW, LOW 或HIGH, HIGH  刹车

# 关于调速

我们可以通过给ENA，PMW信号来对电机进行调速
ENA低电平范围：0.3V<= VIN <= 1.5V (这个区间控制信号无效，所以电机停转）
ENA低电平范围：2.3V<= VIN <= VSS (这个区间控制信号有效）
所以原则上，我们输入的PWM信号等效电压应该在2.3V以上，如果VSS等于5V，那么我们应该输入118以上的量
（在1.5V至2.3V这个区间，我测试100左右还是有效的，再低的值电机嗡嗡响，不转动，实际情况与电机，电源等相关，应该略有不同）

# Arduino代码

```
    // Example by Joytag
    // http://forum.godpub.com/thread-33-1-1.html
    #define ENA 3
    #define IN1 5
    #define IN2 6

    void setup() {
      pinMode(ENA, OUTPUT); //PWM
      pinMode(IN1, OUTPUT);
      pinMode(IN2, OUTPUT);
    }

    void loop() {

      // Speed
    analogWrite(ENA, 100);

    //
    digitalWrite(IN1, LOW);
    digitalWrite(IN2, HIGH);
    delay(5000);

    digitalWrite(IN1, HIGH);
    digitalWrite(IN2, LOW);
    delay(5000);

    // STOP
    digitalWrite(IN1, LOW);
    digitalWrite(IN2, LOW);
    delay(5000);


    // Forward
    digitalWrite(IN1, LOW);
    digitalWrite(IN2, HIGH);
    delay(5000);

    // Forward in high speed
    analogWrite(ENA, 255);
    digitalWrite(IN1, LOW);
    digitalWrite(IN2, HIGH);
    delay(5000);
    }
````

以上代码，实现
正转5秒
反转5秒
停止
正转5秒
高速旋转5秒

# 控制两路电机

控制两路电机与控制一路电机没啥本质区别，就不多写了。







# 相关帖子列表
* [用Arduino 制作双轮自平衡车 / DIY Arduino Two wheeled self balancing vehicle](https://steemit.com/cn/@oflyhigh/arduino-diy-arduino-two-wheeled-self-balancing-vehicle)
* [用Arduino 制作双轮自平衡车(二，主要材料) / DIY Arduino Two wheeled self balancing vehicle (2)](https://steemit.com/cn/@oflyhigh/arduino-diy-arduino-two-wheeled-self-balancing-vehicle-2)
* [用Arduino 制作双轮（玩具）自平衡车(三，组装底盘) / DIY Arduino Two wheeled self balancing vehicle (3)](https://steemit.com/cn/@oflyhigh/arduino-diy-arduino-two-wheeled-self-balancing-vehicle-3)
* [用Arduino 制作双轮（玩具）自平衡车(四，安装电池等，遇到难题了) / DIY Arduino Two wheeled self balancing vehicle (4)](https://steemit.com/cn/@oflyhigh/arduino-diy-arduino-two-wheeled-self-balancing-vehicle-4)
* [用Arduino 制作双轮（玩具）自平衡车(五，直流减速电机) / DIY Arduino Two wheeled self balancing vehicle (5)](https://steemit.com/cn/@oflyhigh/arduino-diy-arduino-two-wheeled-self-balancing-vehicle-5)
* [用Arduino 制作双轮（玩具）自平衡车(六，手工工具之一) / DIY Arduino Two wheeled self balancing vehicle (6)](https://steemit.com/cn/@oflyhigh/arduino-diy-arduino-two-wheeled-self-balancing-vehicle-6)

- - -

This page is synchronized from the post: [用Arduino 制作双轮（玩具）自平衡车(七，说一下电机驱动板L298N) / DIY Arduino Two wheeled self balancing vehicle (7)](https://steemit.com/@oflyhigh/arduino-l298n-diy-arduino-two-wheeled-self-balancing-vehicle-7)
