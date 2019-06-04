
---
title: 'How  to install Apache、MYSQL、PHP5 and run a Wordpress website on BananaPi'
permlink: how-to-install-apache-mysql-php5-and-run-a-wordpress-website-on-bananapi
catalog: true
toc_nav_num: true
toc: true
date: 2016-08-29 11:16:39
categories:
- bananapi
tags:
- bananapi
- php
- mysql
- apache
- cn
thumbnail: http://forum.godpub.com/data/attachment/forum/201507/11/183307c1dpghhhbcq6qy9r.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


In my previous post, I introduce you how to install OpenCV on BananaPi and also provide two example program wrote in C++ and Python.
[[在香蕉派上使用摄像头：安装 & C++/Python示例程序]/Using OpenCV on BananaPi : Install & example programs in C++ / Python](https://steemit.com/opencv/@oflyhigh/and-c-python-using-opencv-on-bananapi-install-and-example-programs-in-c-python)

In this article, I'll introduce you how to install Apache、MYSQL、PHP5 and run a Wordpress website on BananaPi.

# Install Apache2 /安装Apache2

>to install apache2, just run following command:
    `sudo apt-get install apache2`

Now, Open the BananaPi Ip address in browser:
>![](http://forum.godpub.com/data/attachment/forum/201507/11/183307c1dpghhhbcq6qy9r.png)

# Install PHP5/安装PHP5

>To install php5, run following command:
`sudo apt-get install php5`

>You need restart apache2 to make php5 take effect
`sudo /etc/init.d/apache2 restart`

"Hello World" page
```
    <?
    echo "Hello World!";
    ?>
```
"php info" page
```
    <?
    phpinfo();
    ?>
```
Browse page info page in browser:
![](http://forum.godpub.com/data/attachment/forum/201507/11/183330lxkz23t8dhxaifsg.png)

# Install MySQL

Run following command to install MySQL
`sudo apt-get install mysql-server`
`sudo apt-get install mysql-client`
`sudo apt-get install php5-mysql （用于在PHP中链接MYSQL数据库）`

Basic control command:
`Usage: /etc/init.d/mysql start|stop|restart|reload|force-reload|status`

# Install Wordpress

The official website:
https://wordpress.org

>Download
`sudo wget https://wordpress.org/latest.tar.gz`

>Extract it/解压
`sudo tar xzvf latest.tar.gz`

>Create Database and tables
`mysql -u root -p`
![](http://forum.godpub.com/data/attachment/forum/201507/11/194944pizrhta6t9hphhoh.png)
`create database wordpress;`

>Visit installation directory  of WordPress in browser (change to your BananaPi IP)
`http://192.168.1.42/wordpress/`

>Redirect to setup page
`http://192.168.1.42/wordpress/wp-admin/setup-config.php`
Just following the instructions on the page.
![](http://forum.godpub.com/data/attachment/forum/201507/11/194500dpx8l0l1xvwp8xv4.png)

# Finished
![](http://forum.godpub.com/data/attachment/forum/201507/11/202343kop9wgz55cc7eozt.png)

Enjoy it.

- - -

This page is synchronized from the post: [How  to install Apache、MYSQL、PHP5 and run a Wordpress website on BananaPi](https://steemit.com/@oflyhigh/how-to-install-apache-mysql-php5-and-run-a-wordpress-website-on-bananapi)
