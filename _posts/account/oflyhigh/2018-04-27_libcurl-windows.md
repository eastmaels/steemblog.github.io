
---
title: '每天进步一点点：终于搞定了libcurl Windows下编译'
permlink: libcurl-windows
catalog: true
toc_nav_num: true
toc: true
date: 2018-04-27 15:26:06
categories:
- curl
tags:
- curl
- libcurl
- windows
- cn-programming
- cn
thumbnail: https://steemitimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在昨天的帖子[每天进步一点点：C++ 中使用libcurl 获取返回数据的学习](https://steemit.com/libcurl/@oflyhigh/c-libcurl)中，大致学会了怎么用libcurl 向网站POST或者GET数据，以及如何将返回数据存储到变量。

![](https://steemitimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png)
(图源 ：[pixabay](https://pixabay.com/))

今天突发奇想，在Windows下测试一下嘛。结果一下子掉坑里了，一整天都在晕如何在Windows下编译。研究了一大堆网页，迷糊到爆炸的时候，才发现人家官方就有Windows下编译指南，我这一天干得都啥事啊。尽管如此，操作起来还是很麻烦，踩了一堆坑，记录如下，备忘以及供需要的朋友参考吧。

# 步骤

#### 下载源码

首先去[github的对应页面](https://github.com/curl/curl)下载curl代码，至于在Windows下你是用的git还是直接下我就不管啦，我直接下的[zip](https://github.com/curl/curl/archive/master.zip).

下载好了之后，解压zip文件。

####  启动编译工具

在开始菜单中查找： 'Developer Command Prompt for VS  \<version\>' 

比如我安装的是VS2015，那么对应的工具就是：'Developer Command Prompt for VS2015'，启动它，进入命令行窗口。

![](https://steemitimages.com/DQmPyKq5WtFbpWy5jUZ5w98w5t6LKXx3Vse2RWUSpGtCfGZ/image.png)

进入我们解压好的目录，比如我这里：
`cd C:\Users\oflyhigh\Downloads\curl-master\curl-master`

#### 执行 buildconf.bat

![](https://steemitimages.com/DQmWH9dPLwt8AfRDDCNGzuBWqbXd4dxxbUQXtTGizDDyZw6/image.png)

Github的编译文档中没有提到这个，但是这个步骤和重要，否则编译时会出如下错误：
>Copying libs...
NMAKE : fatal error U1073: don't know how to make '..\src\tool_hugehelp.c'
Stop.
NMAKE : fatal error U1077: '"C:\Program Files (x86)\Microsoft\Visual Studio 14.0\VC\BIN\nmake.exe"' : return code '0x2'
Stop.

#### 编译

进入到winbuild目录
`cd winbuild`

执行编译指令：
`nmake /f Makefile.vc mode=static DEBUG=no VC=14 MACHINE=x86`

有关编译指令的选项说明请参考：
https://github.com/curl/curl/blob/master/winbuild/BUILD.WINDOWS.txt

对于上述指令而言，编译静态库，关闭调试，目标机器X86，编译工具版本为VC14

# 测试

编译成功后，我们会在项目目录下生成
`builds\libcurl-vc14-x86-release-static-ipv6-sspi-winssl`目录，其中包含如下内容：
![](https://steemitimages.com/DQmWsXWbvj4htQmMVQmcobXzL4xGGNMWC96sqciEZ1uqREc/image.png)

分别是可执行文件、头文件以及静态库。

然后我们来测试一下我们编译出来的curl.exe是否好用，来试试读取创世块：
>`curl.exe --data "{\"id\":1,\"jsonrpc\":\"2.0\",\"method\":\"call\",\"params\":[\"database_api\",\"get_block\",[1]]}" https://api.steemit.com`

![](https://steemitimages.com/DQmWZPBnQiZbE3VLSvV1i1j2wqcNBJqgk2qBX7VqnkCMUCR/image.png)
一切正常！


# 参考文件

* https://github.com/curl/curl/blob/master/winbuild/BUILD.WINDOWS.txt
* [每天进步一点点：C++ 中使用libcurl 获取返回数据的学习](https://steemit.com/libcurl/@oflyhigh/c-libcurl)

- - -

This page is synchronized from the post: [每天进步一点点：终于搞定了libcurl Windows下编译](https://steemit.com/@oflyhigh/libcurl-windows)
