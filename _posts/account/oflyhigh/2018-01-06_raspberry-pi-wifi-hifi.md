
---
title: '来听歌吧，使用Raspberry Pi 搭建自己的WIFI HIFI音响系统'
permlink: raspberry-pi-wifi-hifi
catalog: true
toc_nav_num: true
toc: true
date: 2018-01-06 12:08:42
categories:
- cn
tags:
- cn
- hifi
- music
- airplay
- shairport
thumbnail: https://steemitimages.com/DQmfJBE1PwFdgFCM6pyDrfeBmYZnMP7xK3jK338nWgDxQ8g/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


晚上用IPad连接我自己的DIY的无线音箱，喝着咖啡听着歌，觉得很是惬意。但是突然回想起我当时是如何搭建的这个WIFI无线音箱呢？竟然发现忘得一干二净。其实相比一个WIFI音箱，我更享受折腾的乐趣，如果哪天只会使用WIFI音箱听歌，而不会折腾了，我会觉得很无聊的。

找了一下，当初[折腾这个音箱](https://steemit.com/cn/@oflyhigh/don-t-think-too-much-let-s-listen-to-the-music)是10多个月以前，当时 dan 宣布离开STEEMIT，而且STEEM币价低迷，一个帖子多说只能得一两块钱，整个社区都很萧条。于是我闲着没事折腾了这个WIFI音箱，听听歌，放松一下。

现在STEEM和STEEMIT网站都很热，与十个月前的低迷形成了鲜明的对比，但是是不是也应该听听歌，放松一下呢？十个月前的帖子，没有记录自己怎么弄的，现在重新折腾一下吧。

![](https://steemitimages.com/DQmfJBE1PwFdgFCM6pyDrfeBmYZnMP7xK3jK338nWgDxQ8g/image.png)

![](https://steemitimages.com/DQmWycxRNFjq8TP9MqV5UFjAZmzfgVihrijTihcbSnhCJKg/image.png)

音箱图和RaspberryPi 就不重新拍啦，懒。

# 下载和烧写Raspberry Pi 系统

我这个设备是Raspberry Pi B+，大概4年以前的设备啦，比较老。不过无论新老设备使用都差不多啦。


首先，来这里下载系统：
https://www.raspberrypi.org/downloads/raspbian/

如何烧写系统参考这里：
https://www.raspberrypi.org/documentation/installation/installing-images/README.md

# 配置网络

如果你使用网线，那么无需做啥配置，直接用DHCP就可以啦。到路由器的设备管理中，找到对应设备，看一下IP，就可以用 Putty登陆啦。默认的用户名密码为：***`pi/raspberry`***

如果要配置无线网，相对麻烦点。我比较懒，直接改配置文件：

`sudo vi /etc/network/interfaces`

```
allow-hotplug wlan0
iface wlan0 inet static
wpa-ssid MYWIFI
wpa-psk 12345678
address 192.168.1.52
netmask 255.255.255.0
gateway 192.168.1.1
network 192.168.1.0
```
其中`wpa-ssid`对应你WIFI的网络ID，`wpa-psk`对应你WIFI的密码

哦，对了，Raspberry Pi新出的型号都自带无线网卡，老型号则需要自己安装无线网络，可以搜索一下适用于Raspberry Pi的免驱网卡，我用的EDUP什么黄金版的免驱网卡，之前自己弄个TPLINK的，驱动起来费了九牛二虎之力，现在也早就忘记当时咋驱起来的。

# 升级系统

在进行操作之前，先升级一下系统软件。
`sudo apt-get update`
`sudo apt-get upgrade`

# 安装和配置shairport

#### 安装必要的软件包

首先，需要安装一些必要的软件包，否则下边的步骤可能出错
`sudo apt-get install git libao-dev libssl-dev libcrypt-openssl-rsa-perl libio-socket-inet6-perl libwww-perl avahi-utils libmodule-build-perl`

#### 安装Perl Net-SDP

```
git clone https://github.com/njh/perl-net-sdp.git
cd perl-net-sdp
perl Build.PL
sudo ./Build
sudo ./Build test
sudo ./Build install
cd ..
```

#### 安装shairport

```
git clone https://github.com/hendrikw82/shairport.git
cd shairport
make
```

运行如下指令：
`./shairport.pl -a AirPlay`

我们就可以从IPad或者IPhone等苹果设备连接我们的无线音箱啦。

测试没问题的话，使用如下指令完成安装：
```
sudo make install
sudo cp shairport.init.sample /etc/init.d/shairport
cd /etc/init.d
sudo chmod a+x shairport
sudo update-rc.d shairport defaults
```

# 来听歌吧

现在就可以享受我们的WIFI无线HIFI系统啦，不要纠结到底HIFI不HIFI，自己HIGH就好，哈哈。哦，对了， 别忘记把树莓派和音箱连接起来，否则你懂的。

![WeChat Image_20180106195346.png](https://steemitimages.com/DQmRseFH2Bb36JSi8gDYYQQuGNqhbhCMGnC43oxHTao4cAe/WeChat%20Image_20180106195346.png)

![WeChat Image_20180106195332.png](https://steemitimages.com/DQmY9LXX4ptN9n4RJnzhhhvyGiMuDNkcCrJvAKLdXuwsiw5/WeChat%20Image_20180106195332.png)

看到弹出来的菜单吗，多出来的设备就是我们的树莓派AirPlay系统啦。如果不喜欢这个名字，可以自己改一下啦

`sudo vi /etc/init.d/shairport`
将
`DAEMON_ARGS="-w $PIDFILE"`
改成：
`DAEMON_ARGS="-w $PIDFILE -a MyAirPlay"`

这回安静地听歌吧。

# 参考链接

* [Raspberry Pi Airplay Tutorial](https://www.raywenderlich.com/44918/raspberry-pi-airplay-tutorial)
* [别想太多，来听歌吧 / Don't think too much, Let's listen to the music!](https://steemit.com/cn/@oflyhigh/don-t-think-too-much-let-s-listen-to-the-music)

- - -

This page is synchronized from the post: [来听歌吧，使用Raspberry Pi 搭建自己的WIFI HIFI音响系统](https://steemit.com/@oflyhigh/raspberry-pi-wifi-hifi)
