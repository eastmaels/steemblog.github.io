
---
title: 'Mac系统下No such file or directory的问题解决'
permlink: macno-such-file-or-directory-1567254068
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-09-01 00:21:27
categories:
- cn-reader
tags:
- cn-reader
- cn
- partiko
- zzan
- life
thumbnail: None
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


　　我在Mac下安装了个软件，需要手工对文件进行配置下，于是打开terminial终端直接进行操作。

　　有一个很怪异的地方，就是我进行操作的时候，明明当前目录下有那个目录文件，但我使用命令的时候，却死活进不去，而且系统显示：

　　No such file or directory

　　这真是奇了怪了。刚开始时，我以为是自己输入的目录名称有误，还专门核对了下，再次输入操作，问题依旧，显示无该目录。

　　于是我改复制该目录名称，然后再粘贴进行操作，发现仍然无济于事？

　　难道是操作权限的问题？我心中疑惑到，但想了下觉得不对呀，

　　我这个当前操作身份本身就是系统管理员的身份啊。

　　百思不得其解，只好上网百度下，发现在Mac系统下，空格要转义符，比如一个目录名称为：

　　my directory

　　操作的时候应该为：

　　cd my \ directory

　　在空格前边加多个"\"转义符即可。

　　又或者另外一种方法，即将目录名称用""起来，如上述目录操作为：

　　cd"my directory"

　　这样就可以了。

　　返回Mac重新操作，果然问题解决。
　　

- - -

This page is synchronized from the post: ['Mac系统下No such file or directory的问题解决'](https://steemit.com/@rivalhw/macno-such-file-or-directory-1567254068)
