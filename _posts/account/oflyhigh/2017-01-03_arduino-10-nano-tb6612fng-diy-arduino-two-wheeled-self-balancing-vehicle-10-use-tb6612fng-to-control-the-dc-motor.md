
---
title: '用Arduino 制作双轮（玩具）自平衡车(10，使用NANO与TB6612FNG控制直流电机) / DIY Arduino Two wheeled self balancing vehicle (10: Use TB6612FNG to control the DC motor)'
permlink: arduino-10-nano-tb6612fng-diy-arduino-two-wheeled-self-balancing-vehicle-10-use-tb6612fng-to-control-the-dc-motor
catalog: true
toc_nav_num: true
toc: true
date: 2017-01-03 09:49:48
categories:
- cn
tags:
- cn
- diy
- arduino
- life
thumbnail: http://www.steemimg.com/images/2017/01/02/IMG_20170102_201719ed8e3.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![IMG_20170102_201719ed8e3.jpg](http://www.steemimg.com/images/2017/01/02/IMG_20170102_201719ed8e3.jpg)

****
继续我们的玩具自平衡车DIY之旅。
这节好多干货啊。

# 连线示意

在前文中，我们计划使用NANO作为平衡车的主控，使TB6612FNG控制直流电机。
为了避免焊接到板子上发生模块损毁和或者其它情况导致的无法使用，我们先用面包板以及杜邦线连接测试一下。

* 公对公杜邦线
![IMG_20170102_193430cf78e.jpg](http://www.steemimg.com/images/2017/01/02/IMG_20170102_193430cf78e.jpg)

* 据说叫T头，用于航模电池接口，为了便于链接，我用杜邦线将其接了起来 
![IMG_20170102_195802d8c7e.jpg](http://www.steemimg.com/images/2017/01/02/IMG_20170102_195802d8c7e.jpg)

* TB6612FNG，我们用的直接是现成的模块，省却了焊接芯片和外围 电路的烦恼
![IMG_20170102_193449298e4.jpg](http://www.steemimg.com/images/2017/01/02/IMG_20170102_193449298e4.jpg)

* 将NANO与TB6612FNG连接好，
![IMG_20170102_2006383af24.jpg](http://www.steemimg.com/images/2017/01/02/IMG_20170102_2006383af24.jpg)

# TB6612FNG控制方式

TB6612FNG是东芝半导体公司生产的一款直流电机驱动器件，它具有大电流MOSFET-H桥结构，双通道电路输出，可同时驱动2个电机。

TB6612FNG每通道输出最高1.2 A的连续驱动电流，启动峰值电流达2A/3.2 A(连续脉冲/单脉冲); 4种电机控制模式：正转/反转/制动/停止;PWM支持频率高达100 kHz;待机状态;片内低压检测电路与热停机保护电路;工作温度：-20～85℃;SSOP24小型贴片封装。

* 为了说明控制方式，先来一张引脚图
![IMG_20170101_15523568a5e.jpg](http://www.steemimg.com/images/2017/01/01/IMG_20170101_15523568a5e.jpg)

我们来一一说明：

* GND: 电源地以及信号地
* VM： 电机电源接口
* VCC: 控制电源接口（接单片机的5V）
* A01, A02：接电机A
* B01, B02：接电机B
* PWMA: 电机A调速接口
* AIN1,  AIN2: 电机A控制信号
* PWMB: 电机B调速接口
* BIN1,  BIN2: 电机B控制信号
* STBY 控制使能信号

是不是很简单明了!

* 真值表
<img width="450" height="288" alt="" src="http://image.c114.net/10090634.gif">


# Arduino 测试程序
````
#define PWMA 5
#define PWMB 6
#define STBY 4

#define AIN1 A0
#define AIN2 A1
#define BIN1 A2
#define BIN2 A3

void setup() {
  pinMode(PWMA, OUTPUT);
  pinMode(AIN1, OUTPUT);
  pinMode(AIN2, OUTPUT);
  pinMode(STBY, OUTPUT);

  digitalWrite(STBY, HIGH);
}

void loop() {

  // Low Speed
  analogWrite(PWMA, 100);


  digitalWrite(AIN1, LOW);
  digitalWrite(AIN2, HIGH);
  delay(2000);

  digitalWrite(AIN1, HIGH);
  digitalWrite(AIN2, LOW);
  delay(2000);

  // STOP
  digitalWrite(AIN1, LOW);
  digitalWrite(AIN2, LOW);
  delay(2000);

  digitalWrite(AIN1, LOW);
  digitalWrite(AIN2, HIGH);
  delay(2000);

  // Brake
  digitalWrite(AIN1, HIGH);
  digitalWrite(AIN2, HIGH);
  delay(2000);

  digitalWrite(AIN1, LOW);
  digitalWrite(AIN2, HIGH);
  delay(2000);

  // STOP
  digitalWrite(STBY, LOW);
  delay(2000);

  digitalWrite(STBY, HIGH);

  digitalWrite(AIN1, LOW);
  digitalWrite(AIN2, HIGH);
  delay(2000);

  // HIGH Speed
  analogWrite(PWMA, 255);
  digitalWrite(AIN1, LOW);
  digitalWrite(AIN2, HIGH);
  delay(5000);

  // Brake
  digitalWrite(AIN1, HIGH);
  digitalWrite(AIN2, HIGH);
  delay(2000);

}
````

* 程序只简单测试了控制一个电机。
* 控制另外的电机或者同时控制两个电机略作修改即可。
* 注意程序中停止以及刹车的区别 （可以对照真值表理解）

# 程序运行效果

* 虽然是静态图片，你能看到其中电机在旋转吗？
![IMG_20170102_201719ed8e3.jpg](http://www.steemimg.com/images/2017/01/02/IMG_20170102_201719ed8e3.jpg)

Steemit上最伟大的预言家 @myfirst 曾经说过：“会不会一上电就冒烟烧毁啊？”
还好，这次没冒烟：）

# 部分相关帖子列表


* [用Arduino 制作双轮（玩具）自平衡车(七，说一下电机驱动板L298N) / DIY Arduino Two wheeled self balancing vehicle (7)](https://steemit.com/cn/@oflyhigh/arduino-l298n-diy-arduino-two-wheeled-self-balancing-vehicle-7)
* [用Arduino 制作双轮（玩具）自平衡车(八，切割与焊接) / DIY Arduino Two wheeled self balancing vehicle (8: Cutting and welding)](https://steemit.com/cn/@oflyhigh/arduino-diy-arduino-two-wheeled-self-balancing-vehicle-8-cutting-and-welding)
* [用Arduino 制作双轮（玩具）自平衡车(九，焊接无止境) / DIY Arduino Two wheeled self balancing vehicle (9: continue to welding)](https://steemit.com/cn/@oflyhigh/arduino-diy-arduino-two-wheeled-self-balancing-vehicle-9-continue-to-welding)

不全部列出来了，感兴趣的朋友直接进我blog，就可以看到全部内容啦
@oflyhigh

谢谢大家！

- - -

This page is synchronized from the post: [用Arduino 制作双轮（玩具）自平衡车(10，使用NANO与TB6612FNG控制直流电机) / DIY Arduino Two wheeled self balancing vehicle (10: Use TB6612FNG to control the DC motor)](https://steemit.com/@oflyhigh/arduino-10-nano-tb6612fng-diy-arduino-two-wheeled-self-balancing-vehicle-10-use-tb6612fng-to-control-the-dc-motor)
