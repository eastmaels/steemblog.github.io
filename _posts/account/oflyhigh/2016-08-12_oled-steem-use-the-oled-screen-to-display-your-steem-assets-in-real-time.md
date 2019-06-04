
---
title: '使用OLED液晶屏实时显示你的STEEM资产/Use the OLED screen to display your STEEM assets in real time'
permlink: oled-steem-use-the-oled-screen-to-display-your-steem-assets-in-real-time
catalog: true
toc_nav_num: true
toc: true
date: 2016-08-12 08:02:15
categories:
- cn
tags:
- cn
- steemit
- steem
- balance
- piston
thumbnail: https://www.steemimg.com/images/2016/08/12/abit09c6b.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![abit09c6b.png](https://www.steemimg.com/images/2016/08/12/abit09c6b.png)

最近中文区很冷清
人气不旺，帖子少，顶贴回帖氛围也不活跃。

于是就想除了发帖顶帖外，玩点别的。
因为手头有一些硬件资源，就想能不能把这些资源和STEEMIT结合起来，做点有趣的东西呢。
于是，就有了文中的产物： 在一块OLED屏幕上，显示指定账户的STEEMIT Balance。

为了完成这个小玩意，我们需要实现以下功能：
1. 获取指定账户的steemit balance
2. 在OLED上显示

我使用了一块基于ESP8266的开发板。
这款开发板可以连接到WIFI网络，并且自带OLED屏幕，可以使用Arduino编程。
开发板的全貌：
[![IMG_20160812_142227927f4.md.jpg](https://www.steemimg.com/images/2016/08/12/IMG_20160812_142227927f4.md.jpg)](https://www.steemimg.com/image/ccR27)

尽管开发板可以联网、可以写程序
但是对于我这种对STEEMIT的了解仅限于发帖顶帖的人而言，想在上边直接实现我们需要的功能还是太难了。

为此，我折中了一下，使用一台Linux主机获取指定账户的steemit balance
所以，问题变成了
1. Linux主机获取指定账户的steemit balance
2. Linux主机将数据传送给开发板
3. 开发板控制在OLED上显示

好，我们分别来实现这些功能。

#  Linux主机获取指定账户的steemit balance

为了实现这个功能，我在Linux主机上安装了piston
`pip3 install steem-piston`

安装后，我们就可以使用命令行来获取指定账户的steemit balance
比如以下语句获取中文区的大鲸鱼abit的账户资产
` ~/.local/bin/piston --node wss://steemit.com/wspa balance abit`
显示结果如下：
![abit_command7a750.png](https://www.steemimg.com/images/2016/08/12/abit_command7a750.png)

但是这个数据有点太多了，我只需要其中的ID, STEEM, SBD, 以及最后一项VESTS (in STEEM) 
我们通常把最后一项叫STEEM POWER (SP)
为了简化数据，我把它们简单的处理一下
`~/.local/bin/piston --node wss://steemit.com/wspa balance abit | sed -e '/^+/d' | sed -e '/Account/d' | awk -F " " '{ print $2 " " $4 " " $7 " " $13}'`
请原谅我是菜鸟一枚，很多东西都现学现卖，也许有更简单的办法
总之，数据拿到了，分别是ID, STEEM, SBD, SP
`abit 3316.026 32663.161 342030.80587869947`

# Linux主机将数据传送给开发板

虽然标题写的是Linux主机将数据传送给开发板
但实际上我用的是MQTT
MQTT是被广泛用于物联网的一种通信协议，使用发布-订阅方式
简单的说，LINUX主机发布steemit balance到MQTT服务器
我的开发板从MQTT服务器订阅指定的信息（steemit balance）

这样一旦有新消息到来，开发板就会在OLED上显示出来。

我使用mosquitto_pub来发布信息，在这之前你要安装mosquitto-clients
`sudo apt-get install mosquitto-clients`

发布消息的命令：
`mosquitto_pub -t "Oflyhigh/MQTT/STEEM_BL" -m "abit 3316.026 32663.161 342030.80587869947" -h iot.xxx.com`
其中iot.xxx.com是MQTT主机名，你可以用任何主机，比如“iot.eclipse.org”
![m2plus3f8a87.jpg](https://www.steemimg.com/images/2016/08/12/m2plus3f8a87.jpg)
我使用上图BananaPI M2+ 自建了一个MQTT服务器，如果你有类似硬件，比如RaspberryPi你也可以。

# 开发板控制在OLED上显示
开发板上我使用Arduino IDE进行编程
当然，也可以使用ESP8266的SDK进行。

几个核心的工作就是
连接到到网络上
向MQTT服务器订阅消息
接收消息并在OLED上显示

连接到WIFI我使用了“ESP8266WiFi”库
向MQTT服务器订阅消息我使用了“PubSubClient”
板载的OLED和ESP8266之间使用I2C通讯，所以还要包含“Wire”库
订阅的核心代码
`client.subscribe("Oflyhigh/MQTT/STEEM_BL");`

完成代码并下载到开发板中， 连接正常会显示如下信息。
[![IMG_20160812_1425164a1d3.md.jpg](https://www.steemimg.com/images/2016/08/12/IMG_20160812_1425164a1d3.md.jpg)](https://www.steemimg.com/image/cc0Vw)

然后在Linux上执行上边提及的piston命令并用mosquitto_pub发布，就可以在屏幕上显示啦
[![img_038669706.md.jpg](https://www.steemimg.com/images/2016/08/12/img_038669706.md.jpg)](https://www.steemimg.com/image/cZn51)

# 如何实时更新
通过上边的操作，实现了在屏幕上显示指定账户的资产信息。
但是不能总人工操作是不？

很简单，你直接编写个shell脚本
```
#
# Script to show steemit banlance
#

if [ $# != 1 ]
then
        echo "Usage:"
        echo $0 "account_name"
else
        acc=$1
        echo $acc
        msg=`~/.local/bin/piston --node wss://steemit.com/wspa balance $acc | sed -e '/^+/d' | sed -e '/Account/d' | awk -F " " '{ print $2 " " $4 " " $7 " " $13}'`
        echo $msg
        mosquitto_pub -t "JoyTag/MQTT/inTopic" -m "$msg" -h iot.xxx.com
fi
```
然后设置crontab，定时执行就可以啦。

# 结论

怎么样，弄一个放餐桌旁边、电脑桌旁边
随时显示你有多少资产，是不是很酷（冷）？
或者通过crontab设置，交替显示你和别人都有多少资产，然后告诫自己：革命尚未成功，同志仍需努力！

好吧，其实我就是无聊玩，轻喷哦
感谢 @abit 大王在这友情客串，因为的账户钱太少，不好意思晒

- - -

This page is synchronized from the post: [使用OLED液晶屏实时显示你的STEEM资产/Use the OLED screen to display your STEEM assets in real time](https://steemit.com/@oflyhigh/oled-steem-use-the-oled-screen-to-display-your-steem-assets-in-real-time)
