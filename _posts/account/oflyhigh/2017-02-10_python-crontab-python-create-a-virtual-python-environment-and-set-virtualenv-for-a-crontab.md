
---
title: '创建虚拟Python环境以及在crontab中运行虚拟Python环境/  Create a virtual Python environment and set virtualenv for a crontab'
permlink: python-crontab-python-create-a-virtual-python-environment-and-set-virtualenv-for-a-crontab
catalog: true
toc_nav_num: true
toc: true
date: 2017-02-10 12:34:24
categories:
- bananapi
tags:
- bananapi
- python
- cn
- virtualenv
- crontab
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

在前文中我记录了如何安装Python 3.5.3:
[How to install python 3.5 on Banana-Pi M3 / 如何香蕉派上的安装python 3.5](https://steemit.com/bananapi/@oflyhigh/how-to-install-python-3-5-on-banana-pi-m3-python-3-5)

那么问题来了，系统原来带了Python 3.4.2 以及 Python 2.7.9，现在又多了个 Python 3.5.3
那么运行程序的时候，到底是在哪个环境下啊？
别问我静静是谁，我想静静了！

测试脚本（test.py)：
```
import sys
print(sys.version)
```


哦， 大师们说，这个问题有好多办法呢！仰望大师...
经过虚心向大师们学习，有如下办法：

*  直接使用绝对路径运行Python
比如：
`/opt/python/3.5.3/bin/python3.5 --version`
`Python 3.5.3`
或者
`/opt/python/3.5.3/bin/python3.5 test.py`
`3.5.3 (default, Feb  6 2017, 18:38:10)`
`[GCC 4.9.2]`

* 在脚本中指定环境
```
#! /opt/python/3.5.3/bin/python3.5
import sys
print(sys.version)
```
测试
```
./test.py
3.5.3 (default, Feb  6 2017, 18:38:10)
[GCC 4.9.2]
```



# virtualenv

虽然上述方法可行，但是还是要牢记有两个版本，要时刻注意区分
如果在涉及到在不同版本下安装不同软件包，会更加混乱，尤其是对我这种菜鸟而言。

那有没有更简单的方法呢？答案是有的，就是使用virtualenv

virtualenv我理解就是创建一个虚拟的Python环境
在这个环境下，你看到的就是你虚拟的Python环境，很干净，不用考虑乱七八糟的事情

* 安装
`sudo pip3 install virtualenv`

* 创建一个virtualenv环境
`virtualenv --no-site-packages --python /opt/python/3.5.3/bin/python3.5 venv`

* 启动虚拟Python 环境
`cd venv/bin`
`source activate`

* 安装需要的Python包
这时候可以安装任何你需要的Python安装包了

* 测试

测试脚本（test.py)：
```
import sys
print(sys.version)
```
运行与运行结果
```
python3 test.py
3.5.3 (default, Feb  6 2017, 18:38:10)
[GCC 4.9.2]
```

* 退出
`deactivate`

# set virtualenv for a crontab / 在crontab中运行虚拟Python环境

是不是很简单，那么问题来了
在终端我们可以通过执行` source activate`来启动虚拟Python环境
那么如果在crontab下中如何执行呢？

直接直接Python脚本肯定是不行的，因为还没进入到虚拟环境呢。
那么该如何办呢？

简单的说，就是创建个shell脚本，在shell脚本中进入虚拟Python环境，然后执行Python文件即可

可以参考这个两个链接：
http://stackoverflow.com/questions/4150671/how-to-set-virtualenv-for-a-crontab
https://segmentfault.com/q/1010000000319231

# 其它问题

编译Python后，在虚拟环境中运行
`import sqlite3`
提示：
`ImportError: No module named '_sqlite3'`

相关链接：
http://stackoverflow.com/questions/1210664/no-module-named-sqlite3
http://www.360ito.com/question/57.html

* 尝试一：

虚拟环境下运行
`pip3 install sqlite3`
提示
`RuntimeError: Package 'sqlite3' must not be downloaded from pypi`

相关链接：
https://www.ateamsystems.com/tech-blog/solved-virtualenv-runtimeerror-package-sqlite-must-not-downloaded-pypi/

* 尝试二：

安装libsqlite3-dev 后重新编译Python, 重新创建virtualenv
`sudo apt-get install libsqlite3-dev`
详情见：
[How to install python 3.5 on Banana-Pi M3 / 如何香蕉派上的安装python 3.5](https://steemit.com/bananapi/@oflyhigh/how-to-install-python-3-5-on-banana-pi-m3-python-3-5)


PS:
同之前的文章一样，把这个过程写下来，一则做个备忘，二则给遇到同样问题的朋友一点参考
我是初学者，边学边试边玩，有错漏的地方，烦请各位大神指正。

- - -

This page is synchronized from the post: [创建虚拟Python环境以及在crontab中运行虚拟Python环境/  Create a virtual Python environment and set virtualenv for a crontab](https://steemit.com/@oflyhigh/python-crontab-python-create-a-virtual-python-environment-and-set-virtualenv-for-a-crontab)
