
---
title: 'AutoSSL 以及HTTP到HTTPS URL 转发'
permlink: autossl-http-https-url
catalog: true
toc_nav_num: true
toc: true
date: 2018-03-04 14:03:54
categories:
- https
tags:
- https
- ssl
- cpanel
- autossl
- cn
thumbnail: https://steemitstageimages.com/DQmX1gbCcGicknnMUmDXXSJnX6JrqfRXxD4nBhwLx9ksGtF/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


大家都知道，~~地球越来越不安全了~~网络越来越不安全了，我们每天都离开不网络，也就是说每天面临无数的风险，比如信息被盗啊、计算机被黑啊、银行的钱变成别人的啊、比特币或者STEEM被人卖掉啊等等等等。

![](https://steemitstageimages.com/DQmX1gbCcGicknnMUmDXXSJnX6JrqfRXxD4nBhwLx9ksGtF/image.png)
（图源：[cPanel](https://blog.cpanel.com/autossl/)）

# cPanel & WHM’s AutoSSL
当然了，现在有好多新老技术从各个方面增加网络的安全性，各种各样的安全措施来降低风险，HTTPS是最常用也是最有用的一种啦，HTTP的话我们传输的信息都是明文的，而HTTPS则是加密的信息，可以有效的防止信息被中间节点截获。

所以最近几年各大网站纷纷都改成HTTPS方式，而Google等一线大厂商也力推HTTPS，像cPanel(WHM)这样的主机管理软件更是与Let's Encrypt合作提供了AutoSSL解决方案。

cPanel & WHM’s AutoSSL听起来似乎很复杂，简单的来讲，就是说如果你的站点没有购买和安装昂贵的SSL证书，cPanel自动给你安一个免费的好用的证书。是不是很令人兴奋，再也不用花每年几十上百美元买网站证书啦！

# AutoSSL不解决自动转发

好了，现在我们的网站已经自动安装上了SSL证书，我也可以用https://www.xxx.com 来访问我的网站啦(xxx.com是我举的例子，我可没有这么好的域名）。

一切都是那么完美，我也可以对我的客户们吹嘘，你看，我的网站使用的是安全链接HTTPS，和银行一个级别，你可以放心的在上边提交任何数据了（千万别上当哦）！

但是客户输入域名，直接访问，然后回复我：你这个骗子，当我白痴啊，人家安全站点，上边都显示小锁头![](https://steemitstageimages.com/DQmYpGKweXpC9t5SmuHCdmUK2pGKo3G8M9p9wSW4GH4Cxq1/image.png)，欺负我没见过世面吗？

调查了一下，其实原因在于站点的HTTP和HTTPS可以并存的，这就有问题啦，用户直接访问，很容易跑HTTP上去，毕竟要求用户敲入https:// 有点不人性，真是郁闷。

# 如何自动转发

其实自动转发很方便的，如果是cPanel主机，只需要在cPanel->Redirects->Add Redirect中添加如下设置即可：

![](https://steemitstageimages.com/DQmNht7yoMJLZBdGBd2vQHPYYoNB1cGj9k3Vd9DrQV5vEn7/image.png)

添加之后，结果大致是这个样子：
![](https://steemitstageimages.com/DQmTBTU6CnJWghCK37tyGEpcbGWrjMFP7cxf5ECqFhDm3u3/image.png)
是不是灰常简单？
(补充一下，cPanel中的重定向工具会导致嵌套重定向，需要再生成的代码中加上限定：`RewriteCond %{SERVER_PORT} 80`）

如果没有cPanel，但是使用Apche，也可以通过设置.htaccess来实现自动转发，代码如下：
```
RewriteEngine on
RewriteCond %{SERVER_PORT} 80
RewriteCond %{HTTP_HOST} ^xxxx\.net$ [OR]
RewriteCond %{HTTP_HOST} ^www\.xxxx\.net$
RewriteRule ^(.*)$ "https\:\/\/www\.xxxx\.net\/$1" [R=301,L]
```
其实cPanel的转发，就是通过.htaccess实现的啦。如果不是Apache，我就不懂啦，不过估计Google一下，一定不少方案，这里就不不懂装懂喽。

----

好了，就这样了，快去设置转发，然后找客户吹牛皮去吧。

# 参考链接

* [cPanel & WHM’s AutoSSL](https://blog.cpanel.com/autossl/)
* [Let's Encrypt](https://letsencrypt.org/getting-started/)

- - -

This page is synchronized from the post: [AutoSSL 以及HTTP到HTTPS URL 转发](https://steemit.com/@oflyhigh/autossl-http-https-url)
