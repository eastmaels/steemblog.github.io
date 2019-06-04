
---
title: 'Ubuntu 18.04 安装Apache2、PHP7.2、MYSQL'
permlink: ubuntu-18-04-apache2-php7-2-mysql
catalog: true
toc_nav_num: true
toc: true
date: 2018-07-16 12:56:51
categories:
- linux
tags:
- linux
- apache
- php
- mysql
- cn
thumbnail: https://cdn.steemitimages.com/DQmfKovwgeN8zUy9Ro39uuJE74pmheKMDpnDKY5oWmamaME/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


因为需要在一台Ubuntu服务器上放一个网站，好久没有做过类似操作了，因为对于用惯WHM/cPanel的我而言，建网站就和吃饭喝水一样简单，点啊点啊，就都搞定了。

在Linux上手工安装软件弄网站啥的，很久以前也做过，但是早就忘干净了，所以边做边记录一下吧。

# Apache2 

>`sudo apt-get install apache2`


![](https://cdn.steemitimages.com/DQmfKovwgeN8zUy9Ro39uuJE74pmheKMDpnDKY5oWmamaME/image.png)

# PHP 7.2

>`sudo apt-get install php7.2`

>`<?php`
`phpinfo();`
`?>`

![](https://cdn.steemitimages.com/DQmXg9RaSFTfdMY8AcghmcGaQy8ncpEtZAC65Ct7jfLacWA/image.png)

# MySQL

>`sudo apt-get install mysql-server php7.2-mysql mysql-client`

#### mysql_secure_installation
>`sudo mysql_secure_installation`

![](https://cdn.steemitimages.com/DQmRczKcsEm7xhA1r9F24PmfLJKKyYTLKmGYosPPjqQRo8g/image.png)
启用密码检查插件。

![](https://cdn.steemitimages.com/DQmXNDh8esXSkktjjLC4cSf2xb3DEGkBSLpDnjp5VjkEQ4K/image.png)
设置密码强度限制。

![](https://cdn.steemitimages.com/DQmTV3FpXJPvyABnZA86LXWFeqmK3T7cWJECitAzdyYShRg/image.png)
设置mysql root用户密码

![](https://cdn.steemitimages.com/DQmYqyNUgFZvrStXp9v3mDA7y1f5vVYj4D78o8LWxWumang/image.png)
移除匿名用户。

![](https://cdn.steemitimages.com/DQmZDJx6LUEsCv86LhTS5b7ozJw7wu7Tr5expMmff8Cpanv/image.png)
移除`test`数据库。

![](https://cdn.steemitimages.com/DQmRawt9Y3pxMrAaAUtvtDE7UafgTrL3GCsrZzmQf9wDcs7/image.png)
禁止root远程连接。 

![](https://cdn.steemitimages.com/DQmTdd8jCHjJEqe5VN9LJjgGbtaU4YMSFGdPxnn5syiYzdn/image.png)
重新加载权限表确保上述修改生效。

重启Apache2 后查看phpinfo页面，会发现里边多出来mysqli以及mysqlnd相关内容。

# 管理指令

Apache2

>`sudo /etc/init.d/apache2 {start|stop|graceful-stop|restart|reload|force-reload}`

MySQL
>`sudo /etc/init.d/mysql start|stop|restart|reload|force-reload|status`

# 总结

大致就这样了，当然了，如果实际使用，还需要进一步的优化和加固，比如优化Apache的设置，调整PHP的配置文件等等，这里就不再赘述啦。

- - -

This page is synchronized from the post: [Ubuntu 18.04 安装Apache2、PHP7.2、MYSQL](https://steemit.com/@oflyhigh/ubuntu-18-04-apache2-php7-2-mysql)
