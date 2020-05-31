
---
title: '每天进步一点点：DNS & 清除DNS缓存'
permlink: dns-and-dns
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2020-05-31 14:06:18
categories:
- cn
tags:
- cn
- dns
- cn-programming
- study
- blog
thumbnail: 'https://images.hive.blog/DQmdUAMfYReFLXLiSsM599KpQXAzKXQsJpLb7qUK83SH69Y/image.png'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


DNS(Domain Name System)是互联网上将域名解析成IP的一整套系统/机制，这样大家就可以通过有意义的域名(比如hive.blog这样的形式)来访问网站了，如果没有DNS，我们只能记录看起来没有一丁点意义的IP了。


![image.png](https://images.hive.blog/DQmdUAMfYReFLXLiSsM599KpQXAzKXQsJpLb7qUK83SH69Y/image.png)
(图源 ：[https://cn.bing.com/images/](https://cn.bing.com/images/))

# DNS

DNS是一个层次化的系统，比如我们想查询hive.blog，这个域名，那么先需要向根服务器发起请求，比如我们向根服务器之一的`a.root-servers.net`来查询的话，`a.root-servers.net`会给我们如下应答：
>![image.png](https://images.hive.blog/DQmaxKdSbt1Kp4rnCo3wC2NJBgYgHXNyDYujLSbMX3unGTu/image.png)

也就是说`.blog`后缀的域名是由`a.nic.blog`等四台服务器负责解析的，再依次查下去，最终会找到hive.blog的IP:
>![image.png](https://images.hive.blog/DQmX5JujMns68aNDiZtCz6mJMxvL7abFsWjYocfSYDpRWTQ/image.png)

# 缓存

从上述内容不难看出来，DNS查询的过程还是很麻烦的。如果我们每次访问某个域名，都要经过这么多次查询，那么效率会很低，对资源也是极大的浪费。

所以就有了缓存系统，比如上边的A记录之一：
>`hive.blog	300	IN	A	172.67.181.43`

其中的300，有个专门的名称，叫TTL(time to live)，翻译过来叫做存活时间，就是指这个记录在DNS缓存中存在多久后会失效。

本地DNS解析器会根据这个时间来缓存这个A记录，直到TTL归零(再次重新请求)。

缓存极大地提升了DNS解析的效率，也大幅降低各级DNS系统的负载，设想一下如果每次域名解析都要访问一遍根服务器，那么根服务器铁定就会累瘫痪的。

# Windows下清理缓存

缓存虽然很有用，但是有一种情况还是会很恼人的，那就是DNS那边修改了记录，而由于缓存生命期还没完结， 那么本地的DNS解析器中可能保留的就是错误的记录。

上边这种300秒的TTL设置还好，如果设置成24小时或者更高，那就会很恼人了，所以有时候需要清理缓存。

Windows下清理缓存很方便，执行如下命令即可：
>`ipconfig /flushdns`

我做的一个小工具也提供了相应的功能：
>![image.png](https://images.hive.blog/DQmSethSbmdK8tKykhKDp6UDbANHBdDYdSwUYPVh6jFeA5X/image.png)

我程序中使用类似如下代码：
>`bool (WINAPI *DoDnsFlushResolverCache) ();`
>`*(FARPROC *)&DoDnsFlushResolverCache = GetProcAddress(LoadLibrary(_T("dnsapi.dll")), "DnsFlushResolverCache");`

如果失败了，则去调用`ipconfig`执行：
>`system("ipconfig /flushdns");`
>`system("ipconfig /release");`
>`system("ipconfig /renew");`

# Ubuntu (18.04)下清理DNS缓存

相比于Windows的命令行操作或者我的小工具，Linux下如何操作我还真不熟悉，原本以为`ifconfig`会有类似的选项，后来发现我多想了。

网上各种教程，但是可能是不同发行版和不同版本号的问题，很多都并不适用。最终我发现我的Ubuntu 18.04下有这两条相关命令：

查看状态：
>`sudo systemd-resolve --statistics`

来执行下试试看：
>![image.png](https://images.hive.blog/DQmVP6xVXmiGakWWGh8imYAibn6P9SXjYswrcpyhR73qHtx/image.png)

清空缓存：
>`sudo systemd-resolve --flush-caches`

我们可以再清空缓存后再调用查看状态命令来看一下：
>![image.png](https://images.hive.blog/DQmXYRPZENbKMEo7Dgx5NY4KWYhCYnBoVGcRFegwHG4EH9z/image.png)

可见原本存在的四条缓存内容已被清空。

# 补充说明

可能有朋友会问缓存清空后，记录就一定更新到最新吗？这个主要取决于DNS解析器所依赖的DNS服务。

怎么说呢？之前说个DNS解析是层次化的结构，简单点形容，就是一层层向上问，如果上层有缓存且还没过生存期，就会直接答复回来，否则就继续向上问。

所以我们清空了本地缓存，但是如果上层DNS/ISP DNS等缓存还没过期，那么有可能拿到的还是旧的信息。

所以上述方法只能解决本地解析器的缓存问题，大部分情况就够用了，如果遇到复杂情况，还是具体处理。


![image.png](https://images.hive.blog/DQmWU5EnkfFDJEjSCVUSLG6vAyMnahS6U9gqXU9U1s7vAc5/image.png)
(图源 ：[pixabay](https://pixabay.com/))

当然了，最简洁的方法就是等缓存失效了，这样什么都不用做，静静地等待就好了。😀

- - -

This page is synchronized from the post: ['每天进步一点点：DNS & 清除DNS缓存'](https://steemit.com/@oflyhigh/dns-and-dns)
