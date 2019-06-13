
---
title: '在Windows下最佳的Linux开发环境 - The Ubuntu Sub System (New Bash Shell) in Windows 10'
permlink: windows-linux-the-ubuntu-sub-system-new-bash-shell-in-windows-10
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2017-08-24 19:35:06
categories:
- cn
tags:
- cn
- cn-programming
- ubuntu
- subsystem
- linux
thumbnail: https://helloacm.com/wp-content/uploads/2017/01/turn-windows-subsystem-for-linux-beta.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


The Ubuntu Sub System (New Bash Shell) in Windows 10 is a truly Linux kernel (unlike cygwin, which is just a shell).  It means that you can compile on Windows in the Sub System to Linux [COFF](https://en.wikipedia.org/wiki/COFF) binary file which also works if you copy that to the Linux system. It works vice versa. 

I am developing some scripts and bots using Python3, and I found it simpler and convenient  to use this [Ubuntu](https://helloacm.com/how-to-setup-hhvm-on-the-ubuntu-vps/) Sub System on Windows 10.  I am a Windows OS user and a casual Linux fan, and this works best for me.

It is more than enough if you want to develop some scripts (Python, BASH etc) for Linux. So you have the best of both worlds, while you still can enjoy Windows for the [Gaming](https://helloacm.com/coding-considerations-for-online-gaming/), legacy software, Windows Batch CMD and if you are a geek, you still can write and run your scripts quickly e.g. awk, sed ...

On the [New Bash Shell](https://helloacm.com/linux-bash-shell-echo-this-if-you-get-angry/), your windows Disk structure is mounted at /mnt/c, /mnt/d ... so yes, it is a real sub-system instead of a emulator.

很多人都是习惯于用[WINDOWS](https://justyy.com/archives/3475)，或者说离不开WINDOWS 操作系统。有时候程序员又想同时开发LINUX相关的软件，这就比较麻烦：有时候需要把本地的数据传到远程或者从远程下载数据。

之前有过 cygwin, 但是这个是相对不成熟的环境，在这个环境里用 gcc 编译出来的二进制代码执行效率要低的多，而且生成的也是 WIN32 PE可执行格式。

现在好了，[WINDOWS 10](https://justyy.com/archives/1882) 和 UBUNTU 合作，提供了一个 The Ubuntu Sub System，这个可不是简单的环境模拟，这个是真正的UBUNTU 内核内嵌。举个例子来说，你可以从真正UBUNTU操作系统拷贝一个[COFF](https://zh.wikipedia.org/wiki/COFF)二进制文件到WINDOWS 10的这个内核中可以完全一样的执行，相反也一样。

您可以在控制面版里添加：
![](https://helloacm.com/wp-content/uploads/2017/01/turn-windows-subsystem-for-linux-beta.jpg)

比如安装GCC编译器:
![](https://helloacm.com/wp-content/uploads/2017/01/apt-get-install-on-windows.jpg)

这些命令都完全一样，完全一样指的是获取镜像软件更新的地址都是一样的。
```
apt-get update
apt-get autoremove
apt-get upgrade
apt-get dist-upgrade
```

和CYGWIN不一样，WINDOWS系统文件是在被 mount 到 /mnt/c,  /mnt/d 这个是比较符合逻辑的。
![](https://helloacm.com/wp-content/uploads/2017/01/bash-on-windows-some-command.jpg)
![](https://helloacm.com/wp-content/uploads/2017/01/bash-shell-directory-structure.jpg)

VI编辑器：
![](https://helloacm.com/wp-content/uploads/2017/01/bash-vim-editor.jpg)

htop:
![](https://helloacm.com/wp-content/uploads/2017/01/htop-on-bash-shell-windows.jpg)

通过命令 `lsb_release -a` 来查看版本信息：
```
# lsb_release -a
No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu 14.04.5 LTS
Release:        14.04
Codename:       trusty
```

你可以把这些开发工具都装上：Python3, Python2, lua, gcc, java。
![](https://steemitimages.com/DQmP7XRxLjK37oDzsnWyHgqqZrCRv8PNin6exyDBCJwNvwi/image.png)

这样来开发steem相关的程序要方便得多，**因为，你并不需要专门去找一台LINUX的服务器（如VPS）。**

![](https://justyy.com/wp-content/uploads/2017/07/justyy-steemit.png)

Originally published at https://steemit.com Thank you for reading my post, feel free to Follow, Upvote, Reply, ReSteem (repost) @justyy which motivates me to create more quality posts.

原创 https://Steemit.com 首发。感谢阅读，如有可能，欢迎Follow, Upvote, Reply, ReSteem (repost) @justyy 激励我创作更多更好的内容。

 // 稍后同步到我的[中文博客](https://justyy.com)和英文[计算机](https://helloacm.com)[博客](https://codingforspeed.com)。
- [The Ubuntu Sub System (New Bash Shell) in Windows 10](https://helloacm.com/the-ubuntu-sub-system-new-bash-shell-in-windows-10/)
- [在Windows下最佳的Linux开发环境](https://justyy.com/archives/5165)

# 近期热贴
- [LOGO 海龟作画 系列 一 之 给孩子最好的编程启蒙语言](https://steemit.com/cn/@justyy/logo-logo-turtle-graphics-series-1-best-introductory-programming-for-kids)
- [通过脑残语言来保护你的STEEM钱包密码](https://steemit.com/cn/@justyy/steem-use-brainfuck-to-protect-your-steem-wallet-password-s)
- [不会写程序也能自动点赞 - 通过 SteemVoter 添加点赞规则](https://steemit.com/cn/@justyy/steemvoter)
- [你好秋天，英国8月份的到Hitchin看薰衣草](https://steemit.com/cn/@justyy/8-hitchin)
- [Fen Drayton村每年举行1万米比赛](https://steemit.com/cn/@justyy/fen-drayton-1)
- [碎碎念第365天](https://steemit.com/cn/@justyy/365-the-day-365-at-steemit)
- [出租 SP 的一些经验之谈](https://steemit.com/cn/@justyy/sp)
- [很好用的 桌面版 Steem 钱包 - Vessel](https://steemit.com/cn/@justyy/steem-vessel)
- [节流、开源、投资](https://steemit.com/cn/@justyy/3stbmm)
- [出租些SP 当一回债主 - 怎么样把你多余的SP租出去收点利息？](https://steemit.com/cn/@justyy/sp-sp)
- [性能评估软件说我写了几行无用的代码](https://steemit.com/cn/@justyy/the-profiler-told-me-i-wrote-some-useless-code-an-example-of-defensive-programming)
- [步子迈太大容易扯到蛋](https://steemit.com/cn/@justyy/4z2jif)

# Recent Popular Posts 
- [Logo Turtle Graphics - Series 1 - Best Introductory Programming for Kids](https://steemit.com/cn/@justyy/logo-logo-turtle-graphics-series-1-best-introductory-programming-for-kids)
- [Use BrainFuck to Protect Your Steem Wallet Password(s)](https://steemit.com/cn/@justyy/steem-use-brainfuck-to-protect-your-steem-wallet-password-s)
- [Hello Autumn! Hello Lavender](https://steemit.com/cn/@justyy/8-hitchin)
- [The Day 365 at SteemIt](https://steemit.com/cn/@justyy/365-the-day-365-at-steemit)
- [The profiler told me I wrote some useless code](https://steemit.com/cn/@justyy/the-profiler-told-me-i-wrote-some-useless-code-an-example-of-defensive-programming)

![](https://justyy.com/gif/steemit.gif)
Tags: #cn #cn-programming #ubuntu #subsystem #linux

- - -

This page is synchronized from the post: [在Windows下最佳的Linux开发环境 - The Ubuntu Sub System (New Bash Shell) in Windows 10](https://steemit.com/@justyy/windows-linux-the-ubuntu-sub-system-new-bash-shell-in-windows-10)
