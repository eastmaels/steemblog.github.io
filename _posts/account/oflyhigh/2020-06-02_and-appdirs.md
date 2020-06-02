
---
title: '每天进步一点点：配置文件 & appdirs'
permlink: and-appdirs
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-06-02 04:52:12
categories:
- cn
tags:
- cn
- cutehive
- cn-programming
- study
- appdirs
- python
thumbnail: 'https://images.hive.blog/DQmZK97WoSNVCupacEEB5zZh3kneM6fAocJf8nMHnEyD1Rm/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


对于很多应用程序来讲，为了方便用户使用，都需要保存一些信息，比如配置信息、用户数据等等。这一般有几种方式，比如说配置文件、注册表、数据库等，本质上Windows中的注册表也是一种数据库。


![image.png](https://images.hive.blog/DQmZK97WoSNVCupacEEB5zZh3kneM6fAocJf8nMHnEyD1Rm/image.png)
(图源 ：[pixabay](https://pixabay.com/))

# 注册表

这几种方式我最不喜欢的就是注册表了，尽管注册表操作起来还是很简单的(`RegOpenKeyEx`、`RegQueryValueEx`、`RegSetValueEx`等)，但是我总觉得，这样做应用程序就不是那么绿色环保了。

那些所谓的安全卫士等软件，很多也是靠清理垃圾注册表项才发家的，所以我觉得Windows应用越少写注册表越好，所以自己的程序也尽量避免。

# 配置文件

Windows下提供了很方便的配置文件操作API，主要有两个函数：`GetPrivateProfileString`以及`WritePrivateProfileString`。

尽管文档中说了相关API只是为了兼容和保留，推荐使用注册表：
>***Note***  This function is provided only for compatibility with 16-bit versions of Windows. Applications should store initialization information in the registry.

但是Win10中，相关函数依然工作正常，我又不喜欢用注册表，那当然还是用它喽，比如我的字模程序，用着就好好的：

# Python 中的配置文件

Python中简单一些配置文件，直接用普通的文件读写就搞定了（或者直接用py文件导入）。

略复杂配置的可以用[configparser](https://docs.python.org/3/library/configparser.html)来实现，用起来还是超级简单的。

这里不做过多介绍了，大家感兴趣的话看文末链接文档就好。

# 用户/应用目录等

配置文件一般可以保存在和执行程序相同的目录，但是假设有N个在不同目录中的程序可能用到相同的内容，放到执行程序所在的目录就不是那么明智了。

Windows中可以选将一些设置和数据放到用户目录，比如说`%USERPROFILE%` `%APPDATA% ` 等，这些目录可以通过环境变量获取，比如Windows如下命令：
>`echo %APPDATA%`

就会返回：
>![image.png](https://images.hive.blog/DQmbXHTLWpxVrDqjLBELJqe9TWphqbQJ9tFGs3YKKAb7pde/image.png)

在Windows程序中，则可以通过`GetEnvironmentVariable`函数获取。


# appdirs 

说了半天，这个才是重点，就是Linux环境下，Python怎么获取用户数据目录或者应用目录。

这就要用到appdirs这个模块了，其实这个模块在Windows下也能用，不过就不去探究了。

在Linux下，使用如下方式，就可以获取用户/应用对应的数据目录了：
>`from appdirs import user_data_dir`
`appname="cutehive"`
`appauthor = "oflyhigh"`
`config_dir = user_data_dir(appname, appauthor)`

上述代码得到的目录路径为：
>`.local/share/cutehive`

这样，我们就可以在对应的目录中愉快地写入配置文件、数据、数据库等内容了，而不必自己关心和维护路径信息了。

这样做还有一个好处就是，支持跨平台操作（Windows、MacOS等），然而对我而言，倒是暂时不需要考虑呢。

# 相关链接
* https://docs.microsoft.com/en-us/windows/win32/api/winreg/
* https://docs.microsoft.com/en-us/windows/win32/api/winbase/
* https://docs.python.org/3/library/configparser.html
* https://docs.microsoft.com/en-us/windows/win32/api/winbase/nf-winbase-getenvironmentvariable
* https://github.com/ActiveState/appdirs

- - -

This page is synchronized from the post: ['每天进步一点点：配置文件 & appdirs'](https://steemit.com/@oflyhigh/and-appdirs)
