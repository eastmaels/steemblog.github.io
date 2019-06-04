
---
title: 'Arduino 开发不传之秘：  读取MCU Device ID(设备ID)以及Signature(标识)'
permlink: arduino-mcu-device-id-id-signature
catalog: true
toc_nav_num: true
toc: true
date: 2017-07-14 12:47:09
categories:
- arduino
tags:
- arduino
- cn
- diy
- iot
- signature
thumbnail: https://steemitimages.com/DQmP171U7HyLg3eHFvf4NmDDMYuAAMLS23baWvHxg3vRcF4/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://steemitimages.com/DQmP171U7HyLg3eHFvf4NmDDMYuAAMLS23baWvHxg3vRcF4/image.png)


在实际应用中，我们可能需要唯一的设备ID用于标识设备或者进行功能加密等操作。
Arduino中并未直接提供此类接口，那么是否可以实现此类功能呢？答案是肯定的。

在AVR的LIBC库中提供了以下定义(boot.h)：
>Read the Signature Row byte at address. For some MCU types, this function can
also retrieve the factory-stored oscillator calibration bytes.
Parameter address can be 0-0x1f as documented by the datasheet.
Note The values are MCU type dependent.

Datasheet中关于如何在软件中读取Signature的说明：
![](https://steemitimages.com/DQmbm3edEhm2QLBtkrPV26ZEyPbQQnXp6Q9jhzEs8Bu16k9/image.png)

不同型号MCU的Device ID信息:
![](https://steemitimages.com/DQmc4hHGrdDMKjSy3ui3n1VnhQ2SSCyZ4X8LaRPfLDL75xM/image.png)

根据如上信息，写了个测试程序：
读取手头Arduino板的信息：

* Arduino UNO R3 (1)
![](https://steemitimages.com/DQmeppNaYwdvfRsctAJ5MYaJGkM3UyQaybSsm4z5GPRXpN8/image.png)

* Arduino UNO R3 (2)
![](https://steemitimages.com/DQmVQ67qpycAP1Xzaj5UgpEMtNvpgUCgaEJuN4FnbqdZwLk/image.png)

* Arduino NANO
![](https://steemitimages.com/DQmXPtWUQxRREaqDzG7tYaNPGM3gsuU3QqS6QKL8nMpofga/image.png)

对于我们获取的Device ID以及文档中的说明，可知手头的两片Arduino UNO R3以及Arduino NANO 均采用ATMEGA328P.
那个RC Oscillator Calibration Byte没搞明白，先不理会啦。

可以明显看到这些数据分成几组，但是除了（Device ID）以及（Calibration Byte）没有从datasheet中找到其它部分对应的描述。
网上一些帖子说从第十四个字节(从0开始)，后连续10个字节亦即MCU的唯一编码。

对程序稍作修改：
```
    #include "avr/boot.h"

    void setup() {
      Serial.begin(9600);
      Serial.println("Arduino MCU Signature Reader");
      Serial.println("By JoyTag, support@joytag.com\n");
    }

    void loop() {

      // 28.3 Signature Bytes
      Serial.print("Device ID:\t");
      Serial.print(boot_signature_byte_get(0), HEX);
      Serial.print("\t");
      Serial.print(boot_signature_byte_get(2), HEX);
      Serial.print("\t");
      Serial.print(boot_signature_byte_get(4), HEX);

      // 28.4 Calibration Byte
      Serial.print("\nCalibration Byte:\t");
      Serial.println(boot_signature_byte_get(1), HEX);

      //23.12.2.14 #define boot_signature_byte_get( addr )
      Serial.println("\nRow Bytes:");
      for (int i = 0; i <= 0x1F; i++)
      {
        Serial.print(boot_signature_byte_get(i), HEX);
        Serial.print(", ");
      }
      Serial.println("");


      Serial.println("\nUID Bytes:");
      for (int i = 14; i < 14 + 10; i++)
      {
        Serial.print(boot_signature_byte_get(i), HEX);
        Serial.print(", ");
      }
      Serial.println("");

      while (1);
    }
```

![](https://steemitimages.com/DQmchEeo75X4229qKHzZCBbhCXzspkVLSqFPaupMVLPceMB/image.png)

![](https://steemitimages.com/DQmf8siyeNtwzUXHHCpav7rYQHomxqQ97pTYitjywBA4Y7o/image.png)

![](https://steemitimages.com/DQmVNLSMaP8g7Jvsjr7bAEKSe37CbRepfZueWZTAyx5LMmo/image.png)

看来，利用这个方法读取唯一标识还是可行的。


参考资料

* http://atmel.force.com/support/articles/en_US/FAQ/How-to-read-signature-byte
* http://www.atmel.com/webdoc/AVRLibcReferenceManual/group__avr__boot_1gaf375d2543ba38dc56697b4f4bc37a717.html
* http://www.amobbs.com/forum.php?mod=viewthread&tid=5485868&highlight=AVR%2B%E5%BA%8F%E5%88%97%E5%8F%B7
* http://www.atmel.com/images/Atmel-8271-8-bit-AVR-Microcontroller-ATmega48A-48PA-88A-88PA-168A-168PA-328-328P_datasheet_Complete.pdf

补充：
带水印的截图都是本人以前亲自做的，懒得把多个设备拿出来重新跑，直接用老图啦。
文章所述功能属于隐藏技能哦，我周围很多做产品的都不知道这个事那，免费大放送啦。

- - -

This page is synchronized from the post: [Arduino 开发不传之秘：  读取MCU Device ID(设备ID)以及Signature(标识)](https://steemit.com/@oflyhigh/arduino-mcu-device-id-id-signature)
