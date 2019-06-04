
---
title: '每天进步一点点：PHP的microtime()函数 & 浮点数显示精度'
permlink: php-microtime-and
catalog: true
toc_nav_num: true
toc: true
date: 2018-11-19 02:29:18
categories:
- php
tags:
- php
- study
- programming
- code
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


在昨天帖子[《PHP 问号表达式效率问题》](https://steemit.com/php/@oflyhigh/cwuq3-php)中，我使用`microtime(true)`来获得程序执行的起始点和终止点。

![](https://steemitimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png)
(图源 ：[pixabay](https://pixabay.com/))


咳咳，我一直对这个函数的命名挺纠结的，明明返回的是秒，非要在名字带个micro，总让我以为返沪的是微秒（microseconds）。

其实这个函数的功能是***返回带微秒的时间***，PHP中声明如下：
>`mixed microtime ([ bool $get_as_float = FALSE ] )`

关于返回值，文档中是这样描述的
> By default, microtime() returns a string in the form "msec sec", where sec is the number of seconds since the Unix epoch (0:00:00 January 1,1970 GMT), and msec measures microseconds that have elapsed since sec and is also expressed in seconds.

> If get_as_float is set to TRUE, then microtime() returns a float, which represents the current time in seconds since the Unix epoch accurate to the nearest microsecond. 

也就是说，如果不加参数***TRUE***，那么返回的是"msec sec"这样的形式，其中msec也就是用秒表示，也就是说是小数形式的秒。

如果加上参数***TRUE***，就更好理解喽，就是带小数的秒喽。

让我们写段简单的代码看一下
```
<?
$mt=microtime();
$mt_f=microtime(true);
var_dump($mt);
var_dump($mt_f);
?>
```

输出如下：
>![](https://cdn.steemitimages.com/DQmPfyVPygjLHEb8fXTCrxLZaxrAmeXbK3kX2YwGv3hAv6i/image.png)

可是为何浮点数形式表示的秒，小数点后边只有两位啊？这还怎么精确到微秒啦？其实这只是由于浮点数显示精度设定导致的，并不影响运算(比如求时间差值）精度。

如果想让其更高精度的显示，可以试试如下代码：
```
<?
echo ini_get("precision"), "\n";
ini_set("precision",16);
$mt=microtime();
$mt_f=microtime(true);

var_dump($mt);
var_dump($mt_f);
?>
```

输出如下：
>![](https://cdn.steemitimages.com/DQmVPPoeFEg9689Lqzi2hpDNJgSMetTMfdBp3BFw2QN74iD/image.png)

可见之前默认的浮点数显示精度为12位，我们设置为16位后，就显示到小数点后6位啦。

好了，就啰嗦这些啦，其实我本来想多啰嗦一些的，可是浏览器崩溃了，这些都是我重新敲的，这心情啊，可酸爽了。

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>

- - -

This page is synchronized from the post: [每天进步一点点：PHP的microtime()函数 & 浮点数显示精度](https://steemit.com/@oflyhigh/php-microtime-and)
