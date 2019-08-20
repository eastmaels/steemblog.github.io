
---
title: 'Introduction to IoTSwitcher'
permlink: introduction-to-iotswitcher
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-11-30 18:44:00
categories:
- utopian-io
tags:
- utopian-io
- development
- iot
- prototype
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmUpnUReMXUuPngu8GQt1A2GZENR2aqNduJ8eJpbCX2ZFU'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


#### Repository
https://github.com/passionbull/IoTSwitcher

### New Projects
- What is the project about?

Let me introduce my project "IoTSwitcher ". 
IoTSwitcher is embedded device that makes lights turn on and off automatically and remotely. 
There are some IoT products that turn on and off remotely, but they are expensive. 
There is currently no kits that can be easily made with DIY.
I want to develop DIY kits through Utopian.

You can imagine those things using IoTSwitcher.

1. You can turn lights on and off using IoTSwitcher while lying in bed.
2. Also, you can turn off the lights outside the house.
3. In the morning, the lights turn on automatically.

The strengths of this project are as follows.

1. As a DIY product, users can add functionality. This equipment can be upgraded further.
2. I will make the initial prototype that is easily installed and usable by anyone.
3. Both software and hardware will be released.

Below are the hardware, website and video I made.
I made initial prototype using only chopstick, servo motor, esp-12.
It costs only $10-15. I can save cost if I use cheap motor and esp-01 (another esp8266 board).

<img src="https://ipfs.busy.org/ipfs/QmUpnUReMXUuPngu8GQt1A2GZENR2aqNduJ8eJpbCX2ZFU" alt="image.png" />

Using smart phone and my robot (AIY google speaker), I turn on/off the light.
In the second video, I made a command in Korean, and the robot sent a signal to IoTSwitcher.


https://www.youtube.com/watch?v=PNQuUcrn7ak
https://www.youtube.com/watch?v=kX5rDw2mGEA

- Technology Stack
    - Hardware
        - esp-12
        - Servo motor
    - Software
        - arduino code
        - C++ code
            - WebFront class is for communicating with phone using http request.
            - ServoController class is for motor control.
            - LocalDB class is for storing some configuration parameter.

- Roadmap
I will improve hardware and software.
In hardware, I need to make shape using 3d printing.
Also, I will try to make IoTSwitcher using more cheaper stuff.
In software, I will develop alarm function and web-server for using IoTSwitcher easily.

- How to contribute?
If you have any questions, please comment or contact <a href="https://steemit.com/@jacobyu">@jacobyu</a>
Everyone who wants to make it together, please contact me.

#### GitHub Account
https://github.com/passionbull

- - -

This page is synchronized from the post: ['Introduction to IoTSwitcher'](https://steemit.com/@jacobyu/introduction-to-iotswitcher)
