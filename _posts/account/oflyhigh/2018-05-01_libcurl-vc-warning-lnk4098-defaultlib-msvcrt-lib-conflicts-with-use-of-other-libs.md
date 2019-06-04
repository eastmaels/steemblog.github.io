
---
title: '解决libcurl VC工程下： "warning LNK4098: defaultlib ''msvcrt.lib'' conflicts with use of other libs;" 错误'
permlink: libcurl-vc-warning-lnk4098-defaultlib-msvcrt-lib-conflicts-with-use-of-other-libs
catalog: true
toc_nav_num: true
toc: true
date: 2018-05-01 07:14:00
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


之前费了九牛二虎之力，在Windows下编译出了libcurl：[每天进步一点点：终于搞定了libcurl Windows下编译](https://steemit.com/curl/@oflyhigh/libcurl-windows)。

![](https://steemitimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png)
(图源 ：[pixabay](https://pixabay.com/))

但是光编译出来不行，我是要拿来使用的啊，于是尝试在MFC对话框工程中加入并使用它，结果一堆错误提示啊，哎，着实心累。不过自己挖的坑，无论如何也要填上，否则岂不是变坑王了（其实已经差不多是了）

# libcmt.lib 与 msvcrt.lib 冲突
咳咳，经过一系列的设置，总结解决了大部分错误，但是又出现了如下警告信息：
>1>libcmt.lib(initializers.obj) : warning LNK4098: defaultlib 'msvcrt.lib' conflicts with use of other libs; use /NODEFAULTLIB:library

其实吧，光这么一条警告信息我就不搭理它了，冲突就冲突呗，谁怕谁呀。然而它后边还跟着无数条类似如下的错误，这就没法了：
>1>libcurl_a.lib(strerror.obj) : error LNK2001: unresolved external symbol __imp__strerror

一般我解决问题的方法都是受那个啥啥点读笔广告的提示：**哪里不会点哪里**，当然了，我将之换成**哪里不对改哪里**。既然提示有冲突，让用 /NODEFAULTLIB:library，那咱就去加上呗。

在项目属性->Release->Linker->Command Line->Additional Options中加入如下语句：
>` /NODEFAULTLIB:LIBCMT  `

重新编译，搞定了。

尽管搞定了，但是了解一下具体相关原因还是要做的。大致情况是这样的：

在**Project -> Properties -> C/C++ -> Code Generation -> Runtime Library**中有四个选项：
![](https://steemitimages.com/DQmPfzZzMZo2LyhXwuZpAbyVBUb1EQvqiCw2pjjA9AcVqPo/image.png)

这四个选项对应四个库
* libcmt.lib: static CRT link library for a release build (/MT)
* libcmtd.lib: static CRT link library for a debug build (/MTd)
* msvcrt.lib: import library for the release DLL version of the CRT (/MD)
* msvcrtd.lib: import library for the debug DLL version of the CRT (/MDd)

然后呢，我们在程序中引入其它库的时候，**应该保证这些库和程序本身都使用相同的配置，否则就可能有冲突，或者导致有些函数无法解析。**（额，这不正是我们遇到的问题和症状嘛）

虽然我们通过禁用libcmt.lib，让程序工作（貌似正常），但谁知道有木有隐患呢。

# set RTLIBCFG=static

既然我们知道了错误以及冲突是由于程序本身和程序使用的库配置不同所导致，那么其实有三个思路：
* 一是禁用掉其中一个库（第三方库中的没法禁用掉？）
* 让程序使用和第三方库相同的设置（比如设置成/MD)
* 使用和程序相同的设置编译第三方库

其实我觉得第三个方法才是终极解决方案。但是如何将libcurl编译，才能让它使用libcmt.lib（/MT）呢？答案是在编译之前，设置编译环境的环境变量：
>`set RTLIBCFG=static`

再执行对应的编译步骤进行编译即可。
详细步骤参考：https://steemit.com/curl/@oflyhigh/libcurl-windows

编译完成后，复制生成的库和头文件到对应的项目目录，然后去掉` /NODEFAULTLIB:LIBCMT  `，重新编译，一切正常！（请记得务必` /NODEFAULTLIB:LIBCMT  `，否则你懂的，哈哈）

# 总结

看是很小很小的问题，只需一个选项搞定（`set RTLIBCFG=static`），但是却折磨我好久好久，好在终于解决了，可以松口气喽。

# 参考链接

* [每天进步一点点：终于搞定了libcurl Windows下编译](https://steemit.com/curl/@oflyhigh/libcurl-windows)

- - -

This page is synchronized from the post: [解决libcurl VC工程下： "warning LNK4098: defaultlib ''msvcrt.lib'' conflicts with use of other libs;" 错误](https://steemit.com/@oflyhigh/libcurl-vc-warning-lnk4098-defaultlib-msvcrt-lib-conflicts-with-use-of-other-libs)
