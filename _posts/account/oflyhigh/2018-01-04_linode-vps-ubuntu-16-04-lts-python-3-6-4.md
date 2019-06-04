
---
title: '如何在Linode VPS (Ubuntu 16.04 LTS )上安装 Python 3.6.4'
permlink: linode-vps-ubuntu-16-04-lts-python-3-6-4
catalog: true
toc_nav_num: true
toc: true
date: 2018-01-04 14:33:33
categories:
- python
tags:
- python
- cn
- cn-programming
- ubuntu
thumbnail: https://steemitimages.com/DQmTYbRCKX9Enq1PnZ3kCzd6ZNbLyD9vPg5gH8nBsz6ZLC6/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在我之前的和steem以及bitshares相关的系列文章中，不少代码使用的Python语言。

在我的Linode VPS 上，有两个版本的Python，分别是***Python 2.7.12***以及***Python 3.5.2***，但是作为一个有强迫症的半吊子程序员，总是希望折腾最新的版本。尽管新版本的先进功能和特性我可能几乎都用不到甚至不知道，但是这又有什么关系呢？

言归正传，我们来讲讲怎么在Linode VPS 上安装 Python.

![](https://steemitimages.com/DQmTYbRCKX9Enq1PnZ3kCzd6ZNbLyD9vPg5gH8nBsz6ZLC6/image.png)
(图源 ：Bing(http://bing.com))

对了，说一下，我的VPS的OS是***`Ubuntu 16.04 LTS `***
如何购买和安装VPS这里就不再赘述啦。

# 安装前的准备

在编译和安装Python之前，我们需要进行一些准备工作。

#### 更新系统
指令如下：
`sudo apt-get update`
`sudo apt-get upgrade`

#### 安装必要的软件包
指令如下:
`sudo apt-get install build-essential libsqlite3-dev sqlite3 bzip2 libbz2-dev libssl-dev openssl libgdbm-dev liblzma-dev libreadline-dev libncursesw5-dev`

有些软件包不安装Python也能编译通过，但是当我们需要使用某些模块时，可能就会出诡异的事情啦，比如说在此处省略` libsqlite3-dev sqlite3`，那么使用时将会出现***sqlite3无法导入(virtualenv下)错误***，到时候唯一的办法是回头重新编译，那可是大费周折。我可是折腾好久才整明白这个问题的。为了一劳永逸，此处都多费点功夫啦。

#### 创建目标目录

你可以放任何目录啦，其实我也是瞎放的
指令如下：
`sudo mkdir /opt/python`
`sudo chmod 777 /opt/python`

# 编译并安装Python

去Python官方查看当前最新Releases版本，要搞当然就搞最新版本啦。
>[Latest Python 3 Release - Python 3.6.4](https://www.python.org/downloads/release/python-364/)

#### 下载Python 3.6.4 的安装包
我们可以在此处获得最新版本代码的下载链接：https://www.python.org/downloads/source/
使用wget 下载代码包
指令如下：
`wget https://www.python.org/ftp/python/3.6.4/Python-3.6.4.tgz`

#### 解压安装包并进入目录
指令如下：
`tar xzvf Python-3.6.4.tgz`
`cd Python-3.6.4/`

#### 执行配置，设置安装目标目录
我就是随便配配啦。
指令如下：
`./configure --prefix="/opt/python/3.6.4/"`
可以使用` ./configure --help `查看更多的配置选项

#### 编译
配置成功后就可以编译啦
指令如下：
`make`

#### 安装
在VPS上build是超级快啦，大约一盏茶的功夫，就编译完啦，当然了，这个一盏茶的功夫取决于你是细细品味还是一饮而尽。如果你觉得不够快，就换高级别的VPS啦。

看，我打完上边的两排字，Python就编译完成了，接下来安装即可。
指令如下：
`make install`

# 测试

一切顺利的话，我们就完工啦。
但是还是测试一下比较放心。

启动交互环境:
`/opt/python/3.6.4/bin/python3`
![](https://steemitimages.com/DQmUXJqnSpX8E6v2qR3TsGrj8NXFnwjD2p1MXFCMHSbatFo/image.png)

耶，一切正常，成功安装。
现在来和大家打个招呼吧
![](https://steemitimages.com/DQmeHjoqvSDMy2CREE48BwDJBQrHeDYoXM9w49NiqKWuZ9z/image.png)
半吊子程序员也有职业病，见谅见谅。


# 参考链接
* https://www.python.org/
* https://github.com/python/cpython
* https://www.python.org/downloads/source/
* https://www.python.org/downloads/release/python-364/
* https://docs.python.org/3/using/unix.html#building-python
* [What’s New In Python 3.6](https://docs.python.org/3/whatsnew/3.6.html)

- - -

This page is synchronized from the post: [如何在Linode VPS (Ubuntu 16.04 LTS )上安装 Python 3.6.4](https://steemit.com/@oflyhigh/linode-vps-ubuntu-16-04-lts-python-3-6-4)
