
---
title: '使用Certbot为网站安装SSL证书'
permlink: certbot-ssl
catalog: true
toc_nav_num: true
toc: true
date: 2018-08-02 03:29:33
categories:
- https
tags:
- https
- certbot
- encrypt
- ssl
- cn
thumbnail: https://cdn.steemitimages.com/DQmRToH6HcWessH6kEUraEuPjXqzNYAQDB4oBKM9G954ryj/image.png
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


在很早以前的文章[AutoSSL 以及HTTP到HTTPS URL 转发](https://steemit.com/https/@oflyhigh/autossl-http-https-url)，我曾提及cPanel(WHM)主机管理软件与Let's Encrypt合作提供了AutoSSL解决方案，使用这个方案，主机商只需简单设置就可以为服务器上的主机开启HTTPS。

最近使用Ubuntu+Apache+MySQL+PHP搭建博客玩，但是域名指定过来后只能HTTP访问，如果想开启HTTPS访问方式可咋办？自签名的证书不好看也不安全，购买证书还太贵，买个cPanel管理软件？那就更扯了。

不过既然cPanel的AutoSSL是和Let's Encrypt合作，那我去[Let's Encrypt](https://letsencrypt.org/)站点瞧瞧去，

![](https://cdn.steemitimages.com/DQmRToH6HcWessH6kEUraEuPjXqzNYAQDB4oBKM9G954ryj/image.png)
>Let’s Encrypt is a free, automated, and open Certificate Authority.

一进站点我就被首页的大图吸引啦，最重要的是，我看到了***Free***字样✌。赶紧点进[Getting Started](https://letsencrypt.org/getting-started/)瞧瞧，原来是用一个[certbot](https://certbot.eff.org/)的工具部署。

![](https://cdn.steemitimages.com/DQmT1eZVZM4qiLD7qmHQeX4CKGrDxA2y1jozDdbQbnd7FuF/image.png)
>Automatically enable HTTPS on your website with EFF's Certbot, deploying Let's Encrypt certificates.

按提示选择软件以及服务器环境后自动生成了安装步骤提示：
>`sudo apt-get update`
`sudo apt-get install software-properties-common`
`sudo add-apt-repository ppa:certbot/certbot`
`sudo apt-get update`
`sudo apt-get install certbot `

真友好啊，按这个步骤执行下来，安装certbot 。安装成功后再来为网站生成证书：
>`sudo certbot --apache`

因为我使用的是Apache，就是后边是`--apache`，接下来是个交互式的过程，你只需按软件提示一步步地输入或者选择就可以啦。我操作的时候忘记了截图，懒得重新弄一遍了，不过很简单啦，按提示做就好啦。

最后一步是强制把http的访问重定向到https访问上，建议都这样操作，然后按提示重启Apache就搞定了。再访问我们的网站，是不是地址栏里出现了一个漂亮的小锁头🔒，网址前缀也变成了HTTPS？

完美搞定
>![](https://cdn.steemitimages.com/DQmeE7KaUBp9q7Hie1qJsqJLs5VN2JSX6Edk9WEUuLwecce/image.png)

# 相关链接

* [Let's Encrypt](https://letsencrypt.org/)
* [certbot](https://certbot.eff.org/)

- - -

This page is synchronized from the post: [使用Certbot为网站安装SSL证书](https://steemit.com/@oflyhigh/certbot-ssl)
