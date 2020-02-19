
---
title: '在香蕉派(Banana Pi)M3上安装matplotlib'
permlink: banana-pi-m3-matplotlib
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-09-25 00:08:48
categories:
- cn
tags:
- cn
- matplotlib
- python
- pip
- bananapi
thumbnail: 'https://cdn.steemitimages.com/DQmZbEt3rgSjajNXkZzLTFngw7bnZy4Bin8R2YsYMDJWUhz/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


打算在香蕉派(Banana Pi)M3上用一下matplotlib，执行安装指令后，出了一大堆错误，安装也没有成功。

![](https://cdn.steemitimages.com/DQmZbEt3rgSjajNXkZzLTFngw7bnZy4Bin8R2YsYMDJWUhz/image.png)

# 安装出错

安装指令如下(virtualenv下)：
>`pip install matplotlib`

随便截取一些出错内容：
>![](https://cdn.steemitimages.com/DQmWrTTaYmPmL6Tpy3UbkChKbogaHEwewfREUaBkwxqfV4Y/image.png)
>
>![](https://cdn.steemitimages.com/DQmSeRHugrv8HLWy4n4rpdtWSv8LQFPKh8bKUbwBkVbc1vD/image.png)

看提示信息，主要是在编译numpy时候出错。

# 解决办法

在numpy的官方github上找到一个反应相同问题的issue: [Failed to build v1.17.0 on CentOS7 with default gcc (4.8) #14147](https://github.com/numpy/numpy/issues/14147)，其中有人给出这样的解决方案：
>`CFLAGS=-std=c99 pip install numpy==1.17.0`

再看出错提示信息中的部分内容，或许这真的是一个办法呢
>numpy/core/src/npysort/radixsort.c.src:112:5: error: ‘for’ loop initial declarations are only allowed in C99 or C11 mode

>numpy/core/src/npysort/radixsort.c.src:112:5: note: use option -std=c99, -std=gnu99, -std=c11 or -std=gnu11 to compile your code

不过现在最新发行版已经是1.17.2了，另外我觉得C11要比C99新一些，用C11是不是会更好一些呢？于是我将指令修改为：
`CFLAGS=-std=c11 pip install numpy==1.17.2`

最终果然编译并安装成功(numpy)：
>Successfully built numpy
Installing collected packages: numpy
Successfully installed numpy-1.17.2

再次执行如下指令：
>`pip install matplotlib`

一切顺利，终于安装成功啦，终于又可以愉快地玩耍啦。

# 补充

记得以前用如下指令可以直接安装(非virtualenv环境)：
>`sudo apt-get install python3-matplotlib`

但是这次尝试，部分文件提示找不到（404  Not Found）
>![](https://cdn.steemitimages.com/DQmSV9jtwjayni54NLhuXBFMRy5VLETRtVfedF9bKkeFzBb/image.png)

反正pip安装方式搞定了，懒得深究上述错误啦。

# 相关链接
* [Failed to build v1.17.0 on CentOS7 with default gcc (4.8) #14147](https://github.com/numpy/numpy/issues/14147)
* [Installing Numpy using pip3 on Ubuntu - Error “Command failed with exit status 1”](https://askubuntu.com/questions/1167666/installing-numpy-using-pip3-on-ubuntu-error-command-failed-with-exit-status-1)

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>

- - -

This page is synchronized from the post: ['在香蕉派(Banana Pi)M3上安装matplotlib'](https://steemit.com/@oflyhigh/banana-pi-m3-matplotlib)
