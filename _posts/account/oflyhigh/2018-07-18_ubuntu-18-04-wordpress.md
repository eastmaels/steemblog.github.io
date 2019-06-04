
---
title: 'Ubuntu 18.04 上安装WordPress'
permlink: ubuntu-18-04-wordpress
catalog: true
toc_nav_num: true
toc: true
date: 2018-07-18 03:14:09
categories:
- wordpress
tags:
- wordpress
- linux
- mysql
- php
- cn
thumbnail: https://cdn.steemitimages.com/DQmVVSHcnfAyYdEtLVKJssczy2HsFMbW7Kud5Xthj5JoF87/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在之前的帖子中，我们实现了在[Ubuntu 18.04 安装Apache2、PHP7.2、MYSQL](https://steemit.com/linux/@oflyhigh/ubuntu-18-04-apache2-php7-2-mysql) 以及[Ubuntu 18.04 使用独立用户运行虚拟主机 (mpm-itk)](https://steemit.com/linux/@oflyhigh/ubuntu-18-04-mpm-itk)，这篇文章中我们以上述工作为基础，在Ubuntu 18.04 上安装WordPress 。

![](https://cdn.steemitimages.com/DQmVVSHcnfAyYdEtLVKJssczy2HsFMbW7Kud5Xthj5JoF87/image.png)
(图源 ：[pexels.com]( https://www.pexels.com/))

# 创建数据库

因为WordPress使用的是MySQL数据库(或者MariaDB)，所以在安装之前，我们需要做些额外的工作：

* 创建数据库
* 创建数据库用户
* 指定数据库的权限给对应用户

首先以root身份登陆MySQL
>`sudo mysql -u root -p`

按提示输入sudo用户密码以及MySQL root密码后，出现如下提示：
![](https://cdn.steemitimages.com/DQmTJxnjRXkoDVKR5WCsn8RVDEr74yEq4vZNmcKpWMLfAYv/image.png)

然后依次执行如下命令：
>`CREATE DATABASE wordpressdb;`
>`CREATE USER 'wordpressuser'@'localhost' IDENTIFIED BY 'aaaa@bbb123';`
>`GRANT ALL PRIVILEGES ON  wordpressdb.* TO 'wordpressuser'@'localhost';`

好了，数据库准备好了，其中数据库名用户名密码是我随便起的，你可以根据自己的需求修改。

# 下载WordPress程序

WordPress程序可以在其官网下载：
https://wordpress.org/download/

你可以登陆自己的用户账户www目录后，直接使用如下指令下载最新版本。
>`wget https://wordpress.org/latest.tar.gz`

然后使用如下指令将其解压：
>`tar xzvf latest.tar.gz`

如果你想直接将www作为根目录，你需要将wordpress目录下的所有内容移动到上一层。
>`cd wordpress`
>`mv * ../`

好了，文件我们也准备好啦。


# 安装WordPress 

剩下的事情就简单啦，访问你的域名，如果你绑定得没问题的话，文件上传也没问题，会自动跳转到WordPress的安装页面，然后按提示操作即可。


![](https://cdn.steemitimages.com/DQmcDsBdyhCi3ok4V8FYX5LctA5XMEp452g2DexFeNEbe7t/image.png)
选择语言

![](https://cdn.steemitimages.com/DQmc4H2WeYSotQnZ6ZuviK7VYR74A8eYJHjrc5NZ1F53AU1/image.png)
提示信息

![](https://cdn.steemitimages.com/DQmXHyjRB53ESGZFBKXUTABLuManE68JxFpfnSoXNxqDyd5/image.png)
设置数据库信息，用我们之前创建的数据库以及数据库用户替换上述信息

![](https://cdn.steemitimages.com/DQmNyU2UktKFyuWdCo3U9WefZPNNrZMb1nugSSyd2G3srX7/image.png)
提示信息

![](https://cdn.steemitimages.com/DQmav5sWrZsN314MpJC5qUJVDpR7f2AGLLwh6APJRjyRpsB/image.png)
设置用户名密码等

![](https://cdn.steemitimages.com/DQmfYTuNDhkzaNVekYssvXzkdD4TkjVRFmQyZfX6Gr44YoQ/image.png)
安装成功！

# 测试访问

现在访问一下域名，看看我们的WordPress长啥样？

![](https://cdn.steemitimages.com/DQmW2uyHXBjvvhiTBP2SkwX4u2HRjmmAPzA3wDq9hHEMMRQ/image.png)
我晕，好难看。


让我登陆后台换个风格试试：

![](https://cdn.steemitimages.com/DQmU4bywGMnnGeb7iQvT5TZnbkwKLwK1hHsytKkxstG6qSa/image.png)
这个看起来好看多了，哈哈，这也说明后台功能正常，我安装的木有问题。

# 相关链接

* [Ubuntu 18.04 安装Apache2、PHP7.2、MYSQL](https://steemit.com/linux/@oflyhigh/ubuntu-18-04-apache2-php7-2-mysql) 
* [Ubuntu 18.04 使用独立用户运行虚拟主机 (mpm-itk)](https://steemit.com/linux/@oflyhigh/ubuntu-18-04-mpm-itk)
* https://wordpress.org
* https://dev.mysql.com/doc/refman/5.7/en/adding-users.html

- - -

This page is synchronized from the post: [Ubuntu 18.04 上安装WordPress](https://steemit.com/@oflyhigh/ubuntu-18-04-wordpress)
