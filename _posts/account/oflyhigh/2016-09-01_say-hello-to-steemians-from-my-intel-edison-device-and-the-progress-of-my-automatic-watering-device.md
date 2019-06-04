
---
title: 'Say Hello to steemians from my Intel Edison device,  and the progress of my automatic watering device.'
permlink: say-hello-to-steemians-from-my-intel-edison-device-and-the-progress-of-my-automatic-watering-device
catalog: true
toc_nav_num: true
toc: true
date: 2016-09-01 06:12:27
categories:
- life
tags:
- life
- edison
- iot
- hardware
- steemit
thumbnail: https://www.steemimg.com/images/2016/09/01/IMG_20160901_122347caee6.md.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


[![IMG_20160901_122347caee6.md.jpg](https://www.steemimg.com/images/2016/09/01/IMG_20160901_122347caee6.md.jpg)](https://www.steemimg.com/image/2vjU8)

# Say Hello to steemians & the progress

In my previous post, I showed you my Intel Edison kit and planed to make an automatic watering device with it.
* [What will you make? 秀一下Intel Edison套件，计划做一个自动浇花装置](https://steemit.com/cn/@oflyhigh/what-will-you-make-intel-edison)

But more than a month has passed, I haven't finished it it, Because I spend almost all of my time at steemit.

Today, I decide to continue work on it.
First, let me say hello to steemians from my Intel Edison device.
[![IMG_20160901_123423cd739.md.jpg](https://www.steemimg.com/images/2016/09/01/IMG_20160901_123423cd739.md.jpg)](https://www.steemimg.com/image/2vtws)

The second line message shows on LCD is meaningless for steemit, you can ignore it.
I use a potentiometer which on the bottom right corner to simulate the humidity sensor, and read the analog value of it. It will be replaced with the following module.
![shidu1388c.jpg](https://www.steemimg.com/images/2016/09/01/shidu1388c.jpg)


And I use a Led on bread board to simulate the water pump，and use an electric relay to control it.

My program will check the humidity sensor every 30 minutes, when the humidity is below the threshold，the water pump start watering.

# Task list
The program is almost finished, what I need to do are:
* Order a water pump to replace the LED
* Order a humidity sensor to replace the potentiometer.
* Use independent power supply for electric relay and water pump.  Because the push current of edison GPIO PIN is limited to small value. It's difficult to drive a water pump, and may damage  compute module.
* A Voltage conversion device is also needed. Because most of water pump worked on 24V.
* I also need a tank to hold water.


And most important of all， I need a potted plant:)
![20150826214443_TRFCQ1a388.jpg](https://www.steemimg.com/images/2016/09/01/20150826214443_TRFCQ1a388.jpg)
(*This picture is taken from baidu.com )

I will try my best to finish my automatic watering device ASAP.

- - -

This page is synchronized from the post: [Say Hello to steemians from my Intel Edison device,  and the progress of my automatic watering device.](https://steemit.com/@oflyhigh/say-hello-to-steemians-from-my-intel-edison-device-and-the-progress-of-my-automatic-watering-device)
