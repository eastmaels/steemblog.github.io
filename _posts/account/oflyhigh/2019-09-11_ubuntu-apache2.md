
---
title: '每天进步一点点：Ubuntu下修改Apache2默认网页(主页)'
permlink: ubuntu-apache2
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-09-11 00:29:06
categories:
- cn
tags:
- cn
- apache
- index
- ubuntu
- seo
thumbnail: 'https://steemitimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


以往自己做网页都习惯用`index.html`或者`index.php`来为主页命名，用在cPanel虚拟主机上也没发现任何问题。但是从网上下载一组网页后，并放到Apache2+Ubuntu的环境下，却发现默认的网页没被加载。

![](https://steemitimages.com/DQmRkLq6rRew3mHfx4vYGWyqpC8wSebLPeC2iZCXAdpuGkR/image.png)
(图源 ：[pixabay](https://pixabay.com/))

# 默认网页

所谓的默认网页，就是我打开网址后不添加任何文件名，网站自动加载的页面。

比如打开https://eztk.net 会自动加载 https://www.eztk.net/index.php 这个`index.php`就是默认网页，在根目录下也被叫做网站的首页或者主页。

但是我下载的一组网页竟然用`default.html`做为主页，然后上传打开网址后，竟然没有被自动加载，这就尬尴了。

# 初级解决方法

一种解决方法是把`default.html`重命名为`index.html`，但是这样可能破坏其它关联页面到这个网页的链接。

另外一种方法是复制一个`index.html`包含与`default.html`同样的内容，但是这样做可能影响SEO被搜索引擎降权。

# DirectoryIndex指令


既然上述方法不理想，那么就要尝试从Apache下手解决了，要想解决这个，首先要知道Apache如何查找默认网页的。

在Apache2目录下搜索`index.html`，我们会得到类似如下内容：
>![](https://cdn.steemitimages.com/DQmaqFwL4hVyBznzDzU8h6UKteGADcy91WoNa2n7sJgjznM/image.png)

原来控制缺省网页是用的[DirectoryIndex 指令](https://httpd.apache.org/docs/2.4/mod/mod_dir.html)，详情大家可以参考文末链接，这里就不再赘述了。

# 终极解决方法

知道了这点，解决上述问题就很简单了，把`default.html`加入到`DirectoryIndex 指令`下（捎带删除我从来不用的），并重启Apache即可。
```
<IfModule mod_dir.c>
        DirectoryIndex index.html index.php index.htm default.html
</IfModule>
````

重新加载Apache2
>`sudo systemctl reload apache2`

或者重启Apache2
>`sudo systemctl restart apache2`

哈哈，不用重命名也不用弄分身COPY，访问站点URL，`default.html`自动加载啦。

# 相关链接

* [DirectoryIndex Directive](https://httpd.apache.org/docs/2.4/mod/mod_dir.html#directoryindex)

----
<center><strong>Vote For Me As Witness</strong>
https://steemit.com/~witnesses type in **`oflyhigh`** and click ***`VOTE`***
[![](https://cdn.steemitimages.com/DQmX5NysqT44FBa3bhuWqQ69nAbseu8Nt5YQPn2pYejPVxA/image.png)](https://steemit.com/~witnesses)
[Vote @oflyhigh via Steemconnect](https://steemconnect.com/sign/account-witness-vote?witness=oflyhigh&approve=1)
<strong>Thank you!</strong></center>

- - -

This page is synchronized from the post: ['每天进步一点点：Ubuntu下修改Apache2默认网页(主页)'](https://steemit.com/@oflyhigh/ubuntu-apache2)
