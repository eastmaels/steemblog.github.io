
---
title: '使用EzWhois查询域名NS(Name Server)以及Whois信息'
permlink: ezwhois-ns-name-server-whois
catalog: true
toc_nav_num: true
toc: true
date: 2018-05-10 02:42:03
categories:
- dns
tags:
- dns
- whois
- domain
- tools
- cn
thumbnail: https://steemitimages.com/DQmebxnS4zd9BJWpawGVEdcVEuBxP1oftXpeU1uovK2TyvU/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


Webmaster 最时常打交道的莫过于域名和网站了，将域名解析到网站是由DNS（域名解析服务）来完成的。域名解析服务简要来讲可以分为两个部分，一个是域名的NS信息，另外就是NS中的域名各项纪录(A记录、MX记录、CNAME记录等等）。

Whois是用于查询NS信息或者查询域名注册信息的服务。

![](https://steemitimages.com/DQmebxnS4zd9BJWpawGVEdcVEuBxP1oftXpeU1uovK2TyvU/image.png)
(图源 ：https://bing.com)

# EzDig

之前我介绍过我N年以前做的一个小工具EzDig，一个Windows下图形界面域名解析记录查询工具。详情可以参考我的老帖子：[《介绍一个我几年前做的小工具 EzDig》](https://steemit.com/cn/@oflyhigh/ezdig)。

![](https://steemitimages.com/DQmQKhPhWwBBQHpHw3Qcx66qu8TYrPBTjh7ppTrQ4pMZzgq/image.png)

# NS/Whois

其实查询域名解析记录我们还是有很多工具的，比如说Linux下的**`dig`**命令。但是，查询域名的NS信息呢？尽管EzDig也可以查询，但是由于域名解析记录是有存活时间(TTL)的，所以想即时地查询NS的修改是否生效，是略有不足的。另外，涉及到查询Whois信息，更是无能为力了。

网上有些在线查询的页面，但是因为他们要频繁的向whois 服务器发起查询请求，为了避免请求过于频繁而被whois服务器屏蔽，他们主动采取了缓存的策略，所以查询到的信息基本上都是不新鲜的。

另外一个比较权威的查询地址是：
https://www.internic.net/403/302/whois.html
但是它目前只支持查询（.aero, .arpa, .asia, .biz, .cat, .com, .coop, .edu, .info, .int, .jobs, .mobi, .museum, .name, .net, .org, .pro, or .travel）这些域名后缀的，比如说查询steem.io 或者arduino.cc 这里是查询不到的。

![](https://steemitimages.com/DQmSCDMdqCDLnZcsCCoQTbniUNS8eY7pjTkjcJ9KhexgxBz/image.png)

# EzWhois

为了解决上述查询NS或者Whois存在的问题，我特意做了一个小软件：EzWhois，具有如下特色：


* Check domain information
* Check Registrar information
* Check name server information
* Check IP information
* Check the popular Generic TLDs like .COM, .NET, .ORG, etc.
* Check Country Code TLDs (ccTLDs)
* Automatically directs the query to the right whois server
* Specified whois server
* Do RAW whois query
* Clear, copy, save the output window

最重要的是，它采用图形界面，简单易用。比如我们来查查`steem.io`

![](https://steemitimages.com/DQmTbWWVyQjHC1K4fMMV8VC2avLckJzwKKnXDAsBBeSYvTm/image.png)
从这个图中我们可以看到域名对应的顶级注册商是godaddy.com，注册时间到期时间等一目了然。

![](https://steemitimages.com/DQmYNxDVzHnbBykAHEbudY113ZoL7duXxVWENxaU4KboHnL/image.png)
从这个图中我们可以看到域名的NS设置，以及域名注册商（代理商），以及是否开启DNSSEC设置。

# Whois / Who is?

原本我的软件是支持直接返回域名Whois详情的，但是好多年没维护了，这些注册商返回的信息变了接口。所以返回到注册商一级就停掉了。不过对我而言这已经够用了，所以懒得去改了，但是能不能查询具体的Whois信息呢？答案是能的。

![](https://steemitimages.com/DQmecMt2nLGz6TpVyFhTFWm1Wv9zhuRVJUWVhzWxzDqEo44/image.png)
指定的whois查询服务器是从上边查询结果中得出的。可惜steem.io 设置了隐私保护，看不到一些具体的信息，比如说ned的私人信息等等。😀



# 相关链接

* https://www.internic.net/whois.html
* http://www.eztk.com/products/ezwhois.php
* https://whois.icann.org/en/technical-overview
* https://whois.icann.org/en/implementation
* [介绍一个我几年前做的小工具 EzDig](https://steemit.com/cn/@oflyhigh/ezdig)

- - -

This page is synchronized from the post: [使用EzWhois查询域名NS(Name Server)以及Whois信息](https://steemit.com/@oflyhigh/ezwhois-ns-name-server-whois)
