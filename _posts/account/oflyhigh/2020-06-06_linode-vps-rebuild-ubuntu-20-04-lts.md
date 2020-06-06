
---
title: '将Linode上的一台VPS Rebuild成Ubuntu 20.04 LTS'
permlink: linode-vps-rebuild-ubuntu-20-04-lts
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-06-06 15:41:15
categories:
- cn
tags:
- cn
- linux
- ubuntu
- fossa
- study
- blog
thumbnail: 'https://images.hive.blog/DQmRCLdrrPC4smYqoqz52JVr1wAnPHca8Yx29RnS1yuCpL9/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


网络上闲逛时，无意中发现Ubuntu 20.04 LTS Focal Fossa 在前些天发布了，据说性能和安全性提升了好多，正好想重做Linode一台VPS的系统的，那么直接Rebuild成Ubuntu 20.04 LTS试试看。


![image.png](https://images.hive.blog/DQmRCLdrrPC4smYqoqz52JVr1wAnPHca8Yx29RnS1yuCpL9/image.png)
(图源 ：[https://cn.bing.com/images/](https://cn.bing.com/images/))

进到Linode的面板，找到对应的VPS，并进到Rebuild界面，选择***From Image***，就会发现可选的Images中包含有***Ubuntu 20.04 LTS***了，我们选择这个：
>![image.png](https://images.hive.blog/DQmetXhojGeA8dpSKYmoMs3iQbdPt2mxTAQPFByV3Cr7bCN/image.png)

然后设置root密码或者初始的SSH Key：
>![image.png](https://images.hive.blog/DQmeNpkVqizTsa1iavs1jZi2FLWnYCmgTMzvAAcTp1119YP/image.png)

选择点击![image.png](https://images.hive.blog/DQmZP9ELjPzu6gu9FgSLysvAgrdDB9EAkzr7tPX8zZZTmZk/image.png)按钮后，会出现如下确认信息：
>![image.png](https://images.hive.blog/DQmR6tTZVa7UAJ9vLZ8NvJYaQtrNDj1gnctjHUoGWwKB31a/image.png)

选择![image.png](https://images.hive.blog/DQmZP9ELjPzu6gu9FgSLysvAgrdDB9EAkzr7tPX8zZZTmZk/image.png)按钮，开始Rebuild OS。

Rebuild OS非常快，我们事件列表中可以看到，只用了1分14秒。
>![image.png](https://images.hive.blog/DQmbu8waVgbLExPAKwYCaWuqacJVZnokgQUh2adMjUVc68Q/image.png)

弄完之后进系统，看欢迎信息，已经变成Ubuntu 20.04 LTS，内核是5.4了
>![image.png](https://images.hive.blog/DQmWKbVuxpkJycYcdXeiF2CnzJRPwxzW7wxoNRTXz3efn4W/image.png)

新装的系统还是要用`apt update`以及`apt upgrade`
>![image.png](https://images.hive.blog/DQmb4t75fZt89GW33RjuMXPNzojgZ9TwBT4oKDkxQs8XnPy/image.png)

看了一下，我打交道最多的Python升级到3.8.2了
>`python3 --version`

上述命令返回：
>![image.png](https://images.hive.blog/DQmRiZyY7p6ZYq615hLvEThJ8nKjmJsRBDBHUPgzaTfCTS5/image.png)

还不确定会我常用的程序造成什么影响。

另外关于网站，Ubuntu 20.04 LTS 支持PHP 7.4, 去掉了原来的PHP 7.2，所以原来弄网站安装时相应的命令都要切换成7.4版的，比如如下指令：
>`sudo apt install php7.4`
>`sudo apt  install mysql-server php7.4-mysql mysql-client`
>`sudo apt install php7.4-curl`
>`sudo vi /etc/php/7.4/apache2/php.ini`


![image.png](https://images.hive.blog/DQmXsLA36XocwoqNYw434to6H22dY67qwaN7PiTnnB2k2g7/image.png)
(图源 ：[pixabay](https://pixabay.com/))

弄完网站以后发现，虽然一切正常，但是这个VPS放到JP，似乎不是一个明智的选择。回头看看能不能迁移到其它地区，实在不行就只能重新开一个喽。

- - -

This page is synchronized from the post: ['将Linode上的一台VPS Rebuild成Ubuntu 20.04 LTS'](https://steemit.com/@oflyhigh/linode-vps-rebuild-ubuntu-20-04-lts)
