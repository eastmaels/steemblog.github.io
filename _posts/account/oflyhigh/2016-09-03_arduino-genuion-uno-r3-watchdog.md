
---
title: '【Arduino/Genuion UNO R3 】 如何使用Watchdog （看门狗）'
permlink: arduino-genuion-uno-r3-watchdog
catalog: true
toc_nav_num: true
toc: true
date: 2016-09-03 08:21:42
categories:
- cn
tags:
- cn
- iot
- arduino
- unor3
thumbnail: https://store.arduino.cc/bmz_cache/2/29876275dc7dcdcfd01caa5dc48442d7.image.446x354.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![Arduino](https://store.arduino.cc/bmz_cache/2/29876275dc7dcdcfd01caa5dc48442d7.image.446x354.jpg)

# 说明

我会陆续放一些Arduino、Raspberry Pi、Banana Pi、Curie、Edison、Mbed、ESP8266等开源硬件以及IOT相关的内容。

有些是我新写的，有些是我以前写的，希望在steemit上找到同好。

我会将其统一放置到 #iot 分类下。

# 何谓Watchdog? 

>ATmega48A/PA/88A/PA/168A/PA/328/P has an Enhanced Watchdog Timer (WDT). The WDT is a timer counting cycles of a separate on-chip 128kHz oscillator. The WDT gives an interrupt or a system reset when the counter reaches a given time-out value. In normal operation mode, it is required that the system uses the WDR - Watchdog Timer Reset - instruction to restart the counter before the time-out value is reached. If the system doesn't restart the counter, an interrupt or system reset will be issued.
*取自手册

# 如何在Arduino/Genuion UNO R3中使用？

```
    //example by Joytag
    #include <avr/wdt.h>

    void setup ()
    {
      wdt_enable (WDTO_1S);
    } // end of setup

    void loop ()
    {
      wdt_reset ();
    } // end of loop
```

# 可以选择的定时时长：
（请参考avr/wdt.h获取更详细信息）

Threshold value	|Constant name	|Supported on
----|----|----
15 ms	|WDTO_15MS	|ATMega 8, 168, 328, 1280, 2560
30 ms	|WDTO_30MS	|ATMega 8, 168, 328, 1280, 2560
60 ms	|WDTO_60MS	|ATMega 8, 168, 328, 1280, 2560
120 ms	|WDTO_120MS	|ATMega 8, 168, 328, 1280, 2560
250 ms	|WDTO_250MS	|ATMega 8, 168, 328, 1280, 2560
500 ms	|WDTO_500MS	|ATMega 8, 168, 328, 1280, 2560
1 s	|WDTO_1S	|ATMega 8, 168, 328, 1280, 2560
2 s	|WDTO_2S	|ATMega 8, 168, 328, 1280, 2560
4 s	|WDTO_4S	|ATMega 168, 328, 1280, 2560
8 s	|WDTO_8S	|ATMega 168, 328, 1280, 2560

# 示例一

目的：启用看门狗，不喂狗，观察Arduino重启
结论：通过串口监视器，我们会看到每五组数据后会输出一个"restart"，亦即看门狗起作用了。
```
//example by Joytag
#include <avr/wdt.h>

void setup() {
  Serial.begin(9600);
  wdt_enable(WDTO_4S);
  Serial.println("restart");
}

void loop() {
  int sensorValue = analogRead(A0);
  Serial.println(sensorValue);
  delay(1000);
}
```

# 示例二
目的：启用看门狗，并喂狗，了解喂狗的作用
结论：我们在loop中不断的喂狗，狗吃饱了，所以Arduino不重启。通过串口监视器，我们看到Arduino持续输出数据。
```
//example by Joytag
#include <avr/wdt.h>

void setup() {
  Serial.begin(9600);
  wdt_enable(WDTO_4S);
  Serial.println("restart");
}

void loop() {
  int sensorValue = analogRead(A0);
  Serial.println(sensorValue);
  delay(1000);
  wdt_reset();
}
```
# 其它问题

国外论坛上有不少关于Arduino使用看门狗的讨论，其实一个有意思的地方就是说wdt_enable是对寄存器进行操作，而掉电后寄存器的值依然保存。
假设这样一种情况：我们在一段arduino代码中启用了2秒的看门狗并下载执行。然后我们去下载并执行另外一个程序，这个新程序中没有使用看门狗，也没有喂狗，那么因为之前的寄存器配置依然存在，看门狗还是会起作用的，arduino会2秒重置一次。

实际情况是，因为我们平时使用arduino，是通过bootloader下载和启动的，而新版本的bootloader中已经对这个情况做了修复，查看bootloader的代码，我们会发现类似部分：
```
    void appStart() {
      watchdogConfig(WATCHDOG_OFF);
      ...
    }
```
亦即在启动我们的程序之前，关掉watchdog.
(需要注意的是，可能部分版本的bootloader，没有对此问题进行修复）

感兴趣的朋友，可以使用ISP工具直接对arduino下载应用，来测试watchdog的这个特点。本人比较懒，就不测试了。

# 关于禁用watchdog
继续假设上一种情况，我们启用的看门狗，bootloader中又没禁用，在我们的新程序中，我们又不想使用看门狗，该如何操作。
为了这个问题，我走了一些弯路：

（1）查找芯片的技术手册，找到了一个函数来关掉看门狗：
```
    void WDT_off(void)
    {
    __disable_interrupt();
    __watchdog_reset();
    /* Clear WDRF in MCUSR */
    MCUSR &= ~(1<<WDRF);
    /* Write logical one to WDCE and WDE */
    /* Keep old prescaler setting to prevent unintentional time-out */
    WDTCSR |= (1<<WDCE) | (1<<WDE);
    /* Turn off WDT */
    WDTCSR = 0x00;
    __enable_interrupt();
    }
```
（2）编译代码时，无法找到以下函数，
__disable_interrupt(); __watchdog_reset(); __enable_interrupt();
即便我包含了这个文件：#include <avr/interrupt.h>
为此我查找了avr-libc手册，分别使用cli();wdt_reset();sei();来替换对应的函数

（3）编译通过，测试也通过。使用WDT_off()，可以关闭watchdog功能。

按说这是一件令人高兴的事，可是吐血的是，我浏览avr/wdt.h的时候，发现这个函数：wdt_disable
（注：实际上是一个宏定义，为了方便，就都叫函数了）

# 补充(来自网络）

In Interrupt mode, the WDT gives an interrupt when the timer expires. This interrupt can be used to wake the device from sleep-modes, and also as a general system timer. One example is to limit the maximum time allowed for certain operations, giving an interrupt when the operation has run longer than expected. In System Reset mode, the WDT gives a reset when the timer expires. This is typically used to prevent system hang-up in case of runaway code. The third mode, Interrupt and System Reset mode, combines the other two modes by first giving an interrupt and then switch to System Reset mode. This mode will for instance allow a safe shutdown by saving critical parameters before a system reset.
（问题：Arduino中如何使用Interrupt mode？）

The Watchdog always on (WDTON) fuse, if programmed, will force the Watchdog Timer to System Reset mode. With the fuse programmed the System Reset mode bit (WDE) and Interrupt mode bit (WDIE) are locked to 1 and 0 respectively.

If the Watchdog is accidentally enabled, for example by a runaway pointer or brown-out condition, the device will be reset and the Watchdog Timer will stay enabled. If the code is not set up to handle the Watchdog, this might lead to an eternal loop of time-out resets. To avoid this situation, the application software should always clear the Watchdog System Reset Flag (WDRF) and the WDE control bit in the initialization routine, even if the Watchdog is not in use.

文成仓促，错漏难免，欢迎各位行家批评指导。
转载请注明出处。

- - -

This page is synchronized from the post: [【Arduino/Genuion UNO R3 】 如何使用Watchdog （看门狗）](https://steemit.com/@oflyhigh/arduino-genuion-uno-r3-watchdog)
