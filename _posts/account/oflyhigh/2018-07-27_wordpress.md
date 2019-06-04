
---
title: 'Wordpress 隐藏登陆链接'
permlink: wordpress
catalog: true
toc_nav_num: true
toc: true
date: 2018-07-27 02:02:36
categories:
- wordpress
tags:
- wordpress
- login
- cn
- plugin
- php
thumbnail: https://cdn.steemitimages.com/DQmaecemP5MMYLVj15kqkwGcJ1718rwi4k8gBEHf85cB5z9/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


用过Wordpress做博客或者建站的朋友，都会知道Wordpress默认的登陆地址是wp-login.php，很多恶意程序就是通过爬这个地址，尝试使用常见的用户名密码组合来入侵Wordpress。

![](https://cdn.steemitimages.com/DQmaecemP5MMYLVj15kqkwGcJ1718rwi4k8gBEHf85cB5z9/image.png)
(图源 ：[pixabay](https://pixabay.com/))

尽管我们可以通过使用复杂的用户名、高强度的密码来防止恶意程序的猜测，或者通过插件来检测类似行为并通过阻止对方IP等方式来限制对方访问，但是何不在源头上就解决掉呢？比如说换个登陆地址，让恶意脚本找不到？

# 修改wp-login.php
说干就干，我来把wp-login.php改成abc-login.php。首先备份一下wp-login.php，然后使用使用vi编辑器打开wp-login.php：
>`vi wp-login.php`

一看呦呵，这文件里好多处引用到wp-login.php本身，所以光改文件名是不行的，让我来个全局替换吧。在vi命令模式下输入以下指令，并回车：
>`%s/wp-login.php/abc-login.php/g`

返回提示信息如下：
![](https://cdn.steemitimages.com/DQmYLJmrdbYj88F685id9sd7PhREd4pfZsuoTHk5EKw4Kx4/image.png)
足足12处啊，丧心病狂！

然后保存文件并退出，命令模式下输入以下指令，并回车：
>`wq`

# 重命名wp-login.php

将wp-login.php修改为abc-login.php
>`mv wp-login.php abc-login.php`

然后试了一下，可以使用abc-login.php正常登陆wordpress后台了，但是登陆后却无法退出，退出时提示wp-login.php找不到，囧。

# 修改general-template.php

查了一下，退出时链接地址是通过wp-includes/general-template.php传递的，所以我们编辑一下这个地址就行：

>`vi wp-includes/general-template.php`

将`function wp_logout_url($redirect = '')`中的如下语句：
>`$logout_url = add_query_arg($args, site_url('wp-login.php', 'login'));`

修改为：
>`$logout_url = add_query_arg($args, site_url('abc-login.php', 'login'));`

这个文件中还有几处引用到wp-login.php，但是不建议修改，比如login啊、lostpassword啊、registration啊，因为这些地址还是不暴露的好，除非我们真的有需要。

比如这个文件中的login，我们修改成正确的地址，用户就可以通过访问wp-admin直接重定向到abc-login.php，这样我们隐藏wp-login.php的地址就变得没有意义了。

保存退出，之后再尝试，发现登陆登出都已经正常啦，哦，对了在页面模板中记得去掉登陆链接。

# 其它方式

除了上述方式，还可以使用插件方式，比如说`WPS Hide Login`或者`Better WP Security `等插件，但是这些东西，个人认为引入越多风险越高，还是暴力修改比较舒服。

当然了，具体选择什么方式，还看自己喜好啦，以上仅一家之言，仅供参考。另外郑重提醒，记得备份，改坏了别找我啊，这个锅我是不会背的。

- - -

This page is synchronized from the post: [Wordpress 隐藏登陆链接](https://steemit.com/@oflyhigh/wordpress)
