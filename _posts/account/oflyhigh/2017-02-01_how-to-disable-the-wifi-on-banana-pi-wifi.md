
---
title: 'How to disable the WIFI on Banana-Pi / 如何关闭香蕉派上的WIFI网络'
permlink: how-to-disable-the-wifi-on-banana-pi-wifi
catalog: true
toc_nav_num: true
toc: true
date: 2017-02-01 12:41:21
categories:
- bananapi
tags:
- bananapi
- cn
- raspbian
- raspberrypi
- iot
thumbnail: https://steemitimages.com/0x0/http://www-banana--pi-org-cn-static.smartgslb.com/images/bpi-images/M3/m32.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![Banana Pi](https://steemitimages.com/0x0/http://www-banana--pi-org-cn-static.smartgslb.com/images/bpi-images/M3/m32.jpg)

# 为何要关闭无线网络

家里有几个香蕉派设备，为了简洁一直使用无线网连接
毕竟一堆网线连接，看起来不是那么优雅
但是问题来了，随着无线设备的不断增加，无线连接有时候不是那么稳定了，经常有响应迟钝或者掉线的情况发生。

于是也不纠结是否优雅了，除了不方便扯网线的地方，所有设备都用网线连接了。
这样就有另外一个问题，对于一个设备而言，网线和无线是同时连接上的。
* 一方面接入设备过多，可能影响路由的稳定性
* 另一方面，无线信号开着，可能会增加系统功耗

或者退一步而言，即便不存在这些问题，也没必要开着无线是吧？
于是想如何关闭无线网络

# 安装 network manager

功夫不负有心人啊
我终于找到一个看起来应该好用的工具：`nmcli`
试着执行一下：`sudo nmcli device wifi list`
结果却提示： `sudo: nmcli: command not found`

```
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install network-manager
```

# 测试

* 查看无线状态
```
sudo nmcli radio
WIFI-HW  WIFI     WWAN-HW  WWAN
enabled  enabled  enabled  enabled
```

* 扫描无线网络
```
sudo nmcli device wifi list
*  SSID            MODE   CHAN  RATE       SIGNAL  BARS  SECURITY
   MYWIFI          Infra  6     54 Mbit/s  100     ▂▄▆█  WPA1 WPA2
   mc              Infra  4     54 Mbit/s  55      ▂▄__  WPA1 WPA2
   MERCURY_75E5D8  Infra  11    54 Mbit/s  30      ▂___  WPA1 WPA2
   TP-LINK_2CB28C  Infra  11    54 Mbit/s  27      ▂___  WPA1 WPA2
   BHY292          Infra  1     54 Mbit/s  22      ▂___  WPA1 WPA2
   Cheung          Infra  6     54 Mbit/s  15      ▂___  WPA1 WPA2
   ilovewoxray     Infra  2     54 Mbit/s  17      ▂___  WPA1 WPA2
```
* 关闭无线设备
````
sudo nmcli radio all off
````
* 查看无线状态
```
sudo nmcli radio
WIFI-HW  WIFI      WWAN-HW  WWAN
enabled  disabled  enabled  disabled
```
* 扫描无线网络
```
sudo nmcli device wifi list
*  SSID  MODE  CHAN  RATE  SIGNAL  BARS  SECURITY
```

* 使用ifconfig查看
发现WLAN0已经不存在了。


由此可见，无线网络已经关闭成功啦。

# 总结

使用：`sudo ifconfig wlan0 down`不能关闭无线网卡，还可以扫描到网络
使用`iwconfig` 关闭 power 以及 txpower ，貌似也行不通。 
使用`nmcli`很轻易实现了我的目的。
使用`sudo rfkill block wifi`也可以达到类似效果，详情`man rfkill`

关闭后重新开启：`sudo nmcli radio all on`
`nmcli`还有很多强大的功能，感兴趣的朋友可以自行搜索了解。

# 相关文章
* [禁用香蕉派BananaPi M3上恼人的绿色LED](https://steemit.com/bananapi/@oflyhigh/bananapi-m3-led)

- - -

This page is synchronized from the post: [How to disable the WIFI on Banana-Pi / 如何关闭香蕉派上的WIFI网络](https://steemit.com/@oflyhigh/how-to-disable-the-wifi-on-banana-pi-wifi)
