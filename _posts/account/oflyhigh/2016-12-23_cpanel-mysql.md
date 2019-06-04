
---
title: '如何远程访问cPanel中的MySQL数据库？'
permlink: cpanel-mysql
catalog: true
toc_nav_num: true
toc: true
date: 2016-12-23 11:33:30
categories:
- cpanel
tags:
- cpanel
- mysql
- php
- cn
thumbnail: https://www.cpanel.com/assets/img/cP-logo.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


![](https://www.cpanel.com/assets/img/cP-logo.png)


写下这个标题后，突然有一种穿越了感觉。
上一次写类似的内容是多少年前？
十年前还是五年前？太久远的事情，记忆的不是很清楚，但至少可以确定的是，3年以内我肯定没写过。

# cPanel中添加MySQL数据库

在cPanel中创建MySQL数据库，想必用过的朋友都很熟悉。其实步骤也是相当的简单。
1) cPanel->MySQL中添加数据库
2) cPanel->MySQL中创建数据库用户
3) cPanel->MySQL中将数据库以及数据库用户建立起来关联
4) PHP等程序中用对应信息连接并使用数据库，数据库主机名用`localhost`

# 远程访问cPanel中的MySQL数据库

当需要在其它主机上使用cPanel中创建的MySQL数据库，则有一些额外的工作要做。
大致需要三个步骤：
1) 将MySQL服务绑定到指定的公网IP
2) 设置服务器的防火墙规则
3) 在cPanel中允许数据库远程连接

下面我们分别讲解：

* 将MySQL服务绑定到指定的公网IP

>MySQL默认绑定到`0.0.0.0`默认监听所有的IP。
这样很不安全，一般的服务商出于安全考虑，会设置只绑定至`localhost`
即在`/etc/my.cnf`设置`bind-address=127.0.0.1`
而这样会导致无法在远程访问，所以我们首先要将MySQL服务绑定到指定的公网IP
即在`/etc/my.cnf`设置`bind-address=x.x.x.x` 将x.x.x.x替换成你的IP

>(1) MySQL无法绑定到多个IP，如果需要绑定到多个IP，则需要设置绑定至`0.0.0.0`监听所有IP，然后配合防火墙规则实现相同的效果。
>(2)绑定至指定IP后，本地依然可以通过`localhost`访问。


* 设置服务器的防火墙规则

>A: 如果事先不清楚那个远程主机要访问，那么就允许所有的IP访问我们绑定IP的3306端口
以CSF为例，添加如下规则:  `tcp|in|d=3306|d=x.x.x.x`

>B: 如果已知远程主机地址，出于安全考虑，我们应该只允许远程主机访问服务器的3306端口
以CSF为例，添加如下规则:  `tcp|in|d=3306|s=y.y.y.y` 其中y.y.y.y为远程主机IP


* 在cPanel中允许数据库远程连接

>我们还需要在cPanel中允许数据库被远程连接。
简单来讲就是在Home >> Databases >> Remote MySQL中添加你要允许的IP或主机名即可
详情可以参考：[Remote MySQL](https://documentation.cpanel.net/display/ALD/Remote+MySQL)

# 测试访问

当设置完成后，可以用以下代码测试是否访问正常。
代码来源： http://php.net/manual/en/mysqli.construct.php
请将'host', 'my_user', 'my_password', 'my_db'换成对应的信息
```

<?php
$mysqli = new mysqli('host', 'my_user', 'my_password', 'my_db');

/*
 * This is the "official" OO way to do it,
 * BUT $connect_error was broken until PHP 5.2.9 and 5.3.0.
 */
if ($mysqli->connect_error) {
    die('Connect Error (' . $mysqli->connect_errno . ') '
            . $mysqli->connect_error);
}

/*
 * Use this instead of $connect_error if you need to ensure
 * compatibility with PHP versions prior to 5.2.9 and 5.3.0.
 */
if (mysqli_connect_error()) {
    die('Connect Error (' . mysqli_connect_errno() . ') '
            . mysqli_connect_error());
}

echo 'Success... ' . $mysqli->host_info . "\n";

$mysqli->close();
?>
```
如果一切正常，那就恭喜喽。

- - -

This page is synchronized from the post: [如何远程访问cPanel中的MySQL数据库？](https://steemit.com/@oflyhigh/cpanel-mysql)
