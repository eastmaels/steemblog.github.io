
---
title: '手工迁移博客(WordPress)到其它网站'
permlink: 6nkxcg-wordpress
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-05-23 15:36:00
categories:
- cn
tags:
- cn
- wordpress
- website
- host
- mysqldump
thumbnail: 'https://images.hive.blog/DQmXB7p38RnW3ndV7QHALufYjkSy1CBUoMMz3FiqTqQWLK6/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


最近要帮客户迁移一个博客网站到godaddy的主机，双方都带cPanel控制面板，原则上可以直接用cPanel里的Backup以及恢复功能，但是客户这站想作为那边账户下的一个子站存在，所以想想只能手工来迁移了。

![image.png](https://images.hive.blog/DQmXB7p38RnW3ndV7QHALufYjkSy1CBUoMMz3FiqTqQWLK6/image.png)
(图源 ：[pixabay](https://pixabay.com/))

首先，博客站(WordPress)主要有两项内容要迁移：一项是网站文件，另一项就是WordPress的数据库。其实网站还有邮件等，不过客户说没啥重要邮件也不需要邮箱了，那就简单多了。

在迁移之前，首先需要在Godaddy的主机上绑定好域名以及对应目录，因为是作为子站存在，并且有独立域名，那么我选择用***Addon Domains***功能，在其中添加对应域名：
>![image.png](https://images.hive.blog/DQmQ6GNyAaRgk1zJcEFjAPbmtfuTT7hcPycq8zKorrXdWfA/image.png)

# 迁移文件

然后就是迁移网站数据，也就是说把原本站点下的`public_html`迁移到godaddy空间上创建的`public_html/xxx.com`下。

迁移数据有很多方法，比如用FTP，又比如使用scp，或者还可以使用cPanel的File Manager(文件管理器)等，我选择使用scp。

为了使用scp，需要先在Godaddy这边开通SSH功能，在空间管理后台找到SSH功能，将其打开即可：
>![image.png](https://images.hive.blog/DQmXv3Hx58uUHnD3n2kNAGHGVXgvVhshWnqu994Md5XbNLb/image.png)

另外一件事就是迁出这边设置了防火墙`ConfigServer Security & Firewall`所以还要允许一下出站IP才可以：
>`tcp|out|d=22|d=x.x.x.x`

剩下的事情就简单了，scp直接复制到对方目录即可，如果文件太多也可以先打包再到对方那里解包。

# 迁移数据库

### 准备

在迁移数据库之前，我们需要到新的空间上创建一个数据库，使用***cPanel->MySQL® Databases***功能即可。
>![image.png](https://images.hive.blog/DQmYZN32L9UiHLXB35p73NvXPQ2dz19CX7xbmCAaPMLyN2Y/image.png)

还要创建数据库用户：
>![image.png](https://images.hive.blog/DQmYY8MjZDHrSDaUkKWKnRiL41udQY8Bvp9U5ndroFeMN4q/image.png)

还要把数据库用户和数据库关联起来：
>![image.png](https://images.hive.blog/DQmPdrwxNvDjjMbmWSq9Xm86pDUw2WgQM1Lz9wdNnLtrhxB/image.png)


### 迁出和导入数据

数据库可以使用mysqldump 
>`mysqldump -uuser -ppasswd db >db.sql`

上述指令将数据库db中的内容导出到db.sql，然后用之前转移文件的方法将其转移到对方空间再用如下指令恢复即可：
>`mysql -uuser -ppasswd db <db.sql`

### 使用 PHPMyAdmin

另一种迁出和导入的方法是使用PHPMyAdmin，是一款非常简单好用的界面化操作工具
>![image.png](https://images.hive.blog/DQmWiyMw5WHNuia6Sw6gMgMrUMKWMTjpH2EZxrWFiGYo8EA/image.png)

进入其中后，在原站点数据库上使用导出，在新站点数据库上使用导入功能即可:
>![image.png](https://images.hive.blog/DQmeyhV1jWVxcqu9YCaM59KAzQYtjWmwrEWdjJ2xyHp4vjR/image.png)

# 修改WordPress设置

如果数据库名/用户名/密码有所变动，那么我们还需要在WordPress的配置文件中修改一下对应设置。

配置文件的部分内容如下，将内容做对应的修改就好：
>![image.png](https://images.hive.blog/DQmV6pWJdrf4e5MNesEKPYcoJQXymihqWe2vnHXbWz2w985/image.png)

# PHP版本

原本以为做完如上设置后，一切都会OK，结果访问子域名测试，竟然出现了如下错误：
>Your PHP installation appears to be missing the MySQL extension which is required by WordPress.

简单来讲，就是PHP 7.0之后，mysql扩展被丢弃了，只能用MySQLi啥的了。

这种情况有两种解决方法，一是修改WordPress代码，使用MySQLi而不是MySQL；另一种方式就是降低PHP版本。

懒惰的我选择了后边一种方式，毕竟原本站点就是运行在PHP 5.6环境下的嘛。改了一下PHP版本，一切OK，WordPress又活过来了。

子域名测试无误后，在把域名绑定过来，就OK啦。


# .htaccess

原本以为一切OK，结果发现点二级页面时出现404错误。

不过这个一想就没想白了，一定是静态化rewrite设置丢了。想想自己用scp命令时的用法，一定是.htaccess没复制过去。

把这个单独复制过去，这次真的一切OK了。



# 相关链接

* https://dev.mysql.com/doc/refman/5.7/en/mysqldump.html
* https://www.php.net/manual/en/intro.mysql.php

- - -

This page is synchronized from the post: ['手工迁移博客(WordPress)到其它网站'](https://steemit.com/@oflyhigh/6nkxcg-wordpress)
