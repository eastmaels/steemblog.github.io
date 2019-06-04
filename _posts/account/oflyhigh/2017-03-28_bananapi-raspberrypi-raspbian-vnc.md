
---
title: 'BananaPi /RaspberryPi Raspbian系统使用VNC'
permlink: bananapi-raspberrypi-raspbian-vnc
catalog: true
toc_nav_num: true
toc: true
date: 2017-03-28 13:50:21
categories:
- bananapi
tags:
- bananapi
- vnc
- raspbian
- cn-programming
- cn
thumbnail: https://steemitimages.com/DQmebei6Q1xcjmbkUoD7uaPspcEjz6r15y6dE9BAnZjP56B/m32.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![m32.jpg](https://steemitimages.com/DQmebei6Q1xcjmbkUoD7uaPspcEjz6r15y6dE9BAnZjP56B/m32.jpg)


# 为什么要用VNC

前段时间一直在Raspbian的命令行下工作，黑底白字弄得我头昏眼花的。
最近有些工作需要在图形界面下完成，我又懒得把香蕉派接到显示器上，实在是因为的桌面太小，放不下两台显示器了，如果一台显示器来回切换，也极其不便。想到以前曾经在香蕉派M1+上安装和使用过VNC，想必在M3上也没啥区别，试试看喽。

`使用VNC可以同时操作PC以及香蕉派的桌面，避免了切来切去的麻烦。`


# 安装VNC

首先，你必须在香蕉派上安装VNC服务。
先更新系统：
`sudo apt-get update`
`sudo apt-get upgrade`

再在命令行执行如下安装指令即可：
`sudo apt-get install tightvncserver`

安装指令会安装`tightvncserver`以及依赖的包，比如我这里需要
```
The following extra packages will be installed:
  x11-xserver-utils xfonts-base
```

# 启动VNC服务

执行 `vncserver`
启动VNC服务，首次启动会提示设置密码(登录VNC用)，按提示输入即可
![Capture.PNG](https://steemitimages.com/DQmaDuded6LVxtWgmk31hfpg6QtUr48Ep6d3LLWyRtt1vtA/Capture.PNG)

如果需要设置只读密码
那么在提示
`Would you like to enter a view-only password (y/n)? `
后输入y，并按提示设置密码即可。
使用view-only密码登录VNC，只能查看桌面，无法进行操作。

# 连接VNC

PC端我使用的是RealVNC的VNC Viewer
https://www.realvnc.com/download/viewer/
可以在这里获得最新版本

输入IP和desktop序号
![Capture.PNG](https://steemitimages.com/DQmZMxUxoGaUDcwUNTegQ2yQAH6VamJ44YbQsCnvxCM8PSh/Capture.PNG)

自动映射到端口号，并提示输入密码
![Capture2.PNG](https://steemitimages.com/DQmX8yHWGyDbnk151HNHhNG6nuKzNNMf8p7p7CB6RjxL6bz/Capture2.PNG)

输入密码后登陆到默认桌面
![Capture3.PNG](https://steemitimages.com/DQmYctJ7kJ97vUDyubSWyqoYYa2Ng3GgLgqanCHrcTZfPuU/Capture3.PNG)

试试使用浏览器访问steemit.com
![Capture4.PNG](https://steemitimages.com/DQmZYuYPNzvTMCUHnsJGnRHwrNFPGenZmXDtAy5s8Da4aT5/Capture4.PNG)
（如果用view-only密码登录，那就只能查看桌面，不能操作）

# 修改密码

因为只有首次登录需要密码，所以如果长期不用可能忘记密码。
这时用
`vncpasswd`
修改密码即可。

# 设置桌面的分辨率
在启动vncserver时，可以通过参数设置桌面的分辨率和色深等，比如：
`vncserver -geometry 1366x768 -depth 8`

关于色深
>Set the colour depth of the visual to provide, in bits per pixel. Must be a value between 8 and 32.

# 用不同用户启动

使用不同用户启动vncserver，那么登录时就会登录到不同的用户桌面。
比如使用如下命令，就会以root用户登录到桌面。
`sudo vncserver`

# 关闭 VNC 服务
`vncserver -kill :<DISPLAY#>`


# 更多信息

可以通过查看手册来获取更多信息。
`man vncserver`

# 总结

VNC提供了一种更便捷的桌面连接方式。用用还是很方便的哦：）

- - -

This page is synchronized from the post: [BananaPi /RaspberryPi Raspbian系统使用VNC](https://steemit.com/@oflyhigh/bananapi-raspberrypi-raspbian-vnc)
