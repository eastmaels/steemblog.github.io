
---
title: 'How to install python 3.5 on Banana-Pi M3 / 如何香蕉派上的安装python 3.5'
permlink: how-to-install-python-3-5-on-banana-pi-m3-python-3-5
catalog: true
toc_nav_num: true
toc: true
date: 2017-02-09 04:00:51
categories:
- bananapi
tags:
- bananapi
- python
- cn
- raspbian
- raspberrypi
thumbnail: http://www-banana--pi-org-cn-static.smartgslb.com/images/bpi-images/M3/m32.jpg
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![M3](http://www-banana--pi-org-cn-static.smartgslb.com/images/bpi-images/M3/m32.jpg)

香蕉派M3，确切的说是raspbian的这个版本上自带的Python 版本是3.4.2
其实我觉得已经完全够用了，小版本之间差异不会太大，有些新特性啥的，咱可以不用啊

但是最近更新了piston的新版本，发现更新后运行不起来啦，错误提示
````
File "xxxxxx/steem/steem.py", line 632
**s,
^
SyntaxError: invalid syntax
````
去github提交issue，以及阅读代码，发现其实是个小问题
如下代码在Python 3.4.2上就提示错误，但是在3.5上就正常运行
```
foo = {'1': 1}

def bar(*args, **kwargs):
     print(kwargs)

bar(**foo, baz=2)
````

其实，把传入参数的顺序调换一下，改成`bar(baz=2， **foo)`
在Python 3.4.2 上就正常啦。
我尝试按上述思路改了steem.py 的三处内容，在python 3.4.2上跑着没有问题。

但是为啥又要装3.5呢? 答案，折腾玩呗。言归正传

# 安装前的准备

* 首先，更新一下系统
`sudo apt-get update`
`sudo apt-get upgrade`


* 安装必要的软件包
`sudo apt-get install build-essential libsqlite3-dev sqlite3 bzip2 libbz2-dev libssl-dev openssl libgdbm-dev liblzma-dev libreadline-dev libncursesw5-dev`
之前没有安装这些软件包，但是编译出来的python 3.5.3 缺少模块，sqlite3无法导入(virtualenv下)

* 创建目标目录
`sudo mkdir /opt/python`
`sudo chmod 777 /opt/python`


# 编译并安装Python 3.5.3
* 下载Python 3.5.3的安装包
`wget https://www.python.org/ftp/python/3.5.3/Python-3.5.3.tgz`

* 解压安装包并进入目录
`tar xzvf Python-3.5.3.tgz`
`cd Python-3.5.3/`

* 执行配置，设置安装目标目录
`./configure --prefix="/opt/python/3.5.3/"`
这个安装目录自己随意，记得有读写权限就好
查看更多的配置选项： `./configure --help`

* 编译
`make`

出故障了：（
```
gcc -pthread -c -Wno-unused-result -Wsign-compare -DNDEBUG -g -fwrapv -O3 -Wall -Wstrict-prototypes    -Werror=declaration-after-statement   -I. -I./Include    -DPy_BUILD_CORE -o Objects/unicodeobject.o Objects/unicodeobject.c
Objects/unicodeobject.c: In function ‘unicode_repeat’:
Objects/unicodeobject.c:12331:1: internal compiler error: Segmentation fault
 }
 ^
Please submit a full bug report,
with preprocessed source if appropriate.
See <file:///usr/share/doc/gcc-4.9/README.Bugs> for instructions.
Preprocessed source stored into /tmp/ccb3kJxK.out file, please attach this to your bugreport.
```
查了半天`internal compiler error: Segmentation fault` 也没啥好的解决方案，都说让去提交bug
问题是提交了猴年马月能盼到回复呢，想点啥办法呢

一般越是复杂的东西编译越容易出问题吧，随便试试降低一下优化

* 改成O2，手工执行
`gcc -pthread -c -Wno-unused-result -Wsign-compare -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes    -Werror=declaration-after-statement   -I. -I./Include    -DPy_BUILD_CORE -o Objects/unicodeobject.o Objects/unicodeobject.c`
居然奇迹般的通过了

* 重新编译
`make`
神奇的成功了

* 安装
`make install`

# 简单测试

* 看一下版本
 `/opt/python/3.5.3/bin/python3 --version`
`Python 3.5.3`

* 运行一下上边的例子
输出：`{'baz': 2, '1': 1}`

一切正常：）



# 参考内容

GCC中-O1 -O2 -O3 优化的原理是什么？
https://www.zhihu.com/question/27090458

PS: 
把这个过程写下来，一则做个备忘，二则给遇到同样问题的朋友一点参考
我是初学者，边学边试边玩，有错漏的地方，烦请各位大神指正。

- - -

This page is synchronized from the post: [How to install python 3.5 on Banana-Pi M3 / 如何香蕉派上的安装python 3.5](https://steemit.com/@oflyhigh/how-to-install-python-3-5-on-banana-pi-m3-python-3-5)
